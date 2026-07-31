/**
 * Report & Command List Exporter using HTML5 Blob API (English & Turkish Support)
 * Export Formats: TXT, Markdown (.md), JSON (.json), Executable Bash Script (.sh)
 */

export function exportCommandsToFile(commandsList, format = "txt", targetIp = "192.168.1.1") {
  if (!commandsList || commandsList.length === 0) {
    alert("No commands available to export!");
    return;
  }

  let fileContent = "";
  let mimeType = "text/plain;charset=utf-8";
  let filename = `nmap_scan_suite_${new Date().toISOString().slice(0, 10)}`;

  if (format === "sh") {
    mimeType = "application/x-sh;charset=utf-8";
    filename += ".sh";

    fileContent += `#!/usr/bin/env bash\n`;
    fileContent += `# ====================================================================\n`;
    fileContent += `# NMAP AUTOMATED AUDIT & RECONNAISSANCE SCRIPT\n`;
    fileContent += `# Generated: ${new Date().toLocaleString('en-US')}\n`;
    fileContent += `# Target IP / Subnet: ${targetIp}\n`;
    fileContent += `# Total Scan Routines: ${commandsList.length}\n`;
    fileContent += `# ====================================================================\n\n`;
    
    fileContent += `set -e\n`;
    fileContent += `TARGET="${targetIp}"\n`;
    fileContent += `TIMESTAMP=$(date +"%Y%m%d_%H%M%S")\n`;
    fileContent += `OUTPUT_DIR="./nmap_audit_results_\${TIMESTAMP}"\n\n`;
    fileContent += `mkdir -p "$OUTPUT_DIR"\n`;
    fileContent += `echo "[+] Starting Nmap Audit Suite against $TARGET..."\n`;
    fileContent += `echo "[+] Results will be saved in: $OUTPUT_DIR"\n\n`;

    commandsList.forEach((cmd, idx) => {
      const cleanCmdName = cmd.id.replace(/-/g, "_");
      const formattedCmd = cmd.commandPattern
        .replace("{target}", "$TARGET")
        .replace("{ports}", "")
        .replace("{timing}", "-T4")
        .replace("{flags}", "");

      fileContent += `# [Routine ${idx + 1}] ${cmd.name}\n`;
      fileContent += `# Category: ${cmd.category} | Risk: ${cmd.riskLevel}\n`;
      fileContent += `echo "[*] [${idx + 1}/${commandsList.length}] Executing: ${cmd.name}..."\n`;
      fileContent += `${formattedCmd} -oN "\${OUTPUT_DIR}/${(idx + 1).toString().padStart(2, '0')}_${cleanCmdName}.txt"\n`;
      fileContent += `echo "[+] Done ${cmd.name}."\n`;
      fileContent += `echo "----------------------------------------------------"\n\n`;
    });

    fileContent += `echo "[+] All ${commandsList.length} Nmap scan routines completed successfully!"\n`;
    fileContent += `echo "[+] Reports saved in: $OUTPUT_DIR"\n`;

  } else if (format === "json") {
    mimeType = "application/json;charset=utf-8";
    filename += ".json";
    const exportData = commandsList.map(cmd => ({
      id: cmd.id,
      name: cmd.name,
      category: cmd.category,
      command: cmd.commandPattern.replace("{target}", targetIp).replace("{ports}", "").replace("{timing}", "-T4").replace("{flags}", ""),
      description: cmd.description,
      whenToUse: cmd.whenToUse,
      stealthLevel: cmd.stealthLevel,
      riskLevel: cmd.riskLevel
    }));
    fileContent = JSON.stringify(exportData, null, 2);

  } else if (format === "markdown") {
    filename += ".md";
    fileContent = `# Nmap Intelligence Audit Report\n`;
    fileContent += `*Generated At:* ${new Date().toLocaleString('en-US')}\n`;
    fileContent += `*Target IP / Subnet:* ${targetIp}\n\n`;
    fileContent += `---\n\n`;

    commandsList.forEach((cmd, idx) => {
      const formattedCmd = cmd.commandPattern.replace("{target}", targetIp).replace("{ports}", "").replace("{timing}", "-T4").replace("{flags}", "");
      fileContent += `### ${idx + 1}. ${cmd.name}\n`;
      fileContent += `**Category:** \`${cmd.category}\` | **Risk:** \`${cmd.riskLevel}\` | **Stealth:** \`${cmd.stealthLevel}/5\`\n\n`;
      fileContent += `\`\`\`bash\n${formattedCmd}\n\`\`\`\n\n`;
      fileContent += `**Description:** ${cmd.description}\n\n`;
      fileContent += `**Use-Case Scenario:** ${cmd.whenToUse}\n\n`;
      fileContent += `---\n\n`;
    });

  } else {
    // Standard TXT
    filename += ".txt";
    fileContent = `====================================================\n`;
    fileContent += ` NMAP INTELLIGENCE & AUDIT REPORT\n`;
    fileContent += ` Generated: ${new Date().toLocaleString('en-US')}\n`;
    fileContent += ` Target IP: ${targetIp}\n`;
    fileContent += `====================================================\n\n`;

    commandsList.forEach((cmd, idx) => {
      const formattedCmd = cmd.commandPattern.replace("{target}", targetIp).replace("{ports}", "").replace("{timing}", "-T4").replace("{flags}", "");
      fileContent += `[${idx + 1}] ${cmd.name.toUpperCase()}\n`;
      fileContent += `Command  : ${formattedCmd}\n`;
      fileContent += `Category : ${cmd.category} | Risk: ${cmd.riskLevel} | Stealth: ${cmd.stealthLevel}/5\n`;
      fileContent += `Summary  : ${cmd.description}\n`;
      fileContent += `Scenario : ${cmd.whenToUse}\n`;
      fileContent += `----------------------------------------------------\n\n`;
    });
  }

  // Trigger file download using Blob API
  const blob = new Blob([fileContent], { type: mimeType });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
}
