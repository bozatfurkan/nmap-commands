/**
 * Internationalization (i18n) Engine Dictionary
 */

export const SUPPORTED_LANGUAGES = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" }
];

export const I18N_DICTIONARY = {
  tr: {
    appTitle: "Nmap Akıllı Arama Motoru ve İnteraktif Simülatör",
    heroBadge: "Bulanık Arama Motoru Aktif",
    heroTitlePrefix: "Nmap Komutlarını",
    heroTitleHighlight: "Akıllı Arama İle Keşfedin",
    heroDesc: "Hatalı terim yazsanız bile (örn. sny scn, vuln script, pingless, decoy, eternalblue), motorumuz en doğru Nmap bayraklarını anında bulur.",
    searchPlaceholder: "Komut, bayrak, zafiyet veya hatalı terim yazın (örn: syn scan, -sV, firewall bypass, eternalblue)...",
    quickTagsLabel: "Hızlı Aramalar:",
    recentLabel: "Son Aramalar:",
    clearRecent: "Temizle",
    navSearch: "Arama & Explorer",
    navWizard: "Sihirbaz",
    navComparator: "Karşılaştırıcı",
    navCheatSheet: "Cheat-Sheet",
    navTiming: "Zamanlama (-T)",
    btnCommunity: "Topluluk",
    btnDisclaimer: "Etik Kullanım",
    customizerTitle: "Canlı IP, Port & Bayrak Özelleştirici",
    customizerSub: "Hedef IP ve port ayarları üretilen tüm komutlara anlık uygulanır.",
    labelTargetIp: "Hedef IP / Subnet:",
    labelPorts: "Port Aralığı (Örn: 80,443 veya 1-1000):",
    labelTiming: "Zamanlama / Hız Şablonu:",
    catAll: "Tüm Komutlar",
    catDiscovery: "Host Keşfi",
    catPortScan: "Port Taramaları",
    catServiceOs: "Servis & OS",
    catVulnScripts: "Zafiyet Betikleri (NSE)",
    catEvasion: "Güvenlik Duvarı Atlatma",
    catFavorites: "Favorilerim"
  },
  en: {
    appTitle: "Nmap Intelligence & Interactive Scan Builder",
    heroBadge: "Fuzzy Search Engine Active",
    heroTitlePrefix: "Discover Nmap Commands With",
    heroTitleHighlight: "Smart Fuzzy Matching",
    heroDesc: "Type typos or partial terms (e.g. sny scn, vuln script, pingless, decoy, eternalblue), our engine instantly finds exact Nmap flags.",
    searchPlaceholder: "Search command, flag, vulnerability or typo (e.g. syn scan, -sV, firewall bypass, eternalblue)...",
    quickTagsLabel: "Quick Tags:",
    recentLabel: "Recent:",
    clearRecent: "Clear",
    navSearch: "Search & Explorer",
    navWizard: "Wizard",
    navComparator: "Comparator",
    navCheatSheet: "Cheat-Sheet",
    navTiming: "Timing (-T)",
    btnCommunity: "Community",
    btnDisclaimer: "Disclaimer",
    customizerTitle: "Live IP, Port & Flag Customizer",
    customizerSub: "Target IP and port adjustments update across all generated commands in real time.",
    labelTargetIp: "Target IP / Subnet:",
    labelPorts: "Port Range (e.g. 80,443 or 1-1000):",
    labelTiming: "Timing / Speed Template:",
    catAll: "All Commands",
    catDiscovery: "Host Discovery",
    catPortScan: "Port Scanning",
    catServiceOs: "Service & OS",
    catVulnScripts: "Vulnerability (NSE)",
    catEvasion: "Firewall Evasion",
    catFavorites: "Bookmarks"
  }
};
