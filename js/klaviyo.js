// Klaviyo client-side helpers (public API key only, no server needed).
// Docs: https://developers.klaviyo.com/en/reference/create_client_subscription
(function () {
  var C = window.FORA_CONFIG || {};
  var REVISION = '2024-10-15';

  function isLive() { return !C.DRY_RUN && !!C.KLAVIYO_COMPANY_ID && !!C.KLAVIYO_LIST_ID; }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || '').trim()); }

  function post(path, body) {
    if (!isLive()) {
      console.info('[Klaviyo dry run] ' + path, JSON.stringify(body, null, 2));
      return Promise.resolve({ dryRun: true });
    }
    return fetch('https://a.klaviyo.com/client/' + path + '/?company_id=' + encodeURIComponent(C.KLAVIYO_COMPANY_ID), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'revision': REVISION },
      body: JSON.stringify(body)
    }).then(function (res) {
      if (!res.ok) throw new Error('Klaviyo responded ' + res.status);
      return { ok: true };
    });
  }

  // lead: { firstName, email, plan, planName, qty, total, source, angle }
  function subscribe(lead) {
    var properties = {
      source: lead.source || 'prelaunch_checkout',
      page: location.pathname,
      plan: lead.plan,
      plan_name: lead.planName,
      quantity: lead.qty,
      plan_total: lead.total
    };
    return post('subscriptions', {
      data: {
        type: 'subscription',
        attributes: {
          custom_source: properties.source,
          profile: { data: { type: 'profile', attributes: { email: lead.email, first_name: lead.firstName, properties: properties } } }
        },
        relationships: { list: { data: { type: 'list', id: C.KLAVIYO_LIST_ID || 'LIST_ID' } } }
      }
    });
  }

  function track(name, props, email) {
    if (!C.TRACK_EVENTS || !email) return Promise.resolve();
    return post('events', {
      data: {
        type: 'event',
        attributes: {
          properties: props || {},
          metric: { data: { type: 'metric', attributes: { name: name } } },
          profile: { data: { type: 'profile', attributes: { email: email } } }
        }
      }
    }).catch(function (e) { console.warn('Klaviyo event failed', e); });
  }

  window.ForaKlaviyo = { subscribe: subscribe, track: track, validEmail: validEmail, isLive: isLive };
})();
