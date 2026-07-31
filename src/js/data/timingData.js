/**
 * Nmap Timing Templates Database (-T0 .. -T5)
 */

export const TIMING_DATA = [
  {
    flag: "-T0",
    name: "Paranoid",
    badgeColor: "rose",
    description: "Extremely slow scan pacing designed to evade Intrusion Detection Systems (IDS). Sends packets 5 minutes apart.",
    delay: "5 minutes between probes",
    rttTimeout: "75 seconds",
    pros: "Maximum stealth, avoids IDS alerts",
    cons: "Takes hours or days for single host"
  },
  {
    flag: "-T1",
    name: "Sneaky",
    badgeColor: "purple",
    description: "Quiet scan pacing sending probes 15 seconds apart. Used for high-security firewalls.",
    delay: "15 seconds between probes",
    rttTimeout: "15 seconds",
    pros: "High stealth, low log footprint",
    cons: "Very slow for subnet scans"
  },
  {
    flag: "-T2",
    name: "Polite",
    badgeColor: "amber",
    description: "Slows scan speed to reduce network bandwidth impact and avoid overloading production servers.",
    delay: "0.4 seconds between probes",
    rttTimeout: "10 seconds",
    pros: "Production-safe, low bandwidth usage",
    cons: "Slower than default"
  },
  {
    flag: "-T3",
    name: "Normal",
    badgeColor: "cyan",
    description: "Default Nmap timing template. Balanced pacing dynamic RTT adjustments based on responsiveness.",
    delay: "Dynamic (0ms default)",
    rttTimeout: "Dynamic (100ms - 10s)",
    pros: "Balanced, reliable default",
    cons: "Standard IDS logging footprint"
  },
  {
    flag: "-T4",
    name: "Aggressive",
    badgeColor: "emerald",
    description: "Fast, reliable scanning template recommended for modern broadband and low-latency networks.",
    delay: "0ms (Max 10ms delay)",
    rttTimeout: "Max 1.25 seconds",
    pros: "High speed, fast audit completion",
    cons: "Triggers aggressive IDS/IPS rules"
  },
  {
    flag: "-T5",
    name: "Insane",
    badgeColor: "teal",
    description: "Ultra-fast scan template. Sacrifices accuracy for speed. Assumes high-speed, zero packet loss network.",
    delay: "0ms (Max 5ms delay)",
    rttTimeout: "Max 300ms",
    pros: "Ultra-fast subnet sweep",
    cons: "High packet drop risk, false negatives"
  }
];
