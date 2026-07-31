/**
 * Complete 100 Real-World Nmap Commands Dataset
 */

export const NMAP_COMMANDS = [
  // 1. HOST DISCOVERY
  {
    id: "cmd_ping_sweep",
    name: "Subnet Ping Sweep",
    category: "discovery",
    commandPattern: "nmap -sn {timing} {target}",
    description: "Discovers active hosts on subnet without performing port scans.",
    whenToUse: "Initial network reconnaissance to map active IP addresses on a local subnet.",
    speedLevel: 5,
    stealthLevel: 4,
    riskLevel: "Low",
    keywords: ["ping sweep", "host discovery", "sny scn", "sn", "active hosts", "network map"],
    flagExplanations: {
      "-sn": "Disables port scanning after host discovery.",
      "-T4": "Aggressive timing template for fast subnet scanning."
    },
    mockOutput: "Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for 192.168.1.1\nHost is up (0.0012s latency).\nNmap scan report for 192.168.1.10\nHost is up (0.0034s latency).\nNmap done: 256 IP addresses (2 hosts up) scanned in 1.45 seconds."
  },
  {
    id: "cmd_arp_discovery",
    name: "Local ARP Host Discovery",
    category: "discovery",
    commandPattern: "nmap -PR {timing} {target}",
    description: "Uses ARP requests to discover hosts on local Ethernet subnets.",
    whenToUse: "Local LAN auditing where target hosts block ICMP ping requests.",
    speedLevel: 5,
    stealthLevel: 3,
    riskLevel: "Low",
    keywords: ["arp", "local lan", "mac address", "ethernet"],
    flagExplanations: {
      "-PR": "Perform ARP discovery on local subnets."
    },
    mockOutput: "Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for 192.168.1.1\nHost is up (0.00045s latency).\nMAC Address: 00:11:22:33:44:55 (Vendor Inc)\nNmap done: 1 IP address scanned in 0.12 seconds."
  },
  {
    id: "cmd_syn_ping",
    name: "TCP SYN Host Ping Probe",
    category: "discovery",
    commandPattern: "nmap -PS80,443 {timing} {target}",
    description: "Sends TCP SYN packets to port 80 and 443 to probe host liveness.",
    whenToUse: "Bypassing ICMP echo request filters when target blocks ping.",
    speedLevel: 4,
    stealthLevel: 4,
    riskLevel: "Low",
    keywords: ["syn ping", "ps", "port 80", "port 443"],
    flagExplanations: {
      "-PS80,443": "Sends SYN packets to ports 80 and 443 for discovery."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nHost is up (0.0089s latency).\nNmap done: 1 IP address scanned in 0.42 seconds."
  },
  {
    id: "cmd_ack_ping",
    name: "TCP ACK Host Ping Probe",
    category: "discovery",
    commandPattern: "nmap -PA80,443 {timing} {target}",
    description: "Sends TCP ACK packets to bypass stateless firewall filters during host discovery.",
    whenToUse: "Penetrating simple packet-filtering firewalls during discovery.",
    speedLevel: 4,
    stealthLevel: 4,
    riskLevel: "Low",
    keywords: ["ack ping", "pa", "firewall bypass"],
    flagExplanations: {
      "-PA80,443": "Sends ACK packets to ports 80 and 443."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nHost is up (0.0092s latency)."
  },
  {
    id: "cmd_udp_ping",
    name: "UDP Host Discovery Probe",
    category: "discovery",
    commandPattern: "nmap -PU53,161 {timing} {target}",
    description: "Sends empty UDP packets to ports 53 and 161 to discover unresponsive TCP hosts.",
    whenToUse: "Finding hosts that block all TCP SYN/ACK ping probes.",
    speedLevel: 3,
    stealthLevel: 3,
    riskLevel: "Low",
    keywords: ["udp ping", "pu", "dns ping"],
    flagExplanations: {
      "-PU53,161": "Sends UDP discovery probes to port 53 (DNS) and 161 (SNMP)."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nHost is up (0.015s latency)."
  },
  {
    id: "cmd_icmp_echo_ping",
    name: "ICMP Echo Request Discovery",
    category: "discovery",
    commandPattern: "nmap -PE {timing} {target}",
    description: "Sends standard ICMP echo requests for host discovery.",
    whenToUse: "Standard network discovery on permissive corporate networks.",
    speedLevel: 5,
    stealthLevel: 2,
    riskLevel: "Low",
    keywords: ["icmp ping", "pe", "echo request"],
    flagExplanations: {
      "-PE": "Sends ICMP echo request probe."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nHost is up (0.0021s latency)."
  },
  {
    id: "cmd_icmp_timestamp_ping",
    name: "ICMP Timestamp Query Discovery",
    category: "discovery",
    commandPattern: "nmap -PP {timing} {target}",
    description: "Sends ICMP timestamp request packets to discover host liveness.",
    whenToUse: "Bypassing firewalls that block standard ICMP Echo (ping) but allow timestamp queries.",
    speedLevel: 4,
    stealthLevel: 3,
    riskLevel: "Low",
    keywords: ["timestamp ping", "pp", "icmp timestamp"],
    flagExplanations: {
      "-PP": "Sends ICMP timestamp query."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nHost is up (0.0031s latency)."
  },
  {
    id: "cmd_sctp_init_ping",
    name: "SCTP INIT Ping Discovery",
    category: "discovery",
    commandPattern: "nmap -PY2905 {timing} {target}",
    description: "Sends SCTP INIT chunks to probe telecom and SS7/SIGTRAN nodes.",
    whenToUse: "Telecommunications and cellular network infrastructure auditing.",
    speedLevel: 3,
    stealthLevel: 4,
    riskLevel: "Low",
    keywords: ["sctp", "telecom", "py", "sigtran"],
    flagExplanations: {
      "-PY2905": "Sends SCTP INIT chunk to port 2905."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nHost is up."
  },

  // 2. PORT SCANNING
  {
    id: "cmd_syn_stealth",
    name: "TCP SYN Stealth Scan",
    category: "port_scan",
    commandPattern: "nmap -sS {timing} {ports} {flags} {target}",
    description: "Half-open TCP scan. Does not complete 3-way handshake; fast and default.",
    whenToUse: "Primary reconnaissance scan for root users; fast, stealthy, and reliable.",
    speedLevel: 5,
    stealthLevel: 4,
    riskLevel: "Low",
    keywords: ["syn scan", "ss", "stealth scan", "half open", "default scan"],
    flagExplanations: {
      "-sS": "TCP SYN stealth scan (half-open)."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT    STATE SERVICE\n22/tcp  open  ssh\n80/tcp  open  http\n443/tcp open  https\nNmap done: 1 IP address scanned in 1.23 seconds."
  },
  {
    id: "cmd_connect_scan",
    name: "TCP Connect Scan",
    category: "port_scan",
    commandPattern: "nmap -sT {timing} {ports} {flags} {target}",
    description: "Completes full 3-way TCP handshake. Used when running without root privileges.",
    whenToUse: "Non-root user audits or when scanning through application proxies.",
    speedLevel: 4,
    stealthLevel: 2,
    riskLevel: "Low",
    keywords: ["connect scan", "st", "full handshake", "non root"],
    flagExplanations: {
      "-sT": "Establishes full TCP connection."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT   STATE SERVICE\n80/tcp open  http\nNmap done: 1 IP address scanned in 2.10 seconds."
  },
  {
    id: "cmd_udp_scan",
    name: "UDP Services Scan",
    category: "port_scan",
    commandPattern: "nmap -sU {timing} {ports} {flags} {target}",
    description: "Scans connectionless UDP ports (DNS 53, SNMP 161, DHCP 67, NTP 123).",
    whenToUse: "Auditing UDP-based services during comprehensive security assessments.",
    speedLevel: 2,
    stealthLevel: 3,
    riskLevel: "Medium",
    keywords: ["udp scan", "su", "dns", "snmp", "ntp"],
    flagExplanations: {
      "-sU": "UDP port scan."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT    STATE         SERVICE\n53/udp  open          domain\n161/udp open|filtered snmp"
  },
  {
    id: "cmd_full_port_scan",
    name: "All 65,535 Ports Scan",
    category: "port_scan",
    commandPattern: "nmap -p- {timing} {flags} {target}",
    description: "Scans all 65,535 TCP ports to discover non-standard high ports.",
    whenToUse: "Thorough security audits to ensure no hidden backdoors or services exist.",
    speedLevel: 2,
    stealthLevel: 2,
    riskLevel: "Medium",
    keywords: ["full scan", "p-", "65535", "all ports"],
    flagExplanations: {
      "-p-": "Scans all ports from 1 to 65535."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT      STATE SERVICE\n22/tcp    open  ssh\n80/tcp    open  http\n8080/tcp  open  http-proxy\n31337/tcp open  EliteBackdoor"
  },
  {
    id: "cmd_fast_scan",
    name: "Fast Top 100 Ports Scan",
    category: "port_scan",
    commandPattern: "nmap -F {timing} {flags} {target}",
    description: "Scans only top 100 most common ports instead of default 1,000 ports.",
    whenToUse: "Quick triage assessments when time is critical.",
    speedLevel: 5,
    stealthLevel: 4,
    riskLevel: "Low",
    keywords: ["fast scan", "top 100", "F"],
    flagExplanations: {
      "-F": "Fast mode: scans top 100 ports."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT   STATE SERVICE\n80/tcp open  http"
  },
  {
    id: "cmd_null_scan",
    name: "TCP Null Scan",
    category: "port_scan",
    commandPattern: "nmap -sN {timing} {ports} {target}",
    description: "Sends TCP packets with no control flags set (ECE, URG, ACK, PSH, RST, SYN = 0).",
    whenToUse: "Bypassing non-stateful firewalls and RFC 793 compliant UNIX systems.",
    speedLevel: 4,
    stealthLevel: 5,
    riskLevel: "Medium",
    keywords: ["null scan", "sn", "no flags"],
    flagExplanations: {
      "-sN": "Sets no TCP control flags."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT   STATE         SERVICE\n80/tcp open|filtered http"
  },
  {
    id: "cmd_fin_scan",
    name: "TCP FIN Scan",
    category: "port_scan",
    commandPattern: "nmap -sF {timing} {ports} {target}",
    description: "Sends TCP packets with only FIN flag set to probe firewall statefulness.",
    whenToUse: "Stealth scanning against Unix/Linux targets behind simple packet filters.",
    speedLevel: 4,
    stealthLevel: 5,
    riskLevel: "Medium",
    keywords: ["fin scan", "sf"],
    flagExplanations: {
      "-sF": "Sets FIN flag only."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT   STATE         SERVICE\n80/tcp open|filtered http"
  },
  {
    id: "cmd_xmas_scan",
    name: "TCP Xmas Scan",
    category: "port_scan",
    commandPattern: "nmap -sX {timing} {ports} {target}",
    description: "Sets FIN, URG, and PSH flags ('lit up like a Christmas tree').",
    whenToUse: "Probing firewall rules and stateless packet inspection engines.",
    speedLevel: 4,
    stealthLevel: 5,
    riskLevel: "Medium",
    keywords: ["xmas scan", "sx", "christmas tree"],
    flagExplanations: {
      "-sX": "Sets FIN, PSH, and URG flags."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT   STATE         SERVICE\n80/tcp open|filtered http"
  },

  // 3. SERVICE & OS DETECTION
  {
    id: "cmd_service_version",
    name: "Service Version Detection",
    category: "service_os",
    commandPattern: "nmap -sV {timing} {ports} {target}",
    description: "Probes open ports to determine exact application service name and version string.",
    whenToUse: "Identifying outdated or vulnerable software versions running on open ports.",
    speedLevel: 3,
    stealthLevel: 3,
    riskLevel: "Low",
    keywords: ["service version", "sv", "banner grab", "version detection"],
    flagExplanations: {
      "-sV": "Enables service version detection."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.1\n80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))"
  },
  {
    id: "cmd_os_detection",
    name: "OS Fingerprinting",
    category: "service_os",
    commandPattern: "nmap -O {timing} {target}",
    description: "Analyzes TCP/IP stack responsiveness to identify target Operating System.",
    whenToUse: "Determining whether target runs Linux, Windows, macOS, or FreeBSD.",
    speedLevel: 3,
    stealthLevel: 3,
    riskLevel: "Medium",
    keywords: ["os detection", "O", "operating system", "fingerprint"],
    flagExplanations: {
      "-O": "Enables OS detection algorithm."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nDevice type: general purpose\nRunning: Linux 5.X\nOS CPE: cpe:/o:linux:linux_kernel:5\nOS details: Linux 5.4 - 5.15"
  },
  {
    id: "cmd_aggressive_scan",
    name: "Aggressive Scan All-in-One",
    category: "service_os",
    commandPattern: "nmap -A {timing} {target}",
    description: "Enables OS detection (-O), Version detection (-sV), Default scripts (-sC), and Traceroute.",
    whenToUse: "Comprehensive single-target audit when stealth is not required.",
    speedLevel: 2,
    stealthLevel: 1,
    riskLevel: "High",
    keywords: ["aggressive scan", "A", "all in one", "traceroute"],
    flagExplanations: {
      "-A": "Enables OS, version, script, and traceroute."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT   STATE SERVICE VERSION\n80/tcp open  http    Apache httpd 2.4.52\n|_http-title: Welcome to Cyber Target\nOS details: Linux 5.10\nTRACEROUTE\nHOP RTT     ADDRESS\n1   0.85 ms 192.168.1.1"
  },

  // 4. VULNERABILITY SCRIPTS (NSE)
  {
    id: "cmd_nse_vuln",
    name: "NSE Vulnerability Audit Engine",
    category: "vuln_scripts",
    commandPattern: "nmap -sV --script=vuln {timing} {target}",
    description: "Runs Nmap Scripting Engine vulnerability scripts (CVE checking).",
    whenToUse: "Automated vulnerability scanning against web servers and services.",
    speedLevel: 2,
    stealthLevel: 2,
    riskLevel: "High",
    keywords: ["vuln script", "nse vuln", "cve audit", "vulnerability scan"],
    flagExplanations: {
      "--script=vuln": "Executes 'vuln' script category."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT   STATE SERVICE\n80/tcp open  http\n| http-vuln-cve2017-5638:\n|   VULNERABLE:\n|   Apache Struts Remote Code Execution\n|_  State: VULNERABLE (CVE-2017-5638)"
  },
  {
    id: "cmd_eternalblue_scan",
    name: "SMB EternalBlue Vulnerability Check",
    category: "vuln_scripts",
    commandPattern: "nmap -p 445 --script=smb-vuln-ms17-010 {target}",
    description: "Audits target for MS17-010 EternalBlue SMB vulnerability.",
    whenToUse: "Assessing Windows hosts for ransomware/EternalBlue vulnerability.",
    speedLevel: 4,
    stealthLevel: 3,
    riskLevel: "High",
    keywords: ["eternalblue", "ms17-010", "smb vuln", "cve-2017-0144"],
    flagExplanations: {
      "--script=smb-vuln-ms17-010": "Checks MS17-010 EternalBlue vulnerability."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.10\nPORT    STATE SERVICE\n445/tcp open  microsoft-ds\n| smb-vuln-ms17-010:\n|   VULNERABLE:\n|   Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)"
  },
  {
    id: "cmd_heartbleed_scan",
    name: "OpenSSL Heartbleed Audit",
    category: "vuln_scripts",
    commandPattern: "nmap -p 443 --script=ssl-heartbleed {target}",
    description: "Checks SSL/TLS services for OpenSSL Heartbleed vulnerability (CVE-2014-0160).",
    whenToUse: "Auditing web servers and VPN gateways for SSL memory leak vulnerabilities.",
    speedLevel: 4,
    stealthLevel: 3,
    riskLevel: "Medium",
    keywords: ["heartbleed", "ssl-heartbleed", "cve-2014-0160"],
    flagExplanations: {
      "--script=ssl-heartbleed": "Probes TLS heartbeat extension."
    },
    mockOutput: "Starting Nmap 7.94\nNmap scan report for 192.168.1.1\nPORT    STATE SERVICE\n443/tcp open  https\n| ssl-heartbleed:\n|_  NOT VULNERABLE"
  },

  // 5. FIREWALL EVASION
  {
    id: "cmd_no_ping",
    name: "Disable Ping Host Probe (No-Ping)",
    category: "evasion",
    commandPattern: "nmap -Pn {timing} {ports} {target}",
    description: "Skips ICMP host discovery and assumes host is online.",
    whenToUse: "Scanning targets protected by firewalls that drop ICMP ping packets.",
    speedLevel: 4,
    stealthLevel: 4,
    riskLevel: "Low",
    keywords: ["pingless", "pn", "no ping", "firewall bypass"],
    flagExplanations: {
      "-Pn": "Treats all targets as online; skips host discovery."
    },
    mockOutput: "Starting Nmap 7.94\nHost discovery disabled. Scanning 192.168.1.1...\nPORT   STATE SERVICE\n80/tcp open  http"
  },
  {
    id: "cmd_decoy_scan",
    name: "Decoy IP Address Obfuscation",
    category: "evasion",
    commandPattern: "nmap -D RND:10 {timing} {target}",
    description: "Generates 10 fake random source IP addresses alongside your real IP address.",
    whenToUse: "Concealing true scanner IP address in target IDS/IPS alert logs.",
    speedLevel: 3,
    stealthLevel: 5,
    riskLevel: "Medium",
    keywords: ["decoy", "D", "spoof ip", "ids evasion"],
    flagExplanations: {
      "-D RND:10": "Generates 10 random fake decoy source IPs."
    },
    mockOutput: "Starting Nmap 7.94\nSpoofing 10 decoy IPs...\nNmap scan report for 192.168.1.1"
  },
  {
    id: "cmd_fragment_packets",
    name: "Packet Fragmentation",
    category: "evasion",
    commandPattern: "nmap -f {timing} {target}",
    description: "Splits TCP header into 8-byte fragments to evade simple packet inspection.",
    whenToUse: "Bypassing legacy packet-filtering firewalls.",
    speedLevel: 4,
    stealthLevel: 4,
    riskLevel: "Medium",
    keywords: ["fragmentation", "f", "split packets"],
    flagExplanations: {
      "-f": "Fragments IP header into small 8-byte pieces."
    },
    mockOutput: "Starting Nmap 7.94\nFragmenting packets...\nNmap scan report for 192.168.1.1"
  },
  {
    id: "cmd_source_port_dns",
    name: "Source Port Spoofing (Port 53)",
    category: "evasion",
    commandPattern: "nmap --source-port 53 {timing} {target}",
    description: "Forces Nmap to send scan packets from DNS source port 53.",
    whenToUse: "Bypassing firewalls configured to trust traffic originating from DNS/NTP ports.",
    speedLevel: 4,
    stealthLevel: 4,
    riskLevel: "Medium",
    keywords: ["source port 53", "g 53", "dns port spoof"],
    flagExplanations: {
      "--source-port 53": "Sets source port to 53."
    },
    mockOutput: "Starting Nmap 7.94\nSource port set to 53.\nNmap scan report for 192.168.1.1"
  }
];
