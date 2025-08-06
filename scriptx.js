// Translation data
const translations = {
    ar: {
        header: {
            titleFr: "Association Mauritanienne pour la Prévention de la Surdité",
            titleAr: "الجمعية الموريتانية للوقاية من الصمم"
        },
        hero: {
            title: "مكافحة الصمم في موريتانيا",
            subtitle: "تعزيز صحة السمع وتقديم الدعم للمحتاجين"
        },
        about: {
            title: "مكافحة الصمم في موريتانيا",
            content: "تعزيز صحة السمع وتقديم الدعم للمحتاجين"
        },
        aboutMain: {
            title: "عن الجمعية",
            content: "الجمعية الموريتانية للوقاية من الصمم هي منظمة تعمل على مكافحة الصمم في موريتانيا، وتهدف إلى الحد من انتشاره وتوفير الدعم للمصابين به. تتضمن جهودنا أنشطة توعوية حول أسباب الصمم وطرق الوقاية منه، بالإضافة إلى توفير خدمات الرعاية الصحية وتركيب أجهزة السمع للمحتاجين."
        },
        leadership: {
            title: "الفريق القيادي",
            presidentName: "الدكتور عبد الله ولد الددي",
            presidentTitle: "رئيس الجمعية - أخصائي الأنف والأذن والحنجرة",
            messageTitle: "كلمة الرئيس",
            messageP1: "بالنظر إلى المخاطر التي تشكلها إصابات السمع غير المعالجة، وبعد أن توصلت المنظمة خلال تجربتها الممتدة لأزيد من 20 سنة، إلى أن الكتل السمعية والوضعيات الخاطئة للإرضاع من أكبر أسباب الصمم، قررت الجمعية الموريتانية لمكافحة الصمم (AMPS) تنظيم حملة كشف وعلاج لصالح الفئات الأكثر تعرضا (عمال المناجم والمقالع، أطفال المدارس، سائقو الشاحنات والآليات ... ).",
            messageP2: "تهدف هذه الحملة إلى توفير معاينات مجانية مع العلاج وتوزيع الأدوات المساعدة للسمع وإعداد قاعدة بيانات تستفيد منها جميع الجهات المعنية بوضع الخطط والاستراتيجيات.",
            member1Name: "الدكتور الشيخ حننا",
            member1Title: "عضو مجلس الإدارة",
            member2Name: "أحمد بزيد دحمان",
            member2Title: "عضو مجلس الإدارة",
            member3Name: "محمد يسلم عبد الدايم",
            member3Title: "عضو مجلس الإدارة",
            member4Name: "د. سيد احمد لفظل",
            member4Title: "عضو مجلس الإدارة",
            member5Name: "فطمت تراوري",
            member5Title: "عضو مجلس الإدارة"
        },
        gallery: {
            title: "معرض الصور",
            slide1Title: "فريق الأطباء المتطوعين",
            slide1Desc: "",
            slide2Title: "الكادر الطبي المتطوع",
            slide2Desc: "أطباء متخصصون يقدمون خدماتهم التطوعية لمساعدة المرضى",
            slide3Title: "العلاج",
            slide3Desc: "مواطنون ينتظرون العلاج في احدي جولات المنظمة",
            slide4Title: "البعثة الطبية",
            slide4Desc: "توزيع العلاجات والأدوية خلال إحدى الرحلات التطوعية الميدانية",
            slide5Title: "اعتماد رسمي",
            slide5Desc: "شهادة تزكية من وزارة الصحة - قسم إدارة التخطيط والتعاون الإعلام الصحي",
            slide6Title: "توثيق رسمي",
            slide6Desc: "إفادة تسجيل في قاعدة بيانات الوزارة المكلفة بالعلاقات مع البرلمان والمجتمع المدني",
            slide7Title: "اعتماد حكومي",
            slide7Desc: "وثيقة تزكية رسمية من وزارة الصحة تثبت جهود الجمعية",
            slide8Title: "شراكة محلية",
            slide8Desc: "شهادة تقدير من بلدية تيارت في نواكشوط تقديراً لجهود الجمعية",
            slide9Title: "تغطية إعلامية",
            slide9Desc: "مقال في الجريدة الرسمية بعنوان \"الألم المنسي\" يوثق جهود الجمعية في المناطق النائية",
            slide10Title: "عمل ميداني",
            slide10Desc: "بعثة تطوعية في منطقة إينشيري النائية لتقديم الخدمات الطبية",
            slide11Title: "قصة نجاح",
            slide11Desc: "تقرير عن حالة عيشتا فال التي عانت من الصمم منذ الطفولة وتم علاجها بواسطة الجمعية",
            slide12Title: "برنامج المدارس",
            slide12Desc: "تغطية إعلامية لبرنامج الكشف المبكر عن الصمم في المدارس",
            slide13Title: "توعية صحية",
            slide13Desc: "مقال في الجريدة الفرنسية بعنوان \"الوقاية خير من العلاج\" عن برامج التوعية",
            slide14Title: "زيارة مدرسية",
            slide14Desc: "تغطية لزيارة فريق الجمعية لمدرسة الإمام أحمد ضمن برنامج الكشف المبكر",
            slide15Title: "ورشة توعوية",
            slide15Desc: "جلسة تثقيفية حول طرق الوقاية من الصمم وأعراضه المبكرة",
            slide16Title: "رعاية شاملة",
            slide16Desc: "توزيع العلاجات والأدوية خلال إحدى الحملات الميدانية",
            slide17Title: "خدمة المجتمعات",
            slide17Desc: "زيارة ميدانية لمدينة اللويبدة في منطقة إينشيري لتقديم الخدمات الطبية",
            slide18Title: "وصول إلى الجميع",
            slide18Desc: "بعثة طبية لإحدى المناطق النائية التي تفتقر إلى الخدمات الصحية الأساسية"
        },
        video: {
            title: "فيديو توعوي",
            notSupported: "متصفحك لا يدعم تشغيل الفيديو",
            descTitle: "شرح حالة مريض",
            descP1: "في هذا الفيديو، يقوم الدكتور عبد الله ولد الددي بشرح حالة أحد المرضى الذين يعانون من مشاكل في السمع، حيث يوضح التشخيص والخطة العلاجية المتبعة. يظهر الفيديو كيفية الفحص الطبي وأهمية الكشف المبكر عن مشاكل السمع.",
            descP2: "يقدم الدكتور شرحاً وافياً عن حالة المريض وطبيعة المشكلة التي يعاني منها، مع توضيح لطرق الوقاية والعلاج المتاحة من خلال الجمعية."
        },
        symptoms: {
            title: "أعراض الصمم التي يجب الانتباه لها",
            subtitleAr: "معرفة هذه الأعراض حماية لأطفالنا من الصم",
            subtitleFr: "Connaître ces symptômes c'est prévenir la surdité chez nos enfants"
        },
        official: {
            title: "المعلومات الرسمية",
            legalRefTitle: "المرجع القانوني",
            legalRefContent: "المادة 7 من القانون رقم 1021/2021 الصادر بتاريخ 10/02/2021 المتعلق بالجمعيات والهيئات والمؤسسات",
            foundationDateTitle: "تاريخ التأسيس",
            foundationDateContent: "29 مارس 2005",
            licenseTitle: "رقم الترخيص",
            licenseContent: "FA 010000231007202511266",
            addressTitle: "العنوان",
            addressContent: "عيادة لالة الطبية، 175 حي ك رقم، ص ب 1320، انواكشوط، موريتانيا",
            contactInfoTitle: "معلومات الاتصال",
            contactInfoContent: "يرجى التواصل عبر الهاتف أو الحضور مباشرة إلى العيادة.",
            consultationHoursTitle: "أوقات الاستشارة",
            consultationHoursContent: "الجمعة والسبت من الساعة 10:00 صباحًا حتى 12:00 ظهرًا (GMT)"
        },
        activities: {
            title: "أنشطتنا",
            awarenessTitle: "التوعية",
            awarenessContent: "نشر الوعي حول أسباب الصمم وطرق الوقاية منه بين أفراد المجتمع.",
            earlyDetectionTitle: "الكشف المبكر",
            earlyDetectionContent: "إجراء فحوصات للكشف المبكر عن حالات الصمم، خاصة بين الأطفال، لتسهيل التدخل المبكر والعلاج المناسب.",
            schoolVisitsTitle: "زيارات المدارس",
            schoolVisitsContent: "يقوم فريقنا بمعاينة وتشخيص الحالة الصحية للتلاميذ الذين يعانون من أمراض في الأذن وأنواع مختلفة من الصمم في مدارس مختلفة المناطق."
        },
        contact: {
            title: "اتصل بنا",
            address: "نواكشوط، موريتانيا",
            emailLabel: "البريد الإلكتروني:",
            phoneLabel: "الهاتف:",
            whatsappNumber: "واتساب: 0022220180587"
        },
        footer: {
            text: "© 2025 الجمعية الموريتانية للوقاية من الصمم. جميع الحقوق محفوظة."
        }
    },
    fr: {
        header: {
            titleFr: "Association Mauritanienne pour la Prévention de la Surdité",
            titleAr: "الجمعية الموريتانية للوقاية من الصمم"
        },
        hero: {
            title: "Lutter contre la surdité en Mauritanie",
            subtitle: "Promouvoir la santé auditive et fournir un soutien aux personnes dans le besoin"
        },
        about: {
            title: "Lutter contre la surdité en Mauritanie",
            content: "Promouvoir la santé auditive et fournir un soutien aux personnes dans le besoin"
        },
        aboutMain: {
            title: "À propos de l'association",
            content: "L'Association Mauritanienne pour la Prévention de la Surdité est une organisation qui travaille à combattre la surdité en Mauritanie, visant à réduire sa prévalence et à fournir un soutien aux personnes touchées. Nos efforts comprennent des activités de sensibilisation sur les causes de la surdité et les méthodes de prévention, en plus de fournir des services de soins de santé et des appareils auditifs aux personnes dans le besoin."
        },
        leadership: {
            title: "Équipe de Direction",
            presidentName: "Dr. Abdullah Ould Deddi",
            presidentTitle: "Président de l'Association - Spécialiste ORL",
            messageTitle: "Message du Président",
            messageP1: "Compte tenu des risques que représentent les troubles auditifs non traités, et après que l'organisation ait conclu, au cours de ses plus de 20 ans d'expérience, que les bouchons de cérumen et les mauvaises positions d'allaitement sont parmi les principales causes de surdité, l'Association Mauritanienne de Lutte contre la Surdité (AMPS) a décidé d'organiser une campagne de dépistage et de traitement en faveur des groupes les plus exposés (ouvriers des mines et carrières, enfants des écoles, chauffeurs de camions et véhicules...).",
            messageP2: "Cette campagne vise à fournir des examens gratuits avec traitement et distribution d'aides auditives et à établir une base de données dont profiteront toutes les parties concernées par l'élaboration de plans et stratégies.",
            member1Name: "Dr. Cheikh Hanena",
            member1Title: "Membre du Conseil d'Administration",
            member2Name: "Ahmed Bzeid Dahman",
            member2Title: "Membre du Conseil d'Administration",
            member3Name: "Mohamed Yeslem Abdel Dayem",
            member3Title: "Membre du Conseil d'Administration",
            member4Name: "Dr. Sidi Ahmed Lafdhel",
            member4Title: "Membre du Conseil d'Administration",
            member5Name: "Fatimata Traore",
            member5Title: "Membre du Conseil d'Administration"
        },
        gallery: {
            title: "Galerie Photos",
            slide1Title: "Équipe des Médecins Bénévoles",
            slide1Desc: "",
            slide2Title: "Personnel Médical Bénévole",
            slide2Desc: "Médecins spécialisés offrant leurs services bénévoles pour aider les patients",
            slide3Title: "Traitement",
            slide3Desc: "Citoyens attendant un traitement lors d'une des tournées de l'organisation",
            slide4Title: "Mission Médicale",
            slide4Desc: "Distribution de traitements et médicaments lors d'une mission bénévole sur le terrain",
            slide5Title: "Accréditation Officielle",
            slide5Desc: "Certificat d'approbation du Ministère de la Santé - Département de Planification et Coopération Information Sanitaire",
            slide6Title: "Documentation Officielle",
            slide6Desc: "Certificat d'enregistrement dans la base de données du Ministère chargé des Relations avec le Parlement et la Société Civile",
            slide7Title: "Accréditation Gouvernementale",
            slide7Desc: "Document d'approbation officiel du Ministère de la Santé attestant des efforts de l'association",
            slide8Title: "Partenariat Local",
            slide8Desc: "Certificat d'appréciation de la Municipalité de Tevragh Zeina à Nouakchott en reconnaissance des efforts de l'association",
            slide9Title: "Couverture Médiatique",
            slide9Desc: "Article dans le journal officiel intitulé \"La Douleur Oubliée\" documentant les efforts de l'association dans les zones reculées",
            slide10Title: "Travail de Terrain",
            slide10Desc: "Mission bénévole dans la région reculée d'Inchiri pour fournir des services médicaux",
            slide11Title: "Histoire de Succès",
            slide11Desc: "Rapport sur le cas d'Aicha Fall qui souffrait de surdité depuis l'enfance et a été traitée par l'association",
            slide12Title: "Programme Scolaire",
            slide12Desc: "Couverture médiatique du programme de dépistage précoce de la surdité dans les écoles",
            slide13Title: "Éducation Sanitaire",
            slide13Desc: "Article dans le journal français intitulé \"Mieux vaut prévenir que guérir\" sur les programmes de sensibilisation",
            slide14Title: "Visite Scolaire",
            slide14Desc: "Couverture de la visite de l'équipe de l'association à l'école Imam Ahmed dans le cadre du programme de dépistage précoce",
            slide15Title: "Atelier de Sensibilisation",
            slide15Desc: "Session éducative sur les méthodes de prévention de la surdité et ses symptômes précoces",
            slide16Title: "Soins Complets",
            slide16Desc: "Distribution de traitements et médicaments lors d'une campagne de terrain",
            slide17Title: "Service aux Communautés",
            slide17Desc: "Visite de terrain à la ville de Louwaybida dans la région d'Inchiri pour fournir des services médicaux",
            slide18Title: "Accès pour Tous",
            slide18Desc: "Mission médicale dans une zone reculée manquant de services de santé de base"
        },
        video: {
            title: "Vidéo Éducative",
            notSupported: "Votre navigateur ne supporte pas la lecture vidéo",
            descTitle: "Explication d'un Cas de Patient",
            descP1: "Dans cette vidéo, le Dr Abdullah Ould Deddi explique le cas d'un patient souffrant de problèmes auditifs, où il clarifie le diagnostic et le plan de traitement suivi. La vidéo montre comment effectuer un examen médical et l'importance du dépistage précoce des problèmes auditifs.",
            descP2: "Le docteur fournit une explication complète de l'état du patient et de la nature du problème dont il souffre, avec clarification des méthodes de prévention et de traitement disponibles à travers l'association."
        },
        symptoms: {
            title: "Symptômes de surdité à surveiller",
            subtitleAr: "معرفة هذه الأعراض حماية لأطفالنا من الصم",
            subtitleFr: "Connaître ces symptômes c'est prévenir la surdité chez nos enfants"
        },
        official: {
            title: "Informations Officielles",
            legalRefTitle: "Référence Légale",
            legalRefContent: "Article 7 de la Loi n°1021/2021 du 10/02/2021 relative aux associations et organisations",
            foundationDateTitle: "Date de Fondation",
            foundationDateContent: "29 mars 2005",
            licenseTitle: "Numéro de Licence",
            licenseContent: "FA 010000231007202511266",
            addressTitle: "Adresse",
            addressContent: "Clinique Lala Medical, 175 Quartier K, BP 1320, Nouakchott, Mauritanie",
            contactInfoTitle: "Informations de Contact",
            contactInfoContent: "Veuillez contacter par téléphone ou vous rendre directement à la clinique.",
            consultationHoursTitle: "Heures de Consultation",
            consultationHoursContent: "Vendredi et Samedi de 10h00 à 12h00 (GMT)"
        },
        activities: {
            title: "Nos Activités",
            awarenessTitle: "Sensibilisation",
            awarenessContent: "Diffuser la sensibilisation sur les causes de la surdité et les méthodes de prévention parmi les membres de la communauté.",
            earlyDetectionTitle: "Dépistage Précoce",
            earlyDetectionContent: "Effectuer des examens pour le dépistage précoce des cas de surdité, en particulier chez les enfants, pour faciliter une intervention précoce et un traitement approprié.",
            schoolVisitsTitle: "Visites d'Écoles",
            schoolVisitsContent: "Notre équipe examine et diagnostique l'état de santé des élèves souffrant de maladies de l'oreille et de différents types de surdité dans les écoles de différentes régions."
        },
        contact: {
            title: "Contactez-nous",
            address: "Nouakchott, Mauritanie",
            emailLabel: "Email:",
            phoneLabel: "Téléphone:",
            whatsappNumber: "WhatsApp: 0022220180587"
        },
        footer: {
            text: "© 2025 Association Mauritanienne pour la Prévention de la Surdité. Tous droits réservés."
        }
    }
};

