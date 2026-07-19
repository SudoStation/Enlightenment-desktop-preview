/**
 * Enlightenment Desktop Preview — interactive shell
 * Shelf + cascading Main menu + EFM + Everything + Syscon
 * Modelled on Enlightenment 0.27 standard profile (Dark theme)
 */

/* ---------- App catalogue ---------- */

const APPS = [
  { id: "files", name: "File Manager", icon: "assets/apps/file-manager.svg", categories: ["system", "accessories"], open: "efm" },
  { id: "terminology", name: "Terminology", icon: "assets/apps/terminology.svg", categories: ["system", "accessories"], open: "term" },
  { id: "firefox", name: "Firefox", icon: "assets/apps/firefox.svg", categories: ["internet"] },
  { id: "mail", name: "Mail", icon: "assets/apps/mail.svg", categories: ["internet"] },
  { id: "ephoto", name: "Ephoto", icon: "assets/apps/ephoto.svg", categories: ["graphics"] },
  { id: "rage", name: "Rage", icon: "assets/apps/rage.svg", categories: ["multimedia"] },
  { id: "ecrire", name: "Ecrire", icon: "assets/apps/ecrire.svg", categories: ["accessories", "office"] },
  { id: "evisum", name: "Evisum", icon: "assets/apps/evisum.svg", categories: ["system"] },
  { id: "settings", name: "Settings Panel", icon: "assets/apps/settings.svg", categories: ["system"] },
  { id: "calculator", name: "Calculator", icon: "assets/apps/calculator.svg", categories: ["accessories"] },
  { id: "writer", name: "LibreOffice Writer", icon: "assets/apps/org.libreoffice.LibreOffice.writer.png", categories: ["office"] },
  { id: "calc", name: "LibreOffice Calc", icon: "assets/apps/org.libreoffice.LibreOffice.calc.png", categories: ["office"] },
  { id: "impress", name: "LibreOffice Impress", icon: "assets/apps/org.libreoffice.LibreOffice.impress.png", categories: ["office"] },
  { id: "draw", name: "LibreOffice Draw", icon: "assets/apps/org.libreoffice.LibreOffice.draw.png", categories: ["office", "graphics"] },
  { id: "libreoffice", name: "LibreOffice", icon: "assets/apps/org.libreoffice.LibreOffice.startcenter.png", categories: ["office"] },
  { id: "music", name: "Music Player", icon: "assets/apps/audio-player.svg", categories: ["multimedia"] },
  { id: "video", name: "Video Player", icon: "assets/apps/video-player.svg", categories: ["multimedia"] },
];

const CATEGORY_APPS = {
  "cat-accessories": ["files", "terminology", "ecrire", "calculator"],
  "cat-development": ["ecrire", "terminology"],
  "cat-graphics": ["ephoto", "draw"],
  "cat-internet": ["firefox", "mail"],
  "cat-office": ["libreoffice", "writer", "calc", "impress", "draw", "ecrire"],
  "cat-multimedia": ["rage", "music", "video"],
  "cat-system": ["files", "terminology", "evisum", "settings"],
};

/* ---------- Filesystem (EFM favorites + home tree) ---------- */

const FOLDER_YELLOW = "assets/places/folder-efm.svg";

