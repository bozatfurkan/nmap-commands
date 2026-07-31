/**
 * Nmap Intelligence Search & Interactive Command Builder
 * Main Application Orchestrator (English Interface)
 */

import { NMAP_COMMANDS } from './data/nmapCommands.js';
import { CHEAT_SHEET_DATA } from './data/cheatSheetData.js';
import { TIMING_DATA } from './data/timingData.js';
import { BIBLIOGRAPHY_DATA } from './data/bibliographyData.js';
import { I18N_DICTIONARY } from './data/i18n.js';

import { performFuzzySearch } from './modules/fuzzySearch.js';
import { CommandCustomizer } from './modules/customizer.js';
import { renderTerminalMock, renderParameterGuide } from './modules/simulator.js';
import { ScenarioWizard } from './modules/wizard.js';
import { renderCommandComparison } from './modules/comparator.js';
import { FavoritesManager } from './modules/favorites.js';
import { exportCommandsToFile } from './modules/exporter.js';
import { CommunityManager } from './modules/community.js';
import { runPingSimulation } from './modules/pingCheck.js';
import { RecentSearchManager } from './modules/recentSearches.js';

// Instances
const customizer = new CommandCustomizer();
const favoritesMgr = new FavoritesManager();
const wizard = new ScenarioWizard();
const communityMgr = new CommunityManager();
const recentSearchMgr = new RecentSearchManager();

// App State
let currentCategory = "all";
let currentQuery = "";
let selectedSimulatorCmd = null;
let currentLang = localStorage.getItem("nmap_app_lang") || "en";
let currentTheme = localStorage.getItem("nmap_app_theme") || "dark";

// DOM Elements
const searchInput = document.getElementById("searchInput");
const btnClearSearch = document.getElementById("btnClearSearch");
const commandCardsGrid = document.getElementById("commandCardsGrid");
const resultsCount = document.getElementById("resultsCount");
const countAll = document.getElementById("countAll");
const countFavorites = document.getElementById("countFavorites");

const inputTargetIp = document.getElementById("inputTargetIp");
const inputPorts = document.getElementById("inputPorts");
const selectTiming = document.getElementById("selectTiming");

const chkPn = document.getElementById("chkPn");
const chkSv = document.getElementById("chkSv");
const chkO = document.getElementById("chkO");
const chkA = document.getElementById("chkA");
const chkV = document.getElementById("chkV");

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  setupThemeSwitcher();
  setupLanguageSwitcher();
  setupNavigationTabs();
  setupCustomizerEvents();
  setupSearchEvents();
  setupCategoryFilters();
  setupSimulatorModal();
  setupWizard();
  setupComparator();
  setupCheatSheet();
  setupTimingGuide();
  setupBibliography();
  setupExportButtons();
  setupModals();
  setupCommunity();

  // Initial Render
  updateCategoryCounts();
  renderCommands();
});

/* ==================== THEME SWITCHER ==================== */
function setupThemeSwitcher() {
  const btnThemeToggle = document.getElementById("btnThemeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");

  const applyTheme = () => {
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      if (themeIcon) themeIcon.className = "fa-solid fa-moon text-xs text-amber-400";
      if (themeLabel) themeLabel.textContent = "Dark";
    } else {
      document.documentElement.classList.remove("dark");
      if (themeIcon) themeIcon.className = "fa-solid fa-sun text-xs text-amber-500";
      if (themeLabel) themeLabel.textContent = "Light";
    }
  };

  btnThemeToggle?.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("nmap_app_theme", currentTheme);
    applyTheme();
  });

  applyTheme();
}