// Function to change language
function changeLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(lang + '-btn').classList.add('active');
    
    // Get translation data
    const t = translations[lang];
    
    // Update header titles
    const titleFr = document.getElementById('site-title-fr');
    const titleAr = document.getElementById('site-title-ar');
    
    if (lang === 'fr') {
        titleFr.style.display = 'block';
        titleAr.style.display = 'none';
    } else {
        titleFr.style.display = 'none';
        titleAr.style.display = 'block';
    }
    
    // Update hero section
    updateElementContent('hero-title', t.hero.title);
    updateElementContent('hero-subtitle', t.hero.subtitle);
    
    // Update about section
    updateElementContent('about-title', t.about.title);
    updateElementContent('about-content', t.about.content);
    
    // Update main about section
    updateElementContent('about-main-title', t.aboutMain.title);
    updateElementContent('about-main-content', t.aboutMain.content);
    
    // Update leadership section
    updateElementContent('leadership-title', t.leadership.title);
    updateElementContent('president-name', t.leadership.presidentName);
    updateElementContent('president-title', t.leadership.presidentTitle);
    updateElementContent('president-message-title', t.leadership.messageTitle);
    updateElementContent('president-message-p1', t.leadership.messageP1);
    updateElementContent('president-message-p2', t.leadership.messageP2);
    updateElementContent('member1-name', t.leadership.member1Name);
    updateElementContent('member1-title', t.leadership.member1Title);
    updateElementContent('member2-name', t.leadership.member2Name);
    updateElementContent('member2-title', t.leadership.member2Title);
    updateElementContent('member3-name', t.leadership.member3Name);
    updateElementContent('member3-title', t.leadership.member3Title);
    updateElementContent('member4-name', t.leadership.member4Name);
    updateElementContent('member4-title', t.leadership.member4Title);
    updateElementContent('member5-name', t.leadership.member5Name);
    updateElementContent('member5-title', t.leadership.member5Title);
    
    // Update gallery section
    updateElementContent('gallery-title', t.gallery.title);
    updateElementContent('slide1-title', t.gallery.slide1Title);
    updateElementContent('slide1-desc', t.gallery.slide1Desc);
    updateElementContent('slide2-title', t.gallery.slide2Title);
    updateElementContent('slide2-desc', t.gallery.slide2Desc);
    updateElementContent('slide3-title', t.gallery.slide3Title);
    updateElementContent('slide3-desc', t.gallery.slide3Desc);
    updateElementContent('slide4-title', t.gallery.slide4Title);
    updateElementContent('slide4-desc', t.gallery.slide4Desc);
    updateElementContent('slide5-title', t.gallery.slide5Title);
    updateElementContent('slide5-desc', t.gallery.slide5Desc);
    updateElementContent('slide6-title', t.gallery.slide6Title);
    updateElementContent('slide6-desc', t.gallery.slide6Desc);
    updateElementContent('slide7-title', t.gallery.slide7Title);
    updateElementContent('slide7-desc', t.gallery.slide7Desc);
    updateElementContent('slide8-title', t.gallery.slide8Title);
    updateElementContent('slide8-desc', t.gallery.slide8Desc);
    updateElementContent('slide9-title', t.gallery.slide9Title);
    updateElementContent('slide9-desc', t.gallery.slide9Desc);
    updateElementContent('slide10-title', t.gallery.slide10Title);
    updateElementContent('slide10-desc', t.gallery.slide10Desc);
    updateElementContent('slide11-title', t.gallery.slide11Title);
    updateElementContent('slide11-desc', t.gallery.slide11Desc);
    updateElementContent('slide12-title', t.gallery.slide12Title);
    updateElementContent('slide12-desc', t.gallery.slide12Desc);
    updateElementContent('slide13-title', t.gallery.slide13Title);
    updateElementContent('slide13-desc', t.gallery.slide13Desc);
    updateElementContent('slide14-title', t.gallery.slide14Title);
    updateElementContent('slide14-desc', t.gallery.slide14Desc);
    updateElementContent('slide15-title', t.gallery.slide15Title);
    updateElementContent('slide15-desc', t.gallery.slide15Desc);
    updateElementContent('slide16-title', t.gallery.slide16Title);
    updateElementContent('slide16-desc', t.gallery.slide16Desc);
    updateElementContent('slide17-title', t.gallery.slide17Title);
    updateElementContent('slide17-desc', t.gallery.slide17Desc);
    updateElementContent('slide18-title', t.gallery.slide18Title);
    updateElementContent('slide18-desc', t.gallery.slide18Desc);
    
    // Update video section
    updateElementContent('video-title', t.video.title);
    updateElementContent('video-not-supported', t.video.notSupported);
    updateElementContent('video-desc-title', t.video.descTitle);
    updateElementContent('video-desc-p1', t.video.descP1);
    updateElementContent('video-desc-p2', t.video.descP2);
    
    // Update symptoms section
    updateElementContent('symptoms-title', t.symptoms.title);
    updateElementContent('symptoms-subtitle-ar', t.symptoms.subtitleAr);
    updateElementContent('symptoms-subtitle-fr', t.symptoms.subtitleFr);
    
    // Show/hide symptoms lists based on language
    const symptomsArabic = document.getElementById('symptoms-arabic');
    const symptomsFrench = document.getElementById('symptoms-french');
    
    if (lang === 'fr') {
        symptomsArabic.style.display = 'none';
        symptomsFrench.style.display = 'block';
    } else {
        symptomsArabic.style.display = 'block';
        symptomsFrench.style.display = 'none';
    }
    
    // Update official info section
    updateElementContent('official-title', t.official.title);
    updateElementContent('legal-ref-title', t.official.legalRefTitle);
    updateElementContent('legal-ref-content', t.official.legalRefContent);
    updateElementContent('foundation-date-title', t.official.foundationDateTitle);
    updateElementContent('foundation-date-content', t.official.foundationDateContent);
    updateElementContent('license-title', t.official.licenseTitle);
    updateElementContent('license-content', t.official.licenseContent);
    updateElementContent('address-title', t.official.addressTitle);
    updateElementContent('address-content', t.official.addressContent);
    updateElementContent('contact-info-title', t.official.contactInfoTitle);
    updateElementContent('contact-info-content', t.official.contactInfoContent);
    updateElementContent('consultation-hours-title', t.official.consultationHoursTitle);
    updateElementContent('consultation-hours-content', t.official.consultationHoursContent);
    
    // Update activities section
    updateElementContent('activities-title', t.activities.title);
    updateElementContent('awareness-title', t.activities.awarenessTitle);
    updateElementContent('awareness-content', t.activities.awarenessContent);
    updateElementContent('early-detection-title', t.activities.earlyDetectionTitle);
    updateElementContent('early-detection-content', t.activities.earlyDetectionContent);
    updateElementContent('school-visits-title', t.activities.schoolVisitsTitle);
    updateElementContent('school-visits-content', t.activities.schoolVisitsContent);
    
    // Update contact section
    updateElementContent('contact-title', t.contact.title);
    updateElementContent('contact-address', t.contact.address);
    updateElementContent('email-label', t.contact.emailLabel);
    updateElementContent('phone-label', t.contact.phoneLabel);
    updateElementContent('whatsapp-number', t.contact.whatsappNumber);
    
    // Update footer
    updateElementContent('footer-text', t.footer.text);
}

// Helper function to update element content safely
function updateElementContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element && content !== undefined) {
        element.textContent = content;
    }
}

// Gallery slider functionality
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide-item');
const dotsContainer = document.querySelector('.gallery-dots');

// Initialize gallery if elements exist
if (slides.length > 0 && dotsContainer) {
    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.gallery-dot');

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        resetInterval();
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        resetInterval();
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function goToSlide(index) {
        resetInterval();
        showSlide(index);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 9000);
    }

    // Auto-advance every 9 seconds
    slideInterval = setInterval(nextSlide, 9000);

    // Show first slide initially
    showSlide(0);
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set default language to Arabic
    changeLanguage('ar');
    
    // Add click event listeners to language buttons
    const arBtn = document.getElementById('ar-btn');
    const frBtn = document.getElementById('fr-btn');
    
    if (arBtn) {
        arBtn.addEventListener('click', () => changeLanguage('ar'));
    }
    
    if (frBtn) {
        frBtn.addEventListener('click', () => changeLanguage('fr'));
    }
});