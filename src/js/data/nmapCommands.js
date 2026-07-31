/**
 * Nmap Command Intelligence Database (English)
 * Complete collection of 100 Nmap commands categorized with detailed metadata, flag breakdowns, and mock stdout.
 */

export const NMAP_COMMANDS = [
  {
    id: "syn-stealth-scan",
    name: "SYN Stealth (Half-Open) Port Scan",
    category: "port_scan",
    commandPattern: "nmap {timing} -sS {ports} {flags} {target}",
    defaultFlags: ["-sS"],
    description: "The default and most popular Nmap scan type. Performs a half-open TCP handshake (SYN-SYN/ACK-RST) without establishing a full connection, leaving fewer traces in target system logs.",
    whenToUse: "When you need a fast, stealthy scan to discover open TCP ports without being easily logged by target applications.",
    stealthLevel: 4,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["syn", "stealth", "half-open", "sS", "tcp syn", "hidden scan", "quick scan"],
    flagExplanations: {
      "-sS": "Enables TCP SYN (Stealth) scan mode (Requires root/sudo privileges)."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:00 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
Not shown: 996 closed tcp ports (reset)
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 1.45 seconds`
  },
  {
    id: "ping-sweep-discovery",
    name: "Ping Sweep (Active Host Discovery)",
    category: "discovery",
    commandPattern: "nmap -sn {flags} {target}",
    defaultFlags: ["-sn"],
    description: "Identifies live hosts on a network without performing any port scan. Utilizes ICMP echo requests, TCP SYN/ACK probes, and ARP packets.",
    whenToUse: "When mapping active IP addresses across a large subnet before performing targeted port scans.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["ping", "sweep", "discovery", "sn", "sP", "active host", "ip lookup", "network map"],
    flagExplanations: {
      "-sn": "No port scan. Performs host discovery only."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:01 UTC
Nmap scan report for 192.168.1.1 (Router.home)
Host is up (0.0031s latency).
Nmap scan report for {target}
Host is up (0.0084s latency).
Nmap scan report for 192.168.1.105 (Workstation)
Host is up (0.015s latency).
Nmap done: 256 IP addresses (3 hosts up) scanned in 2.10 seconds`
  },
  {
    id: "service-version-detection",
    name: "Service & Version Detection Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -sV --version-intensity 5 {ports} {flags} {target}",
    defaultFlags: ["-sV", "--version-intensity 5"],
    description: "Probes open ports to determine exact application names and version numbers (e.g., Apache httpd 2.4.52, OpenSSH 8.9p1) using banner grabbing and protocol probing.",
    whenToUse: "When searching for known vulnerabilities (CVEs) associated with specific software versions on target open ports.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["service", "version", "sV", "banner grabbing", "version detection", "sV intensity"],
    flagExplanations: {
      "-sV": "Probes open ports to determine service/version info.",
      "--version-intensity 5": "Sets version detection probing intensity level (0-9)."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:02 UTC
Nmap scan report for {target}
Host is up (0.018s latency).
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)
80/tcp   open  http    Apache httpd 2.4.52 ((Ubuntu))
443/tcp  open  https   nginx 1.18.0 (Ubuntu)
8080/tcp open  http-proxy Tomcat/9.0.58
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Nmap done: 1 IP address (1 host up) scanned in 8.32 seconds`
  },
  {
    id: "os-detection-aggressive",
    name: "Operating System (OS) Fingerprinting",
    category: "service_os",
    commandPattern: "nmap {timing} -O --osscan-guess {flags} {target}",
    defaultFlags: ["-O", "--osscan-guess"],
    description: "Analyzes TCP/IP stack implementation responses to determine target operating system family (Linux, Windows Server, Cisco IOS) and kernel version.",
    whenToUse: "When identifying target OS family to tailor exploitation payload selection during penetration testing.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["os", "detection", "-O", "operating system", "osscan", "fingerprint", "os guess"],
    flagExplanations: {
      "-O": "Enables Operating System (OS) fingerprinting.",
      "--osscan-guess": "Provides best-match OS guesses if detection is not 100% conclusive."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:03 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
Device type: general purpose
Running: Linux 5.X
OS CPE: cpe:/o:linux:linux_kernel:5
OS details: Linux 5.4 - 5.15
Network Distance: 2 hops

Nmap done: 1 IP address (1 host up) scanned in 4.12 seconds`
  },
  {
    id: "comprehensive-aggressive-scan",
    name: "Aggressive All-in-One Scan (-A)",
    category: "advanced",
    commandPattern: "nmap {timing} -A {ports} {flags} {target}",
    defaultFlags: ["-A"],
    description: "Combines OS detection (-O), Version detection (-sV), Default NSE scripts (-sC), and Traceroute in a single high-intensity command.",
    whenToUse: "When gathering maximum available intelligence on a target host in minimal time (High IDS/IPS noise).",
    stealthLevel: 1,
    speedLevel: 3,
    riskLevel: "High",
    keywords: ["aggressive", "-A", "all-in-one", "full scan", "traceroute", "comprehensive"],
    flagExplanations: {
      "-A": "Enables aggressive scan options (OS, version, script scanning, and traceroute)."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:04 UTC
Nmap scan report for {target}
Host is up (0.011s latency).
PORT    STATE SERVICE VERSION
22/tcp  open  ssh     OpenSSH 8.2p1
| ssh-hostkey: 
|_  256 ed:ba:c5:ab:8d:7d:0e:9f:01:2b:8a:3c (ED25519)
80/tcp  open  http    Apache httpd 2.4.41
|_http-title: Welcome to Security Portal
|_http-server-header: Apache/2.4.41 (Ubuntu)
Aggressive OS guesses: Linux 5.0 - 5.4 (96%)
TRACEROUTE
HOP RTT     ADDRESS
1   1.20 ms 192.168.1.1
2   11.4 ms {target}

Nmap done: 1 IP address (1 host up) scanned in 12.65 seconds`
  },
  {
    id: "vuln-scripts-scan",
    name: "NSE Vulnerability Audit (--script=vuln)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} --script=vuln {ports} {flags} {target}",
    defaultFlags: ["--script=vuln"],
    description: "Executes Nmap Scripting Engine (NSE) scripts under the 'vuln' category to automatically detect known CVEs, SSL flaws, and misconfigurations.",
    whenToUse: "When conducting automated vulnerability scanning against web services and network daemons.",
    stealthLevel: 1,
    speedLevel: 2,
    riskLevel: "High",
    keywords: ["vuln", "vulnerability", "script", "nse", "cve", "vulnerabilities", "exploit check"],
    flagExplanations: {
      "--script=vuln": "Runs all NSE scripts categorized under vulnerability detection."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:05 UTC
Nmap scan report for {target}
Host is up (0.022s latency).
PORT    STATE SERVICE
80/tcp  open  http
| http-enum: 
|   /admin/: Possible admin folder
|   /wp-login.php: WordPress login page found
|_http-stored-xss: NO
443/tcp open  https
| ssl-ccs-injection: 
|   VULNERABLE:
|   SSL/TLS OpenSSL CCS Injection (CVE-2014-0224)
|     Risk factor: High
|_    Description: OpenSSL before 0.9.8za, 1.0.0 before 1.0.0m allows remote attackers to conduct Man-in-the-Middle attacks.

Nmap done: 1 IP address (1 host up) scanned in 24.10 seconds`
  },
  {
    id: "firewall-evasion-decoy",
    name: "Decoy IP Firewall Evasion (-D RND:10)",
    category: "evasion",
    commandPattern: "nmap {timing} -sS -D RND:10 {ports} {flags} {target}",
    defaultFlags: ["-sS", "-D RND:10"],
    description: "Injects 10 random fake source IP addresses alongside your real IP, masking the origin of the scan in target SOC logs and IDS alerts.",
    whenToUse: "When obfuscating your real scanner IP address against threat intelligence logging and SOC analysts.",
    stealthLevel: 5,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["decoy", "-D", "evasion", "ids", "ips", "fake ip", "spoofing", "firewall evasion"],
    flagExplanations: {
      "-D RND:10": "Generates 10 random decoy source IP addresses to confuse logging."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:06 UTC
[+] Decoy IPs generated: 198.51.100.4, 203.0.113.88, 45.33.32.156 ... (10 decoys)
Nmap scan report for {target}
Host is up (0.019s latency).
PORT     STATE SERVICE
80/tcp   open  http
443/tcp  open  https

Nmap done: 1 IP address (1 host up) scanned in 3.40 seconds`
  },
  {
    id: "udp-scan-top-ports",
    name: "UDP Port Scan (-sU)",
    category: "port_scan",
    commandPattern: "nmap {timing} -sU --top-ports 50 {flags} {target}",
    defaultFlags: ["-sU", "--top-ports 50"],
    description: "Scans connectionless UDP services (DNS [53], SNMP [161], DHCP [67], NTP [123]). Non-responding ports are reported as open|filtered.",
    whenToUse: "When auditing non-TCP infrastructure services such as DNS, SNMP, and VoIP gateways.",
    stealthLevel: 3,
    speedLevel: 1,
    riskLevel: "Medium",
    keywords: ["udp", "-sU", "udp scan", "top-ports", "dns", "snmp", "udp probe"],
    flagExplanations: {
      "-sU": "Performs UDP port scanning.",
      "--top-ports 50": "Restricts scan to top 50 most common UDP ports for time efficiency."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:07 UTC
Nmap scan report for {target}
Host is up (0.025s latency).
PORT    STATE         SERVICE
53/udp  open          domain
123/udp open          ntp
161/udp open|filtered snmp

Nmap done: 1 IP address (1 host up) scanned in 18.50 seconds`
  },
  {
    id: "no-ping-firewall-bypass",
    name: "No-Ping Firewall Bypass (-Pn)",
    category: "evasion",
    commandPattern: "nmap {timing} -Pn {ports} {flags} {target}",
    defaultFlags: ["-Pn"],
    description: "Disables initial ICMP host discovery, assuming target host is active. Crucial when firewalls drop ICMP echo requests.",
    whenToUse: "When target hosts drop ICMP ping packets but keep TCP ports accessible behind strict firewalls.",
    stealthLevel: 3,
    speedLevel: 3,
    riskLevel: "Low",
    keywords: ["pn", "-Pn", "no ping", "pingless", "firewall bypass", "icmp block"],
    flagExplanations: {
      "-Pn": "Skips ICMP host discovery probe; treats target as active."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:08 UTC
Host discovery disabled (-Pn). Assuming host is up.
Nmap scan report for {target}
Host is up.
PORT     STATE SERVICE
80/tcp   open  http
443/tcp  open  https
8443/tcp open  https-alt

Nmap done: 1 IP address (1 host up) scanned in 2.90 seconds`
  },
  {
    id: "fragment-packets-evasion",
    name: "Packet Fragmentation Evasion (-f --mtu 16)",
    category: "evasion",
    commandPattern: "nmap {timing} -f --mtu 16 {ports} {flags} {target}",
    defaultFlags: ["-f", "--mtu 16"],
    description: "Splits outgoing IP header packets into 8-byte fragments to evade simple stateless packet filters and legacy IDS signatures.",
    whenToUse: "When testing packet filtering resilience of firewalls that fail to reassemble fragmented packets.",
    stealthLevel: 4,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["fragment", "-f", "mtu", "packet splitting", "evasion", "ids bypass"],
    flagExplanations: {
      "-f": "Splits IP packets into 8-byte fragments.",
      "--mtu 16": "Sets custom Maximum Transmission Unit size (must be multiple of 8)."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:09 UTC
[+] Packet fragmentation enabled (MTU = 16 bytes)
Nmap scan report for {target}
Host is up (0.013s latency).
PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
80/tcp   open  http

Nmap done: 1 IP address (1 host up) scanned in 3.15 seconds`
  },
  {
    id: "http-enum-scripts",
    name: "Web Server Directory Enumeration (http-enum)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} --script=http-enum {ports} {flags} {target}",
    defaultFlags: ["--script=http-enum", "-p 80,443,8080"],
    description: "Enumerates sensitive directories, admin consoles, backup archives, and CMS web applications (WordPress, phpMyAdmin) on web servers.",
    whenToUse: "During initial web penetration testing to discover unlinked management consoles and exposed files.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["http-enum", "http", "web", "directory", "dirb", "admin panel", "enum"],
    flagExplanations: {
      "--script=http-enum": "Runs HTTP directory and file enumeration probes."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:10 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-enum: 
|   /admin/: Possible admin folder
|   /robots.txt: Disallow entries found
|   /backup.zip: Backup archive file
|_  /phpmyadmin/: MySQL Management interface

Nmap done: 1 IP address (1 host up) scanned in 5.40 seconds`
  },
  {
    id: "full-port-range-scan",
    name: "Full Port Range Scan (65,535 Ports -p-)",
    category: "port_scan",
    commandPattern: "nmap {timing} -p- {flags} {target}",
    defaultFlags: ["-p-"],
    description: "Removes default 1,000 top-ports limit to scan all 65,535 TCP ports exhaustively.",
    whenToUse: "During thorough infrastructure audits to ensure non-standard high ports (e.g., 31337, 45555) are not missed.",
    stealthLevel: 2,
    speedLevel: 2,
    riskLevel: "Medium",
    keywords: ["full port", "65535", "-p-", "all ports", "complete scan", "exhaustive"],
    flagExplanations: {
      "-p-": "Scans all 65,535 TCP ports."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:11 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
Not shown: 65531 closed tcp ports (reset)
PORT      STATE SERVICE
22/tcp    open  ssh
80/tcp    open  http
443/tcp   open  https
31337/tcp open  Elite-Backdoor

Nmap done: 1 IP address (1 host up) scanned in 42.10 seconds`
  },
  {
    id: "smb-vuln-ms17-010-check",
    name: "SMB EternalBlue Vulnerability Check (MS17-010)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 445 --script=smb-vuln-ms17-010,smb-vuln-cve2017-7494 {flags} {target}",
    defaultFlags: ["-p 445", "--script=smb-vuln-ms17-010"],
    description: "Checks Windows SMB servers for critical EternalBlue (MS17-010) RCE vulnerability targeted by ransomware families like WannaCry.",
    whenToUse: "Auditing enterprise Windows Server networks for high-risk unpatched SMB remote code execution vulnerabilities.",
    stealthLevel: 2,
    speedLevel: 4,
    riskLevel: "High",
    keywords: ["smb", "eternalblue", "ms17-010", "445", "samba", "wannacry", "smb-vuln"],
    flagExplanations: {
      "-p 445": "Targets SMB service TCP port 445.",
      "--script=smb-vuln-ms17-010": "Checks MS17-010 EternalBlue vulnerability status."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:12 UTC
Nmap scan report for {target}
Host is up (0.020s latency).
PORT    STATE SERVICE
445/tcp open  microsoft-ds
| smb-vuln-ms17-010: 
|   VULNERABLE:
|   Remote Code Execution vulnerability in Microsoft SMBv1 servers (MS17-010)
|     State: VULNERABLE
|     IDs:  CVE:CVE-2017-0143
|     Risk factor: HIGH
|_    Description: EternalBlue MS17-010 SMB Remote Code Execution

Nmap done: 1 IP address (1 host up) scanned in 3.80 seconds`
  },
  {
    id: "fast-top-100-ports",
    name: "Fast Top 100 Port Scan (-F)",
    category: "port_scan",
    commandPattern: "nmap {timing} -F {flags} {target}",
    defaultFlags: ["-F"],
    description: "Scans top 100 most common ports instead of default 1,000, delivering up to 10x faster execution speed.",
    whenToUse: "When time is constrained and quick visibility into major daemon ports (HTTP, SSH, RDP) is needed.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["fast", "-F", "top 100", "quick scan", "express scan"],
    flagExplanations: {
      "-F": "Fast mode. Limits scan to top 100 ports."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:13 UTC
Nmap scan report for {target}
Host is up (0.009s latency).
Not shown: 97 closed tcp ports (reset)
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
443/tcp open  https

Nmap done: 1 IP address (1 host up) scanned in 0.45 seconds`
  },
  {
    id: "mac-spoofing-evasion",
    name: "MAC Address Spoofing (--spoof-mac Apple)",
    category: "evasion",
    commandPattern: "nmap --spoof-mac Apple {flags} {target}",
    defaultFlags: ["--spoof-mac Apple"],
    description: "Spoofs ethernet network interface MAC address to represent a specific vendor (Apple, Cisco) or random address on local subnets.",
    whenToUse: "Bypassing MAC address filtering rules or port security settings on local ethernet switches.",
    stealthLevel: 4,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["mac", "spoof", "mac spoofing", "apple", "cisco", "vendor", "fake mac"],
    flagExplanations: {
      "--spoof-mac Apple": "Spoofs outgoing MAC vendor prefix as Apple Inc."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:14 UTC
[+] Spoofing MAC address: 00:0A:27:XX:XX:XX (Apple, Inc.)
Nmap scan report for {target}
Host is up (0.002s latency).
MAC Address: 00:0A:27:12:34:56 (Apple)

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "source-port-dns-bypass",
    name: "Source Port Manipulation (-g 53 / Source Port 53)",
    category: "evasion",
    commandPattern: "nmap {timing} -g 53 {ports} {flags} {target}",
    defaultFlags: ["-g 53"],
    description: "Forces outgoing scan traffic source port to 53 (DNS) or 123 (NTP). Many legacy firewalls trust inbound traffic originating from port 53.",
    whenToUse: "Bypassing poorly configured firewall rules that blindly trust traffic sourced from DNS or NTP ports.",
    stealthLevel: 4,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["source port", "-g", "--source-port", "53", "dns port", "firewall bypass"],
    flagExplanations: {
      "-g 53": "Sets outgoing probe packet source port to 53 (DNS)."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:20 UTC
[+] Custom source port 53 (DNS) specified.
Nmap scan report for {target}
Host is up (0.011s latency).
PORT     STATE SERVICE
80/tcp   open  http
443/tcp  open  https
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 2.10 seconds`
  },
  {
    id: "ssl-heartbleed-scan",
    name: "OpenSSL Heartbleed Flaw Audit (CVE-2014-0160)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 443 --script=ssl-heartbleed {flags} {target}",
    defaultFlags: ["-p 443", "--script=ssl-heartbleed"],
    description: "Probes OpenSSL TLS heartbeat extension to detect memory leak vulnerability (CVE-2014-0160) which leaks server memory to remote attackers.",
    whenToUse: "Auditing HTTPS servers and SSL VPN gateways for unpatched OpenSSL Heartbleed vulnerabilities.",
    stealthLevel: 2,
    speedLevel: 4,
    riskLevel: "High",
    keywords: ["heartbleed", "ssl", "tls", "cve-2014-0160", "openssl", "443", "ssl-heartbleed"],
    flagExplanations: {
      "-p 443": "Targets HTTPS SSL/TLS port 443.",
      "--script=ssl-heartbleed": "Executes OpenSSL Heartbleed memory leak check script."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:21 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT    STATE SERVICE
443/tcp open  https
| ssl-heartbleed: 
|   VULNERABLE:
|   The Heartbleed Bug is a serious vulnerability in OpenSSL cryptography library.
|     State: VULNERABLE
|     Risk factor: HIGH
|_    Description: OpenSSL 1.0.1 through 1.0.1f are vulnerable to Heartbleed memory leak.

Nmap done: 1 IP address (1 host up) scanned in 3.10 seconds`
  },
  {
    id: "ack-firewall-scan",
    name: "TCP ACK Firewall Filter Mapping (-sA)",
    category: "port_scan",
    commandPattern: "nmap {timing} -sA {ports} {flags} {target}",
    defaultFlags: ["-sA"],
    description: "Determines whether firewall rules are stateful or stateless and identifies which ports are filtered without disclosing open/closed port state.",
    whenToUse: "Mapping stateful firewall filtering rule tables and ACL behavior during network topology assessment.",
    stealthLevel: 4,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["ack", "-sA", "ack scan", "stateful", "firewall rules", "filter mapping"],
    flagExplanations: {
      "-sA": "Sends TCP ACK packets to map firewall filtering state."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:22 UTC
Nmap scan report for {target}
Host is up (0.010s latency).
All 1000 scanned ports on {target} are unfiltered (reset)

Nmap done: 1 IP address (1 host up) scanned in 1.80 seconds`
  },
  {
    id: "fin-stealth-scan",
    name: "TCP FIN Stealth Probe (-sF)",
    category: "port_scan",
    commandPattern: "nmap {timing} -sF {ports} {flags} {target}",
    defaultFlags: ["-sF"],
    description: "Sets only TCP FIN bit in probe packets. Based on RFC 793 compliance, open ports ignore the packet while closed ports respond with RST.",
    whenToUse: "Evading simple SYN packet logging and non-stateful packet filtering firewalls.",
    stealthLevel: 5,
    speedLevel: 3,
    riskLevel: "Low",
    keywords: ["fin", "-sF", "fin scan", "rfc 793", "stealth", "ids bypass"],
    flagExplanations: {
      "-sF": "Enables TCP FIN stealth scan mode."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:23 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE         SERVICE
22/tcp open|filtered ssh
80/tcp open|filtered http

Nmap done: 1 IP address (1 host up) scanned in 2.40 seconds`
  },
  {
    id: "xmas-tree-scan",
    name: "Xmas Tree Scan (-sX)",
    category: "port_scan",
    commandPattern: "nmap {timing} -sX {ports} {flags} {target}",
    defaultFlags: ["-sX"],
    description: "Sets FIN, URG, and PUSH flags simultaneously ('lighting packet up like a Christmas tree') to probe BSD/Linux TCP stack response behavior.",
    whenToUse: "Auditing non-standard TCP/IP stack implementation behavior and bypassing stateless firewalls.",
    stealthLevel: 4,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["xmas", "-sX", "xmas scan", "fin urg push", "tcp flags"],
    flagExplanations: {
      "-sX": "Performs Xmas Tree scan (Sets FIN, PSH, URG bits)."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:24 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT   STATE         SERVICE
80/tcp open|filtered http
443/tcp open|filtered https

Nmap done: 1 IP address (1 host up) scanned in 2.30 seconds`
  },
  {
    id: "null-stealth-scan",
    name: "NULL Stealth Scan (-sN)",
    category: "port_scan",
    commandPattern: "nmap {timing} -sN {ports} {flags} {target}",
    defaultFlags: ["-sN"],
    description: "Sends probe packets with no TCP flags set (0x00). RFC 793 compliant stack open ports drop packet while closed ports return RST.",
    whenToUse: "Bypassing firewall logging configured specifically to alert on SYN or ACK flag combinations.",
    stealthLevel: 5,
    speedLevel: 3,
    riskLevel: "Low",
    keywords: ["null", "-sN", "null scan", "no flags", "stealth", "rfc 793"],
    flagExplanations: {
      "-sN": "Enables TCP NULL stealth scan mode."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:25 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT     STATE         SERVICE
22/tcp   open|filtered ssh
80/tcp   open|filtered http

Nmap done: 1 IP address (1 host up) scanned in 2.50 seconds`
  },
  {
    id: "dns-subdomain-brute",
    name: "DNS Subdomain Brute-Force Discovery",
    category: "discovery",
    commandPattern: "nmap --script=dns-brute --script-args dns-brute.threads=10 {flags} {target}",
    defaultFlags: ["--script=dns-brute"],
    description: "Discovers unlinked subdomains (e.g., dev, admin, vpn, mail) under target domain name using dictionary wordlists.",
    whenToUse: "Mapping organization attack surface and discovering hidden infrastructure endpoints.",
    stealthLevel: 3,
    speedLevel: 3,
    riskLevel: "Low",
    keywords: ["dns", "subdomain", "dns-brute", "brute force", "domain discovery"],
    flagExplanations: {
      "--script=dns-brute": "Runs DNS subdomain brute-force discovery script."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:26 UTC
Nmap scan report for {target}
Host is up (0.018s latency).
| dns-brute: 
|   DNS Brute-force hostnames:
|     admin.example.com - 192.168.1.50
|     dev.example.com - 192.168.1.55
|     mail.example.com - 192.168.1.10
|_    vpn.example.com - 192.168.1.200

Nmap done: 1 IP address (1 host up) scanned in 12.40 seconds`
  },
  {
    id: "ssl-ciphers-audit",
    name: "SSL/TLS Cipher Suite Security Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 443 --script=ssl-enum-ciphers {flags} {target}",
    defaultFlags: ["-p 443", "--script=ssl-enum-ciphers"],
    description: "Evaluates supported SSL/TLS protocols (TLS 1.0, 1.1, 1.2, 1.3), cipher suites, and grades overall cryptographic security level.",
    whenToUse: "Conducting PCI-DSS and ISO 27001 compliance audits for HTTPS web servers.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["ssl", "tls", "ciphers", "ssl-enum-ciphers", "cryptography", "pci-dss"],
    flagExplanations: {
      "-p 443": "Targets HTTPS SSL/TLS port 443.",
      "--script=ssl-enum-ciphers": "Audits SSL/TLS cipher suites and protocol grade."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:27 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT    STATE SERVICE
443/tcp open  https
| ssl-enum-ciphers: 
|   TLSv1.2: 
|     ciphers: 
|       TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (ecdh_x25519) - A
|       TLS_RSA_WITH_3DES_EDE_CBC_SHA (rsa 2048) - C (weak cipher)
|   least secure cipher: C
|_  least secure TLS version: TLSv1.0 (grade D)

Nmap done: 1 IP address (1 host up) scanned in 4.50 seconds`
  },
  {
    id: "sctp-init-scan",
    name: "SCTP INIT Protocol Probe (-sY)",
    category: "port_scan",
    commandPattern: "nmap {timing} -sY {ports} {flags} {target}",
    defaultFlags: ["-sY"],
    description: "Scans Stream Control Transmission Protocol (SCTP) ports commonly used in telecom, SS7/SIGTRAN, and VoIP infrastructure.",
    whenToUse: "Auditing telecommunications and 4G/5G core cellular network infrastructure.",
    stealthLevel: 4,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["sctp", "-sY", "telecom", "ss7", "sigtran", "voip", "sctp scan"],
    flagExplanations: {
      "-sY": "Enables SCTP INIT stealth scan mode."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:28 UTC
Nmap scan report for {target}
Host is up (0.009s latency).
PORT     STATE SERVICE
2905/sctp open  m2ua
3868/sctp open  diameter

Nmap done: 1 IP address (1 host up) scanned in 1.95 seconds`
  },
  {
    id: "ip-protocol-scan",
    name: "Supported IP Protocol Scan (-sO)",
    category: "discovery",
    commandPattern: "nmap {timing} -sO {flags} {target}",
    defaultFlags: ["-sO"],
    description: "Determines which IP protocols (ICMP [1], IGMP [2], TCP [6], UDP [17], GRE [47], ESP [50]) are supported by target host.",
    whenToUse: "Mapping router and firewall support for tunneling and IPsec VPN protocols.",
    stealthLevel: 3,
    speedLevel: 3,
    riskLevel: "Low",
    keywords: ["ip protocol", "-sO", "protocols", "gre", "esp", "ipsec", "icmp"],
    flagExplanations: {
      "-sO": "Performs IP protocol scanning."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:29 UTC
Nmap scan report for {target}
Host is up (0.008s latency).
PROTOCOL STATE         SERVICE
1        open          icmp
2        open|filtered igmp
6        open          tcp
17       open          udp
47       open          gre
50       open          esp

Nmap done: 1 IP address (1 host up) scanned in 3.10 seconds`
  },
  {
    id: "ftp-anon-check",
    name: "Anonymous FTP Access Check (ftp-anon)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 21 --script=ftp-anon {flags} {target}",
    defaultFlags: ["-p 21", "--script=ftp-anon"],
    description: "Checks whether FTP servers allow unauthenticated 'anonymous' logins and lists accessible directory contents.",
    whenToUse: "Auditing file servers for accidental unauthenticated guest access privileges.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["ftp", "anon", "ftp-anon", "anonymous", "21", "file server"],
    flagExplanations: {
      "-p 21": "Targets FTP TCP port 21.",
      "--script=ftp-anon": "Checks anonymous FTP login access."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:30 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
PORT   STATE SERVICE
21/tcp open  ftp
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
| -rw-r--r-- 1 0 0 1048576 Jul 25 12:00 confidential_backup.zip
|_Public Directory read allowed.

Nmap done: 1 IP address (1 host up) scanned in 1.40 seconds`
  },
  {
    id: "rdp-vuln-ms12-020",
    name: "RDP Remote Code Execution Audit (MS12-020)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 3389 --script=rdp-vuln-ms12-020,rdp-ntlm-info {flags} {target}",
    defaultFlags: ["-p 3389", "--script=rdp-vuln-ms12-020"],
    description: "Audits Windows Remote Desktop (RDP) service for MS12-020 RCE flaws and retrieves Active Directory NTLM domain info.",
    whenToUse: "Checking internet-facing RDP endpoints (Port 3389) for remote exploit vulnerabilities.",
    stealthLevel: 2,
    speedLevel: 4,
    riskLevel: "High",
    keywords: ["rdp", "3389", "ms12-020", "bluekeep", "remote desktop", "rdp vuln"],
    flagExplanations: {
      "-p 3389": "Targets RDP port 3389.",
      "--script=rdp-vuln-ms12-020": "Checks MS12-020 RDP flaw status."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:31 UTC
Nmap scan report for {target}
Host is up (0.021s latency).
PORT     STATE SERVICE
3389/tcp open  ms-wbt-server
| rdp-vuln-ms12-020: 
|   VULNERABLE:
|   MS12-020 Remote Desktop Protocol Vulnerability
|     State: VULNERABLE
|_    Description: Remote attackers can cause Denial of Service or RCE via malformed RDP packets.

Nmap done: 1 IP address (1 host up) scanned in 2.90 seconds`
  },
  {
    id: "arp-ping-local",
    name: "Local Ethernet ARP Ping Probe (-PR)",
    category: "discovery",
    commandPattern: "nmap -sn -PR {flags} {target}",
    defaultFlags: ["-sn", "-PR"],
    description: "Uses ARP requests to discover live hosts on local Ethernet subnets, completely bypassing IP layer firewall rules.",
    whenToUse: "Rapidly mapping active hosts on local Wi-Fi or ethernet LAN subnets.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["arp", "-PR", "arp ping", "lan discovery", "ethernet", "ultra fast"],
    flagExplanations: {
      "-PR": "Forces ARP ping discovery (default on local Ethernet)."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:32 UTC
Nmap scan report for 192.168.1.1
Host is up (0.00080s latency).
MAC Address: A4:2B:B0:XX:XX:XX (TP-Link)
Nmap scan report for {target}
Host is up (0.00095s latency).
MAC Address: 00:15:5D:XX:XX:XX (Microsoft)

Nmap done: 256 IP addresses (2 hosts up) scanned in 0.85 seconds`
  },
  {
    id: "output-all-formats",
    name: "Save All Output Formats Simultaneously (-oA)",
    category: "advanced",
    commandPattern: "nmap {timing} -sS -sV -oA scan_report {ports} {flags} {target}",
    defaultFlags: ["-oA scan_report"],
    description: "Saves scan output into Normal (.nmap), XML (.xml), and Grepable (.gnmap) log files at the same time.",
    whenToUse: "Post-engagement reporting, Metasploit framework import, and security logging.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["output", "-oA", "xml", "report", "export logs", "grepable"],
    flagExplanations: {
      "-oA scan_report": "Saves results into scan_report.nmap, scan_report.xml, and scan_report.gnmap."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:33 UTC
Wrote scan results to scan_report.nmap, scan_report.xml and scan_report.gnmap.
Nmap scan report for {target}
Host is up (0.012s latency).
PORT   STATE SERVICE VERSION
80/tcp open  http    nginx 1.18.0

Nmap done: 1 IP address (1 host up) scanned in 2.10 seconds`
  },
  {
    id: "data-length-evasion",
    name: "Payload Packet Length Evasion (--data-length)",
    category: "evasion",
    commandPattern: "nmap {timing} --data-length 32 {ports} {flags} {target}",
    defaultFlags: ["--data-length 32"],
    description: "Appends random data payload bytes to default zero-length probe packets to evade IDS rules looking for fixed packet sizes.",
    whenToUse: "Bypassing network filters configured to alert on empty SYN packets.",
    stealthLevel: 4,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["data-length", "payload", "packet length", "ids evasion", "random data"],
    flagExplanations: {
      "--data-length 32": "Appends 32 random payload bytes to probe packets."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:34 UTC
[+] Appending 32 random bytes to scan packets.
Nmap scan report for {target}
Host is up (0.011s latency).
PORT     STATE SERVICE
80/tcp   open  http
443/tcp  open  https

Nmap done: 1 IP address (1 host up) scanned in 2.20 seconds`
  },
  {
    id: "smb-enum-shares-users",
    name: "SMB Shares & Local Users Enumeration",
    category: "service_os",
    commandPattern: "nmap {timing} -p 445 --script=smb-enum-shares,smb-enum-users {flags} {target}",
    defaultFlags: ["-p 445", "--script=smb-enum-shares"],
    description: "Enumerates Windows SMB shared folders (C$, ADMIN$, Shared), access permissions, and local domain accounts.",
    whenToUse: "Auditing enterprise Windows networks for unauthenticated readable network shares.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["smb", "shares", "users", "smb-enum-shares", "smb-enum-users", "445"],
    flagExplanations: {
      "-p 445": "Targets SMB TCP port 445.",
      "--script=smb-enum-shares": "Lists SMB shared folders and permissions."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:35 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT    STATE SERVICE
445/tcp open  microsoft-ds
| smb-enum-shares: 
|   account_used: guest
|   \\\\{target}\\C$: Anonymous access READ
|   \\\\{target}\\Public: Anonymous access READ/WRITE
|_  \\\\{target}\\ADMIN$: Access denied

Nmap done: 1 IP address (1 host up) scanned in 4.20 seconds`
  },
  {
    id: "http-vhosts-discovery",
    name: "HTTP Virtual Host Discovery (http-vhosts)",
    category: "discovery",
    commandPattern: "nmap {timing} -p 80,443 --script=http-vhosts {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-vhosts"],
    description: "Discovers different web applications (Virtual Hosts) sharing the same target IP address via Host header probing.",
    whenToUse: "Mapping multi-tenant web servers and shared hosting environments.",
    stealthLevel: 3,
    speedLevel: 3,
    riskLevel: "Low",
    keywords: ["http-vhosts", "vhost", "virtual host", "web", "shared hosting"],
    flagExplanations: {
      "--script=http-vhosts": "Lists HTTP virtual hosts on target IP."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:36 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-vhosts: 
|   12 names found:
|   portal.example.com (200 OK)
|   internal.example.com (403 Forbidden)
|_  api.example.com (200 OK)

Nmap done: 1 IP address (1 host up) scanned in 5.10 seconds`
  },
  {
    id: "http-sql-injection-check",
    name: "Web SQL Injection Basic Vulnerability Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} --script=http-sql-injection {ports} {flags} {target}",
    defaultFlags: ["--script=http-sql-injection"],
    description: "Probes HTTP GET/POST parameters to detect database error messages indicating SQL Injection (SQLi) vulnerabilities.",
    whenToUse: "Initial automated scanning for web application database injection vulnerabilities.",
    stealthLevel: 1,
    speedLevel: 2,
    riskLevel: "High",
    keywords: ["sqli", "sql injection", "http-sql-injection", "web vuln", "db flaw"],
    flagExplanations: {
      "--script=http-sql-injection": "Checks HTTP parameters for SQL injection flaws."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:37 UTC
Nmap scan report for {target}
Host is up (0.024s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-sql-injection: 
|   Possible SQL injection vulnerability found at:
|     http://{target}/product.php?id=1' [MySQL error message detected]

Nmap done: 1 IP address (1 host up) scanned in 15.30 seconds`
  },
  {
    id: "http-wordpress-enum",
    name: "WordPress Plugin & User Enumeration",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-wordpress-enum,http-wordpress-users {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-wordpress-enum"],
    description: "Enumerates installed plugins, themes, and admin usernames on WordPress websites.",
    whenToUse: "Auditing WordPress sites for outdated plugins with known CVE exploits.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["wordpress", "wp", "http-wordpress-enum", "wp-plugin", "wp-users"],
    flagExplanations: {
      "--script=http-wordpress-enum": "Enumerates WordPress plugins and themes."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:38 UTC
Nmap scan report for {target}
Host is up (0.019s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-wordpress-enum: 
|   Search depth: 100 plugins
|   Plugins found:
|     wp-file-manager (v6.8) - Outdated / Vulnerable (CVE-2020-25213)
|_    contact-form-7 (v5.4)

Nmap done: 1 IP address (1 host up) scanned in 8.90 seconds`
  },
  {
    id: "snmp-sysdescr-enum",
    name: "SNMP Community String & System Info Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -sU -p 161 --script=snmp-info,snmp-brute {flags} {target}",
    defaultFlags: ["-sU -p 161", "--script=snmp-info"],
    description: "Queries UDP 161 SNMP daemons on routers and printers for default community strings ('public', 'private') and system description (sysDescr).",
    whenToUse: "Auditing network hardware for weak default SNMP community strings.",
    stealthLevel: 3,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["snmp", "161", "public", "community string", "snmp-info", "router info"],
    flagExplanations: {
      "-sU -p 161": "Targets UDP 161 SNMP service.",
      "--script=snmp-info": "Retrieves SNMP MIB system details."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:39 UTC
Nmap scan report for {target}
Host is up (0.005s latency).
PORT    STATE SERVICE
161/udp open  snmp
| snmp-info: 
|   sysDescr: Cisco IOS Software, C3750 Software (C3750-IPSERVICESK9-M), Version 12.2(55)SE10
|   Valid Community Strings: public (read-only)

Nmap done: 1 IP address (1 host up) scanned in 2.80 seconds`
  },
  {
    id: "mssql-info-enum",
    name: "Microsoft SQL Server Info & Empty Password Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -p 1433 --script=ms-sql-info,ms-sql-empty-password {flags} {target}",
    defaultFlags: ["-p 1433", "--script=ms-sql-info"],
    description: "Queries MS SQL Server instance names, version numbers, and checks for unauthenticated blank 'sa' administrator passwords.",
    whenToUse: "Auditing database servers for weak or blank default administrator credentials.",
    stealthLevel: 2,
    speedLevel: 4,
    riskLevel: "High",
    keywords: ["mssql", "1433", "ms-sql-info", "sql server", "sa account"],
    flagExplanations: {
      "-p 1433": "Targets MS SQL Server TCP port 1433.",
      "--script=ms-sql-empty-password": "Tests blank password login for SA account."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:40 UTC
Nmap scan report for {target}
Host is up (0.017s latency).
PORT     STATE SERVICE
1433/tcp open  ms-sql-s
| ms-sql-info: 
|   Windows NT 6.3 (Build 9600)
|   Server name: SQL-PROD-01
|_  Instance name: MSSQLSERVER (Version 15.0.2000.5)

Nmap done: 1 IP address (1 host up) scanned in 2.20 seconds`
  },
  {
    id: "mysql-databases-enum",
    name: "MySQL Server Audit & Status Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -p 3306 --script=mysql-info,mysql-enum {flags} {target}",
    defaultFlags: ["-p 3306", "--script=mysql-info"],
    description: "Retrieves MySQL database server version, SSL capability, and supported authentication mechanisms.",
    whenToUse: "Auditing internet-facing MySQL database servers.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["mysql", "3306", "mysql-info", "mariadb", "database"],
    flagExplanations: {
      "-p 3306": "Targets MySQL TCP port 3306.",
      "--script=mysql-info": "Lists MySQL server status."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:41 UTC
Nmap scan report for {target}
Host is up (0.013s latency).
PORT     STATE SERVICE
3306/tcp open  mysql
| mysql-info: 
|   Protocol: 10
|   Version: 8.0.32
|   Capabilities: Support41Auth, LongPassword, ConnectWithDB
|_  Auth Plugin Name: caching_sha2_password

Nmap done: 1 IP address (1 host up) scanned in 1.90 seconds`
  },
  {
    id: "smtp-enum-users",
    name: "SMTP User Enumeration (VRFY / EXPN)",
    category: "service_os",
    commandPattern: "nmap {timing} -p 25,587 --script=smtp-enum-users {flags} {target}",
    defaultFlags: ["-p 25", "--script=smtp-enum-users"],
    description: "Probes SMTP mail servers using `VRFY` and `EXPN` commands to list valid user accounts.",
    whenToUse: "Testing mail server configuration for account harvesting exposure.",
    stealthLevel: 3,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["smtp", "25", "587", "smtp-enum-users", "vrfy", "expn", "mail users"],
    flagExplanations: {
      "--script=smtp-enum-users": "Enumerates valid user accounts on SMTP servers."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:42 UTC
Nmap scan report for {target}
Host is up (0.018s latency).
PORT   STATE SERVICE
25/tcp open  smtp
| smtp-enum-users: 
|   Method VRFY returned valid accounts:
|     admin
|     root
|_    support

Nmap done: 1 IP address (1 host up) scanned in 3.60 seconds`
  },
  {
    id: "ssh-auth-methods",
    name: "SSH Authentication Methods Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 22 --script=ssh-auth-methods {flags} {target}",
    defaultFlags: ["-p 22", "--script=ssh-auth-methods"],
    description: "Determines supported authentication methods (publickey, password, gssapi) on target SSH daemon.",
    whenToUse: "Verifying SSH servers enforce key-based authentication and disable password logins.",
    stealthLevel: 4,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["ssh", "22", "ssh-auth-methods", "publickey", "password auth"],
    flagExplanations: {
      "--script=ssh-auth-methods": "Lists supported SSH auth mechanisms."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:43 UTC
Nmap scan report for {target}
Host is up (0.011s latency).
PORT   STATE SERVICE
22/tcp open  ssh
| ssh-auth-methods: 
|   Supported authentication methods:
|     publickey
|_    password (WARNING: Password authentication allowed)

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "ldap-rootdse-enum",
    name: "Active Directory / LDAP RootDSE Information Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -p 389,636 --script=ldap-rootdse {flags} {target}",
    defaultFlags: ["-p 389", "--script=ldap-rootdse"],
    description: "Queries Active Directory Domain Controllers for Naming Contexts, Forest name, and server attributes anonymously.",
    whenToUse: "Mapping Active Directory domain structure without prior credentials.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["ldap", "389", "636", "active directory", "ad", "ldap-rootdse"],
    flagExplanations: {
      "--script=ldap-rootdse": "Fetches LDAP RootDSE attributes."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:44 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT    STATE SERVICE
389/tcp open  ldap
| ldap-rootdse: 
|   defaultNamingContext: DC=corp,DC=example,DC=com
|   dnsHostName: DC01.corp.example.com
|_  highestCommittedUSN: 489102

Nmap done: 1 IP address (1 host up) scanned in 2.30 seconds`
  },
  {
    id: "nfs-ls-exports",
    name: "NFS Exported Shares & Directory Listing",
    category: "service_os",
    commandPattern: "nmap {timing} -p 2049 --script=nfs-ls,nfs-showmount {flags} {target}",
    defaultFlags: ["-p 2049", "--script=nfs-showmount"],
    description: "Lists exported Network File System (NFS) shared folders and ACL permissions on Unix/Linux hosts.",
    whenToUse: "Discovering misconfigured unauthenticated NFS exports.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["nfs", "2049", "nfs-showmount", "nfs-ls", "exports"],
    flagExplanations: {
      "--script=nfs-showmount": "Fetches NFS showmount export list."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:45 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
PORT     STATE SERVICE
2049/tcp open  nfs
| nfs-showmount: 
|   /var/backups * (Everyone read/write)
|_  /home/ubuntu 192.168.1.0/24

Nmap done: 1 IP address (1 host up) scanned in 1.85 seconds`
  },
  {
    id: "dns-zone-transfer",
    name: "DNS Zone Transfer Audit (AXFR)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 53 --script=dns-zone-transfer --script-args dns-zone-transfer.domain=example.com {flags} {target}",
    defaultFlags: ["-p 53", "--script=dns-zone-transfer"],
    description: "Tests DNS servers for AXFR zone transfer flaws to dump all DNS records (A, CNAME, MX, TXT) in a single query.",
    whenToUse: "Auditing DNS servers for information disclosure via unauthenticated AXFR requests.",
    stealthLevel: 2,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["dns", "53", "zone transfer", "axfr", "dns-zone-transfer"],
    flagExplanations: {
      "--script=dns-zone-transfer": "Sends DNS AXFR zone transfer request."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:46 UTC
Nmap scan report for {target}
Host is up (0.011s latency).
PORT   STATE SERVICE
53/tcp open  domain
| dns-zone-transfer: 
|   AXFR Zone Transfer SUCCESSFUL:
|   example.com.      IN  SOA ns1.example.com.
|   mail.example.com. IN  A   192.168.1.25
|_  db.example.com.   IN  A   192.168.1.30

Nmap done: 1 IP address (1 host up) scanned in 1.20 seconds`
  },
  {
    id: "traceroute-geo-mapping",
    name: "Advanced Traceroute & Geolocation Mapping",
    category: "discovery",
    commandPattern: "nmap {timing} -sn --traceroute --script=traceroute-geolocation {flags} {target}",
    defaultFlags: ["--traceroute", "--script=traceroute-geolocation"],
    description: "Maps packet routing hops and performs IP geolocation lookup (City, Country, ISP) for each intermediate router.",
    whenToUse: "Analyzing network path latency and router geolocation.",
    stealthLevel: 3,
    speedLevel: 3,
    riskLevel: "Low",
    keywords: ["traceroute", "geolocation", "hop", "as number", "network map"],
    flagExplanations: {
      "--traceroute": "Traces network hop path to target.",
      "--script=traceroute-geolocation": "Retrieves geolocation info for hop IPs."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:47 UTC
Nmap scan report for {target}
Host is up (0.022s latency).
TRACEROUTE (using port 80/tcp)
HOP RTT     ADDRESS                 GEOLOCATION
1   1.10 ms 192.168.1.1             Local Gateway
2   8.40 ms 10.200.0.1              Istanbul, TR (ISP AS1234)
3   22.1 ms 195.175.0.1             Frankfurt, DE (AS3320)
4   22.5 ms {target}                Frankfurt, DE

Nmap done: 1 IP address (1 host up) scanned in 4.80 seconds`
  },
  {
    id: "idle-zombie-scan",
    name: "Idle / Zombie IP ID Stealth Scan (-sI)",
    category: "evasion",
    commandPattern: "nmap -Pn -sI 192.168.1.50:80 {ports} {flags} {target}",
    defaultFlags: ["-sI"],
    description: "Ultimate stealth scan. Sends zero packets from your real IP address; manipulates an idle 'Zombie' host IP ID sequence to scan target.",
    whenToUse: "Completely masking scanner IP address during stealth engagements.",
    stealthLevel: 5,
    speedLevel: 1,
    riskLevel: "High",
    keywords: ["idle scan", "zombie", "-sI", "ip id", "ultra stealth"],
    flagExplanations: {
      "-sI 192.168.1.50:80": "Uses specified zombie host to conduct scan."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:48 UTC
[+] Idle scan using zombie 192.168.1.50:80; IP ID sequence: Incremental
Nmap scan report for {target}
Host is up.
PORT     STATE SERVICE
80/tcp   open  http
443/tcp  open  https

Nmap done: 1 IP address (1 host up) scanned in 28.50 seconds`
  },
  {
    id: "syn-ack-ping-probe",
    name: "TCP SYN/ACK Custom Ping Probe",
    category: "discovery",
    commandPattern: "nmap -sn -PS80,443 -PA21,22 {flags} {target}",
    defaultFlags: ["-PS80,443", "-PA21,22"],
    description: "Sends custom TCP SYN (-PS) and ACK (-PA) probes to discover active hosts when ICMP ping is blocked.",
    whenToUse: "Discovering live hosts across firewall-protected subnets.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["syn ping", "ack ping", "-PS", "-PA", "ping probe"],
    flagExplanations: {
      "-PS80,443": "Sends TCP SYN ping to ports 80 and 443.",
      "-PA21,22": "Sends TCP ACK ping to ports 21 and 22."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:49 UTC
Nmap scan report for {target}
Host is up (0.0092s latency, responded to TCP ACK ping on port 22).

Nmap done: 1 IP address (1 host up) scanned in 1.15 seconds`
  },
  {
    id: "badsum-firewall-test",
    name: "Bad Checksum Firewall Probe (--badsum)",
    category: "evasion",
    commandPattern: "nmap {timing} --badsum {ports} {flags} {target}",
    defaultFlags: ["--badsum"],
    description: "Sends probe packets with invalid TCP/UDP checksums. Real TCP/IP stacks drop bad checksum packets, whereas flawed IDS/IPS rules may respond.",
    whenToUse: "Auditing firewall packet validation integrity.",
    stealthLevel: 4,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["badsum", "checksum", "invalid checksum", "firewall test"],
    flagExplanations: {
      "--badsum": "Sends packets with intentional invalid checksums."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:50 UTC
[+] Sending packets with invalid checksums (--badsum)...
Nmap scan report for {target}
Host is up.
All 1000 scanned ports on {target} are filtered (no-response)

Nmap done: 1 IP address (1 host up) scanned in 2.10 seconds`
  },
  {
    id: "http-methods-check",
    name: "Dangerous HTTP Methods Audit (PUT, DELETE, TRACE)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-methods {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-methods"],
    description: "Probes web server for enabled HTTP methods (GET, POST, OPTIONS, PUT, DELETE, TRACE).",
    whenToUse: "Auditing web servers for unsafe PUT file upload or TRACE cross-site tracing exposure.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Medium",
    keywords: ["http-methods", "put", "delete", "trace", "web methods"],
    flagExplanations: {
      "--script=http-methods": "Queries supported HTTP verbs."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:51 UTC
Nmap scan report for {target}
Host is up (0.013s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-methods: 
|   Supported Methods: GET HEAD POST OPTIONS PUT DELETE TRACE
|_  Potentially risky methods: PUT DELETE TRACE

Nmap done: 1 IP address (1 host up) scanned in 1.40 seconds`
  },
  {
    id: "memcached-info-check",
    name: "Memcached Unauthenticated Access & Stats Probe",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 11211 --script=memcached-info {flags} {target}",
    defaultFlags: ["-p 11211", "--script=memcached-info"],
    description: "Audits Memcached in-memory caching daemons for unauthenticated exposure and stats leakage.",
    whenToUse: "Identifying exposed Memcached servers susceptible to DDoS reflection attacks.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["memcached", "11211", "memcached-info", "ddos risk"],
    flagExplanations: {
      "-p 11211": "Targets Memcached UDP/TCP port 11211.",
      "--script=memcached-info": "Retrieves Memcached server stats."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:52 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT      STATE SERVICE
11211/tcp open  memcached
| memcached-info: 
|   Process ID: 1042
|   Uptime: 452100 seconds
|   Curr Items: 14820
|_  Bytes Read: 452109482

Nmap done: 1 IP address (1 host up) scanned in 1.20 seconds`
  },
  {
    id: "mongodb-databases-enum",
    name: "MongoDB Unauthenticated Database & Collections Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 27017 --script=mongodb-info,mongodb-databases {flags} {target}",
    defaultFlags: ["-p 27017", "--script=mongodb-info"],
    description: "Audits MongoDB NoSQL databases for unauthenticated access exposure and lists database collections.",
    whenToUse: "Detecting misconfigured MongoDB servers exposed publicly.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "High",
    keywords: ["mongodb", "27017", "nosql", "mongodb-info", "mongodb-databases"],
    flagExplanations: {
      "-p 27017": "Targets MongoDB default port 27017.",
      "--script=mongodb-databases": "Lists accessible MongoDB database names."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:53 UTC
Nmap scan report for {target}
Host is up (0.020s latency).
PORT      STATE SERVICE
27017/tcp open  mongodb
| mongodb-databases: 
|   ok: 1
|   databases:
|     admin (size: 81920)
|     customer_db (size: 4521984)
|_    user_credentials (size: 1048576)

Nmap done: 1 IP address (1 host up) scanned in 2.10 seconds`
  },
  {
    id: "redis-info-check",
    name: "Redis Server Unauthenticated Access Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 6379 --script=redis-info {flags} {target}",
    defaultFlags: ["-p 6379", "--script=redis-info"],
    description: "Audits Redis in-memory data store for unauthenticated access and missing `requirepass` password authentication.",
    whenToUse: "Detecting exposed Redis servers vulnerable to Remote Code Execution (RCE).",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["redis", "6379", "redis-info", "nosql", "in-memory"],
    flagExplanations: {
      "-p 6379": "Targets Redis TCP port 6379.",
      "--script=redis-info": "Audits Redis server security status."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 10:54 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
PORT     STATE SERVICE
6379/tcp open  redis
| redis-info: 
|   Version: 6.2.6
|   Operating System: Linux 5.4.0-74-generic x86_64
|_  Role: master (Authentication NOT required!)

Nmap done: 1 IP address (1 host up) scanned in 1.30 seconds`
  },

  /* NEW COMMANDS (51 - 100) */
  {
    id: "dns-nsec-enum",
    name: "DNSSEC NSEC Zone Walking & Information Leak Probe",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 53 --script=dns-nsec-enum {flags} {target}",
    defaultFlags: ["-p 53", "--script=dns-nsec-enum"],
    description: "Walks DNSSEC NSEC record chains to enumerate hidden DNS resource records across secure DNS zones.",
    whenToUse: "Auditing DNSSEC-enabled domain name servers for NSEC record walking information disclosure.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["dnssec", "nsec", "dns-nsec-enum", "zone walk", "dns disclosure"],
    flagExplanations: {
      "--script=dns-nsec-enum": "Walks NSEC records to discover hidden DNS names."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:00 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT   STATE SERVICE
53/tcp open  domain
| dns-nsec-enum: 
|   Discovered hostnames via NSEC walking:
|     internal-db.example.com
|_    staging-api.example.com

Nmap done: 1 IP address (1 host up) scanned in 2.80 seconds`
  },
  {
    id: "http-cors-check",
    name: "HTTP Cross-Origin Resource Sharing (CORS) Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-cors {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-cors"],
    description: "Probes HTTP Access-Control-Allow-Origin headers to detect wildcards (`*`) or dangerous origin reflections.",
    whenToUse: "Auditing REST APIs for insecure CORS configurations that allow cross-domain credential leaks.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Medium",
    keywords: ["cors", "http-cors", "origin", "access-control-allow-origin", "api security"],
    flagExplanations: {
      "--script=http-cors": "Checks for insecure CORS header reflections."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:01 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT    STATE SERVICE
443/tcp open  https
| http-cors: 
|   VULNERABLE: Wildcard origin allowed with credentials
|_  Access-Control-Allow-Origin: *

Nmap done: 1 IP address (1 host up) scanned in 1.40 seconds`
  },
  {
    id: "http-headers-security",
    name: "HTTP Security Response Headers Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-security-headers {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-security-headers"],
    description: "Evaluates essential security headers: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy.",
    whenToUse: "Conducting hardening assessments for web applications.",
    stealthLevel: 4,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["hsts", "csp", "headers", "http-security-headers", "x-frame-options"],
    flagExplanations: {
      "--script=http-security-headers": "Audits HTTP security headers."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:02 UTC
Nmap scan report for {target}
Host is up (0.011s latency).
PORT    STATE SERVICE
443/tcp open  https
| http-security-headers: 
|   Strict-Transport-Security: MISSING!
|_  X-Frame-Options: SAMEORIGIN (Present)

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "http-sitemap-generator",
    name: "Web Crawler & Sitemap URL Extraction",
    category: "discovery",
    commandPattern: "nmap {timing} -p 80,443 --script=http-sitemap-generator {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-sitemap-generator"],
    description: "Crawls web applications to generate an XML/TXT sitemap of discovered links, scripts, and endpoints.",
    whenToUse: "Mapping web application endpoints prior to vulnerability scanning.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Low",
    keywords: ["sitemap", "crawler", "http-sitemap-generator", "web spider"],
    flagExplanations: {
      "--script=http-sitemap-generator": "Crawls web pages to build a sitemap."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:03 UTC
Nmap scan report for {target}
Host is up (0.018s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-sitemap-generator: 
|   Extracted 84 unique URLs:
|_    http://{target}/api/v1/users

Nmap done: 1 IP address (1 host up) scanned in 6.20 seconds`
  },
  {
    id: "http-config-backup",
    name: "Web Configuration & Backup File Disclosure Check",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-config-backup {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-config-backup"],
    description: "Probes web servers for leaked configuration backups (e.g. `web.config.bak`, `wp-config.php.old`, `settings.py.bak`).",
    whenToUse: "Identifying exposed source code or database credential backup files.",
    stealthLevel: 2,
    speedLevel: 4,
    riskLevel: "High",
    keywords: ["backup", "config", "http-config-backup", "bak", "credentials leak"],
    flagExplanations: {
      "--script=http-config-backup": "Searches for exposed configuration backup files."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:04 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-config-backup: 
|   Found sensitive backup file:
|_    http://{target}/wp-config.php.bak (200 OK)

Nmap done: 1 IP address (1 host up) scanned in 3.40 seconds`
  },
  {
    id: "http-git-check",
    name: "Exposed .git Repository Information Leak Probe",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-git {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-git"],
    description: "Checks if `.git/HEAD` or `.git/config` is accessible over HTTP, permitting complete source code reconstruction.",
    whenToUse: "Detecting accidentally published Git version control folders on web servers.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["git", "http-git", ".git", "source code leak", "repository"],
    flagExplanations: {
      "--script=http-git": "Probes web server for accessible .git folders."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:05 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-git: 
|   Git repository found!
|_    http://{target}/.git/HEAD (ref: refs/heads/main)

Nmap done: 1 IP address (1 host up) scanned in 1.20 seconds`
  },
  {
    id: "http-drupal-enum",
    name: "Drupal CMS Version & Module Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-drupal-enum {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-drupal-enum"],
    description: "Enumerates Drupal version, modules, and vulnerabilities (Drupalgeddon CVEs).",
    whenToUse: "Auditing Drupal web portals for outdated core software or modules.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["drupal", "drupalgeddon", "http-drupal-enum", "cms"],
    flagExplanations: {
      "--script=http-drupal-enum": "Enumerates Drupal modules and version."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:06 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-drupal-enum: 
|_  Drupal Version: 7.68 (Vulnerable to CVE-2018-7600)

Nmap done: 1 IP address (1 host up) scanned in 2.90 seconds`
  },
  {
    id: "http-joomla-enum",
    name: "Joomla CMS Component & Component Flaw Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-joomla-enum {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-joomla-enum"],
    description: "Enumerates Joomla components and known extension vulnerabilities.",
    whenToUse: "Auditing Joomla installations for vulnerable third-party components.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["joomla", "http-joomla-enum", "cms", "joomla plugin"],
    flagExplanations: {
      "--script=http-joomla-enum": "Enumerates Joomla extensions."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:07 UTC
Nmap scan report for {target}
Host is up (0.017s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-joomla-enum: 
|_  Joomla Version 3.9.1 (Components: com_users, com_content)

Nmap done: 1 IP address (1 host up) scanned in 3.10 seconds`
  },
  {
    id: "http-dom-xss",
    name: "Client-Side DOM-Based XSS Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-dombased-xss {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-dombased-xss"],
    description: "Analyzes client-side JavaScript source code for dangerous sinks (`document.write`, `eval`) prone to DOM XSS.",
    whenToUse: "Auditing single-page frontend web applications for client-side XSS.",
    stealthLevel: 3,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["xss", "dom-xss", "http-dombased-xss", "javascript flaw"],
    flagExplanations: {
      "--script=http-dombased-xss": "Scans client-side JS for DOM XSS vulnerabilities."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:08 UTC
Nmap scan report for {target}
Host is up (0.019s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-dombased-xss: 
|_  Possible DOM XSS sink 'document.write' found in app.js:L42

Nmap done: 1 IP address (1 host up) scanned in 4.10 seconds`
  },
  {
    id: "http-phpself-xss",
    name: "PHP_SELF Reflected XSS Vulnerability Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 80,443 --script=http-phpself-xss {flags} {target}",
    defaultFlags: ["-p 80,443", "--script=http-phpself-xss"],
    description: "Tests PHP form action attributes for unescaped `$_SERVER['PHP_SELF']` reflected XSS.",
    whenToUse: "Auditing legacy PHP web applications.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["php_self", "xss", "http-phpself-xss", "reflected xss"],
    flagExplanations: {
      "--script=http-phpself-xss": "Tests PHP_SELF XSS reflection."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:09 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
PORT   STATE SERVICE
80/tcp open  http
| http-phpself-xss: 
|_  VULNERABLE: PHP_SELF reflected XSS in form action at login.php

Nmap done: 1 IP address (1 host up) scanned in 1.80 seconds`
  },
  {
    id: "smb-vuln-conficker",
    name: "SMB Conficker Worm Infection Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 445 --script=smb-vuln-conficker {flags} {target}",
    defaultFlags: ["-p 445", "--script=smb-vuln-conficker"],
    description: "Detects legacy Conficker worm infections and MS08-067 NetAPI vulnerabilities on Windows hosts.",
    whenToUse: "Auditing legacy Windows XP/Server 2003 networks for malware infections.",
    stealthLevel: 2,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["conficker", "ms08-067", "smb-vuln-conficker", "netapi"],
    flagExplanations: {
      "--script=smb-vuln-conficker": "Checks Conficker infection status."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:10 UTC
Nmap scan report for {target}
Host is up (0.013s latency).
PORT    STATE SERVICE
445/tcp open  microsoft-ds
|_smb-vuln-conficker: CLEARED (Host is NOT infected)

Nmap done: 1 IP address (1 host up) scanned in 1.30 seconds`
  },
  {
    id: "smb-security-mode",
    name: "SMB Message Signing & Security Mode Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 445 --script=smb-security-mode {flags} {target}",
    defaultFlags: ["-p 445", "--script=smb-security-mode"],
    description: "Checks whether SMB message signing is disabled or optional, exposing network to NTLM Relay attacks.",
    whenToUse: "Auditing Windows domain controllers and file servers for NTLM relay vulnerability risks.",
    stealthLevel: 4,
    speedLevel: 5,
    riskLevel: "Medium",
    keywords: ["smb signing", "ntlm relay", "smb-security-mode", "message signing"],
    flagExplanations: {
      "--script=smb-security-mode": "Audits SMB message signing configuration."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:11 UTC
Nmap scan report for {target}
Host is up (0.011s latency).
PORT    STATE SERVICE
445/tcp open  microsoft-ds
| smb-security-mode: 
|   account_used: guest
|   Message signing enabled but NOT required (Vulnerable to NTLM Relay!)
|_  SMBv1 supported

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "smb-os-discovery",
    name: "SMB OS Fingerprinting & Domain Name Extraction",
    category: "service_os",
    commandPattern: "nmap {timing} -p 445 --script=smb-os-discovery {flags} {target}",
    defaultFlags: ["-p 445", "--script=smb-os-discovery"],
    description: "Extracts Windows Build version, Active Directory Domain Name, NetBIOS computer name, and System Time over SMB.",
    whenToUse: "Gathering precise OS build numbers and domain controller names without credentials.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["smb-os-discovery", "netbios", "windows build", "domain name"],
    flagExplanations: {
      "--script=smb-os-discovery": "Retrieves OS and domain details via SMB."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:12 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT    STATE SERVICE
445/tcp open  microsoft-ds
| smb-os-discovery: 
|   OS: Windows Server 2019 Datacenter 17763
|   Computer name: DC-MAIN
|   Domain name: CORP.LOCAL
|_  System time: 2026-07-31T11:12:00

Nmap done: 1 IP address (1 host up) scanned in 1.25 seconds`
  },
  {
    id: "smb-enum-domains",
    name: "Active Directory Domain & Password Policy Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -p 445 --script=smb-enum-domains {flags} {target}",
    defaultFlags: ["-p 445", "--script=smb-enum-domains"],
    description: "Queries Active Directory Domain password policies (min length, lockout threshold) over SMB.",
    whenToUse: "Auditing domain password policy lockout limits prior to password spraying assessments.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["smb-enum-domains", "password policy", "lockout threshold"],
    flagExplanations: {
      "--script=smb-enum-domains": "Enumerates domain password policy details."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:13 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT    STATE SERVICE
445/tcp open  microsoft-ds
| smb-enum-domains: 
|   CORP: 
|     Min password length: 12
|     Password history length: 24
|_    Account lockout threshold: 5 attempts

Nmap done: 1 IP address (1 host up) scanned in 1.90 seconds`
  },
  {
    id: "smb-enum-services",
    name: "Remote Windows Services Enumeration via SMB",
    category: "service_os",
    commandPattern: "nmap {timing} -p 445 --script=smb-enum-services {flags} {target}",
    defaultFlags: ["-p 445", "--script=smb-enum-services"],
    description: "Lists running Windows services, startup state, and binary paths over SMB.",
    whenToUse: "Identifying custom third-party services and unquoted service paths.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["smb-enum-services", "windows services", "service list"],
    flagExplanations: {
      "--script=smb-enum-services": "Lists running Windows services via SMB."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:14 UTC
Nmap scan report for {target}
Host is up (0.018s latency).
PORT    STATE SERVICE
445/tcp open  microsoft-ds
| smb-enum-services: 
|   Service: Spooler (Print Spooler) - Running
|_  Service: W3SVC (World Wide Web Publishing) - Running

Nmap done: 1 IP address (1 host up) scanned in 2.80 seconds`
  },
  {
    id: "sip-methods-enum",
    name: "VoIP SIP Methods & User Account Enumeration",
    category: "service_os",
    commandPattern: "nmap {timing} -sU -p 5060 --script=sip-enum-users {flags} {target}",
    defaultFlags: ["-sU -p 5060", "--script=sip-enum-users"],
    description: "Queries UDP 5060 SIP VoIP servers to enumerate valid extension numbers.",
    whenToUse: "Auditing PBX / VoIP telephony infrastructure.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["sip", "voip", "5060", "sip-enum-users", "pbx"],
    flagExplanations: {
      "-sU -p 5060": "Targets UDP 5060 SIP VoIP service.",
      "--script=sip-enum-users": "Enumerates valid SIP phone extensions."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:15 UTC
Nmap scan report for {target}
Host is up (0.010s latency).
PORT     STATE SERVICE
5060/udp open  sip
| sip-enum-users: 
|   Discovered valid SIP extensions:
|_    101, 102, 200 (Admin)

Nmap done: 1 IP address (1 host up) scanned in 2.10 seconds`
  },
  {
    id: "tftp-enum-files",
    name: "Unauthenticated TFTP File Retrieval Probe",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -sU -p 69 --script=tftp-enum {flags} {target}",
    defaultFlags: ["-sU -p 69", "--script=tftp-enum"],
    description: "Queries UDP 69 Trivial FTP servers for accessible configuration files (cisco.cfg, pxelinux.0).",
    whenToUse: "Auditing network boot (PXE) and router configuration backup servers.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["tftp", "69", "tftp-enum", "pxe boot", "cisco.cfg"],
    flagExplanations: {
      "-sU -p 69": "Targets UDP 69 TFTP service.",
      "--script=tftp-enum": "Probes common TFTP file paths."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:16 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
PORT   STATE SERVICE
69/udp open  tftp
| tftp-enum: 
|_  Found file: router.cfg (Accessible)

Nmap done: 1 IP address (1 host up) scanned in 1.90 seconds`
  },
  {
    id: "vnc-info-auth",
    name: "VNC Remote Desktop Unauthenticated Access Probe",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 5900 --script=vnc-info,vnc-title {flags} {target}",
    defaultFlags: ["-p 5900", "--script=vnc-info"],
    description: "Queries VNC remote desktop servers to check if authentication is disabled.",
    whenToUse: "Auditing industrial displays and remote desktops for unauthenticated access.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["vnc", "5900", "vnc-info", "remote desktop", "no auth"],
    flagExplanations: {
      "-p 5900": "Targets VNC port 5900.",
      "--script=vnc-info": "Checks VNC authentication requirements."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:17 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT     STATE SERVICE
5900/tcp open  vnc
| vnc-info: 
|_  Security types supported: None (No authentication required!)

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "telnet-ntlm-info",
    name: "Telnet NTLM Information Disclosure Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 23 --script=telnet-ntlm-info {flags} {target}",
    defaultFlags: ["-p 23", "--script=telnet-ntlm-info"],
    description: "Extracts Windows Domain Name, NetBIOS computer name, and OS details over Telnet NTLM challenge.",
    whenToUse: "Auditing legacy Telnet services for domain infrastructure leaks.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["telnet", "23", "telnet-ntlm-info", "ntlm leak"],
    flagExplanations: {
      "--script=telnet-ntlm-info": "Extracts NTLM domain info via Telnet."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:18 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT   STATE SERVICE
23/tcp open  telnet
| telnet-ntlm-info: 
|_  Target Name: CORP_NETBIOS

Nmap done: 1 IP address (1 host up) scanned in 1.05 seconds`
  },
  {
    id: "pop3-capabilities",
    name: "POP3 Mail Server Capabilities & STARTTLS Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 110,995 --script=pop3-capabilities {flags} {target}",
    defaultFlags: ["-p 110", "--script=pop3-capabilities"],
    description: "Queries POP3 mail server capabilities (STLS, USER, SASL).",
    whenToUse: "Auditing email retrieval server encryption settings.",
    stealthLevel: 4,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["pop3", "110", "pop3-capabilities", "mail encryption"],
    flagExplanations: {
      "--script=pop3-capabilities": "Lists POP3 server capabilities."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:19 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT    STATE SERVICE
110/tcp open  pop3
|_pop3-capabilities: STLS USER RESP-CODES CAPA

Nmap done: 1 IP address (1 host up) scanned in 0.95 seconds`
  },
  {
    id: "imap-capabilities",
    name: "IMAP Mail Server Capabilities & Encryption Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -p 143,993 --script=imap-capabilities {flags} {target}",
    defaultFlags: ["-p 143", "--script=imap-capabilities"],
    description: "Queries IMAP mail server authentication mechanisms and STARTTLS support.",
    whenToUse: "Auditing IMAP mail servers for plain-text password login risks.",
    stealthLevel: 4,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["imap", "143", "imap-capabilities", "mail security"],
    flagExplanations: {
      "--script=imap-capabilities": "Fetches IMAP server capabilities."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:20 UTC
Nmap scan report for {target}
Host is up (0.013s latency).
PORT    STATE SERVICE
143/tcp open  imap
|_imap-capabilities: STARTTLS AUTH=PLAIN LOGINDISABLED

Nmap done: 1 IP address (1 host up) scanned in 0.90 seconds`
  },
  {
    id: "rsync-list-modules",
    name: "Unauthenticated Rsync Shared Modules Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 873 --script=rsync-list-modules {flags} {target}",
    defaultFlags: ["-p 873", "--script=rsync-list-modules"],
    description: "Lists exposed unauthenticated Rsync file backup modules.",
    whenToUse: "Identifying exposed server backups accessible over Rsync port 873.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["rsync", "873", "rsync-list-modules", "backup leak"],
    flagExplanations: {
      "--script=rsync-list-modules": "Lists exposed Rsync sync modules."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:21 UTC
Nmap scan report for {target}
Host is up (0.017s latency).
PORT    STATE SERVICE
873/tcp open  rsync
| rsync-list-modules: 
|_  backup_data (Anonymous access allowed)

Nmap done: 1 IP address (1 host up) scanned in 1.15 seconds`
  },
  {
    id: "distcc-exec-cmd",
    name: "DistCC Remote Code Execution Check (CVE-2004-2687)",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 3632 --script=distcc-cve2004-2687 {flags} {target}",
    defaultFlags: ["-p 3632", "--script=distcc-cve2004-2687"],
    description: "Checks DistCC distributed compilation daemon for unauthenticated arbitrary command execution.",
    whenToUse: "Auditing software development build servers for DistCC flaws.",
    stealthLevel: 2,
    speedLevel: 5,
    riskLevel: "Critical",
    keywords: ["distcc", "3632", "distcc-cve2004-2687", "rce flaw"],
    flagExplanations: {
      "--script=distcc-cve2004-2687": "Tests DistCC daemon command execution."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:22 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT     STATE SERVICE
3632/tcp open  distcc
| distcc-cve2004-2687: 
|_  VULNERABLE: Arbitrary command execution allowed!

Nmap done: 1 IP address (1 host up) scanned in 1.05 seconds`
  },
  {
    id: "snmp-interfaces-list",
    name: "SNMP Network Interface & Traffic Statistics Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -sU -p 161 --script=snmp-interfaces {flags} {target}",
    defaultFlags: ["-sU -p 161", "--script=snmp-interfaces"],
    description: "Enumerates network interfaces, MAC addresses, and IP configurations via SNMP.",
    whenToUse: "Mapping internal network interfaces on routers and switches.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["snmp-interfaces", "mac address", "interfaces", "router stats"],
    flagExplanations: {
      "--script=snmp-interfaces": "Fetches interface details via SNMP."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:23 UTC
Nmap scan report for {target}
Host is up (0.008s latency).
PORT    STATE SERVICE
161/udp open  snmp
| snmp-interfaces: 
|   eth0: IP 10.0.0.1 (MAC 00:1A:2B:XX:XX:XX)
|_  eth1: IP 192.168.1.1

Nmap done: 1 IP address (1 host up) scanned in 2.20 seconds`
  },
  {
    id: "snmp-processes-list",
    name: "SNMP Running Processes & System Services Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -sU -p 161 --script=snmp-processes {flags} {target}",
    defaultFlags: ["-sU -p 161", "--script=snmp-processes"],
    description: "Lists active running software processes via SNMP MIB tables.",
    whenToUse: "Auditing server processes remotely without SSH credentials.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["snmp-processes", "process list", "snmp mib"],
    flagExplanations: {
      "--script=snmp-processes": "Lists running processes via SNMP."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:24 UTC
Nmap scan report for {target}
Host is up (0.009s latency).
PORT    STATE SERVICE
161/udp open  snmp
| snmp-processes: 
|_  1: /sbin/init, 452: /usr/sbin/sshd, 1021: /usr/sbin/apache2

Nmap done: 1 IP address (1 host up) scanned in 2.40 seconds`
  },
  {
    id: "modbus-discover-plc",
    name: "Modbus TCP Industrial Automation PLC Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 502 --script=modbus-discover {flags} {target}",
    defaultFlags: ["-p 502", "--script=modbus-discover"],
    description: "Enumerates Modbus TCP slave unit IDs on SCADA / ICS controllers.",
    whenToUse: "Safely auditing industrial control system PLCs.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["modbus", "502", "scada", "ics", "plc", "modbus-discover"],
    flagExplanations: {
      "--script=modbus-discover": "Discovers Modbus slave unit IDs."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:25 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT    STATE SERVICE
502/tcp open  asa-appl-proto
| modbus-discover: 
|_  Modbus device ID 1: Schneider Electric Modicon

Nmap done: 1 IP address (1 host up) scanned in 1.80 seconds`
  },
  {
    id: "s7-info-plc",
    name: "Siemens S7 PLC Industrial Controller Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 102 --script=s7-info {flags} {target}",
    defaultFlags: ["-p 102", "--script=s7-info"],
    description: "Retrieves Siemens S7 PLC model, firmware version, and module details over ISO-on-TCP (Port 102).",
    whenToUse: "Auditing Siemens S7-300/400/1200/1500 industrial controllers.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["s7", "102", "siemens", "plc", "scada", "s7-info"],
    flagExplanations: {
      "--script=s7-info": "Retrieves Siemens S7 PLC system info."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:26 UTC
Nmap scan report for {target}
Host is up (0.011s latency).
PORT    STATE SERVICE
102/tcp open  iso-tsap
| s7-info: 
|_  Module: CPU 1214C DC/DC/DC (v4.2.1)

Nmap done: 1 IP address (1 host up) scanned in 1.65 seconds`
  },
  {
    id: "bacnet-info-building",
    name: "BACnet Building Automation Controller Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -sU -p 47808 --script=bacnet-info {flags} {target}",
    defaultFlags: ["-sU -p 47808", "--script=bacnet-info"],
    description: "Queries BACnet (Building Automation and Control networks) controllers for vendor name, device ID, and firmware.",
    whenToUse: "Auditing smart building HVAC and access control automation systems.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["bacnet", "47808", "hvac", "building automation", "bacnet-info"],
    flagExplanations: {
      "--script=bacnet-info": "Retrieves BACnet controller details."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:27 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT      STATE SERVICE
47808/udp open  bacnet
| bacnet-info: 
|_  Vendor: Honeywell Building Control (ID: 1042)

Nmap done: 1 IP address (1 host up) scanned in 1.50 seconds`
  },
  {
    id: "enip-info-industrial",
    name: "EtherNet/IP Industrial Controller Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 44818 --script=enip-info {flags} {target}",
    defaultFlags: ["-p 44818", "--script=enip-info"],
    description: "Queries Rockwell Automation / Allen-Bradley PLCs for device serial numbers and vendor info.",
    whenToUse: "Auditing EtherNet/IP industrial factory automation networks.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["ethernet/ip", "44818", "allen-bradley", "rockwell", "enip-info"],
    flagExplanations: {
      "--script=enip-info": "Retrieves EtherNet/IP device details."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:28 UTC
Nmap scan report for {target}
Host is up (0.013s latency).
PORT      STATE SERVICE
44818/tcp open  EtherNet/IP
| enip-info: 
|_  Device: Allen-Bradley ControlLogix 5570

Nmap done: 1 IP address (1 host up) scanned in 1.45 seconds`
  },
  {
    id: "dnp3-info-scada",
    name: "DNP3 Electric Grid SCADA Protocol Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -p 20000 --script=dnp3-info {flags} {target}",
    defaultFlags: ["-p 20000", "--script=dnp3-info"],
    description: "Queries DNP3 (Distributed Network Protocol) daemons used in electric utility sub-stations.",
    whenToUse: "Auditing electrical grid SCADA RTU controllers.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["dnp3", "20000", "scada", "electric grid", "dnp3-info"],
    flagExplanations: {
      "--script=dnp3-info": "Retrieves DNP3 RTU status."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:29 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT      STATE SERVICE
20000/tcp open  dnp3
| dnp3-info: 
|_  DNP3 Outstation ID: 10 (Substation Alpha)

Nmap done: 1 IP address (1 host up) scanned in 1.60 seconds`
  },
  {
    id: "oracle-sid-brute",
    name: "Oracle Database TNS Listener SID Discovery",
    category: "service_os",
    commandPattern: "nmap {timing} -p 1521 --script=oracle-sid-brute {flags} {target}",
    defaultFlags: ["-p 1521", "--script=oracle-sid-brute"],
    description: "Brute-forces Oracle TNS Listener System Identifiers (SIDs: ORCL, XE, PROD).",
    whenToUse: "Discovering Oracle SID names prior to database authentication testing.",
    stealthLevel: 2,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["oracle", "1521", "tns", "oracle-sid-brute", "sid discovery"],
    flagExplanations: {
      "--script=oracle-sid-brute": "Brute-forces Oracle database SIDs."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:30 UTC
Nmap scan report for {target}
Host is up (0.018s latency).
PORT     STATE SERVICE
1521/tcp open  oracle
| oracle-sid-brute: 
|_  Valid Oracle SID found: ORCL

Nmap done: 1 IP address (1 host up) scanned in 4.20 seconds`
  },
  {
    id: "oracle-tns-version",
    name: "Oracle TNS Listener Version & Status Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 1521 --script=oracle-tns-version {flags} {target}",
    defaultFlags: ["-p 1521", "--script=oracle-tns-version"],
    description: "Queries Oracle TNS Listener version and server status info.",
    whenToUse: "Auditing Oracle database listener patch levels.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["oracle", "1521", "oracle-tns-version", "tns listener"],
    flagExplanations: {
      "--script=oracle-tns-version": "Fetches Oracle TNS version."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:31 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
PORT     STATE SERVICE
1521/tcp open  oracle
| oracle-tns-version: 
|_  TNS Listener Version: 19.0.0.0.0

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "postgres-databases-enum",
    name: "PostgreSQL Server Status & Version Probe",
    category: "service_os",
    commandPattern: "nmap {timing} -p 5432 -sV {flags} {target}",
    defaultFlags: ["-p 5432", "-sV"],
    description: "Probes PostgreSQL database server version and TLS encryption support.",
    whenToUse: "Auditing PostgreSQL database servers.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["postgresql", "5432", "postgres", "database"],
    flagExplanations: {
      "-p 5432": "Targets PostgreSQL port 5432."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:32 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT     STATE SERVICE VERSION
5432/tcp open  postgresql PostgreSQL DB 14.5

Nmap done: 1 IP address (1 host up) scanned in 1.05 seconds`
  },
  {
    id: "cassandra-info-check",
    name: "Apache Cassandra NoSQL Cluster Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 9042 --script=cassandra-info {flags} {target}",
    defaultFlags: ["-p 9042", "--script=cassandra-info"],
    description: "Queries Apache Cassandra NoSQL cluster status and native CQL protocol info.",
    whenToUse: "Auditing distributed Cassandra NoSQL database nodes.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["cassandra", "9042", "nosql", "cassandra-info"],
    flagExplanations: {
      "--script=cassandra-info": "Retrieves Cassandra cluster info."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:33 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT     STATE SERVICE
9042/tcp open  cassandra
| cassandra-info: 
|_  Cluster name: TestCluster (CQL v3.4.5)

Nmap done: 1 IP address (1 host up) scanned in 1.40 seconds`
  },
  {
    id: "elasticsearch-info-enum",
    name: "Elasticsearch Cluster Health & Index Leak Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 9200 --script=elasticsearch-info {flags} {target}",
    defaultFlags: ["-p 9200", "--script=elasticsearch-info"],
    description: "Checks if Elasticsearch REST API (Port 9200) is exposed without authentication.",
    whenToUse: "Auditing enterprise logging clusters for unauthenticated data leaks.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["elasticsearch", "9200", "elastic", "elasticsearch-info", "log leak"],
    flagExplanations: {
      "--script=elasticsearch-info": "Checks Elasticsearch cluster status."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:34 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT     STATE SERVICE
9200/tcp open  wap-wsp
| elasticsearch-info: 
|   Cluster Name: elastic-prod
|_  Status: yellow (Unauthenticated access!)

Nmap done: 1 IP address (1 host up) scanned in 1.15 seconds`
  },
  {
    id: "couchdb-info-enum",
    name: "Apache CouchDB Unauthenticated Access Probe",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 5984 --script=couchdb-databases {flags} {target}",
    defaultFlags: ["-p 5984", "--script=couchdb-databases"],
    description: "Queries CouchDB REST API for unauthenticated database list access.",
    whenToUse: "Auditing CouchDB NoSQL databases exposed publicly.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "High",
    keywords: ["couchdb", "5984", "nosql", "couchdb-databases"],
    flagExplanations: {
      "--script=couchdb-databases": "Lists CouchDB databases."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:35 UTC
Nmap scan report for {target}
Host is up (0.017s latency).
PORT     STATE SERVICE
5984/tcp open  couchdb
| couchdb-databases: 
|_  Databases: _users, _replicator, app_data

Nmap done: 1 IP address (1 host up) scanned in 1.20 seconds`
  },
  {
    id: "influxdb-info-enum",
    name: "InfluxDB Time-Series Database Audit",
    category: "service_os",
    commandPattern: "nmap {timing} -p 8086 -sV {flags} {target}",
    defaultFlags: ["-p 8086", "-sV"],
    description: "Probes InfluxDB time-series database HTTP API status.",
    whenToUse: "Auditing InfluxDB metrics collection servers.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Medium",
    keywords: ["influxdb", "8086", "time-series", "metrics"],
    flagExplanations: {
      "-p 8086": "Targets InfluxDB API port 8086."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:36 UTC
Nmap scan report for {target}
Host is up (0.013s latency).
PORT     STATE SERVICE VERSION
8086/tcp open  http    InfluxDB http admin 2.4.0

Nmap done: 1 IP address (1 host up) scanned in 0.95 seconds`
  },
  {
    id: "docker-daemon-api",
    name: "Docker Unauthenticated Daemon REST API Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 2375,2376 --script=docker-version {flags} {target}",
    defaultFlags: ["-p 2375", "--script=docker-version"],
    description: "Checks if Docker engine TCP socket (2375) is exposed without TLS authentication, allowing remote root container breakout.",
    whenToUse: "Auditing cloud container hosts for unauthenticated Docker daemon sockets.",
    stealthLevel: 2,
    speedLevel: 5,
    riskLevel: "Critical",
    keywords: ["docker", "2375", "docker-version", "container breakout", "rce"],
    flagExplanations: {
      "--script=docker-version": "Checks Docker API version and auth."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:37 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
PORT     STATE SERVICE
2375/tcp open  docker
| docker-version: 
|   Docker Engine: 20.10.12
|_  API Version: 1.41 (UNAUTHENTICATED REMOTE ROOT ACCESS!)

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "kubernetes-api-check",
    name: "Kubernetes Unauthenticated API Server Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 6443,10250 --script=http-title {flags} {target}",
    defaultFlags: ["-p 6443", "-sV"],
    description: "Probes Kubernetes API Server (6443) and Kubelet read-only port (10255) for unauthenticated exposure.",
    whenToUse: "Auditing Kubernetes cluster master and worker nodes.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "High",
    keywords: ["kubernetes", "k8s", "6443", "kubelet", "cluster security"],
    flagExplanations: {
      "-p 6443": "Targets Kubernetes API server port."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:38 UTC
Nmap scan report for {target}
Host is up (0.016s latency).
PORT     STATE SERVICE
6443/tcp open  ssl/https
|_http-title: Kubernetes API Server

Nmap done: 1 IP address (1 host up) scanned in 1.25 seconds`
  },
  {
    id: "etcd-info-check",
    name: "Etcd Key-Value Store Unauthenticated Access Audit",
    category: "vuln_scripts",
    commandPattern: "nmap {timing} -p 2379 -sV {flags} {target}",
    defaultFlags: ["-p 2379", "-sV"],
    description: "Probes Kubernetes Etcd key-value store for unauthenticated secret retrieval.",
    whenToUse: "Auditing Etcd database clusters for exposed Kubernetes secrets.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Critical",
    keywords: ["etcd", "2379", "kubernetes secret", "k8s etcd"],
    flagExplanations: {
      "-p 2379": "Targets Etcd client port 2379."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:39 UTC
Nmap scan report for {target}
Host is up (0.013s latency).
PORT     STATE SERVICE VERSION
2379/tcp open  http    etcd 3.5.1

Nmap done: 1 IP address (1 host up) scanned in 0.90 seconds`
  },
  {
    id: "ipsec-vpn-ike",
    name: "IPsec IKE VPN Gateway Detection (-sU -p 500)",
    category: "discovery",
    commandPattern: "nmap {timing} -sU -p 500 --script=ike-version {flags} {target}",
    defaultFlags: ["-sU -p 500", "--script=ike-version"],
    description: "Probes UDP 500 IKE (Internet Key Exchange) daemon to discover IPsec VPN gateway vendor (Cisco, Fortinet, Palo Alto).",
    whenToUse: "Auditing enterprise IPsec VPN concentrators.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["ipsec", "ike", "vpn", "500", "ike-version"],
    flagExplanations: {
      "-sU -p 500": "Targets UDP 500 IKE VPN port.",
      "--script=ike-version": "Retrieves IKE VPN vendor version."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:40 UTC
Nmap scan report for {target}
Host is up (0.015s latency).
PORT    STATE SERVICE
500/udp open  isakmp
| ike-version: 
|_  Vendor: Cisco Systems (IKEv2 supported)

Nmap done: 1 IP address (1 host up) scanned in 1.40 seconds`
  },
  {
    id: "openvpn-status-check",
    name: "OpenVPN UDP Server Probe (-sU -p 1194)",
    category: "discovery",
    commandPattern: "nmap {timing} -sU -p 1194 {flags} {target}",
    defaultFlags: ["-sU -p 1194"],
    description: "Sends OpenVPN reset probe packet to detect active OpenVPN gateways.",
    whenToUse: "Auditing OpenVPN remote access endpoints.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["openvpn", "1194", "vpn", "udp probe"],
    flagExplanations: {
      "-sU -p 1194": "Targets UDP 1194 OpenVPN service."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:41 UTC
Nmap scan report for {target}
Host is up (0.012s latency).
PORT     STATE         SERVICE
1194/udp open|filtered openvpn

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "wireguard-udp-probe",
    name: "WireGuard VPN Gateway UDP Probe (-sU -p 51820)",
    category: "discovery",
    commandPattern: "nmap {timing} -sU -p 51820 {flags} {target}",
    defaultFlags: ["-sU -p 51820"],
    description: "Probes default WireGuard VPN UDP port 51820.",
    whenToUse: "Auditing modern WireGuard VPN server deployments.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["wireguard", "51820", "vpn", "wireguard probe"],
    flagExplanations: {
      "-sU -p 51820": "Targets UDP 51820 WireGuard port."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:42 UTC
Nmap scan report for {target}
Host is up (0.010s latency).
PORT      STATE         SERVICE
51820/udp open|filtered wireguard

Nmap done: 1 IP address (1 host up) scanned in 1.05 seconds`
  },
  {
    id: "firewall-bypass-ttl",
    name: "Custom TTL Packet Manipulation (--ttl 64)",
    category: "evasion",
    commandPattern: "nmap {timing} --ttl 64 {ports} {flags} {target}",
    defaultFlags: ["--ttl 64"],
    description: "Sets custom Time-To-Live (TTL) header value to bypass TTL-based packet filtering rules.",
    whenToUse: "Evading IDS rules calibrated for specific OS default TTL values.",
    stealthLevel: 4,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["ttl", "--ttl", "time to live", "packet manipulation"],
    flagExplanations: {
      "--ttl 64": "Forces probe packet IP TTL to 64."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:43 UTC
[+] Custom IP TTL set to 64.
Nmap scan report for {target}
Host is up (0.011s latency).
PORT   STATE SERVICE
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 1.15 seconds`
  },
  {
    id: "firewall-bypass-ip-options",
    name: "Loose Source Routing IP Options Probe (--ip-options)",
    category: "evasion",
    commandPattern: "nmap {timing} --ip-options \"L 192.168.1.1\" {ports} {flags} {target}",
    defaultFlags: ["--ip-options \"L 192.168.1.1\""],
    description: "Inserts custom IP options bytes (Loose Source Routing) into probe headers.",
    whenToUse: "Testing network router IP option filtering policies.",
    stealthLevel: 4,
    speedLevel: 3,
    riskLevel: "Medium",
    keywords: ["ip options", "--ip-options", "source routing"],
    flagExplanations: {
      "--ip-options": "Inserts raw IP options into header."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:44 UTC
Nmap scan report for {target}
Host is up (0.014s latency).
PORT   STATE SERVICE
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 1.50 seconds`
  },
  {
    id: "mac-random-spoof",
    name: "Fully Random MAC Address Generation (--spoof-mac 0)",
    category: "evasion",
    commandPattern: "nmap --spoof-mac 0 {flags} {target}",
    defaultFlags: ["--spoof-mac 0"],
    description: "Generates a completely randomized 48-bit MAC address for ethernet frames.",
    whenToUse: "Anonymizing local ethernet interface hardware identity.",
    stealthLevel: 5,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["mac spoof", "random mac", "--spoof-mac 0"],
    flagExplanations: {
      "--spoof-mac 0": "Generates a fully randomized MAC address."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:45 UTC
[+] Spoofing MAC address: 42:86:E1:99:A0:C4 (Randomized)
Nmap scan report for {target}
Host is up (0.003s latency).

Nmap done: 1 IP address (1 host up) scanned in 0.90 seconds`
  },
  {
    id: "spoof-source-ip",
    name: "Custom Source IP Address Spoofing (-S)",
    category: "evasion",
    commandPattern: "nmap -Pn -S 10.0.0.50 -e eth0 {ports} {flags} {target}",
    defaultFlags: ["-S 10.0.0.50", "-e eth0"],
    description: "Spoofs raw packet source IP address. Requires network interface specification (`-e`). Note: Response packets will be routed to the spoofed IP.",
    whenToUse: "Testing SYN flood logging resilience and blind packet injection.",
    stealthLevel: 5,
    speedLevel: 3,
    riskLevel: "High",
    keywords: ["spoof ip", "-S", "source ip", "ip spoofing"],
    flagExplanations: {
      "-S 10.0.0.50": "Spoofs outgoing packet source IP address.",
      "-e eth0": "Specifies active network interface."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:46 UTC
[+] Spoofing source IP: 10.0.0.50 on interface eth0.
Nmap scan report for {target}
Host is up (Assumed).

Nmap done: 1 IP address (1 host up) scanned in 1.10 seconds`
  },
  {
    id: "scan-random-hosts",
    name: "Random Public Internet Host Discovery (-iR 100)",
    category: "advanced",
    commandPattern: "nmap -iR 100 -sS -p 80 {flags}",
    defaultFlags: ["-iR 100", "-p 80"],
    description: "Generates 100 completely random public IPv4 target addresses to scan.",
    whenToUse: "Conducting internet-wide statistical research and telemetry sampling.",
    stealthLevel: 2,
    speedLevel: 4,
    riskLevel: "Medium",
    keywords: ["random targets", "-iR", "internet sampling", "random ip"],
    flagExplanations: {
      "-iR 100": "Generates 100 random target IP addresses."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:47 UTC
Nmap scan report for 45.33.32.156
Host is up (0.014s latency).
PORT   STATE SERVICE
80/tcp open  http
Nmap done: 100 IP addresses (12 hosts up) scanned in 8.50 seconds`
  },
  {
    id: "exclude-hosts-file",
    name: "Subnet Scan with Target Exclusion List (--exclude-file)",
    category: "advanced",
    commandPattern: "nmap {timing} --exclude-file exclude.txt {ports} {flags} {target}",
    defaultFlags: ["--exclude-file exclude.txt"],
    description: "Scans target subnet while strictly skipping sensitive IPs listed in `exclude.txt`.",
    whenToUse: "Preventing accidental scanning of sensitive medical equipment or VoIP gateways in client subnets.",
    stealthLevel: 3,
    speedLevel: 4,
    riskLevel: "Low",
    keywords: ["exclude", "--exclude-file", "blacklist", "subnet scope"],
    flagExplanations: {
      "--exclude-file exclude.txt": "Excludes IP addresses listed in file."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:48 UTC
[+] Excluded 5 IP addresses from exclude.txt.
Nmap scan report for {target}
Host is up (0.011s latency).

Nmap done: 251 IP addresses (4 hosts up) scanned in 3.10 seconds`
  },
  {
    id: "fast-arp-discovery",
    name: "Fast Local Ethernet Ping Discovery (-sn -PR -T4)",
    category: "discovery",
    commandPattern: "nmap -sn -PR -T4 {flags} {target}",
    defaultFlags: ["-sn", "-PR", "-T4"],
    description: "Combines ARP host discovery with aggressive timing for sub-second subnet mapping.",
    whenToUse: "Lightning-fast local Wi-Fi / LAN asset inventory.",
    stealthLevel: 3,
    speedLevel: 5,
    riskLevel: "Low",
    keywords: ["fast arp", "-PR", "lan discovery", "quick ping"],
    flagExplanations: {
      "-sn": "Skips port scan.",
      "-PR": "Uses ARP ping discovery."
    },
    mockOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-31 11:49 UTC
Nmap scan report for 192.168.1.1
Host is up (0.00045s latency).
Nmap scan report for {target}
Host is up (0.00060s latency).

Nmap done: 256 IP addresses (2 hosts up) scanned in 0.40 seconds`
  }
];