/* ==================== LANGUAGE SWITCHER ==================== */
function setupLanguageSwitcher() {
  const btnLangToggle = document.getElementById("btnLangToggle");
  const langLabel = document.getElementById("langLabel");

  const updateLangUI = () => {
    if (langLabel) langLabel.textContent = currentLang === "en" ? "EN 🇬🇧" : "TR 🇹🇷";
    const dict = I18N_DICTIONARY[currentLang];
    
    if (searchInput) searchInput.placeholder = dict.searchPlaceholder;
    
    const commBtn = document.getElementById("textBtnCommunity");
    if (commBtn) commBtn.textContent = dict.btnCommunity;

    const discBtn = document.getElementById("textBtnDisclaimer");
    if (discBtn) discBtn.textContent = dict.btnDisclaimer;

    renderCommands();
  };

  btnLangToggle?.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "tr" : "en";
    localStorage.setItem("nmap_app_lang", currentLang);
    updateLangUI();
  });

  updateLangUI();
}

/* ==================== NAVIGATION TABS ==================== */
function setupNavigationTabs() {
  const tabs = document.querySelectorAll(".nav-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active", "text-cyan-400"));
      tab.classList.add("active");

      const targetTabId = `tab-${tab.dataset.tab}`;
      tabContents.forEach(tc => {
        if (tc.id === targetTabId) {
          tc.classList.remove("hidden");
        } else {
          tc.classList.add("hidden");
        }
      });
    });
  });

  document.getElementById("brandLogo")?.addEventListener("click", () => {
    document.querySelector('[data-tab="search"]')?.click();
  });
}

/* ==================== CUSTOMIZER EVENTS ==================== */
function setupCustomizerEvents() {
  inputTargetIp?.addEventListener("input", (e) => {
    customizer.setTarget(e.target.value);
    renderCommands();
  });

  inputPorts?.addEventListener("input", (e) => {
    customizer.setPorts(e.target.value);
    renderCommands();
  });

  selectTiming?.addEventListener("change", (e) => {
    customizer.setTiming(e.target.value);
    renderCommands();
  });

  chkPn?.addEventListener("change", (e) => { customizer.toggleFlag("pn", e.target.checked); renderCommands(); });
  chkSv?.addEventListener("change", (e) => { customizer.toggleFlag("sv", e.target.checked); renderCommands(); });
  chkO?.addEventListener("change", (e) => { customizer.toggleFlag("o", e.target.checked); renderCommands(); });
  chkA?.addEventListener("change", (e) => { customizer.toggleFlag("a", e.target.checked); renderCommands(); });
  chkV?.addEventListener("change", (e) => { customizer.toggleFlag("verbose", e.target.checked); renderCommands(); });

  document.getElementById("btnPingCheck")?.addEventListener("click", () => {
    openPingCheckModal();
  });
}

/* ==================== SEARCH EVENTS ==================== */
function setupSearchEvents() {
  let searchTimeout;

  renderRecentSearches();

  searchInput?.addEventListener("input", (e) => {
    currentQuery = e.target.value;
    if (currentQuery.length > 0) {
      btnClearSearch.classList.remove("hidden");
    } else {
      btnClearSearch.classList.add("hidden");
    }

    renderCommands();

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      if (currentQuery.trim().length >= 2) {
        recentSearchMgr.addQuery(currentQuery);
        renderRecentSearches();
      }
    }, 1000);
  });

  searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && currentQuery.trim().length >= 2) {
      recentSearchMgr.addQuery(currentQuery);
      renderRecentSearches();
    }
  });

  btnClearSearch?.addEventListener("click", () => {
    searchInput.value = "";
    currentQuery = "";
    btnClearSearch.classList.add("hidden");
    renderCommands();
  });

  document.getElementById("btnClearRecent")?.addEventListener("click", () => {
    recentSearchMgr.clearHistory();
    renderRecentSearches();
  });

  document.querySelectorAll(".quick-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const queryVal = tag.dataset.query;
      searchInput.value = queryVal;
      currentQuery = queryVal;
      btnClearSearch.classList.remove("hidden");
      recentSearchMgr.addQuery(queryVal);
      renderRecentSearches();
      renderCommands();
    });
  });
}

