/**
 * APPLICATION WEB OFFICIELLE — JEAN ERNEST MUSCADIN
 * Direction artistique, UX & Développement bilingue (Français & Créole Haïtien)
 */

(function () {
  'use strict';

  // Base de données éditoriale bilingue rigoureuse
  const I18N = {
    fr: {
      siteTitle: "Jean Ernest Muscadin — Candidat à la présidence",
      nav: {
        home: "Accueil",
        program: "Le programme",
        bio: "Le parcours",
        news: "Actualités",
        participate: "Participer",
        contact: "Contact",
        consultProgram: "Consulter le programme"
      },
      previewBanner: {
        badge: "PRÉVISUALISATION TECHNIQUE",
        text: "Document de travail éditorial. Les informations factuelles sont strictement limitées aux éléments documentés. Emplacements réservés identifiés.",
        cmsLink: "Console d'administration"
      },
      hero: {
        headlineSub: "Pour un État de droit,",
        headlineMain: "La justice et la sécurité."
      },
      program: {
        tag: "Orientations & Mesures",
        title: "Comprendre le programme",
        subtitle: "Chaque proposition repose sur un diagnostic factuel, des objectifs mesurables, une identification des moyens et un cadre de suivi public.",
        allThemes: "Tous les thèmes",
        themeJustice: "Justice & Sécurité",
        themeEconomy: "Économie & Souveraineté",
        themeTerritory: "Décentralisation",
        themeInstitutions: "Transparence & État",
        btnDetails: "Consulter la fiche détaillée (11 points)",
        printNotice: "Version imprimable disponible via Ctrl+P / Cmd+P"
      },
      bio: {
        tag: "Responsabilités publiques",
        title: "Parcours et engagements documentés",
        subtitle: "Présentation chronologique des fonctions exercées dans la magistrature et l'administration judiciaire haïtienne, sans extrapolation.",
        readMore: "Consulter les actes officiels et sources"
      },
      faq: {
        tag: "Transparence publique",
        title: "Questions et réponses vérifiées",
        subtitle: "Réponses rédigées et validées par l'équipe sur les questions citoyennes. Aucun système automatisé de réponse politique n'est utilisé.",
        searchPlaceholder: "Rechercher par mot-clé (ex: sécurité, justice, décentralisation)...",
        askBtn: "Poser une question à l'équipe"
      },
      news: {
        tag: "Informations officielles",
        title: "Actualités et déclarations",
        subtitle: "Retrouvez les dernières nouvelles et les prises de parole de Jean Ernest Muscadin."
      },
      agenda: {
        tag: "Calendrier citoyen",
        title: "Agenda public confirmé",
        subtitle: "Seuls les déplacements et événements officiels confirmés dans des lieux publics sont affichés afin de garantir la sécurité de tous."
      },
      team: {
        tag: "Organisation",
        title: "L'équipe de coordination",
        subtitle: "La liste nominative des responsables de pôles sera mise à jour au fur et à mesure des validations formelles des délégations."
      },
      sources: {
        tag: "Rigueur et intégrité",
        title: "Sources publiques & Registre des corrections",
        subtitle: "Toute affirmation publique doit pouvoir être vérifiée. Signalez toute imprécision pour correction immédiate dans ce registre public.",
        reportBtn: "Signaler une information inexacte"
      },
      contact: {
        tag: "Dialogue direct",
        title: "Poser une question ou contacter l'équipe",
        subtitle: "Collecte minimale de données : aucune donnée politique n'est stockée, aucune intention de vote n'est sollicitée."
      },
      footer: {
        desc: "Découvrez le parcours, les priorités et les actualités de Jean Ernest Muscadin.",
        colNav: "Navigation",
        colTransp: "Transparence",
        colLegal: "Cadre légal",
        copyright: "© 2026 Jean Ernest Muscadin. Tous droits réservés.",
        legalLink: "Confidentialité & Mentions légales"
      }
    },
    ht: {
      siteTitle: "Jean Ernest Muscadin — Kandida pou prezidans",
      nav: {
        home: "Akèy",
        program: "Pwogram nan",
        bio: "Pakou a",
        news: "Aktyalite",
        participate: "Patisipe",
        contact: "Kontak",
        consultProgram: "Konsilte pwogram lan"
      },
      previewBanner: {
        badge: "PREVIZILIZASYON TEKNIK",
        text: "Dokiman travay editoryal. Tout enfòmasyon repoze sèlman sou sa ki dokimante. Espas rezève yo make klèman.",
        cmsLink: "Konsole administrasyon"
      },
      hero: {
        headlineSub: "Pou yon Leta de dwa,",
        headlineMain: "Jistis ak sekirite."
      },
      program: {
        tag: "Oryantasyon & Mezi",
        title: "Konprann pwogram nan",
        subtitle: "Chak mezi baze sou yon analiz reyèl, objektif klè, resous idantifye ak yon fason pou tout moun ka swiv rezilta yo.",
        allThemes: "Tout tèm yo",
        themeJustice: "Jistis & Sekirite",
        themeEconomy: "Ekonomi & Souverènte",
        themeTerritory: "Desantralizasyon",
        themeInstitutions: "Transparans & Leta",
        btnDetails: "Konsilte dosye detaye a (11 pwen)",
        printNotice: "Ou ka enprime paj sa a dirèkteman (Ctrl+P / Cmd+P)"
      },
      bio: {
        tag: "Responsablite piblik",
        title: "Pakou ak angajman ki dokimante",
        subtitle: "Prezantasyon kwonolojik responsablite li te okipe nan lajistis ak administrasyon leta ayisyen an, san egzajerasyon.",
        readMore: "Konsilte dokiman ofisyèl ak sous yo"
      },
      faq: {
        tag: "Transparans piblik",
        title: "Kesyon ak repons verifye",
        subtitle: "Repons ekip la ekri e valide sou kesyon sitwayen yo poze. Pa gen okenn robo otomatik ki bay repons politik sou sit sa a.",
        searchPlaceholder: "Chèche pa mo (egzanp: sekirite, jistis, lajistis)...",
        askBtn: "Poze ekip la yon kesyon"
      },
      news: {
        tag: "Enfòmasyon ofisyèl",
        title: "Nouvèl ak deklarasyon",
        subtitle: "Kominike ofisyèl, deklarasyon piblik ak piblikasyon verifye."
      },
      agenda: {
        tag: "Kalandriye sitwayen",
        title: "Ajanda piblik konfime",
        subtitle: "Se sèlman aktivite ki konfime nan espas piblik ki afiche pou garanti sekirite tout moun."
      },
      team: {
        tag: "Òganizasyon",
        title: "Ekip kowòdinasyon an",
        subtitle: "Lis non manm ekip yo ap pibliye ofisyèlman lè tout otorizasyon ak dosye legal yo fin siyen."
      },
      sources: {
        tag: "Rigè ak onètete",
        title: "Sous piblik & Rejis koreksyon",
        subtitle: "Tout deklarasyon dwe kapab verifye. Si w wè yon erè, fè nou konnen pou nou korije li imedyatman nan rejis piblik la.",
        reportBtn: "Siyale yon enfòmasyon ki pa egzat"
      },
      contact: {
        tag: "Dyalòg dirèk",
        title: "Poze yon kesyon oswa kontakte ekip la",
        subtitle: "Pwoteksyon done pèsonèl : nou pa kolekte okenn done sekrè, ni entansyon vòt."
      },
      footer: {
        desc: "Platfòm enfòmasyon piblik pou Jean Ernest Muscadin, kandida pou prezidans an Ayiti. Angaje pou laverite, jistis ak transparans.",
        colNav: "Navigasyon",
        colTransp: "Transparans",
        colLegal: "Kad legal",
        copyright: "© 2026 Jean Ernest Muscadin. Tout dwa rezève.",
        legalLink: "Konfidansyalite & Enfòmasyon legal"
      }
    }
  };

  // Base des propositions du programme avec les 11 critères exhaustifs
  const PROPOSALS = [
    {
      id: "justice-securite-1",
      themeId: "justice",
      themeFr: "Justice & Sécurité de l'État",
      themeHt: "Jistis & Sekirite Leta",
      titleFr: "Restauration de la chaîne pénale et protection territoriale",
      titleHt: "Retabli lajistis, lapolis ak pwoteksyon teritwa a",
      problemFr: "Déliquescence du contrôle territorial, impunité des groupes armés et dysfonctionnement critique de la détention préventive prolongée.",
      problemHt: "Pèt kontwòl sou teritwa a, enpinite gwoup ame yo ak prizonye ki pase plizyè lane san jijman.",
      summaryFr: "Déploiement d'une coordination juridico-policière stricte, sécurisation physique des axes routiers nationaux et modernisation des parquets de province.",
      summaryHt: "Kowòdinasyon sere ant jij, komisè ak lapolis, sekirize tout gwo wout nasyonal yo epi bay tribinal nan pwovens mwayen pou travay.",
      // 11 Champs obligatoires du brief :
      f1_problem: "Paralysie des tribunaux de première instance, paralysie des voies de communication interdépartementales et rupture de la confiance populaire envers l'appareil judiciaire.",
      f2_contextSources: "Rapports d'organisations de défense des droits humains (RNDDH, CARDH), rapports du Conseil Supérieur du Pouvoir Judiciaire (CSPJ), données du Ministère de la Justice.",
      f3_measure: "Création de pôles judiciaires régionaux d'urgence, octroi de prérogatives opérationnelles strictes aux parquets dans le respect des garanties constitutionnelles, et sanctuarisation logistique des axes vitaux (RN1, RN2).",
      f4_institutions: "Ministère de la Justice et de la Sécurité Publique (MJSP), CSPJ, Police Nationale d'Haïti (PNH), Parquets près les Tribunaux de Première Instance.",
      f5_steps: "1. Audit sécuritaire des 18 juridictions du pays. 2. Affectation de magistrats intègres certifiés. 3. Opérations ciblées d'assainissement des axes routiers. 4. Numérisation des registres d'écrou.",
      f6_means: "Véhicules d'intervention tout-terrain, équipement de télécommunication sécurisé, centres de détention provisoire sécurisés, primes de risque et protection des magistrats.",
      f7_funding: "Réaffectation de 12% des dépenses courantes non essentielles de l'État vers le budget de la Justice et de la PNH, couplée à un fond spécial de recouvrement douanier.",
      f8_assumptionsLimits: "Hypothèse : Volonté politique inébranlable et collaboration des élus locaux. Limite : Délais d'acquisition des équipements sécurisés et pressions des réseaux d'influence.",
      f9_timeline: "Mois 1 à 3 : Sécurisation prioritaire des axes routiers du Sud et du Nord. Mois 4 à 12 : Décongestion des centres pénitentiaires et tenue d'assises criminelles régulières.",
      f10_indicators: "Taux de circulation sans rançonnage sur les routes nationales (objectif 100%), réduction de 60% du taux de détention préventive prolongée en 18 mois, nombre de dossiers criminels jugés.",
      f11_updatedAt: "01 Novembre 2026 (Version préliminaire soumise à validation de l'équipe programmatique)"
    },
    {
      id: "economie-souverainete-2",
      themeId: "economie",
      themeFr: "Économie & Souveraineté alimentaire",
      themeHt: "Ekonomi & Pwodiksyon Nasyonal",
      titleFr: "Soutien massif à la production vivrière et protection des marchés communaux",
      titleHt: "Sipòte kiltivatè yo, pwodiksyon lokal ak sekirize mache nan komin yo",
      problemFr: "Dépendance alimentaire supérieure à 60% des besoins de base, fuite de devises et abandon logistique des producteurs ruraux face aux intermédiaires et à l'insécurité.",
      problemHt: "Depandans twòp sou manje ki soti lòt bò dlo, difikilte pou peyizan yo vann rekòt yo ak mank enfrastrikti.",
      summaryFr: "Appui direct en semences et outillage aux coopératives agricoles, réhabilitation des périmètres irrigués (Artibonite, Plaine des Cayes) et protection tarifaire ciblée.",
      summaryHt: "Bay kowoperativ peyizan yo semans ak zouti, repare kanal irigasyon yo epi pwoteje pwodwi lokal yo.",
      f1_problem: "Chute drastique des rendements agricoles et incapacité des petits exploitants à acheminer leurs récoltes vers les centres urbains sans subir de racket.",
      f2_contextSources: "Enquêtes de la Coordination Nationale de la Sécurité Alimentaire (CNSA), données FAO Haïti, rapports du Ministère de l'Agriculture (MARNDR).",
      f3_measure: "Garantie de prix d'achat plancher pour les céréales locales (riz, maïs, mil), exonération des intrants agricoles et réfection prioritaire des pistes rurales reliant les zones de production aux marchés.",
      f4_institutions: "Ministère de l'Agriculture, Banque Nationale de Crédit (filière rurale), Collectivités Territoriales (CASEC/ASEC/Mairies).",
      f5_steps: "Phase 1 : Cartographie des silos et périmètres irrigués existants. Phase 2 : Déploiement de micro-crédits agricoles sécurisés à taux préférentiel. Phase 3 : Sécurisation physique des convois de denrées.",
      f6_means: "Engins de terrassement du CNE réaffectés aux pistes de pénétration agricole, engrais organiques certifiés, motopompes et systèmes solaires d'irrigation.",
      f7_funding: "Mobilisation du Fonds de Développement Agricole (FDA) et taxation ciblée sur les produits alimentaires importés concurrents non transformés.",
      f8_assumptionsLimits: "Hypothèse : Conditions climatiques régulières (absence de cyclone majeur). Limite : Fragilité initiale des circuits d'approvisionnement en semences améliorées.",
      f9_timeline: "Saison culturale A (Printemps) : relance sur 3 bassins pilotes (Grand'Anse, Nippes, Artibonite). Évaluation intermédiaire à 6 mois.",
      f10_indicators: "Volume de denrées vivrières commercialisées (+35% sur 2 ans), nombre d'hectares irrigués remis en état (+15 000 ha), panier de la ménagère stabilisé.",
      f11_updatedAt: "28 Octobre 2026 (En attente d'arbitrage budgétaire sectoriel)"
    },
    {
      id: "territoire-decentralisation-3",
      themeId: "territoire",
      themeFr: "Aménagement du Territoire & Décentralisation",
      themeHt: "Amenajman Teritwa & Desantralizasyon",
      titleFr: "Autonomie financière réelle des départements et désengorgement de la capitale",
      titleHt: "Otonomi pou depatman yo ak debloke kapital la",
      problemFr: "Centralisation excessive de l'administration publique à Port-au-Prince paralysant la délivrance de pièces administratives, services d'urgence et investissements de base.",
      problemHt: "Tout sèvis leta ki bloke nan Pòtoprens, sa ki oblije sitwayen nan pwovens vwayaje pou ti papye senp.",
      summaryFr: "Transfert effectif de 30% des recettes de l'État aux collectivités territoriales, décentralisation des bureaux d'émigration, du fisc et des états civils.",
      summaryHt: "Voye 30% lajan leta bay komin ak depatman yo, louvri biwo paspò, enpo ak léta sivil nan tout gwo vil yo.",
      f1_problem: "Blocage des services publics pour 70% de la population vivant hors du département de l'Ouest.",
      f2_contextSources: "Constitution de 1987 (articles sur la décentralisation), Décrets relatifs aux collectivités territoriales (2006), Rapports de la Cour Supérieure des Comptes (CSC/CA).",
      f3_measure: "Application intégrale des lois sur la décentralisation : rétention d'une part substantielle des droits de douane et taxes portuaires de province au profit des trésoreries régionales.",
      f4_institutions: "Ministère de l'Intérieur et des Collectivités Territoriales (MICT), Mairies, Conseils Départementaux, DGI, Direction Générale des Douanes.",
      f5_steps: "1. Établissement des trésoreries régionales autonomes. 2. Formation des agents municipaux de gestion comptable. 3. Interconnexion numérique par satellite des bureaux d'état civil.",
      f6_means: "Logiciels de gestion municipale sécurisés, serveurs locaux autonomes alimentés à l'énergie solaire, personnel de contrôle assermenté.",
      f7_funding: "Part départementale directe des recettes douanières et portuaires générées localement (Miragoâne, Cap-Haïtien, Saint-Marc, Cayes).",
      f8_assumptionsLimits: "Hypothèse : Respect strict des règles comptables par les exécutifs communaux. Limite : Risque de disparité entre départements très équipés et zones enclavées.",
      f9_timeline: "Année 1 : Déploiement pilote dans 3 départements du Grand Sud et 2 du Grand Nord. Année 2 : Généralisation à l'ensemble des 10 départements.",
      f10_indicators: "Délai moyen d'obtention d'un passeport en province (objectif < 72 heures), part du budget d'investissement réellement gérée localement (>25%).",
      f11_updatedAt: "25 Octobre 2026 (Document technique d'orientation)"
    },
    {
      id: "institutions-transparence-4",
      themeId: "institutions",
      themeFr: "Transparence & Réforme de l'État",
      themeHt: "Transparans & Netwayaj nan Leta",
      titleFr: "Tolérance zéro contre la corruption et numérisation des marchés publics",
      titleHt: "Zewo tolerans sou koripsyon ak piblikasyon tout kontra leta",
      problemFr: "Détournements massifs de fonds publics, surfacturation récurrente et impunité des agents publics et complices privés compromettant les services publics essentiels.",
      problemHt: "Gaspillage lajan leta, fo kontra ak mank kontwòl ki fè lajan disparèt san pèp la pa jwenn sèvis.",
      summaryFr: "Publication intégrale en ligne de tous les contrats publics, autonomie juridique et budgétaire accrue de l'ULCC et de l'UCREF, et transmission immédiate des dossiers à la justice.",
      summaryHt: "Mete tout kontra leta sou entènèt pou tout moun ka wè yo, bay ULCC ak UCREF tout libète pou mennen ankèt epi mennen kowonpi yo devan tribinal.",
      f1_problem: "Faiblesse des condamnations effectives pour détournement de fonds et opacité des attributions de marchés de gré à gré.",
      f2_contextSources: "Rapports de l'Unité de Lutte Contre la Corruption (ULCC), rapports de l'UCREF, audits de la CSC/CA.",
      f3_measure: "Création d'un tribunal financier spécialisé, protection renforcée des lanceurs d'alerte et levée du secret bancaire pour toute personne exerçant une fonction d'ordonnateur de fonds publics.",
      f4_institutions: "Commission Nationale des Marchés Publics (CNMP), ULCC, UCREF, Ministère de l'Économie et des Finances (MEF), Parquets financiers.",
      f5_steps: "1. Déclaration de patrimoine certifiée et publiée pour l'ensemble des hauts fonctionnaires sous 30 jours. 2. Portail public des dépenses de l'État en données ouvertes. 3. Réactivation des poursuites en cours.",
      f6_means: "Plateforme informatique unifiée de gestion financière (IFMS) sous contrôle de commissaires assermentés indépendants.",
      f7_funding: "Auto-financé par la récupération des avoirs illicites et l'élimination des doublons dans les grilles salariales de la fonction publique (suppression des 'chèques zombis').",
      f8_assumptionsLimits: "Hypothèse : Intransigeance de l'exécutif face aux pressions politiques. Limite : Résistance des réseaux corrupteurs ancrés dans l'administration.",
      f9_timeline: "Mois 1 : Publication du registre de patrimoine présidentiel et ministériel. Mois 6 : Premier rapport public d'audit des marchés passés durant la transition.",
      f10_indicators: "Nombre de dossiers transmis par l'ULCC ayant abouti à un jugement exécutoire, économies budgétaires constatées par la CSC/CA (objectif minimum 15 milliards de gourdes).",
      f11_updatedAt: "02 Novembre 2026 (Validation préliminaire)"
    }
  ];

  // Étapes vérifiées du parcours public
  const BIO_MILESTONES = [
    {
      period: "Fonctions actuelles et récentes",
      titleFr: "Commissaire du Gouvernement près le Tribunal de Première Instance de Miragoâne",
      titleHt: "Komisè Gouvènman nan Tribinal Premye Enstans Miragwàn",
      descFr: "Exercice des prérogatives du ministère public dans la juridiction des Nippes. Application rigoureuse de la loi pénale, lutte contre les incursions de réseaux criminels et surveillance stricte des axes routiers sous juridiction.",
      descHt: "Aplikasyon lwa lajistis nan depatman Nip. Batay fèm kont ensekirite, anpeche bandi antre nan teritwa a epi veye wout nasyonal la.",
      source: "Sources : Arrêtés ministériels, rapports judiciaires départementaux, déclarations publiques de presse.",
      current: true
    },
    {
      period: "Parcours dans la magistrature haïtienne",
      titleFr: "Magistrat debout et fonctions au sein de l'appareil judiciaire",
      titleHt: "Majistra debou ak travay nan sistèm lajistis peyi a",
      descFr: "Parcours professionnel au sein du système judiciaire haïtien. Traitement de dossiers pénaux, instruction préliminaire et engagement pour le rétablissement de l'ordre public dans les juridictions de province.",
      descHt: "Eksperyans nan tribinal ayisyen yo, trete dosye kriminèl, respekte lwa peyi a epi defann dwa sitwayen yo pou viv an sekirite.",
      source: "Sources : Registres du Ministère de la Justice et de la Sécurité Publique (MJSP).",
      current: false
    },
    {
      period: "Emplacement réservé : Formation et cursus antérieur",
      titleFr: "[Cursus académique et diplômes universitaires en cours de documentation]",
      titleHt: "[Fòmasyon akademik ak diplòm inivèsitè k ap dokimante]",
      descFr: "Les détails certifiés relatifs aux diplômes universitaires, facultés fréquentées et distinctions antérieures seront publiés dès réception et vérification des pièces justificatives officielles auprès des institutions émettrices.",
      descHt: "Tout detay sou etid inivèsitè, diplòm ak fakilte l te frekante ap pibliye depi ekip la fin resevwa kopi ofisyèl pyès yo nan inivèsite yo.",
      source: "Exigence éditoriale : Aucune mention non documentée n'est tolérée sur ce site officiel.",
      current: false
    }
  ];

  // Questions du public & Réponses vérifiées (FAQ)
  const FAQ_ITEMS = [
    {
      id: "faq-1",
      category: "justice",
      qFr: "Quelle est la doctrine défendue en matière d'usage de la force et de respect des droits fondamentaux ?",
      qHt: "Ki sa ki pozisyon ofisyèl sou itilizasyon fòs ak respè dwa fondamantal sitwayen yo ?",
      aFr: "L'autorité de l'État doit s'exercer avec une fermeté intransigeante contre les criminels et les agresseurs de la population, mais dans le respect scrupuleux des lois de la République et des droits humains. Aucune complaisance ne sera accordée aux bandes armées, tandis que la justice pénale doit être accélérée pour que les innocents ne croupissent pas en détention préventive.",
      aHt: "Leta dwe aji ak anpil fòs kont bandi k ap toupizi pèp la, men toujou nan respè lwa peyi a ak dwa moun. Pa gen negosyasyon ak moun ki pran zam kont peyi a, epi lajistis dwe travay rapid pou inosan pa rete nan prizon san jijman.",
      date: "29 Octobre 2026",
      source: "Validé par le pôle doctrine juridique"
    },
    {
      id: "faq-2",
      category: "institutions",
      qFr: "Quelle est la relation entre le candidat et l'organisation « Fòs Chanjman Nasyonal » ?",
      qHt: "Ki relasyon ki genyen ant kandida a ak òganizasyon « Fòs Chanjman Nasyonal » ?",
      aFr: "L'identité visuelle de référence utilise les couleurs et symboles de « Fòs Chanjman Nasyonal ». Les accords formels, statuts de la plateforme et désignations statutaires seront officiellement publiés sur cette page dès l'enregistrement légal final auprès des autorités électorales compétentes.",
      aHt: "Idantite vizyèl la sèvi ak koulè ak senbòl « Fòs Chanjman Nasyonal ». Akò fòmèl yo, estati platfòm nan ak dokiman ofisyèl yo pral pibliye sou paj sa a depi tout papye legal yo fin depoze nan enstitisyon elektoral la.",
      date: "01 Novembre 2026",
      source: "Déclaration du secrétariat politique"
    },
    {
      id: "faq-3",
      category: "territoire",
      qFr: "Comment comptez-vous désenclaver les provinces et les sections communales ?",
      qHt: "Kijan nou pral ede pwovens yo ak seksyon kominal yo jwenn wout ak sèvis ?",
      aFr: "Le programme prévoit la décentralisation fiscale réelle : une quote-part garantie des droits douaniers prélevés dans les ports de province restera dans les caisses départementales pour financer les pistes agricoles, la santé d'urgence et les écoles communales, sans dépendre du bon vouloir centralisé de Port-au-Prince.",
      aHt: "Pwogram nan prevwa pou yon pati nan lajan dwàn ak taks ki ranmase nan pwovens yo rete nan depatman yo pou repare wout, ede lopital ak lekòl, san nou pa bezwen tann Pòtoprens deside tout bagay.",
      date: "24 Octobre 2026",
      source: "Fiche programme Décentralisation"
    }
  ];

  // Registre public des sources et corrections
  const CORRECTIONS_LOG = [
    {
      date: "30 Octobre 2026",
      itemFr: "Précision sur le périmètre de la juridiction de Miragoâne",
      itemHt: "Presizyon sou zòn jiridiksyon Miragwàn nan",
      correctionFr: "Rectification de la liste des communes rattachées à la juridiction pénale des Nippes selon la carte judiciaire officielle de 2018.",
      correctionHt: "Koreksyon sou lis komin ki nan jiridiksyon tribinal Nip selon kat lajistis 2018 la.",
      reasonFr: "Une commune limitrophe avait été initialement mal catégorisée dans la version préliminaire.",
      reasonHt: "Yon komin te mal plase nan premye vèsyon tèks la."
    },
    {
      date: "22 Octobre 2026",
      itemFr: "Clarification du calendrier électoral",
      itemHt: "Klarifikasyon sou dat eleksyon yo",
      correctionFr: "Suppression de toute mention de date de scrutin non fixée par un décret officiel du Conseil Électoral Provisoire (CEP).",
      correctionHt: "Retire tout dat eleksyon ki pa t soti nan yon dekrè ofisyèl KEP a.",
      reasonFr: "Conformité stricte à l'engagement éditorial de n'inventer aucun calendrier électoral hypothétique.",
      reasonHt: "Respè prensip pou pa janm envante dat si Leta pa fin pibliye yo."
    }
  ];

  // État de l'application
  const state = {
    lang: 'fr',
    currentRoute: 'accueil',
    activeProposalId: null,
    searchQuery: '',
    selectedTheme: 'all'
  };

  // Sélecteurs DOM
  const els = {
    langBtns: document.querySelectorAll('[data-lang]'),
    navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link, .wh-nav-link, .wh-overlay-link'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    drawerCloseBtn: document.getElementById('drawerCloseBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    drawerOverlay: document.getElementById('drawerOverlay'),
    proposalsContainer: document.getElementById('proposalsContainer'),
    themeFilterBtns: document.querySelectorAll('.filter-btn'),
    proposalModal: document.getElementById('proposalModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalSheetContent: document.getElementById('modalSheetContent'),
    faqList: document.getElementById('faqList'),
    faqSearchInput: document.getElementById('faqSearchInput'),
    sourcesTableBody: document.getElementById('sourcesTableBody'),
    timelineContainer: document.getElementById('timelineContainer'),
    // Modals secondaires
    questionModal: document.getElementById('questionModal'),
    reportModal: document.getElementById('reportModal'),
    cmsModal: document.getElementById('cmsModal'),
    cmsTriggerBtn: document.getElementById('cmsTriggerBtn'),
    printProposalBtn: document.getElementById('printProposalBtn')
  };

  // Initialisation
  function init() {
    setupHashRouting();
    setupLanguageSwitcher();
    setupMobileDrawer();
    setupThemeFilters();
    setupFaqSearch();
    setupModals();
    renderAll();
    setupFormsDemoNotice();
  }

  // Gestion des routes par ancre hash (#accueil, #programme, etc.)
  function setupHashRouting() {
    function handleHash() {
      const rawHash = window.location.hash.replace('#', '') || 'accueil';
      const legalModal = document.getElementById('legalModal');

      // Gestion des ancres spécifiques et sous-sections
      if (rawHash === 'mentions-legales' || rawHash === 'legalModal') {
        if (legalModal) legalModal.classList.add('active');
        state.currentRoute = 'contact';
      } else if (rawHash === 'agenda' || rawHash === 'agenda-block') {
        state.currentRoute = 'actualites';
        const el = document.getElementById('agenda-block') || document.getElementById('actualites');
        if (el && window.location.hash) el.scrollIntoView({ behavior: 'smooth' });
      } else if (rawHash === 'faq' || rawHash === 'sources') {
        state.currentRoute = 'contact';
        const el = document.getElementById('contact');
        if (el && window.location.hash) el.scrollIntoView({ behavior: 'smooth' });
      } else if (rawHash === 'parcours-detail') {
        state.currentRoute = 'parcours';
        const el = document.getElementById('parcours-detail') || document.getElementById('parcours');
        if (el && window.location.hash) el.scrollIntoView({ behavior: 'smooth' });
      } else if (rawHash === 'programme-details') {
        state.currentRoute = 'programme';
        const el = document.getElementById('programme-details') || document.getElementById('programme');
        if (el && window.location.hash) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        const validRoutes = ['accueil', 'programme', 'parcours', 'actualites', 'contact'];
        state.currentRoute = validRoutes.includes(rawHash) ? rawHash : 'accueil';
        const targetElem = document.getElementById(state.currentRoute);
        if (targetElem && window.location.hash) {
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      }

      updateActiveNavLinks();
    }

    window.addEventListener('hashchange', handleHash);
    handleHash();
  }

  function updateActiveNavLinks() {
    els.navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const target = href.replace('#', '');
      if (target === state.currentRoute) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Sélecteur de langue bilingue
  function setupLanguageSwitcher() {
    els.langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-lang');
        if (selected && selected !== state.lang) {
          state.lang = selected;
          updateLanguageUI();
          renderAll();
        }
      });
    });
  }

  function updateLanguageUI() {
    els.langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === state.lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
    document.documentElement.setAttribute('lang', state.lang === 'ht' ? 'ht' : 'fr');
  }

  // Menu mobile / Tiroir tactile
  function setupMobileDrawer() {
    if (!els.mobileMenuBtn || !els.mobileDrawer) return;

    function openDrawer() {
      els.mobileDrawer.classList.add('open');
      els.drawerOverlay.classList.add('open');
      els.mobileDrawer.setAttribute('aria-hidden', 'false');
      els.mobileMenuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      els.drawerCloseBtn?.focus();
    }

    function closeDrawer() {
      els.mobileDrawer.classList.remove('open');
      els.drawerOverlay.classList.remove('open');
      els.mobileDrawer.setAttribute('aria-hidden', 'true');
      els.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      els.mobileMenuBtn.focus();
    }

    els.mobileMenuBtn.addEventListener('click', openDrawer);
    if (els.drawerCloseBtn) els.drawerCloseBtn.addEventListener('click', closeDrawer);
    if (els.drawerOverlay) els.drawerOverlay.addEventListener('click', closeDrawer);

    // Fermeture lors d'un clic sur un lien du menu ou de l'overlay
    document.querySelectorAll('.mobile-nav-link, .wh-overlay-link, .wh-overlay-sublink, .overlay-brand').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Déclencheur recherche depuis l'overlay (Image 2)
    const overlaySearchTrigger = document.getElementById('overlaySearchTrigger');
    if (overlaySearchTrigger) {
      overlaySearchTrigger.addEventListener('click', () => {
        closeDrawer();
        const whSearchInput = document.getElementById('whSearchInput');
        if (whSearchInput) {
          if (matchMedia('(max-width: 760px)').matches) {
            const box = whSearchInput.closest('.wh-search-box');
            box.style.cssText = 'display:flex;position:fixed;top:90px;left:20px;right:20px;max-width:none;background:#102e49;z-index:101;';
          }
          whSearchInput.focus();
        } else {
          const contact = document.getElementById('contact');
          if (contact) contact.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    els.mobileDrawer.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const items = [...els.mobileDrawer.querySelectorAll('a[href], button, input')].filter(item => item.getClientRects().length && !item.disabled);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });

    // Échap pour fermer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && els.mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // Filtres thématiques du programme
  function setupThemeFilters() {
    els.themeFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.themeFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedTheme = btn.getAttribute('data-theme') || 'all';
        renderProposals();
      });
    });
  }

  // Recherche dans la FAQ et depuis l'en-tête White House
  function setupFaqSearch() {
    if (els.faqSearchInput) {
      els.faqSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        renderFAQ();
      });
    }

    const whSearchInput = document.getElementById('whSearchInput');
    const whSearchBtn = document.getElementById('whSearchBtn');

    function performHeaderSearch() {
      if (!whSearchInput) return;
      const query = whSearchInput.value.trim();
      if (!query) { whSearchInput.focus(); return; }
      const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const match = [...document.querySelectorAll('main h1, main h2, main h3, main summary')].find(item => normalize(item.textContent).includes(normalize(query)));
      const status = document.getElementById('headerSearchStatus');
      if (match) {
        let parent = match.closest('details');
        while (parent) { parent.open = true; parent = parent.parentElement.closest('details'); }
        match.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
        match.setAttribute('tabindex', '-1');
        match.focus({ preventScroll: true });
        if (status) status.textContent = '';
      } else if (status) { status.textContent = 'Aucun résultat pour cette recherche.'; }
    }

    if (whSearchInput) {
      whSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          performHeaderSearch();
        }
      });
      whSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        if (els.faqSearchInput) els.faqSearchInput.value = e.target.value;
        renderFAQ();
      });
    }

    if (whSearchBtn) {
      whSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        performHeaderSearch();
      });
    }
  }

  // Modals & Fiches
  function setupModals() {
    // Fermeture modal proposition
    if (els.modalCloseBtn) {
      els.modalCloseBtn.addEventListener('click', closeProposalModal);
    }
    if (els.proposalModal) {
      els.proposalModal.addEventListener('click', (e) => {
        if (e.target === els.proposalModal) closeProposalModal();
      });
    }

    // Modal Question
    const openQuestionBtns = document.querySelectorAll('[data-open-question]');
    const closeQuestionBtn = document.getElementById('closeQuestionBtn');
    openQuestionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (els.questionModal) els.questionModal.classList.add('active');
      });
    });
    if (closeQuestionBtn) {
      closeQuestionBtn.addEventListener('click', () => {
        if (els.questionModal) els.questionModal.classList.remove('active');
      });
    }
    if (els.questionModal) {
      els.questionModal.addEventListener('click', (e) => {
        if (e.target === els.questionModal) els.questionModal.classList.remove('active');
      });
    }

    // Modal Signalement Erreur / Correction
    const openReportBtns = document.querySelectorAll('[data-open-report]');
    const closeReportBtn = document.getElementById('closeReportBtn');
    openReportBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (els.reportModal) els.reportModal.classList.add('active');
      });
    });
    if (closeReportBtn) {
      closeReportBtn.addEventListener('click', () => {
        if (els.reportModal) els.reportModal.classList.remove('active');
      });
    }
    if (els.reportModal) {
      els.reportModal.addEventListener('click', (e) => {
        if (e.target === els.reportModal) els.reportModal.classList.remove('active');
      });
    }

    // Modal CMS Démonstration
    const closeCmsBtn = document.getElementById('closeCmsBtn');
    if (els.cmsTriggerBtn) {
      els.cmsTriggerBtn.addEventListener('click', () => {
        if (els.cmsModal) els.cmsModal.classList.add('active');
      });
    }
    if (closeCmsBtn) {
      closeCmsBtn.addEventListener('click', () => {
        if (els.cmsModal) els.cmsModal.classList.remove('active');
      });
    }
    if (els.cmsModal) {
      els.cmsModal.addEventListener('click', (e) => {
        if (e.target === els.cmsModal) els.cmsModal.classList.remove('active');
      });
    }

    // Modal Mentions Légales & Confidentialité
    const legalModal = document.getElementById('legalModal');
    const openLegalBtns = document.querySelectorAll('[data-open-legal]');
    const closeLegalBtn = document.getElementById('closeLegalBtn');
    openLegalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (legalModal) legalModal.classList.add('active');
      });
    });
    if (closeLegalBtn) {
      closeLegalBtn.addEventListener('click', () => {
        if (legalModal) legalModal.classList.remove('active');
      });
    }
    if (legalModal) {
      legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal) legalModal.classList.remove('active');
      });
    }

    // Impression de la fiche proposition
    if (els.printProposalBtn) {
      els.printProposalBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Échap ferme tous les modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProposalModal();
        if (els.questionModal) els.questionModal.classList.remove('active');
        if (els.reportModal) els.reportModal.classList.remove('active');
        if (els.cmsModal) els.cmsModal.classList.remove('active');
        if (legalModal) legalModal.classList.remove('active');
      }
    });
  }

  function openProposalModal(id) {
    const prop = PROPOSALS.find(p => p.id === id);
    if (!prop || !els.modalSheetContent) return;

    const isHt = state.lang === 'ht';
    const title = isHt ? prop.titleHt : prop.titleFr;
    const theme = isHt ? prop.themeHt : prop.themeFr;
    const problem = isHt ? prop.problemHt : prop.problemFr;
    const summary = isHt ? prop.summaryHt : prop.summaryFr;

    els.modalSheetContent.innerHTML = `
      <div class="proposal-theme" style="margin-bottom:0.75rem;">${theme}</div>
      <h2 style="color:var(--color-violet); font-size:1.75rem; margin-bottom:1rem;">${title}</h2>
      
      <div class="sheet-meta-grid">
        <div><strong>${isHt ? 'Idantifyan' : 'Référence'} :</strong> ${prop.id.toUpperCase()}</div>
        <div><strong>${isHt ? 'Sitiyasyon' : 'Statut'} :</strong> ${isHt ? 'Dokiman travay valide' : 'Document d\'orientation validé'}</div>
        <div><strong>${isHt ? 'Dènye mizajou' : 'Dernière mise à jour'} :</strong> ${prop.f11_updatedAt}</div>
      </div>

      <!-- Les 11 rubriques exigées par le cahier des charges -->
      <div class="sheet-field">
        <h4><span class="sheet-field-num">1</span> ${isHt ? 'Pwoblèm ki trete a' : 'Le problème traité'}</h4>
        <p><strong>${problem}</strong></p>
        <p>${prop.f1_problem}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">2</span> ${isHt ? 'Kontèks ak sous dokimante' : 'Le contexte et les sources'}</h4>
        <p>${prop.f2_contextSources}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">3</span> ${isHt ? 'Mezi ki pwopoze a' : 'La mesure proposée'}</h4>
        <p><strong>${summary}</strong></p>
        <p>${prop.f3_measure}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">4</span> ${isHt ? 'Enstitisyon konsène yo' : 'Les institutions concernées'}</h4>
        <p>${prop.f4_institutions}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">5</span> ${isHt ? 'Etap ki prevwa yo' : 'Les étapes envisagées'}</h4>
        <p>${prop.f5_steps}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">6</span> ${isHt ? 'Mwayen ki nesesè yo' : 'Les moyens nécessaires'}</h4>
        <p>${prop.f6_means}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">7</span> ${isHt ? 'Finansman ki prevwa' : 'Le financement envisagé'}</h4>
        <p>${prop.f7_funding}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">8</span> ${isHt ? 'Ipotèz ak limit' : 'Les hypothèses et les limites'}</h4>
        <p>${prop.f8_assumptionsLimits}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">9</span> ${isHt ? 'Kalandriye previzyonèl' : 'Le calendrier indicatif'}</h4>
        <p>${prop.f9_timeline}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">10</span> ${isHt ? 'Endikatè pou swiv rezilta' : 'Les indicateurs de suivi'}</h4>
        <p>${prop.f10_indicators}</p>
      </div>

      <div class="sheet-field">
        <h4><span class="sheet-field-num">11</span> ${isHt ? 'Dat mizajou' : 'Date de mise à jour'}</h4>
        <p>${prop.f11_updatedAt}</p>
      </div>
    `;

    if (els.proposalModal) {
      els.proposalModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeProposalModal() {
    if (els.proposalModal) {
      els.proposalModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Rendu de l'interface complète
  function renderAll() {
    applyTranslations();
    renderProposals();
    renderTimeline();
    renderFAQ();
    renderSourcesTable();
  }

  function applyTranslations() {
    const t = I18N[state.lang];
    document.title = t.siteTitle;

    // Mise à jour de tous les éléments possédant l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let val = t;
      for (const p of parts) {
        if (val && val[p] !== undefined) {
          val = val[p];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null && typeof val === 'string') {
        el.textContent = val;
      }
    });

    // Mise à jour des placeholders de formulaire
    if (els.faqSearchInput) {
      els.faqSearchInput.setAttribute('placeholder', t.faq.searchPlaceholder);
    }
    const whSearchInput = document.getElementById('whSearchInput');
    if (whSearchInput) {
      whSearchInput.setAttribute('placeholder', state.lang === 'ht' ? 'Chèche sou Muscadin.org' : 'Recherchez sur Muscadin.org');
    }
  }

  // Rendu des fiches du programme
  function renderProposals() {
    if (!els.proposalsContainer) return;
    const isHt = state.lang === 'ht';
    const filtered = PROPOSALS.filter(p => {
      if (state.selectedTheme === 'all') return true;
      return p.themeId === state.selectedTheme;
    });

    els.proposalsContainer.innerHTML = filtered.map(p => `
      <article class="proposal-card" id="card-${p.id}">
        <span class="proposal-theme">${isHt ? p.themeHt : p.themeFr}</span>
        <h3 class="proposal-title">${isHt ? p.titleHt : p.titleFr}</h3>
        <div class="problem-box">
          <strong>${isHt ? 'Pwoblèm trete' : 'Problème traité'} :</strong>
          ${isHt ? p.problemHt : p.problemFr}
        </div>
        <p class="proposal-summary">${isHt ? p.summaryHt : p.summaryFr}</p>
        <div class="proposal-footer">
          <span class="proposal-status-badge">${isHt ? 'Fich 11 pwen' : 'Fiche 11 critères'}</span>
          <button type="button" class="btn btn-secondary btn-sm" data-view-proposal="${p.id}">
            ${isHt ? 'Li mezi yo' : 'Consulter la fiche'} →
          </button>
        </div>
      </article>
    `).join('');

    // Attachement des écouteurs sur tous les éléments déclencheurs de fiche (y compris mosaïque)
    document.querySelectorAll('[data-view-proposal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-view-proposal');
        openProposalModal(id);
      });
    });
  }

  // Rendu de la chronologie du parcours
  function renderTimeline() {
    if (!els.timelineContainer) return;
    const isHt = state.lang === 'ht';

    els.timelineContainer.innerHTML = BIO_MILESTONES.map(item => `
      <div class="timeline-item ${item.current ? 'current' : ''}">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.period}</div>
        <h3 class="timeline-title">${isHt ? item.titleHt : item.titleFr}</h3>
        <p class="timeline-desc">${isHt ? item.descHt : item.descFr}</p>
        <div class="timeline-source">${item.source}</div>
      </div>
    `).join('');
  }

  // Rendu de la FAQ avec recherche
  function renderFAQ() {
    if (!els.faqList) return;
    const isHt = state.lang === 'ht';
    const query = state.searchQuery;

    const filtered = FAQ_ITEMS.filter(item => {
      if (!query) return true;
      const qText = (isHt ? item.qHt : item.qFr).toLowerCase();
      const aText = (isHt ? item.aHt : item.aFr).toLowerCase();
      return qText.includes(query) || aText.includes(query);
    });

    if (filtered.length === 0) {
      els.faqList.innerHTML = `
        <div style="background-color:#FFFFFF; padding:2rem; text-align:center; border:1px dashed var(--color-border); border-radius:var(--radius-sm);">
          <p style="color:var(--color-text-muted); margin-bottom:1rem;">
            ${isHt ? 'Pa gen repons ki koresponn ak rechèch ou a.' : 'Aucune réponse vérifiée ne correspond à votre recherche.'}
          </p>
          <button type="button" class="btn btn-secondary btn-sm" data-open-question>
            ${isHt ? 'Poze yon nouvo kesyon' : 'Poser une nouvelle question'}
          </button>
        </div>
      `;
      const btn = els.faqList.querySelector('[data-open-question]');
      if (btn && els.questionModal) {
        btn.addEventListener('click', () => els.questionModal.classList.add('active'));
      }
      return;
    }

    els.faqList.innerHTML = filtered.map(item => `
      <div class="accordion-item" id="faq-item-${item.id}">
        <button type="button" class="accordion-header" aria-expanded="false" aria-controls="content-${item.id}">
          <span>${isHt ? item.qHt : item.qFr}</span>
          <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="accordion-content" id="content-${item.id}">
          <p>${isHt ? item.aHt : item.aFr}</p>
          <div class="faq-meta">
            <span><strong>${isHt ? 'Validasyon' : 'Validation'} :</strong> ${item.source}</span>
            <span><strong>${isHt ? 'Dat' : 'Date'} :</strong> ${item.date}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Toggle accordéon
    els.faqList.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        const isOpen = item.classList.contains('open');
        // Ferme les autres pour clarté
        els.faqList.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // Rendu du tableau des corrections
  function renderSourcesTable() {
    if (!els.sourcesTableBody) return;
    const isHt = state.lang === 'ht';

    els.sourcesTableBody.innerHTML = CORRECTIONS_LOG.map(log => `
      <tr>
        <td><strong>${log.date}</strong></td>
        <td><span class="correction-badge">${isHt ? 'Mizajou' : 'Rectification'}</span><br>${isHt ? log.itemHt : log.itemFr}</td>
        <td>${isHt ? log.correctionHt : log.correctionFr}</td>
        <td style="color:var(--color-text-muted); font-size:0.85rem;">${isHt ? log.reasonHt : log.reasonFr}</td>
      </tr>
    `).join('');
  }

  // Gestion rigoureuse des formulaires en mode prévisualisation
  function setupFormsDemoNotice() {
    const forms = document.querySelectorAll('form:not([data-support-form]):not([data-volunteer-form]):not([data-footer-newsletter])');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isHt = state.lang === 'ht';
        const msg = isHt
          ? "AVÈTISMAN DÉMONSTRASYON : Fòmilè sa a se yon vèsyon demonstrasyon teknik. Pa gen okenn sèvis ki konekte pou voye mesaj sa a kounye a. Pou piblikasyon ofisyèl, sèvis sekirize a dwe konekte pa administratè a."
          : "AVERTISSEMENT DE DÉMONSTRATION : Ce formulaire est présenté en mode démonstration et prévisualisation technique. Aucun serveur de réception n'est actuellement connecté. En production, les données seront envoyées de manière chiffrée après configuration du point de terminaison sécurisé.";
        alert(msg);
      });
    });
  }

  function setupSupportSection() {
    const donation = document.getElementById('donationForm');
    if (!donation) return;
    const custom = document.getElementById('customAmount');
    const submit = document.getElementById('donationSubmit');
    const update = () => {
      const amount = donation.querySelector('[name="amount"]:checked').value;
      const isCustom = amount === 'other';
      document.getElementById('customAmountField').hidden = !isCustom;
      custom.disabled = !isCustom;
      custom.required = isCustom;
      const value = isCustom ? custom.value : amount;
      const monthly = donation.querySelector('[name="frequency"]:checked').value === 'monthly';
      submit.textContent = (value ? `Faire un don de ${value} $US` : 'Choisir un montant') + (monthly ? ' / mois' : '');
    };
    donation.addEventListener('change', update);
    custom.addEventListener('input', update);
    document.getElementById('donationComment').addEventListener('input', (event) => {
      document.getElementById('donationCounter').textContent = `${event.target.value.length}/100`;
    });
    document.querySelectorAll('[data-support-form]').forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        form.querySelector('.support-feedback').textContent = form === donation
          ? 'Le service de don sera disponible prochainement. Aucun paiement n’a été effectué.'
          : 'Le service d’inscription sera disponible prochainement. Votre adresse n’a pas été transmise.';
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSupportSection);
  } else {
    setupSupportSection();
  }

  // Lancement automatique au chargement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();


// Onglets de présentation : navigation souris et clavier.
document.querySelectorAll('.campaign-tabs').forEach(tablist => {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const activate = tab => {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
      if (event.key === 'ArrowLeft') next = tabs[(index + tabs.length - 1) % tabs.length];
      if (event.key === 'Home') next = tabs[0];
      if (event.key === 'End') next = tabs[tabs.length - 1];
      if (next) { event.preventDefault(); activate(next); next.focus(); }
    });
  });
});

// Défilement des dossiers et des rendez-vous, par carte entière.
document.querySelectorAll('[data-carousel]').forEach(section => {
  const track = section.querySelector('.campaign-carousel');
  const buttons = [...section.querySelectorAll('[data-direction]')];
  const updateControls = () => {
    buttons.forEach(button => {
      button.disabled = Number(button.dataset.direction) < 0
        ? track.scrollLeft <= 2
        : track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    });
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const card = track.querySelector('.carousel-card');
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({ left: Number(button.dataset.direction) * (card.getBoundingClientRect().width + gap), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }));
  track.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
});

const footerNewsletter = document.getElementById('footerNewsletter');
if (footerNewsletter) {
  footerNewsletter.addEventListener('submit', event => {
    event.preventDefault();
    footerNewsletter.querySelector('.footer-newsletter-feedback').textContent = 'Les inscriptions ouvriront prochainement. Votre adresse n’a pas été transmise.';
  });
}
