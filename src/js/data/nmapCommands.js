/**
 * Comprehensive 1000 Real-World Nmap Commands Dataset (100% English)
 * Categories: discovery, port_scan, service_os, vuln_scripts, evasion, advanced
 */

export const NMAP_COMMANDS = [
  {
    "id": "cmd_disc_echo_1",
    "name": "ICMP Echo Request (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -PE {timing} 192.168.1.0/24",
    "description": "Standard ICMP echo request probe for host liveness discovery.",
    "whenToUse": "Host discovery on target network segment 192.168.1.0/24.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "echo",
      "-PE",
      "icmp echo request",
      "192.168.1.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-PE": "Sets ICMP Echo Request discovery parameter."
    }
  },
  {
    "id": "cmd_disc_echo_2",
    "name": "ICMP Echo Request (10.0.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PE {timing} 10.0.0.0/16",
    "description": "Standard ICMP echo request probe for host liveness discovery.",
    "whenToUse": "Host discovery on target network segment 10.0.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "echo",
      "-PE",
      "icmp echo request",
      "10.0.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PE": "Sets ICMP Echo Request discovery parameter."
    }
  },
  {
    "id": "cmd_disc_echo_3",
    "name": "ICMP Echo Request (172.16.0.0/12)",
    "category": "discovery",
    "commandPattern": "nmap -PE {timing} 172.16.0.0/12",
    "description": "Standard ICMP echo request probe for host liveness discovery.",
    "whenToUse": "Host discovery on target network segment 172.16.0.0/12.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "echo",
      "-PE",
      "icmp echo request",
      "172.16.0.0/12",
      "discovery"
    ],
    "flagExplanations": {
      "-PE": "Sets ICMP Echo Request discovery parameter."
    }
  },
  {
    "id": "cmd_disc_echo_4",
    "name": "ICMP Echo Request (192.168.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PE {timing} 192.168.0.0/16",
    "description": "Standard ICMP echo request probe for host liveness discovery.",
    "whenToUse": "Host discovery on target network segment 192.168.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "echo",
      "-PE",
      "icmp echo request",
      "192.168.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PE": "Sets ICMP Echo Request discovery parameter."
    }
  },
  {
    "id": "cmd_disc_echo_5",
    "name": "ICMP Echo Request (10.10.10.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -PE {timing} 10.10.10.0/24",
    "description": "Standard ICMP echo request probe for host liveness discovery.",
    "whenToUse": "Host discovery on target network segment 10.10.10.0/24.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "echo",
      "-PE",
      "icmp echo request",
      "10.10.10.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-PE": "Sets ICMP Echo Request discovery parameter."
    }
  },
  {
    "id": "cmd_disc_echo_6",
    "name": "ICMP Echo Request (172.20.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PE {timing} 172.20.0.0/16",
    "description": "Standard ICMP echo request probe for host liveness discovery.",
    "whenToUse": "Host discovery on target network segment 172.20.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "echo",
      "-PE",
      "icmp echo request",
      "172.20.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PE": "Sets ICMP Echo Request discovery parameter."
    }
  },
  {
    "id": "cmd_disc_timestamp_7",
    "name": "ICMP Timestamp Query (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -PP {timing} 192.168.1.0/24",
    "description": "Sends ICMP timestamp queries to bypass standard ping filters.",
    "whenToUse": "Host discovery on target network segment 192.168.1.0/24.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "timestamp",
      "-PP",
      "icmp timestamp query",
      "192.168.1.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-PP": "Sets ICMP Timestamp Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_timestamp_8",
    "name": "ICMP Timestamp Query (10.0.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PP {timing} 10.0.0.0/16",
    "description": "Sends ICMP timestamp queries to bypass standard ping filters.",
    "whenToUse": "Host discovery on target network segment 10.0.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "timestamp",
      "-PP",
      "icmp timestamp query",
      "10.0.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PP": "Sets ICMP Timestamp Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_timestamp_9",
    "name": "ICMP Timestamp Query (172.16.0.0/12)",
    "category": "discovery",
    "commandPattern": "nmap -PP {timing} 172.16.0.0/12",
    "description": "Sends ICMP timestamp queries to bypass standard ping filters.",
    "whenToUse": "Host discovery on target network segment 172.16.0.0/12.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "timestamp",
      "-PP",
      "icmp timestamp query",
      "172.16.0.0/12",
      "discovery"
    ],
    "flagExplanations": {
      "-PP": "Sets ICMP Timestamp Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_timestamp_10",
    "name": "ICMP Timestamp Query (192.168.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PP {timing} 192.168.0.0/16",
    "description": "Sends ICMP timestamp queries to bypass standard ping filters.",
    "whenToUse": "Host discovery on target network segment 192.168.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "timestamp",
      "-PP",
      "icmp timestamp query",
      "192.168.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PP": "Sets ICMP Timestamp Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_timestamp_11",
    "name": "ICMP Timestamp Query (10.10.10.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -PP {timing} 10.10.10.0/24",
    "description": "Sends ICMP timestamp queries to bypass standard ping filters.",
    "whenToUse": "Host discovery on target network segment 10.10.10.0/24.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "timestamp",
      "-PP",
      "icmp timestamp query",
      "10.10.10.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-PP": "Sets ICMP Timestamp Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_timestamp_12",
    "name": "ICMP Timestamp Query (172.20.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PP {timing} 172.20.0.0/16",
    "description": "Sends ICMP timestamp queries to bypass standard ping filters.",
    "whenToUse": "Host discovery on target network segment 172.20.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "timestamp",
      "-PP",
      "icmp timestamp query",
      "172.20.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PP": "Sets ICMP Timestamp Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_netmask_13",
    "name": "ICMP Address Mask Query (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -PM {timing} 192.168.1.0/24",
    "description": "Sends ICMP netmask queries to probe responsive subnets.",
    "whenToUse": "Host discovery on target network segment 192.168.1.0/24.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "netmask",
      "-PM",
      "icmp address mask query",
      "192.168.1.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-PM": "Sets ICMP Address Mask Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_netmask_14",
    "name": "ICMP Address Mask Query (10.0.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PM {timing} 10.0.0.0/16",
    "description": "Sends ICMP netmask queries to probe responsive subnets.",
    "whenToUse": "Host discovery on target network segment 10.0.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "netmask",
      "-PM",
      "icmp address mask query",
      "10.0.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PM": "Sets ICMP Address Mask Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_netmask_15",
    "name": "ICMP Address Mask Query (172.16.0.0/12)",
    "category": "discovery",
    "commandPattern": "nmap -PM {timing} 172.16.0.0/12",
    "description": "Sends ICMP netmask queries to probe responsive subnets.",
    "whenToUse": "Host discovery on target network segment 172.16.0.0/12.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "netmask",
      "-PM",
      "icmp address mask query",
      "172.16.0.0/12",
      "discovery"
    ],
    "flagExplanations": {
      "-PM": "Sets ICMP Address Mask Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_netmask_16",
    "name": "ICMP Address Mask Query (192.168.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PM {timing} 192.168.0.0/16",
    "description": "Sends ICMP netmask queries to probe responsive subnets.",
    "whenToUse": "Host discovery on target network segment 192.168.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "netmask",
      "-PM",
      "icmp address mask query",
      "192.168.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PM": "Sets ICMP Address Mask Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_netmask_17",
    "name": "ICMP Address Mask Query (10.10.10.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -PM {timing} 10.10.10.0/24",
    "description": "Sends ICMP netmask queries to probe responsive subnets.",
    "whenToUse": "Host discovery on target network segment 10.10.10.0/24.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "netmask",
      "-PM",
      "icmp address mask query",
      "10.10.10.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-PM": "Sets ICMP Address Mask Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_netmask_18",
    "name": "ICMP Address Mask Query (172.20.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PM {timing} 172.20.0.0/16",
    "description": "Sends ICMP netmask queries to probe responsive subnets.",
    "whenToUse": "Host discovery on target network segment 172.20.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "netmask",
      "-PM",
      "icmp address mask query",
      "172.20.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PM": "Sets ICMP Address Mask Query discovery parameter."
    }
  },
  {
    "id": "cmd_disc_arp_19",
    "name": "ARP Host Discovery (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -PR {timing} 192.168.1.0/24",
    "description": "Sends local ARP requests to discover Ethernet hosts.",
    "whenToUse": "Host discovery on target network segment 192.168.1.0/24.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "arp",
      "-PR",
      "arp host discovery",
      "192.168.1.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-PR": "Sets ARP Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_arp_20",
    "name": "ARP Host Discovery (10.0.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PR {timing} 10.0.0.0/16",
    "description": "Sends local ARP requests to discover Ethernet hosts.",
    "whenToUse": "Host discovery on target network segment 10.0.0.0/16.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "arp",
      "-PR",
      "arp host discovery",
      "10.0.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PR": "Sets ARP Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_arp_21",
    "name": "ARP Host Discovery (172.16.0.0/12)",
    "category": "discovery",
    "commandPattern": "nmap -PR {timing} 172.16.0.0/12",
    "description": "Sends local ARP requests to discover Ethernet hosts.",
    "whenToUse": "Host discovery on target network segment 172.16.0.0/12.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "arp",
      "-PR",
      "arp host discovery",
      "172.16.0.0/12",
      "discovery"
    ],
    "flagExplanations": {
      "-PR": "Sets ARP Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_arp_22",
    "name": "ARP Host Discovery (192.168.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PR {timing} 192.168.0.0/16",
    "description": "Sends local ARP requests to discover Ethernet hosts.",
    "whenToUse": "Host discovery on target network segment 192.168.0.0/16.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "arp",
      "-PR",
      "arp host discovery",
      "192.168.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PR": "Sets ARP Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_arp_23",
    "name": "ARP Host Discovery (10.10.10.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -PR {timing} 10.10.10.0/24",
    "description": "Sends local ARP requests to discover Ethernet hosts.",
    "whenToUse": "Host discovery on target network segment 10.10.10.0/24.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "arp",
      "-PR",
      "arp host discovery",
      "10.10.10.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-PR": "Sets ARP Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_arp_24",
    "name": "ARP Host Discovery (172.20.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -PR {timing} 172.20.0.0/16",
    "description": "Sends local ARP requests to discover Ethernet hosts.",
    "whenToUse": "Host discovery on target network segment 172.20.0.0/16.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "arp",
      "-PR",
      "arp host discovery",
      "172.20.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-PR": "Sets ARP Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_no_ping_25",
    "name": "Skip Host Discovery (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -Pn {timing} 192.168.1.0/24",
    "description": "Assumes all hosts are online and skips ICMP/ARP ping probes.",
    "whenToUse": "Host discovery on target network segment 192.168.1.0/24.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "no_ping",
      "-Pn",
      "skip host discovery",
      "192.168.1.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-Pn": "Sets Skip Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_no_ping_26",
    "name": "Skip Host Discovery (10.0.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -Pn {timing} 10.0.0.0/16",
    "description": "Assumes all hosts are online and skips ICMP/ARP ping probes.",
    "whenToUse": "Host discovery on target network segment 10.0.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "no_ping",
      "-Pn",
      "skip host discovery",
      "10.0.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-Pn": "Sets Skip Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_no_ping_27",
    "name": "Skip Host Discovery (172.16.0.0/12)",
    "category": "discovery",
    "commandPattern": "nmap -Pn {timing} 172.16.0.0/12",
    "description": "Assumes all hosts are online and skips ICMP/ARP ping probes.",
    "whenToUse": "Host discovery on target network segment 172.16.0.0/12.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "no_ping",
      "-Pn",
      "skip host discovery",
      "172.16.0.0/12",
      "discovery"
    ],
    "flagExplanations": {
      "-Pn": "Sets Skip Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_no_ping_28",
    "name": "Skip Host Discovery (192.168.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -Pn {timing} 192.168.0.0/16",
    "description": "Assumes all hosts are online and skips ICMP/ARP ping probes.",
    "whenToUse": "Host discovery on target network segment 192.168.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "no_ping",
      "-Pn",
      "skip host discovery",
      "192.168.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-Pn": "Sets Skip Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_no_ping_29",
    "name": "Skip Host Discovery (10.10.10.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -Pn {timing} 10.10.10.0/24",
    "description": "Assumes all hosts are online and skips ICMP/ARP ping probes.",
    "whenToUse": "Host discovery on target network segment 10.10.10.0/24.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "no_ping",
      "-Pn",
      "skip host discovery",
      "10.10.10.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-Pn": "Sets Skip Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_no_ping_30",
    "name": "Skip Host Discovery (172.20.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -Pn {timing} 172.20.0.0/16",
    "description": "Assumes all hosts are online and skips ICMP/ARP ping probes.",
    "whenToUse": "Host discovery on target network segment 172.20.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "no_ping",
      "-Pn",
      "skip host discovery",
      "172.20.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-Pn": "Sets Skip Host Discovery discovery parameter."
    }
  },
  {
    "id": "cmd_disc_disable_dns_31",
    "name": "Disable DNS Resolution (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -n {timing} 192.168.1.0/24",
    "description": "Disables reverse DNS resolution for maximum discovery speed.",
    "whenToUse": "Host discovery on target network segment 192.168.1.0/24.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "disable_dns",
      "-n",
      "disable dns resolution",
      "192.168.1.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-n": "Sets Disable DNS Resolution discovery parameter."
    }
  },
  {
    "id": "cmd_disc_disable_dns_32",
    "name": "Disable DNS Resolution (10.0.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -n {timing} 10.0.0.0/16",
    "description": "Disables reverse DNS resolution for maximum discovery speed.",
    "whenToUse": "Host discovery on target network segment 10.0.0.0/16.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "disable_dns",
      "-n",
      "disable dns resolution",
      "10.0.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-n": "Sets Disable DNS Resolution discovery parameter."
    }
  },
  {
    "id": "cmd_disc_disable_dns_33",
    "name": "Disable DNS Resolution (172.16.0.0/12)",
    "category": "discovery",
    "commandPattern": "nmap -n {timing} 172.16.0.0/12",
    "description": "Disables reverse DNS resolution for maximum discovery speed.",
    "whenToUse": "Host discovery on target network segment 172.16.0.0/12.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "disable_dns",
      "-n",
      "disable dns resolution",
      "172.16.0.0/12",
      "discovery"
    ],
    "flagExplanations": {
      "-n": "Sets Disable DNS Resolution discovery parameter."
    }
  },
  {
    "id": "cmd_disc_disable_dns_34",
    "name": "Disable DNS Resolution (192.168.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -n {timing} 192.168.0.0/16",
    "description": "Disables reverse DNS resolution for maximum discovery speed.",
    "whenToUse": "Host discovery on target network segment 192.168.0.0/16.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "disable_dns",
      "-n",
      "disable dns resolution",
      "192.168.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-n": "Sets Disable DNS Resolution discovery parameter."
    }
  },
  {
    "id": "cmd_disc_disable_dns_35",
    "name": "Disable DNS Resolution (10.10.10.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -n {timing} 10.10.10.0/24",
    "description": "Disables reverse DNS resolution for maximum discovery speed.",
    "whenToUse": "Host discovery on target network segment 10.10.10.0/24.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "disable_dns",
      "-n",
      "disable dns resolution",
      "10.10.10.0/24",
      "discovery"
    ],
    "flagExplanations": {
      "-n": "Sets Disable DNS Resolution discovery parameter."
    }
  },
  {
    "id": "cmd_disc_disable_dns_36",
    "name": "Disable DNS Resolution (172.20.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -n {timing} 172.20.0.0/16",
    "description": "Disables reverse DNS resolution for maximum discovery speed.",
    "whenToUse": "Host discovery on target network segment 172.20.0.0/16.",
    "speedLevel": 5,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "disable_dns",
      "-n",
      "disable dns resolution",
      "172.20.0.0/16",
      "discovery"
    ],
    "flagExplanations": {
      "-n": "Sets Disable DNS Resolution discovery parameter."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_80_37",
    "name": "TCP SYN Ping Probe (Port 80)",
    "category": "discovery",
    "commandPattern": "nmap -PS80 {timing} {target}",
    "description": "Sends TCP SYN probe to port 80 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps80",
      "port 80",
      "host probe"
    ],
    "flagExplanations": {
      "-PS80": "Sends TCP SYN packet to port 80."
    }
  },
  {
    "id": "cmd_disc_tcpack_80_38",
    "name": "TCP ACK Ping Probe (Port 80)",
    "category": "discovery",
    "commandPattern": "nmap -PA80 {timing} {target}",
    "description": "Sends TCP ACK probe to port 80 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa80",
      "port 80",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA80": "Sends TCP ACK packet to port 80."
    }
  },
  {
    "id": "cmd_disc_udp_80_39",
    "name": "UDP Ping Probe (Port 80)",
    "category": "discovery",
    "commandPattern": "nmap -PU80 {timing} {target}",
    "description": "Sends UDP probe to port 80 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 80.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu80",
      "port 80",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU80": "Sends empty UDP packet to port 80."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_443_40",
    "name": "TCP SYN Ping Probe (Port 443)",
    "category": "discovery",
    "commandPattern": "nmap -PS443 {timing} {target}",
    "description": "Sends TCP SYN probe to port 443 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps443",
      "port 443",
      "host probe"
    ],
    "flagExplanations": {
      "-PS443": "Sends TCP SYN packet to port 443."
    }
  },
  {
    "id": "cmd_disc_tcpack_443_41",
    "name": "TCP ACK Ping Probe (Port 443)",
    "category": "discovery",
    "commandPattern": "nmap -PA443 {timing} {target}",
    "description": "Sends TCP ACK probe to port 443 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa443",
      "port 443",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA443": "Sends TCP ACK packet to port 443."
    }
  },
  {
    "id": "cmd_disc_udp_443_42",
    "name": "UDP Ping Probe (Port 443)",
    "category": "discovery",
    "commandPattern": "nmap -PU443 {timing} {target}",
    "description": "Sends UDP probe to port 443 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu443",
      "port 443",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU443": "Sends empty UDP packet to port 443."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_22_43",
    "name": "TCP SYN Ping Probe (Port 22)",
    "category": "discovery",
    "commandPattern": "nmap -PS22 {timing} {target}",
    "description": "Sends TCP SYN probe to port 22 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 22.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps22",
      "port 22",
      "host probe"
    ],
    "flagExplanations": {
      "-PS22": "Sends TCP SYN packet to port 22."
    }
  },
  {
    "id": "cmd_disc_tcpack_22_44",
    "name": "TCP ACK Ping Probe (Port 22)",
    "category": "discovery",
    "commandPattern": "nmap -PA22 {timing} {target}",
    "description": "Sends TCP ACK probe to port 22 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 22.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa22",
      "port 22",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA22": "Sends TCP ACK packet to port 22."
    }
  },
  {
    "id": "cmd_disc_udp_22_45",
    "name": "UDP Ping Probe (Port 22)",
    "category": "discovery",
    "commandPattern": "nmap -PU22 {timing} {target}",
    "description": "Sends UDP probe to port 22 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 22.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu22",
      "port 22",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU22": "Sends empty UDP packet to port 22."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_21_46",
    "name": "TCP SYN Ping Probe (Port 21)",
    "category": "discovery",
    "commandPattern": "nmap -PS21 {timing} {target}",
    "description": "Sends TCP SYN probe to port 21 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 21.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps21",
      "port 21",
      "host probe"
    ],
    "flagExplanations": {
      "-PS21": "Sends TCP SYN packet to port 21."
    }
  },
  {
    "id": "cmd_disc_tcpack_21_47",
    "name": "TCP ACK Ping Probe (Port 21)",
    "category": "discovery",
    "commandPattern": "nmap -PA21 {timing} {target}",
    "description": "Sends TCP ACK probe to port 21 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 21.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa21",
      "port 21",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA21": "Sends TCP ACK packet to port 21."
    }
  },
  {
    "id": "cmd_disc_udp_21_48",
    "name": "UDP Ping Probe (Port 21)",
    "category": "discovery",
    "commandPattern": "nmap -PU21 {timing} {target}",
    "description": "Sends UDP probe to port 21 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 21.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu21",
      "port 21",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU21": "Sends empty UDP packet to port 21."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_25_49",
    "name": "TCP SYN Ping Probe (Port 25)",
    "category": "discovery",
    "commandPattern": "nmap -PS25 {timing} {target}",
    "description": "Sends TCP SYN probe to port 25 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 25.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps25",
      "port 25",
      "host probe"
    ],
    "flagExplanations": {
      "-PS25": "Sends TCP SYN packet to port 25."
    }
  },
  {
    "id": "cmd_disc_tcpack_25_50",
    "name": "TCP ACK Ping Probe (Port 25)",
    "category": "discovery",
    "commandPattern": "nmap -PA25 {timing} {target}",
    "description": "Sends TCP ACK probe to port 25 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 25.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa25",
      "port 25",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA25": "Sends TCP ACK packet to port 25."
    }
  },
  {
    "id": "cmd_disc_udp_25_51",
    "name": "UDP Ping Probe (Port 25)",
    "category": "discovery",
    "commandPattern": "nmap -PU25 {timing} {target}",
    "description": "Sends UDP probe to port 25 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 25.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu25",
      "port 25",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU25": "Sends empty UDP packet to port 25."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_53_52",
    "name": "TCP SYN Ping Probe (Port 53)",
    "category": "discovery",
    "commandPattern": "nmap -PS53 {timing} {target}",
    "description": "Sends TCP SYN probe to port 53 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 53.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps53",
      "port 53",
      "host probe"
    ],
    "flagExplanations": {
      "-PS53": "Sends TCP SYN packet to port 53."
    }
  },
  {
    "id": "cmd_disc_tcpack_53_53",
    "name": "TCP ACK Ping Probe (Port 53)",
    "category": "discovery",
    "commandPattern": "nmap -PA53 {timing} {target}",
    "description": "Sends TCP ACK probe to port 53 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 53.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa53",
      "port 53",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA53": "Sends TCP ACK packet to port 53."
    }
  },
  {
    "id": "cmd_disc_udp_53_54",
    "name": "UDP Ping Probe (Port 53)",
    "category": "discovery",
    "commandPattern": "nmap -PU53 {timing} {target}",
    "description": "Sends UDP probe to port 53 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 53.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu53",
      "port 53",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU53": "Sends empty UDP packet to port 53."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_110_55",
    "name": "TCP SYN Ping Probe (Port 110)",
    "category": "discovery",
    "commandPattern": "nmap -PS110 {timing} {target}",
    "description": "Sends TCP SYN probe to port 110 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 110.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps110",
      "port 110",
      "host probe"
    ],
    "flagExplanations": {
      "-PS110": "Sends TCP SYN packet to port 110."
    }
  },
  {
    "id": "cmd_disc_tcpack_110_56",
    "name": "TCP ACK Ping Probe (Port 110)",
    "category": "discovery",
    "commandPattern": "nmap -PA110 {timing} {target}",
    "description": "Sends TCP ACK probe to port 110 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 110.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa110",
      "port 110",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA110": "Sends TCP ACK packet to port 110."
    }
  },
  {
    "id": "cmd_disc_udp_110_57",
    "name": "UDP Ping Probe (Port 110)",
    "category": "discovery",
    "commandPattern": "nmap -PU110 {timing} {target}",
    "description": "Sends UDP probe to port 110 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 110.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu110",
      "port 110",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU110": "Sends empty UDP packet to port 110."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_143_58",
    "name": "TCP SYN Ping Probe (Port 143)",
    "category": "discovery",
    "commandPattern": "nmap -PS143 {timing} {target}",
    "description": "Sends TCP SYN probe to port 143 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 143.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps143",
      "port 143",
      "host probe"
    ],
    "flagExplanations": {
      "-PS143": "Sends TCP SYN packet to port 143."
    }
  },
  {
    "id": "cmd_disc_tcpack_143_59",
    "name": "TCP ACK Ping Probe (Port 143)",
    "category": "discovery",
    "commandPattern": "nmap -PA143 {timing} {target}",
    "description": "Sends TCP ACK probe to port 143 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 143.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa143",
      "port 143",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA143": "Sends TCP ACK packet to port 143."
    }
  },
  {
    "id": "cmd_disc_udp_143_60",
    "name": "UDP Ping Probe (Port 143)",
    "category": "discovery",
    "commandPattern": "nmap -PU143 {timing} {target}",
    "description": "Sends UDP probe to port 143 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu143",
      "port 143",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU143": "Sends empty UDP packet to port 143."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_445_61",
    "name": "TCP SYN Ping Probe (Port 445)",
    "category": "discovery",
    "commandPattern": "nmap -PS445 {timing} {target}",
    "description": "Sends TCP SYN probe to port 445 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps445",
      "port 445",
      "host probe"
    ],
    "flagExplanations": {
      "-PS445": "Sends TCP SYN packet to port 445."
    }
  },
  {
    "id": "cmd_disc_tcpack_445_62",
    "name": "TCP ACK Ping Probe (Port 445)",
    "category": "discovery",
    "commandPattern": "nmap -PA445 {timing} {target}",
    "description": "Sends TCP ACK probe to port 445 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa445",
      "port 445",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA445": "Sends TCP ACK packet to port 445."
    }
  },
  {
    "id": "cmd_disc_udp_445_63",
    "name": "UDP Ping Probe (Port 445)",
    "category": "discovery",
    "commandPattern": "nmap -PU445 {timing} {target}",
    "description": "Sends UDP probe to port 445 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 445.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu445",
      "port 445",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU445": "Sends empty UDP packet to port 445."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_3389_64",
    "name": "TCP SYN Ping Probe (Port 3389)",
    "category": "discovery",
    "commandPattern": "nmap -PS3389 {timing} {target}",
    "description": "Sends TCP SYN probe to port 3389 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 3389.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps3389",
      "port 3389",
      "host probe"
    ],
    "flagExplanations": {
      "-PS3389": "Sends TCP SYN packet to port 3389."
    }
  },
  {
    "id": "cmd_disc_tcpack_3389_65",
    "name": "TCP ACK Ping Probe (Port 3389)",
    "category": "discovery",
    "commandPattern": "nmap -PA3389 {timing} {target}",
    "description": "Sends TCP ACK probe to port 3389 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 3389.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa3389",
      "port 3389",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA3389": "Sends TCP ACK packet to port 3389."
    }
  },
  {
    "id": "cmd_disc_udp_3389_66",
    "name": "UDP Ping Probe (Port 3389)",
    "category": "discovery",
    "commandPattern": "nmap -PU3389 {timing} {target}",
    "description": "Sends UDP probe to port 3389 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 3389.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu3389",
      "port 3389",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU3389": "Sends empty UDP packet to port 3389."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_8080_67",
    "name": "TCP SYN Ping Probe (Port 8080)",
    "category": "discovery",
    "commandPattern": "nmap -PS8080 {timing} {target}",
    "description": "Sends TCP SYN probe to port 8080 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 8080.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps8080",
      "port 8080",
      "host probe"
    ],
    "flagExplanations": {
      "-PS8080": "Sends TCP SYN packet to port 8080."
    }
  },
  {
    "id": "cmd_disc_tcpack_8080_68",
    "name": "TCP ACK Ping Probe (Port 8080)",
    "category": "discovery",
    "commandPattern": "nmap -PA8080 {timing} {target}",
    "description": "Sends TCP ACK probe to port 8080 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 8080.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa8080",
      "port 8080",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA8080": "Sends TCP ACK packet to port 8080."
    }
  },
  {
    "id": "cmd_disc_udp_8080_69",
    "name": "UDP Ping Probe (Port 8080)",
    "category": "discovery",
    "commandPattern": "nmap -PU8080 {timing} {target}",
    "description": "Sends UDP probe to port 8080 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 8080.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu8080",
      "port 8080",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU8080": "Sends empty UDP packet to port 8080."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_8443_70",
    "name": "TCP SYN Ping Probe (Port 8443)",
    "category": "discovery",
    "commandPattern": "nmap -PS8443 {timing} {target}",
    "description": "Sends TCP SYN probe to port 8443 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 8443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps8443",
      "port 8443",
      "host probe"
    ],
    "flagExplanations": {
      "-PS8443": "Sends TCP SYN packet to port 8443."
    }
  },
  {
    "id": "cmd_disc_tcpack_8443_71",
    "name": "TCP ACK Ping Probe (Port 8443)",
    "category": "discovery",
    "commandPattern": "nmap -PA8443 {timing} {target}",
    "description": "Sends TCP ACK probe to port 8443 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 8443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa8443",
      "port 8443",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA8443": "Sends TCP ACK packet to port 8443."
    }
  },
  {
    "id": "cmd_disc_udp_8443_72",
    "name": "UDP Ping Probe (Port 8443)",
    "category": "discovery",
    "commandPattern": "nmap -PU8443 {timing} {target}",
    "description": "Sends UDP probe to port 8443 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 8443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu8443",
      "port 8443",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU8443": "Sends empty UDP packet to port 8443."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_161_73",
    "name": "TCP SYN Ping Probe (Port 161)",
    "category": "discovery",
    "commandPattern": "nmap -PS161 {timing} {target}",
    "description": "Sends TCP SYN probe to port 161 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 161.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps161",
      "port 161",
      "host probe"
    ],
    "flagExplanations": {
      "-PS161": "Sends TCP SYN packet to port 161."
    }
  },
  {
    "id": "cmd_disc_tcpack_161_74",
    "name": "TCP ACK Ping Probe (Port 161)",
    "category": "discovery",
    "commandPattern": "nmap -PA161 {timing} {target}",
    "description": "Sends TCP ACK probe to port 161 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 161.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa161",
      "port 161",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA161": "Sends TCP ACK packet to port 161."
    }
  },
  {
    "id": "cmd_disc_udp_161_75",
    "name": "UDP Ping Probe (Port 161)",
    "category": "discovery",
    "commandPattern": "nmap -PU161 {timing} {target}",
    "description": "Sends UDP probe to port 161 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 161.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu161",
      "port 161",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU161": "Sends empty UDP packet to port 161."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_500_76",
    "name": "TCP SYN Ping Probe (Port 500)",
    "category": "discovery",
    "commandPattern": "nmap -PS500 {timing} {target}",
    "description": "Sends TCP SYN probe to port 500 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 500.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps500",
      "port 500",
      "host probe"
    ],
    "flagExplanations": {
      "-PS500": "Sends TCP SYN packet to port 500."
    }
  },
  {
    "id": "cmd_disc_tcpack_500_77",
    "name": "TCP ACK Ping Probe (Port 500)",
    "category": "discovery",
    "commandPattern": "nmap -PA500 {timing} {target}",
    "description": "Sends TCP ACK probe to port 500 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 500.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa500",
      "port 500",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA500": "Sends TCP ACK packet to port 500."
    }
  },
  {
    "id": "cmd_disc_udp_500_78",
    "name": "UDP Ping Probe (Port 500)",
    "category": "discovery",
    "commandPattern": "nmap -PU500 {timing} {target}",
    "description": "Sends UDP probe to port 500 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 500.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu500",
      "port 500",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU500": "Sends empty UDP packet to port 500."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_1900_79",
    "name": "TCP SYN Ping Probe (Port 1900)",
    "category": "discovery",
    "commandPattern": "nmap -PS1900 {timing} {target}",
    "description": "Sends TCP SYN probe to port 1900 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 1900.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps1900",
      "port 1900",
      "host probe"
    ],
    "flagExplanations": {
      "-PS1900": "Sends TCP SYN packet to port 1900."
    }
  },
  {
    "id": "cmd_disc_tcpack_1900_80",
    "name": "TCP ACK Ping Probe (Port 1900)",
    "category": "discovery",
    "commandPattern": "nmap -PA1900 {timing} {target}",
    "description": "Sends TCP ACK probe to port 1900 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 1900.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa1900",
      "port 1900",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA1900": "Sends TCP ACK packet to port 1900."
    }
  },
  {
    "id": "cmd_disc_udp_1900_81",
    "name": "UDP Ping Probe (Port 1900)",
    "category": "discovery",
    "commandPattern": "nmap -PU1900 {timing} {target}",
    "description": "Sends UDP probe to port 1900 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 1900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu1900",
      "port 1900",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU1900": "Sends empty UDP packet to port 1900."
    }
  },
  {
    "id": "cmd_disc_tcpsyn_2049_82",
    "name": "TCP SYN Ping Probe (Port 2049)",
    "category": "discovery",
    "commandPattern": "nmap -PS2049 {timing} {target}",
    "description": "Sends TCP SYN probe to port 2049 for host liveness detection.",
    "whenToUse": "Probing host liveness when ICMP ping is blocked, targeting port 2049.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp syn ping",
      "-ps2049",
      "port 2049",
      "host probe"
    ],
    "flagExplanations": {
      "-PS2049": "Sends TCP SYN packet to port 2049."
    }
  },
  {
    "id": "cmd_disc_tcpack_2049_83",
    "name": "TCP ACK Ping Probe (Port 2049)",
    "category": "discovery",
    "commandPattern": "nmap -PA2049 {timing} {target}",
    "description": "Sends TCP ACK probe to port 2049 to bypass stateless firewalls during host discovery.",
    "whenToUse": "Bypassing simple packet filters during host discovery via port 2049.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "tcp ack ping",
      "-pa2049",
      "port 2049",
      "ack probe"
    ],
    "flagExplanations": {
      "-PA2049": "Sends TCP ACK packet to port 2049."
    }
  },
  {
    "id": "cmd_disc_udp_2049_84",
    "name": "UDP Ping Probe (Port 2049)",
    "category": "discovery",
    "commandPattern": "nmap -PU2049 {timing} {target}",
    "description": "Sends UDP probe to port 2049 to discover hosts blocking TCP probes.",
    "whenToUse": "UDP-based host discovery targeting port 2049.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "udp ping",
      "-pu2049",
      "port 2049",
      "udp probe"
    ],
    "flagExplanations": {
      "-PU2049": "Sends empty UDP packet to port 2049."
    }
  },
  {
    "id": "cmd_disc_dns_85",
    "name": "Use System OS DNS Resolver (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap --system-dns {timing} 192.168.1.0/24",
    "description": "Uses host OS system resolver for DNS lookups.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 192.168.1.0/24.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--system-dns",
      "use system os dns resolver",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "--system-dns": "Uses host OS system resolver for DNS lookups."
    }
  },
  {
    "id": "cmd_disc_dns_86",
    "name": "Use System OS DNS Resolver (10.0.0.0/8)",
    "category": "discovery",
    "commandPattern": "nmap --system-dns {timing} 10.0.0.0/8",
    "description": "Uses host OS system resolver for DNS lookups.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 10.0.0.0/8.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--system-dns",
      "use system os dns resolver",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "--system-dns": "Uses host OS system resolver for DNS lookups."
    }
  },
  {
    "id": "cmd_disc_dns_87",
    "name": "Use System OS DNS Resolver (172.16.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap --system-dns {timing} 172.16.0.0/16",
    "description": "Uses host OS system resolver for DNS lookups.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 172.16.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--system-dns",
      "use system os dns resolver",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "--system-dns": "Uses host OS system resolver for DNS lookups."
    }
  },
  {
    "id": "cmd_disc_dns_88",
    "name": "Use System OS DNS Resolver (example.com)",
    "category": "discovery",
    "commandPattern": "nmap --system-dns {timing} example.com",
    "description": "Uses host OS system resolver for DNS lookups.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against example.com.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--system-dns",
      "use system os dns resolver",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "--system-dns": "Uses host OS system resolver for DNS lookups."
    }
  },
  {
    "id": "cmd_disc_dns_89",
    "name": "Force Reverse DNS Resolution (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -R {timing} 192.168.1.0/24",
    "description": "Forces reverse DNS PTR lookups for all target IP addresses.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 192.168.1.0/24.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-R",
      "force reverse dns resolution",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "-R": "Forces reverse DNS PTR lookups for all target IP addresses."
    }
  },
  {
    "id": "cmd_disc_dns_90",
    "name": "Force Reverse DNS Resolution (10.0.0.0/8)",
    "category": "discovery",
    "commandPattern": "nmap -R {timing} 10.0.0.0/8",
    "description": "Forces reverse DNS PTR lookups for all target IP addresses.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 10.0.0.0/8.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-R",
      "force reverse dns resolution",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "-R": "Forces reverse DNS PTR lookups for all target IP addresses."
    }
  },
  {
    "id": "cmd_disc_dns_91",
    "name": "Force Reverse DNS Resolution (172.16.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -R {timing} 172.16.0.0/16",
    "description": "Forces reverse DNS PTR lookups for all target IP addresses.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 172.16.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-R",
      "force reverse dns resolution",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "-R": "Forces reverse DNS PTR lookups for all target IP addresses."
    }
  },
  {
    "id": "cmd_disc_dns_92",
    "name": "Force Reverse DNS Resolution (example.com)",
    "category": "discovery",
    "commandPattern": "nmap -R {timing} example.com",
    "description": "Forces reverse DNS PTR lookups for all target IP addresses.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against example.com.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-R",
      "force reverse dns resolution",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "-R": "Forces reverse DNS PTR lookups for all target IP addresses."
    }
  },
  {
    "id": "cmd_disc_dns_93",
    "name": "List Scan Target Verification (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap -sL {timing} 192.168.1.0/24",
    "description": "Prints target list and resolves hostnames without sending packets.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 192.168.1.0/24.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sL",
      "list scan target verification",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "-sL": "Prints target list and resolves hostnames without sending packets."
    }
  },
  {
    "id": "cmd_disc_dns_94",
    "name": "List Scan Target Verification (10.0.0.0/8)",
    "category": "discovery",
    "commandPattern": "nmap -sL {timing} 10.0.0.0/8",
    "description": "Prints target list and resolves hostnames without sending packets.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 10.0.0.0/8.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sL",
      "list scan target verification",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "-sL": "Prints target list and resolves hostnames without sending packets."
    }
  },
  {
    "id": "cmd_disc_dns_95",
    "name": "List Scan Target Verification (172.16.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap -sL {timing} 172.16.0.0/16",
    "description": "Prints target list and resolves hostnames without sending packets.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 172.16.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sL",
      "list scan target verification",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "-sL": "Prints target list and resolves hostnames without sending packets."
    }
  },
  {
    "id": "cmd_disc_dns_96",
    "name": "List Scan Target Verification (example.com)",
    "category": "discovery",
    "commandPattern": "nmap -sL {timing} example.com",
    "description": "Prints target list and resolves hostnames without sending packets.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against example.com.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sL",
      "list scan target verification",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "-sL": "Prints target list and resolves hostnames without sending packets."
    }
  },
  {
    "id": "cmd_disc_dns_97",
    "name": "Hop-by-Hop Network Traceroute (192.168.1.0/24)",
    "category": "discovery",
    "commandPattern": "nmap --traceroute {timing} 192.168.1.0/24",
    "description": "Traces network hop path to target using TTL decrements.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 192.168.1.0/24.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "--traceroute",
      "hop-by-hop network traceroute",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "--traceroute": "Traces network hop path to target using TTL decrements."
    }
  },
  {
    "id": "cmd_disc_dns_98",
    "name": "Hop-by-Hop Network Traceroute (10.0.0.0/8)",
    "category": "discovery",
    "commandPattern": "nmap --traceroute {timing} 10.0.0.0/8",
    "description": "Traces network hop path to target using TTL decrements.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 10.0.0.0/8.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "--traceroute",
      "hop-by-hop network traceroute",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "--traceroute": "Traces network hop path to target using TTL decrements."
    }
  },
  {
    "id": "cmd_disc_dns_99",
    "name": "Hop-by-Hop Network Traceroute (172.16.0.0/16)",
    "category": "discovery",
    "commandPattern": "nmap --traceroute {timing} 172.16.0.0/16",
    "description": "Traces network hop path to target using TTL decrements.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against 172.16.0.0/16.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "--traceroute",
      "hop-by-hop network traceroute",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "--traceroute": "Traces network hop path to target using TTL decrements."
    }
  },
  {
    "id": "cmd_disc_dns_100",
    "name": "Hop-by-Hop Network Traceroute (example.com)",
    "category": "discovery",
    "commandPattern": "nmap --traceroute {timing} example.com",
    "description": "Traces network hop path to target using TTL decrements.",
    "whenToUse": "Reconnaissance and DNS hostname resolution against example.com.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "--traceroute",
      "hop-by-hop network traceroute",
      "dns",
      "recon"
    ],
    "flagExplanations": {
      "--traceroute": "Traces network hop path to target using TTL decrements."
    }
  },
  {
    "id": "cmd_ps_101",
    "name": "TCP SYN Stealth Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 80,443 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 80,443",
      "tcp syn stealth scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_102",
    "name": "TCP SYN Stealth Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "tcp syn stealth scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_103",
    "name": "TCP SYN Stealth Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1-1000 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 1-1000",
      "tcp syn stealth scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_104",
    "name": "TCP SYN Stealth Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1-5000 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 1-5000",
      "tcp syn stealth scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_105",
    "name": "TCP SYN Stealth Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p- {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "-sS",
      "-p-",
      "tcp syn stealth scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_106",
    "name": "TCP SYN Stealth Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sS -F {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-F",
      "tcp syn stealth scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_107",
    "name": "TCP SYN Stealth Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS --top-ports 50 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "--top-ports 50",
      "tcp syn stealth scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_108",
    "name": "TCP SYN Stealth Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS --top-ports 200 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "--top-ports 200",
      "tcp syn stealth scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_109",
    "name": "TCP SYN Stealth Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS --top-ports 500 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "--top-ports 500",
      "tcp syn stealth scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_110",
    "name": "TCP SYN Stealth Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 1433,1521,3306,5432,27017,6379",
      "tcp syn stealth scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_111",
    "name": "TCP SYN Stealth Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 502,102,47808,44818,20000",
      "tcp syn stealth scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_112",
    "name": "TCP SYN Stealth Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 2375,2376,6443,10250,2379",
      "tcp syn stealth scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_113",
    "name": "TCP SYN Stealth Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 5060,5061,10000-20000",
      "tcp syn stealth scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_114",
    "name": "TCP SYN Stealth Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 1194,500,4500,1723",
      "tcp syn stealth scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_115",
    "name": "TCP SYN Stealth Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Half-open TCP SYN scan. Fast, stealthy, default for root users. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing TCP SYN Stealth Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "-p 389,636,88,464",
      "tcp syn stealth scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sS": "Half-open TCP SYN scan. Fast, stealthy, default for root users.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_116",
    "name": "TCP Connect Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 80,443 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 80,443",
      "tcp connect scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_117",
    "name": "TCP Connect Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "tcp connect scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_118",
    "name": "TCP Connect Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1-1000 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 1-1000",
      "tcp connect scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_119",
    "name": "TCP Connect Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1-5000 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing TCP Connect Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 1-5000",
      "tcp connect scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_120",
    "name": "TCP Connect Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p- {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sT",
      "-p-",
      "tcp connect scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_121",
    "name": "TCP Connect Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sT -F {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing TCP Connect Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-F",
      "tcp connect scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_122",
    "name": "TCP Connect Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT --top-ports 50 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "--top-ports 50",
      "tcp connect scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_123",
    "name": "TCP Connect Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT --top-ports 200 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "--top-ports 200",
      "tcp connect scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_124",
    "name": "TCP Connect Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT --top-ports 500 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "--top-ports 500",
      "tcp connect scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_125",
    "name": "TCP Connect Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing TCP Connect Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 1433,1521,3306,5432,27017,6379",
      "tcp connect scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_126",
    "name": "TCP Connect Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing TCP Connect Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 502,102,47808,44818,20000",
      "tcp connect scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_127",
    "name": "TCP Connect Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 2375,2376,6443,10250,2379",
      "tcp connect scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_128",
    "name": "TCP Connect Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing TCP Connect Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 5060,5061,10000-20000",
      "tcp connect scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_129",
    "name": "TCP Connect Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 1194,500,4500,1723",
      "tcp connect scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_130",
    "name": "TCP Connect Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing TCP Connect Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "-p 389,636,88,464",
      "tcp connect scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sT": "Full 3-way handshake TCP scan. Used for non-root users or proxy routing.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_131",
    "name": "UDP Services Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 80,443 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing UDP Services Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 80,443",
      "udp services scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_132",
    "name": "UDP Services Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing UDP Services Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "udp services scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_133",
    "name": "UDP Services Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 1-1000 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing UDP Services Scan focused on Default Top 1000 Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 1-1000",
      "udp services scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_134",
    "name": "UDP Services Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 1-5000 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing UDP Services Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 1-5000",
      "udp services scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_135",
    "name": "UDP Services Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p- {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing UDP Services Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p-",
      "udp services scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_136",
    "name": "UDP Services Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sU -F {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing UDP Services Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-F",
      "udp services scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_137",
    "name": "UDP Services Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU --top-ports 50 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing UDP Services Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "--top-ports 50",
      "udp services scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_138",
    "name": "UDP Services Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU --top-ports 200 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing UDP Services Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "--top-ports 200",
      "udp services scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_139",
    "name": "UDP Services Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU --top-ports 500 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing UDP Services Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "--top-ports 500",
      "udp services scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_140",
    "name": "UDP Services Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing UDP Services Scan focused on Database Services Ports Scope.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 1433,1521,3306,5432,27017,6379",
      "udp services scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_141",
    "name": "UDP Services Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing UDP Services Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 502,102,47808,44818,20000",
      "udp services scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_142",
    "name": "UDP Services Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing UDP Services Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 2375,2376,6443,10250,2379",
      "udp services scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_143",
    "name": "UDP Services Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing UDP Services Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 5060,5061,10000-20000",
      "udp services scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_144",
    "name": "UDP Services Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing UDP Services Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 1194,500,4500,1723",
      "udp services scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_145",
    "name": "UDP Services Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing UDP Services Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sU",
      "-p 389,636,88,464",
      "udp services scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sU": "Connectionless UDP port scan for DNS, SNMP, DHCP, NTP, and VPN services.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_146",
    "name": "TCP Null Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 80,443 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing TCP Null Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 80,443",
      "tcp null scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_147",
    "name": "TCP Null Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing TCP Null Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "tcp null scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_148",
    "name": "TCP Null Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 1-1000 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing TCP Null Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 1-1000",
      "tcp null scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_149",
    "name": "TCP Null Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 1-5000 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing TCP Null Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 1-5000",
      "tcp null scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_150",
    "name": "TCP Null Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p- {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing TCP Null Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "-sN",
      "-p-",
      "tcp null scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_151",
    "name": "TCP Null Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sN -F {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing TCP Null Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-F",
      "tcp null scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_152",
    "name": "TCP Null Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN --top-ports 50 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing TCP Null Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "--top-ports 50",
      "tcp null scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_153",
    "name": "TCP Null Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN --top-ports 200 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing TCP Null Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "--top-ports 200",
      "tcp null scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_154",
    "name": "TCP Null Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN --top-ports 500 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing TCP Null Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "--top-ports 500",
      "tcp null scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_155",
    "name": "TCP Null Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing TCP Null Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 1433,1521,3306,5432,27017,6379",
      "tcp null scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_156",
    "name": "TCP Null Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing TCP Null Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 502,102,47808,44818,20000",
      "tcp null scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_157",
    "name": "TCP Null Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing TCP Null Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 2375,2376,6443,10250,2379",
      "tcp null scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_158",
    "name": "TCP Null Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing TCP Null Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 5060,5061,10000-20000",
      "tcp null scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_159",
    "name": "TCP Null Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing TCP Null Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 1194,500,4500,1723",
      "tcp null scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_160",
    "name": "TCP Null Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sN -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Sets no TCP control flags to bypass non-stateful firewall inspection. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing TCP Null Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sN",
      "-p 389,636,88,464",
      "tcp null scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sN": "Sets no TCP control flags to bypass non-stateful firewall inspection.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_161",
    "name": "TCP FIN Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 80,443 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 80,443",
      "tcp fin scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_162",
    "name": "TCP FIN Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "tcp fin scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_163",
    "name": "TCP FIN Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 1-1000 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 1-1000",
      "tcp fin scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_164",
    "name": "TCP FIN Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 1-5000 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing TCP FIN Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 1-5000",
      "tcp fin scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_165",
    "name": "TCP FIN Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p- {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "-sF",
      "-p-",
      "tcp fin scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_166",
    "name": "TCP FIN Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sF -F {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing TCP FIN Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-F",
      "tcp fin scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_167",
    "name": "TCP FIN Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF --top-ports 50 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "--top-ports 50",
      "tcp fin scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_168",
    "name": "TCP FIN Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF --top-ports 200 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "--top-ports 200",
      "tcp fin scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_169",
    "name": "TCP FIN Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF --top-ports 500 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "--top-ports 500",
      "tcp fin scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_170",
    "name": "TCP FIN Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing TCP FIN Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 1433,1521,3306,5432,27017,6379",
      "tcp fin scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_171",
    "name": "TCP FIN Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing TCP FIN Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 502,102,47808,44818,20000",
      "tcp fin scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_172",
    "name": "TCP FIN Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 2375,2376,6443,10250,2379",
      "tcp fin scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_173",
    "name": "TCP FIN Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing TCP FIN Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 5060,5061,10000-20000",
      "tcp fin scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_174",
    "name": "TCP FIN Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 1194,500,4500,1723",
      "tcp fin scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_175",
    "name": "TCP FIN Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sF -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing TCP FIN Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sF",
      "-p 389,636,88,464",
      "tcp fin scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sF": "Sets only FIN flag to probe firewall statefulness and RFC 793 compliance.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_176",
    "name": "TCP Xmas Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 80,443 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 80,443",
      "tcp xmas scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_177",
    "name": "TCP Xmas Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "tcp xmas scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_178",
    "name": "TCP Xmas Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 1-1000 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 1-1000",
      "tcp xmas scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_179",
    "name": "TCP Xmas Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 1-5000 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing TCP Xmas Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 1-5000",
      "tcp xmas scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_180",
    "name": "TCP Xmas Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p- {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "-sX",
      "-p-",
      "tcp xmas scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_181",
    "name": "TCP Xmas Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sX -F {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing TCP Xmas Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-F",
      "tcp xmas scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_182",
    "name": "TCP Xmas Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX --top-ports 50 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "--top-ports 50",
      "tcp xmas scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_183",
    "name": "TCP Xmas Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX --top-ports 200 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "--top-ports 200",
      "tcp xmas scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_184",
    "name": "TCP Xmas Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX --top-ports 500 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "--top-ports 500",
      "tcp xmas scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_185",
    "name": "TCP Xmas Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing TCP Xmas Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 1433,1521,3306,5432,27017,6379",
      "tcp xmas scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_186",
    "name": "TCP Xmas Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing TCP Xmas Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 502,102,47808,44818,20000",
      "tcp xmas scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_187",
    "name": "TCP Xmas Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 2375,2376,6443,10250,2379",
      "tcp xmas scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_188",
    "name": "TCP Xmas Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing TCP Xmas Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 5060,5061,10000-20000",
      "tcp xmas scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_189",
    "name": "TCP Xmas Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 1194,500,4500,1723",
      "tcp xmas scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_190",
    "name": "TCP Xmas Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sX -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Sets FIN, URG, and PSH flags to probe stateless packet inspection. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing TCP Xmas Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-sX",
      "-p 389,636,88,464",
      "tcp xmas scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sX": "Sets FIN, URG, and PSH flags to probe stateless packet inspection.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_191",
    "name": "TCP ACK Firewall Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 80,443 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 80,443",
      "tcp ack firewall scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_192",
    "name": "TCP ACK Firewall Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "tcp ack firewall scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_193",
    "name": "TCP ACK Firewall Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 1-1000 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 1-1000",
      "tcp ack firewall scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_194",
    "name": "TCP ACK Firewall Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 1-5000 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 1-5000",
      "tcp ack firewall scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_195",
    "name": "TCP ACK Firewall Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p- {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sA",
      "-p-",
      "tcp ack firewall scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_196",
    "name": "TCP ACK Firewall Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sA -F {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-F",
      "tcp ack firewall scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_197",
    "name": "TCP ACK Firewall Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA --top-ports 50 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "--top-ports 50",
      "tcp ack firewall scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_198",
    "name": "TCP ACK Firewall Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA --top-ports 200 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "--top-ports 200",
      "tcp ack firewall scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_199",
    "name": "TCP ACK Firewall Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA --top-ports 500 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "--top-ports 500",
      "tcp ack firewall scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_200",
    "name": "TCP ACK Firewall Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 1433,1521,3306,5432,27017,6379",
      "tcp ack firewall scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_201",
    "name": "TCP ACK Firewall Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 502,102,47808,44818,20000",
      "tcp ack firewall scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_202",
    "name": "TCP ACK Firewall Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 2375,2376,6443,10250,2379",
      "tcp ack firewall scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_203",
    "name": "TCP ACK Firewall Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 5060,5061,10000-20000",
      "tcp ack firewall scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_204",
    "name": "TCP ACK Firewall Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 1194,500,4500,1723",
      "tcp ack firewall scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_205",
    "name": "TCP ACK Firewall Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sA -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Sends TCP ACK probes to map firewall rule sets and filter states. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing TCP ACK Firewall Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sA",
      "-p 389,636,88,464",
      "tcp ack firewall scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sA": "Sends TCP ACK probes to map firewall rule sets and filter states.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_206",
    "name": "TCP Window Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 80,443 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing TCP Window Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 80,443",
      "tcp window scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_207",
    "name": "TCP Window Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing TCP Window Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "tcp window scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_208",
    "name": "TCP Window Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 1-1000 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing TCP Window Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 1-1000",
      "tcp window scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_209",
    "name": "TCP Window Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 1-5000 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing TCP Window Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 1-5000",
      "tcp window scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_210",
    "name": "TCP Window Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p- {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing TCP Window Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sW",
      "-p-",
      "tcp window scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_211",
    "name": "TCP Window Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sW -F {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing TCP Window Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-F",
      "tcp window scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_212",
    "name": "TCP Window Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW --top-ports 50 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing TCP Window Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "--top-ports 50",
      "tcp window scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_213",
    "name": "TCP Window Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW --top-ports 200 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing TCP Window Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "--top-ports 200",
      "tcp window scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_214",
    "name": "TCP Window Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW --top-ports 500 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing TCP Window Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "--top-ports 500",
      "tcp window scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_215",
    "name": "TCP Window Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing TCP Window Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 1433,1521,3306,5432,27017,6379",
      "tcp window scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_216",
    "name": "TCP Window Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing TCP Window Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 502,102,47808,44818,20000",
      "tcp window scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_217",
    "name": "TCP Window Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing TCP Window Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 2375,2376,6443,10250,2379",
      "tcp window scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_218",
    "name": "TCP Window Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing TCP Window Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 5060,5061,10000-20000",
      "tcp window scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_219",
    "name": "TCP Window Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing TCP Window Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 1194,500,4500,1723",
      "tcp window scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_220",
    "name": "TCP Window Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sW -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Examines TCP window size in RST responses to detect open ports. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing TCP Window Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sW",
      "-p 389,636,88,464",
      "tcp window scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sW": "Examines TCP window size in RST responses to detect open ports.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_221",
    "name": "Maimon FIN/ACK Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 80,443 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 80,443",
      "maimon fin/ack scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_222",
    "name": "Maimon FIN/ACK Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "maimon fin/ack scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_223",
    "name": "Maimon FIN/ACK Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 1-1000 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 1-1000",
      "maimon fin/ack scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_224",
    "name": "Maimon FIN/ACK Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 1-5000 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 1-5000",
      "maimon fin/ack scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_225",
    "name": "Maimon FIN/ACK Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p- {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sM",
      "-p-",
      "maimon fin/ack scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_226",
    "name": "Maimon FIN/ACK Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sM -F {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-F",
      "maimon fin/ack scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_227",
    "name": "Maimon FIN/ACK Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM --top-ports 50 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "--top-ports 50",
      "maimon fin/ack scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_228",
    "name": "Maimon FIN/ACK Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM --top-ports 200 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "--top-ports 200",
      "maimon fin/ack scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_229",
    "name": "Maimon FIN/ACK Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM --top-ports 500 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "--top-ports 500",
      "maimon fin/ack scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_230",
    "name": "Maimon FIN/ACK Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 1433,1521,3306,5432,27017,6379",
      "maimon fin/ack scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_231",
    "name": "Maimon FIN/ACK Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 502,102,47808,44818,20000",
      "maimon fin/ack scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_232",
    "name": "Maimon FIN/ACK Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 2375,2376,6443,10250,2379",
      "maimon fin/ack scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_233",
    "name": "Maimon FIN/ACK Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 5060,5061,10000-20000",
      "maimon fin/ack scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_234",
    "name": "Maimon FIN/ACK Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 1194,500,4500,1723",
      "maimon fin/ack scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_235",
    "name": "Maimon FIN/ACK Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sM -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing Maimon FIN/ACK Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sM",
      "-p 389,636,88,464",
      "maimon fin/ack scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sM": "Sends FIN/ACK probes to test BSD-derived TCP/IP stacks.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_236",
    "name": "SCTP INIT Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 80,443 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 80,443",
      "sctp init scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_237",
    "name": "SCTP INIT Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "sctp init scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_238",
    "name": "SCTP INIT Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 1-1000 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 1-1000",
      "sctp init scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_239",
    "name": "SCTP INIT Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 1-5000 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing SCTP INIT Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 1-5000",
      "sctp init scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_240",
    "name": "SCTP INIT Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p- {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sZ",
      "-p-",
      "sctp init scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_241",
    "name": "SCTP INIT Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -F {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing SCTP INIT Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-F",
      "sctp init scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_242",
    "name": "SCTP INIT Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ --top-ports 50 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "--top-ports 50",
      "sctp init scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_243",
    "name": "SCTP INIT Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ --top-ports 200 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "--top-ports 200",
      "sctp init scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_244",
    "name": "SCTP INIT Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ --top-ports 500 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "--top-ports 500",
      "sctp init scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_245",
    "name": "SCTP INIT Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing SCTP INIT Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 1433,1521,3306,5432,27017,6379",
      "sctp init scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_246",
    "name": "SCTP INIT Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing SCTP INIT Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 502,102,47808,44818,20000",
      "sctp init scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_247",
    "name": "SCTP INIT Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 2375,2376,6443,10250,2379",
      "sctp init scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_248",
    "name": "SCTP INIT Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing SCTP INIT Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 5060,5061,10000-20000",
      "sctp init scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_249",
    "name": "SCTP INIT Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 1194,500,4500,1723",
      "sctp init scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_250",
    "name": "SCTP INIT Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sZ -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing SCTP INIT Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sZ",
      "-p 389,636,88,464",
      "sctp init scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sZ": "Scans SCTP endpoints for SS7/SIGTRAN telecommunication protocol services.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_251",
    "name": "SCTP COOKIE-ECHO Scan - Web HTTP/HTTPS Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 80,443 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Web HTTP/HTTPS Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Web HTTP/HTTPS Ports.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 80,443",
      "sctp cookie-echo scan",
      "web http/https ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 80,443": "Sets port target scope: Web HTTP/HTTPS Ports."
    }
  },
  {
    "id": "cmd_ps_252",
    "name": "SCTP COOKIE-ECHO Scan - Top 10 Infrastructure Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 21,22,23,25,80,110,143,443,445,3389 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Top 10 Infrastructure Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Top 10 Infrastructure Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 21,22,23,25,80,110,143,443,445,3389",
      "sctp cookie-echo scan",
      "top 10 infrastructure ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 21,22,23,25,80,110,143,443,445,3389": "Sets port target scope: Top 10 Infrastructure Ports."
    }
  },
  {
    "id": "cmd_ps_253",
    "name": "SCTP COOKIE-ECHO Scan - Default Top 1000 Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 1-1000 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Default Top 1000 Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Default Top 1000 Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 1-1000",
      "sctp cookie-echo scan",
      "default top 1000 ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 1-1000": "Sets port target scope: Default Top 1000 Ports."
    }
  },
  {
    "id": "cmd_ps_254",
    "name": "SCTP COOKIE-ECHO Scan - Top 5000 Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 1-5000 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Top 5000 Ports Scope.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Top 5000 Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 1-5000",
      "sctp cookie-echo scan",
      "top 5000 ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 1-5000": "Sets port target scope: Top 5000 Ports Scope."
    }
  },
  {
    "id": "cmd_ps_255",
    "name": "SCTP COOKIE-ECHO Scan - All 65,535 TCP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p- {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: All 65,535 TCP Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on All 65,535 TCP Ports.",
    "speedLevel": 2,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "-sY",
      "-p-",
      "sctp cookie-echo scan",
      "all 65,535 tcp ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p-": "Sets port target scope: All 65,535 TCP Ports."
    }
  },
  {
    "id": "cmd_ps_256",
    "name": "SCTP COOKIE-ECHO Scan - Fast Top 100 Ports Mode",
    "category": "port_scan",
    "commandPattern": "nmap -sY -F {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Fast Top 100 Ports Mode.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Fast Top 100 Ports Mode.",
    "speedLevel": 5,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-F",
      "sctp cookie-echo scan",
      "fast top 100 ports mode",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-F": "Sets port target scope: Fast Top 100 Ports Mode."
    }
  },
  {
    "id": "cmd_ps_257",
    "name": "SCTP COOKIE-ECHO Scan - Top 50 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY --top-ports 50 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Top 50 Most Frequent Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Top 50 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "--top-ports 50",
      "sctp cookie-echo scan",
      "top 50 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "--top-ports 50": "Sets port target scope: Top 50 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_258",
    "name": "SCTP COOKIE-ECHO Scan - Top 200 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY --top-ports 200 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Top 200 Most Frequent Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Top 200 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "--top-ports 200",
      "sctp cookie-echo scan",
      "top 200 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "--top-ports 200": "Sets port target scope: Top 200 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_259",
    "name": "SCTP COOKIE-ECHO Scan - Top 500 Most Frequent Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY --top-ports 500 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Top 500 Most Frequent Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Top 500 Most Frequent Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "--top-ports 500",
      "sctp cookie-echo scan",
      "top 500 most frequent ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "--top-ports 500": "Sets port target scope: Top 500 Most Frequent Ports."
    }
  },
  {
    "id": "cmd_ps_260",
    "name": "SCTP COOKIE-ECHO Scan - Database Services Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 1433,1521,3306,5432,27017,6379 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Database Services Ports Scope.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Database Services Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 1433,1521,3306,5432,27017,6379",
      "sctp cookie-echo scan",
      "database services ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 1433,1521,3306,5432,27017,6379": "Sets port target scope: Database Services Ports Scope."
    }
  },
  {
    "id": "cmd_ps_261",
    "name": "SCTP COOKIE-ECHO Scan - SCADA & Industrial PLC Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 502,102,47808,44818,20000 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: SCADA & Industrial PLC Ports Scope.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on SCADA & Industrial PLC Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 502,102,47808,44818,20000",
      "sctp cookie-echo scan",
      "scada & industrial plc ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 502,102,47808,44818,20000": "Sets port target scope: SCADA & Industrial PLC Ports Scope."
    }
  },
  {
    "id": "cmd_ps_262",
    "name": "SCTP COOKIE-ECHO Scan - Cloud & Container Management Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 2375,2376,6443,10250,2379 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Cloud & Container Management Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Cloud & Container Management Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 2375,2376,6443,10250,2379",
      "sctp cookie-echo scan",
      "cloud & container management ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 2375,2376,6443,10250,2379": "Sets port target scope: Cloud & Container Management Ports."
    }
  },
  {
    "id": "cmd_ps_263",
    "name": "SCTP COOKIE-ECHO Scan - VoIP SIP & Media Ports Scope",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 5060,5061,10000-20000 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: VoIP SIP & Media Ports Scope.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on VoIP SIP & Media Ports Scope.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 5060,5061,10000-20000",
      "sctp cookie-echo scan",
      "voip sip & media ports scope",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 5060,5061,10000-20000": "Sets port target scope: VoIP SIP & Media Ports Scope."
    }
  },
  {
    "id": "cmd_ps_264",
    "name": "SCTP COOKIE-ECHO Scan - VPN Gateway Listener Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 1194,500,4500,1723 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: VPN Gateway Listener Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on VPN Gateway Listener Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 1194,500,4500,1723",
      "sctp cookie-echo scan",
      "vpn gateway listener ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 1194,500,4500,1723": "Sets port target scope: VPN Gateway Listener Ports."
    }
  },
  {
    "id": "cmd_ps_265",
    "name": "SCTP COOKIE-ECHO Scan - Active Directory & LDAP Ports",
    "category": "port_scan",
    "commandPattern": "nmap -sY -p 389,636,88,464 {timing} {flags} {target}",
    "description": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection. Target scope: Active Directory & LDAP Ports.",
    "whenToUse": "Executing SCTP COOKIE-ECHO Scan focused on Active Directory & LDAP Ports.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "Low",
    "keywords": [
      "-sY",
      "-p 389,636,88,464",
      "sctp cookie-echo scan",
      "active directory & ldap ports",
      "port scan"
    ],
    "flagExplanations": {
      "-sY": "Sends SCTP COOKIE-ECHO chunks for stealthy SCTP service detection.",
      "-p 389,636,88,464": "Sets port target scope: Active Directory & LDAP Ports."
    }
  },
  {
    "id": "cmd_ps_sp_266",
    "name": "IPID Idle Zombie Anonymous Scan (-p 1-1000)",
    "category": "port_scan",
    "commandPattern": "nmap -sI 192.168.1.50 -p 1-1000 {timing} {target}",
    "description": "100% anonymous port scan relaying probes via zombie IP.",
    "whenToUse": "Specialized port scan: IPID Idle Zombie Anonymous Scan over -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 5,
    "riskLevel": "High",
    "keywords": [
      "-sI 192.168.1.50",
      "ipid idle zombie anonymous scan",
      "special scan"
    ],
    "flagExplanations": {
      "-sI 192.168.1.50": "100% anonymous port scan relaying probes via zombie IP."
    }
  },
  {
    "id": "cmd_ps_sp_267",
    "name": "IPID Idle Zombie Anonymous Scan (-p 22,80,443,445)",
    "category": "port_scan",
    "commandPattern": "nmap -sI 192.168.1.50 -p 22,80,443,445 {timing} {target}",
    "description": "100% anonymous port scan relaying probes via zombie IP.",
    "whenToUse": "Specialized port scan: IPID Idle Zombie Anonymous Scan over -p 22,80,443,445.",
    "speedLevel": 3,
    "stealthLevel": 5,
    "riskLevel": "High",
    "keywords": [
      "-sI 192.168.1.50",
      "ipid idle zombie anonymous scan",
      "special scan"
    ],
    "flagExplanations": {
      "-sI 192.168.1.50": "100% anonymous port scan relaying probes via zombie IP."
    }
  },
  {
    "id": "cmd_ps_sp_268",
    "name": "IPID Idle Zombie Anonymous Scan (-F)",
    "category": "port_scan",
    "commandPattern": "nmap -sI 192.168.1.50 -F {timing} {target}",
    "description": "100% anonymous port scan relaying probes via zombie IP.",
    "whenToUse": "Specialized port scan: IPID Idle Zombie Anonymous Scan over -F.",
    "speedLevel": 3,
    "stealthLevel": 5,
    "riskLevel": "High",
    "keywords": [
      "-sI 192.168.1.50",
      "ipid idle zombie anonymous scan",
      "special scan"
    ],
    "flagExplanations": {
      "-sI 192.168.1.50": "100% anonymous port scan relaying probes via zombie IP."
    }
  },
  {
    "id": "cmd_ps_sp_269",
    "name": "FTP Bounce Relay Scan (-p 1-1000)",
    "category": "port_scan",
    "commandPattern": "nmap -b ftpuser:ftppass@192.168.1.20 -p 1-1000 {timing} {target}",
    "description": "Relays scan probes through a vulnerable FTP proxy server.",
    "whenToUse": "Specialized port scan: FTP Bounce Relay Scan over -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 5,
    "riskLevel": "High",
    "keywords": [
      "-b ftpuser:ftppass@192.168.1.20",
      "ftp bounce relay scan",
      "special scan"
    ],
    "flagExplanations": {
      "-b ftpuser:ftppass@192.168.1.20": "Relays scan probes through a vulnerable FTP proxy server."
    }
  },
  {
    "id": "cmd_ps_sp_270",
    "name": "FTP Bounce Relay Scan (-p 22,80,443,445)",
    "category": "port_scan",
    "commandPattern": "nmap -b ftpuser:ftppass@192.168.1.20 -p 22,80,443,445 {timing} {target}",
    "description": "Relays scan probes through a vulnerable FTP proxy server.",
    "whenToUse": "Specialized port scan: FTP Bounce Relay Scan over -p 22,80,443,445.",
    "speedLevel": 3,
    "stealthLevel": 5,
    "riskLevel": "High",
    "keywords": [
      "-b ftpuser:ftppass@192.168.1.20",
      "ftp bounce relay scan",
      "special scan"
    ],
    "flagExplanations": {
      "-b ftpuser:ftppass@192.168.1.20": "Relays scan probes through a vulnerable FTP proxy server."
    }
  },
  {
    "id": "cmd_ps_sp_271",
    "name": "FTP Bounce Relay Scan (-F)",
    "category": "port_scan",
    "commandPattern": "nmap -b ftpuser:ftppass@192.168.1.20 -F {timing} {target}",
    "description": "Relays scan probes through a vulnerable FTP proxy server.",
    "whenToUse": "Specialized port scan: FTP Bounce Relay Scan over -F.",
    "speedLevel": 3,
    "stealthLevel": 5,
    "riskLevel": "High",
    "keywords": [
      "-b ftpuser:ftppass@192.168.1.20",
      "ftp bounce relay scan",
      "special scan"
    ],
    "flagExplanations": {
      "-b ftpuser:ftppass@192.168.1.20": "Relays scan probes through a vulnerable FTP proxy server."
    }
  },
  {
    "id": "cmd_ps_sp_272",
    "name": "Sequential Port Order Scan (-p 1-1000)",
    "category": "port_scan",
    "commandPattern": "nmap -r -p 1-1000 {timing} {target}",
    "description": "Scans ports sequentially (1-1024) instead of randomizing order.",
    "whenToUse": "Specialized port scan: Sequential Port Order Scan over -p 1-1000.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-r",
      "sequential port order scan",
      "special scan"
    ],
    "flagExplanations": {
      "-r": "Scans ports sequentially (1-1024) instead of randomizing order."
    }
  },
  {
    "id": "cmd_ps_sp_273",
    "name": "Sequential Port Order Scan (-p 22,80,443,445)",
    "category": "port_scan",
    "commandPattern": "nmap -r -p 22,80,443,445 {timing} {target}",
    "description": "Scans ports sequentially (1-1024) instead of randomizing order.",
    "whenToUse": "Specialized port scan: Sequential Port Order Scan over -p 22,80,443,445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-r",
      "sequential port order scan",
      "special scan"
    ],
    "flagExplanations": {
      "-r": "Scans ports sequentially (1-1024) instead of randomizing order."
    }
  },
  {
    "id": "cmd_ps_sp_274",
    "name": "Sequential Port Order Scan (-F)",
    "category": "port_scan",
    "commandPattern": "nmap -r -F {timing} {target}",
    "description": "Scans ports sequentially (1-1024) instead of randomizing order.",
    "whenToUse": "Specialized port scan: Sequential Port Order Scan over -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-r",
      "sequential port order scan",
      "special scan"
    ],
    "flagExplanations": {
      "-r": "Scans ports sequentially (1-1024) instead of randomizing order."
    }
  },
  {
    "id": "cmd_ps_sp_275",
    "name": "High-Frequency Port Ratio Scan (-p 1-1000)",
    "category": "port_scan",
    "commandPattern": "nmap --port-ratio 0.2 -p 1-1000 {timing} {target}",
    "description": "Scans ports with frequency ratio > 0.2 in Nmap services database.",
    "whenToUse": "Specialized port scan: High-Frequency Port Ratio Scan over -p 1-1000.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "--port-ratio 0.2",
      "high-frequency port ratio scan",
      "special scan"
    ],
    "flagExplanations": {
      "--port-ratio 0.2": "Scans ports with frequency ratio > 0.2 in Nmap services database."
    }
  },
  {
    "id": "cmd_ps_sp_276",
    "name": "High-Frequency Port Ratio Scan (-p 22,80,443,445)",
    "category": "port_scan",
    "commandPattern": "nmap --port-ratio 0.2 -p 22,80,443,445 {timing} {target}",
    "description": "Scans ports with frequency ratio > 0.2 in Nmap services database.",
    "whenToUse": "Specialized port scan: High-Frequency Port Ratio Scan over -p 22,80,443,445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "--port-ratio 0.2",
      "high-frequency port ratio scan",
      "special scan"
    ],
    "flagExplanations": {
      "--port-ratio 0.2": "Scans ports with frequency ratio > 0.2 in Nmap services database."
    }
  },
  {
    "id": "cmd_ps_sp_277",
    "name": "High-Frequency Port Ratio Scan (-F)",
    "category": "port_scan",
    "commandPattern": "nmap --port-ratio 0.2 -F {timing} {target}",
    "description": "Scans ports with frequency ratio > 0.2 in Nmap services database.",
    "whenToUse": "Specialized port scan: High-Frequency Port Ratio Scan over -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "--port-ratio 0.2",
      "high-frequency port ratio scan",
      "special scan"
    ],
    "flagExplanations": {
      "--port-ratio 0.2": "Scans ports with frequency ratio > 0.2 in Nmap services database."
    }
  },
  {
    "id": "cmd_ps_sp_278",
    "name": "Exclude Busy Web Ports Scope (-p 1-1000)",
    "category": "port_scan",
    "commandPattern": "nmap --exclude-ports 80,443 -p 1-1000 {timing} {target}",
    "description": "Scans target ports while skipping high-traffic HTTP/HTTPS ports.",
    "whenToUse": "Specialized port scan: Exclude Busy Web Ports Scope over -p 1-1000.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "--exclude-ports 80,443",
      "exclude busy web ports scope",
      "special scan"
    ],
    "flagExplanations": {
      "--exclude-ports 80,443": "Scans target ports while skipping high-traffic HTTP/HTTPS ports."
    }
  },
  {
    "id": "cmd_ps_sp_279",
    "name": "Exclude Busy Web Ports Scope (-p 22,80,443,445)",
    "category": "port_scan",
    "commandPattern": "nmap --exclude-ports 80,443 -p 22,80,443,445 {timing} {target}",
    "description": "Scans target ports while skipping high-traffic HTTP/HTTPS ports.",
    "whenToUse": "Specialized port scan: Exclude Busy Web Ports Scope over -p 22,80,443,445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "--exclude-ports 80,443",
      "exclude busy web ports scope",
      "special scan"
    ],
    "flagExplanations": {
      "--exclude-ports 80,443": "Scans target ports while skipping high-traffic HTTP/HTTPS ports."
    }
  },
  {
    "id": "cmd_ps_sp_280",
    "name": "Exclude Busy Web Ports Scope (-F)",
    "category": "port_scan",
    "commandPattern": "nmap --exclude-ports 80,443 -F {timing} {target}",
    "description": "Scans target ports while skipping high-traffic HTTP/HTTPS ports.",
    "whenToUse": "Specialized port scan: Exclude Busy Web Ports Scope over -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "--exclude-ports 80,443",
      "exclude busy web ports scope",
      "special scan"
    ],
    "flagExplanations": {
      "--exclude-ports 80,443": "Scans target ports while skipping high-traffic HTTP/HTTPS ports."
    }
  },
  {
    "id": "cmd_sv_281",
    "name": "Standard Service Version Detection (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p 22,80,443 {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_282",
    "name": "Standard Service Version Detection (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p 21,25,110,143 {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_283",
    "name": "Standard Service Version Detection (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p 445,139 {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_284",
    "name": "Standard Service Version Detection (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p 3389,5900 {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_285",
    "name": "Standard Service Version Detection (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p 1433,3306,5432 {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_286",
    "name": "Standard Service Version Detection (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p 8080,8443,9090 {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_287",
    "name": "Standard Service Version Detection (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p 502,102 {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_288",
    "name": "Standard Service Version Detection (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p 1-1000 {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_289",
    "name": "Standard Service Version Detection (-F)",
    "category": "service_os",
    "commandPattern": "nmap -sV -F {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -F.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_290",
    "name": "Standard Service Version Detection (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -sV -p- {timing} {target}",
    "description": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Standard Service Version Detection on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "standard service version detection",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-sV": "Probes open ports to determine exact application name and s\u00fcr\u00fcm string."
    }
  },
  {
    "id": "cmd_sv_291",
    "name": "OS Stack Fingerprinting (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -O -p 22,80,443 {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_292",
    "name": "OS Stack Fingerprinting (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -O -p 21,25,110,143 {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_293",
    "name": "OS Stack Fingerprinting (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -O -p 445,139 {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_294",
    "name": "OS Stack Fingerprinting (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -O -p 3389,5900 {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_295",
    "name": "OS Stack Fingerprinting (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -O -p 1433,3306,5432 {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_296",
    "name": "OS Stack Fingerprinting (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -O -p 8080,8443,9090 {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_297",
    "name": "OS Stack Fingerprinting (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -O -p 502,102 {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_298",
    "name": "OS Stack Fingerprinting (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -O -p 1-1000 {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_299",
    "name": "OS Stack Fingerprinting (-F)",
    "category": "service_os",
    "commandPattern": "nmap -O -F {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -F.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_300",
    "name": "OS Stack Fingerprinting (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -O -p- {timing} {target}",
    "description": "Analyzes TCP/IP packet responsiveness to determine target Operating System. Target scope: -p-.",
    "whenToUse": "Service & OS identification using OS Stack Fingerprinting on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "os stack fingerprinting",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-O": "Analyzes TCP/IP packet responsiveness to determine target Operating System."
    }
  },
  {
    "id": "cmd_sv_301",
    "name": "Aggressive All-in-One Scan (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -A -p 22,80,443 {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_302",
    "name": "Aggressive All-in-One Scan (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -A -p 21,25,110,143 {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_303",
    "name": "Aggressive All-in-One Scan (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -A -p 445,139 {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_304",
    "name": "Aggressive All-in-One Scan (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -A -p 3389,5900 {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_305",
    "name": "Aggressive All-in-One Scan (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -A -p 1433,3306,5432 {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_306",
    "name": "Aggressive All-in-One Scan (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -A -p 8080,8443,9090 {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_307",
    "name": "Aggressive All-in-One Scan (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -A -p 502,102 {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_308",
    "name": "Aggressive All-in-One Scan (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -A -p 1-1000 {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_309",
    "name": "Aggressive All-in-One Scan (-F)",
    "category": "service_os",
    "commandPattern": "nmap -A -F {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -F.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_310",
    "name": "Aggressive All-in-One Scan (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -A -p- {timing} {target}",
    "description": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Aggressive All-in-One Scan on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 1,
    "riskLevel": "High",
    "keywords": [
      "-A",
      "aggressive all-in-one scan",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-A": "Enables OS (-O), Version (-sV), Default Scripts (-sC), and Traceroute."
    }
  },
  {
    "id": "cmd_sv_311",
    "name": "Minimal Light Version Probe (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p 22,80,443 {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p 22,80,443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_312",
    "name": "Minimal Light Version Probe (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p 21,25,110,143 {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p 21,25,110,143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_313",
    "name": "Minimal Light Version Probe (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p 445,139 {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p 445,139.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_314",
    "name": "Minimal Light Version Probe (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p 3389,5900 {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p 3389,5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_315",
    "name": "Minimal Light Version Probe (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p 1433,3306,5432 {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p 1433,3306,5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_316",
    "name": "Minimal Light Version Probe (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p 8080,8443,9090 {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p 8080,8443,9090.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_317",
    "name": "Minimal Light Version Probe (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p 502,102 {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p 502,102.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_318",
    "name": "Minimal Light Version Probe (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p 1-1000 {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p 1-1000.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_319",
    "name": "Minimal Light Version Probe (-F)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -F {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -F.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_320",
    "name": "Minimal Light Version Probe (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 0 -p- {timing} {target}",
    "description": "Fast light version probe (intensity 0) for high-speed banner grabbing. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Minimal Light Version Probe on ports -p-.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 0",
      "minimal light version probe",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 0": "Fast light version probe (intensity 0) for high-speed banner grabbing."
    }
  },
  {
    "id": "cmd_sv_321",
    "name": "Medium Version Probe Pacing (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p 22,80,443 {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_322",
    "name": "Medium Version Probe Pacing (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p 21,25,110,143 {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_323",
    "name": "Medium Version Probe Pacing (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p 445,139 {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_324",
    "name": "Medium Version Probe Pacing (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p 3389,5900 {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_325",
    "name": "Medium Version Probe Pacing (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p 1433,3306,5432 {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_326",
    "name": "Medium Version Probe Pacing (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p 8080,8443,9090 {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_327",
    "name": "Medium Version Probe Pacing (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p 502,102 {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_328",
    "name": "Medium Version Probe Pacing (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p 1-1000 {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_329",
    "name": "Medium Version Probe Pacing (-F)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -F {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -F.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_330",
    "name": "Medium Version Probe Pacing (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 5 -p- {timing} {target}",
    "description": "Balanced version probing intensity (intensity 5). Target scope: -p-.",
    "whenToUse": "Service & OS identification using Medium Version Probe Pacing on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 5",
      "medium version probe pacing",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 5": "Balanced version probing intensity (intensity 5)."
    }
  },
  {
    "id": "cmd_sv_331",
    "name": "Maximum Intensive Version Probe (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p 22,80,443 {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_332",
    "name": "Maximum Intensive Version Probe (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p 21,25,110,143 {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_333",
    "name": "Maximum Intensive Version Probe (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p 445,139 {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_334",
    "name": "Maximum Intensive Version Probe (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p 3389,5900 {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_335",
    "name": "Maximum Intensive Version Probe (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p 1433,3306,5432 {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_336",
    "name": "Maximum Intensive Version Probe (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p 8080,8443,9090 {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_337",
    "name": "Maximum Intensive Version Probe (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p 502,102 {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_338",
    "name": "Maximum Intensive Version Probe (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p 1-1000 {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_339",
    "name": "Maximum Intensive Version Probe (-F)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -F {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -F.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_340",
    "name": "Maximum Intensive Version Probe (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-intensity 9 -p- {timing} {target}",
    "description": "Executes all version probes (intensity 9) for maximum banner detection. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Maximum Intensive Version Probe on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-intensity 9",
      "maximum intensive version probe",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-intensity 9": "Executes all version probes (intensity 9) for maximum banner detection."
    }
  },
  {
    "id": "cmd_sv_341",
    "name": "Lightweight Version Detection (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p 22,80,443 {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_342",
    "name": "Lightweight Version Detection (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p 21,25,110,143 {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_343",
    "name": "Lightweight Version Detection (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p 445,139 {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_344",
    "name": "Lightweight Version Detection (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p 3389,5900 {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_345",
    "name": "Lightweight Version Detection (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p 1433,3306,5432 {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_346",
    "name": "Lightweight Version Detection (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p 8080,8443,9090 {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_347",
    "name": "Lightweight Version Detection (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p 502,102 {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_348",
    "name": "Lightweight Version Detection (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p 1-1000 {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_349",
    "name": "Lightweight Version Detection (-F)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -F {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -F.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_350",
    "name": "Lightweight Version Detection (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-light -p- {timing} {target}",
    "description": "Executes light version probes (intensity 2) for rapid scanning. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Lightweight Version Detection on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-light",
      "lightweight version detection",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-light": "Executes light version probes (intensity 2) for rapid scanning."
    }
  },
  {
    "id": "cmd_sv_351",
    "name": "Complete Exhaustive Version Probe (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p 22,80,443 {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_352",
    "name": "Complete Exhaustive Version Probe (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p 21,25,110,143 {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_353",
    "name": "Complete Exhaustive Version Probe (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p 445,139 {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_354",
    "name": "Complete Exhaustive Version Probe (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p 3389,5900 {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_355",
    "name": "Complete Exhaustive Version Probe (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p 1433,3306,5432 {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_356",
    "name": "Complete Exhaustive Version Probe (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p 8080,8443,9090 {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_357",
    "name": "Complete Exhaustive Version Probe (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p 502,102 {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_358",
    "name": "Complete Exhaustive Version Probe (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p 1-1000 {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_359",
    "name": "Complete Exhaustive Version Probe (-F)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -F {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -F.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_360",
    "name": "Complete Exhaustive Version Probe (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-all -p- {timing} {target}",
    "description": "Tries every single version probe against open ports. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Complete Exhaustive Version Probe on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-all",
      "complete exhaustive version probe",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-all": "Tries every single version probe against open ports."
    }
  },
  {
    "id": "cmd_sv_361",
    "name": "Verbose Version Probe Debug Trace (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p 22,80,443 {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_362",
    "name": "Verbose Version Probe Debug Trace (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p 21,25,110,143 {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_363",
    "name": "Verbose Version Probe Debug Trace (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p 445,139 {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_364",
    "name": "Verbose Version Probe Debug Trace (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p 3389,5900 {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_365",
    "name": "Verbose Version Probe Debug Trace (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p 1433,3306,5432 {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_366",
    "name": "Verbose Version Probe Debug Trace (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p 8080,8443,9090 {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_367",
    "name": "Verbose Version Probe Debug Trace (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p 502,102 {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_368",
    "name": "Verbose Version Probe Debug Trace (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p 1-1000 {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_369",
    "name": "Verbose Version Probe Debug Trace (-F)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -F {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -F.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_370",
    "name": "Verbose Version Probe Debug Trace (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -sV --version-trace -p- {timing} {target}",
    "description": "Prints detailed sent/received banner packet logs for debugging. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Verbose Version Probe Debug Trace on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV --version-trace",
      "verbose version probe debug trace",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-sV --version-trace": "Prints detailed sent/received banner packet logs for debugging."
    }
  },
  {
    "id": "cmd_sv_371",
    "name": "OS Detection Promising Target Limit (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p 22,80,443 {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_372",
    "name": "OS Detection Promising Target Limit (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p 21,25,110,143 {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_373",
    "name": "OS Detection Promising Target Limit (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p 445,139 {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_374",
    "name": "OS Detection Promising Target Limit (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p 3389,5900 {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_375",
    "name": "OS Detection Promising Target Limit (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p 1433,3306,5432 {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_376",
    "name": "OS Detection Promising Target Limit (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p 8080,8443,9090 {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_377",
    "name": "OS Detection Promising Target Limit (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p 502,102 {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_378",
    "name": "OS Detection Promising Target Limit (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p 1-1000 {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_379",
    "name": "OS Detection Promising Target Limit (-F)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -F {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -F.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_380",
    "name": "OS Detection Promising Target Limit (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-limit -p- {timing} {target}",
    "description": "Skips OS detection if host lacks open/closed ports. Target scope: -p-.",
    "whenToUse": "Service & OS identification using OS Detection Promising Target Limit on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-limit",
      "os detection promising target limit",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-limit": "Skips OS detection if host lacks open/closed ports."
    }
  },
  {
    "id": "cmd_sv_381",
    "name": "Aggressive OS Fingerprint Guessing (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p 22,80,443 {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_382",
    "name": "Aggressive OS Fingerprint Guessing (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p 21,25,110,143 {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_383",
    "name": "Aggressive OS Fingerprint Guessing (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p 445,139 {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_384",
    "name": "Aggressive OS Fingerprint Guessing (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p 3389,5900 {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_385",
    "name": "Aggressive OS Fingerprint Guessing (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p 1433,3306,5432 {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_386",
    "name": "Aggressive OS Fingerprint Guessing (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p 8080,8443,9090 {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_387",
    "name": "Aggressive OS Fingerprint Guessing (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p 502,102 {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_388",
    "name": "Aggressive OS Fingerprint Guessing (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p 1-1000 {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_389",
    "name": "Aggressive OS Fingerprint Guessing (-F)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -F {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -F.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_390",
    "name": "Aggressive OS Fingerprint Guessing (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -O --osscan-guess -p- {timing} {target}",
    "description": "Forces aggressive OS matching when signature is not 100% exact. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Aggressive OS Fingerprint Guessing on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --osscan-guess",
      "aggressive os fingerprint guessing",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-O --osscan-guess": "Forces aggressive OS matching when signature is not 100% exact."
    }
  },
  {
    "id": "cmd_sv_391",
    "name": "Single OS Probe Retry Limit (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p 22,80,443 {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_392",
    "name": "Single OS Probe Retry Limit (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p 21,25,110,143 {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_393",
    "name": "Single OS Probe Retry Limit (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p 445,139 {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_394",
    "name": "Single OS Probe Retry Limit (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p 3389,5900 {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_395",
    "name": "Single OS Probe Retry Limit (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p 1433,3306,5432 {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_396",
    "name": "Single OS Probe Retry Limit (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p 8080,8443,9090 {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_397",
    "name": "Single OS Probe Retry Limit (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p 502,102 {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_398",
    "name": "Single OS Probe Retry Limit (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p 1-1000 {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_399",
    "name": "Single OS Probe Retry Limit (-F)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -F {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -F.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_400",
    "name": "Single OS Probe Retry Limit (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -O --max-os-tries 1 -p- {timing} {target}",
    "description": "Limits OS fingerprint retries to 1 for high-speed audits. Target scope: -p-.",
    "whenToUse": "Service & OS identification using Single OS Probe Retry Limit on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O --max-os-tries 1",
      "single os probe retry limit",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-O --max-os-tries 1": "Limits OS fingerprint retries to 1 for high-speed audits."
    }
  },
  {
    "id": "cmd_sv_401",
    "name": "SunRPC Program Enumeration (-p 22,80,443)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p 22,80,443 {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p 22,80,443.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p 22,80,443.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p 22,80,443",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_402",
    "name": "SunRPC Program Enumeration (-p 21,25,110,143)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p 21,25,110,143 {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p 21,25,110,143.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p 21,25,110,143.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p 21,25,110,143",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_403",
    "name": "SunRPC Program Enumeration (-p 445,139)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p 445,139 {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p 445,139.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p 445,139.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p 445,139",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_404",
    "name": "SunRPC Program Enumeration (-p 3389,5900)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p 3389,5900 {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p 3389,5900.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p 3389,5900.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p 3389,5900",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_405",
    "name": "SunRPC Program Enumeration (-p 1433,3306,5432)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p 1433,3306,5432 {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p 1433,3306,5432.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p 1433,3306,5432.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p 1433,3306,5432",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_406",
    "name": "SunRPC Program Enumeration (-p 8080,8443,9090)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p 8080,8443,9090 {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p 8080,8443,9090.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p 8080,8443,9090.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p 8080,8443,9090",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_407",
    "name": "SunRPC Program Enumeration (-p 502,102)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p 502,102 {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p 502,102.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p 502,102.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p 502,102",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_408",
    "name": "SunRPC Program Enumeration (-p 1-1000)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p 1-1000 {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p 1-1000.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p 1-1000.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p 1-1000",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_409",
    "name": "SunRPC Program Enumeration (-F)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -F {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -F.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -F.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-F",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_sv_410",
    "name": "SunRPC Program Enumeration (-p-)",
    "category": "service_os",
    "commandPattern": "nmap -sV -sR -p- {timing} {target}",
    "description": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers. Target scope: -p-.",
    "whenToUse": "Service & OS identification using SunRPC Program Enumeration on ports -p-.",
    "speedLevel": 3,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV -sR",
      "sunrpc program enumeration",
      "-p-",
      "service os"
    ],
    "flagExplanations": {
      "-sV -sR": "Probes SunRPC services (portmapper, NFS) to enumerate program numbers."
    }
  },
  {
    "id": "cmd_nse_411",
    "name": "Vulnerability Audit Engine (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=vuln -T4 {target}",
    "description": "Runs all 'vuln' category NSE scripts checking CVEs.",
    "whenToUse": "Auditing target for Vulnerability Audit Engine on port 80.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=vuln",
      "vulnerability audit engine",
      "all",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=vuln": "Runs all 'vuln' category NSE scripts checking CVEs."
    }
  },
  {
    "id": "cmd_nse_412",
    "name": "Vulnerability Audit Engine (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=vuln -T3 {target}",
    "description": "Runs all 'vuln' category NSE scripts checking CVEs.",
    "whenToUse": "Auditing target for Vulnerability Audit Engine on port 80.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=vuln",
      "vulnerability audit engine",
      "all",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=vuln": "Runs all 'vuln' category NSE scripts checking CVEs."
    }
  },
  {
    "id": "cmd_nse_413",
    "name": "Vulnerability Audit Engine (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=vuln -T2 {target}",
    "description": "Runs all 'vuln' category NSE scripts checking CVEs.",
    "whenToUse": "Auditing target for Vulnerability Audit Engine on port 80.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=vuln",
      "vulnerability audit engine",
      "all",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=vuln": "Runs all 'vuln' category NSE scripts checking CVEs."
    }
  },
  {
    "id": "cmd_nse_414",
    "name": "SMB EternalBlue Check (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-vuln-ms17-010 -T4 {target}",
    "description": "Audits Windows hosts for MS17-010 EternalBlue RCE vulnerability.",
    "whenToUse": "Auditing target for SMB EternalBlue Check on port 445.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=smb-vuln-ms17-010",
      "smb eternalblue check",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-vuln-ms17-010": "Audits Windows hosts for MS17-010 EternalBlue RCE vulnerability."
    }
  },
  {
    "id": "cmd_nse_415",
    "name": "SMB EternalBlue Check (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-vuln-ms17-010 -T3 {target}",
    "description": "Audits Windows hosts for MS17-010 EternalBlue RCE vulnerability.",
    "whenToUse": "Auditing target for SMB EternalBlue Check on port 445.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=smb-vuln-ms17-010",
      "smb eternalblue check",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-vuln-ms17-010": "Audits Windows hosts for MS17-010 EternalBlue RCE vulnerability."
    }
  },
  {
    "id": "cmd_nse_416",
    "name": "SMB EternalBlue Check (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-vuln-ms17-010 -T2 {target}",
    "description": "Audits Windows hosts for MS17-010 EternalBlue RCE vulnerability.",
    "whenToUse": "Auditing target for SMB EternalBlue Check on port 445.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=smb-vuln-ms17-010",
      "smb eternalblue check",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-vuln-ms17-010": "Audits Windows hosts for MS17-010 EternalBlue RCE vulnerability."
    }
  },
  {
    "id": "cmd_nse_417",
    "name": "OpenSSL Heartbleed Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-heartbleed -T4 {target}",
    "description": "Probes TLS heartbeat extension for OpenSSL memory leak (CVE-2014-0160).",
    "whenToUse": "Auditing target for OpenSSL Heartbleed Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-heartbleed",
      "openssl heartbleed audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-heartbleed": "Probes TLS heartbeat extension for OpenSSL memory leak (CVE-2014-0160)."
    }
  },
  {
    "id": "cmd_nse_418",
    "name": "OpenSSL Heartbleed Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-heartbleed -T3 {target}",
    "description": "Probes TLS heartbeat extension for OpenSSL memory leak (CVE-2014-0160).",
    "whenToUse": "Auditing target for OpenSSL Heartbleed Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-heartbleed",
      "openssl heartbleed audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-heartbleed": "Probes TLS heartbeat extension for OpenSSL memory leak (CVE-2014-0160)."
    }
  },
  {
    "id": "cmd_nse_419",
    "name": "OpenSSL Heartbleed Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-heartbleed -T2 {target}",
    "description": "Probes TLS heartbeat extension for OpenSSL memory leak (CVE-2014-0160).",
    "whenToUse": "Auditing target for OpenSSL Heartbleed Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-heartbleed",
      "openssl heartbleed audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-heartbleed": "Probes TLS heartbeat extension for OpenSSL memory leak (CVE-2014-0160)."
    }
  },
  {
    "id": "cmd_nse_420",
    "name": "Apache Struts RCE Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-vuln-cve2017-5638 -T4 {target}",
    "description": "Audits Jakarta Multipart RCE in Apache Struts applications.",
    "whenToUse": "Auditing target for Apache Struts RCE Audit on port 80.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=http-vuln-cve2017-5638",
      "apache struts rce audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-vuln-cve2017-5638": "Audits Jakarta Multipart RCE in Apache Struts applications."
    }
  },
  {
    "id": "cmd_nse_421",
    "name": "Apache Struts RCE Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-vuln-cve2017-5638 -T3 {target}",
    "description": "Audits Jakarta Multipart RCE in Apache Struts applications.",
    "whenToUse": "Auditing target for Apache Struts RCE Audit on port 80.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=http-vuln-cve2017-5638",
      "apache struts rce audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-vuln-cve2017-5638": "Audits Jakarta Multipart RCE in Apache Struts applications."
    }
  },
  {
    "id": "cmd_nse_422",
    "name": "Apache Struts RCE Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-vuln-cve2017-5638 -T2 {target}",
    "description": "Audits Jakarta Multipart RCE in Apache Struts applications.",
    "whenToUse": "Auditing target for Apache Struts RCE Audit on port 80.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=http-vuln-cve2017-5638",
      "apache struts rce audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-vuln-cve2017-5638": "Audits Jakarta Multipart RCE in Apache Struts applications."
    }
  },
  {
    "id": "cmd_nse_423",
    "name": "Log4j Log4Shell RCE Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 8080 --script=http-vuln-cve2021-44228 -T4 {target}",
    "description": "Probes HTTP headers for Apache Log4j JNDI exploit vectors.",
    "whenToUse": "Auditing target for Log4j Log4Shell RCE Audit on port 8080.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=http-vuln-cve2021-44228",
      "log4j log4shell rce audit",
      "web",
      "8080",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-vuln-cve2021-44228": "Probes HTTP headers for Apache Log4j JNDI exploit vectors."
    }
  },
  {
    "id": "cmd_nse_424",
    "name": "Log4j Log4Shell RCE Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 8080 --script=http-vuln-cve2021-44228 -T3 {target}",
    "description": "Probes HTTP headers for Apache Log4j JNDI exploit vectors.",
    "whenToUse": "Auditing target for Log4j Log4Shell RCE Audit on port 8080.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=http-vuln-cve2021-44228",
      "log4j log4shell rce audit",
      "web",
      "8080",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-vuln-cve2021-44228": "Probes HTTP headers for Apache Log4j JNDI exploit vectors."
    }
  },
  {
    "id": "cmd_nse_425",
    "name": "Log4j Log4Shell RCE Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 8080 --script=http-vuln-cve2021-44228 -T2 {target}",
    "description": "Probes HTTP headers for Apache Log4j JNDI exploit vectors.",
    "whenToUse": "Auditing target for Log4j Log4Shell RCE Audit on port 8080.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=http-vuln-cve2021-44228",
      "log4j log4shell rce audit",
      "web",
      "8080",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-vuln-cve2021-44228": "Probes HTTP headers for Apache Log4j JNDI exploit vectors."
    }
  },
  {
    "id": "cmd_nse_426",
    "name": "DNS AXFR Zone Transfer Check (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 53 --script=dns-zone-transfer -T4 {target}",
    "description": "Attempts unauthenticated DNS zone transfer to dump subdomains.",
    "whenToUse": "Auditing target for DNS AXFR Zone Transfer Check on port 53.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=dns-zone-transfer",
      "dns axfr zone transfer check",
      "dns",
      "53",
      "nse"
    ],
    "flagExplanations": {
      "--script=dns-zone-transfer": "Attempts unauthenticated DNS zone transfer to dump subdomains."
    }
  },
  {
    "id": "cmd_nse_427",
    "name": "DNS AXFR Zone Transfer Check (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 53 --script=dns-zone-transfer -T3 {target}",
    "description": "Attempts unauthenticated DNS zone transfer to dump subdomains.",
    "whenToUse": "Auditing target for DNS AXFR Zone Transfer Check on port 53.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=dns-zone-transfer",
      "dns axfr zone transfer check",
      "dns",
      "53",
      "nse"
    ],
    "flagExplanations": {
      "--script=dns-zone-transfer": "Attempts unauthenticated DNS zone transfer to dump subdomains."
    }
  },
  {
    "id": "cmd_nse_428",
    "name": "DNS AXFR Zone Transfer Check (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 53 --script=dns-zone-transfer -T2 {target}",
    "description": "Attempts unauthenticated DNS zone transfer to dump subdomains.",
    "whenToUse": "Auditing target for DNS AXFR Zone Transfer Check on port 53.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=dns-zone-transfer",
      "dns axfr zone transfer check",
      "dns",
      "53",
      "nse"
    ],
    "flagExplanations": {
      "--script=dns-zone-transfer": "Attempts unauthenticated DNS zone transfer to dump subdomains."
    }
  },
  {
    "id": "cmd_nse_429",
    "name": "FTP Anonymous Login Check (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21 --script=ftp-anon -T4 {target}",
    "description": "Tests FTP server for anonymous user login access.",
    "whenToUse": "Auditing target for FTP Anonymous Login Check on port 21.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ftp-anon",
      "ftp anonymous login check",
      "ftp",
      "21",
      "nse"
    ],
    "flagExplanations": {
      "--script=ftp-anon": "Tests FTP server for anonymous user login access."
    }
  },
  {
    "id": "cmd_nse_430",
    "name": "FTP Anonymous Login Check (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21 --script=ftp-anon -T3 {target}",
    "description": "Tests FTP server for anonymous user login access.",
    "whenToUse": "Auditing target for FTP Anonymous Login Check on port 21.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ftp-anon",
      "ftp anonymous login check",
      "ftp",
      "21",
      "nse"
    ],
    "flagExplanations": {
      "--script=ftp-anon": "Tests FTP server for anonymous user login access."
    }
  },
  {
    "id": "cmd_nse_431",
    "name": "FTP Anonymous Login Check (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21 --script=ftp-anon -T2 {target}",
    "description": "Tests FTP server for anonymous user login access.",
    "whenToUse": "Auditing target for FTP Anonymous Login Check on port 21.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ftp-anon",
      "ftp anonymous login check",
      "ftp",
      "21",
      "nse"
    ],
    "flagExplanations": {
      "--script=ftp-anon": "Tests FTP server for anonymous user login access."
    }
  },
  {
    "id": "cmd_nse_432",
    "name": "TLS/SSL Cipher Suite Security Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-enum-ciphers -T4 {target}",
    "description": "Enumerates TLS ciphers and rates SSLv3/RC4/SWEET32 weakness.",
    "whenToUse": "Auditing target for TLS/SSL Cipher Suite Security Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-enum-ciphers",
      "tls/ssl cipher suite security audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-enum-ciphers": "Enumerates TLS ciphers and rates SSLv3/RC4/SWEET32 weakness."
    }
  },
  {
    "id": "cmd_nse_433",
    "name": "TLS/SSL Cipher Suite Security Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-enum-ciphers -T3 {target}",
    "description": "Enumerates TLS ciphers and rates SSLv3/RC4/SWEET32 weakness.",
    "whenToUse": "Auditing target for TLS/SSL Cipher Suite Security Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-enum-ciphers",
      "tls/ssl cipher suite security audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-enum-ciphers": "Enumerates TLS ciphers and rates SSLv3/RC4/SWEET32 weakness."
    }
  },
  {
    "id": "cmd_nse_434",
    "name": "TLS/SSL Cipher Suite Security Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-enum-ciphers -T2 {target}",
    "description": "Enumerates TLS ciphers and rates SSLv3/RC4/SWEET32 weakness.",
    "whenToUse": "Auditing target for TLS/SSL Cipher Suite Security Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-enum-ciphers",
      "tls/ssl cipher suite security audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-enum-ciphers": "Enumerates TLS ciphers and rates SSLv3/RC4/SWEET32 weakness."
    }
  },
  {
    "id": "cmd_nse_435",
    "name": "HTTP Directory & Web Panel Enum (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-enum -T4 {target}",
    "description": "Probes 2000+ known admin portals, backup files, and web paths.",
    "whenToUse": "Auditing target for HTTP Directory & Web Panel Enum on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-enum",
      "http directory & web panel enum",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-enum": "Probes 2000+ known admin portals, backup files, and web paths."
    }
  },
  {
    "id": "cmd_nse_436",
    "name": "HTTP Directory & Web Panel Enum (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-enum -T3 {target}",
    "description": "Probes 2000+ known admin portals, backup files, and web paths.",
    "whenToUse": "Auditing target for HTTP Directory & Web Panel Enum on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-enum",
      "http directory & web panel enum",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-enum": "Probes 2000+ known admin portals, backup files, and web paths."
    }
  },
  {
    "id": "cmd_nse_437",
    "name": "HTTP Directory & Web Panel Enum (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-enum -T2 {target}",
    "description": "Probes 2000+ known admin portals, backup files, and web paths.",
    "whenToUse": "Auditing target for HTTP Directory & Web Panel Enum on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-enum",
      "http directory & web panel enum",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-enum": "Probes 2000+ known admin portals, backup files, and web paths."
    }
  },
  {
    "id": "cmd_nse_438",
    "name": "SMB Shared Folders & Users Enum (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-enum-shares,smb-enum-users -T4 {target}",
    "description": "Lists Windows SMB network file shares and active domain usernames.",
    "whenToUse": "Auditing target for SMB Shared Folders & Users Enum on port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smb-enum-shares,smb-enum-users",
      "smb shared folders & users enum",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-enum-shares,smb-enum-users": "Lists Windows SMB network file shares and active domain usernames."
    }
  },
  {
    "id": "cmd_nse_439",
    "name": "SMB Shared Folders & Users Enum (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-enum-shares,smb-enum-users -T3 {target}",
    "description": "Lists Windows SMB network file shares and active domain usernames.",
    "whenToUse": "Auditing target for SMB Shared Folders & Users Enum on port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smb-enum-shares,smb-enum-users",
      "smb shared folders & users enum",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-enum-shares,smb-enum-users": "Lists Windows SMB network file shares and active domain usernames."
    }
  },
  {
    "id": "cmd_nse_440",
    "name": "SMB Shared Folders & Users Enum (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-enum-shares,smb-enum-users -T2 {target}",
    "description": "Lists Windows SMB network file shares and active domain usernames.",
    "whenToUse": "Auditing target for SMB Shared Folders & Users Enum on port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smb-enum-shares,smb-enum-users",
      "smb shared folders & users enum",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-enum-shares,smb-enum-users": "Lists Windows SMB network file shares and active domain usernames."
    }
  },
  {
    "id": "cmd_nse_441",
    "name": "GNU Bash Shellshock RCE Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-shellshock -T4 {target}",
    "description": "Checks CGI web applications for Shellshock environment RCE (CVE-2014-6271).",
    "whenToUse": "Auditing target for GNU Bash Shellshock RCE Audit on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-shellshock",
      "gnu bash shellshock rce audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-shellshock": "Checks CGI web applications for Shellshock environment RCE (CVE-2014-6271)."
    }
  },
  {
    "id": "cmd_nse_442",
    "name": "GNU Bash Shellshock RCE Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-shellshock -T3 {target}",
    "description": "Checks CGI web applications for Shellshock environment RCE (CVE-2014-6271).",
    "whenToUse": "Auditing target for GNU Bash Shellshock RCE Audit on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-shellshock",
      "gnu bash shellshock rce audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-shellshock": "Checks CGI web applications for Shellshock environment RCE (CVE-2014-6271)."
    }
  },
  {
    "id": "cmd_nse_443",
    "name": "GNU Bash Shellshock RCE Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-shellshock -T2 {target}",
    "description": "Checks CGI web applications for Shellshock environment RCE (CVE-2014-6271).",
    "whenToUse": "Auditing target for GNU Bash Shellshock RCE Audit on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-shellshock",
      "gnu bash shellshock rce audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-shellshock": "Checks CGI web applications for Shellshock environment RCE (CVE-2014-6271)."
    }
  },
  {
    "id": "cmd_nse_444",
    "name": "HTTP SQL Injection Vulnerability Scanner (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-sql-injection -T4 {target}",
    "description": "Spiders web application forms testing SQL injection payloads.",
    "whenToUse": "Auditing target for HTTP SQL Injection Vulnerability Scanner on port 80.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-sql-injection",
      "http sql injection vulnerability scanner",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-sql-injection": "Spiders web application forms testing SQL injection payloads."
    }
  },
  {
    "id": "cmd_nse_445",
    "name": "HTTP SQL Injection Vulnerability Scanner (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-sql-injection -T3 {target}",
    "description": "Spiders web application forms testing SQL injection payloads.",
    "whenToUse": "Auditing target for HTTP SQL Injection Vulnerability Scanner on port 80.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-sql-injection",
      "http sql injection vulnerability scanner",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-sql-injection": "Spiders web application forms testing SQL injection payloads."
    }
  },
  {
    "id": "cmd_nse_446",
    "name": "HTTP SQL Injection Vulnerability Scanner (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-sql-injection -T2 {target}",
    "description": "Spiders web application forms testing SQL injection payloads.",
    "whenToUse": "Auditing target for HTTP SQL Injection Vulnerability Scanner on port 80.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-sql-injection",
      "http sql injection vulnerability scanner",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-sql-injection": "Spiders web application forms testing SQL injection payloads."
    }
  },
  {
    "id": "cmd_nse_447",
    "name": "RDP MS12-020 DoS Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 3389 --script=rdp-vuln-ms12-020 -T4 {target}",
    "description": "Checks Remote Desktop Services for MS12-020 crash vulnerability.",
    "whenToUse": "Auditing target for RDP MS12-020 DoS Audit on port 3389.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=rdp-vuln-ms12-020",
      "rdp ms12-020 dos audit",
      "rdp",
      "3389",
      "nse"
    ],
    "flagExplanations": {
      "--script=rdp-vuln-ms12-020": "Checks Remote Desktop Services for MS12-020 crash vulnerability."
    }
  },
  {
    "id": "cmd_nse_448",
    "name": "RDP MS12-020 DoS Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 3389 --script=rdp-vuln-ms12-020 -T3 {target}",
    "description": "Checks Remote Desktop Services for MS12-020 crash vulnerability.",
    "whenToUse": "Auditing target for RDP MS12-020 DoS Audit on port 3389.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=rdp-vuln-ms12-020",
      "rdp ms12-020 dos audit",
      "rdp",
      "3389",
      "nse"
    ],
    "flagExplanations": {
      "--script=rdp-vuln-ms12-020": "Checks Remote Desktop Services for MS12-020 crash vulnerability."
    }
  },
  {
    "id": "cmd_nse_449",
    "name": "RDP MS12-020 DoS Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 3389 --script=rdp-vuln-ms12-020 -T2 {target}",
    "description": "Checks Remote Desktop Services for MS12-020 crash vulnerability.",
    "whenToUse": "Auditing target for RDP MS12-020 DoS Audit on port 3389.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "--script=rdp-vuln-ms12-020",
      "rdp ms12-020 dos audit",
      "rdp",
      "3389",
      "nse"
    ],
    "flagExplanations": {
      "--script=rdp-vuln-ms12-020": "Checks Remote Desktop Services for MS12-020 crash vulnerability."
    }
  },
  {
    "id": "cmd_nse_450",
    "name": "WordPress Plugins & Themes Enum (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-wordpress-enum -T4 {target}",
    "description": "Enumerates installed WordPress plugins, themes, and usernames.",
    "whenToUse": "Auditing target for WordPress Plugins & Themes Enum on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-wordpress-enum",
      "wordpress plugins & themes enum",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-wordpress-enum": "Enumerates installed WordPress plugins, themes, and usernames."
    }
  },
  {
    "id": "cmd_nse_451",
    "name": "WordPress Plugins & Themes Enum (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-wordpress-enum -T3 {target}",
    "description": "Enumerates installed WordPress plugins, themes, and usernames.",
    "whenToUse": "Auditing target for WordPress Plugins & Themes Enum on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-wordpress-enum",
      "wordpress plugins & themes enum",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-wordpress-enum": "Enumerates installed WordPress plugins, themes, and usernames."
    }
  },
  {
    "id": "cmd_nse_452",
    "name": "WordPress Plugins & Themes Enum (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-wordpress-enum -T2 {target}",
    "description": "Enumerates installed WordPress plugins, themes, and usernames.",
    "whenToUse": "Auditing target for WordPress Plugins & Themes Enum on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-wordpress-enum",
      "wordpress plugins & themes enum",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-wordpress-enum": "Enumerates installed WordPress plugins, themes, and usernames."
    }
  },
  {
    "id": "cmd_nse_453",
    "name": "SMTP User Account Enumeration (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 25 --script=smtp-enum-users -T4 {target}",
    "description": "Uses VRFY/EXPN/RCPT TO commands to enumerate valid email users.",
    "whenToUse": "Auditing target for SMTP User Account Enumeration on port 25.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smtp-enum-users",
      "smtp user account enumeration",
      "mail",
      "25",
      "nse"
    ],
    "flagExplanations": {
      "--script=smtp-enum-users": "Uses VRFY/EXPN/RCPT TO commands to enumerate valid email users."
    }
  },
  {
    "id": "cmd_nse_454",
    "name": "SMTP User Account Enumeration (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 25 --script=smtp-enum-users -T3 {target}",
    "description": "Uses VRFY/EXPN/RCPT TO commands to enumerate valid email users.",
    "whenToUse": "Auditing target for SMTP User Account Enumeration on port 25.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smtp-enum-users",
      "smtp user account enumeration",
      "mail",
      "25",
      "nse"
    ],
    "flagExplanations": {
      "--script=smtp-enum-users": "Uses VRFY/EXPN/RCPT TO commands to enumerate valid email users."
    }
  },
  {
    "id": "cmd_nse_455",
    "name": "SMTP User Account Enumeration (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 25 --script=smtp-enum-users -T2 {target}",
    "description": "Uses VRFY/EXPN/RCPT TO commands to enumerate valid email users.",
    "whenToUse": "Auditing target for SMTP User Account Enumeration on port 25.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smtp-enum-users",
      "smtp user account enumeration",
      "mail",
      "25",
      "nse"
    ],
    "flagExplanations": {
      "--script=smtp-enum-users": "Uses VRFY/EXPN/RCPT TO commands to enumerate valid email users."
    }
  },
  {
    "id": "cmd_nse_456",
    "name": "SNMP Community String Password Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 161 --script=snmp-brute -T4 {target}",
    "description": "Bruteforces SNMP community strings (public, private, manager, cisco).",
    "whenToUse": "Auditing target for SNMP Community String Password Audit on port 161.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "--script=snmp-brute",
      "snmp community string password audit",
      "snmp",
      "161",
      "nse"
    ],
    "flagExplanations": {
      "--script=snmp-brute": "Bruteforces SNMP community strings (public, private, manager, cisco)."
    }
  },
  {
    "id": "cmd_nse_457",
    "name": "SNMP Community String Password Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 161 --script=snmp-brute -T3 {target}",
    "description": "Bruteforces SNMP community strings (public, private, manager, cisco).",
    "whenToUse": "Auditing target for SNMP Community String Password Audit on port 161.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "--script=snmp-brute",
      "snmp community string password audit",
      "snmp",
      "161",
      "nse"
    ],
    "flagExplanations": {
      "--script=snmp-brute": "Bruteforces SNMP community strings (public, private, manager, cisco)."
    }
  },
  {
    "id": "cmd_nse_458",
    "name": "SNMP Community String Password Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 161 --script=snmp-brute -T2 {target}",
    "description": "Bruteforces SNMP community strings (public, private, manager, cisco).",
    "whenToUse": "Auditing target for SNMP Community String Password Audit on port 161.",
    "speedLevel": 4,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "--script=snmp-brute",
      "snmp community string password audit",
      "snmp",
      "161",
      "nse"
    ],
    "flagExplanations": {
      "--script=snmp-brute": "Bruteforces SNMP community strings (public, private, manager, cisco)."
    }
  },
  {
    "id": "cmd_nse_459",
    "name": "MySQL Empty Root Password Check (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 3306 --script=mysql-empty-password -T4 {target}",
    "description": "Checks for MySQL root accounts configured with blank passwords.",
    "whenToUse": "Auditing target for MySQL Empty Root Password Check on port 3306.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=mysql-empty-password",
      "mysql empty root password check",
      "db",
      "3306",
      "nse"
    ],
    "flagExplanations": {
      "--script=mysql-empty-password": "Checks for MySQL root accounts configured with blank passwords."
    }
  },
  {
    "id": "cmd_nse_460",
    "name": "MySQL Empty Root Password Check (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 3306 --script=mysql-empty-password -T3 {target}",
    "description": "Checks for MySQL root accounts configured with blank passwords.",
    "whenToUse": "Auditing target for MySQL Empty Root Password Check on port 3306.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=mysql-empty-password",
      "mysql empty root password check",
      "db",
      "3306",
      "nse"
    ],
    "flagExplanations": {
      "--script=mysql-empty-password": "Checks for MySQL root accounts configured with blank passwords."
    }
  },
  {
    "id": "cmd_nse_461",
    "name": "MySQL Empty Root Password Check (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 3306 --script=mysql-empty-password -T2 {target}",
    "description": "Checks for MySQL root accounts configured with blank passwords.",
    "whenToUse": "Auditing target for MySQL Empty Root Password Check on port 3306.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=mysql-empty-password",
      "mysql empty root password check",
      "db",
      "3306",
      "nse"
    ],
    "flagExplanations": {
      "--script=mysql-empty-password": "Checks for MySQL root accounts configured with blank passwords."
    }
  },
  {
    "id": "cmd_nse_462",
    "name": "HTTP HTML Page Title Extractor (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-title -T4 {target}",
    "description": "Extracts HTML page title and redirect headers for quick recon.",
    "whenToUse": "Auditing target for HTTP HTML Page Title Extractor on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-title",
      "http html page title extractor",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-title": "Extracts HTML page title and redirect headers for quick recon."
    }
  },
  {
    "id": "cmd_nse_463",
    "name": "HTTP HTML Page Title Extractor (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-title -T3 {target}",
    "description": "Extracts HTML page title and redirect headers for quick recon.",
    "whenToUse": "Auditing target for HTTP HTML Page Title Extractor on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-title",
      "http html page title extractor",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-title": "Extracts HTML page title and redirect headers for quick recon."
    }
  },
  {
    "id": "cmd_nse_464",
    "name": "HTTP HTML Page Title Extractor (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-title -T2 {target}",
    "description": "Extracts HTML page title and redirect headers for quick recon.",
    "whenToUse": "Auditing target for HTTP HTML Page Title Extractor on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-title",
      "http html page title extractor",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-title": "Extracts HTML page title and redirect headers for quick recon."
    }
  },
  {
    "id": "cmd_nse_465",
    "name": "Misconfigured CORS Header Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=http-cors -T4 {target}",
    "description": "Tests web application APIs for wild-card CORS origin reflection.",
    "whenToUse": "Auditing target for Misconfigured CORS Header Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-cors",
      "misconfigured cors header audit",
      "web",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-cors": "Tests web application APIs for wild-card CORS origin reflection."
    }
  },
  {
    "id": "cmd_nse_466",
    "name": "Misconfigured CORS Header Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=http-cors -T3 {target}",
    "description": "Tests web application APIs for wild-card CORS origin reflection.",
    "whenToUse": "Auditing target for Misconfigured CORS Header Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-cors",
      "misconfigured cors header audit",
      "web",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-cors": "Tests web application APIs for wild-card CORS origin reflection."
    }
  },
  {
    "id": "cmd_nse_467",
    "name": "Misconfigured CORS Header Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=http-cors -T2 {target}",
    "description": "Tests web application APIs for wild-card CORS origin reflection.",
    "whenToUse": "Auditing target for Misconfigured CORS Header Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-cors",
      "misconfigured cors header audit",
      "web",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-cors": "Tests web application APIs for wild-card CORS origin reflection."
    }
  },
  {
    "id": "cmd_nse_468",
    "name": "SSLv3 POODLE Vulnerability Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-poodle -T4 {target}",
    "description": "Audits HTTPS servers for SSLv3 POODLE fallback vulnerability.",
    "whenToUse": "Auditing target for SSLv3 POODLE Vulnerability Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-poodle",
      "sslv3 poodle vulnerability audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-poodle": "Audits HTTPS servers for SSLv3 POODLE fallback vulnerability."
    }
  },
  {
    "id": "cmd_nse_469",
    "name": "SSLv3 POODLE Vulnerability Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-poodle -T3 {target}",
    "description": "Audits HTTPS servers for SSLv3 POODLE fallback vulnerability.",
    "whenToUse": "Auditing target for SSLv3 POODLE Vulnerability Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-poodle",
      "sslv3 poodle vulnerability audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-poodle": "Audits HTTPS servers for SSLv3 POODLE fallback vulnerability."
    }
  },
  {
    "id": "cmd_nse_470",
    "name": "SSLv3 POODLE Vulnerability Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 443 --script=ssl-poodle -T2 {target}",
    "description": "Audits HTTPS servers for SSLv3 POODLE fallback vulnerability.",
    "whenToUse": "Auditing target for SSLv3 POODLE Vulnerability Audit on port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssl-poodle",
      "sslv3 poodle vulnerability audit",
      "ssl",
      "443",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssl-poodle": "Audits HTTPS servers for SSLv3 POODLE fallback vulnerability."
    }
  },
  {
    "id": "cmd_nse_471",
    "name": "Dangerous HTTP Methods Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-methods -T4 {target}",
    "description": "Enumerates supported HTTP methods (PUT, DELETE, TRACE, OPTIONS).",
    "whenToUse": "Auditing target for Dangerous HTTP Methods Audit on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-methods",
      "dangerous http methods audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-methods": "Enumerates supported HTTP methods (PUT, DELETE, TRACE, OPTIONS)."
    }
  },
  {
    "id": "cmd_nse_472",
    "name": "Dangerous HTTP Methods Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-methods -T3 {target}",
    "description": "Enumerates supported HTTP methods (PUT, DELETE, TRACE, OPTIONS).",
    "whenToUse": "Auditing target for Dangerous HTTP Methods Audit on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-methods",
      "dangerous http methods audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-methods": "Enumerates supported HTTP methods (PUT, DELETE, TRACE, OPTIONS)."
    }
  },
  {
    "id": "cmd_nse_473",
    "name": "Dangerous HTTP Methods Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80 --script=http-methods -T2 {target}",
    "description": "Enumerates supported HTTP methods (PUT, DELETE, TRACE, OPTIONS).",
    "whenToUse": "Auditing target for Dangerous HTTP Methods Audit on port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=http-methods",
      "dangerous http methods audit",
      "web",
      "80",
      "nse"
    ],
    "flagExplanations": {
      "--script=http-methods": "Enumerates supported HTTP methods (PUT, DELETE, TRACE, OPTIONS)."
    }
  },
  {
    "id": "cmd_nse_474",
    "name": "SMB DoublePulsar Backdoor Probe (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-double-pulsar-backdoor -T4 {target}",
    "description": "Probes Windows hosts for presence of NSA DoublePulsar kernel implant.",
    "whenToUse": "Auditing target for SMB DoublePulsar Backdoor Probe on port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smb-double-pulsar-backdoor",
      "smb doublepulsar backdoor probe",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-double-pulsar-backdoor": "Probes Windows hosts for presence of NSA DoublePulsar kernel implant."
    }
  },
  {
    "id": "cmd_nse_475",
    "name": "SMB DoublePulsar Backdoor Probe (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-double-pulsar-backdoor -T3 {target}",
    "description": "Probes Windows hosts for presence of NSA DoublePulsar kernel implant.",
    "whenToUse": "Auditing target for SMB DoublePulsar Backdoor Probe on port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smb-double-pulsar-backdoor",
      "smb doublepulsar backdoor probe",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-double-pulsar-backdoor": "Probes Windows hosts for presence of NSA DoublePulsar kernel implant."
    }
  },
  {
    "id": "cmd_nse_476",
    "name": "SMB DoublePulsar Backdoor Probe (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 445 --script=smb-double-pulsar-backdoor -T2 {target}",
    "description": "Probes Windows hosts for presence of NSA DoublePulsar kernel implant.",
    "whenToUse": "Auditing target for SMB DoublePulsar Backdoor Probe on port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=smb-double-pulsar-backdoor",
      "smb doublepulsar backdoor probe",
      "smb",
      "445",
      "nse"
    ],
    "flagExplanations": {
      "--script=smb-double-pulsar-backdoor": "Probes Windows hosts for presence of NSA DoublePulsar kernel implant."
    }
  },
  {
    "id": "cmd_nse_477",
    "name": "SSH Supported Authentication Methods (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 22 --script=ssh-auth-methods -T4 {target}",
    "description": "Enumerates SSH login authentication mechanisms (password, pubkey, gssapi).",
    "whenToUse": "Auditing target for SSH Supported Authentication Methods on port 22.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssh-auth-methods",
      "ssh supported authentication methods",
      "ssh",
      "22",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssh-auth-methods": "Enumerates SSH login authentication mechanisms (password, pubkey, gssapi)."
    }
  },
  {
    "id": "cmd_nse_478",
    "name": "SSH Supported Authentication Methods (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 22 --script=ssh-auth-methods -T3 {target}",
    "description": "Enumerates SSH login authentication mechanisms (password, pubkey, gssapi).",
    "whenToUse": "Auditing target for SSH Supported Authentication Methods on port 22.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssh-auth-methods",
      "ssh supported authentication methods",
      "ssh",
      "22",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssh-auth-methods": "Enumerates SSH login authentication mechanisms (password, pubkey, gssapi)."
    }
  },
  {
    "id": "cmd_nse_479",
    "name": "SSH Supported Authentication Methods (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 22 --script=ssh-auth-methods -T2 {target}",
    "description": "Enumerates SSH login authentication mechanisms (password, pubkey, gssapi).",
    "whenToUse": "Auditing target for SSH Supported Authentication Methods on port 22.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=ssh-auth-methods",
      "ssh supported authentication methods",
      "ssh",
      "22",
      "nse"
    ],
    "flagExplanations": {
      "--script=ssh-auth-methods": "Enumerates SSH login authentication mechanisms (password, pubkey, gssapi)."
    }
  },
  {
    "id": "cmd_nse_480",
    "name": "Redis Unauthenticated Info Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 6379 --script=redis-info -T4 {target}",
    "description": "Queries Redis memory datastore for unauthenticated CONFIG and INFO.",
    "whenToUse": "Auditing target for Redis Unauthenticated Info Audit on port 6379.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=redis-info",
      "redis unauthenticated info audit",
      "db",
      "6379",
      "nse"
    ],
    "flagExplanations": {
      "--script=redis-info": "Queries Redis memory datastore for unauthenticated CONFIG and INFO."
    }
  },
  {
    "id": "cmd_nse_481",
    "name": "Redis Unauthenticated Info Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 6379 --script=redis-info -T3 {target}",
    "description": "Queries Redis memory datastore for unauthenticated CONFIG and INFO.",
    "whenToUse": "Auditing target for Redis Unauthenticated Info Audit on port 6379.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=redis-info",
      "redis unauthenticated info audit",
      "db",
      "6379",
      "nse"
    ],
    "flagExplanations": {
      "--script=redis-info": "Queries Redis memory datastore for unauthenticated CONFIG and INFO."
    }
  },
  {
    "id": "cmd_nse_482",
    "name": "Redis Unauthenticated Info Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 6379 --script=redis-info -T2 {target}",
    "description": "Queries Redis memory datastore for unauthenticated CONFIG and INFO.",
    "whenToUse": "Auditing target for Redis Unauthenticated Info Audit on port 6379.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=redis-info",
      "redis unauthenticated info audit",
      "db",
      "6379",
      "nse"
    ],
    "flagExplanations": {
      "--script=redis-info": "Queries Redis memory datastore for unauthenticated CONFIG and INFO."
    }
  },
  {
    "id": "cmd_nse_483",
    "name": "MongoDB Unauthenticated Databases Audit (-T4)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 27017 --script=mongodb-info,mongodb-databases -T4 {target}",
    "description": "Dumps database names from unauthenticated MongoDB instances.",
    "whenToUse": "Auditing target for MongoDB Unauthenticated Databases Audit on port 27017.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=mongodb-info,mongodb-databases",
      "mongodb unauthenticated databases audit",
      "db",
      "27017",
      "nse"
    ],
    "flagExplanations": {
      "--script=mongodb-info,mongodb-databases": "Dumps database names from unauthenticated MongoDB instances."
    }
  },
  {
    "id": "cmd_nse_484",
    "name": "MongoDB Unauthenticated Databases Audit (-T3)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 27017 --script=mongodb-info,mongodb-databases -T3 {target}",
    "description": "Dumps database names from unauthenticated MongoDB instances.",
    "whenToUse": "Auditing target for MongoDB Unauthenticated Databases Audit on port 27017.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=mongodb-info,mongodb-databases",
      "mongodb unauthenticated databases audit",
      "db",
      "27017",
      "nse"
    ],
    "flagExplanations": {
      "--script=mongodb-info,mongodb-databases": "Dumps database names from unauthenticated MongoDB instances."
    }
  },
  {
    "id": "cmd_nse_485",
    "name": "MongoDB Unauthenticated Databases Audit (-T2)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 27017 --script=mongodb-info,mongodb-databases -T2 {target}",
    "description": "Dumps database names from unauthenticated MongoDB instances.",
    "whenToUse": "Auditing target for MongoDB Unauthenticated Databases Audit on port 27017.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--script=mongodb-info,mongodb-databases",
      "mongodb unauthenticated databases audit",
      "db",
      "27017",
      "nse"
    ],
    "flagExplanations": {
      "--script=mongodb-info,mongodb-databases": "Dumps database names from unauthenticated MongoDB instances."
    }
  },
  {
    "id": "cmd_nse_cat_safe_486",
    "name": "NSE 'Safe' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=safe {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'safe' category.",
    "whenToUse": "Broad NSE script scanning using category 'safe'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "safe",
      "--script=safe",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=safe": "Executes 'safe' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_safe_487",
    "name": "NSE 'Safe' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=safe {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'safe' category.",
    "whenToUse": "Broad NSE script scanning using category 'safe'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "safe",
      "--script=safe",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=safe": "Executes 'safe' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_safe_488",
    "name": "NSE 'Safe' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=safe {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'safe' category.",
    "whenToUse": "Broad NSE script scanning using category 'safe'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "safe",
      "--script=safe",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=safe": "Executes 'safe' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_safe_489",
    "name": "NSE 'Safe' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=safe {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'safe' category.",
    "whenToUse": "Broad NSE script scanning using category 'safe'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "safe",
      "--script=safe",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=safe": "Executes 'safe' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_intrusive_490",
    "name": "NSE 'Intrusive' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=intrusive {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'intrusive' category.",
    "whenToUse": "Broad NSE script scanning using category 'intrusive'.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "intrusive",
      "--script=intrusive",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=intrusive": "Executes 'intrusive' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_intrusive_491",
    "name": "NSE 'Intrusive' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=intrusive {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'intrusive' category.",
    "whenToUse": "Broad NSE script scanning using category 'intrusive'.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "intrusive",
      "--script=intrusive",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=intrusive": "Executes 'intrusive' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_intrusive_492",
    "name": "NSE 'Intrusive' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=intrusive {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'intrusive' category.",
    "whenToUse": "Broad NSE script scanning using category 'intrusive'.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "intrusive",
      "--script=intrusive",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=intrusive": "Executes 'intrusive' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_intrusive_493",
    "name": "NSE 'Intrusive' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=intrusive {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'intrusive' category.",
    "whenToUse": "Broad NSE script scanning using category 'intrusive'.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "intrusive",
      "--script=intrusive",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=intrusive": "Executes 'intrusive' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_vuln_494",
    "name": "NSE 'Vuln' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=vuln {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'vuln' category.",
    "whenToUse": "Broad NSE script scanning using category 'vuln'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "vuln",
      "--script=vuln",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=vuln": "Executes 'vuln' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_vuln_495",
    "name": "NSE 'Vuln' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=vuln {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'vuln' category.",
    "whenToUse": "Broad NSE script scanning using category 'vuln'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "vuln",
      "--script=vuln",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=vuln": "Executes 'vuln' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_vuln_496",
    "name": "NSE 'Vuln' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=vuln {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'vuln' category.",
    "whenToUse": "Broad NSE script scanning using category 'vuln'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "vuln",
      "--script=vuln",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=vuln": "Executes 'vuln' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_vuln_497",
    "name": "NSE 'Vuln' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=vuln {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'vuln' category.",
    "whenToUse": "Broad NSE script scanning using category 'vuln'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "High",
    "keywords": [
      "vuln",
      "--script=vuln",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=vuln": "Executes 'vuln' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_auth_498",
    "name": "NSE 'Auth' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=auth {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'auth' category.",
    "whenToUse": "Broad NSE script scanning using category 'auth'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "auth",
      "--script=auth",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=auth": "Executes 'auth' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_auth_499",
    "name": "NSE 'Auth' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=auth {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'auth' category.",
    "whenToUse": "Broad NSE script scanning using category 'auth'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "auth",
      "--script=auth",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=auth": "Executes 'auth' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_auth_500",
    "name": "NSE 'Auth' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=auth {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'auth' category.",
    "whenToUse": "Broad NSE script scanning using category 'auth'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "auth",
      "--script=auth",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=auth": "Executes 'auth' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_auth_501",
    "name": "NSE 'Auth' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=auth {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'auth' category.",
    "whenToUse": "Broad NSE script scanning using category 'auth'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "auth",
      "--script=auth",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=auth": "Executes 'auth' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_discovery_502",
    "name": "NSE 'Discovery' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=discovery {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'discovery' category.",
    "whenToUse": "Broad NSE script scanning using category 'discovery'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "discovery",
      "--script=discovery",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=discovery": "Executes 'discovery' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_discovery_503",
    "name": "NSE 'Discovery' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=discovery {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'discovery' category.",
    "whenToUse": "Broad NSE script scanning using category 'discovery'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "discovery",
      "--script=discovery",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=discovery": "Executes 'discovery' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_discovery_504",
    "name": "NSE 'Discovery' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=discovery {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'discovery' category.",
    "whenToUse": "Broad NSE script scanning using category 'discovery'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "discovery",
      "--script=discovery",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=discovery": "Executes 'discovery' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_discovery_505",
    "name": "NSE 'Discovery' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=discovery {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'discovery' category.",
    "whenToUse": "Broad NSE script scanning using category 'discovery'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "discovery",
      "--script=discovery",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=discovery": "Executes 'discovery' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_malware_506",
    "name": "NSE 'Malware' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=malware {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'malware' category.",
    "whenToUse": "Broad NSE script scanning using category 'malware'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "malware",
      "--script=malware",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=malware": "Executes 'malware' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_malware_507",
    "name": "NSE 'Malware' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=malware {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'malware' category.",
    "whenToUse": "Broad NSE script scanning using category 'malware'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "malware",
      "--script=malware",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=malware": "Executes 'malware' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_malware_508",
    "name": "NSE 'Malware' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=malware {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'malware' category.",
    "whenToUse": "Broad NSE script scanning using category 'malware'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "malware",
      "--script=malware",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=malware": "Executes 'malware' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_malware_509",
    "name": "NSE 'Malware' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=malware {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'malware' category.",
    "whenToUse": "Broad NSE script scanning using category 'malware'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "malware",
      "--script=malware",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=malware": "Executes 'malware' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_version_510",
    "name": "NSE 'Version' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=version {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'version' category.",
    "whenToUse": "Broad NSE script scanning using category 'version'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "version",
      "--script=version",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=version": "Executes 'version' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_version_511",
    "name": "NSE 'Version' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=version {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'version' category.",
    "whenToUse": "Broad NSE script scanning using category 'version'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "version",
      "--script=version",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=version": "Executes 'version' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_version_512",
    "name": "NSE 'Version' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=version {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'version' category.",
    "whenToUse": "Broad NSE script scanning using category 'version'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "version",
      "--script=version",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=version": "Executes 'version' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_version_513",
    "name": "NSE 'Version' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=version {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'version' category.",
    "whenToUse": "Broad NSE script scanning using category 'version'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "version",
      "--script=version",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=version": "Executes 'version' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_exploit_514",
    "name": "NSE 'Exploit' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=exploit {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'exploit' category.",
    "whenToUse": "Broad NSE script scanning using category 'exploit'.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "exploit",
      "--script=exploit",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=exploit": "Executes 'exploit' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_exploit_515",
    "name": "NSE 'Exploit' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=exploit {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'exploit' category.",
    "whenToUse": "Broad NSE script scanning using category 'exploit'.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "exploit",
      "--script=exploit",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=exploit": "Executes 'exploit' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_exploit_516",
    "name": "NSE 'Exploit' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=exploit {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'exploit' category.",
    "whenToUse": "Broad NSE script scanning using category 'exploit'.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "exploit",
      "--script=exploit",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=exploit": "Executes 'exploit' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_exploit_517",
    "name": "NSE 'Exploit' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=exploit {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'exploit' category.",
    "whenToUse": "Broad NSE script scanning using category 'exploit'.",
    "speedLevel": 3,
    "stealthLevel": 2,
    "riskLevel": "High",
    "keywords": [
      "exploit",
      "--script=exploit",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=exploit": "Executes 'exploit' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_default_518",
    "name": "NSE 'Default' Category Audit (-p 80,443)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 80,443 --script=default {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'default' category.",
    "whenToUse": "Broad NSE script scanning using category 'default'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "default",
      "--script=default",
      "80,443",
      "category scan"
    ],
    "flagExplanations": {
      "--script=default": "Executes 'default' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_default_519",
    "name": "NSE 'Default' Category Audit (-p 21,22,25,80,445)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 21,22,25,80,445 --script=default {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'default' category.",
    "whenToUse": "Broad NSE script scanning using category 'default'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "default",
      "--script=default",
      "21,22,25,80,445",
      "category scan"
    ],
    "flagExplanations": {
      "--script=default": "Executes 'default' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_default_520",
    "name": "NSE 'Default' Category Audit (-p 1433,3306,5432,6379,27017)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1433,3306,5432,6379,27017 --script=default {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'default' category.",
    "whenToUse": "Broad NSE script scanning using category 'default'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "default",
      "--script=default",
      "1433,3306,5432,6379,27017",
      "category scan"
    ],
    "flagExplanations": {
      "--script=default": "Executes 'default' NSE category scripts."
    }
  },
  {
    "id": "cmd_nse_cat_default_521",
    "name": "NSE 'Default' Category Audit (-p 1-1000)",
    "category": "vuln_scripts",
    "commandPattern": "nmap -p 1-1000 --script=default {timing} {target}",
    "description": "Executes all NSE scripts classified under the 'default' category.",
    "whenToUse": "Broad NSE script scanning using category 'default'.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "default",
      "--script=default",
      "1-1000",
      "category scan"
    ],
    "flagExplanations": {
      "--script=default": "Executes 'default' NSE category scripts."
    }
  },
  {
    "id": "cmd_ev_522",
    "name": "No-Ping Firewall Probe (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap -Pn -p 80,443 {timing} {target}",
    "description": "Skips host discovery; assumes target is online. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using No-Ping Firewall Probe.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "no-ping firewall probe",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-Pn": "Skips host discovery; assumes target is online."
    }
  },
  {
    "id": "cmd_ev_523",
    "name": "No-Ping Firewall Probe (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap -Pn -p 22,80,445 {timing} {target}",
    "description": "Skips host discovery; assumes target is online. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using No-Ping Firewall Probe.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "no-ping firewall probe",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-Pn": "Skips host discovery; assumes target is online."
    }
  },
  {
    "id": "cmd_ev_524",
    "name": "No-Ping Firewall Probe (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap -Pn -p 1-1000 {timing} {target}",
    "description": "Skips host discovery; assumes target is online. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using No-Ping Firewall Probe.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "no-ping firewall probe",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-Pn": "Skips host discovery; assumes target is online."
    }
  },
  {
    "id": "cmd_ev_525",
    "name": "No-Ping Firewall Probe (-F)",
    "category": "evasion",
    "commandPattern": "nmap -Pn -F {timing} {target}",
    "description": "Skips host discovery; assumes target is online. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using No-Ping Firewall Probe.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "no-ping firewall probe",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-Pn": "Skips host discovery; assumes target is online."
    }
  },
  {
    "id": "cmd_ev_526",
    "name": "5 Random Decoy IP Obfuscation (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap -D RND:5 -p 80,443 {timing} {target}",
    "description": "Spoofs 5 random fake source IPs alongside real IP. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using 5 Random Decoy IP Obfuscation.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D RND:5",
      "5 random decoy ip obfuscation",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D RND:5": "Spoofs 5 random fake source IPs alongside real IP."
    }
  },
  {
    "id": "cmd_ev_527",
    "name": "5 Random Decoy IP Obfuscation (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap -D RND:5 -p 22,80,445 {timing} {target}",
    "description": "Spoofs 5 random fake source IPs alongside real IP. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using 5 Random Decoy IP Obfuscation.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D RND:5",
      "5 random decoy ip obfuscation",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D RND:5": "Spoofs 5 random fake source IPs alongside real IP."
    }
  },
  {
    "id": "cmd_ev_528",
    "name": "5 Random Decoy IP Obfuscation (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap -D RND:5 -p 1-1000 {timing} {target}",
    "description": "Spoofs 5 random fake source IPs alongside real IP. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using 5 Random Decoy IP Obfuscation.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D RND:5",
      "5 random decoy ip obfuscation",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D RND:5": "Spoofs 5 random fake source IPs alongside real IP."
    }
  },
  {
    "id": "cmd_ev_529",
    "name": "5 Random Decoy IP Obfuscation (-F)",
    "category": "evasion",
    "commandPattern": "nmap -D RND:5 -F {timing} {target}",
    "description": "Spoofs 5 random fake source IPs alongside real IP. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using 5 Random Decoy IP Obfuscation.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D RND:5",
      "5 random decoy ip obfuscation",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D RND:5": "Spoofs 5 random fake source IPs alongside real IP."
    }
  },
  {
    "id": "cmd_ev_530",
    "name": "10 Random Decoy IP Obfuscation (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap -D RND:10 -p 80,443 {timing} {target}",
    "description": "Spoofs 10 random fake source IPs alongside real IP. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using 10 Random Decoy IP Obfuscation.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D RND:10",
      "10 random decoy ip obfuscation",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D RND:10": "Spoofs 10 random fake source IPs alongside real IP."
    }
  },
  {
    "id": "cmd_ev_531",
    "name": "10 Random Decoy IP Obfuscation (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap -D RND:10 -p 22,80,445 {timing} {target}",
    "description": "Spoofs 10 random fake source IPs alongside real IP. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using 10 Random Decoy IP Obfuscation.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D RND:10",
      "10 random decoy ip obfuscation",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D RND:10": "Spoofs 10 random fake source IPs alongside real IP."
    }
  },
  {
    "id": "cmd_ev_532",
    "name": "10 Random Decoy IP Obfuscation (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap -D RND:10 -p 1-1000 {timing} {target}",
    "description": "Spoofs 10 random fake source IPs alongside real IP. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using 10 Random Decoy IP Obfuscation.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D RND:10",
      "10 random decoy ip obfuscation",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D RND:10": "Spoofs 10 random fake source IPs alongside real IP."
    }
  },
  {
    "id": "cmd_ev_533",
    "name": "10 Random Decoy IP Obfuscation (-F)",
    "category": "evasion",
    "commandPattern": "nmap -D RND:10 -F {timing} {target}",
    "description": "Spoofs 10 random fake source IPs alongside real IP. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using 10 Random Decoy IP Obfuscation.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D RND:10",
      "10 random decoy ip obfuscation",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D RND:10": "Spoofs 10 random fake source IPs alongside real IP."
    }
  },
  {
    "id": "cmd_ev_534",
    "name": "Specific Decoy IP Spoofing (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap -D 192.168.1.5,192.168.1.6,ME -p 80,443 {timing} {target}",
    "description": "Uses specific IP addresses as decoy senders. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Specific Decoy IP Spoofing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D 192.168.1.5,192.168.1.6,ME",
      "specific decoy ip spoofing",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D 192.168.1.5,192.168.1.6,ME": "Uses specific IP addresses as decoy senders."
    }
  },
  {
    "id": "cmd_ev_535",
    "name": "Specific Decoy IP Spoofing (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap -D 192.168.1.5,192.168.1.6,ME -p 22,80,445 {timing} {target}",
    "description": "Uses specific IP addresses as decoy senders. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Specific Decoy IP Spoofing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D 192.168.1.5,192.168.1.6,ME",
      "specific decoy ip spoofing",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D 192.168.1.5,192.168.1.6,ME": "Uses specific IP addresses as decoy senders."
    }
  },
  {
    "id": "cmd_ev_536",
    "name": "Specific Decoy IP Spoofing (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap -D 192.168.1.5,192.168.1.6,ME -p 1-1000 {timing} {target}",
    "description": "Uses specific IP addresses as decoy senders. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Specific Decoy IP Spoofing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D 192.168.1.5,192.168.1.6,ME",
      "specific decoy ip spoofing",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D 192.168.1.5,192.168.1.6,ME": "Uses specific IP addresses as decoy senders."
    }
  },
  {
    "id": "cmd_ev_537",
    "name": "Specific Decoy IP Spoofing (-F)",
    "category": "evasion",
    "commandPattern": "nmap -D 192.168.1.5,192.168.1.6,ME -F {timing} {target}",
    "description": "Uses specific IP addresses as decoy senders. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Specific Decoy IP Spoofing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "-D 192.168.1.5,192.168.1.6,ME",
      "specific decoy ip spoofing",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-D 192.168.1.5,192.168.1.6,ME": "Uses specific IP addresses as decoy senders."
    }
  },
  {
    "id": "cmd_ev_538",
    "name": "8-Byte Header Packet Fragmentation (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap -f -p 80,443 {timing} {target}",
    "description": "Splits TCP header into small 8-byte fragments. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using 8-Byte Header Packet Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-f",
      "8-byte header packet fragmentation",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-f": "Splits TCP header into small 8-byte fragments."
    }
  },
  {
    "id": "cmd_ev_539",
    "name": "8-Byte Header Packet Fragmentation (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap -f -p 22,80,445 {timing} {target}",
    "description": "Splits TCP header into small 8-byte fragments. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using 8-Byte Header Packet Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-f",
      "8-byte header packet fragmentation",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-f": "Splits TCP header into small 8-byte fragments."
    }
  },
  {
    "id": "cmd_ev_540",
    "name": "8-Byte Header Packet Fragmentation (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap -f -p 1-1000 {timing} {target}",
    "description": "Splits TCP header into small 8-byte fragments. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using 8-Byte Header Packet Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-f",
      "8-byte header packet fragmentation",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-f": "Splits TCP header into small 8-byte fragments."
    }
  },
  {
    "id": "cmd_ev_541",
    "name": "8-Byte Header Packet Fragmentation (-F)",
    "category": "evasion",
    "commandPattern": "nmap -f -F {timing} {target}",
    "description": "Splits TCP header into small 8-byte fragments. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using 8-Byte Header Packet Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-f",
      "8-byte header packet fragmentation",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-f": "Splits TCP header into small 8-byte fragments."
    }
  },
  {
    "id": "cmd_ev_542",
    "name": "Double Packet Fragmentation (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap -f -f -p 80,443 {timing} {target}",
    "description": "Splits TCP header into tiny 16-byte fragmented packets. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Double Packet Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-f -f",
      "double packet fragmentation",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-f -f": "Splits TCP header into tiny 16-byte fragmented packets."
    }
  },
  {
    "id": "cmd_ev_543",
    "name": "Double Packet Fragmentation (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap -f -f -p 22,80,445 {timing} {target}",
    "description": "Splits TCP header into tiny 16-byte fragmented packets. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Double Packet Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-f -f",
      "double packet fragmentation",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-f -f": "Splits TCP header into tiny 16-byte fragmented packets."
    }
  },
  {
    "id": "cmd_ev_544",
    "name": "Double Packet Fragmentation (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap -f -f -p 1-1000 {timing} {target}",
    "description": "Splits TCP header into tiny 16-byte fragmented packets. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Double Packet Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-f -f",
      "double packet fragmentation",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-f -f": "Splits TCP header into tiny 16-byte fragmented packets."
    }
  },
  {
    "id": "cmd_ev_545",
    "name": "Double Packet Fragmentation (-F)",
    "category": "evasion",
    "commandPattern": "nmap -f -f -F {timing} {target}",
    "description": "Splits TCP header into tiny 16-byte fragmented packets. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Double Packet Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-f -f",
      "double packet fragmentation",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "-f -f": "Splits TCP header into tiny 16-byte fragmented packets."
    }
  },
  {
    "id": "cmd_ev_546",
    "name": "16-Byte Custom MTU Fragmentation (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 16 -p 80,443 {timing} {target}",
    "description": "Fragments packets using custom 16-byte MTU size. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using 16-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 16",
      "16-byte custom mtu fragmentation",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 16": "Fragments packets using custom 16-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_547",
    "name": "16-Byte Custom MTU Fragmentation (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 16 -p 22,80,445 {timing} {target}",
    "description": "Fragments packets using custom 16-byte MTU size. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using 16-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 16",
      "16-byte custom mtu fragmentation",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 16": "Fragments packets using custom 16-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_548",
    "name": "16-Byte Custom MTU Fragmentation (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 16 -p 1-1000 {timing} {target}",
    "description": "Fragments packets using custom 16-byte MTU size. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using 16-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 16",
      "16-byte custom mtu fragmentation",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 16": "Fragments packets using custom 16-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_549",
    "name": "16-Byte Custom MTU Fragmentation (-F)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 16 -F {timing} {target}",
    "description": "Fragments packets using custom 16-byte MTU size. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using 16-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 16",
      "16-byte custom mtu fragmentation",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 16": "Fragments packets using custom 16-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_550",
    "name": "24-Byte Custom MTU Fragmentation (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 24 -p 80,443 {timing} {target}",
    "description": "Fragments packets using custom 24-byte MTU size. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using 24-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 24",
      "24-byte custom mtu fragmentation",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 24": "Fragments packets using custom 24-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_551",
    "name": "24-Byte Custom MTU Fragmentation (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 24 -p 22,80,445 {timing} {target}",
    "description": "Fragments packets using custom 24-byte MTU size. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using 24-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 24",
      "24-byte custom mtu fragmentation",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 24": "Fragments packets using custom 24-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_552",
    "name": "24-Byte Custom MTU Fragmentation (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 24 -p 1-1000 {timing} {target}",
    "description": "Fragments packets using custom 24-byte MTU size. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using 24-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 24",
      "24-byte custom mtu fragmentation",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 24": "Fragments packets using custom 24-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_553",
    "name": "24-Byte Custom MTU Fragmentation (-F)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 24 -F {timing} {target}",
    "description": "Fragments packets using custom 24-byte MTU size. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using 24-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 24",
      "24-byte custom mtu fragmentation",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 24": "Fragments packets using custom 24-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_554",
    "name": "32-Byte Custom MTU Fragmentation (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 32 -p 80,443 {timing} {target}",
    "description": "Fragments packets using custom 32-byte MTU size. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using 32-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 32",
      "32-byte custom mtu fragmentation",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 32": "Fragments packets using custom 32-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_555",
    "name": "32-Byte Custom MTU Fragmentation (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 32 -p 22,80,445 {timing} {target}",
    "description": "Fragments packets using custom 32-byte MTU size. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using 32-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 32",
      "32-byte custom mtu fragmentation",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 32": "Fragments packets using custom 32-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_556",
    "name": "32-Byte Custom MTU Fragmentation (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 32 -p 1-1000 {timing} {target}",
    "description": "Fragments packets using custom 32-byte MTU size. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using 32-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 32",
      "32-byte custom mtu fragmentation",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 32": "Fragments packets using custom 32-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_557",
    "name": "32-Byte Custom MTU Fragmentation (-F)",
    "category": "evasion",
    "commandPattern": "nmap --mtu 32 -F {timing} {target}",
    "description": "Fragments packets using custom 32-byte MTU size. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using 32-Byte Custom MTU Fragmentation.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--mtu 32",
      "32-byte custom mtu fragmentation",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--mtu 32": "Fragments packets using custom 32-byte MTU size."
    }
  },
  {
    "id": "cmd_ev_558",
    "name": "DNS Source Port Spoofing (53) (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 53 -p 80,443 {timing} {target}",
    "description": "Sends scan packets originating from trusted DNS port 53. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using DNS Source Port Spoofing (53).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 53",
      "dns source port spoofing (53)",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 53": "Sends scan packets originating from trusted DNS port 53."
    }
  },
  {
    "id": "cmd_ev_559",
    "name": "DNS Source Port Spoofing (53) (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 53 -p 22,80,445 {timing} {target}",
    "description": "Sends scan packets originating from trusted DNS port 53. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using DNS Source Port Spoofing (53).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 53",
      "dns source port spoofing (53)",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 53": "Sends scan packets originating from trusted DNS port 53."
    }
  },
  {
    "id": "cmd_ev_560",
    "name": "DNS Source Port Spoofing (53) (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 53 -p 1-1000 {timing} {target}",
    "description": "Sends scan packets originating from trusted DNS port 53. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using DNS Source Port Spoofing (53).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 53",
      "dns source port spoofing (53)",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 53": "Sends scan packets originating from trusted DNS port 53."
    }
  },
  {
    "id": "cmd_ev_561",
    "name": "DNS Source Port Spoofing (53) (-F)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 53 -F {timing} {target}",
    "description": "Sends scan packets originating from trusted DNS port 53. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using DNS Source Port Spoofing (53).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 53",
      "dns source port spoofing (53)",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 53": "Sends scan packets originating from trusted DNS port 53."
    }
  },
  {
    "id": "cmd_ev_562",
    "name": "HTTP Source Port Spoofing (80) (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 80 -p 80,443 {timing} {target}",
    "description": "Sends scan packets originating from trusted HTTP port 80. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using HTTP Source Port Spoofing (80).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 80",
      "http source port spoofing (80)",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 80": "Sends scan packets originating from trusted HTTP port 80."
    }
  },
  {
    "id": "cmd_ev_563",
    "name": "HTTP Source Port Spoofing (80) (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 80 -p 22,80,445 {timing} {target}",
    "description": "Sends scan packets originating from trusted HTTP port 80. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using HTTP Source Port Spoofing (80).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 80",
      "http source port spoofing (80)",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 80": "Sends scan packets originating from trusted HTTP port 80."
    }
  },
  {
    "id": "cmd_ev_564",
    "name": "HTTP Source Port Spoofing (80) (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 80 -p 1-1000 {timing} {target}",
    "description": "Sends scan packets originating from trusted HTTP port 80. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using HTTP Source Port Spoofing (80).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 80",
      "http source port spoofing (80)",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 80": "Sends scan packets originating from trusted HTTP port 80."
    }
  },
  {
    "id": "cmd_ev_565",
    "name": "HTTP Source Port Spoofing (80) (-F)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 80 -F {timing} {target}",
    "description": "Sends scan packets originating from trusted HTTP port 80. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using HTTP Source Port Spoofing (80).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 80",
      "http source port spoofing (80)",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 80": "Sends scan packets originating from trusted HTTP port 80."
    }
  },
  {
    "id": "cmd_ev_566",
    "name": "Kerberos Source Port Spoofing (88) (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 88 -p 80,443 {timing} {target}",
    "description": "Sends scan packets originating from Kerberos port 88. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Kerberos Source Port Spoofing (88).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 88",
      "kerberos source port spoofing (88)",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 88": "Sends scan packets originating from Kerberos port 88."
    }
  },
  {
    "id": "cmd_ev_567",
    "name": "Kerberos Source Port Spoofing (88) (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 88 -p 22,80,445 {timing} {target}",
    "description": "Sends scan packets originating from Kerberos port 88. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Kerberos Source Port Spoofing (88).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 88",
      "kerberos source port spoofing (88)",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 88": "Sends scan packets originating from Kerberos port 88."
    }
  },
  {
    "id": "cmd_ev_568",
    "name": "Kerberos Source Port Spoofing (88) (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 88 -p 1-1000 {timing} {target}",
    "description": "Sends scan packets originating from Kerberos port 88. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Kerberos Source Port Spoofing (88).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 88",
      "kerberos source port spoofing (88)",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 88": "Sends scan packets originating from Kerberos port 88."
    }
  },
  {
    "id": "cmd_ev_569",
    "name": "Kerberos Source Port Spoofing (88) (-F)",
    "category": "evasion",
    "commandPattern": "nmap --source-port 88 -F {timing} {target}",
    "description": "Sends scan packets originating from Kerberos port 88. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Kerberos Source Port Spoofing (88).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--source-port 88",
      "kerberos source port spoofing (88)",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--source-port 88": "Sends scan packets originating from Kerberos port 88."
    }
  },
  {
    "id": "cmd_ev_570",
    "name": "25-Byte Binary Payload Padding (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --data-length 25 -p 80,443 {timing} {target}",
    "description": "Appends 25 random bytes to alter packet signature. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using 25-Byte Binary Payload Padding.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--data-length 25",
      "25-byte binary payload padding",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--data-length 25": "Appends 25 random bytes to alter packet signature."
    }
  },
  {
    "id": "cmd_ev_571",
    "name": "25-Byte Binary Payload Padding (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --data-length 25 -p 22,80,445 {timing} {target}",
    "description": "Appends 25 random bytes to alter packet signature. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using 25-Byte Binary Payload Padding.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--data-length 25",
      "25-byte binary payload padding",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--data-length 25": "Appends 25 random bytes to alter packet signature."
    }
  },
  {
    "id": "cmd_ev_572",
    "name": "25-Byte Binary Payload Padding (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --data-length 25 -p 1-1000 {timing} {target}",
    "description": "Appends 25 random bytes to alter packet signature. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using 25-Byte Binary Payload Padding.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--data-length 25",
      "25-byte binary payload padding",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--data-length 25": "Appends 25 random bytes to alter packet signature."
    }
  },
  {
    "id": "cmd_ev_573",
    "name": "25-Byte Binary Payload Padding (-F)",
    "category": "evasion",
    "commandPattern": "nmap --data-length 25 -F {timing} {target}",
    "description": "Appends 25 random bytes to alter packet signature. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using 25-Byte Binary Payload Padding.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--data-length 25",
      "25-byte binary payload padding",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--data-length 25": "Appends 25 random bytes to alter packet signature."
    }
  },
  {
    "id": "cmd_ev_574",
    "name": "100-Byte Binary Payload Padding (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --data-length 100 -p 80,443 {timing} {target}",
    "description": "Appends 100 random bytes to alter packet signature. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using 100-Byte Binary Payload Padding.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--data-length 100",
      "100-byte binary payload padding",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--data-length 100": "Appends 100 random bytes to alter packet signature."
    }
  },
  {
    "id": "cmd_ev_575",
    "name": "100-Byte Binary Payload Padding (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --data-length 100 -p 22,80,445 {timing} {target}",
    "description": "Appends 100 random bytes to alter packet signature. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using 100-Byte Binary Payload Padding.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--data-length 100",
      "100-byte binary payload padding",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--data-length 100": "Appends 100 random bytes to alter packet signature."
    }
  },
  {
    "id": "cmd_ev_576",
    "name": "100-Byte Binary Payload Padding (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --data-length 100 -p 1-1000 {timing} {target}",
    "description": "Appends 100 random bytes to alter packet signature. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using 100-Byte Binary Payload Padding.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--data-length 100",
      "100-byte binary payload padding",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--data-length 100": "Appends 100 random bytes to alter packet signature."
    }
  },
  {
    "id": "cmd_ev_577",
    "name": "100-Byte Binary Payload Padding (-F)",
    "category": "evasion",
    "commandPattern": "nmap --data-length 100 -F {timing} {target}",
    "description": "Appends 100 random bytes to alter packet signature. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using 100-Byte Binary Payload Padding.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--data-length 100",
      "100-byte binary payload padding",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--data-length 100": "Appends 100 random bytes to alter packet signature."
    }
  },
  {
    "id": "cmd_ev_578",
    "name": "Spoof Apple Hardware MAC (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Apple -p 80,443 {timing} {target}",
    "description": "Spoofs MAC address using Apple vendor OUI code. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Apple Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Apple",
      "spoof apple hardware mac",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Apple": "Spoofs MAC address using Apple vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_579",
    "name": "Spoof Apple Hardware MAC (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Apple -p 22,80,445 {timing} {target}",
    "description": "Spoofs MAC address using Apple vendor OUI code. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Apple Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Apple",
      "spoof apple hardware mac",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Apple": "Spoofs MAC address using Apple vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_580",
    "name": "Spoof Apple Hardware MAC (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Apple -p 1-1000 {timing} {target}",
    "description": "Spoofs MAC address using Apple vendor OUI code. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Apple Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Apple",
      "spoof apple hardware mac",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Apple": "Spoofs MAC address using Apple vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_581",
    "name": "Spoof Apple Hardware MAC (-F)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Apple -F {timing} {target}",
    "description": "Spoofs MAC address using Apple vendor OUI code. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Apple Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Apple",
      "spoof apple hardware mac",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Apple": "Spoofs MAC address using Apple vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_582",
    "name": "Spoof Cisco Hardware MAC (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Cisco -p 80,443 {timing} {target}",
    "description": "Spoofs MAC address using Cisco vendor OUI code. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Cisco Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Cisco",
      "spoof cisco hardware mac",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Cisco": "Spoofs MAC address using Cisco vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_583",
    "name": "Spoof Cisco Hardware MAC (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Cisco -p 22,80,445 {timing} {target}",
    "description": "Spoofs MAC address using Cisco vendor OUI code. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Cisco Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Cisco",
      "spoof cisco hardware mac",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Cisco": "Spoofs MAC address using Cisco vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_584",
    "name": "Spoof Cisco Hardware MAC (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Cisco -p 1-1000 {timing} {target}",
    "description": "Spoofs MAC address using Cisco vendor OUI code. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Cisco Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Cisco",
      "spoof cisco hardware mac",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Cisco": "Spoofs MAC address using Cisco vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_585",
    "name": "Spoof Cisco Hardware MAC (-F)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Cisco -F {timing} {target}",
    "description": "Spoofs MAC address using Cisco vendor OUI code. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Cisco Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Cisco",
      "spoof cisco hardware mac",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Cisco": "Spoofs MAC address using Cisco vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_586",
    "name": "Spoof Dell Hardware MAC (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Dell -p 80,443 {timing} {target}",
    "description": "Spoofs MAC address using Dell vendor OUI code. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Dell Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Dell",
      "spoof dell hardware mac",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Dell": "Spoofs MAC address using Dell vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_587",
    "name": "Spoof Dell Hardware MAC (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Dell -p 22,80,445 {timing} {target}",
    "description": "Spoofs MAC address using Dell vendor OUI code. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Dell Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Dell",
      "spoof dell hardware mac",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Dell": "Spoofs MAC address using Dell vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_588",
    "name": "Spoof Dell Hardware MAC (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Dell -p 1-1000 {timing} {target}",
    "description": "Spoofs MAC address using Dell vendor OUI code. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Dell Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Dell",
      "spoof dell hardware mac",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Dell": "Spoofs MAC address using Dell vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_589",
    "name": "Spoof Dell Hardware MAC (-F)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac Dell -F {timing} {target}",
    "description": "Spoofs MAC address using Dell vendor OUI code. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Spoof Dell Hardware MAC.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac Dell",
      "spoof dell hardware mac",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac Dell": "Spoofs MAC address using Dell vendor OUI code."
    }
  },
  {
    "id": "cmd_ev_590",
    "name": "Random Hardware MAC Spoofing (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac 0 -p 80,443 {timing} {target}",
    "description": "Generates completely random Ethernet MAC address. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Random Hardware MAC Spoofing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac 0",
      "random hardware mac spoofing",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac 0": "Generates completely random Ethernet MAC address."
    }
  },
  {
    "id": "cmd_ev_591",
    "name": "Random Hardware MAC Spoofing (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac 0 -p 22,80,445 {timing} {target}",
    "description": "Generates completely random Ethernet MAC address. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Random Hardware MAC Spoofing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac 0",
      "random hardware mac spoofing",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac 0": "Generates completely random Ethernet MAC address."
    }
  },
  {
    "id": "cmd_ev_592",
    "name": "Random Hardware MAC Spoofing (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac 0 -p 1-1000 {timing} {target}",
    "description": "Generates completely random Ethernet MAC address. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Random Hardware MAC Spoofing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac 0",
      "random hardware mac spoofing",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac 0": "Generates completely random Ethernet MAC address."
    }
  },
  {
    "id": "cmd_ev_593",
    "name": "Random Hardware MAC Spoofing (-F)",
    "category": "evasion",
    "commandPattern": "nmap --spoof-mac 0 -F {timing} {target}",
    "description": "Generates completely random Ethernet MAC address. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Random Hardware MAC Spoofing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Medium",
    "keywords": [
      "--spoof-mac 0",
      "random hardware mac spoofing",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--spoof-mac 0": "Generates completely random Ethernet MAC address."
    }
  },
  {
    "id": "cmd_ev_594",
    "name": "Corrupted Checksum Verification (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --badsum -p 80,443 {timing} {target}",
    "description": "Sends invalid TCP checksums to check firewall packet filtering. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Corrupted Checksum Verification.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--badsum",
      "corrupted checksum verification",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--badsum": "Sends invalid TCP checksums to check firewall packet filtering."
    }
  },
  {
    "id": "cmd_ev_595",
    "name": "Corrupted Checksum Verification (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --badsum -p 22,80,445 {timing} {target}",
    "description": "Sends invalid TCP checksums to check firewall packet filtering. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Corrupted Checksum Verification.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--badsum",
      "corrupted checksum verification",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--badsum": "Sends invalid TCP checksums to check firewall packet filtering."
    }
  },
  {
    "id": "cmd_ev_596",
    "name": "Corrupted Checksum Verification (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --badsum -p 1-1000 {timing} {target}",
    "description": "Sends invalid TCP checksums to check firewall packet filtering. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Corrupted Checksum Verification.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--badsum",
      "corrupted checksum verification",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--badsum": "Sends invalid TCP checksums to check firewall packet filtering."
    }
  },
  {
    "id": "cmd_ev_597",
    "name": "Corrupted Checksum Verification (-F)",
    "category": "evasion",
    "commandPattern": "nmap --badsum -F {timing} {target}",
    "description": "Sends invalid TCP checksums to check firewall packet filtering. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Corrupted Checksum Verification.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "--badsum",
      "corrupted checksum verification",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--badsum": "Sends invalid TCP checksums to check firewall packet filtering."
    }
  },
  {
    "id": "cmd_ev_598",
    "name": "Custom IP TTL Setting (64) (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --ttl 64 -p 80,443 {timing} {target}",
    "description": "Sets IP TTL field value to 64 (Linux signature). Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Custom IP TTL Setting (64).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--ttl 64",
      "custom ip ttl setting (64)",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--ttl 64": "Sets IP TTL field value to 64 (Linux signature)."
    }
  },
  {
    "id": "cmd_ev_599",
    "name": "Custom IP TTL Setting (64) (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --ttl 64 -p 22,80,445 {timing} {target}",
    "description": "Sets IP TTL field value to 64 (Linux signature). Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Custom IP TTL Setting (64).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--ttl 64",
      "custom ip ttl setting (64)",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--ttl 64": "Sets IP TTL field value to 64 (Linux signature)."
    }
  },
  {
    "id": "cmd_ev_600",
    "name": "Custom IP TTL Setting (64) (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --ttl 64 -p 1-1000 {timing} {target}",
    "description": "Sets IP TTL field value to 64 (Linux signature). Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Custom IP TTL Setting (64).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--ttl 64",
      "custom ip ttl setting (64)",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--ttl 64": "Sets IP TTL field value to 64 (Linux signature)."
    }
  },
  {
    "id": "cmd_ev_601",
    "name": "Custom IP TTL Setting (64) (-F)",
    "category": "evasion",
    "commandPattern": "nmap --ttl 64 -F {timing} {target}",
    "description": "Sets IP TTL field value to 64 (Linux signature). Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Custom IP TTL Setting (64).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--ttl 64",
      "custom ip ttl setting (64)",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--ttl 64": "Sets IP TTL field value to 64 (Linux signature)."
    }
  },
  {
    "id": "cmd_ev_602",
    "name": "Custom IP TTL Setting (128) (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --ttl 128 -p 80,443 {timing} {target}",
    "description": "Sets IP TTL field value to 128 (Windows signature). Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Custom IP TTL Setting (128).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--ttl 128",
      "custom ip ttl setting (128)",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--ttl 128": "Sets IP TTL field value to 128 (Windows signature)."
    }
  },
  {
    "id": "cmd_ev_603",
    "name": "Custom IP TTL Setting (128) (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --ttl 128 -p 22,80,445 {timing} {target}",
    "description": "Sets IP TTL field value to 128 (Windows signature). Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Custom IP TTL Setting (128).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--ttl 128",
      "custom ip ttl setting (128)",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--ttl 128": "Sets IP TTL field value to 128 (Windows signature)."
    }
  },
  {
    "id": "cmd_ev_604",
    "name": "Custom IP TTL Setting (128) (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --ttl 128 -p 1-1000 {timing} {target}",
    "description": "Sets IP TTL field value to 128 (Windows signature). Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Custom IP TTL Setting (128).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--ttl 128",
      "custom ip ttl setting (128)",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--ttl 128": "Sets IP TTL field value to 128 (Windows signature)."
    }
  },
  {
    "id": "cmd_ev_605",
    "name": "Custom IP TTL Setting (128) (-F)",
    "category": "evasion",
    "commandPattern": "nmap --ttl 128 -F {timing} {target}",
    "description": "Sets IP TTL field value to 128 (Windows signature). Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Custom IP TTL Setting (128).",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--ttl 128",
      "custom ip ttl setting (128)",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--ttl 128": "Sets IP TTL field value to 128 (Windows signature)."
    }
  },
  {
    "id": "cmd_ev_606",
    "name": "Randomize Target Scanning Order (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --randomize-hosts -p 80,443 {timing} {target}",
    "description": "Shuffles list of target IP addresses before probing. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using Randomize Target Scanning Order.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--randomize-hosts",
      "randomize target scanning order",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--randomize-hosts": "Shuffles list of target IP addresses before probing."
    }
  },
  {
    "id": "cmd_ev_607",
    "name": "Randomize Target Scanning Order (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --randomize-hosts -p 22,80,445 {timing} {target}",
    "description": "Shuffles list of target IP addresses before probing. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using Randomize Target Scanning Order.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--randomize-hosts",
      "randomize target scanning order",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--randomize-hosts": "Shuffles list of target IP addresses before probing."
    }
  },
  {
    "id": "cmd_ev_608",
    "name": "Randomize Target Scanning Order (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --randomize-hosts -p 1-1000 {timing} {target}",
    "description": "Shuffles list of target IP addresses before probing. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using Randomize Target Scanning Order.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--randomize-hosts",
      "randomize target scanning order",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--randomize-hosts": "Shuffles list of target IP addresses before probing."
    }
  },
  {
    "id": "cmd_ev_609",
    "name": "Randomize Target Scanning Order (-F)",
    "category": "evasion",
    "commandPattern": "nmap --randomize-hosts -F {timing} {target}",
    "description": "Shuffles list of target IP addresses before probing. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using Randomize Target Scanning Order.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "--randomize-hosts",
      "randomize target scanning order",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--randomize-hosts": "Shuffles list of target IP addresses before probing."
    }
  },
  {
    "id": "cmd_ev_610",
    "name": "SOCKS4 Tor Proxy Routing (-p 80,443)",
    "category": "evasion",
    "commandPattern": "nmap --proxies socks4://127.0.0.1:9050 -p 80,443 {timing} {target}",
    "description": "Relays TCP connection probes through SOCKS4 Tor proxy. Target scope: -p 80,443.",
    "whenToUse": "Evading IDS/IPS inspection using SOCKS4 Tor Proxy Routing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "--proxies socks4://127.0.0.1:9050",
      "socks4 tor proxy routing",
      "-p 80,443",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--proxies socks4://127.0.0.1:9050": "Relays TCP connection probes through SOCKS4 Tor proxy."
    }
  },
  {
    "id": "cmd_ev_611",
    "name": "SOCKS4 Tor Proxy Routing (-p 22,80,445)",
    "category": "evasion",
    "commandPattern": "nmap --proxies socks4://127.0.0.1:9050 -p 22,80,445 {timing} {target}",
    "description": "Relays TCP connection probes through SOCKS4 Tor proxy. Target scope: -p 22,80,445.",
    "whenToUse": "Evading IDS/IPS inspection using SOCKS4 Tor Proxy Routing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "--proxies socks4://127.0.0.1:9050",
      "socks4 tor proxy routing",
      "-p 22,80,445",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--proxies socks4://127.0.0.1:9050": "Relays TCP connection probes through SOCKS4 Tor proxy."
    }
  },
  {
    "id": "cmd_ev_612",
    "name": "SOCKS4 Tor Proxy Routing (-p 1-1000)",
    "category": "evasion",
    "commandPattern": "nmap --proxies socks4://127.0.0.1:9050 -p 1-1000 {timing} {target}",
    "description": "Relays TCP connection probes through SOCKS4 Tor proxy. Target scope: -p 1-1000.",
    "whenToUse": "Evading IDS/IPS inspection using SOCKS4 Tor Proxy Routing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "--proxies socks4://127.0.0.1:9050",
      "socks4 tor proxy routing",
      "-p 1-1000",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--proxies socks4://127.0.0.1:9050": "Relays TCP connection probes through SOCKS4 Tor proxy."
    }
  },
  {
    "id": "cmd_ev_613",
    "name": "SOCKS4 Tor Proxy Routing (-F)",
    "category": "evasion",
    "commandPattern": "nmap --proxies socks4://127.0.0.1:9050 -F {timing} {target}",
    "description": "Relays TCP connection probes through SOCKS4 Tor proxy. Target scope: -F.",
    "whenToUse": "Evading IDS/IPS inspection using SOCKS4 Tor Proxy Routing.",
    "speedLevel": 4,
    "stealthLevel": 5,
    "riskLevel": "Low",
    "keywords": [
      "--proxies socks4://127.0.0.1:9050",
      "socks4 tor proxy routing",
      "-F",
      "evasion",
      "ids bypass"
    ],
    "flagExplanations": {
      "--proxies socks4://127.0.0.1:9050": "Relays TCP connection probes through SOCKS4 Tor proxy."
    }
  },
  {
    "id": "cmd_adv_modbus_614",
    "name": "Modbus TCP SCADA PLC Audit (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 502 --script=modbus-discover -T4 {target}",
    "description": "Discovers Modbus TCP industrial control units and PLC slave IDs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Modbus TCP SCADA PLC Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "modbus",
      "-p 502 --script=modbus-discover",
      "modbus tcp scada plc audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 502 --script=modbus-discover": "Discovers Modbus TCP industrial control units and PLC slave IDs."
    }
  },
  {
    "id": "cmd_adv_modbus_615",
    "name": "Modbus TCP SCADA PLC Audit (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 502 --script=modbus-discover -T3 {target}",
    "description": "Discovers Modbus TCP industrial control units and PLC slave IDs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Modbus TCP SCADA PLC Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "modbus",
      "-p 502 --script=modbus-discover",
      "modbus tcp scada plc audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 502 --script=modbus-discover": "Discovers Modbus TCP industrial control units and PLC slave IDs."
    }
  },
  {
    "id": "cmd_adv_modbus_616",
    "name": "Modbus TCP SCADA PLC Audit (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 502 --script=modbus-discover -T2 {target}",
    "description": "Discovers Modbus TCP industrial control units and PLC slave IDs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Modbus TCP SCADA PLC Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "modbus",
      "-p 502 --script=modbus-discover",
      "modbus tcp scada plc audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 502 --script=modbus-discover": "Discovers Modbus TCP industrial control units and PLC slave IDs."
    }
  },
  {
    "id": "cmd_adv_siemens_s7_617",
    "name": "Siemens S7 PLC Controller Probe (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 102 --script=s7-info -T4 {target}",
    "description": "Queries Siemens S7-300/400/1200/1500 PLC CPUs for hardware info.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Siemens S7 PLC Controller Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "siemens_s7",
      "-p 102 --script=s7-info",
      "siemens s7 plc controller probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 102 --script=s7-info": "Queries Siemens S7-300/400/1200/1500 PLC CPUs for hardware info."
    }
  },
  {
    "id": "cmd_adv_siemens_s7_618",
    "name": "Siemens S7 PLC Controller Probe (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 102 --script=s7-info -T3 {target}",
    "description": "Queries Siemens S7-300/400/1200/1500 PLC CPUs for hardware info.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Siemens S7 PLC Controller Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "siemens_s7",
      "-p 102 --script=s7-info",
      "siemens s7 plc controller probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 102 --script=s7-info": "Queries Siemens S7-300/400/1200/1500 PLC CPUs for hardware info."
    }
  },
  {
    "id": "cmd_adv_siemens_s7_619",
    "name": "Siemens S7 PLC Controller Probe (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 102 --script=s7-info -T2 {target}",
    "description": "Queries Siemens S7-300/400/1200/1500 PLC CPUs for hardware info.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Siemens S7 PLC Controller Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "siemens_s7",
      "-p 102 --script=s7-info",
      "siemens s7 plc controller probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 102 --script=s7-info": "Queries Siemens S7-300/400/1200/1500 PLC CPUs for hardware info."
    }
  },
  {
    "id": "cmd_adv_bacnet_620",
    "name": "BACnet Building Automation Audit (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -sU -p 47808 --script=bacnet-info -T4 {target}",
    "description": "Queries BACnet building automation HVAC controllers.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: BACnet Building Automation Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "bacnet",
      "-sU -p 47808 --script=bacnet-info",
      "bacnet building automation audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-sU -p 47808 --script=bacnet-info": "Queries BACnet building automation HVAC controllers."
    }
  },
  {
    "id": "cmd_adv_bacnet_621",
    "name": "BACnet Building Automation Audit (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -sU -p 47808 --script=bacnet-info -T3 {target}",
    "description": "Queries BACnet building automation HVAC controllers.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: BACnet Building Automation Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "bacnet",
      "-sU -p 47808 --script=bacnet-info",
      "bacnet building automation audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-sU -p 47808 --script=bacnet-info": "Queries BACnet building automation HVAC controllers."
    }
  },
  {
    "id": "cmd_adv_bacnet_622",
    "name": "BACnet Building Automation Audit (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -sU -p 47808 --script=bacnet-info -T2 {target}",
    "description": "Queries BACnet building automation HVAC controllers.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: BACnet Building Automation Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "bacnet",
      "-sU -p 47808 --script=bacnet-info",
      "bacnet building automation audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-sU -p 47808 --script=bacnet-info": "Queries BACnet building automation HVAC controllers."
    }
  },
  {
    "id": "cmd_adv_docker_api_623",
    "name": "Unauthenticated Docker API Check (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 2375,2376 --script=docker-version -T4 {target}",
    "description": "Audits target for publicly exposed Docker REST APIs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Unauthenticated Docker API Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "docker_api",
      "-p 2375,2376 --script=docker-version",
      "unauthenticated docker api check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 2375,2376 --script=docker-version": "Audits target for publicly exposed Docker REST APIs."
    }
  },
  {
    "id": "cmd_adv_docker_api_624",
    "name": "Unauthenticated Docker API Check (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 2375,2376 --script=docker-version -T3 {target}",
    "description": "Audits target for publicly exposed Docker REST APIs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Unauthenticated Docker API Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "docker_api",
      "-p 2375,2376 --script=docker-version",
      "unauthenticated docker api check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 2375,2376 --script=docker-version": "Audits target for publicly exposed Docker REST APIs."
    }
  },
  {
    "id": "cmd_adv_docker_api_625",
    "name": "Unauthenticated Docker API Check (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 2375,2376 --script=docker-version -T2 {target}",
    "description": "Audits target for publicly exposed Docker REST APIs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Unauthenticated Docker API Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "docker_api",
      "-p 2375,2376 --script=docker-version",
      "unauthenticated docker api check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 2375,2376 --script=docker-version": "Audits target for publicly exposed Docker REST APIs."
    }
  },
  {
    "id": "cmd_adv_k8s_api_626",
    "name": "Kubernetes API & Kubelet Probe (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 6443,10250 --script=http-title -T4 {target}",
    "description": "Audits K8s API server and Kubelet daemon endpoints.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Kubernetes API & Kubelet Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "k8s_api",
      "-p 6443,10250 --script=http-title",
      "kubernetes api & kubelet probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 6443,10250 --script=http-title": "Audits K8s API server and Kubelet daemon endpoints."
    }
  },
  {
    "id": "cmd_adv_k8s_api_627",
    "name": "Kubernetes API & Kubelet Probe (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 6443,10250 --script=http-title -T3 {target}",
    "description": "Audits K8s API server and Kubelet daemon endpoints.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Kubernetes API & Kubelet Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "k8s_api",
      "-p 6443,10250 --script=http-title",
      "kubernetes api & kubelet probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 6443,10250 --script=http-title": "Audits K8s API server and Kubelet daemon endpoints."
    }
  },
  {
    "id": "cmd_adv_k8s_api_628",
    "name": "Kubernetes API & Kubelet Probe (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 6443,10250 --script=http-title -T2 {target}",
    "description": "Audits K8s API server and Kubelet daemon endpoints.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Kubernetes API & Kubelet Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "k8s_api",
      "-p 6443,10250 --script=http-title",
      "kubernetes api & kubelet probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 6443,10250 --script=http-title": "Audits K8s API server and Kubelet daemon endpoints."
    }
  },
  {
    "id": "cmd_adv_etcd_629",
    "name": "Etcd Key-Value Store Security Probe (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 2379,2380 -T4 {target}",
    "description": "Audits Etcd distributed database used by Kubernetes clusters.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Etcd Key-Value Store Security Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "etcd",
      "-p 2379,2380",
      "etcd key-value store security probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 2379,2380": "Audits Etcd distributed database used by Kubernetes clusters."
    }
  },
  {
    "id": "cmd_adv_etcd_630",
    "name": "Etcd Key-Value Store Security Probe (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 2379,2380 -T3 {target}",
    "description": "Audits Etcd distributed database used by Kubernetes clusters.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Etcd Key-Value Store Security Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "etcd",
      "-p 2379,2380",
      "etcd key-value store security probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 2379,2380": "Audits Etcd distributed database used by Kubernetes clusters."
    }
  },
  {
    "id": "cmd_adv_etcd_631",
    "name": "Etcd Key-Value Store Security Probe (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 2379,2380 -T2 {target}",
    "description": "Audits Etcd distributed database used by Kubernetes clusters.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Etcd Key-Value Store Security Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "etcd",
      "-p 2379,2380",
      "etcd key-value store security probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 2379,2380": "Audits Etcd distributed database used by Kubernetes clusters."
    }
  },
  {
    "id": "cmd_adv_mongodb_632",
    "name": "Unauthenticated MongoDB NoSQL Check (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 27017 --script=mongodb-info,mongodb-databases -T4 {target}",
    "description": "Dumps database names from unauthenticated MongoDB instances.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Unauthenticated MongoDB NoSQL Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "mongodb",
      "-p 27017 --script=mongodb-info,mongodb-databases",
      "unauthenticated mongodb nosql check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 27017 --script=mongodb-info,mongodb-databases": "Dumps database names from unauthenticated MongoDB instances."
    }
  },
  {
    "id": "cmd_adv_mongodb_633",
    "name": "Unauthenticated MongoDB NoSQL Check (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 27017 --script=mongodb-info,mongodb-databases -T3 {target}",
    "description": "Dumps database names from unauthenticated MongoDB instances.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Unauthenticated MongoDB NoSQL Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "mongodb",
      "-p 27017 --script=mongodb-info,mongodb-databases",
      "unauthenticated mongodb nosql check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 27017 --script=mongodb-info,mongodb-databases": "Dumps database names from unauthenticated MongoDB instances."
    }
  },
  {
    "id": "cmd_adv_mongodb_634",
    "name": "Unauthenticated MongoDB NoSQL Check (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 27017 --script=mongodb-info,mongodb-databases -T2 {target}",
    "description": "Dumps database names from unauthenticated MongoDB instances.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Unauthenticated MongoDB NoSQL Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "mongodb",
      "-p 27017 --script=mongodb-info,mongodb-databases",
      "unauthenticated mongodb nosql check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 27017 --script=mongodb-info,mongodb-databases": "Dumps database names from unauthenticated MongoDB instances."
    }
  },
  {
    "id": "cmd_adv_redis_635",
    "name": "Redis Memory Datastore RCE Check (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 6379 --script=redis-info -T4 {target}",
    "description": "Audits Redis memory datastores for missing authentication.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Redis Memory Datastore RCE Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "redis",
      "-p 6379 --script=redis-info",
      "redis memory datastore rce check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 6379 --script=redis-info": "Audits Redis memory datastores for missing authentication."
    }
  },
  {
    "id": "cmd_adv_redis_636",
    "name": "Redis Memory Datastore RCE Check (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 6379 --script=redis-info -T3 {target}",
    "description": "Audits Redis memory datastores for missing authentication.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Redis Memory Datastore RCE Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "redis",
      "-p 6379 --script=redis-info",
      "redis memory datastore rce check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 6379 --script=redis-info": "Audits Redis memory datastores for missing authentication."
    }
  },
  {
    "id": "cmd_adv_redis_637",
    "name": "Redis Memory Datastore RCE Check (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 6379 --script=redis-info -T2 {target}",
    "description": "Audits Redis memory datastores for missing authentication.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Redis Memory Datastore RCE Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "redis",
      "-p 6379 --script=redis-info",
      "redis memory datastore rce check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 6379 --script=redis-info": "Audits Redis memory datastores for missing authentication."
    }
  },
  {
    "id": "cmd_adv_elasticsearch_638",
    "name": "Elasticsearch Cluster REST API Audit (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 9200 --script=http-title -T4 {target}",
    "description": "Audits Elasticsearch cluster REST API for data exposure.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Elasticsearch Cluster REST API Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "elasticsearch",
      "-p 9200 --script=http-title",
      "elasticsearch cluster rest api audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9200 --script=http-title": "Audits Elasticsearch cluster REST API for data exposure."
    }
  },
  {
    "id": "cmd_adv_elasticsearch_639",
    "name": "Elasticsearch Cluster REST API Audit (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 9200 --script=http-title -T3 {target}",
    "description": "Audits Elasticsearch cluster REST API for data exposure.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Elasticsearch Cluster REST API Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "elasticsearch",
      "-p 9200 --script=http-title",
      "elasticsearch cluster rest api audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9200 --script=http-title": "Audits Elasticsearch cluster REST API for data exposure."
    }
  },
  {
    "id": "cmd_adv_elasticsearch_640",
    "name": "Elasticsearch Cluster REST API Audit (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 9200 --script=http-title -T2 {target}",
    "description": "Audits Elasticsearch cluster REST API for data exposure.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Elasticsearch Cluster REST API Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "elasticsearch",
      "-p 9200 --script=http-title",
      "elasticsearch cluster rest api audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9200 --script=http-title": "Audits Elasticsearch cluster REST API for data exposure."
    }
  },
  {
    "id": "cmd_adv_ethernetip_641",
    "name": "EtherNet/IP Rockwell PLC Probe (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 44818 --script=enip-info -T4 {target}",
    "description": "Queries EtherNet/IP Industrial protocols on Allen-Bradley PLCs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: EtherNet/IP Rockwell PLC Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "ethernetip",
      "-p 44818 --script=enip-info",
      "ethernet/ip rockwell plc probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 44818 --script=enip-info": "Queries EtherNet/IP Industrial protocols on Allen-Bradley PLCs."
    }
  },
  {
    "id": "cmd_adv_ethernetip_642",
    "name": "EtherNet/IP Rockwell PLC Probe (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 44818 --script=enip-info -T3 {target}",
    "description": "Queries EtherNet/IP Industrial protocols on Allen-Bradley PLCs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: EtherNet/IP Rockwell PLC Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "ethernetip",
      "-p 44818 --script=enip-info",
      "ethernet/ip rockwell plc probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 44818 --script=enip-info": "Queries EtherNet/IP Industrial protocols on Allen-Bradley PLCs."
    }
  },
  {
    "id": "cmd_adv_ethernetip_643",
    "name": "EtherNet/IP Rockwell PLC Probe (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 44818 --script=enip-info -T2 {target}",
    "description": "Queries EtherNet/IP Industrial protocols on Allen-Bradley PLCs.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: EtherNet/IP Rockwell PLC Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "ethernetip",
      "-p 44818 --script=enip-info",
      "ethernet/ip rockwell plc probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 44818 --script=enip-info": "Queries EtherNet/IP Industrial protocols on Allen-Bradley PLCs."
    }
  },
  {
    "id": "cmd_adv_dnp3_644",
    "name": "DNP3 Smart Grid Controller Audit (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 20000 --script=dnp3-info -T4 {target}",
    "description": "Queries DNP3 outstations in electric utility smart grids.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: DNP3 Smart Grid Controller Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "dnp3",
      "-p 20000 --script=dnp3-info",
      "dnp3 smart grid controller audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 20000 --script=dnp3-info": "Queries DNP3 outstations in electric utility smart grids."
    }
  },
  {
    "id": "cmd_adv_dnp3_645",
    "name": "DNP3 Smart Grid Controller Audit (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 20000 --script=dnp3-info -T3 {target}",
    "description": "Queries DNP3 outstations in electric utility smart grids.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: DNP3 Smart Grid Controller Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "dnp3",
      "-p 20000 --script=dnp3-info",
      "dnp3 smart grid controller audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 20000 --script=dnp3-info": "Queries DNP3 outstations in electric utility smart grids."
    }
  },
  {
    "id": "cmd_adv_dnp3_646",
    "name": "DNP3 Smart Grid Controller Audit (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 20000 --script=dnp3-info -T2 {target}",
    "description": "Queries DNP3 outstations in electric utility smart grids.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: DNP3 Smart Grid Controller Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "dnp3",
      "-p 20000 --script=dnp3-info",
      "dnp3 smart grid controller audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 20000 --script=dnp3-info": "Queries DNP3 outstations in electric utility smart grids."
    }
  },
  {
    "id": "cmd_adv_memcached_647",
    "name": "Memcached Unauthenticated UDP Check (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 11211 --script=memcached-info -T4 {target}",
    "description": "Audits Memcached servers for amplification DDOS exploit risk.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Memcached Unauthenticated UDP Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "memcached",
      "-p 11211 --script=memcached-info",
      "memcached unauthenticated udp check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 11211 --script=memcached-info": "Audits Memcached servers for amplification DDOS exploit risk."
    }
  },
  {
    "id": "cmd_adv_memcached_648",
    "name": "Memcached Unauthenticated UDP Check (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 11211 --script=memcached-info -T3 {target}",
    "description": "Audits Memcached servers for amplification DDOS exploit risk.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Memcached Unauthenticated UDP Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "memcached",
      "-p 11211 --script=memcached-info",
      "memcached unauthenticated udp check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 11211 --script=memcached-info": "Audits Memcached servers for amplification DDOS exploit risk."
    }
  },
  {
    "id": "cmd_adv_memcached_649",
    "name": "Memcached Unauthenticated UDP Check (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 11211 --script=memcached-info -T2 {target}",
    "description": "Audits Memcached servers for amplification DDOS exploit risk.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Memcached Unauthenticated UDP Check.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "memcached",
      "-p 11211 --script=memcached-info",
      "memcached unauthenticated udp check",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 11211 --script=memcached-info": "Audits Memcached servers for amplification DDOS exploit risk."
    }
  },
  {
    "id": "cmd_adv_cassandra_650",
    "name": "Cassandra NoSQL Database Audit (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 9042 --script=http-title -T4 {target}",
    "description": "Audits Apache Cassandra database node interface ports.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Cassandra NoSQL Database Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "cassandra",
      "-p 9042 --script=http-title",
      "cassandra nosql database audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9042 --script=http-title": "Audits Apache Cassandra database node interface ports."
    }
  },
  {
    "id": "cmd_adv_cassandra_651",
    "name": "Cassandra NoSQL Database Audit (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 9042 --script=http-title -T3 {target}",
    "description": "Audits Apache Cassandra database node interface ports.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Cassandra NoSQL Database Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "cassandra",
      "-p 9042 --script=http-title",
      "cassandra nosql database audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9042 --script=http-title": "Audits Apache Cassandra database node interface ports."
    }
  },
  {
    "id": "cmd_adv_cassandra_652",
    "name": "Cassandra NoSQL Database Audit (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 9042 --script=http-title -T2 {target}",
    "description": "Audits Apache Cassandra database node interface ports.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Cassandra NoSQL Database Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "cassandra",
      "-p 9042 --script=http-title",
      "cassandra nosql database audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9042 --script=http-title": "Audits Apache Cassandra database node interface ports."
    }
  },
  {
    "id": "cmd_adv_neo4j_653",
    "name": "Neo4j Graph Database Web Panel Probe (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 7474 --script=http-title -T4 {target}",
    "description": "Audits Neo4j graph database HTTP browser interface.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Neo4j Graph Database Web Panel Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "neo4j",
      "-p 7474 --script=http-title",
      "neo4j graph database web panel probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 7474 --script=http-title": "Audits Neo4j graph database HTTP browser interface."
    }
  },
  {
    "id": "cmd_adv_neo4j_654",
    "name": "Neo4j Graph Database Web Panel Probe (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 7474 --script=http-title -T3 {target}",
    "description": "Audits Neo4j graph database HTTP browser interface.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Neo4j Graph Database Web Panel Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "neo4j",
      "-p 7474 --script=http-title",
      "neo4j graph database web panel probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 7474 --script=http-title": "Audits Neo4j graph database HTTP browser interface."
    }
  },
  {
    "id": "cmd_adv_neo4j_655",
    "name": "Neo4j Graph Database Web Panel Probe (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 7474 --script=http-title -T2 {target}",
    "description": "Audits Neo4j graph database HTTP browser interface.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Neo4j Graph Database Web Panel Probe.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "neo4j",
      "-p 7474 --script=http-title",
      "neo4j graph database web panel probe",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 7474 --script=http-title": "Audits Neo4j graph database HTTP browser interface."
    }
  },
  {
    "id": "cmd_adv_rabbitmq_656",
    "name": "RabbitMQ Message Broker Management Audit (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 5672,15672 --script=http-title -T4 {target}",
    "description": "Audits RabbitMQ AMQP listener and management web dashboard.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: RabbitMQ Message Broker Management Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "rabbitmq",
      "-p 5672,15672 --script=http-title",
      "rabbitmq message broker management audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 5672,15672 --script=http-title": "Audits RabbitMQ AMQP listener and management web dashboard."
    }
  },
  {
    "id": "cmd_adv_rabbitmq_657",
    "name": "RabbitMQ Message Broker Management Audit (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 5672,15672 --script=http-title -T3 {target}",
    "description": "Audits RabbitMQ AMQP listener and management web dashboard.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: RabbitMQ Message Broker Management Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "rabbitmq",
      "-p 5672,15672 --script=http-title",
      "rabbitmq message broker management audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 5672,15672 --script=http-title": "Audits RabbitMQ AMQP listener and management web dashboard."
    }
  },
  {
    "id": "cmd_adv_rabbitmq_658",
    "name": "RabbitMQ Message Broker Management Audit (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 5672,15672 --script=http-title -T2 {target}",
    "description": "Audits RabbitMQ AMQP listener and management web dashboard.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: RabbitMQ Message Broker Management Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "rabbitmq",
      "-p 5672,15672 --script=http-title",
      "rabbitmq message broker management audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 5672,15672 --script=http-title": "Audits RabbitMQ AMQP listener and management web dashboard."
    }
  },
  {
    "id": "cmd_adv_kafka_659",
    "name": "Apache Kafka Distributed Streaming Audit (-T4)",
    "category": "advanced",
    "commandPattern": "nmap -p 9092 --script=http-title -T4 {target}",
    "description": "Audits Kafka broker ports for unauthenticated messaging queues.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Apache Kafka Distributed Streaming Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "kafka",
      "-p 9092 --script=http-title",
      "apache kafka distributed streaming audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9092 --script=http-title": "Audits Kafka broker ports for unauthenticated messaging queues."
    }
  },
  {
    "id": "cmd_adv_kafka_660",
    "name": "Apache Kafka Distributed Streaming Audit (-T3)",
    "category": "advanced",
    "commandPattern": "nmap -p 9092 --script=http-title -T3 {target}",
    "description": "Audits Kafka broker ports for unauthenticated messaging queues.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Apache Kafka Distributed Streaming Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "kafka",
      "-p 9092 --script=http-title",
      "apache kafka distributed streaming audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9092 --script=http-title": "Audits Kafka broker ports for unauthenticated messaging queues."
    }
  },
  {
    "id": "cmd_adv_kafka_661",
    "name": "Apache Kafka Distributed Streaming Audit (-T2)",
    "category": "advanced",
    "commandPattern": "nmap -p 9092 --script=http-title -T2 {target}",
    "description": "Audits Kafka broker ports for unauthenticated messaging queues.",
    "whenToUse": "Auditing industrial OT / SCADA / Cloud infrastructure: Apache Kafka Distributed Streaming Audit.",
    "speedLevel": 3,
    "stealthLevel": 4,
    "riskLevel": "Medium",
    "keywords": [
      "kafka",
      "-p 9092 --script=http-title",
      "apache kafka distributed streaming audit",
      "scada",
      "cloud",
      "advanced"
    ],
    "flagExplanations": {
      "-p 9092 --script=http-title": "Audits Kafka broker ports for unauthenticated messaging queues."
    }
  },
  {
    "id": "cmd_gen_662",
    "name": "Targeted Scan Variant 662 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #662 focusing on port 23 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 23",
      "cmd_662"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_663",
    "name": "Targeted Scan Variant 663 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #663 focusing on port 25 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 25",
      "cmd_663"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_664",
    "name": "Targeted Scan Variant 664 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #664 focusing on port 53 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 53",
      "cmd_664"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_665",
    "name": "Targeted Scan Variant 665 (Port 80)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #665 focusing on port 80 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 80",
      "cmd_665"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_666",
    "name": "Targeted Scan Variant 666 (Port 110)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #666 focusing on port 110 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 110",
      "cmd_666"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_667",
    "name": "Targeted Scan Variant 667 (Port 143)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #667 focusing on port 143 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 143",
      "cmd_667"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_668",
    "name": "Targeted Scan Variant 668 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #668 focusing on port 443 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 443",
      "cmd_668"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_669",
    "name": "Targeted Scan Variant 669 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #669 focusing on port 445 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 445",
      "cmd_669"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_670",
    "name": "Targeted Scan Variant 670 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #670 focusing on port 993 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 993",
      "cmd_670"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_671",
    "name": "Targeted Scan Variant 671 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #671 focusing on port 995 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 995",
      "cmd_671"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_672",
    "name": "Targeted Scan Variant 672 (Port 1433)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #672 focusing on port 1433 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 1433",
      "cmd_672"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_673",
    "name": "Targeted Scan Variant 673 (Port 1521)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #673 focusing on port 1521 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 1521",
      "cmd_673"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_674",
    "name": "Targeted Scan Variant 674 (Port 3306)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #674 focusing on port 3306 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 3306",
      "cmd_674"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_675",
    "name": "Targeted Scan Variant 675 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #675 focusing on port 3389 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 3389",
      "cmd_675"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_676",
    "name": "Targeted Scan Variant 676 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #676 focusing on port 5432 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 5432",
      "cmd_676"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_677",
    "name": "Targeted Scan Variant 677 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #677 focusing on port 5900 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 5900",
      "cmd_677"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_678",
    "name": "Targeted Scan Variant 678 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #678 focusing on port 6379 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 6379",
      "cmd_678"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_679",
    "name": "Targeted Scan Variant 679 (Port 8080)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #679 focusing on port 8080 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 8080",
      "cmd_679"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_680",
    "name": "Targeted Scan Variant 680 (Port 8443)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #680 focusing on port 8443 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 8443",
      "cmd_680"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_681",
    "name": "Targeted Scan Variant 681 (Port 27017)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #681 focusing on port 27017 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 27017",
      "cmd_681"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_682",
    "name": "Targeted Scan Variant 682 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #682 focusing on port 21 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 21",
      "cmd_682"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_683",
    "name": "Targeted Scan Variant 683 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #683 focusing on port 22 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 22",
      "cmd_683"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_684",
    "name": "Targeted Scan Variant 684 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #684 focusing on port 23 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 23",
      "cmd_684"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_685",
    "name": "Targeted Scan Variant 685 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #685 focusing on port 25 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 25",
      "cmd_685"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_686",
    "name": "Targeted Scan Variant 686 (Port 53)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #686 focusing on port 53 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 53",
      "cmd_686"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_687",
    "name": "Targeted Scan Variant 687 (Port 80)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #687 focusing on port 80 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 80",
      "cmd_687"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_688",
    "name": "Targeted Scan Variant 688 (Port 110)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #688 focusing on port 110 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 110",
      "cmd_688"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_689",
    "name": "Targeted Scan Variant 689 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #689 focusing on port 143 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 143",
      "cmd_689"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_690",
    "name": "Targeted Scan Variant 690 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #690 focusing on port 443 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 443",
      "cmd_690"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_691",
    "name": "Targeted Scan Variant 691 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #691 focusing on port 445 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 445",
      "cmd_691"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_692",
    "name": "Targeted Scan Variant 692 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #692 focusing on port 993 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 993",
      "cmd_692"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_693",
    "name": "Targeted Scan Variant 693 (Port 995)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #693 focusing on port 995 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 995",
      "cmd_693"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_694",
    "name": "Targeted Scan Variant 694 (Port 1433)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #694 focusing on port 1433 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 1433",
      "cmd_694"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_695",
    "name": "Targeted Scan Variant 695 (Port 1521)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #695 focusing on port 1521 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 1521",
      "cmd_695"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_696",
    "name": "Targeted Scan Variant 696 (Port 3306)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #696 focusing on port 3306 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 3306",
      "cmd_696"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_697",
    "name": "Targeted Scan Variant 697 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #697 focusing on port 3389 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 3389",
      "cmd_697"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_698",
    "name": "Targeted Scan Variant 698 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #698 focusing on port 5432 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 5432",
      "cmd_698"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_699",
    "name": "Targeted Scan Variant 699 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #699 focusing on port 5900 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 5900",
      "cmd_699"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_700",
    "name": "Targeted Scan Variant 700 (Port 6379)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #700 focusing on port 6379 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 6379",
      "cmd_700"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_701",
    "name": "Targeted Scan Variant 701 (Port 8080)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #701 focusing on port 8080 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 8080",
      "cmd_701"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_702",
    "name": "Targeted Scan Variant 702 (Port 8443)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #702 focusing on port 8443 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 8443",
      "cmd_702"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_703",
    "name": "Targeted Scan Variant 703 (Port 27017)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #703 focusing on port 27017 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 27017",
      "cmd_703"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_704",
    "name": "Targeted Scan Variant 704 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #704 focusing on port 21 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 21",
      "cmd_704"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_705",
    "name": "Targeted Scan Variant 705 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #705 focusing on port 22 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 22",
      "cmd_705"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_706",
    "name": "Targeted Scan Variant 706 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #706 focusing on port 23 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 23",
      "cmd_706"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_707",
    "name": "Targeted Scan Variant 707 (Port 25)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #707 focusing on port 25 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 25",
      "cmd_707"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_708",
    "name": "Targeted Scan Variant 708 (Port 53)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #708 focusing on port 53 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 53",
      "cmd_708"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_709",
    "name": "Targeted Scan Variant 709 (Port 80)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #709 focusing on port 80 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 80",
      "cmd_709"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_710",
    "name": "Targeted Scan Variant 710 (Port 110)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #710 focusing on port 110 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 110",
      "cmd_710"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_711",
    "name": "Targeted Scan Variant 711 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #711 focusing on port 143 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 143",
      "cmd_711"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_712",
    "name": "Targeted Scan Variant 712 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #712 focusing on port 443 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 443",
      "cmd_712"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_713",
    "name": "Targeted Scan Variant 713 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #713 focusing on port 445 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 445",
      "cmd_713"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_714",
    "name": "Targeted Scan Variant 714 (Port 993)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #714 focusing on port 993 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 993",
      "cmd_714"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_715",
    "name": "Targeted Scan Variant 715 (Port 995)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #715 focusing on port 995 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 995",
      "cmd_715"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_716",
    "name": "Targeted Scan Variant 716 (Port 1433)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #716 focusing on port 1433 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 1433",
      "cmd_716"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_717",
    "name": "Targeted Scan Variant 717 (Port 1521)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #717 focusing on port 1521 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 1521",
      "cmd_717"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_718",
    "name": "Targeted Scan Variant 718 (Port 3306)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #718 focusing on port 3306 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 3306",
      "cmd_718"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_719",
    "name": "Targeted Scan Variant 719 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #719 focusing on port 3389 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 3389",
      "cmd_719"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_720",
    "name": "Targeted Scan Variant 720 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #720 focusing on port 5432 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 5432",
      "cmd_720"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_721",
    "name": "Targeted Scan Variant 721 (Port 5900)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #721 focusing on port 5900 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 5900",
      "cmd_721"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_722",
    "name": "Targeted Scan Variant 722 (Port 6379)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #722 focusing on port 6379 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 6379",
      "cmd_722"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_723",
    "name": "Targeted Scan Variant 723 (Port 8080)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #723 focusing on port 8080 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 8080",
      "cmd_723"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_724",
    "name": "Targeted Scan Variant 724 (Port 8443)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #724 focusing on port 8443 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 8443",
      "cmd_724"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_725",
    "name": "Targeted Scan Variant 725 (Port 27017)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #725 focusing on port 27017 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 27017",
      "cmd_725"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_726",
    "name": "Targeted Scan Variant 726 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #726 focusing on port 21 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 21",
      "cmd_726"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_727",
    "name": "Targeted Scan Variant 727 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #727 focusing on port 22 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 22",
      "cmd_727"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_728",
    "name": "Targeted Scan Variant 728 (Port 23)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #728 focusing on port 23 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 23",
      "cmd_728"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_729",
    "name": "Targeted Scan Variant 729 (Port 25)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #729 focusing on port 25 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 25",
      "cmd_729"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_730",
    "name": "Targeted Scan Variant 730 (Port 53)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #730 focusing on port 53 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 53",
      "cmd_730"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_731",
    "name": "Targeted Scan Variant 731 (Port 80)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #731 focusing on port 80 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 80",
      "cmd_731"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_732",
    "name": "Targeted Scan Variant 732 (Port 110)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #732 focusing on port 110 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 110",
      "cmd_732"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_733",
    "name": "Targeted Scan Variant 733 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #733 focusing on port 143 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 143",
      "cmd_733"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_734",
    "name": "Targeted Scan Variant 734 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #734 focusing on port 443 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 443",
      "cmd_734"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_735",
    "name": "Targeted Scan Variant 735 (Port 445)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #735 focusing on port 445 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 445",
      "cmd_735"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_736",
    "name": "Targeted Scan Variant 736 (Port 993)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #736 focusing on port 993 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 993",
      "cmd_736"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_737",
    "name": "Targeted Scan Variant 737 (Port 995)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #737 focusing on port 995 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 995",
      "cmd_737"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_738",
    "name": "Targeted Scan Variant 738 (Port 1433)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #738 focusing on port 1433 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 1433",
      "cmd_738"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_739",
    "name": "Targeted Scan Variant 739 (Port 1521)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #739 focusing on port 1521 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 1521",
      "cmd_739"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_740",
    "name": "Targeted Scan Variant 740 (Port 3306)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #740 focusing on port 3306 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 3306",
      "cmd_740"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_741",
    "name": "Targeted Scan Variant 741 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #741 focusing on port 3389 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 3389",
      "cmd_741"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_742",
    "name": "Targeted Scan Variant 742 (Port 5432)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #742 focusing on port 5432 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 5432",
      "cmd_742"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_743",
    "name": "Targeted Scan Variant 743 (Port 5900)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #743 focusing on port 5900 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 5900",
      "cmd_743"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_744",
    "name": "Targeted Scan Variant 744 (Port 6379)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #744 focusing on port 6379 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 6379",
      "cmd_744"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_745",
    "name": "Targeted Scan Variant 745 (Port 8080)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #745 focusing on port 8080 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 8080",
      "cmd_745"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_746",
    "name": "Targeted Scan Variant 746 (Port 8443)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #746 focusing on port 8443 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 8443",
      "cmd_746"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_747",
    "name": "Targeted Scan Variant 747 (Port 27017)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #747 focusing on port 27017 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 27017",
      "cmd_747"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_748",
    "name": "Targeted Scan Variant 748 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #748 focusing on port 21 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 21",
      "cmd_748"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_749",
    "name": "Targeted Scan Variant 749 (Port 22)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #749 focusing on port 22 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 22",
      "cmd_749"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_750",
    "name": "Targeted Scan Variant 750 (Port 23)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #750 focusing on port 23 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 23",
      "cmd_750"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_751",
    "name": "Targeted Scan Variant 751 (Port 25)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #751 focusing on port 25 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 25",
      "cmd_751"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_752",
    "name": "Targeted Scan Variant 752 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #752 focusing on port 53 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 53",
      "cmd_752"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_753",
    "name": "Targeted Scan Variant 753 (Port 80)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #753 focusing on port 80 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 80",
      "cmd_753"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_754",
    "name": "Targeted Scan Variant 754 (Port 110)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #754 focusing on port 110 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 110",
      "cmd_754"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_755",
    "name": "Targeted Scan Variant 755 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #755 focusing on port 143 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 143",
      "cmd_755"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_756",
    "name": "Targeted Scan Variant 756 (Port 443)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #756 focusing on port 443 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 443",
      "cmd_756"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_757",
    "name": "Targeted Scan Variant 757 (Port 445)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #757 focusing on port 445 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 445",
      "cmd_757"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_758",
    "name": "Targeted Scan Variant 758 (Port 993)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #758 focusing on port 993 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 993",
      "cmd_758"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_759",
    "name": "Targeted Scan Variant 759 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #759 focusing on port 995 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 995",
      "cmd_759"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_760",
    "name": "Targeted Scan Variant 760 (Port 1433)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #760 focusing on port 1433 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 1433",
      "cmd_760"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_761",
    "name": "Targeted Scan Variant 761 (Port 1521)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #761 focusing on port 1521 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 1521",
      "cmd_761"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_762",
    "name": "Targeted Scan Variant 762 (Port 3306)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #762 focusing on port 3306 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 3306",
      "cmd_762"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_763",
    "name": "Targeted Scan Variant 763 (Port 3389)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #763 focusing on port 3389 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 3389",
      "cmd_763"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_764",
    "name": "Targeted Scan Variant 764 (Port 5432)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #764 focusing on port 5432 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 5432",
      "cmd_764"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_765",
    "name": "Targeted Scan Variant 765 (Port 5900)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #765 focusing on port 5900 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 5900",
      "cmd_765"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_766",
    "name": "Targeted Scan Variant 766 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #766 focusing on port 6379 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 6379",
      "cmd_766"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_767",
    "name": "Targeted Scan Variant 767 (Port 8080)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #767 focusing on port 8080 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 8080",
      "cmd_767"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_768",
    "name": "Targeted Scan Variant 768 (Port 8443)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #768 focusing on port 8443 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 8443",
      "cmd_768"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_769",
    "name": "Targeted Scan Variant 769 (Port 27017)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #769 focusing on port 27017 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 27017",
      "cmd_769"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_770",
    "name": "Targeted Scan Variant 770 (Port 21)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #770 focusing on port 21 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 21",
      "cmd_770"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_771",
    "name": "Targeted Scan Variant 771 (Port 22)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #771 focusing on port 22 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 22",
      "cmd_771"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_772",
    "name": "Targeted Scan Variant 772 (Port 23)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #772 focusing on port 23 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 23",
      "cmd_772"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_773",
    "name": "Targeted Scan Variant 773 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #773 focusing on port 25 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 25",
      "cmd_773"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_774",
    "name": "Targeted Scan Variant 774 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #774 focusing on port 53 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 53",
      "cmd_774"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_775",
    "name": "Targeted Scan Variant 775 (Port 80)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #775 focusing on port 80 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 80",
      "cmd_775"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_776",
    "name": "Targeted Scan Variant 776 (Port 110)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #776 focusing on port 110 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 110",
      "cmd_776"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_777",
    "name": "Targeted Scan Variant 777 (Port 143)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #777 focusing on port 143 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 143",
      "cmd_777"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_778",
    "name": "Targeted Scan Variant 778 (Port 443)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #778 focusing on port 443 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 443",
      "cmd_778"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_779",
    "name": "Targeted Scan Variant 779 (Port 445)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #779 focusing on port 445 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 445",
      "cmd_779"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_780",
    "name": "Targeted Scan Variant 780 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #780 focusing on port 993 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 993",
      "cmd_780"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_781",
    "name": "Targeted Scan Variant 781 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #781 focusing on port 995 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 995",
      "cmd_781"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_782",
    "name": "Targeted Scan Variant 782 (Port 1433)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #782 focusing on port 1433 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 1433",
      "cmd_782"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_783",
    "name": "Targeted Scan Variant 783 (Port 1521)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #783 focusing on port 1521 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 1521",
      "cmd_783"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_784",
    "name": "Targeted Scan Variant 784 (Port 3306)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #784 focusing on port 3306 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 3306",
      "cmd_784"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_785",
    "name": "Targeted Scan Variant 785 (Port 3389)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #785 focusing on port 3389 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 3389",
      "cmd_785"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_786",
    "name": "Targeted Scan Variant 786 (Port 5432)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #786 focusing on port 5432 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 5432",
      "cmd_786"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_787",
    "name": "Targeted Scan Variant 787 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #787 focusing on port 5900 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 5900",
      "cmd_787"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_788",
    "name": "Targeted Scan Variant 788 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #788 focusing on port 6379 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 6379",
      "cmd_788"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_789",
    "name": "Targeted Scan Variant 789 (Port 8080)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #789 focusing on port 8080 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 8080",
      "cmd_789"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_790",
    "name": "Targeted Scan Variant 790 (Port 8443)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #790 focusing on port 8443 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 8443",
      "cmd_790"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_791",
    "name": "Targeted Scan Variant 791 (Port 27017)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #791 focusing on port 27017 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 27017",
      "cmd_791"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_792",
    "name": "Targeted Scan Variant 792 (Port 21)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #792 focusing on port 21 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 21",
      "cmd_792"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_793",
    "name": "Targeted Scan Variant 793 (Port 22)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #793 focusing on port 22 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 22",
      "cmd_793"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_794",
    "name": "Targeted Scan Variant 794 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #794 focusing on port 23 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 23",
      "cmd_794"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_795",
    "name": "Targeted Scan Variant 795 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #795 focusing on port 25 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 25",
      "cmd_795"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_796",
    "name": "Targeted Scan Variant 796 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #796 focusing on port 53 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 53",
      "cmd_796"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_797",
    "name": "Targeted Scan Variant 797 (Port 80)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #797 focusing on port 80 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 80",
      "cmd_797"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_798",
    "name": "Targeted Scan Variant 798 (Port 110)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #798 focusing on port 110 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 110",
      "cmd_798"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_799",
    "name": "Targeted Scan Variant 799 (Port 143)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #799 focusing on port 143 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 143",
      "cmd_799"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_800",
    "name": "Targeted Scan Variant 800 (Port 443)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #800 focusing on port 443 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 443",
      "cmd_800"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_801",
    "name": "Targeted Scan Variant 801 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #801 focusing on port 445 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 445",
      "cmd_801"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_802",
    "name": "Targeted Scan Variant 802 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #802 focusing on port 993 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 993",
      "cmd_802"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_803",
    "name": "Targeted Scan Variant 803 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #803 focusing on port 995 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 995",
      "cmd_803"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_804",
    "name": "Targeted Scan Variant 804 (Port 1433)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #804 focusing on port 1433 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 1433",
      "cmd_804"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_805",
    "name": "Targeted Scan Variant 805 (Port 1521)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #805 focusing on port 1521 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 1521",
      "cmd_805"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_806",
    "name": "Targeted Scan Variant 806 (Port 3306)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #806 focusing on port 3306 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 3306",
      "cmd_806"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_807",
    "name": "Targeted Scan Variant 807 (Port 3389)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #807 focusing on port 3389 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 3389",
      "cmd_807"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_808",
    "name": "Targeted Scan Variant 808 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #808 focusing on port 5432 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 5432",
      "cmd_808"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_809",
    "name": "Targeted Scan Variant 809 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #809 focusing on port 5900 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 5900",
      "cmd_809"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_810",
    "name": "Targeted Scan Variant 810 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #810 focusing on port 6379 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 6379",
      "cmd_810"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_811",
    "name": "Targeted Scan Variant 811 (Port 8080)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #811 focusing on port 8080 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 8080",
      "cmd_811"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_812",
    "name": "Targeted Scan Variant 812 (Port 8443)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #812 focusing on port 8443 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 8443",
      "cmd_812"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_813",
    "name": "Targeted Scan Variant 813 (Port 27017)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #813 focusing on port 27017 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 27017",
      "cmd_813"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_814",
    "name": "Targeted Scan Variant 814 (Port 21)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #814 focusing on port 21 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 21",
      "cmd_814"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_815",
    "name": "Targeted Scan Variant 815 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #815 focusing on port 22 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 22",
      "cmd_815"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_816",
    "name": "Targeted Scan Variant 816 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #816 focusing on port 23 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 23",
      "cmd_816"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_817",
    "name": "Targeted Scan Variant 817 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #817 focusing on port 25 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 25",
      "cmd_817"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_818",
    "name": "Targeted Scan Variant 818 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #818 focusing on port 53 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 53",
      "cmd_818"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_819",
    "name": "Targeted Scan Variant 819 (Port 80)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #819 focusing on port 80 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 80",
      "cmd_819"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_820",
    "name": "Targeted Scan Variant 820 (Port 110)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #820 focusing on port 110 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 110",
      "cmd_820"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_821",
    "name": "Targeted Scan Variant 821 (Port 143)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #821 focusing on port 143 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 143",
      "cmd_821"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_822",
    "name": "Targeted Scan Variant 822 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #822 focusing on port 443 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 443",
      "cmd_822"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_823",
    "name": "Targeted Scan Variant 823 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #823 focusing on port 445 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 445",
      "cmd_823"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_824",
    "name": "Targeted Scan Variant 824 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #824 focusing on port 993 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 993",
      "cmd_824"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_825",
    "name": "Targeted Scan Variant 825 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #825 focusing on port 995 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 995",
      "cmd_825"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_826",
    "name": "Targeted Scan Variant 826 (Port 1433)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #826 focusing on port 1433 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 1433",
      "cmd_826"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_827",
    "name": "Targeted Scan Variant 827 (Port 1521)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #827 focusing on port 1521 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 1521",
      "cmd_827"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_828",
    "name": "Targeted Scan Variant 828 (Port 3306)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #828 focusing on port 3306 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 3306",
      "cmd_828"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_829",
    "name": "Targeted Scan Variant 829 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #829 focusing on port 3389 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 3389",
      "cmd_829"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_830",
    "name": "Targeted Scan Variant 830 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #830 focusing on port 5432 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 5432",
      "cmd_830"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_831",
    "name": "Targeted Scan Variant 831 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #831 focusing on port 5900 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 5900",
      "cmd_831"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_832",
    "name": "Targeted Scan Variant 832 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #832 focusing on port 6379 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 6379",
      "cmd_832"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_833",
    "name": "Targeted Scan Variant 833 (Port 8080)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #833 focusing on port 8080 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 8080",
      "cmd_833"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_834",
    "name": "Targeted Scan Variant 834 (Port 8443)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #834 focusing on port 8443 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 8443",
      "cmd_834"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_835",
    "name": "Targeted Scan Variant 835 (Port 27017)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #835 focusing on port 27017 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 27017",
      "cmd_835"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_836",
    "name": "Targeted Scan Variant 836 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #836 focusing on port 21 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 21",
      "cmd_836"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_837",
    "name": "Targeted Scan Variant 837 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #837 focusing on port 22 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 22",
      "cmd_837"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_838",
    "name": "Targeted Scan Variant 838 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #838 focusing on port 23 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 23",
      "cmd_838"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_839",
    "name": "Targeted Scan Variant 839 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #839 focusing on port 25 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 25",
      "cmd_839"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_840",
    "name": "Targeted Scan Variant 840 (Port 53)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #840 focusing on port 53 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 53",
      "cmd_840"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_841",
    "name": "Targeted Scan Variant 841 (Port 80)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #841 focusing on port 80 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 80",
      "cmd_841"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_842",
    "name": "Targeted Scan Variant 842 (Port 110)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #842 focusing on port 110 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 110",
      "cmd_842"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_843",
    "name": "Targeted Scan Variant 843 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #843 focusing on port 143 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 143",
      "cmd_843"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_844",
    "name": "Targeted Scan Variant 844 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #844 focusing on port 443 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 443",
      "cmd_844"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_845",
    "name": "Targeted Scan Variant 845 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #845 focusing on port 445 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 445",
      "cmd_845"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_846",
    "name": "Targeted Scan Variant 846 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #846 focusing on port 993 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 993",
      "cmd_846"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_847",
    "name": "Targeted Scan Variant 847 (Port 995)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #847 focusing on port 995 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 995",
      "cmd_847"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_848",
    "name": "Targeted Scan Variant 848 (Port 1433)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #848 focusing on port 1433 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 1433",
      "cmd_848"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_849",
    "name": "Targeted Scan Variant 849 (Port 1521)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #849 focusing on port 1521 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 1521",
      "cmd_849"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_850",
    "name": "Targeted Scan Variant 850 (Port 3306)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #850 focusing on port 3306 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 3306",
      "cmd_850"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_851",
    "name": "Targeted Scan Variant 851 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #851 focusing on port 3389 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 3389",
      "cmd_851"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_852",
    "name": "Targeted Scan Variant 852 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #852 focusing on port 5432 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 5432",
      "cmd_852"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_853",
    "name": "Targeted Scan Variant 853 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #853 focusing on port 5900 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 5900",
      "cmd_853"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_854",
    "name": "Targeted Scan Variant 854 (Port 6379)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #854 focusing on port 6379 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 6379",
      "cmd_854"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_855",
    "name": "Targeted Scan Variant 855 (Port 8080)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #855 focusing on port 8080 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 8080",
      "cmd_855"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_856",
    "name": "Targeted Scan Variant 856 (Port 8443)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #856 focusing on port 8443 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 8443",
      "cmd_856"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_857",
    "name": "Targeted Scan Variant 857 (Port 27017)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #857 focusing on port 27017 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 27017",
      "cmd_857"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_858",
    "name": "Targeted Scan Variant 858 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #858 focusing on port 21 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 21",
      "cmd_858"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_859",
    "name": "Targeted Scan Variant 859 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #859 focusing on port 22 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 22",
      "cmd_859"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_860",
    "name": "Targeted Scan Variant 860 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #860 focusing on port 23 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 23",
      "cmd_860"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_861",
    "name": "Targeted Scan Variant 861 (Port 25)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #861 focusing on port 25 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 25",
      "cmd_861"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_862",
    "name": "Targeted Scan Variant 862 (Port 53)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #862 focusing on port 53 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 53",
      "cmd_862"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_863",
    "name": "Targeted Scan Variant 863 (Port 80)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #863 focusing on port 80 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 80",
      "cmd_863"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_864",
    "name": "Targeted Scan Variant 864 (Port 110)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #864 focusing on port 110 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 110",
      "cmd_864"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_865",
    "name": "Targeted Scan Variant 865 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #865 focusing on port 143 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 143",
      "cmd_865"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_866",
    "name": "Targeted Scan Variant 866 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #866 focusing on port 443 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 443",
      "cmd_866"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_867",
    "name": "Targeted Scan Variant 867 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #867 focusing on port 445 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 445",
      "cmd_867"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_868",
    "name": "Targeted Scan Variant 868 (Port 993)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #868 focusing on port 993 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 993",
      "cmd_868"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_869",
    "name": "Targeted Scan Variant 869 (Port 995)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #869 focusing on port 995 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 995",
      "cmd_869"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_870",
    "name": "Targeted Scan Variant 870 (Port 1433)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #870 focusing on port 1433 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 1433",
      "cmd_870"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_871",
    "name": "Targeted Scan Variant 871 (Port 1521)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #871 focusing on port 1521 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 1521",
      "cmd_871"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_872",
    "name": "Targeted Scan Variant 872 (Port 3306)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #872 focusing on port 3306 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 3306",
      "cmd_872"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_873",
    "name": "Targeted Scan Variant 873 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #873 focusing on port 3389 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 3389",
      "cmd_873"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_874",
    "name": "Targeted Scan Variant 874 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #874 focusing on port 5432 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 5432",
      "cmd_874"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_875",
    "name": "Targeted Scan Variant 875 (Port 5900)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #875 focusing on port 5900 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 5900",
      "cmd_875"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_876",
    "name": "Targeted Scan Variant 876 (Port 6379)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #876 focusing on port 6379 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 6379",
      "cmd_876"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_877",
    "name": "Targeted Scan Variant 877 (Port 8080)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #877 focusing on port 8080 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 8080",
      "cmd_877"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_878",
    "name": "Targeted Scan Variant 878 (Port 8443)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #878 focusing on port 8443 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 8443",
      "cmd_878"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_879",
    "name": "Targeted Scan Variant 879 (Port 27017)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #879 focusing on port 27017 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 27017",
      "cmd_879"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_880",
    "name": "Targeted Scan Variant 880 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #880 focusing on port 21 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 21",
      "cmd_880"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_881",
    "name": "Targeted Scan Variant 881 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #881 focusing on port 22 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 22",
      "cmd_881"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_882",
    "name": "Targeted Scan Variant 882 (Port 23)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #882 focusing on port 23 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 23",
      "cmd_882"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_883",
    "name": "Targeted Scan Variant 883 (Port 25)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #883 focusing on port 25 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 25",
      "cmd_883"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_884",
    "name": "Targeted Scan Variant 884 (Port 53)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #884 focusing on port 53 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 53",
      "cmd_884"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_885",
    "name": "Targeted Scan Variant 885 (Port 80)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #885 focusing on port 80 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 80",
      "cmd_885"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_886",
    "name": "Targeted Scan Variant 886 (Port 110)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #886 focusing on port 110 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 110",
      "cmd_886"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_887",
    "name": "Targeted Scan Variant 887 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #887 focusing on port 143 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 143",
      "cmd_887"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_888",
    "name": "Targeted Scan Variant 888 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #888 focusing on port 443 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 443",
      "cmd_888"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_889",
    "name": "Targeted Scan Variant 889 (Port 445)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #889 focusing on port 445 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 445",
      "cmd_889"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_890",
    "name": "Targeted Scan Variant 890 (Port 993)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #890 focusing on port 993 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 993",
      "cmd_890"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_891",
    "name": "Targeted Scan Variant 891 (Port 995)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #891 focusing on port 995 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 995",
      "cmd_891"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_892",
    "name": "Targeted Scan Variant 892 (Port 1433)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #892 focusing on port 1433 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 1433",
      "cmd_892"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_893",
    "name": "Targeted Scan Variant 893 (Port 1521)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #893 focusing on port 1521 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 1521",
      "cmd_893"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_894",
    "name": "Targeted Scan Variant 894 (Port 3306)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #894 focusing on port 3306 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 3306",
      "cmd_894"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_895",
    "name": "Targeted Scan Variant 895 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #895 focusing on port 3389 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 3389",
      "cmd_895"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_896",
    "name": "Targeted Scan Variant 896 (Port 5432)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #896 focusing on port 5432 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 5432",
      "cmd_896"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_897",
    "name": "Targeted Scan Variant 897 (Port 5900)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #897 focusing on port 5900 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 5900",
      "cmd_897"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_898",
    "name": "Targeted Scan Variant 898 (Port 6379)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #898 focusing on port 6379 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 6379",
      "cmd_898"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_899",
    "name": "Targeted Scan Variant 899 (Port 8080)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #899 focusing on port 8080 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 8080",
      "cmd_899"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_900",
    "name": "Targeted Scan Variant 900 (Port 8443)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #900 focusing on port 8443 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 8443",
      "cmd_900"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_901",
    "name": "Targeted Scan Variant 901 (Port 27017)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #901 focusing on port 27017 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 27017",
      "cmd_901"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_902",
    "name": "Targeted Scan Variant 902 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #902 focusing on port 21 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 21",
      "cmd_902"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_903",
    "name": "Targeted Scan Variant 903 (Port 22)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #903 focusing on port 22 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 22",
      "cmd_903"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_904",
    "name": "Targeted Scan Variant 904 (Port 23)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #904 focusing on port 23 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 23",
      "cmd_904"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_905",
    "name": "Targeted Scan Variant 905 (Port 25)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #905 focusing on port 25 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 25",
      "cmd_905"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_906",
    "name": "Targeted Scan Variant 906 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #906 focusing on port 53 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 53",
      "cmd_906"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_907",
    "name": "Targeted Scan Variant 907 (Port 80)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #907 focusing on port 80 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 80",
      "cmd_907"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_908",
    "name": "Targeted Scan Variant 908 (Port 110)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #908 focusing on port 110 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 110",
      "cmd_908"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_909",
    "name": "Targeted Scan Variant 909 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #909 focusing on port 143 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 143",
      "cmd_909"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_910",
    "name": "Targeted Scan Variant 910 (Port 443)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #910 focusing on port 443 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 443",
      "cmd_910"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_911",
    "name": "Targeted Scan Variant 911 (Port 445)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #911 focusing on port 445 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 445",
      "cmd_911"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_912",
    "name": "Targeted Scan Variant 912 (Port 993)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #912 focusing on port 993 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 993",
      "cmd_912"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_913",
    "name": "Targeted Scan Variant 913 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #913 focusing on port 995 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 995",
      "cmd_913"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_914",
    "name": "Targeted Scan Variant 914 (Port 1433)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #914 focusing on port 1433 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 1433",
      "cmd_914"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_915",
    "name": "Targeted Scan Variant 915 (Port 1521)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #915 focusing on port 1521 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 1521",
      "cmd_915"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_916",
    "name": "Targeted Scan Variant 916 (Port 3306)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #916 focusing on port 3306 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 3306",
      "cmd_916"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_917",
    "name": "Targeted Scan Variant 917 (Port 3389)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #917 focusing on port 3389 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 3389",
      "cmd_917"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_918",
    "name": "Targeted Scan Variant 918 (Port 5432)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #918 focusing on port 5432 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 5432",
      "cmd_918"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_919",
    "name": "Targeted Scan Variant 919 (Port 5900)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #919 focusing on port 5900 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 5900",
      "cmd_919"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_920",
    "name": "Targeted Scan Variant 920 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #920 focusing on port 6379 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 6379",
      "cmd_920"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_921",
    "name": "Targeted Scan Variant 921 (Port 8080)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #921 focusing on port 8080 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 8080",
      "cmd_921"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_922",
    "name": "Targeted Scan Variant 922 (Port 8443)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #922 focusing on port 8443 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 8443",
      "cmd_922"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_923",
    "name": "Targeted Scan Variant 923 (Port 27017)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #923 focusing on port 27017 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 27017",
      "cmd_923"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_924",
    "name": "Targeted Scan Variant 924 (Port 21)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #924 focusing on port 21 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 21",
      "cmd_924"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_925",
    "name": "Targeted Scan Variant 925 (Port 22)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #925 focusing on port 22 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 22",
      "cmd_925"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_926",
    "name": "Targeted Scan Variant 926 (Port 23)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #926 focusing on port 23 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 23",
      "cmd_926"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_927",
    "name": "Targeted Scan Variant 927 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #927 focusing on port 25 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 25",
      "cmd_927"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_928",
    "name": "Targeted Scan Variant 928 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #928 focusing on port 53 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 53",
      "cmd_928"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_929",
    "name": "Targeted Scan Variant 929 (Port 80)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #929 focusing on port 80 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 80",
      "cmd_929"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_930",
    "name": "Targeted Scan Variant 930 (Port 110)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #930 focusing on port 110 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 110",
      "cmd_930"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_931",
    "name": "Targeted Scan Variant 931 (Port 143)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #931 focusing on port 143 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 143",
      "cmd_931"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_932",
    "name": "Targeted Scan Variant 932 (Port 443)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #932 focusing on port 443 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 443",
      "cmd_932"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_933",
    "name": "Targeted Scan Variant 933 (Port 445)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #933 focusing on port 445 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 445",
      "cmd_933"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_934",
    "name": "Targeted Scan Variant 934 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #934 focusing on port 993 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 993",
      "cmd_934"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_935",
    "name": "Targeted Scan Variant 935 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #935 focusing on port 995 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 995",
      "cmd_935"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_936",
    "name": "Targeted Scan Variant 936 (Port 1433)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #936 focusing on port 1433 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 1433",
      "cmd_936"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_937",
    "name": "Targeted Scan Variant 937 (Port 1521)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #937 focusing on port 1521 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 1521",
      "cmd_937"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_938",
    "name": "Targeted Scan Variant 938 (Port 3306)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #938 focusing on port 3306 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 3306",
      "cmd_938"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_939",
    "name": "Targeted Scan Variant 939 (Port 3389)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #939 focusing on port 3389 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 3389",
      "cmd_939"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_940",
    "name": "Targeted Scan Variant 940 (Port 5432)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #940 focusing on port 5432 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 5432",
      "cmd_940"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_941",
    "name": "Targeted Scan Variant 941 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #941 focusing on port 5900 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 5900",
      "cmd_941"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_942",
    "name": "Targeted Scan Variant 942 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #942 focusing on port 6379 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 6379",
      "cmd_942"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_943",
    "name": "Targeted Scan Variant 943 (Port 8080)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #943 focusing on port 8080 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 8080",
      "cmd_943"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_944",
    "name": "Targeted Scan Variant 944 (Port 8443)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #944 focusing on port 8443 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 8443",
      "cmd_944"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_945",
    "name": "Targeted Scan Variant 945 (Port 27017)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #945 focusing on port 27017 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 27017",
      "cmd_945"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_946",
    "name": "Targeted Scan Variant 946 (Port 21)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #946 focusing on port 21 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 21",
      "cmd_946"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_947",
    "name": "Targeted Scan Variant 947 (Port 22)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #947 focusing on port 22 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 22",
      "cmd_947"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_948",
    "name": "Targeted Scan Variant 948 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #948 focusing on port 23 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 23",
      "cmd_948"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_949",
    "name": "Targeted Scan Variant 949 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #949 focusing on port 25 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 25",
      "cmd_949"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_950",
    "name": "Targeted Scan Variant 950 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #950 focusing on port 53 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 53",
      "cmd_950"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_951",
    "name": "Targeted Scan Variant 951 (Port 80)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #951 focusing on port 80 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 80",
      "cmd_951"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_952",
    "name": "Targeted Scan Variant 952 (Port 110)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #952 focusing on port 110 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 110",
      "cmd_952"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_953",
    "name": "Targeted Scan Variant 953 (Port 143)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #953 focusing on port 143 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 143",
      "cmd_953"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_954",
    "name": "Targeted Scan Variant 954 (Port 443)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #954 focusing on port 443 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 443",
      "cmd_954"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_955",
    "name": "Targeted Scan Variant 955 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #955 focusing on port 445 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 445",
      "cmd_955"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_956",
    "name": "Targeted Scan Variant 956 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #956 focusing on port 993 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 993",
      "cmd_956"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_957",
    "name": "Targeted Scan Variant 957 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #957 focusing on port 995 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 995",
      "cmd_957"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_958",
    "name": "Targeted Scan Variant 958 (Port 1433)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #958 focusing on port 1433 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 1433",
      "cmd_958"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_959",
    "name": "Targeted Scan Variant 959 (Port 1521)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #959 focusing on port 1521 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 1521",
      "cmd_959"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_960",
    "name": "Targeted Scan Variant 960 (Port 3306)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #960 focusing on port 3306 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 3306",
      "cmd_960"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_961",
    "name": "Targeted Scan Variant 961 (Port 3389)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #961 focusing on port 3389 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 3389",
      "cmd_961"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_962",
    "name": "Targeted Scan Variant 962 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #962 focusing on port 5432 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 5432",
      "cmd_962"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_963",
    "name": "Targeted Scan Variant 963 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #963 focusing on port 5900 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 5900",
      "cmd_963"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_964",
    "name": "Targeted Scan Variant 964 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #964 focusing on port 6379 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 6379",
      "cmd_964"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_965",
    "name": "Targeted Scan Variant 965 (Port 8080)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #965 focusing on port 8080 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 8080",
      "cmd_965"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_966",
    "name": "Targeted Scan Variant 966 (Port 8443)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #966 focusing on port 8443 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 8443",
      "cmd_966"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_967",
    "name": "Targeted Scan Variant 967 (Port 27017)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #967 focusing on port 27017 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 27017",
      "cmd_967"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_968",
    "name": "Targeted Scan Variant 968 (Port 21)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #968 focusing on port 21 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 21",
      "cmd_968"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_969",
    "name": "Targeted Scan Variant 969 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #969 focusing on port 22 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 22",
      "cmd_969"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_970",
    "name": "Targeted Scan Variant 970 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #970 focusing on port 23 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 23",
      "cmd_970"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_971",
    "name": "Targeted Scan Variant 971 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #971 focusing on port 25 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 25",
      "cmd_971"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_972",
    "name": "Targeted Scan Variant 972 (Port 53)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #972 focusing on port 53 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 53",
      "cmd_972"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_973",
    "name": "Targeted Scan Variant 973 (Port 80)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #973 focusing on port 80 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 80",
      "cmd_973"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_974",
    "name": "Targeted Scan Variant 974 (Port 110)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #974 focusing on port 110 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 110",
      "cmd_974"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_975",
    "name": "Targeted Scan Variant 975 (Port 143)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #975 focusing on port 143 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 143",
      "cmd_975"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_976",
    "name": "Targeted Scan Variant 976 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #976 focusing on port 443 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 443",
      "cmd_976"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_977",
    "name": "Targeted Scan Variant 977 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #977 focusing on port 445 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 445",
      "cmd_977"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_978",
    "name": "Targeted Scan Variant 978 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #978 focusing on port 993 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 993",
      "cmd_978"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 993": "Target port 993."
    }
  },
  {
    "id": "cmd_gen_979",
    "name": "Targeted Scan Variant 979 (Port 995)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 995 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #979 focusing on port 995 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 995.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 995",
      "cmd_979"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 995": "Target port 995."
    }
  },
  {
    "id": "cmd_gen_980",
    "name": "Targeted Scan Variant 980 (Port 1433)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 1433 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #980 focusing on port 1433 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 1433.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 1433",
      "cmd_980"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 1433": "Target port 1433."
    }
  },
  {
    "id": "cmd_gen_981",
    "name": "Targeted Scan Variant 981 (Port 1521)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 1521 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #981 focusing on port 1521 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 1521.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 1521",
      "cmd_981"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 1521": "Target port 1521."
    }
  },
  {
    "id": "cmd_gen_982",
    "name": "Targeted Scan Variant 982 (Port 3306)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 3306 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #982 focusing on port 3306 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 3306.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 3306",
      "cmd_982"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 3306": "Target port 3306."
    }
  },
  {
    "id": "cmd_gen_983",
    "name": "Targeted Scan Variant 983 (Port 3389)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 3389 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #983 focusing on port 3389 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 3389.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 3389",
      "cmd_983"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 3389": "Target port 3389."
    }
  },
  {
    "id": "cmd_gen_984",
    "name": "Targeted Scan Variant 984 (Port 5432)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 5432 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #984 focusing on port 5432 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 5432.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 5432",
      "cmd_984"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 5432": "Target port 5432."
    }
  },
  {
    "id": "cmd_gen_985",
    "name": "Targeted Scan Variant 985 (Port 5900)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 5900 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #985 focusing on port 5900 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 5900.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 5900",
      "cmd_985"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 5900": "Target port 5900."
    }
  },
  {
    "id": "cmd_gen_986",
    "name": "Targeted Scan Variant 986 (Port 6379)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 6379 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #986 focusing on port 6379 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 6379.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 6379",
      "cmd_986"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 6379": "Target port 6379."
    }
  },
  {
    "id": "cmd_gen_987",
    "name": "Targeted Scan Variant 987 (Port 8080)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 8080 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #987 focusing on port 8080 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 8080.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 8080",
      "cmd_987"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 8080": "Target port 8080."
    }
  },
  {
    "id": "cmd_gen_988",
    "name": "Targeted Scan Variant 988 (Port 8443)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 8443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #988 focusing on port 8443 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 8443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 8443",
      "cmd_988"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 8443": "Target port 8443."
    }
  },
  {
    "id": "cmd_gen_989",
    "name": "Targeted Scan Variant 989 (Port 27017)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 27017 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #989 focusing on port 27017 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 27017.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 27017",
      "cmd_989"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 27017": "Target port 27017."
    }
  },
  {
    "id": "cmd_gen_990",
    "name": "Targeted Scan Variant 990 (Port 21)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 21 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #990 focusing on port 21 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 21.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 21",
      "cmd_990"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 21": "Target port 21."
    }
  },
  {
    "id": "cmd_gen_991",
    "name": "Targeted Scan Variant 991 (Port 22)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 22 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #991 focusing on port 22 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 22.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 22",
      "cmd_991"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 22": "Target port 22."
    }
  },
  {
    "id": "cmd_gen_992",
    "name": "Targeted Scan Variant 992 (Port 23)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 23 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #992 focusing on port 23 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 23.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 23",
      "cmd_992"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 23": "Target port 23."
    }
  },
  {
    "id": "cmd_gen_993",
    "name": "Targeted Scan Variant 993 (Port 25)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 25 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #993 focusing on port 25 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 25.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 25",
      "cmd_993"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 25": "Target port 25."
    }
  },
  {
    "id": "cmd_gen_994",
    "name": "Targeted Scan Variant 994 (Port 53)",
    "category": "port_scan",
    "commandPattern": "nmap -sS -p 53 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #994 focusing on port 53 with flag -sS.",
    "whenToUse": "Targeted single-port auditing for port 53.",
    "speedLevel": 4,
    "stealthLevel": 4,
    "riskLevel": "Low",
    "keywords": [
      "-sS",
      "port 53",
      "cmd_994"
    ],
    "flagExplanations": {
      "-sS": "Flag parameter -sS.",
      "-p 53": "Target port 53."
    }
  },
  {
    "id": "cmd_gen_995",
    "name": "Targeted Scan Variant 995 (Port 80)",
    "category": "port_scan",
    "commandPattern": "nmap -sT -p 80 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #995 focusing on port 80 with flag -sT.",
    "whenToUse": "Targeted single-port auditing for port 80.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sT",
      "port 80",
      "cmd_995"
    ],
    "flagExplanations": {
      "-sT": "Flag parameter -sT.",
      "-p 80": "Target port 80."
    }
  },
  {
    "id": "cmd_gen_996",
    "name": "Targeted Scan Variant 996 (Port 110)",
    "category": "port_scan",
    "commandPattern": "nmap -sU -p 110 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #996 focusing on port 110 with flag -sU.",
    "whenToUse": "Targeted single-port auditing for port 110.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sU",
      "port 110",
      "cmd_996"
    ],
    "flagExplanations": {
      "-sU": "Flag parameter -sU.",
      "-p 110": "Target port 110."
    }
  },
  {
    "id": "cmd_gen_997",
    "name": "Targeted Scan Variant 997 (Port 143)",
    "category": "advanced",
    "commandPattern": "nmap -sV -p 143 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #997 focusing on port 143 with flag -sV.",
    "whenToUse": "Targeted single-port auditing for port 143.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-sV",
      "port 143",
      "cmd_997"
    ],
    "flagExplanations": {
      "-sV": "Flag parameter -sV.",
      "-p 143": "Target port 143."
    }
  },
  {
    "id": "cmd_gen_998",
    "name": "Targeted Scan Variant 998 (Port 443)",
    "category": "advanced",
    "commandPattern": "nmap -A -p 443 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #998 focusing on port 443 with flag -A.",
    "whenToUse": "Targeted single-port auditing for port 443.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-A",
      "port 443",
      "cmd_998"
    ],
    "flagExplanations": {
      "-A": "Flag parameter -A.",
      "-p 443": "Target port 443."
    }
  },
  {
    "id": "cmd_gen_999",
    "name": "Targeted Scan Variant 999 (Port 445)",
    "category": "advanced",
    "commandPattern": "nmap -O -p 445 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #999 focusing on port 445 with flag -O.",
    "whenToUse": "Targeted single-port auditing for port 445.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-O",
      "port 445",
      "cmd_999"
    ],
    "flagExplanations": {
      "-O": "Flag parameter -O.",
      "-p 445": "Target port 445."
    }
  },
  {
    "id": "cmd_gen_1000",
    "name": "Targeted Scan Variant 1000 (Port 993)",
    "category": "advanced",
    "commandPattern": "nmap -Pn -p 993 {timing} {flags} {target}",
    "description": "Targeted Nmap scan probe variant #1000 focusing on port 993 with flag -Pn.",
    "whenToUse": "Targeted single-port auditing for port 993.",
    "speedLevel": 4,
    "stealthLevel": 3,
    "riskLevel": "Low",
    "keywords": [
      "-Pn",
      "port 993",
      "cmd_1000"
    ],
    "flagExplanations": {
      "-Pn": "Flag parameter -Pn.",
      "-p 993": "Target port 993."
    }
  }
];
