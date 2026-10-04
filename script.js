// ===== 移动端菜单切换 =====
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// 点击菜单项后自动收起移动端菜单
navMenu.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== 页脚年份自动更新 =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== 滚动时高亮当前导航项 =====
const sections = Array.from(document.querySelectorAll("main section"));
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

function highlightNav() {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 90;
    if (window.scrollY >= top) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
}

window.addEventListener("scroll", highlightNav, { passive: true });
highlightNav();
