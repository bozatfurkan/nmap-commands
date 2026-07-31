/**
 * Dynamic Target IP, Port, Timing Template, and Flag Toggle Customizer
 */

export class CommandCustomizer {
  constructor() {
    this.target = "192.168.1.1";
    this.ports = "";
    this.timing = "-T4";
    this.flags = {
      pn: false,
      sv: false,
      o: false,
      a: false,
      verbose: false
    };
  }

  setTarget(ipStr) {
    this.target = ipStr.trim() || "192.168.1.1";
  }

  setPorts(portsStr) {
    this.ports = portsStr.trim();
  }

  setTiming(timingStr) {
    this.timing = timingStr.trim();
  }

  toggleFlag(flagKey, isChecked) {
    if (flagKey in this.flags) {
      this.flags[flagKey] = Boolean(isChecked);
    }
  }

  buildCustomCommand(cmdObj) {
    if (!cmdObj || !cmdObj.commandPattern) return "";

    let pattern = cmdObj.commandPattern;

    // Replace target
    pattern = pattern.replace("{target}", this.target);

    // Replace timing
    pattern = pattern.replace("{timing}", this.timing);

    // Replace ports
    let portSegment = "";
    if (this.ports) {
      portSegment = `-p ${this.ports}`;
    }
    pattern = pattern.replace("{ports}", portSegment);

    // Build extra flags segment
    const extraFlags = [];
    if (this.flags.pn && !pattern.includes("-Pn")) extraFlags.push("-Pn");
    if (this.flags.sv && !pattern.includes("-sV")) extraFlags.push("-sV");
    if (this.flags.o && !pattern.includes("-O")) extraFlags.push("-O");
    if (this.flags.a && !pattern.includes("-A")) extraFlags.push("-A");
    if (this.flags.verbose && !pattern.includes("-v")) extraFlags.push("-v");

    const flagsSegment = extraFlags.join(" ");
    pattern = pattern.replace("{flags}", flagsSegment);

    // Clean double spaces
    return pattern.replace(/\s+/g, " ").trim();
  }
}
