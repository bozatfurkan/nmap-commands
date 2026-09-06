# Nmap Intelligence & Interactive Scan Builder 🛡️⚡

An intelligent, zero-dependency Nmap command search engine, live parameter customizer, interactive terminal simulator, scenario-based guided wizard, and security auditing platform built with modern web technologies.

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2563eb?style=for-the-badge&logo=githubpages&logoColor=white)](https://bozatfurkan.github.io/nmap-commands/)
![Nmap Intelligence Platform](https://img.shields.io/badge/Status-Production--Ready-cyan?style=for-the-badge&logo=nmap)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)
![Languages](https://img.shields.io/badge/i18n-5%20Languages%20(TR%2C%20KU%2C%20EN%2C%20ZH%2C%20JA)-purple?style=for-the-badge)
![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light%20Mode-amber?style=for-the-badge)

🌐 **Live Web Application:** [https://bozatfurkan.github.io/nmap-commands/](https://bozatfurkan.github.io/nmap-commands/)

---

## ✨ Features & Highlights

- 🔍 **Fuzzy Matching Search Engine**: Powered by a custom Levenshtein distance algorithm that instantly resolves typos and partial queries (e.g. `sny scn`, `pingless`, `eternalblue`, `heartbleed`).
- 🌐 **5-Language Full-Page Translation**: One-click real-time full page translation for **Türkçe (🇹🇷)**, **Kurdî (☀️)**, **English (🇬🇧)**, **中文 (🇨🇳)**, and **日本語 (🇯🇵)**.
- 🎛️ **Live Parameter Customizer**: Real-time updates for Target IP (`192.168.1.1`), Port Ranges (`-p 80,443`, `-p-`), Timing templates (`-T0`..`-T5`), and flag toggles (`-Pn`, `-sV`, `-O`, `-A`, `-v`).
- ⚡ **Target Liveness & Connectivity Simulator (Ping Check)**: Live 4-packet ICMP/ARP latency probe simulation with host status badges (`HOST ALIVE` / `UNREACHABLE`) and intelligent firewall strategy advice.
- 💻 **Multi-Format Exporter**: Export audit lists as **Executable Bash Scripts (.sh)** with automated logging directories, **Markdown (.md)**, **JSON**, or **TXT**.
- ☀️ **Dark / Light Theme Switcher**: Modern cyber dark mode (`#0b0f19`) and clean accessibility light mode toggle with `localStorage` memory.
- 🕒 **Recent Search History**: Remembers your recent searches below the search bar with instant re-query chips and one-click clear.
- 🧙‍♂️ **4-Step Scenario Wizard**: Guided command generator tailoring Nmap flags based on your penetration testing objective.
- ⚖️ **Dual Command Comparator**: Side-by-side comparison of scan speed, stealth ratings, risk level, and target scenario fit.
- 📖 **Interactive Cheat-Sheet & Timing Guide**: Detailed switches reference table and `-T0` to `-T5` timing template breakdown.
- 🤝 **Open-Source Standards**: Fully compliant with [MIT License](LICENSE) and [Contributing Guide](CONTRIBUTING.md).

---

## 🚀 Quick Start

### 1. Online Access (No Installation)
Directly use the web application: **[bozatfurkan.github.io/nmap-commands](https://bozatfurkan.github.io/nmap-commands/)**

### 2. Local Setup
Zero dependencies required (pure vanilla HTML5, CSS3, ES Modules JS):

```bash
# Clone the repository
git clone https://github.com/bozatfurkan/nmap-commands.git
cd nmap-commands

# Run local web server
python3 -m http.server 8080
```

Open your browser at `http://localhost:8080`.

---

## 📂 Project Structure

```
nmap-commands/
├── index.html                  # Main Web Application & Modals
├── README.md                   # Project Documentation
├── LICENSE                     # MIT License
├── CONTRIBUTING.md             # Open Source Contribution Guide
├── .gitignore                  # Git Ignore Rules
└── src/
    ├── css/
    │   └── style.css           # Cyber Dark & Light Design System
    └── js/
        ├── app.js              # Application Orchestrator
        ├── data/
        │   ├── nmapCommands.js  # Categorized Nmap Commands Dataset
        │   ├── cheatSheetData.js# Nmap Switches Cheat-Sheet
        │   ├── timingData.js   # -T0 to -T5 Timing Templates
        │   ├── bibliographyData.js # Technical Documentation References
        │   └── i18n.js         # 5 Languages Dictionary (TR, KU, EN, ZH, JA)
        └── modules/
            ├── fuzzySearch.js  # Levenshtein Fuzzy Search Engine
            ├── customizer.js   # Dynamic Target IP/Port Customizer
            ├── simulator.js    # Terminal Simulator & Parameter Guide
            ├── pingCheck.js    # Target Liveness & Ping Check Simulator
            ├── wizard.js       # 4-Step Scenario Guided Wizard
            ├── comparator.js   # Dual Command Side-by-Side Comparator
            ├── favorites.js    # LocalStorage Bookmarking
            ├── recentSearches.js# LocalStorage Recent Search History
            └── exporter.js     # Bash (.sh), TXT, MD, JSON Blob Exporter
```

---

## 🔗 Related Projects
- [Nmap Network Scanning & Vulnerability Analysis Guide](https://github.com/bozatfurkan/nmap-guide) - Comprehensive Nmap techniques, NSE scripts, and AI security scanner CLI.

---

## ⚖️ License & Ethical Disclaimer

This tool is strictly intended for **authorized penetration testing**, educational research, and defensive security auditing. Scanning unauthorized targets without prior written consent is illegal.

Distributed under the [MIT License](LICENSE).
