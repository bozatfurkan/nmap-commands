/**
 * Scenario-Based Step-by-Step Command Generator Wizard
 */

export class ScenarioWizard {
  constructor() {
    this.currentStep = 1;
    this.answers = {
      objective: "discovery",
      speed: "-T4",
      portRange: "top1000",
      additionalFlags: []
    };
  }

  setStep(stepNum) {
    this.currentStep = Math.max(1, Math.min(4, stepNum));
  }

  setAnswer(key, val) {
    this.answers[key] = val;
  }

  toggleAdditionalFlag(flag) {
    const idx = this.answers.additionalFlags.indexOf(flag);
    if (idx >= 0) {
      this.answers.additionalFlags.splice(idx, 1);
    } else {
      this.answers.additionalFlags.push(flag);
    }
  }

  generateWizardCommand(targetIp = "192.168.1.1") {
    let baseCmd = "nmap";

    // 1. Add Timing
    baseCmd += ` ${this.answers.speed}`;

    // 2. Add Objective Flags
    switch (this.answers.objective) {
      case "stealth_syn":
        baseCmd += " -sS";
        break;
      case "ping_sweep":
        baseCmd += " -sn";
        break;
      case "service_ver":
        baseCmd += " -sV";
        break;
      case "vuln_check":
        baseCmd += " --script=vuln";
        break;
      case "aggressive_audit":
        baseCmd += " -A";
        break;
      case "firewall_bypass":
        baseCmd += " -Pn -f -D RND:5";
        break;
      default:
        baseCmd += " -sS";
    }

    // 3. Add Port Range
    if (this.answers.objective !== "ping_sweep") {
      switch (this.answers.portRange) {
        case "fast100":
          baseCmd += " -F";
          break;
        case "full65535":
          baseCmd += " -p-";
          break;
        case "webOnly":
          baseCmd += " -p 80,443,8080,8443";
          break;
        case "top1000":
        default:
          break; // Default nmap behavior
      }
    }

    // 4. Add Custom Toggled Flags
    if (this.answers.additionalFlags.length > 0) {
      baseCmd += ` ${this.answers.additionalFlags.join(" ")}`;
    }

    // Target
    baseCmd += ` ${targetIp}`;

    return baseCmd.replace(/\s+/g, " ").trim();
  }
}
