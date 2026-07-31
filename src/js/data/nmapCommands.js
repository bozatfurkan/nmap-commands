/**
 * Comprehensive 100 Real-World Nmap Commands Dataset
 * Categories: discovery, port_scan, service_os, vuln_scripts, evasion, advanced
 */

export const NMAP_COMMANDS = [
  // ==================== 1. HOST DISCOVERY (15 COMMANDS) ====================
  {
    id: "cmd_disc_ping_sweep",
    name: "Subnet Ping Sweep",
    category: "discovery",
    commandPattern: "nmap -sn {timing} {target}",
    description: "Discovers active hosts on subnet without performing port scans.",
    whenToUse: "Initial network reconnaissance to map active IP addresses on a local subnet.",
    speedLevel: 5, stealthLevel: 4, riskLevel: "Low",
    keywords: ["ping sweep", "host discovery", "sny scn", "sn", "active hosts"],
    flagExplanations: { "-sn": "Disables port scanning after host discovery." }
  },
  {
    id: "cmd_disc_arp",
    name: "Local ARP Host Discovery",
    category: "discovery",
    commandPattern: "nmap -PR {timing} {target}",
    description: "Uses ARP requests to discover hosts on local Ethernet subnets.",
    whenToUse: "Local LAN auditing where target hosts block ICMP ping requests.",
    speedLevel: 5, stealthLevel: 3, riskLevel: "Low",
    keywords: ["arp", "local lan", "mac address", "ethernet"],
    flagExplanations: { "-PR": "Perform ARP discovery on local subnets." }
  },
  {
    id: "cmd_disc_syn_ping",
    name: "TCP SYN Host Ping Probe",
    category: "discovery",
    commandPattern: "nmap -PS80,443 {timing} {target}",
    description: "Sends TCP SYN packets to port 80 and 443 to probe host liveness.",
    whenToUse: "Bypassing ICMP echo request filters when target blocks ping.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Low",
    keywords: ["syn ping", "ps", "port 80", "port 443"],
    flagExplanations: { "-PS80,443": "Sends SYN packets to ports 80 and 443." }
  },
  {
    id: "cmd_disc_ack_ping",
    name: "TCP ACK Host Ping Probe",
    category: "discovery",
    commandPattern: "nmap -PA80,443 {timing} {target}",
    description: "Sends TCP ACK packets to bypass stateless firewall filters during host discovery.",
    whenToUse: "Penetrating simple packet-filtering firewalls during discovery.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Low",
    keywords: ["ack ping", "pa", "firewall bypass"],
    flagExplanations: { "-PA80,443": "Sends ACK packets to ports 80 and 443." }
  },
  {
    id: "cmd_disc_udp_ping",
    name: "UDP Host Discovery Probe",
    category: "discovery",
    commandPattern: "nmap -PU53,161 {timing} {target}",
    description: "Sends empty UDP packets to ports 53 and 161 to discover unresponsive TCP hosts.",
    whenToUse: "Finding hosts that block all TCP SYN/ACK ping probes.",
    speedLevel: 3, stealthLevel: 3, riskLevel: "Low",
    keywords: ["udp ping", "pu", "dns ping"],
    flagExplanations: { "-PU53,161": "Sends UDP discovery probes." }
  },
  {
    id: "cmd_disc_icmp_echo",
    name: "ICMP Echo Request Discovery",
    category: "discovery",
    commandPattern: "nmap -PE {timing} {target}",
    description: "Sends standard ICMP echo requests for host discovery.",
    whenToUse: "Standard network discovery on permissive corporate networks.",
    speedLevel: 5, stealthLevel: 2, riskLevel: "Low",
    keywords: ["icmp ping", "pe", "echo request"],
    flagExplanations: { "-PE": "Sends ICMP echo request probe." }
  },
  {
    id: "cmd_disc_icmp_timestamp",
    name: "ICMP Timestamp Query Discovery",
    category: "discovery",
    commandPattern: "nmap -PP {timing} {target}",
    description: "Sends ICMP timestamp request packets to discover host liveness.",
    whenToUse: "Bypassing firewalls that block standard ICMP Echo (ping).",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Low",
    keywords: ["timestamp ping", "pp", "icmp timestamp"],
    flagExplanations: { "-PP": "Sends ICMP timestamp query." }
  },
  {
    id: "cmd_disc_icmp_mask",
    name: "ICMP Netmask Probe Discovery",
    category: "discovery",
    commandPattern: "nmap -PM {timing} {target}",
    description: "Sends ICMP netmask query requests for host discovery.",
    whenToUse: "Alternate ICMP probe when ICMP Echo is blocked.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Low",
    keywords: ["netmask ping", "pm", "icmp mask"],
    flagExplanations: { "-PM": "Sends ICMP address mask query." }
  },
  {
    id: "cmd_disc_sctp_init",
    name: "SCTP INIT Ping Discovery",
    category: "discovery",
    commandPattern: "nmap -PY2905 {timing} {target}",
    description: "Sends SCTP INIT chunks to probe telecom and SS7/SIGTRAN nodes.",
    whenToUse: "Telecommunications and cellular network infrastructure auditing.",
    speedLevel: 3, stealthLevel: 4, riskLevel: "Low",
    keywords: ["sctp", "telecom", "py", "sigtran"],
    flagExplanations: { "-PY2905": "Sends SCTP INIT chunk to port 2905." }
  },
  {
    id: "cmd_disc_ip_protocol",
    name: "IP Protocol Ping Discovery",
    category: "discovery",
    commandPattern: "nmap -PO1,2,4 {timing} {target}",
    description: "Sends raw IP packets with specified protocol headers (ICMP, IGMP, IP-in-IP).",
    whenToUse: "Advanced firewall evasion during host discovery.",
    speedLevel: 3, stealthLevel: 4, riskLevel: "Low",
    keywords: ["ip protocol", "po", "raw ip"],
    flagExplanations: { "-PO1,2,4": "Probes IP protocols 1 (ICMP), 2 (IGMP), 4 (IP-in-IP)." }
  },
  {
    id: "cmd_disc_traceroute",
    name: "Hop-by-Hop Traceroute Probe",
    category: "discovery",
    commandPattern: "nmap --traceroute {timing} {target}",
    description: "Traces network hop path to target using dynamic TTL decrements.",
    whenToUse: "Mapping network topology and identifying intermediate firewall routers.",
    speedLevel: 3, stealthLevel: 2, riskLevel: "Low",
    keywords: ["traceroute", "route map", "hops", "ttl"],
    flagExplanations: { "--traceroute": "Traces network hop path to target." }
  },
  {
    id: "cmd_disc_no_dns",
    name: "Disable Reverse DNS Resolution",
    category: "discovery",
    commandPattern: "nmap -n -sn {timing} {target}",
    description: "Discovers active hosts while skipping reverse DNS (PTR) lookups for maximum speed.",
    whenToUse: "High-speed subnet scans to avoid DNS server overload.",
    speedLevel: 5, stealthLevel: 4, riskLevel: "Low",
    keywords: ["no dns", "n", "fast discovery"],
    flagExplanations: { "-n": "Never do reverse DNS resolution." }
  },
  {
    id: "cmd_disc_force_dns",
    name: "Force Reverse DNS Resolution All Hosts",
    category: "discovery",
    commandPattern: "nmap -R -sn {timing} {target}",
    description: "Forces reverse DNS resolution for all IP addresses in target range.",
    whenToUse: "Mapping domain hostnames for unresponsive IP addresses.",
    speedLevel: 3, stealthLevel: 3, riskLevel: "Low",
    keywords: ["force dns", "R", "ptr record"],
    flagExplanations: { "-R": "Always resolve reverse DNS for target IPs." }
  },
  {
    id: "cmd_disc_system_dns",
    name: "System DNS Resolver Lookup",
    category: "discovery",
    commandPattern: "nmap --system-dns {timing} {target}",
    description: "Uses OS system DNS resolver instead of Nmap's parallel DNS engine.",
    whenToUse: "Internal corporate networks requiring domain controller DNS lookups.",
    speedLevel: 3, stealthLevel: 4, riskLevel: "Low",
    keywords: ["system dns", "os dns", "internal dns"],
    flagExplanations: { "--system-dns": "Uses host OS DNS resolver." }
  },
  {
    id: "cmd_disc_custom_dns",
    name: "Custom DNS Server Query Probe",
    category: "discovery",
    commandPattern: "nmap --dns-servers 1.1.1.1,8.8.8.8 -sn {target}",
    description: "Queries specified external DNS servers for hostname resolution during discovery.",
    whenToUse: "Bypassing local DNS logging by sending PTR queries to public resolvers.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Low",
    keywords: ["dns servers", "custom dns", "cloudflare dns"],
    flagExplanations: { "--dns-servers": "Specifies custom DNS servers." }
  },

  // ==================== 2. PORT SCANNING (20 COMMANDS) ====================
  {
    id: "cmd_scan_syn_stealth",
    name: "TCP SYN Stealth Scan",
    category: "port_scan",
    commandPattern: "nmap -sS {timing} {ports} {flags} {target}",
    description: "Half-open TCP scan. Does not complete 3-way handshake; fast and default.",
    whenToUse: "Primary reconnaissance scan for root users; fast, stealthy, and reliable.",
    speedLevel: 5, stealthLevel: 4, riskLevel: "Low",
    keywords: ["syn scan", "ss", "stealth scan", "half open", "default scan"],
    flagExplanations: { "-sS": "TCP SYN stealth scan (half-open)." }
  },
  {
    id: "cmd_scan_connect",
    name: "TCP Connect Scan",
    category: "port_scan",
    commandPattern: "nmap -sT {timing} {ports} {flags} {target}",
    description: "Completes full 3-way TCP handshake. Used when running without root privileges.",
    whenToUse: "Non-root user audits or when scanning through application proxies.",
    speedLevel: 4, stealthLevel: 2, riskLevel: "Low",
    keywords: ["connect scan", "st", "full handshake", "non root"],
    flagExplanations: { "-sT": "Establishes full TCP connection." }
  },
  {
    id: "cmd_scan_udp",
    name: "UDP Services Scan",
    category: "port_scan",
    commandPattern: "nmap -sU {timing} {ports} {flags} {target}",
    description: "Scans connectionless UDP ports (DNS 53, SNMP 161, DHCP 67, NTP 123).",
    whenToUse: "Auditing UDP-based services during comprehensive security assessments.",
    speedLevel: 2, stealthLevel: 3, riskLevel: "Medium",
    keywords: ["udp scan", "su", "dns", "snmp", "ntp"],
    flagExplanations: { "-sU": "UDP port scan." }
  },
  {
    id: "cmd_scan_full_ports",
    name: "All 65,535 Ports Scan",
    category: "port_scan",
    commandPattern: "nmap -p- {timing} {flags} {target}",
    description: "Scans all 65,535 TCP ports to discover non-standard high ports.",
    whenToUse: "Thorough security audits to ensure no hidden backdoors or services exist.",
    speedLevel: 2, stealthLevel: 2, riskLevel: "Medium",
    keywords: ["full scan", "p-", "65535", "all ports"],
    flagExplanations: { "-p-": "Scans all ports from 1 to 65535." }
  },
  {
    id: "cmd_scan_fast_top100",
    name: "Fast Top 100 Ports Scan",
    category: "port_scan",
    commandPattern: "nmap -F {timing} {flags} {target}",
    description: "Scans only top 100 most common ports instead of default 1,000 ports.",
    whenToUse: "Quick triage assessments when time is critical.",
    speedLevel: 5, stealthLevel: 4, riskLevel: "Low",
    keywords: ["fast scan", "top 100", "F"],
    flagExplanations: { "-F": "Fast mode: scans top 100 ports." }
  },
  {
    id: "cmd_scan_top_ports",
    name: "Custom Top N Ports Scan",
    category: "port_scan",
    commandPattern: "nmap --top-ports 500 {timing} {flags} {target}",
    description: "Scans specified number of top most frequent ports (e.g., top 500).",
    whenToUse: "Balancing scan thoroughness with speed.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Low",
    keywords: ["top-ports", "top 500", "frequent ports"],
    flagExplanations: { "--top-ports 500": "Scans top 500 ports." }
  },
  {
    id: "cmd_scan_sequential",
    name: "Sequential Port Scan Order",
    category: "port_scan",
    commandPattern: "nmap -r {timing} {ports} {target}",
    description: "Scans ports sequentially (1 to 1024) instead of randomizing order.",
    whenToUse: "Debugging specific sequential port ranges or testing firewall state tracking.",
    speedLevel: 4, stealthLevel: 2, riskLevel: "Low",
    keywords: ["sequential", "r", "port order"],
    flagExplanations: { "-r": "Don't randomize port order." }
  },
  {
    id: "cmd_scan_null",
    name: "TCP Null Scan",
    category: "port_scan",
    commandPattern: "nmap -sN {timing} {ports} {target}",
    description: "Sends TCP packets with no control flags set (ECE, URG, ACK, PSH, RST, SYN = 0).",
    whenToUse: "Bypassing non-stateful firewalls and RFC 793 compliant UNIX systems.",
    speedLevel: 4, stealthLevel: 5, riskLevel: "Medium",
    keywords: ["null scan", "sn", "no flags"],
    flagExplanations: { "-sN": "Sets no TCP control flags." }
  },
  {
    id: "cmd_scan_fin",
    name: "TCP FIN Scan",
    category: "port_scan",
    commandPattern: "nmap -sF {timing} {ports} {target}",
    description: "Sends TCP packets with only FIN flag set to probe firewall statefulness.",
    whenToUse: "Stealth scanning against Unix/Linux targets behind simple packet filters.",
    speedLevel: 4, stealthLevel: 5, riskLevel: "Medium",
    keywords: ["fin scan", "sf"],
    flagExplanations: { "-sF": "Sets FIN flag only." }
  },
  {
    id: "cmd_scan_xmas",
    name: "TCP Xmas Scan",
    category: "port_scan",
    commandPattern: "nmap -sX {timing} {ports} {target}",
    description: "Sets FIN, URG, and PSH flags ('lit up like a Christmas tree').",
    whenToUse: "Probing firewall rules and stateless packet inspection engines.",
    speedLevel: 4, stealthLevel: 5, riskLevel: "Medium",
    keywords: ["xmas scan", "sx", "christmas tree"],
    flagExplanations: { "-sX": "Sets FIN, PSH, and URG flags." }
  },
  {
    id: "cmd_scan_ack",
    name: "TCP ACK Firewall Mapping Scan",
    category: "port_scan",
    commandPattern: "nmap -sA {timing} {ports} {target}",
    description: "Sends ACK packets to map firewall rule sets and determine whether ports are filtered.",
    whenToUse: "Determining whether firewalls are stateful or stateless without opening ports.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Low",
    keywords: ["ack scan", "sa", "firewall map"],
    flagExplanations: { "-sA": "TCP ACK scan for firewall rule mapping." }
  },
  {
    id: "cmd_scan_window",
    name: "TCP Window Scan",
    category: "port_scan",
    commandPattern: "nmap -sW {timing} {ports} {target}",
    description: "Examines TCP Window size in returned RST packets to detect open ports on specific OS types.",
    whenToUse: "Advanced port state detection on specialized network appliances.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Low",
    keywords: ["window scan", "sw", "tcp window"],
    flagExplanations: { "-sW": "TCP Window scan." }
  },
  {
    id: "cmd_scan_maimon",
    name: "Maimon TCP Scan",
    category: "port_scan",
    commandPattern: "nmap -sM {timing} {ports} {target}",
    description: "Sends FIN/ACK probes named after Uriel Maimon.",
    whenToUse: "Probing BSD-derived TCP/IP stack implementations.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Medium",
    keywords: ["maimon", "sm", "fin ack"],
    flagExplanations: { "-sM": "Maimon FIN/ACK scan." }
  },
  {
    id: "cmd_scan_sctp_init",
    name: "SCTP INIT Scan",
    category: "port_scan",
    commandPattern: "nmap -sZ {timing} {ports} {target}",
    description: "Performs SCTP INIT scan against telecommunication endpoints.",
    whenToUse: "Auditing SIGTRAN / SS7 / Diameter protocol handlers.",
    speedLevel: 3, stealthLevel: 4, riskLevel: "Low",
    keywords: ["sctp init", "sz", "telecom port"],
    flagExplanations: { "-sZ": "SCTP INIT scan." }
  },
  {
    id: "cmd_scan_sctp_cookie",
    name: "SCTP COOKIE-ECHO Scan",
    category: "port_scan",
    commandPattern: "nmap -sY {timing} {ports} {target}",
    description: "Sends SCTP COOKIE-ECHO chunks to detect active SCTP services stealthily.",
    whenToUse: "Stealth auditing of cellular network routers.",
    speedLevel: 3, stealthLevel: 5, riskLevel: "Low",
    keywords: ["sctp cookie", "sy"],
    flagExplanations: { "-sY": "SCTP COOKIE-ECHO scan." }
  },
  {
    id: "cmd_scan_idle_zombie",
    name: "IPID Idle Zombie Scan",
    category: "port_scan",
    commandPattern: "nmap -sI 192.168.1.50 {timing} {target}",
    description: "Blinded zombie scan using IP ID sequence prediction of a third-party host.",
    whenToUse: "100% anonymous port scanning where probe packets originate from zombie IP.",
    speedLevel: 1, stealthLevel: 5, riskLevel: "High",
    keywords: ["idle scan", "zombie scan", "sI", "anonymous scan"],
    flagExplanations: { "-sI 192.168.1.50": "Uses 192.168.1.50 as zombie host." }
  },
  {
    id: "cmd_scan_ftp_bounce",
    name: "FTP Bounce Relay Scan",
    category: "port_scan",
    commandPattern: "nmap -b ftpuser:ftppass@192.168.1.20 {target}",
    description: "Relays port scan probes through a vulnerable FTP proxy server.",
    whenToUse: "Bypassing internal firewalls by bouncing scans off an internal FTP host.",
    speedLevel: 2, stealthLevel: 5, riskLevel: "High",
    keywords: ["ftp bounce", "b", "relay scan"],
    flagExplanations: { "-b": "FTP bounce attack relay parameter." }
  },
  {
    id: "cmd_scan_web_ports",
    name: "Web Services Port Scope",
    category: "port_scan",
    commandPattern: "nmap -p 80,443,8080,8443 {timing} {flags} {target}",
    description: "Targeted scan limited to HTTP/HTTPS web application listener ports.",
    whenToUse: "Initial web application penetration testing recon.",
    speedLevel: 5, stealthLevel: 4, riskLevel: "Low",
    keywords: ["web ports", "http ports", "80", "443"],
    flagExplanations: { "-p 80,443,8080,8443": "Scans common web ports." }
  },
  {
    id: "cmd_scan_database_ports",
    name: "Database Services Port Scope",
    category: "port_scan",
    commandPattern: "nmap -p 1433,1521,3306,5432,27017,6379 {timing} {target}",
    description: "Targeted scan of database ports (MSSQL, Oracle, MySQL, Postgres, Mongo, Redis).",
    whenToUse: "Auditing database infrastructure exposure.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Low",
    keywords: ["database ports", "mysql", "postgres", "mongodb", "redis"],
    flagExplanations: { "-p 1433,1521,3306,5432,27017,6379": "Database port list." }
  },
  {
    id: "cmd_scan_exclude_ports",
    name: "Exclude Specific Busy Ports",
    category: "port_scan",
    commandPattern: "nmap -p 1-10000 --exclude-ports 80,443 {timing} {target}",
    description: "Scans port range while skipping high-traffic web ports to avoid log clutter.",
    whenToUse: "Focusing audits on non-web services.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Low",
    keywords: ["exclude ports", "skip ports"],
    flagExplanations: { "--exclude-ports 80,443": "Excludes specified ports." }
  },

  // ==================== 3. SERVICE & OS DETECTION (15 COMMANDS) ====================
  {
    id: "cmd_serv_version_standard",
    name: "Service Version Fingerprinting",
    category: "service_os",
    commandPattern: "nmap -sV {timing} {ports} {target}",
    description: "Probes open ports to determine exact application service name and version string.",
    whenToUse: "Identifying outdated or vulnerable software versions running on open ports.",
    speedLevel: 3, stealthLevel: 3, riskLevel: "Low",
    keywords: ["service version", "sv", "banner grab", "version detection"],
    flagExplanations: { "-sV": "Enables service version detection." }
  },
  {
    id: "cmd_serv_os_detection",
    name: "OS Fingerprinting",
    category: "service_os",
    commandPattern: "nmap -O {timing} {target}",
    description: "Analyzes TCP/IP stack responsiveness to identify target Operating System.",
    whenToUse: "Determining whether target runs Linux, Windows, macOS, or FreeBSD.",
    speedLevel: 3, stealthLevel: 3, riskLevel: "Medium",
    keywords: ["os detection", "O", "operating system", "fingerprint"],
    flagExplanations: { "-O": "Enables OS detection algorithm." }
  },
  {
    id: "cmd_serv_aggressive",
    name: "Aggressive Scan All-in-One",
    category: "service_os",
    commandPattern: "nmap -A {timing} {target}",
    description: "Enables OS detection (-O), Version detection (-sV), Default scripts (-sC), and Traceroute.",
    whenToUse: "Comprehensive single-target audit when stealth is not required.",
    speedLevel: 2, stealthLevel: 1, riskLevel: "High",
    keywords: ["aggressive scan", "A", "all in one", "traceroute"],
    flagExplanations: { "-A": "Enables OS, version, script, and traceroute." }
  },
  {
    id: "cmd_serv_intensity_max",
    name: "Maximum Version Intensity Audit",
    category: "service_os",
    commandPattern: "nmap -sV --version-intensity 9 {timing} {target}",
    description: "Executes all version probes (intensity 9) for maximum service detection accuracy.",
    whenToUse: "Identifying obscure or heavily customized server application banners.",
    speedLevel: 2, stealthLevel: 2, riskLevel: "Medium",
    keywords: ["version intensity", "version-all", "intensity 9"],
    flagExplanations: { "--version-intensity 9": "Sets maximum probe intensity." }
  },
  {
    id: "cmd_serv_version_light",
    name: "Lightweight Version Probe",
    category: "service_os",
    commandPattern: "nmap -sV --version-light {timing} {target}",
    description: "Executes only light version probes (intensity 2) for faster scan completion.",
    whenToUse: "High-speed service scans across large subnets.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Low",
    keywords: ["version light", "fast version"],
    flagExplanations: { "--version-light": "Sets probe intensity to 2." }
  },
  {
    id: "cmd_serv_version_trace",
    name: "Version Probe Execution Trace Log",
    category: "service_os",
    commandPattern: "nmap -sV --version-trace {timing} {target}",
    description: "Prints verbose debugging information showing exact sent/received banner packets.",
    whenToUse: "Debugging unrecognized service banners or signature writing.",
    speedLevel: 2, stealthLevel: 2, riskLevel: "Low",
    keywords: ["version trace", "debug version"],
    flagExplanations: { "--version-trace": "Logs detailed version probing transactions." }
  },
  {
    id: "cmd_serv_os_limit",
    name: "Limit OS Scan to Promising Targets",
    category: "service_os",
    commandPattern: "nmap -O --osscan-limit {timing} {target}",
    description: "Skips OS detection if host lacks at least one open and one closed TCP port.",
    whenToUse: "Saving scan time on hosts protected by firewalls.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Low",
    keywords: ["osscan-limit", "os limit"],
    flagExplanations: { "--osscan-limit": "Limits OS detection to ideal hosts." }
  },
  {
    id: "cmd_serv_os_guess",
    name: "Aggressive OS Fingerprint Guessing",
    category: "service_os",
    commandPattern: "nmap -O --osscan-guess {timing} {target}",
    description: "Forces Nmap to guess target OS aggressively even when signatures do not match 100%.",
    whenToUse: "Analyzing hardened or unusual embedded OS devices.",
    speedLevel: 3, stealthLevel: 2, riskLevel: "Medium",
    keywords: ["osscan-guess", "fuzzy os"],
    flagExplanations: { "--osscan-guess": "Forces aggressive OS matching." }
  },

  // ==================== 4. VULNERABILITY SCRIPTS NSE (20 COMMANDS) ====================
  {
    id: "cmd_nse_vuln_engine",
    name: "NSE Vulnerability Audit Engine",
    category: "vuln_scripts",
    commandPattern: "nmap -sV --script=vuln {timing} {target}",
    description: "Runs Nmap Scripting Engine vulnerability scripts (CVE checking).",
    whenToUse: "Automated vulnerability scanning against web servers and services.",
    speedLevel: 2, stealthLevel: 2, riskLevel: "High",
    keywords: ["vuln script", "nse vuln", "cve audit", "vulnerability scan"],
    flagExplanations: { "--script=vuln": "Executes 'vuln' script category." }
  },
  {
    id: "cmd_nse_eternalblue",
    name: "SMB EternalBlue Vulnerability Check",
    category: "vuln_scripts",
    commandPattern: "nmap -p 445 --script=smb-vuln-ms17-010 {target}",
    description: "Audits target for MS17-010 EternalBlue SMB vulnerability.",
    whenToUse: "Assessing Windows hosts for ransomware/EternalBlue vulnerability.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "High",
    keywords: ["eternalblue", "ms17-010", "smb vuln", "cve-2017-0144"],
    flagExplanations: { "--script=smb-vuln-ms17-010": "Checks MS17-010 EternalBlue vulnerability." }
  },
  {
    id: "cmd_nse_heartbleed",
    name: "OpenSSL Heartbleed Audit",
    category: "vuln_scripts",
    commandPattern: "nmap -p 443 --script=ssl-heartbleed {target}",
    description: "Checks SSL/TLS services for OpenSSL Heartbleed vulnerability (CVE-2014-0160).",
    whenToUse: "Auditing web servers and VPN gateways for SSL memory leak vulnerabilities.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Medium",
    keywords: ["heartbleed", "ssl-heartbleed", "cve-2014-0160"],
    flagExplanations: { "--script=ssl-heartbleed": "Probes TLS heartbeat extension." }
  },
  {
    id: "cmd_nse_struts",
    name: "Apache Struts RCE Check",
    category: "vuln_scripts",
    commandPattern: "nmap -p 80,443 --script=http-vuln-cve2017-5638 {target}",
    description: "Audits web servers for Apache Struts Jakarta Multipart RCE vulnerability.",
    whenToUse: "Assessing legacy enterprise Java web applications.",
    speedLevel: 4, stealthLevel: 2, riskLevel: "High",
    keywords: ["struts", "cve-2017-5638", "jakarta rce"],
    flagExplanations: { "--script=http-vuln-cve2017-5638": "Probes Struts RCE." }
  },
  {
    id: "cmd_nse_log4j",
    name: "Apache Log4j Log4Shell Audit",
    category: "vuln_scripts",
    commandPattern: "nmap -p 80,443,8080 --script=http-vuln-cve2021-44228 {target}",
    description: "Audits Java HTTP services for Log4Shell Remote Code Execution (CVE-2021-44228).",
    whenToUse: "Emergency vulnerability auditing of enterprise Java applications.",
    speedLevel: 3, stealthLevel: 2, riskLevel: "High",
    keywords: ["log4j", "log4shell", "cve-2021-44228"],
    flagExplanations: { "--script=http-vuln-cve2021-44228": "Checks Log4j JNDI exploit headers." }
  },
  {
    id: "cmd_nse_dns_zone",
    name: "DNS Zone Transfer Audit",
    category: "vuln_scripts",
    commandPattern: "nmap -p 53 --script=dns-zone-transfer --script-args dns-zone-transfer.domain=example.com {target}",
    description: "Attempts unauthenticated AXFR DNS zone transfer to dump all domain subdomains.",
    whenToUse: "Assessing misconfigured DNS nameservers.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Medium",
    keywords: ["dns zone transfer", "axfr", "dns dump"],
    flagExplanations: { "--script=dns-zone-transfer": "Attempts AXFR zone transfer." }
  },
  {
    id: "cmd_nse_ftp_anon",
    name: "FTP Anonymous Login Audit",
    category: "vuln_scripts",
    commandPattern: "nmap -p 21 --script=ftp-anon {target}",
    description: "Tests FTP servers for anonymous user login access (user: anonymous / pass: anonymous).",
    whenToUse: "Auditing file storage servers for open anonymous access.",
    speedLevel: 5, stealthLevel: 4, riskLevel: "Low",
    keywords: ["ftp anon", "anonymous ftp", "port 21"],
    flagExplanations: { "--script=ftp-anon": "Checks anonymous FTP credentials." }
  },
  {
    id: "cmd_nse_ssl_ciphers",
    name: "SSL/TLS Cipher Suite Security Audit",
    category: "vuln_scripts",
    commandPattern: "nmap -p 443 --script=ssl-enum-ciphers {target}",
    description: "Enumerates all supported SSL/TLS ciphers and highlights weak SSLv3 / RC4 / SWEET32 ciphers.",
    whenToUse: "PCI-DSS compliance auditing and TLS hardening reviews.",
    speedLevel: 3, stealthLevel: 4, riskLevel: "Low",
    keywords: ["ssl ciphers", "tls audit", "weak ciphers", "pci dss"],
    flagExplanations: { "--script=ssl-enum-ciphers": "Lists supported TLS ciphers & grades security." }
  },
  {
    id: "cmd_nse_http_enum",
    name: "HTTP Web Directory & File Enumeration",
    category: "vuln_scripts",
    commandPattern: "nmap -p 80,443 --script=http-enum {target}",
    description: "Enumerates common admin portals, backup files, and sensitive web paths.",
    whenToUse: "Initial web application reconnaissance to find hidden admin panels.",
    speedLevel: 3, stealthLevel: 2, riskLevel: "Medium",
    keywords: ["http enum", "directory bruteforce", "admin panel"],
    flagExplanations: { "--script=http-enum": "Probes 2000+ known web application paths." }
  },
  {
    id: "cmd_nse_smb_shares",
    name: "SMB Shared Folders Enumeration",
    category: "vuln_scripts",
    commandPattern: "nmap -p 445 --script=smb-enum-shares,smb-enum-users {target}",
    description: "Enumerates Windows SMB shared directories and domain usernames.",
    whenToUse: "Internal network audits to find accessible network file shares.",
    speedLevel: 3, stealthLevel: 3, riskLevel: "Medium",
    keywords: ["smb shares", "windows shares", "smb users"],
    flagExplanations: { "--script=smb-enum-shares,smb-enum-users": "Lists active SMB shares and users." }
  },

  // ==================== 5. FIREWALL EVASION & DECOYS (15 COMMANDS) ====================
  {
    id: "cmd_evasion_no_ping",
    name: "Disable Ping Host Probe (No-Ping)",
    category: "evasion",
    commandPattern: "nmap -Pn {timing} {ports} {target}",
    description: "Skips ICMP host discovery and assumes host is online.",
    whenToUse: "Scanning targets protected by firewalls that drop ICMP ping packets.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Low",
    keywords: ["pingless", "pn", "no ping", "firewall bypass"],
    flagExplanations: { "-Pn": "Treats all targets as online; skips host discovery." }
  },
  {
    id: "cmd_evasion_decoy",
    name: "Decoy IP Address Obfuscation",
    category: "evasion",
    commandPattern: "nmap -D RND:10 {timing} {target}",
    description: "Generates 10 fake random source IP addresses alongside your real IP address.",
    whenToUse: "Concealing true scanner IP address in target IDS/IPS alert logs.",
    speedLevel: 3, stealthLevel: 5, riskLevel: "Medium",
    keywords: ["decoy", "D", "spoof ip", "ids evasion"],
    flagExplanations: { "-D RND:10": "Generates 10 random fake decoy source IPs." }
  },
  {
    id: "cmd_evasion_fragment",
    name: "Packet Fragmentation",
    category: "evasion",
    commandPattern: "nmap -f {timing} {target}",
    description: "Splits TCP header into 8-byte fragments to evade simple packet inspection.",
    whenToUse: "Bypassing legacy packet-filtering firewalls.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Medium",
    keywords: ["fragmentation", "f", "split packets"],
    flagExplanations: { "-f": "Fragments IP header into small 8-byte pieces." }
  },
  {
    id: "cmd_evasion_mtu",
    name: "Custom MTU Packet Fragmentation",
    category: "evasion",
    commandPattern: "nmap --mtu 16 {timing} {target}",
    description: "Fragments packets using custom MTU size (must be multiple of 8, e.g., 16, 24, 32).",
    whenToUse: "Bypassing firewall rules that reassemble standard 8-byte fragments.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Medium",
    keywords: ["mtu", "custom fragmentation", "mtu 16"],
    flagExplanations: { "--mtu 16": "Sets custom Maximum Transmission Unit fragmentation size." }
  },
  {
    id: "cmd_evasion_source_port_dns",
    name: "Source Port Spoofing (Port 53)",
    category: "evasion",
    commandPattern: "nmap --source-port 53 {timing} {target}",
    description: "Forces Nmap to send scan packets from DNS source port 53.",
    whenToUse: "Bypassing firewalls configured to trust traffic originating from DNS/NTP ports.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Medium",
    keywords: ["source port 53", "g 53", "dns port spoof"],
    flagExplanations: { "--source-port 53": "Sets source port to 53." }
  },
  {
    id: "cmd_evasion_data_length",
    name: "Append Random Binary Payload Data",
    category: "evasion",
    commandPattern: "nmap --data-length 25 {timing} {target}",
    description: "Appends random binary payload bytes to sent scan packets to alter packet signatures.",
    whenToUse: "Evading IDS signatures that flag default 0-byte Nmap packets.",
    speedLevel: 4, stealthLevel: 5, riskLevel: "Low",
    keywords: ["data length", "pad payload", "custom packet size"],
    flagExplanations: { "--data-length 25": "Appends 25 random bytes to scan packets." }
  },
  {
    id: "cmd_evasion_spoof_mac",
    name: "Spoof Hardware MAC Address",
    category: "evasion",
    commandPattern: "nmap --spoof-mac Apple {timing} {target}",
    description: "Spoofs vendor Ethernet MAC address (e.g. Apple, Cisco, Dell, or random).",
    whenToUse: "Bypassing MAC address filtering on local wireless or Ethernet switches.",
    speedLevel: 4, stealthLevel: 5, riskLevel: "Low",
    keywords: ["spoof mac", "mac address", "vendor spoof"],
    flagExplanations: { "--spoof-mac Apple": "Spoofs MAC address using Apple OUI vendor code." }
  },
  {
    id: "cmd_evasion_badsum",
    name: "Bad Checksum Probe Packet",
    category: "evasion",
    commandPattern: "nmap --badsum {timing} {target}",
    description: "Sends packets with invalid TCP/UDP checksums to test firewall packet validation.",
    whenToUse: "Determining if firewalls validate checksums before forwarding packets.",
    speedLevel: 4, stealthLevel: 4, riskLevel: "Medium",
    keywords: ["badsum", "invalid checksum", "firewall test"],
    flagExplanations: { "--badsum": "Generates intentionally corrupted checksums." }
  },

  // ==================== 6. INDUSTRIAL SCADA/PLC, CLOUD & CONTAINERS (15 COMMANDS) ====================
  {
    id: "cmd_scada_modbus",
    name: "Modbus TCP SCADA Protocol Audit",
    category: "advanced",
    commandPattern: "nmap -p 502 --script=modbus-discover {target}",
    description: "Discovers Modbus TCP industrial control units and PLC slave IDs.",
    whenToUse: "Operational Technology (OT) and SCADA industrial control system security audits.",
    speedLevel: 3, stealthLevel: 4, riskLevel: "Medium",
    keywords: ["modbus", "scada", "plc", "ot security", "port 502"],
    flagExplanations: { "--script=modbus-discover": "Enumerates Modbus slave device IDs." }
  },
  {
    id: "cmd_scada_siemens_s7",
    name: "Siemens S7 PLC Controller Probe",
    category: "advanced",
    commandPattern: "nmap -p 102 --script=s7-info {target}",
    description: "Queries Siemens S7-300/400/1200/1500 PLC CPUs for model, firmware, and system information.",
    whenToUse: "Auditing manufacturing and critical infrastructure Siemens PLCs.",
    speedLevel: 3, stealthLevel: 4, riskLevel: "Medium",
    keywords: ["siemens s7", "s7-1200", "plc info", "port 102"],
    flagExplanations: { "--script=s7-info": "Extracts Siemens S7 PLC hardware metadata." }
  },
  {
    id: "cmd_scada_bacnet",
    name: "BACnet Building Automation Audit",
    category: "advanced",
    commandPattern: "nmap -sU -p 47808 --script=bacnet-info {target}",
    description: "Queries BACnet building automation controllers (HVAC, fire alarms, access control).",
    whenToUse: "Smart building and HVAC control system security reviews.",
    speedLevel: 3, stealthLevel: 4, riskLevel: "Low",
    keywords: ["bacnet", "hvac", "building automation", "port 47808"],
    flagExplanations: { "--script=bacnet-info": "Queries BACnet device vendor and ID." }
  },
  {
    id: "cmd_cloud_docker_api",
    name: "Unauthenticated Docker Engine API Check",
    category: "advanced",
    commandPattern: "nmap -p 2375,2376 --script=docker-version {target}",
    description: "Audits target for publicly exposed unauthenticated Docker daemon REST APIs.",
    whenToUse: "Assessing Kubernetes nodes and cloud servers for exposed Docker sockets.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "High",
    keywords: ["docker api", "port 2375", "container escape", "cloud security"],
    flagExplanations: { "--script=docker-version": "Queries Docker API for container details." }
  },
  {
    id: "cmd_cloud_k8s_api",
    name: "Kubernetes API Server Security Probe",
    category: "advanced",
    commandPattern: "nmap -p 6443,10250 --script=http-title {target}",
    description: "Audits Kubernetes API server and Kubelet daemon endpoints for unauthorized access.",
    whenToUse: "Cloud container security audits and K8s cluster pentesting.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "Medium",
    keywords: ["kubernetes", "k8s", "port 6443", "kubelet"],
    flagExplanations: { "-p 6443,10250": "Scans K8s API server and Kubelet port." }
  },
  {
    id: "cmd_cloud_etcd",
    name: "Etcd Cluster Key-Value Store Probe",
    category: "advanced",
    commandPattern: "nmap -p 2379,2380 {target}",
    description: "Audits Etcd distributed key-value database used by Kubernetes clusters.",
    whenToUse: "Checking for unauthenticated Etcd exposure that leaks cluster secrets.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "High",
    keywords: ["etcd", "port 2379", "kubernetes secrets"],
    flagExplanations: { "-p 2379,2380": "Scans Etcd client and peer communication ports." }
  },
  {
    id: "cmd_db_mongodb",
    name: "Unauthenticated MongoDB NoSQL Audit",
    category: "advanced",
    commandPattern: "nmap -p 27017 --script=mongodb-info,mongodb-databases {target}",
    description: "Audits MongoDB instances for missing authentication and dumps database names.",
    whenToUse: "Database security reviews and NoSQL data leak checks.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "High",
    keywords: ["mongodb", "nosql", "port 27017", "database leak"],
    flagExplanations: { "--script=mongodb-info": "Queries MongoDB status without auth." }
  },
  {
    id: "cmd_db_redis",
    name: "Redis Unauthenticated RCE Check",
    category: "advanced",
    commandPattern: "nmap -p 6379 --script=redis-info {target}",
    description: "Audits Redis memory datastores for missing passwords and ssh key injection risk.",
    whenToUse: "Preventing unauthorized Redis remote code execution exploits.",
    speedLevel: 4, stealthLevel: 3, riskLevel: "High",
    keywords: ["redis", "port 6379", "redis rce", "noauth redis"],
    flagExplanations: { "--script=redis-info": "Fetches Redis CONFIG and INFO." }
  }
];
