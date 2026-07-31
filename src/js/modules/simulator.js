/**
 * Interactive Terminal Simulator & Parameter Guide Renderer (English)
 */

export function renderTerminalMock(containerEl, commandObj, customizerInstance) {
  if (!containerEl || !commandObj) return;

  const currentCmdStr = customizerInstance
    ? customizerInstance.buildCustomCommand(commandObj)
    : commandObj.commandPattern.replace("{target}", "192.168.1.1").replace("{ports}", "").replace("{timing}", "-T4").replace("{flags}", "");

  const mockText = commandObj.mockOutput.replace(/{target}/g, customizerInstance ? customizerInstance.target : "192.168.1.1");

  containerEl.innerHTML = `
    <div class="terminal-window bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
      <!-- Terminal Header Bar -->
      <div class="terminal-header bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span class="ml-2 text-xs text-slate-400 font-sans font-medium">bash - root@kali: ~</span>
        </div>
        <div class="text-xs text-slate-500 font-sans flex items-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Terminal Emulator v2.5
        </div>
      </div>
      
      <!-- Terminal Prompt & Command -->
      <div class="p-4 space-y-3">
        <div class="flex items-center gap-2 text-emerald-400">
          <span class="text-rose-400 font-bold">root@cyber-lab</span><span class="text-slate-400">:</span><span class="text-blue-400">~</span><span class="text-slate-200">#</span>
          <span class="text-slate-100 font-semibold tracking-wide highlight-cmd">${escapeHtml(currentCmdStr)}</span>
        </div>
        
        <!-- Terminal Output Screen -->
        <pre class="terminal-body text-slate-300 whitespace-pre-wrap leading-relaxed border-t border-slate-900 pt-3 text-xs md:text-sm text-emerald-300/90 font-mono">${escapeHtml(mockText)}</pre>
      </div>
    </div>
  `;
}

/**
 * Renders detailed parameter breakdown guide panel with Speed, Stealth, and Risk Metrics
 */
export function renderParameterGuide(containerEl, commandObj) {
  if (!containerEl || !commandObj) return;

  const flagEntries = Object.entries(commandObj.flagExplanations || {});

  let flagsHtml = flagEntries.map(([flag, exp]) => `
    <div class="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50 flex items-start gap-3">
      <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs rounded font-bold whitespace-nowrap">${escapeHtml(flag)}</span>
      <p class="text-slate-300 text-xs md:text-sm leading-snug">${escapeHtml(exp)}</p>
    </div>
  `).join('');

  if (flagEntries.length === 0) {
    flagsHtml = `<p class="text-slate-400 text-sm">No special flags defined for this command.</p>`;
  }

  containerEl.innerHTML = `
    <div class="bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-5">
      
      <!-- Metrics Bar inside Modal Details -->
      <div class="grid grid-cols-3 gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-center text-xs">
        <div class="space-y-1">
          <span class="text-slate-400 block text-[11px]">Scan Speed</span>
          <span class="text-amber-400 font-bold font-mono">${getRatingStars(commandObj.speedLevel)} (${commandObj.speedLevel}/5)</span>
        </div>
        <div class="space-y-1 border-x border-slate-800">
          <span class="text-slate-400 block text-[11px]">Stealth Rating</span>
          <span class="text-purple-400 font-bold font-mono">${getRatingStars(commandObj.stealthLevel)} (${commandObj.stealthLevel}/5)</span>
        </div>
        <div class="space-y-1">
          <span class="text-slate-400 block text-[11px]">Risk Level</span>
          <span class="font-bold font-mono ${getRiskTextClass(commandObj.riskLevel)}">${commandObj.riskLevel}</span>
        </div>
      </div>

      <div class="space-y-2">
        <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">When Should You Use This?</h4>
        <p class="text-slate-200 text-sm bg-slate-800/40 p-3 rounded-lg border border-slate-800/80">${escapeHtml(commandObj.whenToUse)}</p>
      </div>

      <div class="space-y-2">
        <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Flag Explanations</h4>
        <div class="space-y-2">
          ${flagsHtml}
        </div>
      </div>
    </div>
  `;
}

function getRatingStars(num) {
  return "★".repeat(num) + "☆".repeat(5 - num);
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