const FS = {
  home: {
    label: "Home",
    icon: "assets/places/side-home.svg",
    path: ["home", "user"],
    parent: null,
    items: [
      { name: "Desktop", icon: FOLDER_YELLOW, type: "folder", place: "desktop" },
      { name: "Documents", icon: FOLDER_YELLOW, type: "folder", place: "documents" },
      { name: "Downloads", icon: FOLDER_YELLOW, type: "folder", place: "downloads" },
      { name: "Music", icon: FOLDER_YELLOW, type: "folder", place: "music" },
      { name: "Pictures", icon: FOLDER_YELLOW, type: "folder", place: "pictures" },
      { name: "Videos", icon: FOLDER_YELLOW, type: "folder", place: "videos" },
      { name: "xdg-runtime", icon: FOLDER_YELLOW, type: "folder", place: "empty" },
    ],
  },
  desktop: {
    label: "Desktop",
    icon: "assets/places/side-desktop.svg",
    path: ["home", "user", "Desktop"],
    parent: "home",
    items: [],
  },
  documents: {
    label: "Documents",
    icon: FOLDER_YELLOW,
    path: ["home", "user", "Documents"],
    parent: "home",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.png", type: "file", size: "2.1 kB" },
      { name: "report.odt", icon: "assets/apps/org.libreoffice.LibreOffice.writer.png", type: "file", size: "112 kB" },
      { name: "budget.ods", icon: "assets/apps/org.libreoffice.LibreOffice.calc.png", type: "file", size: "48 kB" },
    ],
  },
  downloads: {
    label: "Downloads",
    icon: FOLDER_YELLOW,
    path: ["home", "user", "Downloads"],
    parent: "home",
    items: [
      { name: "enlightenment-0.27.1.tar.xz", icon: "assets/mimetypes/application-pdf.png", type: "file", size: "28 MB" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.png", type: "file", size: "340 kB" },
    ],
  },
  music: {
    label: "Music",
    icon: FOLDER_YELLOW,
    path: ["home", "user", "Music"],
    parent: "home",
    items: [{ name: "Playlist", icon: FOLDER_YELLOW, type: "folder", place: "empty" }],
  },
  pictures: {
    label: "Pictures",
    icon: FOLDER_YELLOW,
    path: ["home", "user", "Pictures"],
    parent: "home",
    items: [
      { name: "Vacation", icon: FOLDER_YELLOW, type: "folder", place: "empty" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB" },
    ],
  },
  videos: {
    label: "Videos",
    icon: FOLDER_YELLOW,
    path: ["home", "user", "Videos"],
    parent: "home",
    items: [],
  },
  root: {
    label: "Root",
    icon: "assets/places/side-root.svg",
    path: [""],
    parent: null,
    items: [
      { name: "bin", icon: FOLDER_YELLOW, type: "folder", place: "empty" },
      { name: "etc", icon: FOLDER_YELLOW, type: "folder", place: "empty" },
      { name: "home", icon: FOLDER_YELLOW, type: "folder", place: "home" },
      { name: "usr", icon: FOLDER_YELLOW, type: "folder", place: "empty" },
      { name: "var", icon: FOLDER_YELLOW, type: "folder", place: "empty" },
      { name: "tmp", icon: FOLDER_YELLOW, type: "folder", place: "tmp" },
    ],
  },
  tmp: {
    label: "Temp",
    icon: "assets/places/side-temp.svg",
    path: ["tmp"],
    parent: "root",
    items: [
      { name: "cache", icon: FOLDER_YELLOW, type: "folder", place: "empty" },
    ],
  },
  empty: {
    label: "Folder",
    icon: FOLDER_YELLOW,
    path: ["…"],
    parent: "home",
    items: [],
  },
};

/* Sidebar matches official EFM favorites: Root, drives, Desktop, Temp, Home */
const SIDEBAR = [
  { id: "root", label: "Root", icon: "assets/places/side-root.svg" },
  { id: "tmp", label: "Temp", icon: "assets/places/side-temp.svg" },
  { id: "desktop", label: "Desktop", icon: "assets/places/side-desktop.svg" },
  { id: "home", label: "Home", icon: "assets/places/side-home.svg" },
];

/* ---------- DOM ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const desktop = $("#desktop");
const startBtn = $("#start-btn");
const mainMenu = $("#main-menu");
const everything = $("#everything");
const everythingSearch = $("#everything-search");
const everythingResults = $("#everything-results");
const everythingEmpty = $("#everything-empty");
const syscon = $("#syscon");
const aboutDialog = $("#about-dialog");
const efmWindow = $("#efm-window");
const termWindow = $("#term-window");
const toastEl = $("#toast");

const popovers = {
  calendar: $("#calendar-popover"),
  mixer: $("#mixer-popover"),
  net: $("#net-popover"),
  bt: $("#bt-popover"),
  bat: $("#bat-popover"),
};

/* ---------- State ---------- */

let menuOpen = false;
let openSubmenus = [];
let efmPlace = "home";
let efmHistory = ["home"];
let efmHistIndex = 0;
let volume = 62;
let calMonth = new Date(2026, 6, 1); // July 2026
let everythingTab = "apps";
let toastTimer = null;

/* ---------- Utils ---------- */

function appById(id) {
  return APPS.find((a) => a.id === id);
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 2200);
}

