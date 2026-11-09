// ===================== i18n =====================
const translations = {
  en: {
    nav_capabilities: "Supply",
    nav_heritage: "Heritage",
    nav_sourcing: "Sourcing",
    nav_farmers: "Farmers",
    nav_processing: "Processing",
    nav_mixtures: "Mixtures",
    nav_buyers: "Buyers",
    nav_contact: "Contact",

    hero_eyebrow: "Rakhiyal · Near Rakhiyal–Dakor · Kheda District, Gujarat · Est. 1950",
    hero_brand: "R D Patel &amp; Sons",
    hero_headline: "Seasonally Calibrated Tobacco for Consistent Bidi Production",
    hero_lede: "Farmer-linked sourcing in the Kheda–Anand belt, in-house processing and grading, custom mixture development, and scheduled supply across India — guided by four generations of practical judgment.",
    hero_stat1_l: "years in the trade",
    hero_stat2_l: "partner farming families",
    hero_stat3_l: "generations, one craft",
    hero_cta_primary: "Discuss Your Required Blend",
    hero_cta_secondary: "View Grades &amp; Processing",
    whatsapp_template: "Namaste R D Patel & Sons,\nBusiness name:\nCity / State:\nWe are a: (Bidi manufacturer / Tobacco trader / Nicotine extraction unit / Fertilizer manufacturer)\nRequired material: (Seasonal mixture / Patti / Ravo / Kodi / Dust / Plain tobacco)\nApproximate quantity:\nDelivery frequency:\nCurrent requirement or issue:\nPreferred time for a call:",

    capabilities_eyebrow: "At a Glance",
    capabilities_title: "What We Supply",
    capabilities_body: "Core tobacco grades, seasonal mixtures and scheduled supply from one experienced source.",
    capblock1_title: "Custom Products",
    capblock1_items: "<li>Seasonal mixtures calibrated to your specification</li><li>Grade-wise supply — patti, ravo, kodi and dust</li><li>Plain, unblended tobacco for traders</li>",
    capblock2_title: "Integrated Supply",
    capblock2_items: "<li>750+ farmer-linked sourcing across the Kheda belt</li><li>Own godowns and in-house processing</li><li>One factory, from raw leaf to finished grade</li>",
    capblock3_title: "Reliable Fulfilment",
    capblock3_items: "<li>Regular, agreed delivery schedules</li><li>Customer-specific dispatch planning</li><li>Dependable repeat supply without constant follow-up</li>",

    heritage_eyebrow: "Our Story",
    heritage_title: "Four Generations, One Craft",
    heritage_body: "Four generations, one continuous thread of sourcing, processing and blending — since 1950.",
    tl1_year: "Founded, 1950",
    tl1_title: "Ranchhodbhai Desaibhai Patel begins the trade",
    tl1_body: "Began procuring and grading tobacco from local farmers along the Mahisagar.",
    tl2_year: "Second generation",
    tl2_title: "Kanubhai Ranchhodbhai Patel",
    tl2_body: "Expanded the farmer network and built the godowns and processing capacity still in use today.",
    tl3_year: "Third generation",
    tl3_title: "Mrugeshkumar &amp; Parasharbhai Kanubhai Patel",
    tl3_body: "Brought in Nipani tobacco and perfected seasonal mixture blending and scheduled delivery.",
    tl4_year: "Today",
    tl4_title: "Dev &amp; Hari",
    tl4_body: "Carrying the same sourcing, processing and blending into the digital era.",
    tl_photo_cap: "Kanubhai Ranchhodbhai Patel, with his wife, at home in Rakhiyal.",

    sourcing_eyebrow: "Where It Comes From",
    sourcing_title: "Two Soils, One Signature Blend",
    sourcing_body: "A dependable bidi mixture rarely comes from one growing region alone. We bring together leaf from two very different tracts of India to build a mixture with both consistency and character.",
    origin1_tag: "Home Ground",
    origin1_title: "Kheda–Anand Belt, Gujarat",
    origin1_body: "Our own backyard — the tobacco-growing tract along the Mahisagar and Vatrak rivers in Kheda and Anand districts, often called Gujarat's \"golden leaf\" country. This is where our farmer network grows the bidi tobacco that forms the body of every mixture we make.",
    origin2_tag: "Specialty Sourcing",
    origin2_title: "Nipani, Karnataka",
    origin2_body: "From the Nipani tobacco belt on the Karnataka–Maharashtra border, we bring in specialty leaf known for the aroma and strength bidi rollers look for — blended in to round out our house mixtures.",
    nipani_photo_note: "Representative tobacco-curing imagery",

    farmers_eyebrow: "Our Backbone",
    farmers_title: "750+ Farming Families, One Partnership",
    farmers_body: "Long before the tobacco reaches our factory floor, it starts with a relationship. We work directly with hundreds of growers across the Kheda belt — not as a one-season buyer, but as a partner across the whole crop cycle.",
    pillar1_title: "We finance the crop",
    pillar1_body: "We extend financing to growers ahead of the season, so cultivation isn't held back by working capital.",
    pillar2_title: "We advise on farming",
    pillar2_body: "Decades of buying experience feed back into practical guidance on crop practices, so quality starts in the field.",
    pillar3_title: "We procure at harvest",
    pillar3_body: "We collect the tobacco directly after harvest, so our farmers never have to invest in their own storage.",
    pillar4_title: "Factory and godowns, together",
    pillar4_body: "Our processing factory sits alongside our own godowns in Rakhiyal — harvested tobacco moves straight from collection into storage and processing.",

    processing_eyebrow: "From Raw Leaf to Separated Grades",
    processing_title: "One Process, Four Outputs",
    processing_body: "Raw tobacco leaf goes through a single crushing and sorting line at our factory — separating into the grades bidi manufacturers order by name, plus one byproduct that finds a market of its own.",
    flow1_title: "Raw Leaf Intake",
    flow1_body: "Cured tobacco arrives from our own godowns, ready for processing.",
    flow2_title: "Crushing & Sorting",
    flow2_body: "A single processing line crushes and grades the leaf, separating it by size and part of the plant.",
    flow3_title: "Four Outputs, Ready to Ship",
    flow3_body: "Three grades go into our bidi mixtures; the fourth is sold on to a different industry entirely.",
    grade1_hindi: "पत्ती", grade1_roman: "Patti", grade1_title: "Leaf-rich Fraction", grade1_body: "The principal leaf component, used as the body of selected mixtures.", grade1_use: "Blended or sold separately",
    grade2_hindi: "रवो", grade2_roman: "Ravo", grade2_title: "Granulated Fraction", grade2_body: "A smaller cut fraction, supplied separately or incorporated per customer formulation.", grade2_use: "Blended or sold separately",
    grade3_hindi: "कोडी", grade3_roman: "Kodi", grade3_title: "Stem &amp; Vein Fraction", grade3_body: "A heavier, economical fraction, used according to the required product profile.", grade3_use: "Blended or sold separately",
    grade4_hindi: "धूल", grade4_roman: "Dust", grade4_title: "Fine Dust", grade4_body: "The finest fraction from sorting. We don't put it in bidi mixtures at all — instead we sell it on to nicotine-extraction units and fertilizer manufacturers, who use it as a raw material in its own right.", grade4_use: "Sold onward, not blended",

    mixtures_eyebrow: "Our Signature Skill",
    mixtures_title: "A Blend for Every Season",
    mixtures_body: "Tobacco doesn't just behave differently with Gujarat's changing humidity and heat — its moisture behaviour and perceived strength both shift with the season. A mixture calibrated for peak summer can feel far too strong, or far too weak, once winter sets in. Balancing moisture and strength together, season after season, is the expertise our grandfather and father built over decades — and it's what keeps our customers on a reliable delivery schedule instead of guessing.",
    season1_name: "Summer",
    season1_desc: "March – June",
    season1_body: "In the dry heat, we calibrate the mixture toward a milder strength profile, while managing moisture so it doesn't turn brittle before it reaches the roller.",
    season2_name: "Monsoon",
    season2_desc: "July – September",
    season2_body: "High humidity is the season's biggest risk — our mixtures are balanced to resist excess moisture pickup and hold a consistent strength profile despite the damp.",
    season3_name: "Winter",
    season3_desc: "October – February",
    season3_body: "Cooler, drier air changes how the mixture handles — we calibrate toward a fuller strength profile so the finished bidi performs consistently through winter.",
    mixtures_delivery: "Whatever the season, deliveries go out on a regular, agreed schedule — so our customers plan production around us, not around uncertainty.",
    factor_moisture_label: "Ambient moisture",
    factor_control_label: "Moisture-control emphasis",
    factor_strength_label: "Strength profile",
    season1_moisture_val: "Low",
    season1_control_val: "Medium",
    season1_strength_val: "Milder",
    season2_moisture_val: "High",
    season2_control_val: "High",
    season2_strength_val: "Balanced",
    season3_moisture_val: "Low–Moderate",
    season3_control_val: "Medium",
    season3_strength_val: "Fuller",
    factor_disclaimer: "These indicators explain our blending approach; they are not fixed specifications. Final composition is adjusted to customer requirements, destination climate and available crop.",

    buyers_eyebrow: "Who We Serve",
    buyers_title: "Supplying Established and Regional Buyers",
    buyers_body: "For decades, our mixtures have gone out to bidi manufacturers large and small — long-standing relationships in a few key hubs, alongside many smaller customers across India.",
    segment1_title: "Bidi Manufacturers",
    segment1_body: "Our seasonal house mixtures — patti, ravo and kodi blended to order — delivered on a regular schedule.",
    segment2_title: "Plain Tobacco Traders",
    segment2_body: "We also supply plain, unblended tobacco to traders and dealers who aren't bidi manufacturers themselves.",
    buyers_current_label: "Current Supply Relationships",
    buyers_cluster_title: "Open for New Trade Partnerships",
    buyers_cluster_body: "We welcome qualified inquiries from bidi manufacturers, plain-tobacco traders, nicotine-extraction units and fertilizer manufacturers across India. Our team can discuss the required grade, destination climate, expected quantity and delivery schedule directly.",
    buyers_cta: "Start a Trade Inquiry",

    contact_eyebrow: "Get In Touch",
    contact_title: "Let's Talk Tobacco",
    contact_body: "Whether you're a bidi manufacturer, a plain tobacco trader looking for a reliable seasonal supplier, or a grower in the Kheda belt — we'd like to hear from you.",
    contact_location_label: "Factory & Godown",
    contact_location_value: "NH47, Rakhiyal, near Rakhiyal–Dakor, Kheda District, Gujarat 388230",
    contact_phone_label: "Phone / WhatsApp",
    contact_email_label: "Email",
    contact_whatsapp: "Message on WhatsApp",
    map_link_title: "Open in Google Maps",
    map_link_sub: "View our Google Business Profile · 4.6★",

    footer_tagline: "Four generations of tobacco craftsmanship, since 1950.",
    compliance_line: "For legitimate business and trade inquiries only. Tobacco consumption is injurious to health. No consumer sales are conducted through this website.",
  },
  hi: {
    nav_capabilities: "आपूर्ति",
    nav_heritage: "विरासत",
    nav_sourcing: "स्रोत",
    nav_farmers: "किसान",
    nav_processing: "प्रसंस्करण",
    nav_mixtures: "मिश्रण",
    nav_buyers: "ग्राहक",
    nav_contact: "संपर्क",

    hero_eyebrow: "रखियाल · राखियाल–डाकोर के निकट · जिला खेड़ा, गुजरात · स्थापना 1950",
    hero_brand: "आर डी पटेल एंड संस",
    hero_headline: "बीड़ी उत्पादन में निरंतरता के लिए, मौसम के अनुसार संतुलित तम्बाकू",
    hero_lede: "खेड़ा–आणंद क्षेत्र में किसानों से सीधा जुड़ाव, अपनी फैक्ट्री में प्रसंस्करण व ग्रेडिंग, ग्राहक की ज़रूरत अनुसार मिश्रण, और भारत भर में तय शेड्यूल पर आपूर्ति — चार पीढ़ियों के व्यावहारिक अनुभव के साथ।",
    hero_stat1_l: "वर्षों का अनुभव",
    hero_stat2_l: "साझेदार किसान परिवार",
    hero_stat3_l: "पीढ़ियाँ, एक हुनर",
    hero_cta_primary: "अपनी ज़रूरत का मिश्रण बताएँ",
    hero_cta_secondary: "ग्रेड व प्रक्रिया देखें",
    whatsapp_template: "नमस्ते आर डी पटेल एंड संस,\nव्यवसाय का नाम:\nशहर / राज्य:\nहम हैं: (बीड़ी निर्माता / तम्बाकू व्यापारी / निकोटीन-निष्कर्षण इकाई / उर्वरक निर्माता)\nआवश्यक सामग्री: (मौसमी मिश्रण / पत्ती / रवो / कोडी / धूल / सादा तम्बाकू)\nअनुमानित मात्रा:\nडिलीवरी की आवृत्ति:\nवर्तमान आवश्यकता या समस्या:\nकॉल के लिए पसंदीदा समय:",

    capabilities_eyebrow: "एक नज़र में",
    capabilities_title: "हम क्या आपूर्ति करते हैं",
    capabilities_body: "मुख्य तम्बाकू ग्रेड, मौसमी मिश्रण और तय शेड्यूल पर आपूर्ति — एक अनुभवी स्रोत से।",
    capblock1_title: "कस्टम उत्पाद",
    capblock1_items: "<li>आपकी ज़रूरत के अनुसार तैयार मौसमी मिश्रण</li><li>ग्रेड के अनुसार आपूर्ति — पत्ती, रवो, कोडी और धूल</li><li>व्यापारियों के लिए सादा, बिना मिश्रित तम्बाकू</li>",
    capblock2_title: "एकीकृत आपूर्ति",
    capblock2_items: "<li>खेड़ा क्षेत्र में 750+ किसानों से सीधा जुड़ाव</li><li>अपने गोदाम और स्वयं की प्रसंस्करण सुविधा</li><li>एक फैक्ट्री, कच्ची पत्ती से तैयार ग्रेड तक</li>",
    capblock3_title: "भरोसेमंद डिलीवरी",
    capblock3_items: "<li>नियमित, सहमत डिलीवरी शेड्यूल</li><li>ग्राहक-विशिष्ट डिस्पैच योजना</li><li>बार-बार याद दिलाने की आवश्यकता के बिना भरोसेमंद नियमित आपूर्ति</li>",

    heritage_eyebrow: "हमारी कहानी",
    heritage_title: "चार पीढ़ियाँ, एक कला",
    heritage_body: "1950 से चार पीढ़ियाँ, स्रोत से लेकर प्रसंस्करण और मिश्रण तक एक निरंतर परंपरा।",
    tl1_year: "स्थापना, 1950",
    tl1_title: "रणछोड़भाई देसाईभाई पटेल ने व्यापार शुरू किया",
    tl1_body: "महीसागर के किनारे स्थानीय किसानों से तम्बाकू खरीदना और छाँटना शुरू किया।",
    tl2_year: "दूसरी पीढ़ी",
    tl2_title: "कनुभाई रणछोड़भाई पटेल",
    tl2_body: "किसान नेटवर्क का विस्तार किया और गोदाम व प्रसंस्करण क्षमता स्थापित की, जो आज भी उपयोग में है।",
    tl3_year: "तीसरी पीढ़ी",
    tl3_title: "मृगेशकुमार और पराशरभाई कनुभाई पटेल",
    tl3_body: "निपानी से विशेष तम्बाकू लाए और मौसमी मिश्रण व समय पर डिलीवरी में महारत हासिल की।",
    tl4_year: "आज",
    tl4_title: "देव और हरि",
    tl4_body: "वही स्रोत, वही प्रसंस्करण, वही मिश्रण-कला — अब डिजिटल युग में आगे बढ़ रही है।",
    tl_photo_cap: "कनुभाई रणछोड़भाई पटेल, अपनी पत्नी के साथ, रखियाल स्थित घर में।",

    sourcing_eyebrow: "स्रोत कहाँ से",
    sourcing_title: "दो मिट्टियाँ, एक खास मिश्रण",
    sourcing_body: "एक भरोसेमंद बीड़ी मिश्रण शायद ही कभी एक ही क्षेत्र से आता है। हम भारत के दो अलग-अलग क्षेत्रों की पत्तियों को मिलाकर एक ऐसा मिश्रण बनाते हैं जिसमें स्थिरता भी हो और खासियत भी।",
    origin1_tag: "अपनी धरती",
    origin1_title: "खेड़ा–आणंद क्षेत्र, गुजरात",
    origin1_body: "हमारा अपना क्षेत्र — खेड़ा और आणंद जिलों में महीसागर और वात्रक नदियों के किनारे का तम्बाकू-क्षेत्र, जिसे अक्सर गुजरात की \"सुनहरी पत्ती\" कहा जाता है। यहीं हमारा किसान नेटवर्क वह बीड़ी तम्बाकू उगाता है जो हर मिश्रण की बुनियाद बनता है।",
    origin2_tag: "विशेष स्रोत",
    origin2_title: "निपानी, कर्नाटक",
    origin2_body: "कर्नाटक–महाराष्ट्र सीमा पर स्थित निपानी तम्बाकू क्षेत्र से हम वह विशेष पत्ती लाते हैं जो अपनी सुगंध और तीव्रता के लिए जानी जाती है — जो हमारे मिश्रण को पूर्णता देती है।",
    nipani_photo_note: "प्रतिनिधि तम्बाकू-क्यूरिंग चित्र",

    farmers_eyebrow: "हमारी नींव",
    farmers_title: "750+ किसान परिवार, एक साझेदारी",
    farmers_body: "तम्बाकू हमारी फैक्ट्री तक पहुँचने से बहुत पहले, यह एक रिश्ते से शुरू होता है। हम खेड़ा क्षेत्र के सैकड़ों किसानों के साथ सीधे काम करते हैं — एक मौसम के खरीदार के रूप में नहीं, बल्कि पूरी फसल-चक्र के साझेदार के रूप में।",
    pillar1_title: "हम फसल को वित्तपोषित करते हैं",
    pillar1_body: "हम मौसम शुरू होने से पहले किसानों को वित्तीय सहायता देते हैं, ताकि पूंजी की कमी खेती में बाधा न बने।",
    pillar2_title: "हम खेती पर सलाह देते हैं",
    pillar2_body: "दशकों के खरीद अनुभव से मिली समझ किसानों को व्यावहारिक सलाह के रूप में वापस मिलती है, ताकि गुणवत्ता खेत से ही शुरू हो।",
    pillar3_title: "हम फसल कटाई पर खरीद लेते हैं",
    pillar3_body: "हम कटाई के तुरंत बाद तम्बाकू खरीद लेते हैं, जिससे हमारे किसानों को अपने भंडारण में निवेश नहीं करना पड़ता।",
    pillar4_title: "फैक्ट्री और गोदाम, साथ-साथ",
    pillar4_body: "हमारी प्रसंस्करण फैक्ट्री रखियाल में हमारे अपने गोदामों के साथ ही स्थित है — तम्बाकू सीधे संग्रहण से भंडारण और प्रसंस्करण तक पहुँचता है।",

    processing_eyebrow: "कच्ची पत्ती से अलग-अलग ग्रेड तक",
    processing_title: "एक प्रक्रिया, चार उत्पाद",
    processing_body: "कच्ची तम्बाकू पत्ती हमारी फैक्ट्री की एक ही क्रशिंग और छँटाई लाइन से गुज़रती है — तीन ग्रेड में बँटती है जिन्हें बीड़ी निर्माता नाम लेकर मंगवाते हैं, और एक ऐसा उपोत्पाद भी निकलता है जिसका अपना अलग बाज़ार है।",
    flow1_title: "कच्ची पत्ती की आमद",
    flow1_body: "पकी हुई तम्बाकू हमारे अपने गोदामों से प्रसंस्करण के लिए आती है।",
    flow2_title: "क्रशिंग व छँटाई",
    flow2_body: "एक ही प्रसंस्करण लाइन पत्ती को कुचलती और छाँटती है, आकार व पौधे के भाग के अनुसार अलग करती है।",
    flow3_title: "चार उत्पाद, भेजने को तैयार",
    flow3_body: "तीन ग्रेड हमारे बीड़ी मिश्रणों में जाते हैं; चौथा पूरी तरह एक अलग उद्योग को बेचा जाता है।",
    grade1_hindi: "पत्ती", grade1_roman: "Patti", grade1_title: "पत्ती-प्रधान अंश", grade1_body: "मुख्य पत्ती घटक, चुनिंदा मिश्रणों के आधार के रूप में उपयोग होता है।", grade1_use: "मिश्रण में या अलग से बेचा जाता है",
    grade2_hindi: "रवो", grade2_roman: "Ravo", grade2_title: "दानेदार अंश", grade2_body: "एक छोटा कटा हुआ अंश, अलग से आपूर्ति किया जाता है या ग्राहक के फॉर्मूलेशन के अनुसार मिलाया जाता है।", grade2_use: "मिश्रण में या अलग से बेचा जाता है",
    grade3_hindi: "कोडी", grade3_roman: "Kodi", grade3_title: "डंठल व नस अंश", grade3_body: "एक भारी, किफ़ायती अंश, आवश्यक उत्पाद प्रोफ़ाइल के अनुसार उपयोग होता है।", grade3_use: "मिश्रण में या अलग से बेचा जाता है",
    grade4_hindi: "धूल", grade4_roman: "Dust", grade4_title: "बारीक धूल", grade4_body: "छँटाई से निकला सबसे महीन हिस्सा। इसे हम बीड़ी मिश्रण में बिल्कुल उपयोग नहीं करते — बल्कि निकोटीन-निष्कर्षण इकाइयों और उर्वरक निर्माताओं को बेचते हैं, जो इसे अपने कच्चे माल के रूप में उपयोग करते हैं।", grade4_use: "आगे बेचा जाता है, मिश्रण में नहीं",

    mixtures_eyebrow: "हमारी खासियत",
    mixtures_title: "हर मौसम के लिए एक मिश्रण",
    mixtures_body: "गुजरात की बदलती नमी और गर्मी के साथ तम्बाकू का व्यवहार ही नहीं बदलता — मौसम के अनुसार नमी और तीव्रता (स्ट्रेंथ प्रोफ़ाइल) दोनों बदलते हैं। जो मिश्रण चिलचिलाती गर्मी के लिए सही हो, वही सर्दी में बहुत तेज़ या बहुत हल्का हो सकता है। नमी और तीव्रता दोनों को साथ संतुलित करना ही वह हुनर है जो हमारे दादाजी और पिताजी ने दशकों में सीखा — और यही हमारे ग्राहकों को अनुमान लगाने की बजाय एक भरोसेमंद डिलीवरी शेड्यूल देता है।",
    season1_name: "गर्मी",
    season1_desc: "मार्च – जून",
    season1_body: "शुष्क गर्मी में हम मिश्रण को हल्की तीव्रता की ओर संतुलित करते हैं, साथ ही नमी को भी नियंत्रित रखते हैं ताकि यह बेलने वाले तक पहुँचने से पहले भंगुर न हो।",
    season2_name: "मानसून",
    season2_desc: "जुलाई – सितम्बर",
    season2_body: "अधिक नमी इस मौसम का सबसे बड़ा जोखिम है — हमारे मिश्रण अतिरिक्त नमी को झेलने के लिए संतुलित किए जाते हैं, ताकि तीव्रता नमी के बावजूद स्थिर रहे।",
    season3_name: "सर्दी",
    season3_desc: "अक्टूबर – फरवरी",
    season3_body: "ठंडी, शुष्क हवा मिश्रण के व्यवहार को बदल देती है — हम इसे अधिक तीव्रता की ओर संतुलित करते हैं ताकि हर बीड़ी सर्दी भर एक-समान प्रदर्शन करे।",
    mixtures_delivery: "मौसम चाहे जो हो, डिलीवरी एक तय, सहमत शेड्यूल पर जाती है — ताकि हमारे ग्राहक अनिश्चितता की बजाय हमारे भरोसे पर उत्पादन की योजना बनाएँ।",
    factor_moisture_label: "परिवेश की नमी",
    factor_control_label: "नमी-नियंत्रण पर ज़ोर",
    factor_strength_label: "तीव्रता प्रोफ़ाइल",
    season1_moisture_val: "कम",
    season1_control_val: "मध्यम",
    season1_strength_val: "हल्की",
    season2_moisture_val: "अधिक",
    season2_control_val: "अधिक",
    season2_strength_val: "संतुलित",
    season3_moisture_val: "कम–मध्यम",
    season3_control_val: "मध्यम",
    season3_strength_val: "अधिक तीव्र",
    factor_disclaimer: "ये संकेतक हमारे मिश्रण-दृष्टिकोण को दर्शाते हैं; ये तय विनिर्देश नहीं हैं। अंतिम संरचना ग्राहक की आवश्यकता, गंतव्य जलवायु और उपलब्ध फसल के अनुसार तय की जाती है।",

    buyers_eyebrow: "हम किसे सेवा देते हैं",
    buyers_title: "स्थापित और क्षेत्रीय ग्राहकों को आपूर्ति",
    buyers_body: "दशकों से हमारे मिश्रण छोटे-बड़े बीड़ी निर्माताओं तक पहुँचते रहे हैं — कुछ प्रमुख केंद्रों में लंबे समय के रिश्ते, साथ ही भारत भर में कई छोटे ग्राहक।",
    segment1_title: "बीड़ी निर्माता",
    segment1_body: "हमारे मौसमी मिश्रण — पत्ती, रवो और कोडी, ऑर्डर के अनुसार तैयार — नियमित शेड्यूल पर पहुँचाए जाते हैं।",
    segment2_title: "सादा तम्बाकू व्यापारी",
    segment2_body: "हम उन व्यापारियों और डीलरों को भी सादा, बिना मिश्रित तम्बाकू आपूर्ति करते हैं जो स्वयं बीड़ी निर्माता नहीं हैं।",
    buyers_current_label: "मौजूदा आपूर्ति संबंध",
    buyers_cluster_title: "नई व्यापार साझेदारियों के लिए तैयार",
    buyers_cluster_body: "हम भारत भर के बीड़ी निर्माताओं, सादा तम्बाकू व्यापारियों, निकोटीन-निष्कर्षण इकाइयों और उर्वरक निर्माताओं से योग्य पूछताछ का स्वागत करते हैं। हमारी टीम सीधे आपकी आवश्यक ग्रेड, गंतव्य जलवायु, अनुमानित मात्रा और डिलीवरी शेड्यूल पर बात कर सकती है।",
    buyers_cta: "व्यापार पूछताछ शुरू करें",

    contact_eyebrow: "संपर्क करें",
    contact_title: "आइए तम्बाकू की बात करें",
    contact_body: "चाहे आप बीड़ी निर्माता हों, सादा तम्बाकू व्यापारी जो एक भरोसेमंद मौसमी आपूर्तिकर्ता ढूँढ रहे हों, या खेड़ा क्षेत्र के किसान — हमें आपसे सुनना अच्छा लगेगा।",
    contact_location_label: "फैक्ट्री व गोदाम",
    contact_location_value: "एनएच47, रखियाल, राखियाल–डाकोर के निकट, जिला खेड़ा, गुजरात 388230",
    contact_phone_label: "फ़ोन / व्हाट्सऐप",
    contact_email_label: "ईमेल",
    contact_whatsapp: "व्हाट्सऐप पर संदेश भेजें",
    map_link_title: "गूगल मैप्स में खोलें",
    map_link_sub: "हमारी गूगल बिज़नेस प्रोफ़ाइल देखें · 4.6★",

    footer_tagline: "1950 से तम्बाकू की चार पीढ़ियों की कारीगरी।",
    compliance_line: "केवल वास्तविक व्यावसायिक और व्यापारिक पूछताछ के लिए। तम्बाकू का सेवन स्वास्थ्य के लिए हानिकारक है। इस वेबसाइट के माध्यम से कोई उपभोक्ता बिक्री नहीं की जाती।",
  },
  gu: {
    nav_capabilities: "પુરવઠો",
    nav_heritage: "વારસો",
    nav_sourcing: "સ્ત્રોત",
    nav_farmers: "ખેડૂતો",
    nav_processing: "પ્રક્રિયા",
    nav_mixtures: "મિશ્રણ",
    nav_buyers: "ગ્રાહકો",
    nav_contact: "સંપર્ક",

    hero_eyebrow: "રાખિયાલ · રાખિયાલ–ડાકોર નજીક · જિલ્લો ખેડા, ગુજરાત · સ્થાપના 1950",
    hero_brand: "આર ડી પટેલ એન્ડ સન્સ",
    hero_headline: "બીડી ઉત્પાદનમાં સાતત્ય માટે, ઋતુ પ્રમાણે સંતુલિત તમાકુ",
    hero_lede: "ખેડા–આણંદ પટ્ટામાં ખેડૂતો સાથે સીધો સંબંધ, પોતાની ફેક્ટરીમાં પ્રક્રિયા અને ગ્રેડિંગ, ગ્રાહકની જરૂરિયાત મુજબ મિશ્રણ, અને સમગ્ર ભારતમાં નિયત સમયપત્રક પર પુરવઠો — ચાર પેઢીના વ્યવહારુ અનુભવ સાથે.",
    hero_stat1_l: "વર્ષોનો અનુભવ",
    hero_stat2_l: "ભાગીદાર ખેડૂત પરિવારો",
    hero_stat3_l: "પેઢીઓ, એક કારીગરી",
    hero_cta_primary: "તમારા જરૂરી મિશ્રણ વિશે વાત કરો",
    hero_cta_secondary: "ગ્રેડ અને પ્રક્રિયા જુઓ",
    whatsapp_template: "નમસ્તે આર ડી પટેલ એન્ડ સન્સ,\nવ્યવસાયનું નામ:\nશહેર / રાજ્ય:\nઅમે છીએ: (બીડી ઉત્પાદક / તમાકુ વેપારી / નિકોટિન-નિષ્કર્ષણ એકમ / ખાતર ઉત્પાદક)\nજરૂરી સામગ્રી: (ઋતુ મુજબ મિશ્રણ / પત્તી / રવો / કોડી / ધૂળ / સાદો તમાકુ)\nઅંદાજિત જથ્થો:\nડિલિવરીની આવૃત્તિ:\nહાલની જરૂરિયાત અથવા સમસ્યા:\nકૉલ માટે પસંદગીનો સમય:",

    capabilities_eyebrow: "એક નજરમાં",
    capabilities_title: "અમે શું પુરવઠો આપીએ છીએ",
    capabilities_body: "મુખ્ય તમાકુ ગ્રેડ, ઋતુ મુજબના મિશ્રણો અને નિયત સમયપત્રક પર પુરવઠો — એક અનુભવી સ્ત્રોતમાંથી.",
    capblock1_title: "કસ્ટમ ઉત્પાદનો",
    capblock1_items: "<li>તમારી જરૂરિયાત મુજબ તૈયાર ઋતુ-આધારિત મિશ્રણો</li><li>ગ્રેડ મુજબ પુરવઠો — પત્તી, રવો, કોડી અને ધૂળ</li><li>વેપારીઓ માટે સાદો, મિશ્રણ વગરનો તમાકુ</li>",
    capblock2_title: "સંકલિત પુરવઠો",
    capblock2_items: "<li>ખેડા પટ્ટામાં 750+ ખેડૂતો સાથે સીધો સંબંધ</li><li>પોતાના ગોડાઉન અને સ્વયંની પ્રક્રિયા સુવિધા</li><li>એક ફેક્ટરી, કાચી પત્તીથી તૈયાર ગ્રેડ સુધી</li>",
    capblock3_title: "ભરોસાપાત્ર પરિપૂર્તિ",
    capblock3_items: "<li>નિયમિત, સંમત ડિલિવરી સમયપત્રક</li><li>ગ્રાહક-વિશિષ્ટ ડિસ્પેચ આયોજન</li><li>વારંવાર યાદ અપાવ્યા વગર ભરોસાપાત્ર નિયમિત પુરવઠો</li>",

    heritage_eyebrow: "અમારી કહાની",
    heritage_title: "ચાર પેઢી, એક કલા",
    heritage_body: "1950 થી ચાર પેઢી, સ્ત્રોતથી લઈને પ્રક્રિયા અને મિશ્રણ સુધીની એક સતત પરંપરા.",
    tl1_year: "સ્થાપના, 1950",
    tl1_title: "રણછોડભાઈ દેસાઈભાઈ પટેલે વ્યવસાય શરૂ કર્યો",
    tl1_body: "મહીસાગરના કિનારે સ્થાનિક ખેડૂતો પાસેથી તમાકુ ખરીદવાનું અને વર્ગીકરણ કરવોનું શરૂ કર્યું.",
    tl2_year: "બીજી પેઢી",
    tl2_title: "કનુભાઈ રણછોડભાઈ પટેલ",
    tl2_body: "ખેડૂત નેટવર્કનું વિસ્તરણ કર્યું અને ગોડાઉન તથા પ્રક્રિયા ક્ષમતા ઊભી કરી, જે આજે પણ ઉપયોગમાં છે.",
    tl3_year: "ત્રીજી પેઢી",
    tl3_title: "મૃગેશકુમાર અને પરાશરભાઈ કનુભાઈ પટેલ",
    tl3_body: "નિપાણીથી વિશેષ તમાકુ લાવ્યા અને ઋતુ-આધારિત મિશ્રણ તથા સમયસર ડિલિવરીમાં નિપુણતા મેળવી.",
    tl4_year: "આજે",
    tl4_title: "દેવ અને હરિ",
    tl4_body: "એ જ સ્ત્રોત, એ જ પ્રક્રિયા, એ જ મિશ્રણ-કલા — હવે ડિજિટલ યુગમાં આગળ ધપાવી રહ્યા છીએ.",
    tl_photo_cap: "કનુભાઈ રણછોડભાઈ પટેલ, તેમની પત્ની સાથે, રાખિયાલ સ્થિત ઘરે.",

    sourcing_eyebrow: "ક્યાંથી આવે છે",
    sourcing_title: "બે માટી, એક ખાસ મિશ્રણ",
    sourcing_body: "એક ભરોસાપાત્ર બીડી મિશ્રણ ભાગ્યે જ એક જ પ્રદેશમાંથી આવે છે. અમે ભારતના બે તદ્દન અલગ પ્રદેશોની પત્તીઓને ભેગી કરીને એવું મિશ્રણ બનાવીએ છીએ જેમાં સ્થિરતા પણ હોય અને ખાસિયત પણ.",
    origin1_tag: "પોતાની ધરતી",
    origin1_title: "ખેડા–આણંદ પટ્ટો, ગુજરાત",
    origin1_body: "અમારું પોતાનું ક્ષેત્ર — ખેડા અને આણંદ જિલ્લામાં મહીસાગર અને વાત્રક નદીઓના કિનારે આવેલો તમાકુ-ઉગાડવાનો પટ્ટો, જેને ઘણીવાર ગુજરાતનો \"સોનેરી પત્તી\" પ્રદેશ કહેવાય છે. અહીં જ અમારું ખેડૂત નેટવર્ક તે બીડી તમાકુ ઉગાડે છે જે અમારા દરેક મિશ્રણનો આધાર બને છે.",
    origin2_tag: "વિશેષ સ્ત્રોત",
    origin2_title: "નિપાણી, કર્ણાટક",
    origin2_body: "કર્ણાટક–મહારાષ્ટ્ર સીમા પર આવેલા નિપાણી તમાકુ પટ્ટામાંથી, અમે એ વિશેષ પત્તી લાવીએ છીએ જે તેની સુગંધ અને તીવ્રતા માટે જાણીતી છે — જે અમારા મિશ્રણને સંપૂર્ણતા આપે છે.",
    nipani_photo_note: "પ્રતિનિધિ તમાકુ-ક્યોરિંગ છબી",

    farmers_eyebrow: "અમારો પાયો",
    farmers_title: "750+ ખેડૂત પરિવારો, એક ભાગીદારી",
    farmers_body: "તમાકુ અમારી ફેક્ટરી સુધી પહોંચે તે પહેલાં, તેની શરૂઆત એક સંબંધથી થાય છે. અમે ખેડા પટ્ટાના સેંકડો ખેડૂતો સાથે સીધું કામ કરીએ છીએ — એક ઋતુના ખરીદનાર તરીકે નહીં, પરંતુ સમગ્ર પાક-ચક્રના ભાગીદાર તરીકે.",
    pillar1_title: "અમે પાકને નાણાં પૂરાં પાડીએ છીએ",
    pillar1_body: "અમે ઋતુ શરૂ થાય તે પહેલાં ખેડૂતોને નાણાકીય સહાય આપીએ છીએ, જેથી મૂડીની અછત ખેતીમાં અવરોધ ન બને.",
    pillar2_title: "અમે ખેતી અંગે સલાહ આપીએ છીએ",
    pillar2_body: "દાયકાઓના ખરીદીના અનુભવમાંથી મળેલી સમજ ખેડૂતોને વ્યવહારુ માર્ગદર્શન તરીકે પાછી મળે છે, જેથી ગુણવત્તા ખેતરથી જ શરૂ થાય.",
    pillar3_title: "અમે લણણી વખતે ખરીદી કરીએ છીએ",
    pillar3_body: "અમે લણણી પછી તરત જ તમાકુ એકત્રિત કરીએ છીએ, જેથી અમારા ખેડૂતોને પોતાના સંગ્રહમાં રોકાણ કરવોની જરૂર ન પડે.",
    pillar4_title: "ફેક્ટરી અને ગોડાઉન, સાથે",
    pillar4_body: "અમારી પ્રક્રિયા ફેક્ટરી રાખિયાલમાં અમારા પોતાના ગોડાઉનની સાથે જ આવેલી છે — લણેલો તમાકુ સીધો સંગ્રહથી ભંડારણ અને પ્રક્રિયા સુધી પહોંચે છે.",

    processing_eyebrow: "કાચી પત્તીથી અલગ ગ્રેડ સુધી",
    processing_title: "એક પ્રક્રિયા, ચાર ઉત્પાદનો",
    processing_body: "કાચી તમાકુ પત્તી અમારી ફેક્ટરીની એક જ ક્રશિંગ અને વર્ગીકરણ લાઇનમાંથી પસાર થાય છે — જે ગ્રેડમાં વિભાજિત થાય છે જેને બીડી ઉત્પાદકો નામ લઈને મંગાવે છે, અને એક એવું ઉપ-ઉત્પાદન પણ મળે છે જેનું પોતાનું અલગ બજાર છે.",
    flow1_title: "કાચી પત્તીની આવક",
    flow1_body: "પાકેલો તમાકુ અમારા પોતાના ગોડાઉનમાંથી પ્રક્રિયા માટે તૈયાર થઈને આવે છે.",
    flow2_title: "ક્રશિંગ અને વર્ગીકરણ",
    flow2_body: "એક જ પ્રક્રિયા લાઇન પત્તીને કચડે છે અને વર્ગીકૃત કરે છે, કદ અને છોડના ભાગ પ્રમાણે અલગ કરે છે.",
    flow3_title: "ચાર ઉત્પાદનો, મોકલવા માટે તૈયાર",
    flow3_body: "ત્રણ ગ્રેડ અમારા બીડી મિશ્રણોમાં જાય છે; ચોથું સંપૂર્ણપણે એક અલગ ઉદ્યોગને વેચાય છે.",
    grade1_hindi: "પત્તી", grade1_roman: "Patti", grade1_title: "પત્તી-પ્રધાન અંશ", grade1_body: "મુખ્ય પત્તી ઘટક, પસંદગીના મિશ્રણોના આધાર તરીકે વપરાય છે.", grade1_use: "મિશ્રણમાં અથવા અલગથી વેચાય છે",
    grade2_hindi: "રવો", grade2_roman: "Ravo", grade2_title: "દાણાદાર અંશ", grade2_body: "એક નાનો કાપેલો અંશ, અલગથી પૂરો પાડવામાં આવે છે અથવા ગ્રાહકના ફોર્મ્યુલેશન મુજબ ભેળવવામાં આવે છે.", grade2_use: "મિશ્રણમાં અથવા અલગથી વેચાય છે",
    grade3_hindi: "કોડી", grade3_roman: "Kodi", grade3_title: "ડાંખળી અને નસ અંશ", grade3_body: "એક ભારે, કિફાયતી અંશ, જરૂરી ઉત્પાદન પ્રોફાઇલ મુજબ વપરાય છે.", grade3_use: "મિશ્રણમાં અથવા અલગથી વેચાય છે",
    grade4_hindi: "ધૂળ", grade4_roman: "Dust", grade4_title: "બારીક ધૂળ", grade4_body: "વર્ગીકરણમાંથી નીકળતો સૌથી બારીક ભાગ. અમે તેને બીડી મિશ્રણમાં બિલકુલ ઉપયોગમાં લેતા નથી — તેના બદલે અમે તેને નિકોટિન-નિષ્કર્ષણ એકમો અને ખાતર ઉત્પાદકોને વેચીએ છીએ, જેઓ તેને પોતાના કાચા માલ તરીકે ઉપયોગ કરે છે.", grade4_use: "આગળ વેચાય છે, મિશ્રણમાં નહીં",

    mixtures_eyebrow: "અમારી ખાસ કુશળતા",
    mixtures_title: "દરેક ઋતુ માટે એક મિશ્રણ",
    mixtures_body: "ગુજરાતની બદલાતી ભેજ અને ગરમી સાથે તમાકુનું વર્તન જ નથી બદલાતું — ઋતુ પ્રમાણે ભેજ અને તીવ્રતા (સ્ટ્રેન્થ પ્રોફાઇલ) બંને બદલાય છે. જે મિશ્રણ કાળઝાળ ગરમી માટે યોગ્ય હોય, તે શિયાળામાં ખૂબ તીવ્ર અથવા ખૂબ હળવું લાગી શકે છે. ભેજ અને તીવ્રતા બંનેને સાથે સંતુલિત કરવું એ જ તે કુશળતા છે જે અમારા દાદા અને પિતાએ દાયકાઓમાં શીખી — અને એ જ અમારા ગ્રાહકોને અનુમાન લગાવવાને બદલે ભરોસાપાત્ર ડિલિવરી સમયપત્રક આપે છે.",
    season1_name: "ઉનાળો",
    season1_desc: "માર્ચ – જૂન",
    season1_body: "સૂકી ગરમીમાં, અમે મિશ્રણને હળવી તીવ્રતા તરફ સંતુલિત કરીએ છીએ, સાથે ભેજને પણ નિયંત્રિત રાખીએ છીએ જેથી તે વાળનાર સુધી પહોંચતા પહેલાં બરડ ન થાય.",
    season2_name: "ચોમાસું",
    season2_desc: "જુલાઈ – સપ્ટેમ્બર",
    season2_body: "વધુ ભેજ આ ઋતુનું સૌથી મોટું જોખમ છે — અમારા મિશ્રણો વધારાના ભેજને સહન કરવો માટે સંતુલિત કરવોમાં આવે છે, જેથી ભીનાશ છતાં તીવ્રતા સ્થિર રહે.",
    season3_name: "શિયાળો",
    season3_desc: "ઓક્ટોબર – ફેબ્રુઆરી",
    season3_body: "ઠંડી, સૂકી હવા મિશ્રણના વર્તનને બદલે છે — અમે તેને વધુ તીવ્રતા તરફ સંતુલિત કરીએ છીએ જેથી તૈયાર બીડી શિયાળા દરમિયાન એકસમાન કામગીરી આપે.",
    mixtures_delivery: "ઋતુ ગમે તે હોય, ડિલિવરી એક નિયત, સંમત સમયપત્રક પર જાય છે — જેથી અમારા ગ્રાહકો અનિશ્ચિતતાને બદલે અમારા ભરોસા પર ઉત્પાદનનું આયોજન કરે.",
    factor_moisture_label: "આસપાસનો ભેજ",
    factor_control_label: "ભેજ-નિયંત્રણ પર ભાર",
    factor_strength_label: "તીવ્રતા પ્રોફાઇલ",
    season1_moisture_val: "ઓછો",
    season1_control_val: "મધ્યમ",
    season1_strength_val: "હળવી",
    season2_moisture_val: "વધુ",
    season2_control_val: "વધુ",
    season2_strength_val: "સંતુલિત",
    season3_moisture_val: "ઓછો–મધ્યમ",
    season3_control_val: "મધ્યમ",
    season3_strength_val: "વધુ તીવ્ર",
    factor_disclaimer: "આ સૂચકો અમારા મિશ્રણ-અભિગમને દર્શાવે છે; તે નિશ્ચિત વિશિષ્ટતાઓ નથી. અંતિમ રચના ગ્રાહકની જરૂરિયાત, ગંતવ્ય આબોહવા અને ઉપલબ્ધ પાક મુજબ નક્કી કરવોમાં આવે છે.",

    buyers_eyebrow: "અમે કોને સેવા આપીએ છીએ",
    buyers_title: "સ્થાપિત અને પ્રાદેશિક ગ્રાહકોને પુરવઠો",
    buyers_body: "દાયકાઓથી, અમારા મિશ્રણો નાના-મોટા બીડી ઉત્પાદકો સુધી પહોંચ્યા છે — કેટલાક મુખ્ય કેન્દ્રોમાં લાંબા સમયના સંબંધો, સાથે સાથે ભારતભરમાં ઘણા નાના ગ્રાહકો.",
    segment1_title: "બીડી ઉત્પાદકો",
    segment1_body: "અમારા ઋતુ-આધારિત ખાસ મિશ્રણો — પત્તી, રવો અને કોડી, ઓર્ડર મુજબ તૈયાર — નિયમિત સમયપત્રક પર પહોંચાડવામાં આવે છે.",
    segment2_title: "સાદા તમાકુના વેપારીઓ",
    segment2_body: "અમે એ વેપારીઓ અને ડીલરોને પણ સાદો, મિશ્રણ વગરનો તમાકુ પૂરો પાડીએ છીએ જેઓ પોતે બીડી ઉત્પાદક નથી.",
    buyers_current_label: "હાલના પુરવઠા સંબંધો",
    buyers_cluster_title: "નવી વ્યાપાર ભાગીદારી માટે તૈયાર",
    buyers_cluster_body: "અમે ભારતભરના બીડી ઉત્પાદકો, સાદા તમાકુના વેપારીઓ, નિકોટિન-નિષ્કર્ષણ એકમો અને ખાતર ઉત્પાદકો તરફથી યોગ્ય પૂછપરછને આવકારીએ છીએ. અમારી ટીમ સીધી તમારી જરૂરી ગ્રેડ, ગંતવ્ય આબોહવા, અંદાજિત જથ્થો અને ડિલિવરી સમયપત્રક વિશે વાત કરી શકે છે.",
    buyers_cta: "વ્યાપાર પૂછપરછ શરૂ કરો",

    contact_eyebrow: "સંપર્કમાં રહો",
    contact_title: "ચાલો તમાકુ વિશે વાત કરીએ",
    contact_body: "તમે બીડી ઉત્પાદક હો, ભરોસાપાત્ર ઋતુ-આધારિત સપ્લાયર શોધી રહેલા સાદા તમાકુના વેપારી હો, અથવા ખેડા પટ્ટાના ખેડૂત હો — અમને તમારી પાસેથી સાંભળવું ગમશે.",
    contact_location_label: "ફેક્ટરી અને ગોડાઉન",
    contact_location_value: "એનએચ47, રાખિયાલ, રાખિયાલ–ડાકોર નજીક, જિલ્લો ખેડા, ગુજરાત 388230",
    contact_phone_label: "ફોન / વોટ્સએપ",
    contact_email_label: "ઈમેલ",
    contact_whatsapp: "વોટ્સએપ પર સંદેશ મોકલો",
    map_link_title: "ગૂગલ મેપ્સમાં ખોલો",
    map_link_sub: "અમારી ગૂગલ બિઝનેસ પ્રોફાઇલ જુઓ · 4.6★",

    footer_tagline: "1950 થી તમાકુની ચાર પેઢીની કારીગરી.",
    compliance_line: "ફક્ત વાસ્તવિક વ્યવસાયિક અને વ્યાપારિક પૂછપરછ માટે. તમાકુનું સેવન સ્વાસ્થ્ય માટે હાનિકારક છે. આ વેબસાઇટ દ્વારા કોઈ ગ્રાહક વેચાણ કરવોમાં આવતું નથી.",
  }
};