function renderRecentSearches() {
  const container = document.getElementById("recentTagsContainer");
  const bar = document.getElementById("recentSearchesBar");
  if (!container || !bar) return;

  const history = recentSearchMgr.getHistory();
  if (history.length === 0) {
    bar.classList.add("hidden");
    return;
  }

  bar.classList.remove("hidden");
  container.innerHTML = history.map(term => `
    <button class="recent-tag px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 rounded-md text-xs font-mono transition" data-query="${escapeHtml(term)}">
      <i class="fa-solid fa-history text-[10px] opacity-60 mr-1"></i>${escapeHtml(term)}
    </button>
  `).join('');

  container.querySelectorAll(".recent-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const q = tag.dataset.query;
      searchInput.value = q;
      currentQuery = q;
      btnClearSearch.classList.remove("hidden");
      renderCommands();
    });
  });
}

/* ==================== CATEGORY FILTERS ==================== */
function setupCategoryFilters() {
  const pills = document.querySelectorAll(".cat-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => {
        p.classList.remove("active", "bg-cyan-500/10", "text-cyan-400", "border-cyan-500/30");
        p.classList.add("bg-slate-900", "text-slate-400");
      });
      pill.classList.add("active", "bg-cyan-500/10", "text-cyan-400", "border-cyan-500/30");
      pill.classList.remove("bg-slate-900", "text-slate-400");

      currentCategory = pill.dataset.cat;
      renderCommands();
    });
  });
}

function updateCategoryCounts() {
  if (countAll) countAll.textContent = NMAP_COMMANDS.length;
  if (countFavorites) countFavorites.textContent = favoritesMgr.getFavoriteIds().length;
}

/* ==================== RENDER COMMAND CARDS ==================== */
function renderCommands() {
  if (!commandCardsGrid) return;

  // 1. Fuzzy Search Filtering
  let searchResults = performFuzzySearch(NMAP_COMMANDS, currentQuery);

  // 2. Category Filtering
  if (currentCategory === "favorites") {
    const favIds = favoritesMgr.getFavoriteIds();
    searchResults = searchResults.filter(item => favIds.includes(item.command.id));
  } else if (currentCategory !== "all") {
    searchResults = searchResults.filter(item => item.command.category === currentCategory);
  }

  // Update Count
  resultsCount.textContent = searchResults.length;

  if (searchResults.length === 0) {
    commandCardsGrid.innerHTML = `
      <div class="col-span-full py-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
        <i class="fa-solid fa-ghost text-4xl text-slate-600"></i>
        <h3 class="font-bold text-slate-300">No Matching Commands Found</h3>
        <p class="text-xs text-slate-500">Try modifying your search term or click one of the quick tags above.</p>
      </div>
    `;
    return;
  }

  commandCardsGrid.innerHTML = searchResults.map(({ command, score }) => {
    const liveCmdStr = customizer.buildCustomCommand(command);
    const isFav = favoritesMgr.isFavorite(command.id);

    return `
      <div class="cyber-card glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-4 group">
        
        <!-- Clean Card Header -->
        <div class="space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${getCategoryBadgeClass(command.category)}">
              ${getCategoryLabel(command.category)}
            </span>
            
            <button class="btn-fav hover:scale-110 transition text-amber-400 text-sm" data-id="${command.id}" title="Bookmark Command">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-star"></i>
            </button>
          </div>

          <h3 class="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition">${escapeHtml(command.name)}</h3>
          <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">${escapeHtml(command.description)}</p>
        </div>

        <!-- Live Code Block with Quick Copy -->
        <div class="cmd-code-block p-3 text-xs font-mono text-emerald-400 break-all flex items-center justify-between gap-2">
          <span class="select-all">${escapeHtml(liveCmdStr)}</span>
          <button class="btn-copy-cmd p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition shrink-0" data-cmd="${escapeHtml(liveCmdStr)}" title="Copy to Clipboard">
            <i class="fa-solid fa-copy"></i>
          </button>
        </div>

        <!-- Single Action Button: Details & Simulator -->
        <div class="pt-2 border-t border-slate-800/60 flex items-center justify-between">
          <span class="text-[11px] text-slate-500 font-mono">Risk: ${escapeHtml(command.riskLevel)}</span>

          <button class="btn-open-sim px-3.5 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition" data-id="${command.id}">
            <i class="fa-solid fa-terminal"></i> Details & Simulator
          </button>
        </div>

      </div>
    `;
  }).join('');

  attachCardEvents();
}

