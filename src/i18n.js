import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // React integration
  .init({
    resources: {
      en: {
        translation: {
          logoText: "Apana Construction",
          home: "Home",
          about: "About",
          services: "Services",
          projects: "Projects",
          experience: "Experience",
          contact: "Contact",
          whatsapp: "WhatsApp",
          heroTitle: "Your Dream, Our Commitment to",
          heroHighlight: "Excellence",
          heroSubtitle:
            "Reliable construction partner, delivering excellence from groundwork to final details with quality and commitment at every stage.",
          exploreServices: "Explore Services",
          exploreProjects: "Explore Projects",
          bestMaterials: "Best-in-Class Materials",
          qualityAssurance: "Quality Assurance",
          timelyDelivery: "Timely Delivery",
          meetContractors: "Meet Our Expert Contractors",
          contractorIntro:
            "Explore a network of skilled professionals dedicated to delivering exceptional craftsmanship in construction, architecture, and design.",
          viewMore: "View More",
          viewLess: "View Less",
          moreDetails: "More Details",

          architect: "Architect",
          architectDesc:
            "Expertly designing functional and aesthetically pleasing structures.",

          civilEngineer: "Civil Engineer",
          civilEngineerDesc:
            "Shaping the future with innovative and sustainable infrastructure solutions.",

          mason: "Mason",
          masonDesc:
            "Crafting strong and durable foundations with precision and expertise.",

          carpenter: "Carpenter",
          carpenterDesc:
            "Transforming spaces with skillfully crafted woodwork and fine detailing.",

          electrician: "Electrician",
          electricianDesc:
            "Ensuring safe, efficient, and reliable electrical installations for every project.",

          plumber: "Plumber",
          plumberDesc:
            "Providing top-quality plumbing solutions for efficient water management.",

          welder: "Welder",
          welderDesc:
            "Delivering strong and durable metalwork for residential and commercial projects.",

          painter: "Painter",
          painterDesc:
            "Bringing walls to life with vibrant colors and professional finishing.",

          tileSetter: "Tile Setter",
          tileSetterDesc:
            "Creating elegant and durable flooring with precise craftsmanship.",

          roofer: "Roofer",
          rooferDesc:
            "Building weather-resistant and aesthetically appealing roofing solutions.",

          popDesigner: "POP Designer",
          popDesignerDesc:
            "Enhancing interiors with stylish and durable Plaster of Paris designs.",

          rentalTent: "Rental Tent Services",
          rentalTentDesc:
            "Providing elegant, durable, and customizable tent solutions for any occasion.",
          aboutTitle: "About Apana Construction",
          aboutText1:
            "Apana Construction is a premier construction firm known for its legacy of excellence. With decades of industry experience, we specialize in delivering innovative, high-quality solutions that are customized to meet your specific needs. Our dedicated team of experts ensures that every project is executed on time, within budget, and to the highest standards of quality.",
          aboutText2:
            "We prioritize sustainable and eco-friendly practices, making a positive impact on the environment while achieving exceptional results. At Apana Construction, we are committed to creating enduring structures that provide long-term value for our clients. Our passion lies in transforming ideas into reality, delivering projects that stand the test of time.",
          aboutText3:
            "Driven by integrity and a focus on customer satisfaction, we distinguish ourselves in the industry. Whether it is residential buildings, commercial developments, or innovative construction projects, our goal is to consistently exceed expectations and build lasting relationships with our clients.",
          learnMore: "Learn More",
          servicesTitle: "Our Services",
          servicesSubtitle:
            "Our services are designed to bring your vision to life with precision and excellence.",
          service1Title: "Residential Construction",
          service1Description:
            "We provide high-quality, customized residential construction services to bring your dream home to life. With expert craftsmanship, premium materials, and sustainable practices, we ensure every detail is meticulously executed. From new builds to renovations, we create functional, stylish, and durable homes that reflect your vision and lifestyle.",
          service2Title: "Commercial Projects",
          service2Description:
            "We deliver innovative, efficient solutions for commercial spaces designed to meet your business needs. Our expert team focuses on functionality, aesthetics, and productivity, creating environments that foster success. From office buildings to retail spaces, we ensure high-quality execution, sustainability, and seamless project management for a thriving workspace.",
          service3Title: "Renovation Services",
          service3Description:
            "We create efficient, innovative commercial spaces tailored to your business needs. Our team prioritizes functionality, aesthetics, and sustainability to enhance productivity and success. From offices to retail spaces, we ensure seamless execution, high-quality craftsmanship, and modern design solutions that elevate your workspace and support long-term growth.",
          service4Title: "Architecture Design",
          service4Description:
            "We create innovative, sustainable architectural designs that blend creativity with functionality. Our approach ensures aesthetically stunning and practical spaces tailored to your vision. By combining modern techniques with eco-friendly solutions, we deliver designs that enhance both form and function, creating environments that are both inspiring and efficient.",
          achievementsTitle: "Our Achievements",
          achievementsSubtitle:
            "Our achievements reflect our dedication to excellence and innovation.",
          counter1Title: "Projects Completed",
          counter2Title: "Happy Clients",
          counter3Title: "Years of Experience",
          counter4Title: "Awards Won",
          experienceTitle: "Our Experience",
          experienceSubtitle: "Our experience is the key to our success.",
          experienceYears: "30+ Years of Experience",
          experienceDescription1:
            "With over 30 years of experience in the construction industry, we have built a strong reputation for excellence, innovation, and reliability. Our expertise spans residential, commercial, and large-scale projects, ensuring precision, quality, and efficiency in every build. We combine advanced techniques, premium materials, and sustainable practices to deliver outstanding results that meet and exceed client expectations.",
          experienceDescription2:
            "Our dedicated team of professionals is committed to bringing your vision to life while maintaining the highest industry standards. From concept to completion, we ensure seamless project execution, making us a trusted partner in building the future with confidence and expertise.",
          viewProjects: "View Projects",
          workflowTitle: "Our Workflow Process",
          workflowSubtitle:
            "A streamlined approach to ensure every project is completed efficiently and effectively.",
          step1Title: "Step 1: Planning & Designing",
          step1Description:
            "Developing a strategic roadmap and crafting innovative designs to shape the vision and direction of the project.",
          step2Title: "Step 2: Design & Development",
          step2Description:
            "Bringing concepts to life by refining designs and developing practical, efficient, and user-centric solutions.",
          step3Title: "Step 3: Construction",
          step3Description:
            "Executing the build with accuracy, quality craftsmanship, and strict adherence to industry standards.",
          step4Title: "Step 4: Testing & Handover",
          step4Description:
            "Conducting thorough quality checks and finalizing details before delivering a flawless project to the client.",
          projectsTitle: "Our Featured Projects",
          projectsSubtitle:
            "Our Featured Projects showcase our commitment to excellence and innovation.",
          categoryAll: "All Work",
          categoryConstruction: "Construction",
          categoryArchitecture: "Architecture",
          categoryBuilding: "Building",
          categoryRenovations: "Renovations",
          categoryInterior: "Interior",
          project1Title: "Modern Office Complex",
          project1Description:
            "A state-of-the-art office building with sustainable architecture and modern amenities.",
          project2Title: "Skyscraper Project",
          project2Description:
            "An iconic skyscraper with cutting-edge technology and innovative design.",
          project3Title: "Residential Complex",
          project3Description:
            "A comfortable and luxurious residential project catering to modern lifestyles.",
          project4Title: "Luxury Residential Villas",
          project4Description:
            "A premium residential project featuring luxurious villas with stunning designs.",
          project5Title: "Urban Landscape Design",
          project5Description:
            "Transforming urban spaces into aesthetic and functional landscapes.",
          project6Title: "Cultural Center",
          project6Description:
            "A cultural hub blending traditional and modern architectural styles.",
          project7Title: "Urban Shopping Mall",
          project7Description:
            "A vibrant shopping mall designed to enhance retail experiences with unique interiors.",
          project8Title: "Corporate Headquarters",
          project8Description:
            "A modern corporate office with advanced facilities and ergonomic design.",
          project9Title: "Luxury Hotel",
          project9Description:
            "A five-star hotel featuring elegant architecture and premium amenities.",
          project10Title: "Eco-Friendly Apartment Complex",
          project10Description:
            "A green apartment complex focusing on sustainability and eco-friendly living.",
          project11Title: "Historic Building Restoration",
          project11Description:
            "Preserving heritage with meticulous restoration of historic landmarks.",
          project12Title: "Modern Facade Upgrade",
          project12Description:
            "Enhancing the exteriors of buildings with modern materials and designs.",
          project13Title: "Luxury Interior Designs",
          project13Description:
            "Elegant and modern interior designs for both residential and commercial spaces.",
          project14Title: "Office Interior Makeover",
          project14Description:
            "Revamping office interiors to enhance productivity and aesthetics.",
          project15Title: "Boutique Interior Design",
          project15Description:
            "Customized interior designs for boutique stores to reflect brand identity.",
          viewDetails: "View Details",
          "contact.title": "Leading the Way in Building and Civil Construction",
          "contact.professionalStaff": "Professional Staff",
          "contact.satisfaction": "100% Satisfaction",
          "contact.testing": "Accurate Testing",
          "contact.pricing": "Transparent Pricing",
          "contact.formTitle": "Contact Us",
          "contact.name": "Enter your name",
          "contact.email": "Enter your email",
          "contact.phone": "Enter your phone number",
          "contact.selectService": "Select a Service",
          "contact.construction": "Construction",
          "contact.renovation": "Renovation",
          "contact.architecture": "Architecture",
          "contact.interiorDesign": "Interior Design",
          "contact.other": "Other",
          "contact.message": "Write your message",
          "contact.submit": "Send Message",
          "contact.successTitle": "Success!",
          "contact.successMessage": "Your message has been sent successfully!",
          "contact.errorTitle": "Error! ☹️",
          "contact.errorMessage": "Something went wrong. Please try again.",
          "footer.companyName": "ApanaConstruction",
          "footer.description":
            "We deliver exceptional construction, renovation, and design services tailored to your needs.",
          "footer.address": "Borivali, Mumbai, India, 400001",
          "footer.phone": "+91 8928567312",
          "footer.email": "apanaconstructionac@gmail.com",
          "footer.quickLinks": "Quick Links",
          "footer.services": "Our Services",
          "footer.followUs": "Follow Us",
          "footer.residential": "Residential Construction",
          "footer.commercial": "Commercial Projects",
          "footer.renovation": "Renovation Services",
          "footer.architecture": "Architectural Design",
          "footer.interiorDesign": "Interior Design",
          "footer.servicesLink": "Services",
          "footer.projectsLink": "Projects",
          "footer.aboutLink": "About Us",
          "footer.contactLink": "Contact",
          "footer.faqLink": "FAQs",
          "footer.rights": "© {{year}} ApanaTime. All rights reserved.",
          workflow: {
            heading: "How it works",
            subheading:
              "Our house construction steps are simple and easy to understand: plan - build - track - settle in.",
            learnMore: "Learn More",
            steps: {
              raiseRequest: {
                title: "Raise a Request",
                description:
                  "Raise a house construction service request or call us at +91 7505 205 205. Our team will get in touch with you to understand the requirements in more detail.",
              },
              meetExpert: {
                title: "Meet Our Expert",
                description:
                  "Experts will guide you in selecting the right package for the house construction and solve any queries that you may have.",
              },
              bookWithUs: {
                title: "Book with Us",
                description:
                  "Good to go! You pay 8% of the estimated project cost as the booking amount to start the house construction.",
              },
              receiveDesigns: {
                title: "Receive Designs",
                description:
                  "Our architects will provide exhaustive drawings of your home construction till you are completely satisfied.",
              },
              trackTransact: {
                title: "Track & Transact",
                description:
                  "To ensure absolute trust, Brick&Bolt provides an escrow model where you transfer the amount for the stage of the project. You can track the project through our customer application.",
              },
              settleIn: {
                title: "Settle In",
                description: "Move into your dream space hassle-free.",
              },
            },
          },
        },
      },
      hi: {
        translation: {
          logoText: "अपना कंस्ट्रक्शन",
          home: "होम",
          about: "हमारे बारे में",
          services: "सेवाएँ",
          projects: "परियोजनाएँ",
          experience: "अनुभव",
          contact: "संपर्क करें",
          whatsapp: "व्हाट्सएप",
          heroTitle: "आपका सपना, हमारी प्रतिबद्धता",
          heroHighlight: "उत्कृष्टता",
          heroSubtitle:
            "एक विश्वसनीय निर्माण भागीदार, जो हर चरण में गुणवत्ता और प्रतिबद्धता के साथ उत्कृष्टता प्रदान करता है।",
          exploreServices: "सेवाएँ देखें",
          exploreProjects: "परियोजनाएँ देखें",
          bestMaterials: "सर्वश्रेष्ठ सामग्री",
          qualityAssurance: "गुणवत्ता आश्वासन",
          timelyDelivery: "समय पर डिलीवरी",
          meetContractors: "हमारे विशेषज्ञ ठेकेदारों से मिलें",
          contractorIntro:
            "कौशलवान पेशेवरों के नेटवर्क का अन्वेषण करें जो निर्माण, वास्तुकला और डिज़ाइन में उत्कृष्टता प्रदान करने के लिए समर्पित हैं।",
          viewMore: "और देखें",
          viewLess: "कम देखें",
          moreDetails: "अधिक जानकारी",

          architect: "वास्तुकार",
          architectDesc:
            "कार्यात्मक और सौंदर्यपूर्ण रूप से आकर्षक संरचनाओं को डिज़ाइन करने में विशेषज्ञ।",

          civilEngineer: "सिविल इंजीनियर",
          civilEngineerDesc:
            "नवाचार और सतत बुनियादी ढांचे के समाधानों से भविष्य को आकार देना।",

          mason: "राजमिस्त्री",
          masonDesc:
            "सटीकता और विशेषज्ञता के साथ मजबूत और टिकाऊ नींव का निर्माण।",

          carpenter: "बढ़ई",
          carpenterDesc:
            "कुशलतापूर्वक निर्मित लकड़ी के काम और बारीक डिज़ाइन के साथ स्थानों को परिवर्तित करना।",

          electrician: "इलेक्ट्रीशियन",
          electricianDesc:
            "प्रत्येक परियोजना के लिए सुरक्षित, कुशल और विश्वसनीय विद्युत प्रतिष्ठान सुनिश्चित करना।",
          plumber: "प्लंबर",
          plumberDesc: "जल आपूर्ति और जल निकासी प्रणालियों में विशेषज्ञ।",
          welder: "वेल्डर",
          welderDesc: "धातु संरचनाओं और जोड़नों पर काम करता है।",
          painter: "पेंटर",
          painterDesc: "विशेषज्ञ चित्रकारी और फिनिशिंग सेवाएं प्रदान करता है।",
          tileSetter: "टाइल सेटर",
          tileSetterDesc: "टाइलिंग और फर्श कार्य में विशेषज्ञ।",
          roofer: "रूफर",
          rooferDesc: "छत लगाने और मरम्मत में विशेषज्ञ।",
          popDesigner: "पीओपी डिज़ाइनर",
          popDesignerDesc: "सजावटी प्लास्टर और छत डिज़ाइन तैयार करता है।",
          rentalTent: "किराये की टेंट सेवाएं",
          rentalTentDesc:
            "इवेंट और निर्माण के लिए किराये के टेंट प्रदान करता है।",
          aboutTitle: "अपना कंस्ट्रक्शन के बारे में",
          aboutText1:
            "अपना कंस्ट्रक्शन एक प्रमुख निर्माण कंपनी है जो अपनी उत्कृष्टता की विरासत के लिए जानी जाती है। दशकों के उद्योग अनुभव के साथ, हम नवीन, उच्च-गुणवत्ता वाले समाधान प्रदान करने में विशेषज्ञ हैं जो आपकी विशिष्ट आवश्यकताओं के अनुसार अनुकूलित हैं। हमारी समर्पित विशेषज्ञों की टीम सुनिश्चित करती है कि प्रत्येक परियोजना समय पर, बजट के भीतर और उच्चतम गुणवत्ता मानकों के अनुसार पूरी की जाए।",
          aboutText2:
            "हम टिकाऊ और पर्यावरण-अनुकूल प्रथाओं को प्राथमिकता देते हैं, जिससे पर्यावरण पर सकारात्मक प्रभाव पड़ता है और असाधारण परिणाम प्राप्त होते हैं। अपना कंस्ट्रक्शन में, हम दीर्घकालिक मूल्य प्रदान करने वाली स्थायी संरचनाएँ बनाने के लिए प्रतिबद्ध हैं। हमारा जुनून विचारों को वास्तविकता में बदलने में है, ऐसी परियोजनाएँ प्रदान करना जो समय की कसौटी पर खरी उतरें।",
          aboutText3:
            "ईमानदारी और ग्राहक संतोष पर ध्यान केंद्रित करके, हम उद्योग में खुद को अलग बनाते हैं। चाहे वह आवासीय भवन हों, वाणिज्यिक विकास हों, या अभिनव निर्माण परियोजनाएँ, हमारा लक्ष्य हमेशा अपेक्षाओं को पार करना और अपने ग्राहकों के साथ स्थायी संबंध बनाना है।",
          learnMore: "अधिक जानें",
          servicesTitle: "हमारी सेवाएँ",
          servicesSubtitle:
            "हमारी सेवाएँ आपकी दृष्टि को सटीकता और उत्कृष्टता के साथ साकार करने के लिए डिज़ाइन की गई हैं।",
          service1Title: "आवासीय निर्माण",
          service1Description:
            "हम उच्च-गुणवत्ता वाली, अनुकूलित आवासीय निर्माण सेवाएँ प्रदान करते हैं ताकि आपके सपनों का घर साकार हो सके। विशेषज्ञ शिल्प कौशल, प्रीमियम सामग्री, और स्थायी प्रथाओं के साथ, हम प्रत्येक विवरण को सावधानीपूर्वक निष्पादित करते हैं। नई इमारतों से लेकर नवीनीकरण तक, हम कार्यात्मक, स्टाइलिश और टिकाऊ घर बनाते हैं जो आपकी दृष्टि और जीवनशैली को दर्शाते हैं।",
          service2Title: "व्यावसायिक परियोजनाएँ",
          service2Description:
            "हम व्यावसायिक स्थानों के लिए नवीन, कुशल समाधान प्रदान करते हैं जो आपके व्यापार की आवश्यकताओं को पूरा करने के लिए डिज़ाइन किए गए हैं। हमारी विशेषज्ञ टीम कार्यक्षमता, सौंदर्यशास्त्र और उत्पादकता पर ध्यान केंद्रित करती है, जिससे सफलता को बढ़ावा देने वाले वातावरण बनते हैं। कार्यालय भवनों से लेकर खुदरा स्थानों तक, हम उच्च-गुणवत्ता निष्पादन, स्थिरता और निर्बाध परियोजना प्रबंधन सुनिश्चित करते हैं।",
          service3Title: "नवीनीकरण सेवाएँ",
          service3Description:
            "हम आपके व्यवसाय की आवश्यकताओं के अनुरूप कुशल, नवीन व्यावसायिक स्थान बनाते हैं। हमारी टीम कार्यक्षमता, सौंदर्यशास्त्र, और स्थिरता को प्राथमिकता देती है ताकि उत्पादकता और सफलता को बढ़ाया जा सके। कार्यालयों से खुदरा स्थानों तक, हम निर्बाध निष्पादन, उच्च-गुणवत्ता वाले शिल्प कौशल और आधुनिक डिज़ाइन समाधान सुनिश्चित करते हैं जो आपके कार्यक्षेत्र को ऊँचा उठाते हैं और दीर्घकालिक वृद्धि में सहायक होते हैं।",
          service4Title: "आर्किटेक्चर डिज़ाइन",
          service4Description:
            "हम नवीन, स्थायी वास्तुशिल्प डिज़ाइन बनाते हैं जो रचनात्मकता को कार्यक्षमता के साथ जोड़ते हैं। हमारा दृष्टिकोण सौंदर्य की दृष्टि से अद्भुत और व्यावहारिक स्थान सुनिश्चित करता है जो आपकी दृष्टि के अनुरूप होते हैं। आधुनिक तकनीकों को पर्यावरण-अनुकूल समाधानों के साथ जोड़कर, हम ऐसे डिज़ाइन प्रदान करते हैं जो रूप और कार्यक्षमता दोनों को बढ़ाते हैं, प्रेरणादायक और प्रभावी वातावरण बनाते हैं।",
          achievementsTitle: "हमारी उपलब्धियां",
          achievementsSubtitle:
            "हमारी उपलब्धियां हमारी उत्कृष्टता और नवाचार के प्रति प्रतिबद्धता को दर्शाती हैं।",
          counter1Title: "पूरे किए गए प्रोजेक्ट",
          counter2Title: "खुश ग्राहक",
          counter3Title: "अनुभव के वर्ष",
          counter4Title: "जीते गए पुरस्कार",
          experienceTitle: "हमारा अनुभव",
          experienceSubtitle: "हमारा अनुभव हमारी सफलता की कुंजी है।",
          experienceYears: "30+ वर्षों का अनुभव",
          experienceDescription1:
            "निर्माण उद्योग में 30 से अधिक वर्षों के अनुभव के साथ, हमने उत्कृष्टता, नवाचार और विश्वसनीयता के लिए एक मजबूत प्रतिष्ठा बनाई है। हमारा अनुभव आवासीय, व्यावसायिक और बड़े पैमाने की परियोजनाओं तक फैला हुआ है, जिससे हर निर्माण में सटीकता, गुणवत्ता और दक्षता सुनिश्चित होती है। हम उन्नत तकनीकों, प्रीमियम सामग्री और स्थायी प्रथाओं को मिलाकर उत्कृष्ट परिणाम प्रदान करते हैं जो ग्राहक की अपेक्षाओं को पूरा करते हैं और उन्हें पार करते हैं।",
          experienceDescription2:
            "हमारे समर्पित पेशेवरों की टीम आपकी दृष्टि को साकार करने के लिए प्रतिबद्ध है, जबकि उच्चतम उद्योग मानकों को बनाए रखती है। अवधारणा से लेकर पूर्णता तक, हम निर्बाध परियोजना निष्पादन सुनिश्चित करते हैं, जिससे हम आत्मविश्वास और विशेषज्ञता के साथ भविष्य का निर्माण करने में एक विश्वसनीय भागीदार बनते हैं।",
          viewProjects: "परियोजनाएं देखें",
          workflowTitle: "हमारा कार्यप्रणाली प्रक्रिया",
          workflowSubtitle:
            "प्रत्येक परियोजना को कुशलता और प्रभावी तरीके से पूरा करने के लिए एक सुव्यवस्थित दृष्टिकोण।",
          step1Title: "चरण 1: योजना और डिज़ाइन",
          step1Description:
            "एक रणनीतिक रोडमैप विकसित करना और परियोजना के दृष्टिकोण और दिशा को आकार देने के लिए नवोन्मेषी डिज़ाइन तैयार करना।",
          step2Title: "चरण 2: डिज़ाइन और विकास",
          step2Description:
            "विचारों को जीवन में लाना और व्यावहारिक, कुशल, और उपयोगकर्ता-केंद्रित समाधान विकसित करना।",
          step3Title: "चरण 3: निर्माण",
          step3Description:
            "सटीकता, गुणवत्ता के शिल्प और उद्योग मानकों के सख्त पालन के साथ निर्माण को निष्पादित करना।",
          step4Title: "चरण 4: परीक्षण और हैंडओवर",
          step4Description:
            "गुणवत्ता की जाँच करना और ग्राहक को एक दोषरहित परियोजना प्रदान करने से पहले अंतिम विवरण को अंतिम रूप देना।",
          projectsTitle: "हमारे प्रमुख परियोजनाएँ",
          projectsSubtitle:
            "हमारी प्रमुख परियोजनाएँ उत्कृष्टता और नवाचार के प्रति हमारी प्रतिबद्धता को प्रदर्शित करती हैं।",
          categoryAll: "सभी कार्य",
          categoryConstruction: "निर्माण",
          categoryArchitecture: "वास्तुकला",
          categoryBuilding: "भवन",
          categoryRenovations: "नवीनीकरण",
          categoryInterior: "आंतरिक",
          project1Title: "आधुनिक कार्यालय परिसर",
          project1Description:
            "एक अत्याधुनिक कार्यालय भवन जिसमें स्थायी वास्तुकला और आधुनिक सुविधाएँ हैं।",
          project2Title: "आधुनिक गगनचुंबी इमारत",
          project2Description:
            "एक प्रतीकात्मक गगनचुंबी इमारत जिसमें अत्याधुनिक तकनीक और अभिनव डिज़ाइन हैं।",
          project3Title: "रिहायशी परिसर",
          project3Description:
            "एक आरामदायक और शानदार रिहायशी परियोजना जो आधुनिक जीवनशैली को पूरा करती है।",
          project4Title: "लक्ज़री रिहायशी विला",
          project4Description:
            "एक प्रीमियम रिहायशी परियोजना जिसमें शानदार डिज़ाइनों के साथ विला हैं।",
          project5Title: "शहरी परिदृश्य डिज़ाइन",
          project5Description:
            "शहरी स्थानों को सौंदर्यपूर्ण और कार्यात्मक परिदृश्यों में बदलना।",
          project6Title: "सांस्कृतिक केंद्र",
          project6Description:
            "एक सांस्कृतिक केंद्र जो पारंपरिक और आधुनिक वास्तुकला शैलियों को मिलाता है।",
          project7Title: "शहरी शॉपिंग मॉल",
          project7Description:
            "एक जीवंत शॉपिंग मॉल जिसे खुदरा अनुभव को बढ़ाने के लिए अद्वितीय इंटीरियर्स के साथ डिज़ाइन किया गया है।",
          project8Title: "कॉर्पोरेट मुख्यालय",
          project8Description:
            "एक आधुनिक कॉर्पोरेट कार्यालय जिसमें उन्नत सुविधाएँ और एर्गोनोमिक डिज़ाइन है।",
          project9Title: "लक्ज़री होटल",
          project9Description:
            "एक पांच सितारा होटल जिसमें सुरुचिपूर्ण वास्तुकला और प्रीमियम सुविधाएँ हैं।",
          project10Title: "ईको-फ्रेंडली अपार्टमेंट परिसर",
          project10Description:
            "एक हरित अपार्टमेंट परिसर जो स्थिरता और पर्यावरणीय अनुकूल जीवन पर केंद्रित है।",
          project11Title: "ऐतिहासिक इमारत बहाली",
          project11Description:
            "ऐतिहासिक धरोहरों की संरक्षण प्रक्रिया और बहाली।",
          project12Title: "आधुनिक fachada उन्नयन",
          project12Description:
            "आधुनिक सामग्री और डिज़ाइनों से भवनों के बाहरी रूप को सुदृढ़ करना।",
          project13Title: "लक्ज़री आंतरिक डिज़ाइन",
          project13Description:
            "आवासीय और वाणिज्यिक स्थानों के लिए सुरुचिपूर्ण और आधुनिक आंतरिक डिज़ाइन।",
          project14Title: "ऑफिस आंतरिक परिवर्तन",
          project14Description:
            "कार्यालयों के आंतरिक डिज़ाइन को नए रूप में बदलने के लिए संशोधन।",
          project15Title: "बुटीक आंतरिक डिज़ाइन",
          project15Description:
            "ब्रांड पहचान को परिलक्षित करने के लिए बुटीक स्टोर्स के लिए अनुकूलित आंतरिक डिज़ाइन।",
          viewDetails: "विवरण देखें",
          "contact.title": "निर्माण और सिविल निर्माण में अग्रणी",
          "contact.professionalStaff": "व्यावसायिक स्टाफ",
          "contact.satisfaction": "100% संतुष्टि",
          "contact.testing": "सटीक परीक्षण",
          "contact.pricing": "पारदर्शी मूल्य निर्धारण",
          "contact.formTitle": "संपर्क करें",
          "contact.name": "अपना नाम दर्ज करें",
          "contact.email": "अपना ईमेल दर्ज करें",
          "contact.phone": "अपना फोन नंबर दर्ज करें",
          "contact.selectService": "सेवा चुनें",
          "contact.construction": "निर्माण",
          "contact.renovation": "नवीनीकरण",
          "contact.architecture": "वास्तुकला",
          "contact.interiorDesign": "इंटीरियर डिज़ाइन",
          "contact.other": "अन्य",
          "contact.message": "अपना संदेश लिखें",
          "contact.submit": "संदेश भेजें",
          "contact.successTitle": "सफलता!",
          "contact.successMessage": "आपका संदेश सफलतापूर्वक भेज दिया गया है!",
          "contact.errorTitle": "त्रुटि! ☹️",
          "contact.errorMessage": "कुछ गलत हो गया। कृपया पुनः प्रयास करें।",
          "footer.companyName": "अपना कंस्ट्रक्शन",
          "footer.description":
            "हम आपके आवश्यकताओं के अनुसार शानदार निर्माण, नवीनीकरण और डिज़ाइन सेवाएं प्रदान करते हैं।",
          "footer.address": "बोरीवली, मुंबई, भारत, 400001",
          "footer.phone": "+91 8928567312",
          "footer.email": "apanaconstructionac@gmail.com",
          "footer.quickLinks": "त्वरित लिंक",
          "footer.services": "हमारी सेवाएँ",
          "footer.followUs": "हमें फॉलो करें",
          "footer.residential": "आवासीय निर्माण",
          "footer.commercial": "व्यावसायिक परियोजनाएँ",
          "footer.renovation": "नवीनीकरण सेवाएँ",
          "footer.architecture": "वास्तुकला डिज़ाइन",
          "footer.interiorDesign": "आंतरिक डिज़ाइन",
          "footer.servicesLink": "सेवाएँ",
          "footer.projectsLink": "परियोजनाएँ",
          "footer.aboutLink": "हमारे बारे में",
          "footer.contactLink": "संपर्क करें",
          "footer.faqLink": "सामान्य प्रश्न",
          "footer.rights": "© {{year}} ApanaTime. सर्वाधिकार सुरक्षित।",
          workflow: {
            heading: "यह कैसे काम करता है",
            subheading:
              "हमारे घर निर्माण के चरण सरल और समझने में आसान हैं: योजना - निर्माण - ट्रैक - बसना।",
            learnMore: "और जानें",
            steps: {
              raiseRequest: {
                title: "अनुरोध उठाएं",
                description:
                  "घर निर्माण सेवा के लिए अनुरोध उठाएं या हमें +91 7505 205 205 पर कॉल करें। हमारी टीम आपसे संपर्क करेगी ताकि आवश्यकताओं को विस्तार से समझा जा सके।",
              },
              meetExpert: {
                title: "हमारे विशेषज्ञ से मिलें",
                description:
                  "विशेषज्ञ आपको घर निर्माण के लिए सही पैकेज चुनने में मार्गदर्शन करेंगे और आपके किसी भी सवाल का समाधान करेंगे।",
              },
              bookWithUs: {
                title: "हमारे साथ बुक करें",
                description:
                  "सब तैयार! घर निर्माण शुरू करने के लिए आप अनुमानित परियोजना लागत का 8% बुकिंग राशि के रूप में भुगतान करें।",
              },
              receiveDesigns: {
                title: "डिज़ाइन प्राप्त करें",
                description:
                  "हमारे आर्किटेक्ट आपके घर निर्माण के विस्तृत चित्र प्रदान करेंगे जब तक आप पूरी तरह संतुष्ट न हों।",
              },
              trackTransact: {
                title: "ट्रैक और लेन-देन",
                description:
                  "पूर्ण विश्वास सुनिश्चित करने के लिए, Brick&Bolt एक एस्क्रो मॉडल प्रदान करता है जहां आप प्रोजेक्ट के चरण के लिए राशि स्थानांतरित करते हैं। आप हमारे ग्राहक एप्लिकेशन के माध्यम से प्रोजेक्ट को ट्रैक कर सकते हैं।",
              },
              settleIn: {
                title: "बस जाएं",
                description:
                  "अपने सपनों के स्थान में बिना किसी परेशानी के प्रवेश करें।",
              },
            },
          },
        },
      },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
