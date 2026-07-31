# Contributing to Nmap Intelligence Platform 🛡️⚡

Thank you for your interest in contributing to the **Nmap Intelligence & Interactive Scan Builder Platform**! We welcome contributions from cybersecurity researchers, open-source developers, and penetration testing enthusiasts worldwide.

---

## 🤝 Code of Conduct

Please maintain a respectful, professional, and collaborative environment. This project is strictly intended for **authorized penetration testing**, educational research, and defensive security auditing.

---

## 🛠️ How to Contribute

### 1. Adding New Nmap Commands
To add new categorized Nmap commands or NSE vulnerability scripts, update `src/js/data/nmapCommands.js`:

```javascript
{
  id: "cmd_unique_identifier",
  name: "Descriptive Scan Name",
  category: "discovery" | "port_scan" | "service_os" | "vuln_scripts" | "evasion",
  commandPattern: "nmap -flags {timing} {ports} {flags} {target}",
  description: "Clear technical explanation of what the command probes.",
  whenToUse: "Practical penetration testing scenario guidance.",
  speedLevel: 4, // 1 to 5
  stealthLevel: 3, // 1 to 5
  riskLevel: "Low" | "Medium" | "High",
  keywords: ["keyword1", "typo_variation", "cve"],
  flagExplanations: {
    "-flag": "Explanation of flag."
  },
  mockOutput: "Sample stdout terminal output preview"
}
```

### 2. Localization & Translations
Translations are stored in `src/js/data/i18n.js`. We support 5 primary languages:
- **Türkçe (tr)**
- **Kurdî (ku)**
- **English (en)**
- **中文 (zh)**
- **日本語 (ja)**

---

## 🚀 Development Workflow

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nmap-commands.git
   cd nmap-commands
   ```
3. Run local HTTP server:
   ```bash
   python3 -m http.server 8080
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feature/my-new-command
   ```
5. Commit your changes and submit a Pull Request (PR)!

---

## ⚖️ License
By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
