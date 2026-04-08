export type LegalSection =
  | ArticleSection
  | TableSection
  | ChecklistSection
  | FAQSection

interface ArticleSection {
  id: string
  title: string
  type: 'article'
  content: ArticleContent[]
}

interface TableSection {
  id: string
  title: string
  type: 'table'
  content: TableContent[]
}

interface ChecklistSection {
  id: string
  title: string
  type: 'checklist'
  content: ChecklistContent[]
}

interface FAQSection {
  id: string
  title: string
  type: 'faq'
  content: FAQContent[]
}

interface ArticleContent {
  type: 'paragraph' | 'heading' | 'subheading' | 'cta' | 'highlight' | 'list'
  text?: string
  items?: string[]
}

interface TableContent {
  type: 'table'
  columns: string[]
  rows: string[][]
  note?: string
}

interface ChecklistContent {
  type: 'step'
  step: number
  title: string
  description: string
  tip?: string
}

interface FAQContent {
  type: 'qa'
  question: string
  answer: string
}

const legalGuideData: LegalSection[] = [
  // ─────────────────────────────────────────────
  // 1. SECTION 118
  // ─────────────────────────────────────────────
  {
    id: 'section-118',
    title: 'Section 118 — HP Tenancy & Land Reforms Act, 1972',
    type: 'article',
    content: [
      {
        type: 'paragraph',
        text: 'Agar aap Himachal Pradesh se bahar ke hain — chahe Delhi, Mumbai, Pune ya koi bhi dusra state — toh Section 118 ek aisi cheez hai jiske baare mein aapko sabse pehle padhna chahiye. Yeh HP ka most important property law hai jo non-Himachali buyers ko directly affect karta hai.',
      },
      {
        type: 'heading',
        text: 'Section 118 Kya Hai?',
      },
      {
        type: 'paragraph',
        text: 'Section 118 of the Himachal Pradesh Tenancy & Land Reforms Act, 1972 ek state law hai jo non-agricultural land ko non-Himachalis ko transfer karne par restrictions lagata hai. Iska main purpose hai ki HP ke agricultural land aur hill ecology ki protection ho.',
      },
      {
        type: 'highlight',
        text: 'Simple words mein: Agar aap HP ke bonafide resident nahin hain, toh aap directly agricultural land nahin khareed sakte. Residential plots ya flats ke liye State Government se prior permission leni padti hai.',
      },
      {
        type: 'heading',
        text: 'Kaun Khareed Sakta Hai — Bina Permission Ke?',
      },
      {
        type: 'list',
        items: [
          'HP ke bonafide residents (domicile holders)',
          'HP mein registered agricultural labourers',
          'HP Government ya Govt-owned bodies',
          'Financial institutions approved by State Govt',
        ],
      },
      {
        type: 'heading',
        text: 'Kaun Khareed Sakta Hai — Permission Ke Saath?',
      },
      {
        type: 'list',
        items: [
          'Non-HP Indian citizens (residential/commercial plots ke liye)',
          'NRIs (FEMA compliance ke saath)',
          'Companies registered outside HP (commercial use ke liye)',
          'Charitable/religious institutions (special cases mein)',
        ],
      },
      {
        type: 'heading',
        text: 'Agricultural vs Non-Agricultural Land',
      },
      {
        type: 'paragraph',
        text: 'Yeh distinction bohot zaroori hai. Agricultural land (jaise Khasra land, paddy fields, orchards) non-Himachalis ko kabhi bhi directly transfer nahin ki ja sakti — even with permission. Non-agricultural land (jaise residential plots, commercial plots, flats in approved colonies) ke liye Section 118 permission milti hai.',
      },
      {
        type: 'heading',
        text: 'Rural vs Municipal Area',
      },
      {
        type: 'paragraph',
        text: 'Municipal corporation limits (jaise Shimla MC, Dharamshala MC) mein approved residential/commercial properties ke liye permission process comparatively aasaan hai. Rural areas mein restrictions zyada strict hain aur approval rate thodi complex hoti hai.',
      },
      {
        type: 'heading',
        text: 'Permission Process — Step by Step',
      },
      {
        type: 'list',
        items: [
          'Application to Deputy Commissioner (DC) of the concerned district',
          'Form along with property documents, identity proof, purpose of purchase',
          'DC forwards to Divisional Commissioner for review',
          'State Revenue Department final approval',
          'Upon approval — registry can proceed at Sub-Registrar office',
        ],
      },
      {
        type: 'subheading',
        text: 'Approximate Timeline: 3 to 6 months (can vary by district)',
      },
      {
        type: 'heading',
        text: 'Real Example',
      },
      {
        type: 'paragraph',
        text: 'Rohit from Pune wants to buy a 500 sq yd plot in Kasauli. The plot is already non-agricultural (NA). He applies to DC Solan with sale agreement, seller\'s jamabandi, his Aadhaar, PAN, and purpose affidavit. After 4 months, he gets Section 118 permission. Registry then happens at Sub-Registrar Kasauli.',
      },
      {
        type: 'cta',
        text: 'Section 118 process complex lagti hai? Pahadi Estates aapki puri application mein haath batwate hain — contact karein aaj hi.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. WHO CAN BUY — TABLE
  // ─────────────────────────────────────────────
  {
    id: 'who-can-buy',
    title: 'Who Can Buy Property in Himachal Pradesh?',
    type: 'table',
    content: [
      {
        type: 'table',
        columns: ['Buyer Type', 'Agricultural Land', 'Residential Plot', 'Flat / Apartment'],
        rows: [
          [
            'HP Resident (Bonafide Himachali)',
            '✅ Freely allowed',
            '✅ Freely allowed',
            '✅ Freely allowed',
          ],
          [
            'Non-HP Indian Citizen',
            '❌ Not allowed',
            '⚠️ Allowed with Section 118 permission',
            '⚠️ Allowed with Section 118 permission',
          ],
          [
            'NRI (Indian Origin)',
            '❌ Not allowed',
            '⚠️ Allowed with Section 118 + FEMA compliance',
            '⚠️ Allowed with Section 118 + FEMA compliance',
          ],
          [
            'Foreign National / OCI',
            '❌ Not allowed',
            '❌ Generally not allowed (RBI approval required)',
            '❌ Generally not allowed (RBI approval required)',
          ],
          [
            'Company (Outside HP)',
            '❌ Not allowed',
            '⚠️ Allowed for commercial use with Govt permission',
            '⚠️ Allowed for commercial use with Govt permission',
          ],
        ],
        note: 'Rules as per HP Tenancy & Land Reforms Act, 1972 and FEMA regulations. Always verify current status with a local legal advisor or contact Pahadi Estates.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. PROPERTY VERIFICATION CHECKLIST
  // ─────────────────────────────────────────────
  {
    id: 'verification',
    title: 'Property Verification Checklist — Before You Buy',
    type: 'checklist',
    content: [
      {
        type: 'step',
        step: 1,
        title: 'Jamabandi (Record of Rights) Check',
        description:
          'Jamabandi HP ka official land record hai. Isme aapko property ka owner, area (in bighas/kanals), land type (agricultural/non-agricultural), aur any existing liabilities dikh jaati hain.',
        tip: 'HP Revenue Dept ki website ya local Patwari office se download karein. Verify karein ki seller ka naam Jamabandi mein hai ya nahin.',
      },
      {
        type: 'step',
        step: 2,
        title: 'Registry Verification',
        description:
          'Check the sale deed registered at the Sub-Registrar office. Verify the chain of ownership — who sold to whom over the years. Look for any gaps or suspicious transfers.',
        tip: 'Sub-Registrar office se certified copy mangwayein. Last 30 years ki chain dekhein ideally.',
      },
      {
        type: 'step',
        step: 3,
        title: 'Encumbrance Certificate',
        description:
          'Yeh certificate batata hai ki property par koi loan, mortgage, court order, ya lien toh nahin hai. Agar property kisi bank se mortgage hai, toh seller use clear kare pehle.',
        tip: 'Sub-Registrar office se EC for last 13 years minimum mangwayein. Ideally 30 years.',
      },
      {
        type: 'step',
        step: 4,
        title: 'NOC (No Objection Certificate)',
        description:
          'Depending on location, you may need NOC from: Forest Department (if land is near forest), Municipality or Panchayat, HP Tourism Department (for certain zones), Army (near cantonment areas).',
        tip: 'Seller se poochein ki NOCs pehle se hain ya nahin. Missing NOC is a major red flag.',
      },
      {
        type: 'step',
        step: 5,
        title: 'Tehsildar / Patwari Verification',
        description:
          'Local Patwari ya Tehsildar se physically verify karein ki land records match kar rahe hain. On-ground boundary check bhi karwayein (Tatima).',
        tip: 'Pahadi Estates yeh verification aapke liye karta hai. Self-check ke liye Patwari office visit zaroori hai.',
      },
      {
        type: 'step',
        step: 6,
        title: 'Section 118 Permission Check',
        description:
          'Agar aap non-HP buyer hain, confirm karein ki ya toh property pehle se Section 118 approved hai, ya seller ke paas valid permission hai, ya aap apna application submit karenge.',
        tip: 'Without Section 118 clearance, registry nahin hogi. Pahadi Estates pure process mein help karta hai.',
      },
      {
        type: 'step',
        step: 7,
        title: 'RERA Registration Check',
        description:
          'Agar aap koi plot in a housing colony, apartment, or project khareed rahe hain of 500 sq mt or 8 units+ — check karein ki project HP RERA mein registered hai ya nahin.',
        tip: 'HP RERA website par project name se search karein. Unregistered projects mein invest karna risky hai.',
      },
      {
        type: 'step',
        step: 8,
        title: 'Physical Site Visit & Measurement',
        description:
          'Kabhi bhi property bina dekhe mat khareedein. Site visit karein, boundaries match karein documents ke saath, access road check karein, aur nearby disputes ke baare mein locals se poochein.',
        tip: 'Pahadi Estates sab listed properties ki physical verification karke hi onboard karta hai.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. STAMP DUTY & REGISTRATION
  // ─────────────────────────────────────────────
  {
    id: 'stamp-duty',
    title: 'Stamp Duty & Registration Charges in HP (2026)',
    type: 'table',
    content: [
      {
        type: 'table',
        columns: ['Buyer Category', 'Stamp Duty', 'Registration Fee', 'Total Approx.'],
        rows: [
          ['Male Buyer', '6% of circle rate / market value', '2%', '~8%'],
          ['Female Buyer', '4% of circle rate / market value', '2%', '~6%'],
          [
            'Joint (Male + Female)',
            '5% of circle rate / market value',
            '2%',
            '~7%',
          ],
          [
            'Agricultural Land (HP Residents only)',
            '6% (Male) / 4% (Female)',
            '2%',
            '~6–8%',
          ],
          [
            'Gift Deed (Blood Relatives)',
            'Rs. 1,000 (fixed)',
            '2%',
            'Low — consult advisor',
          ],
          [
            'Government / Auction Property',
            'As applicable by Govt order',
            '2%',
            'Varies',
          ],
        ],
        note: 'Rates are based on HP Stamp Act and are subject to change by state government. The higher of circle rate or market value is used for calculation. Female concession applies only when the primary buyer is a woman. Contact Pahadi Estates for an accurate calculation for your specific property.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. BONAFIDE HIMACHALI CERTIFICATE
  // ─────────────────────────────────────────────
  {
    id: 'bonafide-himachali',
    title: 'Bonafide Himachali Certificate — Kya, Kyun, Kaise',
    type: 'article',
    content: [
      {
        type: 'heading',
        text: 'Kya Hai Bonafide Himachali Certificate?',
      },
      {
        type: 'paragraph',
        text: 'Yeh ek state government issued certificate hai jo prove karta hai ki aap HP ke permanent/domicile resident hain. Iske saath aap Section 118 restrictions ke baghair property khareed sakte hain aur government schemes ka labh utha sakte hain.',
      },
      {
        type: 'heading',
        text: 'Property Ke Liye Kyun Zaroori Hai?',
      },
      {
        type: 'list',
        items: [
          'Agricultural land khareedne ke liye mandatory',
          'Section 118 permission process mein exemption milti hai',
          'Government plots/schemes ke liye priority milti hai',
          'HP Govt jobs aur education quotas ke liye bhi required',
        ],
      },
      {
        type: 'heading',
        text: 'Kaun Apply Kar Sakta Hai?',
      },
      {
        type: 'list',
        items: [
          'HP mein 15 saal se zyada se permanently resident ho',
          'HP mein agricultural land ho ya HP se ancestral connection ho',
          'HP mein born ho aur parents HP resident hoon',
          'HP Government employee (permanent)',
        ],
      },
      {
        type: 'heading',
        text: 'Application Process',
      },
      {
        type: 'list',
        items: [
          'Tehsildar ya SDM office mein form submit karein',
          'Online bhi apply ho sakta hai HP e-services portal par',
          'Verification local Patwari/Police karti hai',
          'Certificate 15–30 din mein milta hai',
        ],
      },
      {
        type: 'heading',
        text: 'Required Documents',
      },
      {
        type: 'list',
        items: [
          'Aadhaar Card',
          'Voter ID (HP address)',
          'Ration Card (HP)',
          'Birth Certificate (if born in HP)',
          'Property/land documents (if applicable)',
          'School certificates (if studied in HP)',
          'Affidavit of residence (notarized)',
        ],
      },
      {
        type: 'cta',
        text: 'Confused about eligibility? Pahadi Estates ke experts se puchein — hum aapko sahi guidance denge.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. AGRICULTURAL LAND CONVERSION
  // ─────────────────────────────────────────────
  {
    id: 'land-conversion',
    title: 'Agricultural Land Conversion in Himachal Pradesh',
    type: 'article',
    content: [
      {
        type: 'heading',
        text: 'Kya Agricultural Land ko Non-Agricultural Mein Convert Kar Sakte Hain?',
      },
      {
        type: 'highlight',
        text: 'Haan, possible hai — lekin strictly regulated hai. Himachal Pradesh mein agricultural land ko residential ya commercial use ke liye convert karna ek formal government approval process hai.',
      },
      {
        type: 'heading',
        text: 'Conversion Process',
      },
      {
        type: 'list',
        items: [
          'Application to DC (Deputy Commissioner) of the district',
          'NOC from Agriculture Department',
          'NOC from Forest Department (if near forest)',
          'Town & Country Planning (TCP) approval for residential use',
          'Revenue Department updates Jamabandi to reflect NA status',
          'Conversion fee payment to state government',
        ],
      },
      {
        type: 'heading',
        text: 'Timeline',
      },
      {
        type: 'paragraph',
        text: 'Typically 6 months to 1.5 years depending on location, land size, and district. Municipal area conversions tend to be faster than panchayat/rural zones.',
      },
      {
        type: 'heading',
        text: 'Cost',
      },
      {
        type: 'list',
        items: [
          'Conversion fee: Varies by district and land use — typically ₹5,000 to ₹50,000+ per bigha',
          'NOC fees for various departments',
          'Legal/consultant fees if using an agent',
          'TCP layout approval fees (for colonization)',
        ],
      },
      {
        type: 'heading',
        text: 'Common Myths — Cleared',
      },
      {
        type: 'list',
        items: [
          'MYTH: "Converted land can be bought by anyone." FACT: Even after conversion, Section 118 restrictions still apply for non-HP buyers.',
          'MYTH: "Conversion is automatic after x years." FACT: No automatic conversion — formal application is always required.',
          'MYTH: "Agricultural land near highway is automatically commercial." FACT: TCP approval is still mandatory.',
          'MYTH: "You can build a house on agricultural land without conversion." FACT: Illegal — can lead to demolition orders.',
        ],
      },
      {
        type: 'cta',
        text: 'Want to check if a specific land parcel is convertible? Pahadi Estates can assess this for you — reach out today.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. HP RERA GUIDE
  // ─────────────────────────────────────────────
  {
    id: 'hp-rera',
    title: 'HP RERA — Real Estate Regulatory Authority Guide',
    type: 'article',
    content: [
      {
        type: 'heading',
        text: 'HP RERA Kya Hai?',
      },
      {
        type: 'paragraph',
        text: 'RERA (Real Estate Regulatory Authority) ek central act hai jo 2016 mein aaya tha. Himachal Pradesh ne apna RERA 2017 mein implement kiya. Iska purpose hai buyers ko protect karna, developers ko accountable banana, aur real estate transactions mein transparency lana.',
      },
      {
        type: 'heading',
        text: 'Kaun Sa Project RERA Register Karna Padta Hai?',
      },
      {
        type: 'list',
        items: [
          'Residential projects with plot area of 500 sq mt or more',
          'Projects with 8 or more units/apartments',
          'Commercial projects above 500 sq mt',
          'Any ongoing project not completed before RERA enactment',
        ],
      },
      {
        type: 'heading',
        text: 'Property RERA Mein Verify Kaise Karein?',
      },
      {
        type: 'list',
        items: [
          'Visit the HP RERA official website',
          'Go to "Project Search" or "Agent Search" section',
          'Enter project name, location, or registration number',
          'Check status: registered, expired, or under review',
          'Also verify the agent/broker RERA registration number',
        ],
      },
      {
        type: 'heading',
        text: 'Complaint Process',
      },
      {
        type: 'list',
        items: [
          'File complaint online on HP RERA portal',
          'Complaint fee: ₹1,000 for individuals',
          'Builder/developer must respond within 30 days',
          'RERA adjudicating officer makes a decision',
          'Appeals go to HP RERA Appellate Tribunal',
        ],
      },
      {
        type: 'highlight',
        text: 'All Pahadi Estates listed projects are RERA-compliant. We verify RERA status before listing any property.',
      },
      {
        type: 'cta',
        text: 'Want us to verify RERA status of a specific property? Contact Pahadi Estates — we\'ll check it for you.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. HOME LOAN GUIDE
  // ─────────────────────────────────────────────
  {
    id: 'home-loan',
    title: 'Home Loan Guide for HP Property Buyers',
    type: 'article',
    content: [
      {
        type: 'heading',
        text: 'Kaun Si Banks HP Mein Loan Deti Hain?',
      },
      {
        type: 'list',
        items: [
          'SBI (State Bank of India) — most widely available in HP',
          'Punjab National Bank (PNB)',
          'HDFC Bank',
          'ICICI Bank (major towns only)',
          'UCO Bank (active in HP hills)',
          'HP State Cooperative Bank (for local buyers)',
          'Himachal Pradesh Gramin Bank',
        ],
      },
      {
        type: 'heading',
        text: 'Non-HP Buyers Ke Liye Challenges',
      },
      {
        type: 'list',
        items: [
          'Most banks require Section 118 permission before disbursing loan',
          'Property must be non-agricultural and RERA compliant',
          'Some private banks are cautious about hill properties due to landslide risk zones',
          'Remote properties without proper road access may be rejected',
          'Valuation reports from local approved valuers required',
        ],
      },
      {
        type: 'heading',
        text: 'Documents Required for Home Loan',
      },
      {
        type: 'list',
        items: [
          'KYC: Aadhaar, PAN, Passport size photos',
          'Income proof: 3 months salary slips or 2 years ITR (self-employed)',
          'Bank statements: Last 6 months',
          'Property documents: Sale agreement, jamabandi, registry chain',
          'Section 118 permission copy (for non-HP buyers)',
          'NOC from seller / society if applicable',
          'Approved building plan (for construction loans)',
          'RERA registration certificate of project',
        ],
      },
      {
        type: 'heading',
        text: 'Pro Tips',
      },
      {
        type: 'list',
        items: [
          'Get Section 118 permission approved before applying — most banks won\'t process without it',
          'Pre-approved loans speed up purchase — approach bank early',
          'Check for HP Govt housing subsidy schemes (PMAY applicable in some areas)',
          'Use a local CA/advisor familiar with HP property for valuation',
          'Compare processing fees — SBI typically lower than private banks',
        ],
      },
      {
        type: 'cta',
        text: 'Need help navigating home loans for your HP property? Pahadi Estates has tie-ups with local bank advisors — contact us.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 9. NRI GUIDE
  // ─────────────────────────────────────────────
  {
    id: 'nri-guide',
    title: 'NRI Property Buying Guide — Himachal Pradesh',
    type: 'article',
    content: [
      {
        type: 'heading',
        text: 'FEMA Rules for NRIs',
      },
      {
        type: 'paragraph',
        text: 'NRI stands for Non-Resident Indian. Under FEMA (Foreign Exchange Management Act), NRIs can purchase property in India subject to certain conditions. In HP, they additionally need Section 118 permission for residential/commercial plots.',
      },
      {
        type: 'list',
        items: [
          'NRIs can buy residential and commercial property in India',
          'Agricultural land, plantation property, and farmhouses CANNOT be purchased by NRIs in India',
          'In HP: Section 118 permission required additionally',
          'Payment must be through NRE/NRO account or inward remittance — not foreign currency directly',
          'OCI (Overseas Citizen of India) has same property rights as NRIs',
          'Foreign nationals of non-Indian origin need RBI/Govt approval — complex process',
        ],
      },
      {
        type: 'heading',
        text: 'Power of Attorney (PoA)',
      },
      {
        type: 'paragraph',
        text: 'Agar NRI India nahi aa sakta, toh registered Power of Attorney (PoA) kisi trusted person (relative/lawyer) ko deed execute karne ka authority deta hai.',
      },
      {
        type: 'list',
        items: [
          'PoA must be notarized in the country of residence',
          'Apostilled if the country is part of Hague Convention (USA, UK, etc.)',
          'Stamped and registered in India before use',
          'Should specifically mention HP property and transaction details',
        ],
      },
      {
        type: 'heading',
        text: 'Tax Implications for NRIs',
      },
      {
        type: 'list',
        items: [
          'TDS: Buyer must deduct 20% TDS on capital gains if selling NRI\'s property',
          'LTCG (Long Term Capital Gains): 20% with indexation after 2 years',
          'STCG: As per income tax slab if held under 2 years',
          'NRI must file Indian income tax return for rental income',
          'Double Taxation Avoidance Agreement (DTAA) may reduce tax liability — consult CA',
        ],
      },
      {
        type: 'heading',
        text: 'Repatriation of Funds',
      },
      {
        type: 'list',
        items: [
          'Sale proceeds can be repatriated up to USD 1 million per financial year',
          'Property must have been purchased from NRE/inward remittance funds originally',
          'CA certificate (Form 15CA/15CB) required before remittance',
          'Repatriation through NRE account preferred',
        ],
      },
      {
        type: 'cta',
        text: 'NRI ho aur HP mein invest karna chahte ho? Pahadi Estates NRI buyers ke saath kaafi kaam kar chuka hai — call ya WhatsApp karein.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 10. SCAMS & RED FLAGS
  // ─────────────────────────────────────────────
  {
    id: 'scams-red-flags',
    title: 'Property Scams & Red Flags — Khud Ko Protect Karein',
    type: 'article',
    content: [
      {
        type: 'heading',
        text: 'Common Scams in HP Property Market',
      },
      {
        type: 'heading',
        text: '1. Fake Documents',
      },
      {
        type: 'list',
        items: [
          'Forged Jamabandi with wrong owner name',
          'Fake Section 118 permission certificates',
          'Tampered registry documents',
          'Photoshopped NOCs from government departments',
        ],
      },
      {
        type: 'highlight',
        text: 'Protection: Always verify documents from original government sources — Sub-Registrar office, Revenue Dept, HP RERA portal. Never rely only on seller-provided copies.',
      },
      {
        type: 'heading',
        text: '2. Disputed / Litigation Land',
      },
      {
        type: 'list',
        items: [
          'Property under court case (stay order)',
          'Ancestral property with multiple legal heirs — not all consenting',
          'Boundary disputes with neighbours',
          'Land under government acquisition proceedings',
        ],
      },
      {
        type: 'highlight',
        text: 'Protection: Encumbrance Certificate + court record search + local enquiry from Patwari and neighbours.',
      },
      {
        type: 'heading',
        text: '3. Benami Transactions',
      },
      {
        type: 'paragraph',
        text: 'Benami property is held in someone else\'s name (often a relative or employee) but paid for by someone else — usually to circumvent Section 118 restrictions or hide black money. The Benami Transactions (Prohibition) Amendment Act, 2016 makes this a serious criminal offence.',
      },
      {
        type: 'list',
        items: [
          'If you unknowingly buy benami property, it can be confiscated',
          'Seller may not have true legal authority to sell',
          'Red flag: Seller\'s name on deed doesn\'t match the person you\'re negotiating with',
        ],
      },
      {
        type: 'heading',
        text: '4. Warning Signs — Agar Yeh Dikh Raha Hai Toh Ruk Jaao',
      },
      {
        type: 'list',
        items: [
          'Seller is in a hurry to close without letting you verify documents',
          'Deal price is significantly below market rate — "too good to be true"',
          'Agent cannot provide original documents, only photocopies',
          'Property in remote area with no road access or address',
          'Seller cannot explain the ownership chain clearly',
          'No RERA registration for a new project colony',
          'Advance token money demanded before any documentation',
          'Multiple sellers claim ownership of the same plot',
        ],
      },
      {
        type: 'cta',
        text: 'Suspicious about a property deal? Pahadi Estates provides independent due diligence services — ek call karein, hum verify kar denge.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 11. FAQ
  // ─────────────────────────────────────────────
  {
    id: 'faq',
    title: 'Frequently Asked Questions — HP Property Buying',
    type: 'faq',
    content: [
      {
        type: 'qa',
        question: 'Can outsiders (non-HP people) buy land in Himachal Pradesh?',
        answer:
          'Yes, but with restrictions. Non-HP Indian citizens can buy residential and commercial plots/flats with prior permission under Section 118 of HP Tenancy & Land Reforms Act. Agricultural land is NOT allowed for non-Himachalis under any circumstance.',
      },
      {
        type: 'qa',
        question: 'What is Section 118 of HP Tenancy Act?',
        answer:
          'Section 118 is a state law that restricts transfer of non-agricultural land to non-HP residents without prior State Government permission. It exists to protect HP\'s land ecology and prevent land speculation by outsiders.',
      },
      {
        type: 'qa',
        question: 'Do I need Section 118 permission to buy a flat in Shimla?',
        answer:
          'Yes, if you are not an HP bonafide resident, you need Section 118 permission even for a flat or apartment in Shimla. However, the process for flats in approved RERA projects tends to be more streamlined.',
      },
      {
        type: 'qa',
        question: 'How long does Section 118 permission take?',
        answer:
          'Typically 3 to 6 months, depending on the district and completeness of your application. Shimla and Kangra districts tend to have clearer processes. Pahadi Estates helps prepare complete applications to avoid delays.',
      },
      {
        type: 'qa',
        question: 'What is stamp duty for women buyers in HP?',
        answer:
          '4% stamp duty applies for female buyers in HP, versus 6% for male buyers. Joint purchase (male + female) attracts 5%. Registration fee is 2% in all cases. So total cost is approximately 6% for women and 8% for men.',
      },
      {
        type: 'qa',
        question: 'Can NRIs buy property in Himachal Pradesh?',
        answer:
          'Yes, NRIs can buy residential and commercial property in HP subject to Section 118 permission and FEMA compliance. Agricultural land is NOT allowed for NRIs. Payments must be through NRE/NRO accounts or inward remittance.',
      },
      {
        type: 'qa',
        question: 'What is Jamabandi and why is it important?',
        answer:
          'Jamabandi is the official Record of Rights in HP. It shows the current owner, land type, area, and any encumbrances. It is the most important document to verify before buying any property in HP. Always get a fresh certified copy from the Patwari office.',
      },
      {
        type: 'qa',
        question: 'Can I convert agricultural land to residential in HP?',
        answer:
          'Yes, but it requires formal government approval from the DC office, NOC from Agriculture and Forest Departments, and TCP (Town & Country Planning) approval. Even after conversion, Section 118 restrictions continue to apply for non-HP buyers.',
      },
      {
        type: 'qa',
        question: 'Is Himachal Pradesh RERA applicable to all properties?',
        answer:
          'HP RERA applies to projects with plot area of 500 sq mt or more, or those with 8+ units. Smaller individual resale properties may not need RERA registration, but it\'s always good to check.',
      },
      {
        type: 'qa',
        question: 'What is a Bonafide Himachali Certificate?',
        answer:
          'It is a domicile certificate issued by the HP state government certifying permanent residency in HP. Holders are exempt from Section 118 restrictions and can buy agricultural land. It requires 15+ years of residence or ancestral HP connection.',
      },
      {
        type: 'qa',
        question: 'Can I get a home loan for an HP property if I live outside the state?',
        answer:
          'Yes, banks like SBI, HDFC, and PNB offer loans. However, most require Section 118 permission to be in place before disbursement. Properties in remote locations without road access may face valuation challenges.',
      },
      {
        type: 'qa',
        question: 'What documents should I check before buying a plot in HP?',
        answer:
          'Jamabandi (Record of Rights), Encumbrance Certificate (last 13–30 years), original registry chain, Section 118 permission, NOCs from relevant departments, RERA registration (for projects), and Tatima (site map) from Patwari.',
      },
      {
        type: 'qa',
        question: 'Is it safe to buy property through Pahadi Estates?',
        answer:
          'All properties listed on Pahadi Estates are physically verified, document-checked, and Section 118 status confirmed before listing. We provide end-to-end assistance from property selection to registry. Our RERA registration number is HP-RERA-2021-XXXX.',
      },
      {
        type: 'qa',
        question: 'What are common scams to watch out for in HP property market?',
        answer:
          'Watch out for: fake or tampered Jamabandi, disputed/litigation land, benami property transactions, agents with no RERA registration, unrealistically low prices, and pressure to pay token before documents are shared.',
      },
      {
        type: 'qa',
        question: 'Can a company registered outside HP buy land in Himachal?',
        answer:
          'Companies can buy non-agricultural property in HP for commercial purposes with government permission. Agricultural land purchase is not allowed. The process is similar to Section 118 permission for individuals but requires additional company documents.',
      },
    ],
  },
]

export default legalGuideData