function attachCardEvents() {
  // Favorite buttons
  document.querySelectorAll(".btn-fav").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const cmdId = btn.dataset.id;
      favoritesMgr.toggleFavorite(cmdId);
      updateCategoryCounts();
      renderCommands();
    });
  });

  // Copy buttons
  document.querySelectorAll(".btn-copy-cmd").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const cmdText = btn.dataset.cmd;
      navigator.clipboard.writeText(cmdText);
      btn.innerHTML = `<i class="fa-solid fa-check text-emerald-400"></i>`;
      setTimeout(() => {
        btn.innerHTML = `<i class="fa-solid fa-copy"></i>`;
      }, 2000);
    });
  });

  // Open Simulator Modal
  document.querySelectorAll(".btn-open-sim").forEach(btn => {
    btn.addEventListener("click", () => {
      const cmdId = btn.dataset.id;
      const cmdObj = NMAP_COMMANDS.find(c => c.id === cmdId);
      if (cmdObj) {
        selectedSimulatorCmd = cmdObj;
        openSimulatorModal(cmdObj);
      }
    });
  });
}

/* ==================== SIMULATOR MODAL ==================== */
function setupSimulatorModal() {
  document.getElementById("btnCloseSimulator")?.addEventListener("click", () => {
    document.getElementById("modalSimulator").classList.add("hidden");
  });

  document.getElementById("btnCopySimCmd")?.addEventListener("click", () => {
    const cmdStr = document.getElementById("simModalCmdStr").textContent;
    navigator.clipboard.writeText(cmdStr);
    const btn = document.getElementById("btnCopySimCmd");
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied`;
    setTimeout(() => {
      btn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
    }, 2000);
  });
}

function openSimulatorModal(cmdObj) {
  const modal = document.getElementById("modalSimulator");
  if (!modal) return;

  const liveCmdStr = customizer.buildCustomCommand(cmdObj);

  document.getElementById("simModalTitle").textContent = cmdObj.name;
  document.getElementById("simModalCategory").textContent = `Category: ${getCategoryLabel(cmdObj.category)}`;
  document.getElementById("simModalCmdStr").textContent = liveCmdStr;

  const outputContainer = document.getElementById("simModalTerminalOutput");
  const guideContainer = document.getElementById("simModalParameterGuide");

  renderTerminalMock(outputContainer, cmdObj, customizer);
  renderParameterGuide(guideContainer, cmdObj);

  modal.classList.remove("hidden");
}

/* ==================== WIZARD ==================== */
function setupWizard() {
  const stepLabel = document.getElementById("wizardStepLabel");
  const percentLabel = document.getElementById("wizardPercent");
  const progressBar = document.getElementById("wizardProgressBar");

  const btnPrev = document.getElementById("btnWizPrev");
  const btnNext = document.getElementById("btnWizNext");

  const updateWizardUI = () => {
    const step = wizard.currentStep;
    stepLabel.textContent = `Step ${step} / 4: ${getWizardStepTitle(step)}`;
    percentLabel.textContent = `${step * 25}%`;
    progressBar.style.width = `${step * 25}%`;

    document.querySelectorAll(".wiz-step").forEach((s, idx) => {
      if (idx + 1 === step) s.classList.remove("hidden");
      else s.classList.add("hidden");
    });

    btnPrev.disabled = (step === 1);
    btnNext.innerHTML = (step === 4) ? `Complete <i class="fa-solid fa-check ml-1"></i>` : `Next <i class="fa-solid fa-arrow-right ml-1"></i>`;

    if (step === 4) {
      const generatedCmd = wizard.generateWizardCommand(customizer.target);
      document.getElementById("wizResultCmd").textContent = generatedCmd;

      // Mock output render in wizard
      const mockObj = {
        commandPattern: generatedCmd,
        mockOutput: `Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for ${customizer.target}\nHost is up (0.012s latency).\nPORT   STATE SERVICE\n80/tcp open  http\n443/tcp open https\nNmap done: 1 IP address scanned.`
      };
      renderTerminalMock(document.getElementById("wizTerminalArea"), mockObj, null);
    }
  };

  btnNext?.addEventListener("click", () => {
    // Collect choices
    if (wizard.currentStep === 1) {
      const objChoice = document.querySelector('input[name="wizObj"]:checked')?.value;
      if (objChoice) wizard.setAnswer("objective", objChoice);
    } else if (wizard.currentStep === 2) {
      const speedChoice = document.querySelector('input[name="wizSpeed"]:checked')?.value;
      if (speedChoice) wizard.setAnswer("speed", speedChoice);
    } else if (wizard.currentStep === 3) {
      const portChoice = document.querySelector('input[name="wizPort"]:checked')?.value;
      if (portChoice) wizard.setAnswer("portRange", portChoice);
    }

    if (wizard.currentStep < 4) {
      wizard.setStep(wizard.currentStep + 1);
      updateWizardUI();
    } else {
      // Finished
      document.querySelector('[data-tab="search"]')?.click();
    }
  });

  btnPrev?.addEventListener("click", () => {
    if (wizard.currentStep > 1) {
      wizard.setStep(wizard.currentStep - 1);
      updateWizardUI();
    }
  });

  document.getElementById("btnWizCopy")?.addEventListener("click", () => {
    const cmdText = document.getElementById("wizResultCmd").textContent;
    navigator.clipboard.writeText(cmdText);
    const btn = document.getElementById("btnWizCopy");
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied`;
    setTimeout(() => {
      btn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
    }, 2000);
  });
}

