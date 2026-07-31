# Nmap Intelligence & Interactive Scan Builder 🛡️⚡

An intelligent, zero-dependency Nmap command search engine, live parameter customizer, interactive terminal simulator, scenario-based guided wizard, and security auditing platform built with modern web technologies.

![Nmap Intelligence Platform](https://img.shields.io/badge/Commands-100%20Real--World-cyan?style=for-the-badge&logo=nmap)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)
![Languages](https://img.shields.io/badge/i18n-English%20%7C%20Türkçe-purple?style=for-the-badge)
![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light%20Mode-amber?style=for-the-badge)

---

## ✨ Features & Highlights

- 🔍 **Fuzzy Matching Search Engine**: Powered by a custom Levenshtein distance algorithm that instantly resolves typos and partial queries (e.g. `sny scn`, `pingless`, `eternalblue`, `heartbleed`, `docker`, `modbus`).
- 📚 **100 Categorized Nmap Commands**: Complete database covering Host Discovery, Port Scanning, Service/OS Detection, Vulnerability Scripts (NSE), Industrial SCADA/PLC Protocols, Cloud/Container APIs, and Firewall Evasion.
- 🎛️ **Live Parameter Customizer**: Real-time updates for Target IP (`192.168.1.1`), Port Ranges (`-p 80,443`, `-p-`), Timing templates (`-T0`..`-T5`), and flag toggles (`-Pn`, `-sV`, `-O`, `-A`, `-v`).
- ⚡ **Target Liveness & Connectivity Simulator (Ping Check)**: Live round-trip ICMP/ARP latency probe simulation with host status badges (`HOST ALIVE` / `UNREACHABLE`) and intelligent firewall strategy advice.
- 💻 **Multi-Format Exporter**: Export audit lists as **Executable Bash Scripts (.sh)** with automated logging directories, **Markdown (.md)**, **JSON**, or **TXT**.
- 🌐 **Global i18n Language Switcher**: One-click real-time language toggle between **English (EN 🇬🇧)** and **Turkish (TR 🇹🇷)** with persistent memory.
- ☀️ **Dark / Light Theme Switcher**: Modern cyber dark mode (`#0b0f19`) and clean accessibility light mode toggle with `localStorage` memory.
- 🕒 **Recent Search History**: Remembers your recent searches below the search bar with instant re-query chips and one-click clear.
- 🧙‍♂️ **4-Step Scenario Wizard**: Guided command generator tailoring Nmap flags based on your penetration testing objective.
- ⚖️ **Dual Command Comparator**: Side-by-side comparison of scan speed, stealth ratings, risk level, and target scenario fit.
- 📖 **Interactive Cheat-Sheet & Timing Guide**: Detailed switches reference table and `-T0` to `-T5` timing template breakdown.

---

## 🚀 Quick Start (Local Server)

Zero dependencies required (pure vanilla HTML5, CSS3, ES Modules JS). You can serve it using Python's built-in HTTP server or any static Web server:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/nmap-commands.git
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
├── .gitignore                  # Git Ignore Rules
└── src/
    ├── css/
    │   └── style.css           # Cyber Dark & Light Design System
    └── js/
        ├── app.js              # Application Orchestrator
        ├── data/
        │   ├── nmapCommands.js  # 100 Real-World Nmap Commands Dataset
        │   ├── cheatSheetData.js# Nmap Switches Cheat-Sheet
        │   ├── timingData.js   # -T0 to -T5 Timing Templates
        │   ├── bibliographyData.js # Technical Documentation References
        │   └── i18n.js         # EN / TR Language Dictionary
        └── modules/
            ├── fuzzySearch.js  # Levenshtein Fuzzy Search Engine
            ├── customizer.js   # Dynamic Target IP/Port Customizer
            ├── simulator.js    # Terminal Simulator & Parameter Guide
            ├── pingCheck.js    # Target Liveness & Ping Check Simulator
            ├── wizard.js       # 4-Step Scenario Guided Wizard
            ├── comparator.js   # Dual Command Side-by-Side Comparator
            ├── favorites.js    # LocalStorage Bookmarking
            ├── recentSearches.js# LocalStorage Recent Search History
            ├── exporter.js     # Bash (.sh), TXT, MD, JSON Blob Exporter
            └── community.js    # Community Recipe Sharing Module
```

---

## ⚖️ License & Ethical Disclaimer

This tool is strictly intended for **authorized penetration testing**, educational research, and defensive security auditing. Scanning unauthorized targets without prior written consent is illegal.

Distributed under the [MIT License](LICENSE).
