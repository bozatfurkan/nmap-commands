/**
 * Nmap Cheat Sheet Database (English)
 * Comprehensive list of Nmap flags, descriptions, categories, and practical examples.
 */

export const CHEAT_SHEET_DATA = [
  {
    flag: "-sS",
    name: "TCP SYN Stealth Scan",
    category: "Scan Types",
    description: "Half-open TCP scan. Does not complete 3-way handshake; default and fast.",
    example: "nmap -sS 192.168.1.1",
    impact: "High Stealth, Fast"
  },
  {
    flag: "-sT",
    name: "TCP Connect Scan",
    category: "Scan Types",
    description: "Completes full TCP handshake when root privileges are unassigned.",
    example: "nmap -sT 192.168.1.1",
    impact: "Low Stealth, Easily Logged"
  },
  {
    flag: "-sU",
    name: "UDP Scan",
    category: "Scan Types",
    description: "Probes connectionless UDP services (DNS, SNMP, DHCP).",
    example: "nmap -sU -p 53,161 192.168.1.1",
    impact: "Slower, Filtered Responses"
  },
  {
    flag: "-sV",
    name: "Service Version Detection",
    category: "Service & OS",
    description: "Determines software names and exact versions on open ports.",
    example: "nmap -sV 192.168.1.1",
    impact: "Banner Grabbing, Moderate Noise"
  },
  {
    flag: "-O",
    name: "OS Fingerprinting",
    category: "Service & OS",
    description: "Analyzes TCP/IP stack behavior to guess target operating system.",
    example: "nmap -O 192.168.1.1",
    impact: "Requires Root, Probing Packets"
  },
  {
    flag: "-A",
    name: "Aggressive Scan Mode",
    category: "All-in-One",
    description: "Enables OS detection (-O), Version (-sV), Scripting (-sC), and Traceroute.",
    example: "nmap -A 192.168.1.1",
    impact: "High Noise, Detailed Intelligence"
  },
  {
    flag: "-Pn",
    name: "Disable Ping (No-Ping)",
    category: "Firewall Evasion",
    description: "Skips ICMP host discovery probe; essential for firewall-filtered targets.",
    example: "nmap -Pn 192.168.1.1",
    impact: "Bypasses Ping Blocks"
  },
  {
    flag: "-D RND:10",
    name: "Decoy IP Scanning",
    category: "Firewall Evasion",
    description: "Spoofs 10 random fake source IP addresses alongside your real IP.",
    example: "nmap -D RND:10 192.168.1.1",
    impact: "IDS/IPS Obfuscation"
  },
  {
    flag: "-f",
    name: "Fragment Packets",
    category: "Firewall Evasion",
    description: "Splits probe packets into 8-byte fragments to evade simple packet filters.",
    example: "nmap -f 192.168.1.1",
    impact: "Simple Firewall Bypass"
  },
  {
    flag: "-T0 .. -T5",
    name: "Timing Templates",
    category: "Timing",
    description: "Pacing templates ranging from T0 (Paranoid/Slowest) to T5 (Insane/Fastest).",
    example: "nmap -T4 192.168.1.1",
    impact: "Speed vs Intrusion Risk"
  },
  {
    flag: "--script=vuln",
    name: "NSE Vulnerability Scripts",
    category: "Vulnerability Scripts",
    description: "Executes Nmap Scripting Engine vulnerability detection scripts.",
    example: "nmap --script=vuln 192.168.1.1",
    impact: "CVE Detection, Automated Audit"
  },
  {
    flag: "-p 1-65535 / -p-",
    name: "Port Range Specification",
    category: "Port Range",
    description: "Specifies custom port lists (-p 80,443) or all 65,535 TCP ports (-p-).",
    example: "nmap -p- 192.168.1.1",
    impact: "Exhaustive Port Audit"
  }
];