function closeAllPopovers() {
  Object.values(popovers).forEach((p) => {
    if (p) p.hidden = true;
  });
  $$(".shelf-gadget.active, .start-btn.active").forEach((el) => el.classList.remove("active"));
}

function closeMenu() {
  menuOpen = false;
  mainMenu.hidden = true;
  startBtn.classList.remove("active");
  startBtn.setAttribute("aria-expanded", "false");
  closeAllSubmenus();
}

function closeAllSubmenus() {
  openSubmenus = [];
  $$(".menu-panel.submenu", mainMenu).forEach((p) => {
    p.hidden = true;
    p.style.position = "";
    p.style.top = "";
    p.style.left = "";
    p.style.bottom = "";
  });
  $$(".menu-item.open", mainMenu).forEach((i) => i.classList.remove("open"));
}

function closeEverything() {
  everything.hidden = true;
  everythingSearch.value = "";
}

function closeSyscon() {
  syscon.hidden = true;
}

function closeAbout() {
  aboutDialog.hidden = true;
}

function closeOverlays() {
  closeMenu();
  closeAllPopovers();
  closeEverything();
  closeSyscon();
}

/* ---------- Clock ---------- */

function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  const text = `${h12.toString().padStart(2, "0")}:${m} ${ampm}`;
  const el = $("#clock-text");
  if (el) el.textContent = text;
}

/* ---------- Calendar ---------- */

function renderCalendar() {
  const label = $("#cal-month-label");
  const grid = $("#cal-grid");
  if (!label || !grid) return;

  const year = calMonth.getFullYear();
  const month = calMonth.getMonth();
  label.textContent = calMonth.toLocaleString("en-US", { month: "long", year: "numeric" });

  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const today = new Date();

  grid.innerHTML = "";
  const total = 42;
  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.className = "cal-day";
    let dayNum;
    let muted = false;
    if (i < startPad) {
      dayNum = prevDays - startPad + i + 1;
      muted = true;
    } else if (i >= startPad + daysInMonth) {
      dayNum = i - startPad - daysInMonth + 1;
      muted = true;
    } else {
      dayNum = i - startPad + 1;
      if (
        dayNum === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        cell.classList.add("today");
      }
    }
    if (muted) cell.classList.add("muted");
    cell.textContent = String(dayNum);
    grid.appendChild(cell);
  }
}

/* ---------- Main menu ---------- */

function openMenu() {
  closeAllPopovers();
  closeEverything();
  menuOpen = true;
  mainMenu.hidden = false;
  startBtn.classList.add("active");
  startBtn.setAttribute("aria-expanded", "true");
  closeAllSubmenus();
}

function toggleMenu() {
  if (menuOpen) closeMenu();
  else openMenu();
}

function positionSubmenu(trigger, panel) {
  const parentPanel = trigger.closest(".menu-panel");
  const parentRect = parentPanel.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();
  const shelfH = 40;
  const gap = 2;

  // Use fixed coordinates so cascades stay glued to the parent item
  panel.hidden = false;
  panel.style.position = "fixed";
  panel.style.bottom = "auto";
  panel.style.left = `${Math.round(parentRect.right + gap)}px`;
  panel.style.top = `${Math.round(triggerRect.top)}px`;

  // Clamp after layout so the panel stays on-screen above the shelf
  requestAnimationFrame(() => {
    const rect = panel.getBoundingClientRect();
    let top = triggerRect.top;
    let left = parentRect.right + gap;
    const maxTop = window.innerHeight - shelfH - rect.height - 8;
    if (top > maxTop) top = Math.max(8, maxTop);
    if (top < 8) top = 8;
    // Flip to left side if overflowing the right edge
    if (left + rect.width > window.innerWidth - 8) {
      left = Math.max(8, parentRect.left - rect.width - gap);
    }
    panel.style.top = `${Math.round(top)}px`;
    panel.style.left = `${Math.round(left)}px`;
  });
}

