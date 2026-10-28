// English strings used by the scripts (plans and prices, form messages, drawer labels, cookie banner).
// Page copy lives in i18n/en.json. Edit, then run: python3 tools/build.py (only needed for i18n/*.json).
window.FORA_L = (function () {
  var money = function (n) { return '£' + n.toFixed(2); };
  var L = {
  "content": {
    "product": {
      "freeShippingConfirmed": false
    },
    "plans": [
      {
        "id": "three_month",
        "event": "three_month_selected",
        "tag": "BEST VALUE",
        "name": "3-month subscription",
        "perMonth": "£29.99",
        "perMonthLabel": "/ month",
        "billed": "£89.97 billed every 3 months",
        "perDay": "£1.07",
        "saving": "Save 40% vs one-time",
        "note": "Build the habit properly.",
        "total": "£89.97",
        "totalLabel": "billed today, every 3 months",
        "defaultSelected": true,
        "totalNum": 89.97
      },
      {
        "id": "one_month",
        "event": "one_month_selected",
        "tag": "FLEXIBLE",
        "name": "1-month subscription",
        "perMonth": "£39.99",
        "perMonthLabel": "/ month",
        "billed": "Billed monthly",
        "perDay": "£1.43",
        "saving": "Save 20% vs one-time",
        "note": "Pause, skip or cancel.",
        "total": "£39.99",
        "totalLabel": "billed today, then monthly",
        "totalNum": 39.99
      },
      {
        "id": "one_time",
        "event": "one_time_selected",
        "tag": "",
        "name": "One-time purchase",
        "perMonth": "£49.99",
        "perMonthLabel": "",
        "billed": "One pouch · 28 daily packs",
        "perDay": "£1.79",
        "saving": "",
        "note": "No subscription.",
        "total": "£49.99",
        "totalLabel": "billed once",
        "totalNum": 49.99
      }
    ],
    "reviewFilters": [
      "Overall",
      "Gut",
      "Energy",
      "Immunity",
      "Taste",
      "Easy to Stick To"
    ],
    "reviews": [
      {
        "name": "[First name]",
        "tag": "Easy to Stick To",
        "stars": 5,
        "text": "[PLACEHOLDER: customer review about finally sticking to a daily habit]",
        "verified": true
      },
      {
        "name": "[First name]",
        "tag": "Taste",
        "stars": 5,
        "text": "[PLACEHOLDER: customer review about flavour / looking forward to it]",
        "verified": true
      },
      {
        "name": "[First name]",
        "tag": "Gut",
        "stars": 5,
        "text": "[PLACEHOLDER: digestion-tagged customer review]",
        "verified": true
      },
      {
        "name": "[First name]",
        "tag": "Energy",
        "stars": 5,
        "text": "[PLACEHOLDER: energy-tagged customer review]",
        "verified": true
      },
      {
        "name": "[First name]",
        "tag": "Immunity",
        "stars": 5,
        "text": "[PLACEHOLDER: immunity-tagged customer review]",
        "verified": true
      },
      {
        "name": "[First name]",
        "tag": "Easy to Stick To",
        "stars": 5,
        "text": "[PLACEHOLDER: 'day 28 and I haven't thought about it once' style review]",
        "verified": true
      }
    ],
    "nutrition": {
      "servingLabel": "Per serving (5 gummies · 14 g)",
      "rows": [
        {
          "label": "Energy",
          "per100": "570 kJ / 136 kcal",
          "perServing": "80 kJ / 19 kcal",
          "w": 700
        },
        {
          "label": "Fat",
          "per100": "0.0 g",
          "perServing": "0.0 g",
          "w": 700
        },
        {
          "label": "of which saturates",
          "per100": "0.0 g",
          "perServing": "0.0 g",
          "w": 400
        },
        {
          "label": "Carbohydrate",
          "per100": "48.3 g",
          "perServing": "6.8 g",
          "w": 700
        },
        {
          "label": "of which sugars",
          "per100": "0.0 g",
          "perServing": "0.0 g",
          "w": 400
        },
        {
          "label": "of which polyols",
          "per100": "48.3 g",
          "perServing": "6.8 g",
          "w": 400
        },
        {
          "label": "Protein",
          "per100": "0.0 g",
          "perServing": "0.0 g",
          "w": 700
        },
        {
          "label": "Fibre",
          "per100": "5.2 g",
          "perServing": "0.7 g",
          "w": 700
        },
        {
          "label": "Salt",
          "per100": "0.09 g",
          "perServing": "0.01 g",
          "w": 700
        }
      ],
      "actives": [
        [
          "Vitamin A (acetate)",
          "3225 IU",
          "16125 IU"
        ],
        [
          "of which active",
          "533.2 IU",
          "2666 IU"
        ],
        [
          "Vitamin C",
          "16 mg",
          "80 mg"
        ],
        [
          "Vitamin D3",
          "200 IU",
          "1000 IU"
        ],
        [
          "Vitamin E (acetate)",
          "6.49 mg",
          "32.43 mg"
        ],
        [
          "of which active",
          "2.4 mg",
          "12 mg"
        ],
        [
          "Vitamin K2",
          "15 µg",
          "75 µg"
        ],
        [
          "Vitamin B1 (hydrochloride)",
          "0.28 mg",
          "1.4 mg"
        ],
        [
          "of which active",
          "0.22 mg",
          "1.1 mg"
        ],
        [
          "Vitamin B2",
          "0.28 mg",
          "1.41 mg"
        ],
        [
          "of which active",
          "0.28 mg",
          "1.4 mg"
        ],
        [
          "Vitamin B3",
          "3.2 mg",
          "16 mg"
        ],
        [
          "Vitamin B5",
          "1.2 mg",
          "6 mg"
        ],
        [
          "Vitamin B6",
          "0.34 mg",
          "1.7 mg"
        ],
        [
          "Vitamin B7 (biotin)",
          "10 µg",
          "50 µg"
        ],
        [
          "Vitamin B9",
          "40 µg",
          "200 µg"
        ],
        [
          "Vitamin B12",
          "0.6 µg",
          "3 µg"
        ],
        [
          "Iron bisglycinate",
          "8.29 mg",
          "41.45 mg"
        ],
        [
          "of which elemental iron",
          "1.4 mg",
          "7 mg"
        ],
        [
          "Zinc citrate trihydrate",
          "931.7 µg",
          "4658.5 µg"
        ],
        [
          "of which elemental zinc",
          "300 µg",
          "1500 µg"
        ],
        [
          "Copper gluconate",
          "715.8 µg",
          "3579 µg"
        ],
        [
          "of which elemental copper",
          "100 µg",
          "500 µg"
        ],
        [
          "Manganese gluconate",
          "111.5 µg",
          "557.5 µg"
        ],
        [
          "of which elemental manganese",
          "100 µg",
          "500 µg"
        ],
        [
          "Potassium iodide",
          "98.7 µg",
          "493.5 µg"
        ],
        [
          "of which elemental iodine",
          "75 µg",
          "375 µg"
        ],
        [
          "Chromium picolinate",
          "16.4 µg",
          "82 µg"
        ],
        [
          "of which elemental chromium",
          "2 µg",
          "10 µg"
        ],
        [
          "Molybdenum",
          "5 µg",
          "25 µg"
        ],
        [
          "Sodium selenite",
          "3.62 µg",
          "18.1 µg"
        ],
        [
          "of which elemental selenium",
          "1.65 µg",
          "8.25 µg"
        ],
        [
          "Inulin",
          "80 mg",
          "400 mg"
        ],
        [
          "of which inulin",
          "79.2 mg",
          "396 mg"
        ],
        [
          "Wheatgrass powder",
          "5 mg",
          "25 mg"
        ],
        [
          "Barley grass powder",
          "5 mg",
          "25 mg"
        ],
        [
          "Chlorella algae",
          "5 mg",
          "25 mg"
        ],
        [
          "Spirulina algae powder",
          "5 mg",
          "25 mg"
        ],
        [
          "Kale leaf extract",
          "4 mg",
          "20 mg"
        ],
        [
          "Broccoli dry extract",
          "3 mg",
          "15 mg"
        ],
        [
          "Spinach powder",
          "3 mg",
          "15 mg"
        ],
        [
          "Parsley dry extract",
          "2 mg",
          "10 mg"
        ],
        [
          "Strawberry powder",
          "12.8 mg",
          "64 mg"
        ],
        [
          "Blueberry powder",
          "8.8 mg",
          "44 mg"
        ],
        [
          "Raspberry powder",
          "8.8 mg",
          "44 mg"
        ],
        [
          "Cranberry powder",
          "8.8 mg",
          "44 mg"
        ],
        [
          "Apple powder",
          "8.8 mg",
          "44 mg"
        ],
        [
          "Pomegranate powder",
          "8.8 mg",
          "44 mg"
        ],
        [
          "Goji berry powder",
          "6.8 mg",
          "34 mg"
        ],
        [
          "Tomato powder",
          "4.6 mg",
          "23 mg"
        ],
        [
          "Bacillus coagulans",
          "1 billion CFU",
          "5 billion CFU"
        ]
      ],
      "nrvNote": "% NRV is not stated in spec Rev 1.2. Add when the artwork label is approved."
    },
    "ingredientGroups": [
      {
        "name": "Greens",
        "count": "8",
        "items": [
          "Wheatgrass powder",
          "Barley grass powder",
          "Chlorella algae",
          "Spirulina algae powder",
          "Kale leaf extract (4:1)",
          "Broccoli dry extract (4:1)",
          "Spinach powder",
          "Parsley dry extract (4–5:1)"
        ]
      },
      {
        "name": "Fruit + vegetables",
        "count": "8",
        "items": [
          "Strawberry",
          "Raspberry",
          "Blueberry",
          "Apple",
          "Pomegranate",
          "Cranberry",
          "Goji berry",
          "Tomato"
        ]
      },
      {
        "name": "Vitamins + minerals",
        "count": "21",
        "items": [
          "Vitamin A",
          "C",
          "D3",
          "E",
          "K2",
          "B1",
          "B2",
          "B3",
          "B5",
          "B6",
          "B7 (biotin)",
          "B9 (folate)",
          "B12",
          "Iron",
          "Zinc",
          "Copper",
          "Manganese",
          "Iodine",
          "Chromium",
          "Molybdenum",
          "Selenium"
        ]
      },
      {
        "name": "Prebiotics",
        "count": "1",
        "items": [
          "Inulin, 400 mg per serving"
        ]
      },
      {
        "name": "Live cultures",
        "count": "1",
        "items": [
          "Bacillus coagulans, 5 billion CFU per serving"
        ]
      }
    ],
    "freeFrom": [
      "Zero sugar",
      "Free from all 14 declarable allergens",
      "Gluten-free",
      "Dairy-free",
      "Nut-free",
      "Pectin base, no gelatin",
      "Coloured with black carrot extract"
    ],
    "fullIngredientList": "Maltitol syrup, water, isomalt, sweetener: Fibersmart, sorbitol, gelling agent: pectin, bulking agent: inulin, gelling agent: corn starch, citric acid, vitamin C, strawberry powder, natural flavouring lemon, blueberry powder, raspberry powder, cranberry powder, natural flavouring raspberry, apple powder, pomegranate powder, iron bisglycinate, sweetener: stevia, vitamin K2, goji berry powder, Bacillus coagulans, vitamin E acetate, colour: black carrot extract, wheatgrass powder, barley grass powder, chlorella algae, spirulina algae powder, tomato powder, kale leaf extract, acidity regulator: trisodium citrate, vitamin B3, broccoli dry extract, spinach powder, sweetener: thaumatin, parsley dry extract, vitamin B5, vitamin A acetate, zinc citrate trihydrate, copper gluconate, vitamin B6 hydrochloride, vitamin D3, vitamin B2, vitamin B1 hydrochloride, manganese gluconate, potassium iodide, vitamin B12, vitamin B9, chromium picolinate, vitamin B7, molybdenum, sodium selenite, glazing agent: carnauba wax.",
    "sweeteners": "Maltitol syrup, isomalt and sorbitol (polyols) and Fibersmart, plus stevia and thaumatin.",
    "warnings": [
      "Do not exceed the stated recommended daily dose.",
      "Food supplements should not be used as a substitute for a varied and balanced diet and a healthy lifestyle.",
      "Keep out of reach of young children.",
      "Excessive consumption may produce laxative effects."
    ]
  },
  "ui": {
    "verified": "Verified purchase",
    "noReviews": "No reviews for this filter yet.",
    "checkoutTitle": "Checkout · Fora",
    "onePouch": "One pouch",
    "pouches": "{n} pouches",
    "dailyPacks": "{n} daily packs",
    "perDelivery": " per delivery",
    "sub1": "1 subscription",
    "subN": "{n} subscriptions",
    "pack1": "1 pack",
    "packN": "{n} packs",
    "typeSub": "Subscription · pause, skip or cancel",
    "typeOnce": "One-time · no subscription",
    "billed": {
      "three_month": "{total} every 3 months",
      "one_month": "{total} monthly",
      "one_time": "{total} once"
    },
    "deliveryFree": "Free UK delivery",
    "deliveryCalc": "Calculated at next step",
    "showSummary": "Show order summary",
    "hideSummary": "Hide order summary",
    "continuing": "Continuing…",
    "continueLabel": "Continue to delivery",
    "nutTitle": "Nutrition information",
    "typical": "Typical values",
    "per100": "Per 100 g",
    "actives": "Active ingredients",
    "perGummy": "Per gummy · per serving",
    "oneGummy": "1 gummy",
    "fiveGummies": "5 gummies",
    "containerNote": "Servings per container: 30 · Units per container: 150 · Net weight 420 g · Finished weight per gummy 2.8 g (± 5%)",
    "freeFrom": "Free from:",
    "ingredients": "Ingredients:",
    "sweeteners": "Sweeteners:",
    "pectinBase": "Base: pectin (no gelatin).",
    "storage": "Storage:",
    "storageText": "Store in tightly closed original packaging in a dry environment. Best before 24 months from manufacture when kept in a cool, dry place below 25°C, away from direct sunlight.",
    "warnings": "Warnings:"
  },
  "msg": {
    "first": "Please enter your first name.",
    "emailEmpty": "Please enter your email address.",
    "emailBad": "That email doesn’t look right — check for typos."
  },
  "consent": {
    "title": "Cookies",
    "text": "We would like to use analytics and advertising cookies (Google Analytics, PostHog and the Meta Pixel) to understand how the site is used, including heatmaps of clicks and scrolling, and to measure our advertising. They stay off unless you accept.",
    "privacy": "Privacy policy",
    "accept": "Accept",
    "decline": "Decline"
  }
};
  L.lang = 'en';
  L.money = money;
  L.paths = { privacyFromRoot: 'legal/privacy.html' };
  return L;
})();
