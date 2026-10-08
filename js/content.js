// Classic-script twin of the ES module of the same name (kept in sync for publishing: no dynamic import needed).
(function(){
  var FORA_CONTENT = window.FORA_CONTENT = window.FORA_CONTENT || {};
// FORA: structured content. Edit here, never in components.
// tbc:true marks values that must be replaced with final approved label data.
FORA_CONTENT.TBC = "[TBC: REPLACE WITH FINAL APPROVED LABEL CLAIM]";

FORA_CONTENT.product = {
  name: "Fora Daily Health Boost Super Greens+ Gummies",
  eyebrow: "DAILY HEALTH BOOST · SUPER GREENS+ GUMMIES",
  flavour: "raspberry-lemon",   // per spec Rev 1.2; swappable copy layer
  packs: 28,
  gummiesPerPack: { value: "5", tbc: false, note: "Spec Rev 1.2: recommended daily portion 5 gummies (14 g)." },
  servingSize: "5 gummies (14 g)",
  gummyWeight: "2.8 g (± 5%)",
  shelfLife: "24 months from date of manufacture when stored in a cool, dry place below 25°C and away from direct sunlight.",
  storage: "Store in tightly closed original packaging in a dry environment.",
  specRef: "SPEC-CLAI-ADULTM-26-001 Rev 1.2 (issued 2026-09-22, effective 2026-09-23)",
  servingsPerContainer: 30,
  unitsPerContainer: 150,
  netWeight: "420 g",
  guaranteeDays: 28,
  freeShippingConfirmed: false,
};

FORA_CONTENT.reviewsSummary = { score: "4.8", count: "186", tbc: false };

FORA_CONTENT.plans = [
  { id: "three_month", event: "three_month_selected", tag: "BEST VALUE", name: "3-month subscription", perMonth: "£29.99", perMonthLabel: "/ month", billed: "£89.97 billed every 3 months", perDay: "£1.07", saving: "Save 40% vs one-time", note: "Build the habit properly.", total: "£89.97", totalLabel: "billed today, every 3 months", defaultSelected: true },
  { id: "one_month", event: "one_month_selected", tag: "FLEXIBLE", name: "1-month subscription", perMonth: "£39.99", perMonthLabel: "/ month", billed: "Billed monthly", perDay: "£1.43", saving: "Save 20% vs one-time", note: "Pause, skip or cancel.", total: "£39.99", totalLabel: "billed today, then monthly" },
  { id: "one_time", event: "one_time_selected", tag: "", name: "One-time purchase", perMonth: "£49.99", perMonthLabel: "", billed: "One pouch · 28 daily packs", perDay: "£1.79", saving: "", note: "No subscription.", total: "£49.99", totalLabel: "billed once" },
];

FORA_CONTENT.headlineCounts = [
  { value: "39", label: "active ingredients", tbc: false },
  { value: "21", label: "vitamins + minerals", tbc: false },
  { value: "5 bn", label: "CFU live cultures", tbc: false },
  { value: "0 g", label: "sugar", tbc: false },
];

FORA_CONTENT.boosts = {
  gut: { n: "GUT BOOST", benefit: "Daily prebiotic support and greens for a happier gut.", mechanism: "Prebiotic inulin helps nourish the bacteria in your gut, paired with 5 billion CFU of Bacillus coagulans in every daily serving.", mechanismTbc: false, proof: ["Inulin 400 mg", "B. coagulans 5 bn CFU", "Fibre", "Spirulina", "Chlorella", "Kale", "Wheatgrass"], proofTbc: false, claim: "Gut boost is brand language on pack. Spec Rev 1.2 declares 0.7 g fibre per serving (5.2 g per 100 g). CFU count (5 bn) is on spec." },
  immune: { n: "IMMUNE BOOST", benefit: "Immune support, every single day. Immunity is a habit, not an emergency.", mechanism: "Vitamin C, vitamin D and zinc contribute to the normal function of the immune system. One pack, every day, so you don't have to remember.", mechanismTbc: true, proof: ["Vitamin C", "Vitamin D3", "Zinc", "Selenium"], proofTbc: false, claim: "Authorised: 'contributes to the normal function of the immune system'. Never 'prevents colds'." },
  energy: { n: "ENERGY BOOST", benefit: "The B vitamins your 3pm is missing. No caffeine. No crash.", mechanism: "B vitamins, vitamin C and iron contribute to normal energy-yielding metabolism and the reduction of tiredness and fatigue.", mechanismTbc: true, proof: ["Full B-complex", "Vitamin C", "Iron", "Folate", "No caffeine"], proofTbc: false, claim: "Authorised: 'normal energy-yielding metabolism' / 'reduction of tiredness and fatigue'. Never 'instant energy'." },
};

// Source: SPEC-CLAI-ADULTM-26-001 Rev 1.2: active ingredient declaration + ingredient list.
FORA_CONTENT.ingredientGroups = [
  { name: "GREENS", count: "8", items: ["Wheatgrass powder", "Barley grass powder", "Chlorella algae", "Spirulina algae powder", "Kale leaf extract (4:1)", "Broccoli dry extract (4:1)", "Spinach powder", "Parsley dry extract (4–5:1)"], tbc: false },
  { name: "FRUIT + VEGETABLES", count: "8", items: ["Strawberry", "Raspberry", "Blueberry", "Apple", "Pomegranate", "Cranberry", "Goji berry", "Tomato"], tbc: false },
  { name: "VITAMINS + MINERALS", count: "21", items: ["Vitamin A", "C", "D3", "E", "K2", "B1", "B2", "B3", "B5", "B6", "B7 (biotin)", "B9 (folate)", "B12", "Iron", "Zinc", "Copper", "Manganese", "Iodine", "Chromium", "Molybdenum", "Selenium"], tbc: false },
  { name: "PREBIOTICS", count: "1", items: ["Inulin, 400 mg per serving"], tbc: false },
  { name: "LIVE CULTURES", count: "1", items: ["Bacillus coagulans, 5 billion CFU per serving"], tbc: false },
];

FORA_CONTENT.freeFrom = ["Zero sugar", "Free from all 14 declarable allergens", "Gluten-free", "Dairy-free", "Nut-free", "Pectin base, no gelatin", "Coloured with black carrot extract"];
FORA_CONTENT.freeFromTbc = false;
FORA_CONTENT.fullIngredientList = "Maltitol syrup, water, isomalt, sweetener: Fibersmart, sorbitol, gelling agent: pectin, bulking agent: inulin, gelling agent: corn starch, citric acid, vitamin C, strawberry powder, natural flavouring lemon, blueberry powder, raspberry powder, cranberry powder, natural flavouring raspberry, apple powder, pomegranate powder, iron bisglycinate, sweetener: stevia, vitamin K2, goji berry powder, Bacillus coagulans, vitamin E acetate, colour: black carrot extract, wheatgrass powder, barley grass powder, chlorella algae, spirulina algae powder, tomato powder, kale leaf extract, acidity regulator: trisodium citrate, vitamin B3, broccoli dry extract, spinach powder, sweetener: thaumatin, parsley dry extract, vitamin B5, vitamin A acetate, zinc citrate trihydrate, copper gluconate, vitamin B6 hydrochloride, vitamin D3, vitamin B2, vitamin B1 hydrochloride, manganese gluconate, potassium iodide, vitamin B12, vitamin B9, chromium picolinate, vitamin B7, molybdenum, sodium selenite, glazing agent: carnauba wax.";
FORA_CONTENT.sweeteners = "Maltitol syrup, isomalt and sorbitol (polyols) and Fibersmart, plus stevia and thaumatin.";
FORA_CONTENT.warnings = ["Do not exceed the stated recommended daily dose.", "Food supplements should not be used as a substitute for a varied and balanced diet and a healthy lifestyle.", "Keep out of reach of young children.", "Excessive consumption may produce laxative effects."];

// Nutrition declaration, spec Rev 1.2. Serving = 5 gummies (14 g).
FORA_CONTENT.nutrition = {
  servingLabel: "Per serving (5 gummies · 14 g)",
  rows: [
    { label: "Energy", per100: "570 kJ / 136 kcal", perServing: "80 kJ / 19 kcal", w: 700 },
    { label: "Fat", per100: "0.0 g", perServing: "0.0 g", w: 700 },
    { label: "of which saturates", per100: "0.0 g", perServing: "0.0 g", w: 400 },
    { label: "Carbohydrate", per100: "48.3 g", perServing: "6.8 g", w: 700 },
    { label: "of which sugars", per100: "0.0 g", perServing: "0.0 g", w: 400 },
    { label: "of which polyols", per100: "48.3 g", perServing: "6.8 g", w: 400 },
    { label: "Protein", per100: "0.0 g", perServing: "0.0 g", w: 700 },
    { label: "Fibre", per100: "5.2 g", perServing: "0.7 g", w: 700 },
    { label: "Salt", per100: "0.09 g", perServing: "0.01 g", w: 700 },
  ],
  actives: [
    ["Vitamin A (acetate)", "3225 IU", "16125 IU"], ["of which active", "533.2 IU", "2666 IU"], ["Vitamin C", "16 mg", "80 mg"], ["Vitamin D3", "200 IU", "1000 IU"], ["Vitamin E (acetate)", "6.49 mg", "32.43 mg"], ["of which active", "2.4 mg", "12 mg"], ["Vitamin K2", "15 µg", "75 µg"],
    ["Vitamin B1 (hydrochloride)", "0.28 mg", "1.4 mg"], ["of which active", "0.22 mg", "1.1 mg"], ["Vitamin B2", "0.28 mg", "1.41 mg"], ["of which active", "0.28 mg", "1.4 mg"], ["Vitamin B3", "3.2 mg", "16 mg"], ["Vitamin B5", "1.2 mg", "6 mg"], ["Vitamin B6", "0.34 mg", "1.7 mg"],
    ["Vitamin B7 (biotin)", "10 µg", "50 µg"], ["Vitamin B9", "40 µg", "200 µg"], ["Vitamin B12", "0.6 µg", "3 µg"],
    ["Iron bisglycinate", "8.29 mg", "41.45 mg"], ["of which elemental iron", "1.4 mg", "7 mg"], ["Zinc citrate trihydrate", "931.7 µg", "4658.5 µg"], ["of which elemental zinc", "300 µg", "1500 µg"], ["Copper gluconate", "715.8 µg", "3579 µg"], ["of which elemental copper", "100 µg", "500 µg"], ["Manganese gluconate", "111.5 µg", "557.5 µg"], ["of which elemental manganese", "100 µg", "500 µg"], ["Potassium iodide", "98.7 µg", "493.5 µg"], ["of which elemental iodine", "75 µg", "375 µg"], ["Chromium picolinate", "16.4 µg", "82 µg"], ["of which elemental chromium", "2 µg", "10 µg"], ["Molybdenum", "5 µg", "25 µg"], ["Sodium selenite", "3.62 µg", "18.1 µg"], ["of which elemental selenium", "1.65 µg", "8.25 µg"],
    ["Inulin", "80 mg", "400 mg"], ["of which inulin", "79.2 mg", "396 mg"], ["Wheatgrass powder", "5 mg", "25 mg"], ["Barley grass powder", "5 mg", "25 mg"], ["Chlorella algae", "5 mg", "25 mg"], ["Spirulina algae powder", "5 mg", "25 mg"], ["Kale leaf extract", "4 mg", "20 mg"], ["Broccoli dry extract", "3 mg", "15 mg"], ["Spinach powder", "3 mg", "15 mg"], ["Parsley dry extract", "2 mg", "10 mg"],
    ["Strawberry powder", "12.8 mg", "64 mg"], ["Blueberry powder", "8.8 mg", "44 mg"], ["Raspberry powder", "8.8 mg", "44 mg"], ["Cranberry powder", "8.8 mg", "44 mg"], ["Apple powder", "8.8 mg", "44 mg"], ["Pomegranate powder", "8.8 mg", "44 mg"], ["Goji berry powder", "6.8 mg", "34 mg"], ["Tomato powder", "4.6 mg", "23 mg"],
    ["Bacillus coagulans", "1 billion CFU", "5 billion CFU"],
  ],
  nrvNote: "% NRV is not stated in spec Rev 1.2. Add when the artwork label is approved.",
};

FORA_CONTENT.reviewFilters = ["Overall", "Gut", "Energy", "Immunity", "Taste", "Easy to Stick To"];

// PLACEHOLDER reviews. Replace with genuine, dated, consented reviews from the reviews platform.
FORA_CONTENT.reviews = [
  { name: "[First name]", tag: "Easy to Stick To", stars: 5, text: "[PLACEHOLDER: customer review about finally sticking to a daily habit]", verified: true },
  { name: "[First name]", tag: "Taste", stars: 5, text: "[PLACEHOLDER: customer review about flavour / looking forward to it]", verified: true },
  { name: "[First name]", tag: "Gut", stars: 5, text: "[PLACEHOLDER: digestion-tagged customer review]", verified: true },
  { name: "[First name]", tag: "Energy", stars: 5, text: "[PLACEHOLDER: energy-tagged customer review]", verified: true },
  { name: "[First name]", tag: "Immunity", stars: 5, text: "[PLACEHOLDER: immunity-tagged customer review]", verified: true },
  { name: "[First name]", tag: "Easy to Stick To", stars: 5, text: "[PLACEHOLDER: 'day 28 and I haven't thought about it once' style review]", verified: true },
];

FORA_CONTENT.comparison = {
  priceChecked: "10 September 2026",
  columns: ["FORA", "GREENS POWDER", "PILL ROUTINE"],
  rows: [
    { label: "Daily routine", values: ["30 seconds", "Scoop, shake, rinse", "Count out 4–6 pills"] },
    { label: "Water required", values: [true, false, false], boolMeaning: ["None", "Yes", "Yes"] },
    { label: "Portable daily packs", values: ["28 individual packs", "One tub", "Bottles or organiser"] },
    { label: "Sugar", values: ["0 g", "Varies by brand", "Varies by brand"] },
    { label: "Take anywhere", values: ["Desk, train, gym bag", "Needs a shaker + sink", "Needs a bottle + water"] },
    { label: "Serving format", values: ["Gummies", "Powder", "Tablets / capsules"] },
    { label: "Price per day", values: ["≈ £1.07 (3-month plan)", "≈ £2.60+", "Varies"], editable: true },
    { label: "Nutrition breadth", values: ["39 actives · 21 vitamins + minerals", "Varies by brand", "One nutrient per bottle"], tbc: false },
  ],
};

// Editable. Verify every price before publication. Sources dated in comparison.priceChecked.
FORA_CONTENT.valueStack = {
  items: [
    { name: "Greens powder", price: "£79", perMonth: "/ month" },
    { name: "Multivitamin", price: "£12", perMonth: "/ month" },
    { name: "Fibre supplement", price: "£15", perMonth: "/ month" },
    { name: "Gut supplement", price: "£25", perMonth: "/ month" },
  ],
  total: "£131",
  fora: { price: "£29.99", perMonth: "/ month", perDay: "≈ £1.07 / day", plan: "on the 3-month plan" },
};

FORA_CONTENT.guarantee = {
  days: "28",
  h1: "LOVE THE HABIT\nOR LET US KNOW.",
  body: "Try your first pack properly. If Fora isn't for you, contact us within 28 days.",
  tbc: true,
};

FORA_CONTENT.faqs = [
  { q: "What does Fora taste like?", a: "Raspberry and lemon. Natural flavours, no earthy greens aftertaste. Zero sugar." },
  { q: "Is Fora really zero sugar?", a: "Yes. 0.0 g sugars per serving and per 100 g. Sweetness comes from polyols with stevia and thaumatin." },
  { q: "What sweetener does Fora use?", a: "Sugar-free polyols, plus stevia and thaumatin. No sugar, no artificial colours. The green comes from black carrot extract." },
  { q: "How many gummies are in one daily pack?", a: "One pack is one serving: 5 gummies (14 g)." },
  { q: "When should I take Fora?", a: "Whenever you'll remember. Morning, desk, train, 3pm. It needs no water, so it fits wherever your day is." },
  { q: "Do I need water?", a: "No. Tear, chew, done." },
  { q: "What exactly is inside Fora?", a: "39 active ingredients: 8 greens, 8 fruits and vegetables, 21 vitamins and minerals, prebiotic inulin, and Bacillus coagulans live cultures (5 billion CFU per serving). The full ingredient list and nutrition information are under 'What's inside' above." },
  { q: "Is Fora vegan?", a: "Fora uses a pectin base, not gelatin." },
  { q: "Does it contain gluten, dairy or nuts?", a: "No. Fora is free from all 14 declarable allergens, including gluten-containing cereals, milk, peanuts, tree nuts, soya, eggs, fish, crustaceans, molluscs, celery, mustard, sesame, sulphites and lupin." },
  { q: "Can I pause or cancel my subscription?", a: "Yes. Pause, skip or cancel any time from your account. No phone call required. You'll get a reminder before every charge." },
  { q: "When will my order arrive?", a: "Your order will arrive within 3 working days. If you subscribe, you'll also get free UK delivery on every order." },
  { q: "What does the guarantee cover?", a: "Try your first pack properly. If Fora isn't for you, contact us within 28 days." },
  { q: "Is Fora suitable for everyone?", a: "Fora is a food supplement for adults. Do not exceed the stated recommended daily dose. Food supplements should not be used as a substitute for a varied and balanced diet and a healthy lifestyle. Keep out of reach of young children. Excessive consumption may produce laxative effects. If you are pregnant, breastfeeding, on medication or have a medical condition, speak to your GP first." },
  { q: "How should I store Fora?", a: "In its tightly closed original packaging, in a cool, dry place below 25°C and away from direct sunlight. Shelf life is 24 months from the date of manufacture." },
  { q: "Do I need to take anything else alongside Fora?", a: "Fora is designed as a daily nutrition backup, not a replacement for food." },
];

FORA_CONTENT.footerLinks = [
  ["Shop", "About Fora", "Ingredients", "FAQ"],
  ["Contact", "Shipping", "Returns", "Manage Subscription"],
  ["Privacy", "Terms", "Instagram", "TikTok"],
];

FORA_CONTENT.settings = ["Desk", "Train", "Gym bag", "Kitchen", "Travelling"];

// Landing-page angles. Everything beneath these slots reuses the same components.
FORA_CONTENT.angles = {
  master: { label: "Master PDP", h1: "THE HEALTHY HABIT\nYOU'LL ACTUALLY KEEP.", sub: "Serious daily nutrition without the scoop, shaker or pill drawer. One zero-sugar daily pack designed to support your gut, immunity and energy.", proof: ["ONE PACK.", "THREE BOOSTS.", "ZERO SUGAR.", "DONE."], proofNote: "", boostOrder: ["gut", "immune", "energy"], cta: "START MY HABIT", reviewFilter: "Overall", problem: ["The shaker in the sink.", "The tub at the back of the cupboard.", "The six supplement bottles.", "The routine you forgot on day twelve."] },
  gut: { label: "Gut", h1: "GUT BOOST.\nWITHOUT THE POWDER.", sub: "Prebiotics and greens in one zero-sugar daily pack. No scoop, no shaker, no grim aftertaste.", proof: ["YOUR GUT WANTS 30 g", "OF FIBRE A DAY.", "YOU'RE GETTING", "ABOUT 19."], proofNote: "UK average vs recommendation. Verify latest NDNS figure before use.", boostOrder: ["gut", "immune", "energy"], cta: "START MY GUT HABIT", reviewFilter: "Gut", problem: ["The tub at the back of the cupboard.", "The shaker in the sink.", "The routine you forgot on day twelve.", "The bloated 3pm you meant to fix."] },
  energy: { label: "Energy", h1: "ENERGY BOOST.\nNO CAFFEINE. NO CRASH.", sub: "A full B-complex, vitamin C and iron for normal energy, in 30 seconds a day.", proof: ["NOT A COFFEE.", "NOT A CRASH.", "JUST THE B VITAMINS", "YOUR 3PM IS MISSING."], proofNote: "", boostOrder: ["energy", "gut", "immune"], cta: "START MY ENERGY HABIT", reviewFilter: "Energy", problem: ["The third coffee.", "The six supplement bottles.", "The routine you forgot on day twelve.", "The shaker in the sink."] },
  immunity: { label: "Immunity", h1: "IMMUNE BOOST.\nEVERY SINGLE DAY.", sub: "Vitamin C, D3 and zinc daily. The habit that gets you through winter.", proof: ["COLD SEASON", "IS COMING.", "SO IS YOUR", "28-DAY HEAD START."], proofNote: "", boostOrder: ["immune", "energy", "gut"], cta: "START MY WINTER HABIT", reviewFilter: "Immunity", problem: ["The vitamins you meant to take.", "The office lurgy that didn't care.", "The six supplement bottles.", "The routine you forgot on day twelve."] },
  powder: { label: "Swap your powder", h1: "EVERYTHING YOU WANTED FROM\nYOUR GREENS POWDER. NONE OF THE FAFF.", sub: "Greens, fruit and veg, vitamins and minerals, zero sugar. No scoop, no shaker, about £1 a day.", proof: ["GREENS POWDERS", "ARE A CHORE.", "THIS IS", "A TREAT."], proofNote: "", boostOrder: ["gut", "energy", "immune"], cta: "MAKE THE SWAP", reviewFilter: "Taste", problem: ["The shaker in the sink.", "The tub at the back of the cupboard.", "The £79 you paid for it.", "The three weeks it lasted."] },
  daily: { label: "Daily nutrition backup", h1: "YOUR DAILY\nNUTRITION BACKUP.", sub: "For the days lunch was a meal deal: greens, fruit, veg and vitamins and minerals in one pack.", proof: ["ONLY 1 IN 3 UK ADULTS", "HIT 5-A-DAY.", "FORA IS", "THE BACKUP PLAN."], proofNote: "NDNS statistic. Verify latest published figure before use.", boostOrder: ["gut", "immune", "energy"], cta: "COVER MY GAPS", reviewFilter: "Overall", problem: ["The meal deal.", "The biscuit that was lunch.", "The six supplement bottles.", "The routine you forgot on day twelve."] },
  badat: { label: "Bad at supplements", h1: "FOR PEOPLE WHO ARE\nBAD AT SUPPLEMENTS.", sub: "Tear, chew, done. One pack a day, anywhere. No water, no pills, no routine to remember.", proof: ["THE BEST SUPPLEMENT", "IS THE ONE", "YOU ACTUALLY", "TAKE."], proofNote: "", boostOrder: ["gut", "immune", "energy"], cta: "MAKE IT EASY", reviewFilter: "Easy to Stick To", problem: ["Every January you try.", "Every February you stop.", "The six supplement bottles.", "The routine you forgot on day twelve."] },
  zerosugar: { label: "Zero sugar", h1: "ALL THE GUMMY.\nNONE OF THE SUGAR.", sub: "Zero sugar, pectin base, real greens, and it still tastes like raspberry and lemon.", proof: ["MOST GUMMY VITAMINS", "ARE SWEETS WITH", "A VITAMIN IN THEM.", "FORA IS 0 g SUGAR."], proofNote: "", boostOrder: ["gut", "immune", "energy"], cta: "GO ZERO SUGAR", reviewFilter: "Taste", problem: ["The gummy that was basically sweets.", "The powder that tasted like a pond.", "The six supplement bottles.", "The routine you forgot on day twelve."] },
  pound: { label: "£1 a day", h1: "PREMIUM GREENS.\nABOUT £1 A DAY.", sub: "The full daily greens routine for less than your coffee, on the 3-month plan.", proof: ["GREENS POWDER £79.", "MULTIVITAMIN £12.", "FIBRE £15. GUT £25.", "OR £29.99."], proofNote: "Competitor prices checked 10 September 2026. Re-verify before publication.", boostOrder: ["gut", "immune", "energy"], cta: "START AT £1 A DAY", reviewFilter: "Overall", problem: ["The £79 a month powder.", "The tub at the back of the cupboard.", "The six supplement bottles.", "The routine you forgot on day twelve."] },
};

})();