function openSubmenu(name, trigger) {
  const parentPanel = trigger.closest(".menu-panel");
  const isRoot = parentPanel === $("#menu-root");

  if (isRoot) {
    closeAllSubmenus();
  } else {
    // Close sibling leaf menus under the same parent branch
    $$(".menu-panel.submenu", mainMenu).forEach((p) => {
      if (p.id && p.id.startsWith("sub-cat-")) p.hidden = true;
    });
    $$(".menu-item.open", parentPanel).forEach((i) => i.classList.remove("open"));
  }

  const panel = $(`#sub-${name}`);
  if (!panel) return;

  if (name.startsWith("cat-")) {
    populateCategoryMenu(name, panel);
  }

  trigger.classList.add("open");
  positionSubmenu(trigger, panel);
  openSubmenus.push(name);
}

function populateCategoryMenu(catId, panel) {
  const ids = CATEGORY_APPS[catId] || [];
  panel.innerHTML = "";
  ids.forEach((id) => {
    const app = appById(id);
    if (!app) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-item";
    btn.setAttribute("role", "menuitem");
    btn.dataset.app = app.id;
    btn.innerHTML = `<img src="${app.icon}" alt="" class="menu-ico" draggable="false" /><span>${app.name}</span>`;
    panel.appendChild(btn);
  });
  if (!ids.length) {
    panel.innerHTML = `<button type="button" class="menu-item dim" role="menuitem"><span>No applications</span></button>`;
  }
}

function onMenuClick(e) {
  const item = e.target.closest(".menu-item");
  if (!item || !mainMenu.contains(item)) return;

  if (item.classList.contains("has-sub") && item.dataset.sub) {
    e.stopPropagation();
    openSubmenu(item.dataset.sub, item);
    return;
  }

  if (item.dataset.app) {
    launchApp(item.dataset.app);
    closeMenu();
    return;
  }

  if (item.dataset.place) {
    openEfm(item.dataset.place);
    closeMenu();
    return;
  }

  if (item.dataset.action) {
    handleMenuAction(item.dataset.action);
    closeMenu();
    return;
  }

  // Generic non-wired items
  if (!item.classList.contains("dim") && !item.classList.contains("has-sub")) {
    showToast(item.textContent.trim());
    closeMenu();
  }
}

function handleMenuAction(action) {
  switch (action) {
    case "everything":
      openEverything();
      break;
    case "system":
      openSyscon();
      break;
    case "about":
      aboutDialog.hidden = false;
      break;
    case "screenshot":
      showToast("Screenshot saved to ~/Screenshots");
      break;
    default:
      showToast(action);
  }
}

/* ---------- Launch apps ---------- */

function launchApp(id) {
  const app = appById(id);
  if (!app) {
    showToast(`Opened ${id}`);
    return;
  }

  // IBar indicator
  $$(".ibar-btn").forEach((btn) => {
    if (btn.dataset.app === id) {
      btn.classList.add("open");
      const ind = btn.querySelector(".ibar-indicator");
      if (ind) ind.hidden = false;
    }
  });

  if (app.open === "efm" || id === "files") {
    openEfm("home");
    return;
  }
  if (app.open === "term" || id === "terminology") {
    termWindow.hidden = false;
    return;
  }
  if (id === "settings") {
    showToast("Settings Panel");
    return;
  }

  showToast(`Launching ${app.name}`);
}

/* ---------- Everything ---------- */