let currentLang = localStorage.getItem("rdp_lang") || "en";
let onLanguageChange = null; // set once season/other widgets initialize

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
  if (translations[lang] && translations[lang].whatsapp_template) {
    const waHref = `https://wa.me/919824628632?text=${encodeURIComponent(translations[lang].whatsapp_template)}`;
    ["heroWhatsappCta", "contactWhatsappCta", "buyersWhatsappCta"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = waHref;
    });
  }
  localStorage.setItem("rdp_lang", lang);
  currentLang = lang;
  if (onLanguageChange) onLanguageChange();
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
  });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggleBtn");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Scroll progress bar
  const progressBar = document.getElementById("scrollProgress");
  function updateProgress() {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    if (progressBar) progressBar.style.width = height > 0 ? `${(scrolled / height) * 100}%` : "0%";
  }
  document.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Count-up stats
  const counters = document.querySelectorAll(".count-up");
  const countIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      countIo.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countIo.observe(el));

  // Seasonal mixture wheel
  const seasonBtns = document.querySelectorAll(".season-btn");
  const seasonPanelTitle = document.getElementById("seasonPanelTitle");
  const seasonPanelDesc = document.getElementById("seasonPanelDesc");
  const seasonPanelBody = document.getElementById("seasonPanelBody");
  const seasonIconEl = document.getElementById("seasonIcon");
  const factorMoisture = document.getElementById("factorMoisture");
  const factorControl = document.getElementById("factorControl");
  const factorStrength = document.getElementById("factorStrength");
  const factorMoistureVal = document.getElementById("factorMoistureVal");
  const factorControlVal = document.getElementById("factorControlVal");
  const factorStrengthVal = document.getElementById("factorStrengthVal");

  const seasonMeters = {
    season1: { moisture: 30, control: 55, strength: 35 },
    season2: { moisture: 90, control: 90, strength: 60 },
    season3: { moisture: 45, control: 55, strength: 85 },
  };

  const seasonIcons = {
    season1: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    season2: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c-3.2 4.2-6 7.8-6 11.2A6 6 0 0012 19a6 6 0 006-5.8c0-3.4-2.8-7-6-11.2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    season3: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 7h12a3 3 0 100-6M3 12h16a3 3 0 110 6M3 17h9a3 3 0 100 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  };

  function renderSeason(key) {
    const lang = currentLang;
    seasonPanelTitle.textContent = translations[lang][`${key}_name`];
    seasonPanelDesc.textContent = translations[lang][`${key}_desc`];
    seasonPanelBody.textContent = translations[lang][`${key}_body`];
    if (seasonIconEl && seasonIcons[key]) seasonIconEl.innerHTML = seasonIcons[key];
    const meters = seasonMeters[key];
    if (meters) {
      factorMoisture.style.width = `${meters.moisture}%`;
      factorControl.style.width = `${meters.control}%`;
      factorStrength.style.width = `${meters.strength}%`;
    }
    factorMoistureVal.textContent = translations[lang][`${key}_moisture_val`];
    factorControlVal.textContent = translations[lang][`${key}_control_val`];
    factorStrengthVal.textContent = translations[lang][`${key}_strength_val`];
  }

  seasonBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      seasonBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSeason(btn.dataset.season);
    });
  });

  onLanguageChange = () => {
    const activeBtn = document.querySelector(".season-btn.active");
    if (activeBtn) renderSeason(activeBtn.dataset.season);
  };

  if (seasonBtns.length) renderSeason(seasonBtns[0].dataset.season);

  // Lightbox for photo cards
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCap = document.getElementById("lightboxCap");
  const lightboxClose = document.getElementById("lightboxClose");
  let lastFocusedTrigger = null;

  function openLightbox(src, caption, trigger) {
    lastFocusedTrigger = trigger || document.activeElement;
    lightboxImg.src = src;
    lightboxCap.textContent = caption || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose.focus();
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    if (lastFocusedTrigger) lastFocusedTrigger.focus();
  }

  document.querySelectorAll("[data-lightbox]").forEach(el => {
    const trigger = () => {
      const img = el.querySelector("img");
      const capEl = el.querySelector(".cap");
      openLightbox(img.src, capEl ? capEl.textContent : img.alt, el);
    };
    el.addEventListener("click", trigger);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "Tab") {
      // Only the close button is interactive inside the dialog — keep focus trapped on it.
      e.preventDefault();
      lightboxClose.focus();
    }
  });
});
