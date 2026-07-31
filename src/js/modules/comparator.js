/**
 * Dual Command Side-by-Side Comparator Module (English)
 */

export function renderCommandComparison(containerEl, cmd1Obj, cmd2Obj) {
  if (!containerEl || !cmd1Obj || !cmd2Obj) return;

  containerEl.innerHTML = `
    <div class="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-6">
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-100 flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            Command Comparison Analysis
          </h3>
          <p class="text-xs text-slate-400">Side-by-side comparison of stealth rating, speed, risk level, and target scenario fit.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Command A Card -->
        <div class="bg-slate-950/80 p-5 rounded-xl border border-cyan-500/30 space-y-4 relative">
          <span class="absolute -top-3 left-4 px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">Command A</span>
          <div class="pt-2">
            <h4 class="text-base font-bold text-slate-100">${escapeHtml(cmd1Obj.name)}</h4>
            <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 mt-2 break-all">
              ${escapeHtml(cmd1Obj.commandPattern.replace("{target}", "192.168.1.1").replace("{ports}", "").replace("{timing}", "-T4").replace("{flags}", ""))}
            </div>
          </div>

          <div class="space-y-2 text-xs">
            <div class="flex justify-between items-center py-1 border-b border-slate-800/60">
              <span class="text-slate-400">Stealth Rating:</span>
              <span class="text-cyan-400 font-bold font-mono">${getRatingStars(cmd1Obj.stealthLevel)} (${cmd1Obj.stealthLevel}/5)</span>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-800/60">
              <span class="text-slate-400">Scan Speed:</span>
              <span class="text-emerald-400 font-bold font-mono">${getRatingStars(cmd1Obj.speedLevel)} (${cmd1Obj.speedLevel}/5)</span>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-800/60">
              <span class="text-slate-400">Risk Level:</span>
              <span class="font-bold font-mono">${escapeHtml(cmd1Obj.riskLevel)}</span>
            </div>
          </div>

          <div>
            <h5 class="text-xs font-semibold text-slate-400 mb-1">When Should You Choose This?</h5>
            <p class="text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded border border-slate-800/80">${escapeHtml(cmd1Obj.whenToUse)}</p>
          </div>
        </div>

        <!-- Command B Card -->
        <div class="bg-slate-950/80 p-5 rounded-xl border border-purple-500/30 space-y-4 relative">
          <span class="absolute -top-3 left-4 px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-400 text-xs font-mono font-bold border border-purple-500/30">Command B</span>
          <div class="pt-2">
            <h4 class="text-base font-bold text-slate-100">${escapeHtml(cmd2Obj.name)}</h4>
            <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-mono text-xs text-purple-400 mt-2 break-all">
              ${escapeHtml(cmd2Obj.commandPattern.replace("{target}", "192.168.1.1").replace("{ports}", "").replace("{timing}", "-T4").replace("{flags}", ""))}
            </div>
          </div>

          <div class="space-y-2 text-xs">
            <div class="flex justify-between items-center py-1 border-b border-slate-800/60">
              <span class="text-slate-400">Stealth Rating:</span>
              <span class="text-purple-400 font-bold font-mono">${getRatingStars(cmd2Obj.stealthLevel)} (${cmd2Obj.stealthLevel}/5)</span>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-800/60">
              <span class="text-slate-400">Scan Speed:</span>
              <span class="text-emerald-400 font-bold font-mono">${getRatingStars(cmd2Obj.speedLevel)} (${cmd2Obj.speedLevel}/5)</span>
            </div>
            <div class="flex justify-between items-center py-1 border-b border-slate-800/60">
              <span class="text-slate-400">Risk Level:</span>
              <span class="font-bold font-mono">${escapeHtml(cmd2Obj.riskLevel)}</span>
            </div>
          </div>

          <div>
            <h5 class="text-xs font-semibold text-slate-400 mb-1">When Should You Choose This?</h5>
            <p class="text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded border border-slate-800/80">${escapeHtml(cmd2Obj.whenToUse)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getRatingStars(num) {
  return "★".repeat(num) + "☆".repeat(5 - num);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