function openEverything() {
  closeMenu();
  closeAllPopovers();
  everything.hidden = false;
  everythingTab = "apps";
  $$(".ev-tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === "apps"));
  everythingSearch.value = "";
  renderEverything("");
  setTimeout(() => everythingSearch.focus(), 30);
}

function renderEverything(query) {
  const q = (query || "").trim().toLowerCase();
  everythingResults.innerHTML = "";

  let items = [];
  if (everythingTab === "apps") {
    items = APPS.filter((a) => !q || a.name.toLowerCase().includes(q)).map((a) => ({
      id: a.id,
      name: a.name,
      sub: "Application",
      icon: a.icon,
      kind: "app",
    }));
  } else if (everythingTab === "files") {
    const files = [];
    Object.values(FS).forEach((folder) => {
      (folder.items || []).forEach((it) => {
        if (it.type === "file" && (!q || it.name.toLowerCase().includes(q))) {
          files.push({
            id: it.name,
            name: it.name,
            sub: folder.label,
            icon: it.icon,
            kind: "file",
            place: folder === FS.home ? "home" : Object.keys(FS).find((k) => FS[k] === folder),
          });
        }
      });
    });
    items = files;
  } else if (everythingTab === "windows") {
    items = [];
    if (!efmWindow.hidden) {
      items.push({ id: "win-efm", name: $("#efm-title").textContent, sub: "File Manager", icon: "assets/apps/file-manager.svg", kind: "win" });
    }
    if (!termWindow.hidden) {
      items.push({ id: "win-term", name: "Terminology", sub: "Window", icon: "assets/apps/terminology.svg", kind: "win" });
    }
    if (q) items = items.filter((i) => i.name.toLowerCase().includes(q));
  } else if (everythingTab === "settings") {
    const settings = [
      "Settings Panel",
      "Composite",
      "Modules",
      "Shelves",
      "Theme",
      "Wallpaper",
      "Screen Setup",
      "Palette",
    ];
    items = settings
      .filter((s) => !q || s.toLowerCase().includes(q))
      .map((s) => ({
        id: s,
        name: s,
        sub: "Settings",
        icon: "assets/apps/settings.svg",
        kind: "settings",
      }));
  }

  everythingEmpty.hidden = items.length > 0;
  items.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ev-item" + (idx === 0 ? " selected" : "");
    btn.setAttribute("role", "option");
    btn.innerHTML = `
      <img src="${item.icon}" alt="" draggable="false" />
      <div class="ev-item-text">
        <span class="ev-item-name">${item.name}</span>
        <span class="ev-item-sub">${item.sub}</span>
      </div>`;
    btn.addEventListener("click", () => activateEverythingItem(item));
    everythingResults.appendChild(btn);
  });
}

function activateEverythingItem(item) {
  closeEverything();
  if (item.kind === "app") launchApp(item.id);
  else if (item.kind === "file") openEfm(item.place || "home");
  else if (item.kind === "win") {
    if (item.id === "win-efm") efmWindow.hidden = false;
    if (item.id === "win-term") termWindow.hidden = false;
  } else showToast(item.name);
}

/* ---------- Syscon ---------- */

function openSyscon() {
  closeMenu();
  closeAllPopovers();
  syscon.hidden = false;
}

function onSysconAction(action) {
  closeSyscon();
  const labels = {
    poweroff: "Powering off…",
    reboot: "Rebooting…",
    suspend: "Suspending…",
    hibernate: "Hibernating…",
    lock: "Locking screen…",
    logout: "Logging out…",
  };
  showToast(labels[action] || action);
}

/* ---------- EFM ---------- */

function openEfm(place) {
  efmPlace = FS[place] ? place : "home";
  efmHistory = [efmPlace];
  efmHistIndex = 0;
  efmWindow.hidden = false;
  renderEfm();
  // mark ibar
  $$(".ibar-btn").forEach((btn) => {
    if (btn.dataset.app === "files") {
      btn.classList.add("open");
      const ind = btn.querySelector(".ibar-indicator");
      if (ind) ind.hidden = false;
    }
  });
}

function navigateEfm(place, pushHistory = true) {
  if (!FS[place]) return;
  efmPlace = place;
  if (pushHistory) {
    efmHistory = efmHistory.slice(0, efmHistIndex + 1);
    efmHistory.push(place);
    efmHistIndex = efmHistory.length - 1;
  }
  renderEfm();
}

