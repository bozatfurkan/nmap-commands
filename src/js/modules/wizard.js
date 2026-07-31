/**
 * 4-Step Scenario-Based Guided Command Wizard Module
 */

export class ScenarioWizard {
  constructor() {
    this.currentStep = 1;
    this.answers = {
      objective: "stealth_syn",
      speed: "-T4",
      portRange: "top1000"
    };
  }

  setStep(stepNum) {
    if (stepNum >= 1 && stepNum <= 4) {
      this.currentStep = stepNum;
    }
  }

  setAnswer(key, val) {
    this.answers[key] = val;
  }

  generateWizardCommand(targetIp = "192.168.1.1") {
    let baseCmd = "nmap";
    const speed = this.answers.speed || "-T4";
    baseCmd += ` ${speed}`;

    // Objective flag selection
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
      case "firewall_bypass":
        baseCmd += " -Pn -f -g 53";
        break;
      case "aggressive_audit":
        baseCmd += " -A";
        break;
      default:
        baseCmd += " -sS";
    }

    // Port selection (unless ping sweep)
    if (this.answers.objective !== "ping_sweep") {
      switch (this.answers.portRange) {
        case "fast100":
          baseCmd += " -F";
          break;
        case "full65535":
          baseCmd += " -p-";
          break;
        case "webOnly":
          baseCmd += " -p 80,443,8080";
          break;
        case "top1000":
        default:
          break;
      }
    }

    baseCmd += ` ${targetIp}`;
    return baseCmd;
  }
}
