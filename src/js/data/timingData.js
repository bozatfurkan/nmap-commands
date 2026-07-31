/**
 * Nmap Timing Templates (-T0 to -T5) Detailed Guide Database (English)
 */

export const TIMING_DATA = [
  {
    level: "T0",
    name: "Paranoid",
    flag: "-T0",
    delay: "5 Minutes",
    rttTimeout: "5 Minutes",
    stealthRating: 5,
    speedRating: 1,
    badgeColor: "emerald",
    description: "Waits 5 minutes between probe packets to avoid triggering IDS/IPS alerts and SIEM rate thresholds. Extremely slow.",
    whenToUse: "When stealth is paramount on highly monitored, penetration-test authorized networks.",
    pros: "Niemand triggers rate-limit IDS signatures or automated firewall bans.",
    cons: "Scanning a single host can take hours or days."
  },
  {
    level: "T1",
    name: "Sneaky",
    flag: "-T1",
    delay: "15 Seconds",
    rttTimeout: "15 Seconds",
    stealthRating: 4,
    speedRating: 2,
    badgeColor: "teal",
    description: "Waits 15 seconds between probe packets. Faster than T0 while remaining quiet and discreet.",
    whenToUse: "Bypassing low-threshold IDS/IPS rule sets during stealth assessments.",
    pros: "Prevents sudden spikes in network connection logs.",
    cons: "Exhaustive port scans still require significant time."
  },
  {
    level: "T2",
    name: "Polite",
    flag: "-T2",
    delay: "0.4 Seconds",
    rttTimeout: "10 Seconds",
    stealthRating: 3,
    speedRating: 3,
    badgeColor: "cyan",
    description: "Paces probe packets by ~400ms to reduce network load and avoid overwhelming sensitive targets.",
    whenToUse: "Scanning sensitive production servers or legacy embedded devices.",
    pros: "Prevents target service crashes and bandwidth saturation.",
    cons: "Slower than default T3/T4 templates."
  },
  {
    level: "T3",
    name: "Normal",
    flag: "-T3",
    delay: "Dynamic (0ms)",
    rttTimeout: "Dynamic",
    stealthRating: 3,
    speedRating: 4,
    badgeColor: "blue",
    description: "Nmap default timing template. Dynamically adjusts probe timing based on network responsiveness.",
    whenToUse: "General network auditing when no explicit timing flag is specified.",
    pros: "Balanced performance, speed, and reliability.",
    cons: "No specialized timing optimization."
  },
  {
    level: "T4",
    name: "Aggressive",
    flag: "-T4",
    delay: "Dynamic (Max 10ms)",
    rttTimeout: "1.25 Seconds",
    stealthRating: 2,
    speedRating: 5,
    badgeColor: "amber",
    description: "Recommended timing for fast, modern, reliable broadband networks. Caps probe timeout at 1.25 seconds.",
    whenToUse: "Professional penetration testing on high-speed networks when time is constrained (Most Popular Choice).",
    pros: "Dramatically reduces total scan times.",
    cons: "Easily logged and detected by modern IDS/IPS systems."
  },
  {
    level: "T5",
    name: "Insane",
    flag: "-T5",
    delay: "Dynamic (Max 5ms)",
    rttTimeout: "300ms",
    stealthRating: 1,
    speedRating: 5,
    badgeColor: "rose",
    description: "Extremely aggressive timing template. May sacrifice accuracy on slow networks due to dropped probe packets.",
    whenToUse: "Only on ultra-fast, zero-loss local gigabit LAN networks for rapid host auditing.",
    pros: "Delivers results in seconds under ideal network conditions.",
    cons: "High packet loss risk; may miss open ports on slower connections."
  }
];