function getWizardStepTitle(step) {
  switch (step) {
    case 1: return "Scanning Objective";
    case 2: return "Timing & Speed";
    case 3: return "Port Scope";
    case 4: return "Generated Command & Demo";
    default: return "";
  }
}

/* ==================== COMPARATOR ==================== */
function setupComparator() {
  const selectCmdA = document.getElementById("selectCmdA");
  const selectCmdB = document.getElementById("selectCmdB");
  const resultArea = document.getElementById("comparatorResultArea");

  if (!selectCmdA || !selectCmdB) return;

  selectCmdA.innerHTML = NMAP_COMMANDS.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  selectCmdB.innerHTML = NMAP_COMMANDS.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  if (NMAP_COMMANDS.length >= 2) {
    selectCmdB.selectedIndex = 1;
  }

  const updateComparison = () => {
    const cmd1 = NMAP_COMMANDS.find(c => c.id === selectCmdA.value);
    const cmd2 = NMAP_COMMANDS.find(c => c.id === selectCmdB.value);
    renderCommandComparison(resultArea, cmd1, cmd2);
  };

  selectCmdA.addEventListener("change", updateComparison);
  selectCmdB.addEventListener("change", updateComparison);

  updateComparison();
}

/* ==================== CHEAT-SHEET ==================== */
function setupCheatSheet() {
  const tbody = document.getElementById("cheatSheetTableBody");
  if (!tbody) return;

  tbody.innerHTML = CHEAT_SHEET_DATA.map(item => `
    <tr class="hover:bg-slate-800/40 transition">
      <td class="p-3.5 font-mono text-cyan-400 font-bold whitespace-nowrap">${escapeHtml(item.flag)}</td>
      <td class="p-3.5">
        <span class="font-semibold text-slate-200 block">${escapeHtml(item.name)}</span>
        <span class="text-[10px] text-slate-500">${escapeHtml(item.category)}</span>
      </td>
      <td class="p-3.5 text-slate-300">${escapeHtml(item.description)}</td>
      <td class="p-3.5 font-mono text-emerald-400 text-xs">${escapeHtml(item.example)}</td>
      <td class="p-3.5 font-medium text-amber-400">${escapeHtml(item.impact)}</td>
    </tr>
  `).join('');
}

