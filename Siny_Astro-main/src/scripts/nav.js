/* ============================================
   NAV.JS — Link activo en navbar
   ============================================ */

(function initActiveNav() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-menu a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href) && href !== '/') {
      link.classList.add('active');
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });
})();
