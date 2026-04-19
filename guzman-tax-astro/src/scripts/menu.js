/* ============================================
   MENU.JS — Hamburger + overlay fullscreen
   Toca solo esto cuando haya algo del menú.
   ============================================ */

(function initMenu() {
  const hamburger    = document.querySelector('.hamburger');
  const originalMenu = document.querySelector('.nav-menu');
  const originalCta  = document.querySelector('.nav-cta');

  if (!hamburger) return;

  // Construir overlay una sola vez
  const overlay = document.createElement('div');
  overlay.className = 'fs-overlay';
  overlay.setAttribute('aria-hidden', 'true');

  // Botón cerrar
  const closeBtn = document.createElement('button');
  closeBtn.className = 'fs-close';
  closeBtn.setAttribute('aria-label', 'Cerrar menú');
  closeBtn.innerHTML = '<span></span><span></span>';
  closeBtn.addEventListener('click', closeMenu);
  overlay.appendChild(closeBtn);

  // Links de navegación
  const fsNav = document.createElement('nav');
  fsNav.className = 'fs-nav';

  if (originalMenu) {
    let index = 0;
    originalMenu.querySelectorAll(':scope > li').forEach(function(li) {
      const link     = li.querySelector(':scope > a');
      const dropdown = li.querySelector('.dropdown');
      const label    = link.textContent.replace('▾', '').trim();

      const item = document.createElement('div');
      item.className = 'fs-item';
      item.style.setProperty('--i', index++);

      if (dropdown) {
        const toggle = document.createElement('button');
        toggle.className = 'fs-link fs-toggle';
        toggle.innerHTML = label + ' <span class="fs-arrow">↓</span>';

        const sub = document.createElement('div');
        sub.className = 'fs-subitems';
        dropdown.querySelectorAll('a').forEach(function(a) {
          const sa = document.createElement('a');
          sa.href = a.href;
          sa.className = 'fs-sublink';
          sa.textContent = a.textContent;
          sa.addEventListener('click', closeMenu);
          sub.appendChild(sa);
        });

        toggle.addEventListener('click', function() {
          sub.classList.toggle('open');
          toggle.classList.toggle('expanded');
        });

        item.appendChild(toggle);
        item.appendChild(sub);
      } else {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'fs-link';
        a.textContent = label;
        a.addEventListener('click', closeMenu);
        item.appendChild(a);
      }

      fsNav.appendChild(item);
    });
  }

  overlay.appendChild(fsNav);

  // Fondo CTA (sin copiar el .lang-switch al overlay)
  if (originalCta) {
    const fsBottom = document.createElement('div');
    fsBottom.className = 'fs-bottom';
    originalCta.querySelectorAll('a:not(.lang-switch)').forEach(function(a) {
      const btn = document.createElement('a');
      btn.href = a.href;
      btn.className = a.className + ' fs-cta-btn';
      btn.innerHTML = a.innerHTML;
      btn.addEventListener('click', closeMenu);
      fsBottom.appendChild(btn);
    });
    overlay.appendChild(fsBottom);
  }

  document.body.appendChild(overlay);

  // Funciones abrir / cerrar
  function openMenu() {
    hamburger.classList.add('open');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function() {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) closeMenu();
  });
})();
