// Deutsche strings used by the scripts (plans and prices, form messages, drawer labels, cookie banner).
// Page copy lives in i18n/de.json. Currency: euro sign with the same figures as the pound prices (29,99 €).
window.FORA_L = (function () {
  var money = function (n) { return n.toFixed(2).replace('.', ',') + ' €'; };
  var L = {
  "content": {
    "product": {
      "freeShippingConfirmed": false
    },
    "plans": [
      {
        "id": "three_month",
        "event": "three_month_selected",
        "tag": "BESTER PREIS",
        "name": "3-Monats-Abo",
        "perMonth": "29,99 €",
        "perMonthLabel": "/ Monat",
        "billed": "89,97 € alle 3 Monate abgerechnet",
        "perDay": "1,07 €",
        "saving": "40 % sparen gegenüber Einmalkauf",
        "note": "Baue die Gewohnheit richtig auf.",
        "total": "89,97 €",
        "totalNum": 89.97,
        "totalLabel": "heute abgerechnet, dann alle 3 Monate",
        "defaultSelected": true
      },
      {
        "id": "one_month",
        "event": "one_month_selected",
        "tag": "FLEXIBEL",
        "name": "1-Monats-Abo",
        "perMonth": "39,99 €",
        "perMonthLabel": "/ Monat",
        "billed": "Monatliche Abrechnung",
        "perDay": "1,43 €",
        "saving": "20 % sparen gegenüber Einmalkauf",
        "note": "Pausieren, überspringen oder kündigen.",
        "total": "39,99 €",
        "totalNum": 39.99,
        "totalLabel": "heute abgerechnet, dann monatlich"
      },
      {
        "id": "one_time",
        "event": "one_time_selected",
        "tag": "",
        "name": "Einmalkauf",
        "perMonth": "49,99 €",
        "perMonthLabel": "",
        "billed": "Ein Beutel · 28 Tagesbeutel",
        "perDay": "1,79 €",
        "saving": "",
        "note": "Kein Abo.",
        "total": "49,99 €",
        "totalNum": 49.99,
        "totalLabel": "einmalig abgerechnet"
      }
    ],
    "reviewFilters": [
      "Alle",
      "Darm",
      "Energie",
      "Immunsystem",
      "Geschmack",
      "Leicht durchzuhalten"
    ],
    "reviews": [
      {
        "name": "[Vorname]",
        "tag": "Leicht durchzuhalten",
        "stars": 5,
        "text": "[PLATZHALTER: Kundenbewertung darüber, endlich eine tägliche Routine durchzuhalten]",
        "verified": true
      },
      {
        "name": "[Vorname]",
        "tag": "Geschmack",
        "stars": 5,
        "text": "[PLATZHALTER: Kundenbewertung zum Geschmack / Vorfreude auf die Einnahme]",
        "verified": true
      },
      {
        "name": "[Vorname]",
        "tag": "Darm",
        "stars": 5,
        "text": "[PLATZHALTER: Kundenbewertung zum Thema Darm]",
        "verified": true
      },
      {
        "name": "[Vorname]",
        "tag": "Energie",
        "stars": 5,
        "text": "[PLATZHALTER: Kundenbewertung zum Thema Energie]",
        "verified": true
      },
      {
        "name": "[Vorname]",
        "tag": "Immunsystem",
        "stars": 5,
        "text": "[PLATZHALTER: Kundenbewertung zum Thema Immunsystem]",
        "verified": true
      },
      {
        "name": "[Vorname]",
        "tag": "Leicht durchzuhalten",
        "stars": 5,
        "text": "[PLATZHALTER: Bewertung im Stil von „Tag 28 und ich habe kein einziges Mal daran gedacht“]",
        "verified": true
      }
    ],
    "nutrition": {
      "servingLabel": "Pro Portion (5 Gummies · 14 g)",
      "rows": [
        {
          "label": "Brennwert",
          "per100": "570 kJ / 136 kcal",
          "perServing": "80 kJ / 19 kcal",
          "w": 700
        },
        {
          "label": "Fett",
          "per100": "0,0 g",
          "perServing": "0,0 g",
          "w": 700
        },
        {
          "label": "davon gesättigte Fettsäuren",
          "per100": "0,0 g",
          "perServing": "0,0 g",
          "w": 400
        },
        {
          "label": "Kohlenhydrate",
          "per100": "48,3 g",
          "perServing": "6,8 g",
          "w": 700
        },
        {
          "label": "davon Zucker",
          "per100": "0,0 g",
          "perServing": "0,0 g",
          "w": 400
        },
        {
          "label": "davon mehrwertige Alkohole (Polyole)",
          "per100": "48,3 g",
          "perServing": "6,8 g",
          "w": 400
        },
        {
          "label": "Eiweiß",
          "per100": "0,0 g",
          "perServing": "0,0 g",
          "w": 700
        },
        {
          "label": "Ballaststoffe",
          "per100": "5,2 g",
          "perServing": "0,7 g",
          "w": 700
        },
        {
          "label": "Salz",
          "per100": "0,09 g",
          "perServing": "0,01 g",
          "w": 700
        }
      ],
      "actives": [
        [
          "Vitamin A (Acetat)",
          "3225 I.E.",
          "16125 I.E."
        ],
        [
          "davon wirksam",
          "533,2 I.E.",
          "2666 I.E."
        ],
        [
          "Vitamin C",
          "16 mg",
          "80 mg"
        ],
        [
          "Vitamin D3",
          "200 I.E.",
          "1000 I.E."
        ],
        [
          "Vitamin E (Acetat)",
          "6,49 mg",
          "32,43 mg"
        ],
        [
          "davon wirksam",
          "2,4 mg",
          "12 mg"
        ],
        [
          "Vitamin K2",
          "15 µg",
          "75 µg"
        ],
        [
          "Vitamin B1 (Hydrochlorid)",
          "0,28 mg",
          "1,4 mg"
        ],
        [
          "davon wirksam",
          "0,22 mg",
          "1,1 mg"
        ],
        [
          "Vitamin B2",
          "0,28 mg",
          "1,41 mg"
        ],
        [
          "davon wirksam",
          "0,28 mg",
          "1,4 mg"
        ],
        [
          "Vitamin B3",
          "3,2 mg",
          "16 mg"
        ],
        [
          "Vitamin B5",
          "1,2 mg",
          "6 mg"
        ],
        [
          "Vitamin B6",
          "0,34 mg",
          "1,7 mg"
        ],
        [
          "Vitamin B7 (Biotin)",
          "10 µg",
          "50 µg"
        ],
        [
          "Vitamin B9 (Folat)",
          "40 µg",
          "200 µg"
        ],
        [
          "Vitamin B12",
          "0,6 µg",
          "3 µg"
        ],
        [
          "Eisenbisglycinat",
          "8,29 mg",
          "41,45 mg"
        ],
        [
          "davon elementares Eisen",
          "1,4 mg",
          "7 mg"
        ],
        [
          "Zinkcitrat-Trihydrat",
          "931,7 µg",
          "4658,5 µg"
        ],
        [
          "davon elementares Zink",
          "300 µg",
          "1500 µg"
        ],
        [
          "Kupfergluconat",
          "715,8 µg",
          "3579 µg"
        ],
        [
          "davon elementares Kupfer",
          "100 µg",
          "500 µg"
        ],
        [
          "Mangangluconat",
          "111,5 µg",
          "557,5 µg"
        ],
        [
          "davon elementares Mangan",
          "100 µg",
          "500 µg"
        ],
        [
          "Kaliumiodid",
          "98,7 µg",
          "493,5 µg"
        ],
        [
          "davon elementares Jod",
          "75 µg",
          "375 µg"
        ],
        [
          "Chrompicolinat",
          "16,4 µg",
          "82 µg"
        ],
        [
          "davon elementares Chrom",
          "2 µg",
          "10 µg"
        ],
        [
          "Molybdän",
          "5 µg",
          "25 µg"
        ],
        [
          "Natriumselenit",
          "3,62 µg",
          "18,1 µg"
        ],
        [
          "davon elementares Selen",
          "1,65 µg",
          "8,25 µg"
        ],
        [
          "Inulin",
          "80 mg",
          "400 mg"
        ],
        [
          "davon Inulin",
          "79,2 mg",
          "396 mg"
        ],
        [
          "Weizengraspulver",
          "5 mg",
          "25 mg"
        ],
        [
          "Gerstengraspulver",
          "5 mg",
          "25 mg"
        ],
        [
          "Chlorella-Algen",
          "5 mg",
          "25 mg"
        ],
        [
          "Spirulina-Algenpulver",
          "5 mg",
          "25 mg"
        ],
        [
          "Grünkohlblatt-Extrakt",
          "4 mg",
          "20 mg"
        ],
        [
          "Brokkoli-Trockenextrakt",
          "3 mg",
          "15 mg"
        ],
        [
          "Spinatpulver",
          "3 mg",
          "15 mg"
        ],
        [
          "Petersilien-Trockenextrakt",
          "2 mg",
          "10 mg"
        ],
        [
          "Erdbeerpulver",
          "12,8 mg",
          "64 mg"
        ],
        [
          "Blaubeerpulver",
          "8,8 mg",
          "44 mg"
        ],
        [
          "Himbeerpulver",
          "8,8 mg",
          "44 mg"
        ],
        [
          "Cranberrypulver",
          "8,8 mg",
          "44 mg"
        ],
        [
          "Apfelpulver",
          "8,8 mg",
          "44 mg"
        ],
        [
          "Granatapfelpulver",
          "8,8 mg",
          "44 mg"
        ],
        [
          "Goji-Beeren-Pulver",
          "6,8 mg",
          "34 mg"
        ],
        [
          "Tomatenpulver",
          "4,6 mg",
          "23 mg"
        ],
        [
          "Bacillus coagulans",
          "1 Mrd. KBE",
          "5 Mrd. KBE"
        ]
      ]
    },
    "ingredientGroups": [
      {
        "name": "Grünzeug",
        "count": "8",
        "items": [
          "Weizengraspulver",
          "Gerstengraspulver",
          "Chlorella-Algen",
          "Spirulina-Algenpulver",
          "Grünkohlblatt-Extrakt (4:1)",
          "Brokkoli-Trockenextrakt (4:1)",
          "Spinatpulver",
          "Petersilien-Trockenextrakt (4–5:1)"
        ]
      },
      {
        "name": "Obst + Gemüse",
        "count": "8",
        "items": [
          "Erdbeere",
          "Himbeere",
          "Blaubeere",
          "Apfel",
          "Granatapfel",
          "Cranberry",
          "Goji-Beere",
          "Tomate"
        ]
      },
      {
        "name": "Vitamine + Mineralstoffe",
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
          "B7 (Biotin)",
          "B9 (Folat)",
          "B12",
          "Eisen",
          "Zink",
          "Kupfer",
          "Mangan",
          "Jod",
          "Chrom",
          "Molybdän",
          "Selen"
        ]
      },
      {
        "name": "Präbiotika",
        "count": "1",
        "items": [
          "Inulin, 400 mg pro Portion"
        ]
      },
      {
        "name": "Lebende Kulturen",
        "count": "1",
        "items": [
          "Bacillus coagulans, 5 Milliarden KBE pro Portion"
        ]
      }
    ],
    "freeFrom": [
      "Zuckerfrei",
      "Frei von allen 14 deklarationspflichtigen Allergenen",
      "Glutenfrei",
      "Milchfrei",
      "Nussfrei",
      "Pektinbasis, ohne Gelatine",
      "Gefärbt mit Extrakt aus schwarzen Karotten"
    ],
    "fullIngredientList": "Maltitsirup, Wasser, Isomalt, Süßungsmittel: Fibersmart, Sorbit, Geliermittel: Pektin, Füllstoff: Inulin, Geliermittel: Maisstärke, Säuerungsmittel: Citronensäure, Vitamin C, Erdbeerpulver, natürliches Aroma Zitrone, Blaubeerpulver, Himbeerpulver, Cranberrypulver, natürliches Aroma Himbeere, Apfelpulver, Granatapfelpulver, Eisenbisglycinat, Süßungsmittel: Stevia, Vitamin K2, Goji-Beeren-Pulver, Bacillus coagulans, Vitamin-E-Acetat, Farbstoff: Extrakt aus schwarzen Karotten, Weizengraspulver, Gerstengraspulver, Chlorella-Algen, Spirulina-Algenpulver, Tomatenpulver, Grünkohlblatt-Extrakt, Säureregulator: Trinatriumcitrat, Vitamin B3, Brokkoli-Trockenextrakt, Spinatpulver, Süßungsmittel: Thaumatin, Petersilien-Trockenextrakt, Vitamin B5, Vitamin-A-Acetat, Zinkcitrat-Trihydrat, Kupfergluconat, Vitamin-B6-Hydrochlorid, Vitamin D3, Vitamin B2, Vitamin-B1-Hydrochlorid, Mangangluconat, Kaliumiodid, Vitamin B12, Vitamin B9, Chrompicolinat, Vitamin B7, Molybdän, Natriumselenit, Überzugsmittel: Carnaubawachs.",
    "sweeteners": "Maltitsirup, Isomalt und Sorbit (Polyole) und Fibersmart sowie Stevia und Thaumatin.",
    "warnings": [
      "Die angegebene empfohlene Tagesverzehrmenge darf nicht überschritten werden.",
      "Nahrungsergänzungsmittel sollten nicht als Ersatz für eine abwechslungsreiche, ausgewogene Ernährung und eine gesunde Lebensweise verwendet werden.",
      "Außerhalb der Reichweite von kleinen Kindern aufbewahren.",
      "Übermäßiger Verzehr kann abführend wirken."
    ]
  },
  "ui": {
    "verified": "Verifizierter Kauf",
    "noReviews": "Für diesen Filter gibt es noch keine Bewertungen.",
    "checkoutTitle": "Kasse · Fora",
    "onePouch": "Ein Beutel",
    "pouches": "{n} Beutel",
    "dailyPacks": "{n} Tagesbeutel",
    "perDelivery": " pro Lieferung",
    "sub1": "1 Abo",
    "subN": "{n} Abos",
    "pack1": "1 Packung",
    "packN": "{n} Packungen",
    "typeSub": "Abo · pausieren, überspringen oder kündigen",
    "typeOnce": "Einmalkauf · kein Abo",
    "billed": {
      "three_month": "{total} alle 3 Monate",
      "one_month": "{total} monatlich",
      "one_time": "{total} einmalig"
    },
    "deliveryFree": "Kostenloser Versand in Großbritannien",
    "deliveryCalc": "Wird im nächsten Schritt berechnet",
    "showSummary": "Bestellübersicht anzeigen",
    "hideSummary": "Bestellübersicht ausblenden",
    "continuing": "Weiter…",
    "continueLabel": "Weiter zur Lieferung",
    "nutTitle": "Nährwertangaben",
    "typical": "Durchschnittliche Werte",
    "per100": "Pro 100 g",
    "actives": "Wirkstoffe",
    "perGummy": "Pro Gummy · pro Portion",
    "oneGummy": "1 Gummy",
    "fiveGummies": "5 Gummies",
    "containerNote": "Portionen pro Packung: 30 · Einheiten pro Packung: 150 · Nettogewicht 420 g · Fertiges Gewicht pro Gummy 2,8 g (± 5 %)",
    "freeFrom": "Frei von:",
    "ingredients": "Zutaten:",
    "sweeteners": "Süßungsmittel:",
    "pectinBase": "Basis: Pektin (ohne Gelatine).",
    "storage": "Lagerung:",
    "storageText": "In der fest verschlossenen Originalverpackung trocken lagern. Mindestens haltbar 24 Monate ab Herstellung, wenn kühl und trocken bei unter 25 °C und vor direkter Sonneneinstrahlung geschützt gelagert.",
    "warnings": "Warnhinweise:"
  },
  "msg": {
    "first": "Bitte gib deinen Vornamen ein.",
    "emailEmpty": "Bitte gib deine E-Mail-Adresse ein.",
    "emailBad": "Diese E-Mail-Adresse sieht nicht richtig aus – bitte auf Tippfehler prüfen."
  },
  "consent": {
    "title": "Cookies",
    "text": "Wir möchten Analyse- und Werbe-Cookies (Google Analytics, PostHog und das Meta-Pixel) einsetzen, um zu verstehen, wie die Website genutzt wird, einschließlich Heatmaps zu Klicks und Scrollverhalten, und um unsere Werbung zu messen. Sie bleiben ausgeschaltet, solange Sie nicht zustimmen.",
    "privacy": "Datenschutzerklärung",
    "accept": "Akzeptieren",
    "decline": "Ablehnen"
  }
};
  L.lang = 'de';
  L.money = money;
  L.paths = { privacyFromRoot: 'de/legal/privacy.html' };
  return L;
})();
