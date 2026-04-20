/* ============================================
   FORM.JS — Formulario de contacto
   Toca solo esto cuando haya algo del form.
   ============================================ */

(function initForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // TODO: reemplazar con Formspree o EmailJS real
    setTimeout(function() {
      contactForm.innerHTML = [
        '<div style="text-align:center; padding: 40px 20px;">',
        '  <div style="font-size:3rem; margin-bottom:16px;">✅</div>',
        '  <h3 style="margin-bottom:10px; color: var(--dark);">¡Mensaje enviado!</h3>',
        '  <p style="color: var(--text-light);">Gracias por contactarnos. Te responderemos dentro de 24 horas.</p>',
        '</div>'
      ].join('');
    }, 1500);
  });
})();
