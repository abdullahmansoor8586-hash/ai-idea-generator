/* ================================================================
   AI IDEA GENERATOR
   ADVANCED BUSINESS BLUEPRINT ENGINE
   STEP 2 — FULL SCRIPT REPLACEMENT

   No API
   No paid service
   GitHub Pages compatible
================================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ================================================================
     1. BUSINESS PROFILES
  ================================================================ */

  const BUSINESS_PROFILES = {

    restaurant: {
      keywords: [
        "restaurant", "cafe", "café", "food", "bakery",
        "dhaba", "cloud kitchen", "kitchen", "catering",
        "hotel", "dining"
      ],

      features: [
        "AI customer enquiry assistant",
        "Automated reservation and booking support",
        "Menu recommendation system",
        "Customer feedback collection",
        "Repeat-customer offer system",
        "Automated review-request workflow",
        "Customer preference tracking",
        "Order follow-up workflow"
      ],

      marketing: [
        "Google Business Profile optimization",
        "Instagram food-content campaigns",
        "WhatsApp customer re-engagement",
        "Local SEO",
        "Referral offers",
        "Limited-time promotional campaigns"
      ],

      revenue: [
        "Monthly subscription",
        "One-time setup + monthly maintenance",
        "Per-location pricing",
        "Premium automation package"
      ]
    },


    clothing: {
      keywords: [
        "clothing", "fashion", "apparel", "boutique",
        "garment", "dress", "wear", "textile",
        "fashion store"
      ],

      features: [
        "AI product recommendation",
        "Personalized style suggestions",
        "Automated customer support",
        "Size and product guidance",
        "Abandoned-cart follow-up",
        "Customer preference tracking",
        "Product discovery assistant",
        "Repeat-purchase campaigns"
      ],

      marketing: [
        "Instagram product content",
        "Creator collaborations",
        "WhatsApp product campaigns",
        "Retargeting previous customers",
        "User-generated content",
        "Referral campaigns"
      ],

      revenue: [
        "Product sales",
        "Premium membership",
        "Subscription box",
        "Wholesale + direct-to-customer"
      ]
    },


    school: {
      keywords: [
        "school", "education", "academy", "institute",
        "tuition", "coaching", "classes", "training",
        "learning"
      ],

      features: [
        "AI student support assistant",
        "Automated parent communication",
        "Attendance and reminder workflow",
        "Learning recommendation system",
        "Student progress dashboard",
        "Question-answer assistant",
        "Automated notices",
        "Basic performance analytics"
      ],

      marketing: [
        "Local parent communities",
        "Free workshops",
        "Referral programs",
        "Educational content",
        "School partnerships",
        "Free trial programs"
      ],

      revenue: [
        "Monthly subscription per student",
        "Institutional subscription",
        "Setup fee + recurring fee",
        "Premium feature plans"
      ]
    },


    salon: {
      keywords: [
        "salon", "beauty", "spa", "barber",
        "hair", "nail", "makeup", "grooming"
      ],

      features: [
        "AI appointment assistant",
        "Automated appointment reminders",
        "Service recommendation system",
        "Customer preference history",
        "Review-request automation",
        "Rebooking reminders",
        "Promotional campaign assistant",
        "Customer retention dashboard"
      ],

      marketing: [
        "Instagram before/after content",
        "Google Business Profile",
        "WhatsApp rebooking campaigns",
        "Referral offers",
        "Local influencer collaborations",
        "Birthday and loyalty campaigns"
      ],

      revenue: [
        "Monthly SaaS subscription",
        "Setup + monthly maintenance",
        "Per-location pricing",
        "Premium automation package"
      ]
    },


    agency: {
      keywords: [
        "agency", "marketing agency", "digital agency",
        "design agency", "creative agency", "consulting"
      ],

      features: [
        "AI lead qualification",
        "Automated proposal generation",
        "Client onboarding workflow",
        "Content planning assistant",
        "Lead follow-up automation",
        "Client reporting dashboard",
        "Task and workflow automation",
        "AI customer communication"
      ],

      marketing: [
        "Case-study marketing",
        "LinkedIn outreach",
        "Cold email campaigns",
        "Founder-led content",
        "Free audits",
        "Referral partnerships"
      ],

      revenue: [
        "Monthly retainer",
        "Project-based pricing",
        "Productized service",
        "Performance-based pricing"
      ]
    },


    shop: {
      keywords: [
        "shop", "store", "retail", "retailer",
        "market", "local shop", "ecommerce",
        "e-commerce"
      ],

      features: [
        "AI shopping assistant",
        "Product recommendation engine",
        "Automated customer support",
        "Inventory alerts",
        "Repeat-purchase reminders",
        "Customer preference tracking",
        "Offer recommendation system",
        "Sales dashboard"
      ],

      marketing: [
        "WhatsApp marketing",
        "Google Business Profile",
        "Local SEO",
        "Referral campaigns",
        "Customer loyalty program",
        "Social media promotions"
      ],

      revenue: [
        "Product margin",
        "Subscription membership",
        "Premium customer club",
        "Service + product bundle"
      ]
    },


    realEstate: {
      keywords: [
        "real estate", "property", "property dealer",
        "realtor", "broker", "realty",
        "housing", "rental"
      ],

      features: [
        "AI property-matching assistant",
        "Lead qualification",
        "Automated property recommendations",
        "Lead follow-up system",
        "Viewing reminders",
        "Customer requirement database",
        "Property enquiry assistant",
        "Lead pipeline dashboard"
      ],

      marketing: [
        "Local SEO",
        "Property video content",
        "WhatsApp lead campaigns",
        "Referral partnerships",
        "Listing-content strategy",
        "Investor-focused content"
      ],

      revenue: [
        "Commission",
        "Lead-generation fee",
        "Subscription for agents",
        "Premium listing service"
      ]
    },


    manufacturing: {
      keywords: [
        "manufacturing", "manufacturer", "factory",
        "production", "industrial", "production unit"
      ],

      features: [
        "AI enquiry qualification",
        "Quotation assistance",
        "Order tracking dashboard",
        "Production-status communication",
        "Inventory alerts",
        "B2B customer portal",
        "Automated follow-ups",
        "Sales pipeline management"
      ],

      marketing: [
        "B2B outbound sales",
        "Industry-specific SEO",
        "Distributor partnerships",
        "LinkedIn prospecting",
        "Trade-show lead follow-up",
        "Product specification content"
      ],

      revenue: [
        "Product sales",
        "B2B contracts",
        "Subscription software",
        "Setup + recurring service"
      ]
    },


    exporter: {
      keywords: [
        "export", "exporter", "exporting",
        "international trade", "import export",
        "global trade"
      ],

      features: [
        "AI international buyer enquiry assistant",
        "Lead qualification",
        "Quotation generation",
        "Product catalogue assistant",
        "Follow-up automation",
        "Buyer requirement tracking",
        "Multi-language communication support",
        "Export enquiry dashboard"
      ],

      marketing: [
        "B2B outreach",
        "International SEO",
        "LinkedIn prospecting",
        "Trade-directory presence",
        "Distributor partnerships",
        "Country-specific landing pages"
      ],

      revenue: [
        "Product margin",
        "Wholesale contracts",
        "Distributor agreements",
        "Premium sourcing/service fee"
      ]
    },


    service: {
      keywords: [
        "service", "repair", "cleaning",
        "maintenance", "plumber", "electrician",
        "consultant", "professional service",
        "home service"
      ],

      features: [
        "AI enquiry assistant",
        "Lead qualification",
        "Appointment scheduling",
        "Automated reminders",
        "Quote-request workflow",
        "Customer history",
        "Review-request automation",
        "Repeat-service reminders"
      ],

      marketing: [
        "Google Business Profile",
        "Local SEO",
        "Referral campaigns",
        "WhatsApp follow-up",
        "Local community marketing",
        "Customer reviews"
      ],

      revenue: [
        "Per-service pricing",
        "Monthly maintenance plan",
        "Subscription",
        "Service packages"
      ]
    },


    general: {
      keywords: [],

      features: [
        "AI-powered customer assistant",
        "Simple dashboard",
        "Automated reminders",
        "Customer request tracking",
        "Personalized recommendations",
        "Searchable activity history",
        "Basic analytics",
        "Mobile-first interface"
      ],

      marketing: [
        "Content marketing",
        "Social media",
        "Referral marketing",
        "Direct outreach",
        "SEO",
        "Community building"
      ],

      revenue: [
        "Monthly subscription",
        "Freemium",
        "One-time purchase",
        "Setup + recurring service"
      ]
    }

  };


  /* ================================================================
     2. HELPERS
  ================================================================ */

  function clean(value) {
    return String(value || "").trim();
  }


  function normalize(value) {
    return clean(value)
      .toLowerCase()
      .replace(/[^\w\s-]/g, " ")
      .replace(/\s+/g, " ");
  }


  function pickRandom(array, count) {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));

      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy.slice(0, Math.min(count, copy.length));
  }


  /* ================================================================
     3. CATEGORY DETECTION
  ================================================================ */

  function detectBusinessCategory(businessType, problem) {

    const text =
      `${normalize(businessType)} ${normalize(problem)}`;

    let bestCategory = "general";
    let bestScore = 0;

    Object.entries(BUSINESS_PROFILES).forEach(
      ([category, profile]) => {

        let score = 0;

        profile.keywords.forEach((keyword) => {

          const key = normalize(keyword);

          if (text.includes(key)) {

            score += keyword.includes(" ")
              ? 3
              : 2;

          }

        });

        if (score > bestScore) {

          bestScore = score;
          bestCategory = category;

        }

      }
    );

    return bestCategory;
  }


  /* ================================================================
     4. INPUT NORMALIZATION
  ================================================================ */

  function normalizeProfile(input) {

    return {

      businessType:
        clean(input.businessType),

      problem:
        clean(input.problem),

      customers:
        clean(
          input.customers ||
          input.targetCustomer
        ),

      location:
        clean(input.location) ||
        "the target market",

      budget:
        clean(input.budget) ||
        "a lean starting budget",

      goal:
        clean(input.goal) ||
        "validate the idea and get the first customers",

      experience:
        clean(
          input.experience ||
          input.experienceLevel
        ) ||
        "beginner"

    };

  }


  /* ================================================================
     5. SOLUTION
  ================================================================ */

  function generateAISolutionIdea(profile, category) {

    const descriptions = {

      restaurant:
        "an AI-assisted customer and operations system",

      clothing:
        "an AI-powered shopping and customer-retention assistant",

      school:
        "an AI-powered student and parent support system",

      salon:
        "an AI-powered appointment and customer-retention assistant",

      agency:
        "an AI-powered lead and client-workflow system",

      shop:
        "an AI-powered customer and sales assistant",

      realEstate:
        "an AI-powered property-lead and customer-matching system",

      manufacturing:
        "an AI-powered B2B sales and enquiry workflow",

      exporter:
        "an AI-powered international buyer and enquiry workflow",

      service:
        "an AI-powered lead, booking and follow-up system",

      general:
        "an AI-powered business workflow and customer assistant"

    };


    return `Build ${descriptions[category] || descriptions.general} for ${profile.businessType} businesses that specifically addresses "${profile.problem}". The product should help ${profile.customers} get a faster, simpler and more useful experience while reducing repetitive manual work for the business.`;
  }


  /* ================================================================
     6. PROBLEM
  ================================================================ */

  function generateProblemSummary(profile) {

    return `The core problem is "${profile.problem}". The opportunity is to reduce the time, friction, missed follow-ups or manual effort created by this problem and turn the process into a repeatable workflow for ${profile.customers}.`;

  }


  /* ================================================================
     7. VALUE PROPOSITION
  ================================================================ */

  function generateValue(profile, category) {

    const values = {

      restaurant:
        "help restaurants turn more enquiries and visits into repeat customers",

      clothing:
        "help sellers make product discovery and repeat purchasing easier",

      school:
        "make communication and student support more responsive",

      salon:
        "reduce missed appointments and improve customer retention",

      agency:
        "reduce manual sales and client-management work",

      shop:
        "help businesses convert more shoppers into repeat customers",

      realEstate:
        "help agents respond to and qualify property leads faster",

      manufacturing:
        "make B2B enquiries, quotations and follow-ups more organized",

      exporter:
        "help exporters manage international buyer enquiries and follow-ups",

      service:
        "turn incoming enquiries into organized bookings and repeat work",

      general:
        "turn a repetitive business problem into a simple automated workflow"

    };


    return `For ${profile.customers}, ${values[category] || values.general}, without requiring the business to adopt a complicated system from day one.`;
  }


  /* ================================================================
     8. FEATURES
  ================================================================ */

  function generateFeatures(category) {

    const profile =
      BUSINESS_PROFILES[category] ||
      BUSINESS_PROFILES.general;

    const common = [
      "Mobile-first user experience",
      "Simple customer data capture",
      "Automated follow-up workflow",
      "Basic analytics dashboard",
      "Searchable activity history"
    ];

    return pickRandom(
      [
        ...profile.features,
        ...common
      ],
      6
    );
  }


  /* ================================================================
     9. TARGET AUDIENCE
  ================================================================ */

  function generateAudience(profile) {

    return {

      primary:
        profile.customers,

      location:
        profile.location,

      earlyAdopters:
        `Customers who already experience "${profile.problem}" frequently and are actively looking for a faster or easier solution.`,

      buyer:
        `${profile.businessType} owners, operators or decision-makers who directly feel the cost of the problem.`

    };

  }


  /* ================================================================
     10. TECHNOLOGY
  ================================================================ */

  function generateTechnology(category) {

    const categoryTech = {

      restaurant:
        "Optional WhatsApp/API integrations for customer communication",

      clothing:
        "Product catalogue and recommendation data layer",

      school:
        "Secure student/parent data storage when moving beyond prototype stage",

      salon:
        "Calendar/booking integration for automated appointment workflows",

      agency:
        "CRM or spreadsheet integration for lead management",

      shop:
        "Product/inventory data integration",

      realEstate:
        "CRM/property database integration",

      manufacturing:
        "Quotation/order management integration",

      exporter:
        "CRM + catalogue + communication integrations",

      service:
        "Booking/calendar + customer database integration",

      general:
        "A lightweight backend/database once the workflow is validated"

    };


    return [

      "HTML, CSS and JavaScript for the first prototype",

      "GitHub Pages or similar low-cost hosting for the public demo",

      "LocalStorage for lightweight prototype data",

      "A simple backend only when real user accounts or persistent data become necessary",

      categoryTech[category] || categoryTech.general

    ];

  }


  /* ================================================================
     11. MVP
  ================================================================ */

  function generateMVP(profile) {

    return [

      `One clear workflow solving "${profile.problem}"`,

      "Simple landing/input screen",

      "Core AI-assisted or rule-based recommendation/action",

      "Basic customer or business data capture",

      "One measurable outcome",

      "Manual fallback for anything that is not automated yet"

    ];

  }


  /* ================================================================
     12. COST + EFFORT
  ================================================================ */

  function generateCost(profile) {

    const budget = normalize(profile.budget);
    const experience = normalize(profile.experience);

    let approach =
      "Start with a small prototype and avoid unnecessary paid infrastructure.";

    if (
      budget.includes("low") ||
      budget.includes("small") ||
      budget.includes("10") ||
      budget.includes("20")
    ) {

      approach =
        "Keep the first version extremely lean: free hosting, simple frontend, manual operations where possible, and paid infrastructure only after validation.";

    } else if (
      budget.includes("high") ||
      budget.includes("large") ||
      budget.includes("50") ||
      budget.includes("100")
    ) {

      approach =
        "A larger budget allows faster development, integrations, testing and customer acquisition, but validation should still happen before heavy spending.";

    }


    return {

      budgetContext:
        profile.budget,

      experienceContext:
        profile.experience,

      approach,

      effort:
        experience.includes("beginner")
          ? "Start with a focused MVP rather than the complete platform. Build one workflow at a time."
          : "Use your experience to prototype faster, then spend time validating customer demand before expanding features."

    };

  }


  /* ================================================================
     13. REVENUE
  ================================================================ */

  function generateRevenue(profile, category) {

    const models =
      BUSINESS_PROFILES[category]?.revenue ||
      BUSINESS_PROFILES.general.revenue;


    return {

      primary:
        models[0],

      alternatives:
        models.slice(1),

      recommendation:
        `Choose the model that matches how ${profile.customers} receive value. Start simple and test willingness to pay before adding multiple pricing tiers.`

    };

  }


  /* ================================================================
     14. PRICING
  ================================================================ */

  function generatePricing() {

    return [

      "Start with one simple offer instead of many confusing plans.",

      "Price according to the value of the problem being solved, not only development cost.",

      "Use early customers to test different price points.",

      "Keep a lower-friction entry option for first-time customers.",

      "Increase pricing only after the product consistently delivers measurable value."

    ];

  }


  /* ================================================================
     15. MARKETING
  ================================================================ */

  function generateMarketing(profile, category) {

    const profileData =
      BUSINESS_PROFILES[category] ||
      BUSINESS_PROFILES.general;


    return [

      ...pickRandom(
        profileData.marketing,
        4
      ),

      `Create educational content around "${profile.problem}".`,

      `Show a real before/after workflow for ${profile.customers}.`

    ];

  }


  /* ================================================================
     16. CUSTOMER ACQUISITION
  ================================================================ */

  function generateAcquisition(profile) {

    return [

      `Identify 20 potential ${profile.customers} in ${profile.location}.`,

      "Contact them directly with a short problem-focused message.",

      "Offer a demo or manual pilot instead of immediately selling a complex product.",

      "Track every objection and repeated request.",

      "Convert the strongest repeated use case into the MVP."

    ];

  }


  /* ================================================================
     17. RISKS
  ================================================================ */

  function generateRisks(profile) {

    return [

      {
        risk:
          "Building too many features before validation",

        mitigation:
          "Start with one painful problem and one measurable outcome."
      },

      {
        risk:
          "Customers may like the idea but not pay",

        mitigation:
          "Test willingness to pay with real conversations and early offers."
      },

      {
        risk:
          "Automation may be unreliable",

        mitigation:
          "Keep human/manual fallback processes during the early stage."
      },

      {
        risk:
          "Target audience may be too broad",

        mitigation:
          `Start specifically with ${profile.customers} and narrow further if necessary.`
      },

      {
        risk:
          "Development becomes too expensive",

        mitigation:
          "Use free/low-cost infrastructure until the business model is validated."
      }

    ];

  }


  /* ================================================================
     18. FIRST FIVE ACTIONS
  ================================================================ */

  function generateFirstActions(profile) {

    return [

      `Write the exact version of the problem: "${profile.problem}".`,

      `Interview or message at least 5 potential ${profile.customers}.`,

      "Find out how they currently solve the problem.",

      "Build only the smallest workflow that solves the repeated pain.",

      "Test the prototype with real users before expanding features."

    ];

  }


  /* ================================================================
     19. LONG-TERM ROADMAP
  ================================================================ */

  function generateRoadmap() {

    return {

      days0to30: [

        "Clarify the exact customer and painful problem.",

        "Interview potential users.",

        "Study current alternatives and manual workflows.",

        "Define the smallest useful MVP.",

        "Build the first working prototype."

      ],


      days31to60: [

        "Test the prototype with real users.",

        "Collect objections and repeated requests.",

        "Fix the highest-impact usability problems.",

        "Measure actual usage.",

        "Test an early paid offer where appropriate."

      ],


      days61to90: [

        "Launch the validated MVP.",

        "Acquire the first real customers.",

        "Track activation, usage and retention.",

        "Document the repeatable customer workflow.",

        "Decide which feature deserves the next development cycle."

      ],


      months3to6: [

        "Improve the product around validated customer needs.",

        "Introduce basic automation and integrations.",

        "Build a repeatable customer-acquisition process.",

        "Improve onboarding.",

        "Establish a reliable pricing model.",

        "Track revenue and customer retention."

      ],


      months6to12: [

        "Expand the strongest use cases.",

        "Add higher-value features.",

        "Improve operational efficiency.",

        "Build stronger marketing channels.",

        "Introduce better analytics.",

        "Explore partnerships and additional customer segments."

      ],


      months12plus: [

        "Expand into additional markets or customer segments.",

        "Develop a stronger product ecosystem.",

        "Automate more of the operational workflow.",

        "Build a scalable acquisition engine.",

        "Explore integrations and strategic partnerships.",

        "Use validated demand to decide whether to expand the team, product or market."

      ]

    };

  }


  /* ================================================================
     20. GROWTH
  ================================================================ */

  function generateGrowth(category) {

    const opportunities = {

      restaurant: [
        "Multi-location support",
        "Customer loyalty automation",
        "Advanced analytics",
        "Delivery/order integrations"
      ],

      clothing: [
        "Personalized shopping",
        "Customer segmentation",
        "Loyalty program",
        "Multi-channel commerce"
      ],

      school: [
        "Institution dashboards",
        "Learning analytics",
        "Parent communication automation",
        "Multi-school deployment"
      ],

      salon: [
        "Multi-location management",
        "Advanced retention analytics",
        "Loyalty automation",
        "Staff scheduling"
      ],

      agency: [
        "CRM integrations",
        "Automated reporting",
        "White-label platform",
        "Team collaboration"
      ],

      shop: [
        "Inventory intelligence",
        "Customer loyalty",
        "Multi-store support",
        "Personalized recommendations"
      ],

      realEstate: [
        "Advanced lead scoring",
        "Property matching",
        "CRM integrations",
        "Multi-agent platform"
      ],

      manufacturing: [
        "Quotation automation",
        "Distributor portal",
        "Inventory intelligence",
        "ERP integrations"
      ],

      exporter: [
        "International lead intelligence",
        "Multi-language workflows",
        "Distributor management",
        "Trade-market analytics"
      ],

      service: [
        "Multi-location operations",
        "Recurring service plans",
        "Technician management",
        "Customer retention analytics"
      ],

      general: [
        "Automation expansion",
        "Integrations",
        "Analytics",
        "Multi-user support"
      ]

    };


    return opportunities[category] ||
      opportunities.general;

  }


  /* ================================================================
     21. MASTER BLUEPRINT
  ================================================================ */

  function generateBusinessBlueprint(rawInput) {

    const profile =
      normalizeProfile(rawInput);


    const category =
      detectBusinessCategory(
        profile.businessType,
        profile.problem
      );


    return {

      profile,

      category,

      solution:
        generateAISolutionIdea(
          profile,
          category
        ),

      problemSummary:
        generateProblemSummary(
          profile
        ),

      uniqueValueProposition:
        generateValue(
          profile,
          category
        ),

      features:
        generateFeatures(
          category
        ),

      targetAudience:
        generateAudience(
          profile
        ),

      technology:
        generateTechnology(
          category
        ),

      mvp:
        generateMVP(
          profile
        ),

      costAndEffort:
        generateCost(
          profile
        ),

      revenue:
        generateRevenue(
          profile,
          category
        ),

      pricing:
        generatePricing(),

      marketing:
        generateMarketing(
          profile,
          category
        ),

      customerAcquisition:
        generateAcquisition(
          profile
        ),

      risks:
        generateRisks(
          profile
        ),

      growth:
        generateGrowth(
          category
        ),

      firstFiveActions:
        generateFirstActions(
          profile
        ),

      roadmap:
        generateRoadmap()

    };

  }


  /* ================================================================
     22. DOM ELEMENTS
  ================================================================ */

  const form =
    document.getElementById("ideaForm");

  const loadingPanel =
    document.getElementById("loadingPanel");

  const resultsPanel =
    document.getElementById("resultsPanel");

  const generateBtn =
    document.getElementById("generateBtn");


  const fields = {

    businessType:
      document.getElementById("businessType"),

    problem:
      document.getElementById("problem"),

    customers:
      document.getElementById("customers"),

    location:
      document.getElementById("location"),

    budget:
      document.getElementById("budget"),

    goal:
      document.getElementById("goal"),

    experience:
      document.getElementById("experience")

  };


  let lastInputs = null;


  /* ================================================================
     23. VALIDATION
  ================================================================ */

  function validateFields() {

    let valid = true;


    [
      "businessType",
      "problem",
      "customers"
    ].forEach((key) => {

      const input =
        fields[key];

      if (!input) return;


      if (!clean(input.value)) {

        valid = false;

        const wrapper =
          input.closest(".field");

        if (wrapper) {

          wrapper.classList.add(
            "has-error"
          );

        }

      } else {

        const wrapper =
          input.closest(".field");

        if (wrapper) {

          wrapper.classList.remove(
            "has-error"
          );

        }

      }

    });


    return valid;

  }


  /* ================================================================
     24. DOM RENDER HELPERS
  ================================================================ */

  function setText(id, value) {

    const element =
      document.getElementById(id);

    if (!element) return;

    element.textContent =
      value || "";

  }


  function setList(id, items) {

    const element =
      document.getElementById(id);

    if (!element) return;


    element.innerHTML = "";


    (items || []).forEach((item) => {

      const li =
        document.createElement("li");


      if (
        typeof item === "object" &&
        item !== null
      ) {

        const strong =
          document.createElement("strong");

        strong.textContent =
          item.risk || "";

        const br =
          document.createElement("br");

        const span =
          document.createElement("span");

        span.textContent =
          item.mitigation || "";

        li.appendChild(strong);
        li.appendChild(br);
        li.appendChild(span);

      } else {

        li.textContent =
          item;

      }


      element.appendChild(li);

    });

  }


  /* ================================================================
     25. COMPLETE RESULT RENDERER
  ================================================================ */

  function renderBlueprint(blueprint) {

    if (!blueprint) return;


    const profile =
      blueprint.profile || {};

    const audience =
      blueprint.targetAudience || {};

    const revenue =
      blueprint.revenue || {};

    const cost =
      blueprint.costAndEffort || {};

    const roadmap =
      blueprint.roadmap || {};


    /* HEADER */

    setText(
      "resultHeading",
      `Business Blueprint for ${profile.businessType || "Your Business"}`
    );


    /* SUMMARY */

    setText(
      "resSolution",
      blueprint.solution
    );

    setText(
      "resProblem",
      blueprint.problemSummary
    );

    setText(
      "resValue",
      blueprint.uniqueValueProposition
    );


    /* CUSTOMER */

    setText(
      "resPrimaryCustomer",
      audience.primary
    );

    setText(
      "resLocation",
      audience.location
    );

    setText(
      "resEarlyAdopters",
      audience.earlyAdopters
    );

    setText(
      "resBuyer",
      audience.buyer
    );


    /* PRODUCT */

    setList(
      "resFeatures",
      blueprint.features
    );

    setList(
      "resMvp",
      blueprint.mvp
    );


    /* TECHNOLOGY */

    setList(
      "resTech",
      blueprint.technology
    );


    /* MONEY */

    setText(
      "resRevenuePrimary",
      revenue.primary
    );

    setList(
      "resRevenueAlternatives",
      revenue.alternatives
    );

    setList(
      "resPricing",
      blueprint.pricing
    );


    /* MARKETING */

    setList(
      "resMarketing",
      blueprint.marketing
    );

    setList(
      "resAcquisition",
      blueprint.customerAcquisition
    );


    /* COST */

    setText(
      "resBudget",
      cost.budgetContext
    );

    setText(
      "resExperience",
      cost.experienceContext
    );

    setText(
      "resEffort",
      `${cost.approach} ${cost.effort}`
    );


    /* RISKS */

    setList(
      "resRisks",
      blueprint.risks
    );


    /* ACTIONS */

    setList(
      "resFirstActions",
      blueprint.firstFiveActions
    );


    /* ROADMAP */

    setList(
      "resRoadmap30",
      roadmap.days0to30
    );

    setList(
      "resRoadmap60",
      roadmap.days31to60
    );

    setList(
      "resRoadmap90",
      roadmap.days61to90
    );

    setList(
      "resRoadmap6",
      roadmap.months3to6
    );

    setList(
      "resRoadmap12",
      roadmap.months6to12
    );

    setList(
      "resRoadmapLong",
      roadmap.months12plus
    );


    /* GROWTH */

    setList(
      "resGrowth",
      blueprint.growth
    );


    /* Make sure results are visible */

    if (resultsPanel) {

      resultsPanel.hidden = false;

    }

  }


  /* ================================================================
     26. GENERATION
  ================================================================ */

  function runGeneration(inputData) {

    if (
      !form ||
      !loadingPanel ||
      !resultsPanel ||
      !generateBtn
    ) return;


    const formPanel =
      form.closest(".form-panel");


    if (formPanel) {

      formPanel.hidden = true;

    }


    resultsPanel.hidden = true;

    loadingPanel.hidden = false;

    generateBtn.disabled = true;


    setTimeout(() => {

      const blueprint =
        generateBusinessBlueprint(
          inputData
        );


      /*
        Store complete blueprint globally.
        The new HTML can also access this.
      */

      window.latestBusinessBlueprint =
        blueprint;


      /*
        Render every detailed section.
      */

      renderBlueprint(
        blueprint
      );


      loadingPanel.hidden = true;

      resultsPanel.hidden = false;

      generateBtn.disabled = false;


      resultsPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });


    }, 900);

  }


  /* ================================================================
     27. FORM SUBMIT
  ================================================================ */

  if (form) {

    form.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        if (!validateFields()) {

          const firstInvalid =
            form.querySelector(
              ".has-error input, .has-error textarea"
            );

          if (firstInvalid) {

            firstInvalid.focus();

          }

          return;

        }


        lastInputs = {

          businessType:
            fields.businessType?.value || "",

          problem:
            fields.problem?.value || "",

          customers:
            fields.customers?.value || "",

          location:
            fields.location?.value || "",

          budget:
            fields.budget?.value || "",

          goal:
            fields.goal?.value || "",

          experience:
            fields.experience?.value || ""

        };


        runGeneration(
          lastInputs
        );

      }
    );

  }


  /* ================================================================
     28. REGENERATE
  ================================================================ */

  const regenerateBtn =
    document.getElementById(
      "regenerateBtn"
    );


  if (regenerateBtn) {

    regenerateBtn.addEventListener(
      "click",
      () => {

        if (!lastInputs) return;

        runGeneration(
          lastInputs
        );

      }
    );

  }


  /* ================================================================
     29. NEW IDEA
  ================================================================ */

  const newIdeaBtn =
    document.getElementById(
      "newIdeaBtn"
    );


  if (newIdeaBtn) {

    newIdeaBtn.addEventListener(
      "click",
      () => {

        if (form) {

          form.reset();

        }


        if (resultsPanel) {

          resultsPanel.hidden = true;

        }


        const formPanel =
          form?.closest(".form-panel");


        if (formPanel) {

          formPanel.hidden = false;

          formPanel.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }


        if (fields.businessType) {

          fields.businessType.focus();

        }


        lastInputs = null;

        window.latestBusinessBlueprint =
          null;

      }
    );

  }


  /* ================================================================
     30. PUBLIC API
  ================================================================ */

  window.AIIdeaGenerator = {

    generate:
      generateBusinessBlueprint,

    detectCategory:
      detectBusinessCategory,

    render:
      renderBlueprint

  };


  console.log(
    "AI Idea Generator — Advanced Business Blueprint Engine loaded."
  );

});