function renderEfm() {
  const folder = FS[efmPlace] || FS.home;
  $("#efm-title").textContent = folder.label;
  $("#efm-title-icon").src = folder.icon;
  efmWindow.setAttribute("aria-label", folder.label);

  // pathbar
  const pathbar = $("#efm-pathbar");
  pathbar.innerHTML = "";
  const parts = folder.path || [folder.label];
  parts.forEach((part, i) => {
    if (i > 0) {
      const sep = document.createElement("span");
      sep.className = "efm-crumb-sep";
      sep.textContent = "/";
      pathbar.appendChild(sep);
    }
    const crumb = document.createElement("button");
    crumb.type = "button";
    crumb.className = "efm-crumb" + (i === parts.length - 1 ? " current" : "");
    crumb.textContent = part === "" ? "/" : part;
    if (i === 0 && part === "") crumb.textContent = "/";
    // simple jump: first crumb home/root
    crumb.addEventListener("click", () => {
      if (i === parts.length - 1) return;
      if (part === "" || part === "tmp") navigateEfm(part === "tmp" ? "tmp" : "root");
      else if (part === "home" || part === "user") navigateEfm("home");
      else {
        const key = Object.keys(FS).find(
          (k) => FS[k].label.toLowerCase() === String(part).toLowerCase()
        );
        if (key) navigateEfm(key);
      }
    });
    pathbar.appendChild(crumb);
  });

  // sidebar
  const sidebar = $("#efm-sidebar");
  sidebar.innerHTML = "";
  SIDEBAR.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "efm-side-item" + (item.id === efmPlace ? " active" : "");
    btn.innerHTML = `<img src="${item.icon}" alt="" draggable="false" /><span>${item.label}</span>`;
    btn.addEventListener("click", () => navigateEfm(item.id));
    sidebar.appendChild(btn);
  });

  // icons
  const icons = $("#efm-icons");
  const empty = $("#efm-empty");
  icons.innerHTML = "";
  const items = folder.items || [];
  empty.hidden = items.length > 0;
  items.forEach((it) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "efm-icon";
    btn.setAttribute("role", "listitem");
    btn.title = it.name;
    btn.innerHTML = `<img src="${it.icon}" alt="" draggable="false" /><span>${it.name}</span>`;
    btn.addEventListener("click", (e) => {
      $$(".efm-icon.selected").forEach((el) => el.classList.remove("selected"));
      btn.classList.add("selected");
    });
    btn.addEventListener("dblclick", () => {
      if (it.type === "folder" && it.place) navigateEfm(it.place);
      else showToast(`Open ${it.name}`);
    });
    icons.appendChild(btn);
  });

  // nav buttons
  $("#efm-back").disabled = efmHistIndex <= 0;
  $("#efm-forward").disabled = efmHistIndex >= efmHistory.length - 1;
  $("#efm-up").disabled = !folder.parent;
}

/* ---------- Volume ---------- */

function setVolume(v) {
  volume = Math.max(0, Math.min(100, Number(v)));
  $("#volume-slider").value = volume;
  $("#volume-pct").textContent = `${volume}%`;
  $("#mixer-vu-fill").style.width = `${volume}%`;
  // Shelf keeps the circular official-style volume glyph; popover uses symbolic
  const mixerIcon = $("#mixer-icon");
  if (mixerIcon) {
    let icon = "assets/status/audio-volume-medium-symbolic.svg";
    if (volume === 0) icon = "assets/status/audio-volume-muted-symbolic.svg";
    else if (volume >= 70) icon = "assets/status/audio-volume-high-symbolic.svg";
    mixerIcon.src = icon;
  }
}

/* ---------- Popover helpers ---------- */

function togglePopover(name, btn) {
  const pop = popovers[name];
  if (!pop) return;
  const wasOpen = !pop.hidden;
  closeAllPopovers();
  closeMenu();
  if (!wasOpen) {
    pop.hidden = false;
    if (btn) btn.classList.add("active");
    if (name === "calendar") renderCalendar();
  }
}

/* ---------- Events ---------- */