/* ==================== TIMING GUIDE ==================== */
function setupTimingGuide() {
  const grid = document.getElementById("timingCardsGrid");
  if (!grid) return;

  grid.innerHTML = TIMING_DATA.map(t => `
    <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition space-y-3">
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold font-mono text-cyan-400">${t.flag}</span>
        <span class="px-2.5 py-0.5 rounded text-xs font-bold font-mono ${getTimingBadgeClass(t.badgeColor)}">${t.name}</span>
      </div>
      
      <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(t.description)}</p>

      <div class="space-y-1.5 text-xs pt-2 border-t border-slate-800/80 font-mono">
        <div class="flex justify-between text-slate-400"><span>Packet Delay:</span> <span class="text-slate-200">${t.delay}</span></div>
        <div class="flex justify-between text-slate-400"><span>RTT Timeout:</span> <span class="text-slate-200">${t.rttTimeout}</span></div>
      </div>

      <div class="pt-2 text-xs space-y-1">
        <div class="text-emerald-400"><strong>Pros:</strong> ${escapeHtml(t.pros)}</div>
        <div class="text-rose-400"><strong>Cons:</strong> ${escapeHtml(t.cons)}</div>
      </div>
    </div>
  `).join('');
}

function getTimingBadgeClass(color) {
  switch (color) {
    case "emerald": return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
    case "teal": return "bg-teal-500/10 text-teal-400 border border-teal-500/20";
    case "cyan": return "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";
    case "blue": return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    case "amber": return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
    case "rose": return "bg-rose-500/10 text-rose-400 border border-rose-500/20";
    default: return "bg-slate-800 text-slate-300";
  }
}

/* ==================== BIBLIOGRAPHY ==================== */
function setupBibliography() {
  const container = document.getElementById("bibliographyContainer");
  if (!container) return;

  container.innerHTML = BIBLIOGRAPHY_DATA.map(b => `
    <div class="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 flex flex-col justify-between space-y-2">
      <div>
        <div class="flex items-center justify-between gap-2">
          <span class="font-bold text-slate-200 text-sm">${escapeHtml(b.title)}</span>
          <span class="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] rounded font-medium">${escapeHtml(b.type)}</span>
        </div>
        <p class="text-slate-400 text-xs mt-1">${escapeHtml(b.description)}</p>
      </div>

      <div class="flex items-center justify-between text-[11px] pt-1">
        <span class="text-slate-500">Author: ${escapeHtml(b.author)}</span>
        <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline flex items-center gap-1 font-mono">
          Doc Link <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>
    </div>
  `).join('');
}

/* ==================== EXPORT BUTTONS ==================== */
function setupExportButtons() {
  document.getElementById("btnExportSh")?.addEventListener("click", () => {
    exportCommandsToFile(NMAP_COMMANDS, "sh", customizer.target);
  });
  document.getElementById("btnExportTxt")?.addEventListener("click", () => {
    exportCommandsToFile(NMAP_COMMANDS, "txt", customizer.target);
  });
  document.getElementById("btnExportMd")?.addEventListener("click", () => {
    exportCommandsToFile(NMAP_COMMANDS, "markdown", customizer.target);
  });
  document.getElementById("btnExportJson")?.addEventListener("click", () => {
    exportCommandsToFile(NMAP_COMMANDS, "json", customizer.target);
  });
}

