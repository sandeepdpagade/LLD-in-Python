// Central list of topics. Add a new entry here once its notes page exists
// and every page's sidebar updates automatically.
const TOPICS = [
  {
    section: "Fundamentals",
    items: [
      { title: "OOP in Python", href: "topics/oops-in-python.html", id: "oops", status: "done" },
      { title: "SOLID Principles", href: "topics/solid-principles.html", id: "solid", status: "done" },
      { title: "UML Basics", href: "topics/uml-basics.html", id: "uml", status: "done" },
    ],
  },
  {
    section: "Design Patterns",
    items: [
      { title: "Creational Patterns", href: "#", id: "creational", status: "soon" },
      { title: "Structural Patterns", href: "#", id: "structural", status: "soon" },
      { title: "Behavioral Patterns", href: "#", id: "behavioral", status: "soon" },
    ],
  },
  {
    section: "Practice",
    items: [
      { title: "LLD Problems", href: "#", id: "problems", status: "soon" },
    ],
  },
];

function rootPrefix() {
  const body = document.body;
  return body.getAttribute("data-root") || "";
}

function renderSidebar() {
  const mount = document.getElementById("sidebar-nav");
  if (!mount) return;
  const currentPage = document.body.getAttribute("data-page") || "";
  const prefix = rootPrefix();

  let html = "";
  TOPICS.forEach((group) => {
    html += `<div class="section-label">${group.section}</div><ul class="nav-list">`;
    group.items.forEach((item) => {
      const isActive = item.id === currentPage;
      const isDisabled = item.status === "soon";
      const href = item.href === "#" ? "#" : prefix + item.href;
      html += `<li class="nav-item ${isActive ? "active" : ""} ${isDisabled ? "disabled" : ""}">
        <a href="${href}">${item.title}${isDisabled ? '<span class="badge-soon">Soon</span>' : ""}</a>
      </li>`;
    });
    html += `</ul>`;
  });
  mount.innerHTML = html;
}

function renderTOC() {
  const tocMount = document.getElementById("toc-list");
  if (!tocMount) return;
  const headings = document.querySelectorAll(".content h2, .content h3");
  if (!headings.length) return;

  let html = "";
  headings.forEach((h) => {
    if (!h.id) {
      h.id = h.textContent
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
    }
    const isH3 = h.tagName === "H3";
    html += `<li class="${isH3 ? "toc-h3" : ""}"><a href="#${h.id}">${h.textContent}</a></li>`;
  });
  tocMount.innerHTML = html;

  const tocLinks = tocMount.querySelectorAll("a");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = tocMount.querySelector(`a[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-80px 0px -70% 0px" }
  );
  headings.forEach((h) => observer.observe(h));
}

function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  let saved = null;
  try {
    saved = localStorage.getItem("lld-theme");
  } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);

  const updateLabel = () => {
    const current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (toggle) toggle.textContent = current === "dark" ? "☀️ Light" : "🌙 Dark";
  };
  updateLabel();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("lld-theme", next);
      } catch (e) {}
      updateLabel();
    });
  }
}

function initMobileMenu() {
  const menuBtn = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  if (!menuBtn || !sidebar) return;
  menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  });
}

function initCopyButtons() {
  document.querySelectorAll(".code-block").forEach((block) => {
    const btn = block.querySelector(".copy-btn");
    const codeEl = block.querySelector("pre code");
    if (!btn || !codeEl) return;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeEl.textContent);
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "Copy";
          btn.classList.remove("copied");
        }, 1500);
      } catch (e) {
        btn.textContent = "Error";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  renderTOC();
  initTheme();
  initMobileMenu();
  initCopyButtons();
  if (window.hljs) {
    document.querySelectorAll("pre code").forEach((el) => window.hljs.highlightElement(el));
  }
});
