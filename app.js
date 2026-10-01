(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("#theme-toggle");
  const saved = localStorage.getItem("tokenboard-theme");

  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === "dark";
    toggle?.setAttribute("aria-pressed", String(dark));
  }

  setTheme(saved || "light");

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("tokenboard-theme", next);
  });
})();