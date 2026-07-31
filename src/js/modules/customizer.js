/**
 * Dynamic IP & Port Customizer & Command String Builder
 */

export class CommandCustomizer {
  constructor() {
    this.target = "192.168.1.1";
    this.ports = "";
    this.timing = "-T4";
    this.customFlags = {
      pn: false,
      sv: false,
      o: false,
      a: false,
      verbose: false
    };
  }

  setTarget(targetStr) {
    this.target = targetStr.trim() || "192.168.1.1";
  }

  setPorts(portsStr) {
    this.ports = portsStr.trim();
  }

  setTiming(timingStr) {
    this.timing = timingStr || "-T4";
  }

  toggleFlag(flagKey, value) {
    if (this.customFlags.hasOwnProperty(flagKey)) {
      this.customFlags[flagKey] = Boolean(value);
    }
  }

  /**
   * Build live customized command string from pattern and state
   */
  buildCustomCommand(cmdObject) {
    let rawPattern = cmdObject.commandPattern;

    // Build ports parameter
    let portFlag = "";
    if (this.ports) {
      portFlag = `-p ${this.ports}`;
    }

    // Build additional toggled flags
    const activeFlags = [];
    if (this.customFlags.pn && !rawPattern.includes("-Pn")) activeFlags.push("-Pn");
    if (this.customFlags.sv && !rawPattern.includes("-sV")) activeFlags.push("-sV");
    if (this.customFlags.o && !rawPattern.includes("-O")) activeFlags.push("-O");
    if (this.customFlags.a && !rawPattern.includes("-A")) activeFlags.push("-A");
    if (this.customFlags.verbose && !rawPattern.includes("-v")) activeFlags.push("-v");

    const additionalFlagsStr = activeFlags.join(" ");

    // Replace placeholders
    let result = rawPattern
      .replace("{timing}", this.timing)
      .replace("{ports}", portFlag)
      .replace("{flags}", additionalFlagsStr)
      .replace("{target}", this.target);

    // Clean up multiple spaces
    return result.replace(/\s+/g, " ").trim();
  }
}