function initEvents() {
  // Start button only (do not open menu on desktop click)
  startBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  mainMenu.addEventListener("click", onMenuClick);
  mainMenu.addEventListener("mouseover", (e) => {
    const item = e.target.closest(".menu-item.has-sub");
    if (!item || !mainMenu.contains(item) || !item.dataset.sub) return;
    // hover-open submenus like classic E menus
    openSubmenu(item.dataset.sub, item);
  });

  // Desktop icons
  $$(".desk-icon").forEach((btn) => {
    btn.addEventListener("dblclick", () => openEfm(btn.dataset.place || "home"));
    btn.addEventListener("click", () => {
      $$(".desk-icon").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  // IBar
  $$(".ibar-btn").forEach((btn) => {
    btn.addEventListener("click", () => launchApp(btn.dataset.app));
  });

  // Pager
  $$(".pager-desk").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".pager-desk").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      showToast(`Desktop ${btn.dataset.desk}`);
    });
  });

  // Shelf gadgets
  $("#clock-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover("calendar", e.currentTarget);
  });
  $("#mixer-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover("mixer", e.currentTarget);
  });
  $("#net-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover("net", e.currentTarget);
  });
  $("#bt-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover("bt", e.currentTarget);
  });
  $("#bat-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover("bat", e.currentTarget);
  });
  $("#syscon-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    openSyscon();
  });

  $("#volume-slider").addEventListener("input", (e) => setVolume(e.target.value));

  $("#cal-prev").addEventListener("click", () => {
    calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() - 1, 1);
    renderCalendar();
  });
  $("#cal-next").addEventListener("click", () => {
    calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  // Everything
  everythingSearch.addEventListener("input", () => renderEverything(everythingSearch.value));
  everythingSearch.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeEverything();
    if (e.key === "Enter") {
      const sel = $(".ev-item.selected") || $(".ev-item");
      if (sel) sel.click();
    }
  });
  $$(".ev-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      everythingTab = tab.dataset.tab;
      $$(".ev-tab").forEach((t) => t.classList.toggle("active", t === tab));
      renderEverything(everythingSearch.value);
    });
  });
  everything.addEventListener("click", (e) => {
    if (e.target === everything) closeEverything();
  });

  // Syscon
  $$(".syscon-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      onSysconAction(btn.dataset.action);
    });
  });
  $("#syscon-cancel").addEventListener("click", closeSyscon);
  syscon.addEventListener("click", (e) => {
    if (e.target === syscon) closeSyscon();
  });

  // About
  $("#about-close").addEventListener("click", closeAbout);
  $("#about-close-btn").addEventListener("click", closeAbout);
  aboutDialog.addEventListener("click", (e) => {
    if (e.target === aboutDialog) closeAbout();
  });

  // EFM chrome
  $("#efm-close").addEventListener("click", () => {
    efmWindow.hidden = true;
  });
  $("#efm-max").addEventListener("click", () => {
    efmWindow.classList.toggle("maximized");
  });
  $("#efm-back").addEventListener("click", () => {
    if (efmHistIndex > 0) {
      efmHistIndex--;
      efmPlace = efmHistory[efmHistIndex];
      renderEfm();
    }
  });
  $("#efm-forward").addEventListener("click", () => {
    if (efmHistIndex < efmHistory.length - 1) {
      efmHistIndex++;
      efmPlace = efmHistory[efmHistIndex];
      renderEfm();
    }
  });
  $("#efm-up").addEventListener("click", () => {
    const folder = FS[efmPlace];
    if (folder && folder.parent) navigateEfm(folder.parent);
  });
  $("#efm-refresh").addEventListener("click", () => renderEfm());
  $("#efm-fav").addEventListener("click", () => showToast("Favorites"));

  // Terminology
  $("#term-close").addEventListener("click", () => {
    termWindow.hidden = true;
  });

  // Global dismiss
  document.addEventListener("click", (e) => {
    if (
      menuOpen &&
      !mainMenu.contains(e.target) &&
      e.target !== startBtn &&
      !startBtn.contains(e.target)
    ) {
      closeMenu();
    }
    // close popovers when clicking elsewhere
    const inPopover = e.target.closest(".tray-popover");
    const inGadget = e.target.closest(".shelf-gadget");
    if (!inPopover && !inGadget) {
      Object.values(popovers).forEach((p) => {
        if (p) p.hidden = true;
      });
      $$(".shelf-gadget.active").forEach((el) => el.classList.remove("active"));
    }
  });

  document.addEventListener("keydown", (e) => {
    // Alt+Esc → Everything (Enlightenment default)
    if (e.key === "Escape") {
      if (!everything.hidden) {
        closeEverything();
        return;
      }
      if (!syscon.hidden) {
        closeSyscon();
        return;
      }
      if (!aboutDialog.hidden) {
        closeAbout();
        return;
      }
      if (menuOpen) {
        closeMenu();
        return;
      }
      closeAllPopovers();
    }
    if (e.altKey && e.key === "Escape") {
      e.preventDefault();
      if (everything.hidden) openEverything();
      else closeEverything();
    }
    // Ctrl+Alt+Delete → Syscon
    if (e.ctrlKey && e.altKey && (e.key === "Delete" || e.key === "Del")) {
      e.preventDefault();
      openSyscon();
    }
  });
}

/* ---------- Init ---------- */

function init() {
  updateClock();
  setInterval(updateClock, 15000);
  setVolume(62);
  renderCalendar();
  initEvents();
}

init();
