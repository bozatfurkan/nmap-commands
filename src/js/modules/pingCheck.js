/**
 * Target Liveness & Connectivity Ping Check Simulator Module
 */

export function runPingSimulation(targetIp, containerLinesEl, statusBadgeEl, recEl, lang = "tr") {
  if (!containerLinesEl || !statusBadgeEl || !recEl) return;

  const target = targetIp.trim() || "192.168.1.1";
  containerLinesEl.innerHTML = "";
  
  statusBadgeEl.className = "px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded text-[10px] font-mono animate-pulse";
  statusBadgeEl.textContent = lang === "tr" ? "Test Ediliyor..." : "Pinging Target...";
  
  recEl.innerHTML = `<p class="text-slate-400 italic">${lang === "tr" ? "Paket gecikmesi hesaplanıyor..." : "Calculating latency metrics..."}</p>`;

  let sequence = 1;
  const isUp = !target.endsWith(".255") && !target.endsWith(".0");

  const interval = setInterval(() => {
    if (sequence <= 4) {
      const ttl = 64;
      const latency = (Math.random() * 2 + 0.8).toFixed(2);
      
      const line = document.createElement("div");
      line.className = "text-slate-300";
      
      if (isUp) {
        line.innerHTML = `64 bytes from <span class="text-cyan-400 font-bold">${escapeHtml(target)}</span>: icmp_seq=${sequence} ttl=${ttl} time=<span class="text-emerald-400 font-bold">${latency} ms</span>`;
      } else {
        line.innerHTML = `<span class="text-rose-400 font-bold">Request timeout for icmp_seq ${sequence}</span>`;
      }
      
      containerLinesEl.appendChild(line);
      sequence++;
    } else {
      clearInterval(interval);
      finishPingSimulation(target, isUp, containerLinesEl, statusBadgeEl, recEl, lang);
    }
  }, 400);
}

function finishPingSimulation(target, isUp, containerLinesEl, statusBadgeEl, recEl, lang) {
  const summaryLine = document.createElement("div");
  summaryLine.className = "pt-2 border-t border-slate-800 text-slate-400 font-bold flex justify-between";
  
  if (isUp) {
    statusBadgeEl.className = "px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-[10px] font-mono font-bold";
    statusBadgeEl.textContent = lang === "tr" ? "HEDEF CANLI (UP)" : "HOST ALIVE (UP)";
    
    summaryLine.innerHTML = `
      <span>4 packets transmitted, 4 received, 0% packet loss</span>
      <span class="text-emerald-400">rtt min/avg/max = 0.82/1.14/1.65 ms</span>
    `;

    recEl.innerHTML = `
      <div class="flex items-start gap-2 text-emerald-400">
        <i class="fa-solid fa-circle-check mt-0.5 text-sm"></i>
        <div>
          <span class="font-bold">${lang === "tr" ? "Öneri & Tarama Stratejisi:" : "Recommendation & Scan Strategy:"}</span>
          <p class="text-slate-300 text-[11px] mt-0.5">
            ${lang === "tr" 
              ? `Hedef (${escapeHtml(target)}) ICMP paketlerine yanıt veriyor. Standart SYN taraması (<code>-sS</code>) veya versiyon tespiti (<code>-sV</code>) bayraklarını rahatlıkla kullanabilirsiniz.` 
              : `Target (${escapeHtml(target)}) responds to ICMP packets. You can safely use standard SYN scan (<code>-sS</code>) or version detection (<code>-sV</code>) flags.`}
          </p>
        </div>
      </div>
    `;
  } else {
    statusBadgeEl.className = "px-2 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded text-[10px] font-mono font-bold";
    statusBadgeEl.textContent = lang === "tr" ? "ULAŞILAMIYOR (DOWN)" : "UNREACHABLE (DOWN)";
    
    summaryLine.innerHTML = `
      <span>4 packets transmitted, 0 received, 100% packet loss</span>
      <span class="text-rose-400">Host Unreachable</span>
    `;

    recEl.innerHTML = `
      <div class="flex items-start gap-2 text-amber-400">
        <i class="fa-solid fa-triangle-exclamation mt-0.5 text-sm"></i>
        <div>
          <span class="font-bold">${lang === "tr" ? "Önemli Güvenlik Duvarı Uyarısı:" : "Important Firewall Warning:"}</span>
          <p class="text-slate-300 text-[11px] mt-0.5">
            ${lang === "tr" 
              ? `Hedef (${escapeHtml(target)}) ping paketlerini engelliyor olabilir. Taramayı gerçekleştirmek için komutunuza <code>-Pn</code> (No Ping) bayrağını eklemeniz önerilir.` 
              : `Target (${escapeHtml(target)}) may be dropping ICMP ping packets. Consider adding the <code>-Pn</code> (No Ping) flag to force scanning.`}
          </p>
        </div>
      </div>
    `;
  }
  
  containerLinesEl.appendChild(summaryLine);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
