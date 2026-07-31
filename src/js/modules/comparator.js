/**
 * Side-by-Side Dual Command Comparator Module
 */

export function renderCommandComparison(containerEl, cmd1, cmd2) {
  if (!containerEl || !cmd1 || !cmd2) return;

  containerEl.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      
      <!-- Command A Card -->
      <div class="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <span class="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold rounded">Command A</span>
          <span class="text-xs text-slate-400 font-mono">${cmd1.category}</span>
        </div>

        <h3 class="text-lg font-extrabold text-white">${escapeHtml(cmd1.name)}</h3>
        <p class="text-xs text-slate-400 leading-relaxed">${escapeHtml(cmd1.description)}</p>

        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 break-all">
          ${escapeHtml(cmd1.commandPattern.replace("{target}", "192.168.1.1").replace("{ports}", "").replace("{timing}", "-T4").replace("{flags}", ""))}
        </div>

        <div class="space-y-2 text-xs border-t border-slate-800 pt-3">
          <div class="flex justify-between">
            <span class="text-slate-400">Scan Speed:</span>
            <span class="text-amber-400 font-bold font-mono">${getRatingStars(cmd1.speedLevel)} (${cmd1.speedLevel}/5)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Stealth Rating:</span>
            <span class="text-purple-400 font-bold font-mono">${getRatingStars(cmd1.stealthLevel)} (${cmd1.stealthLevel}/5)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Risk Level:</span>
            <span class="font-bold font-mono ${getRiskTextClass(cmd1.riskLevel)}">${cmd1.riskLevel}</span>
          </div>
        </div>

        <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-xs">
          <span class="text-slate-400 font-semibold block mb-1">Target Scenario Fit:</span>
          <p class="text-slate-300">${escapeHtml(cmd1.whenToUse)}</p>
        </div>
      </div>

      <!-- Command B Card -->
      <div class="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <span class="px-2.5 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-mono font-bold rounded">Command B</span>
          <span class="text-xs text-slate-400 font-mono">${cmd2.category}</span>
        </div>

        <h3 class="text-lg font-extrabold text-white">${escapeHtml(cmd2.name)}</h3>
        <p class="text-xs text-slate-400 leading-relaxed">${escapeHtml(cmd2.description)}</p>

        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 break-all">
          ${escapeHtml(cmd2.commandPattern.replace("{target}", "192.168.1.1").replace("{ports}", "").replace("{timing}", "-T4").replace("{flags}", ""))}
        </div>

        <div class="space-y-2 text-xs border-t border-slate-800 pt-3">
          <div class="flex justify-between">
            <span class="text-slate-400">Scan Speed:</span>
            <span class="text-amber-400 font-bold font-mono">${getRatingStars(cmd2.speedLevel)} (${cmd2.speedLevel}/5)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Stealth Rating:</span>
            <span class="text-purple-400 font-bold font-mono">${getRatingStars(cmd2.stealthLevel)} (${cmd2.stealthLevel}/5)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Risk Level:</span>
            <span class="font-bold font-mono ${getRiskTextClass(cmd2.riskLevel)}">${cmd2.riskLevel}</span>
          </div>
        </div>

        <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-xs">
          <span class="text-slate-400 font-semibold block mb-1">Target Scenario Fit:</span>
          <p class="text-slate-300">${escapeHtml(cmd2.whenToUse)}</p>
        </div>
      </div>

    </div>
  `;
}

function getRatingStars(num) {
  return "★".repeat(num || 3) + "☆".repeat(5 - (num || 3));
}

function getRiskTextClass(risk) {
  switch (risk) {
    case "Low":
    case "Düşük": return "text-emerald-400";
    case "Medium":
    case "Orta": return "text-amber-400";
    case "High":
    case "Yüksek": return "text-rose-400";
    default: return "text-slate-300";
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
