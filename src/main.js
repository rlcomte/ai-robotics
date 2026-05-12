import "../assets/css/styles.css";
import { pages, searchIndex } from "../data/content.js";

const normalizePath = (path) => {
  const file = path.split("/").pop() || "index.html";
  return file === "" ? "index.html" : file;
};

const currentPage = normalizePath(window.location.pathname);

document.querySelectorAll("[data-nav]").forEach((nav) => {
  nav.innerHTML = pages.map((page) => {
    const active = page.url === currentPage || (currentPage === "" && page.url === "index.html");
    return `<a href="${page.url}" class="${active ? "active" : ""}" ${active ? 'aria-current="page"' : ""}>${page.title}</a>`;
  }).join("");
});

const menuButton = document.querySelector("[data-menu-button]");
const siteNav = document.querySelector("[data-site-nav]");
menuButton?.addEventListener("click", () => {
  const isOpen = siteNav?.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

document.querySelectorAll(".accordion-trigger").forEach((button) => {
  const content = button.nextElementSibling;
  if (!content) return;
  button.setAttribute("aria-expanded", "false");
  content.hidden = true;
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    content.hidden = expanded;
  });
});

const searchInput = document.querySelector("[data-search-input]");
const searchResults = document.querySelector("[data-search-results]");

function renderResults(query) {
  if (!searchResults) return;
  const value = query.trim().toLowerCase();
  if (value.length < 2) {
    searchResults.innerHTML = "";
    searchResults.hidden = true;
    return;
  }

  const terms = value.split(/\s+/);
  const results = searchIndex.filter((item) => {
    const haystack = `${item.title} ${item.snippet} ${item.keywords}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  }).slice(0, 6);

  searchResults.hidden = false;
  searchResults.innerHTML = results.length
    ? results.map((item) => `
        <a class="search-result" href="${item.url}">
          <strong>${item.title}</strong>
          <span>${item.snippet}</span>
        </a>
      `).join("")
    : `<p class="search-empty">Geen resultaten voor "${query}".</p>`;
}

searchInput?.addEventListener("input", (event) => renderResults(event.target.value));

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (!target.closest(".site-search")) {
    searchResults?.setAttribute("hidden", "");
  }
});
