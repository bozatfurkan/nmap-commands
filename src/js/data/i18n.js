/**
 * Internationalization (i18n) Translations Dictionary
 * Supports English (EN) and Turkish (TR)
 */

export const I18N_DICTIONARY = {
  en: {
    appTitle: "Nmap Intelligence & Interactive Scan Builder",
    heroBadge: "Fuzzy Search & Intelligent Matching Engine Active",
    heroTitlePrefix: "Discover Nmap Commands With",
    heroTitleHighlight: "Smart Fuzzy Matching",
    heroDesc: "Even if you type typos or partial terms (e.g. sny scn, vuln script, pingless, decoy, eternalblue), our Levenshtein-powered engine instantly finds the exact Nmap flags.",
    searchPlaceholder: "Search command, flag, vulnerability or typo (e.g. syn scan, -sV, firewall bypass, eternalblue)...",
    quickTagsLabel: "Quick Tags:",
    
    // Header & Nav
    navSearch: "Search & Explorer",
    navWizard: "Wizard",
    navComparator: "Comparator",
    navCheatSheet: "Cheat-Sheet",
    navTiming: "Timing (-T)",
    btnCommunity: "Community",
    btnDisclaimer: "Disclaimer",
    
    // Customizer Panel
    customizerTitle: "Live IP, Port & Flag Customizer",
    customizerSub: "Target IP and port adjustments update across all generated commands in real time.",
    labelTargetIp: "Target IP / Subnet:",
    labelPorts: "Port Range (e.g. 80,443 or 1-1000):",
    labelTiming: "Timing / Speed Template:",
    placeholderPorts: "Default top 1000 ports",
    toggleExtraFlags: "Toggle Extra Flags:",
    
    // Categories
    catAll: "All Commands",
    catDiscovery: " Host Discovery",
    catPortScan: " Port Scanning",
    catServiceOs: " Service & OS",
    catVulnScripts: " Vulnerability Scripts (NSE)",
    catEvasion: " Firewall Evasion",
    catFavorites: " Bookmarks",
    showingCount: "Showing:",
    commandsText: "commands",
    noResultsTitle: "No Matching Commands Found",
    noResultsSub: "Try modifying your search term or click one of the quick tags above.",
    
    // Cards & Simulator
    btnDetailsSim: "Details & Simulator",
    modalSimTitle: "Command Simulator & Analysis",
    modalCategory: "Category:",
    btnCopy: "Copy",
    btnCopied: "Copied",
    metricsSpeed: "Scan Speed",
    metricsStealth: "Stealth Rating",
    metricsRisk: "Risk Level",
    whenToUseTitle: "When Should You Use This?",
    flagExplanationsTitle: "Flag Explanations",
    noFlagsText: "No special flags defined for this command.",
    
    // Wizard
    wizBadge: "Step-by-Step Guided Assistant",
    wizTitle: "Scenario-Based Command Wizard",
    wizSub: "Select your objective step by step; the intelligent engine will build optimized Nmap flags for your target.",
    wizStep: "Step",
    wizStep1Title: "Scanning Objective",
    wizStep2Title: "Timing & Speed",
    wizStep3Title: "Port Scope",
    wizStep4Title: "Generated Command & Demo",
    wizNext: "Next",
    wizPrev: "Back",
    wizComplete: "Complete",
    
    // Comparator
    compTitle: "Command Comparison Analysis",
    compSub: "Side-by-side comparison of stealth rating, speed, risk level, and target scenario fit.",
    compCmdA: "Command A:",
    compCmdB: "Command B:",
    
    // Cheat-Sheet
    csTitle: "Interactive Nmap Cheat-Sheet",
    csSub: "Comprehensive reference table of core Nmap command switches and parameters.",
    csColFlag: "Flag",
    csColNameCat: "Name & Category",
    csColDesc: "Description",
    csColExample: "Example Syntax",
    csColImpact: "Network Impact",
    
    // Timing Guide
    timingTitle: "Nmap Timing Templates Guide (-T0 .. -T5)",
    timingSub: "Packet delay pacing, RTT timeout, and IDS alert sensitivity details.",
    timingDelay: "Packet Delay:",
    timingRtt: "RTT Timeout:",
    timingPros: "Pros:",
    timingCons: "Cons:",
    
    // Bibliography & Footer
    bibTitle: "Official Bibliography & Technical References",
    bibAuthor: "Author:",
    bibDocLink: "Doc Link",
    footerText: "Authorized penetration testing and educational research platform.",
    
    // Modals
    disclaimerTitle: "Legal & Ethical Disclaimer",
    disclaimerSub: "Ethical Hacking & Compliance Notice",
    disclaimerBody1: "Warning: The Nmap command syntax and scanning recipes provided on this platform are strictly intended for authorized penetration testing, educational research, and defensive security auditing.",
    disclaimerBody2: "Executing network scans against unauthorized third-party infrastructure without explicit written consent is illegal under computer fraud and abuse laws worldwide.",
    disclaimerBody3: "Always verify authorization before performing port scans or vulnerability assessments.",
    disclaimerBtn: "I Understand & Accept Terms",
    
    communityTitle: "Community Recipe Sharing",
    communitySub: "Submit your custom Nmap command combinations to the community pool",
    formTitle: "Title / Scenario Name:",
    formAuthor: "Your Name / Handle:",
    formCommand: "Nmap Command Syntax:",
    formDesc: "Description & Purpose:",
    formSubmit: "Submit Recipe",
    communitySharedTitle: "Community Shared Recipes"
  },

  tr: {
    appTitle: "Nmap Akıllı Arama Motoru ve İnteraktif Simülatör",
    heroBadge: "Bulanık Arama & Akıllı Eşleştirme Motoru Aktif",
    heroTitlePrefix: "Nmap Komutlarını",
    heroTitleHighlight: "Akıllı Arama İle Keşfedin",
    heroDesc: "Eksik veya hatalı terim yazsanız bile (örn. sny scn, vuln script, pingless, decoy, eternalblue), Levenshtein destekli motorumuz en doğru Nmap bayraklarını anında bulur.",
    searchPlaceholder: "Komut, bayrak, zafiyet veya hatalı terim yazın (örn: syn scan, -sV, firewall bypass, eternalblue)...",
    quickTagsLabel: "Hızlı Aramalar:",
    
    // Header & Nav
    navSearch: "Arama & Explorer",
    navWizard: "Sihirbaz",
    navComparator: "Karşılaştırıcı",
    navCheatSheet: "Cheat-Sheet",
    navTiming: "Zamanlama (-T)",
    btnCommunity: "Topluluk",
    btnDisclaimer: "Etik Kullanım",
    
    // Customizer Panel
    customizerTitle: "Canlı IP, Port & Bayrak Özelleştirici",
    customizerSub: "Hedef IP ve port ayarları üretilen tüm komutlara anlık uygulanır.",
    labelTargetIp: "Hedef IP / Subnet:",
    labelPorts: "Port Aralığı (Örn: 80,443 veya 1-1000):",
    labelTiming: "Zamanlama / Hız Şablonu:",
    placeholderPorts: "Varsayılan ilk 1000 port",
    toggleExtraFlags: "Ek Bayrak Ekle:",
    
    // Categories
    catAll: "Tüm Komutlar",
    catDiscovery: " Host Keşfi",
    catPortScan: " Port Taramaları",
    catServiceOs: " Servis & OS",
    catVulnScripts: " Zafiyet Betikleri (NSE)",
    catEvasion: " Güvenlik Duvarı Atlatma",
    catFavorites: " Favorilerim",
    showingCount: "Gösterilen:",
    commandsText: "komut",
    noResultsTitle: "Eşleşen Komut Bulunamadı",
    noResultsSub: "Arama terimini değiştirebilir veya yukarıdaki hızlı arama etiketlerini deneyebilirsiniz.",
    
    // Cards & Simulator
    btnDetailsSim: "Detay & Simülatör",
    modalSimTitle: "Komut Simülatörü ve Analizi",
    modalCategory: "Kategori:",
    btnCopy: "Kopyala",
    btnCopied: "Kopyalandı",
    metricsSpeed: "Tarama Hızı",
    metricsStealth: "Gizlilik Derecesi",
    metricsRisk: "Risk Seviyesi",
    whenToUseTitle: "Ne Zaman Kullanılmalı?",
    flagExplanationsTitle: "Bayrak Açıklamaları",
    noFlagsText: "Bu komut için özel bayrak tanımlanmamış.",
    
    // Wizard
    wizBadge: "Adım Adım Rehberli Asistan",
    wizTitle: "Senaryo Tabanlı Hızlı Sihirbaz",
    wizSub: "Adım adım hedefinizi seçin; akıllı motor hedefinize uygun Nmap parametrelerini üretsin.",
    wizStep: "Adım",
    wizStep1Title: "Tarama Amacı",
    wizStep2Title: "Zamanlama & Hız",
    wizStep3Title: "Port Kapsamı",
    wizStep4Title: "Oluşturulan Komut & Demo",
    wizNext: "İleri",
    wizPrev: "Geri",
    wizComplete: "Tamamla",
    
    // Comparator
    compTitle: "Komut Karşılaştırma Analizi",
    compSub: "İki komutun gizlilik, hız, risk seviyesi ve senaryo uyumunun yan yana kıyaslaması.",
    compCmdA: "Komut A:",
    compCmdB: "Komut B:",
    
    // Cheat-Sheet
    csTitle: "İnteraktif Nmap Cheat-Sheet (Kopya Kâğıdı)",
    csSub: "Temel Nmap bayraklarının ve parametrelerinin detaylı referans tablosu.",
    csColFlag: "Bayrak (Flag)",
    csColNameCat: "Adı & Kategori",
    csColDesc: "Açıklama",
    csColExample: "Örnek Sözdizimi",
    csColImpact: "Ağ Etkisi",
    
    // Timing Guide
    timingTitle: "Nmap Zamanlama Şablonları Rehberi (-T0 .. -T5)",
    timingSub: "Paket gecikmesi, RTT zaman aşımı ve IDS hassasiyet detayları.",
    timingDelay: "Paket Gecikmesi:",
    timingRtt: "RTT Zaman Aşımı:",
    timingPros: "Avantajlar:",
    timingCons: "Dezavantajlar:",
    
    // Bibliography & Footer
    bibTitle: "Resmi Bibliyografya ve Teknik Referanslar",
    bibAuthor: "Yazar:",
    bibDocLink: "Doküman",
    footerText: "Sadece izinli sızma testleri ve eğitim amacıyla geliştirilmiştir.",
    
    // Modals
    disclaimerTitle: "Yasal & Etik Kullanım Uyarısı",
    disclaimerSub: "Etik Hackerlık Uyum Bildirimi",
    disclaimerBody1: "Uyarı: Bu web platformundaki Nmap komutları ve tarama senaryoları yalnızca yetkili sızma testi, eğitim ve güvenlik denetimi amacıyla tasarlanmıştır.",
    disclaimerBody2: "İzin alınmamış üçüncü taraf ağlarda tarama gerçekleştirmek bilişim suçları yasaları uyarınca suç teşkil eder.",
    disclaimerBody3: "Lütfen tarama yapmadan önce yazılı izin aldığınızdan emin olun.",
    disclaimerBtn: "Anladım ve Kabul Ediyorum",
    
    communityTitle: "Topluluk Komut Öneri Sistemi",
    communitySub: "Kendi özgün Nmap komut kombinasyonunuzu topluluk havuzuna ekleyin",
    formTitle: "Başlık / Senaryo Adı:",
    formAuthor: "Adınız / Rumuz:",
    formCommand: "Nmap Komut Sözdizimi:",
    formDesc: "Açıklama & Amaç:",
    formSubmit: "Öneriyi Yayınla",
    communitySharedTitle: "Topluluk Tarafından Paylaşılanlar"
  }
};
