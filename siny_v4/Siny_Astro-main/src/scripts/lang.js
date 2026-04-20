/* ============================================
   LANG.JS — Detección y cambio de idioma
   Toca solo esto cuando haya algo del idioma.
   ============================================ */

(function initLang() {
  const isEnPage = window.location.pathname.startsWith('/en');
  const stored   = localStorage.getItem('guzman_lang');

  // Primera visita: detectar idioma del navegador y redirigir si es necesario
  if (!stored) {
    const lang      = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    const prefersEn = lang.startsWith('en');
    localStorage.setItem('guzman_lang', prefersEn ? 'en' : 'es');
    if (prefersEn && !isEnPage) {
      window.location.replace('/en/');
    }
    return;
  }

  // Cambio manual: cualquier .lang-switch actualiza localStorage y navega
  document.querySelectorAll('.lang-switch').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('data-lang-href');
      if (!target) return;
      localStorage.setItem('guzman_lang', target.startsWith('/en') ? 'en' : 'es');
      window.location.href = target;
    });
  });
})();