/* ==================== MODALS ==================== */
function setupModals() {
  const modalDisclaimer = document.getElementById("modalDisclaimer");
  
  document.getElementById("btnDisclaimerModal")?.addEventListener("click", () => {
    modalDisclaimer?.classList.remove("hidden");
  });
  document.getElementById("btnCloseDisclaimer")?.addEventListener("click", () => {
    modalDisclaimer?.classList.add("hidden");
  });
  document.getElementById("btnConfirmDisclaimer")?.addEventListener("click", () => {
    modalDisclaimer?.classList.add("hidden");
  });

  document.getElementById("btnClosePingCheck")?.addEventListener("click", () => {
    document.getElementById("modalPingCheck")?.classList.add("hidden");
  });
}

function openPingCheckModal() {
  const modal = document.getElementById("modalPingCheck");
  if (!modal) return;

  const targetIpStr = customizer.target;
  document.getElementById("pingTargetIpStr").textContent = targetIpStr;

  const container = document.getElementById("pingConsoleLines");
  const badge = document.getElementById("pingBadgeStatus");
  const rec = document.getElementById("pingRecommendation");

  modal.classList.remove("hidden");
  runPingSimulation(targetIpStr, container, badge, rec, currentLang);
}

/* ==================== COMMUNITY RECIPES ==================== */
function setupCommunity() {
  const modalCommunity = document.getElementById("modalCommunity");
  const formCommunity = document.getElementById("formCommunity");

  document.getElementById("btnCommunityModal")?.addEventListener("click", () => {
    renderCommunityRecipes();
    modalCommunity?.classList.remove("hidden");
  });
  document.getElementById("btnCloseCommunity")?.addEventListener("click", () => {
    modalCommunity?.classList.add("hidden");
  });

  formCommunity?.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("commTitle").value;
    const author = document.getElementById("commAuthor").value;
    const command = document.getElementById("commCommand").value;
    const desc = document.getElementById("commDesc").value;

    communityMgr.addRecipe(title, author, command, desc);
    formCommunity.reset();
    renderCommunityRecipes();
  });
}

function renderCommunityRecipes() {
  const container = document.getElementById("communityRecipesContainer");
  if (!container) return;

  const recipes = communityMgr.recipes;
  container.innerHTML = recipes.map(r => `
    <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs">
      <div class="flex items-center justify-between">
        <span class="font-bold text-cyan-400">${escapeHtml(r.title)}</span>
        <span class="text-slate-500 font-mono text-[10px]">By: ${escapeHtml(r.author)}</span>
      </div>
      <code class="block font-mono text-emerald-400 bg-slate-900 p-1.5 rounded text-[11px] break-all">${escapeHtml(r.command)}</code>
      <p class="text-slate-400 text-[11px]">${escapeHtml(r.description)}</p>
    </div>
  `).join('');
}

/* ==================== HELPER FUNCTIONS ==================== */
function getCategoryLabel(cat) {
  switch (cat) {
    case "discovery": return "Host Discovery";
    case "port_scan": return "Port Scanning";
    case "service_os": return "Service & OS";
    case "vuln_scripts": return "Vulnerability (NSE)";
    case "evasion": return "Firewall Evasion";
    case "advanced": return "Aggressive / Advanced";
    default: return "General";
  }
}

function getCategoryBadgeClass(cat) {
  switch (cat) {
    case "discovery": return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    case "port_scan": return "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";
    case "service_os": return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
    case "vuln_scripts": return "bg-rose-500/10 text-rose-400 border border-rose-500/20";
    case "evasion": return "bg-purple-500/10 text-purple-400 border border-purple-500/20";
    case "advanced": return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
    default: return "bg-slate-800 text-slate-300";
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
