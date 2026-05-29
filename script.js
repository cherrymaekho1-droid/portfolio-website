// Gentle welcome (optional; comment out to disable)


// Staggered fade for cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.glass-card, .project-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    card.style.transition = 'opacity .5s ease, transform .5s ease';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 + i * 140);
  });

  // Smooth page fade on nav
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.endsWith('.html')) {
        e.preventDefault();
        document.body.style.transition = 'opacity .28s ease';
        document.body.style.opacity = '0';
        setTimeout(() => { window.location.href = href; }, 280);
      }
    });
  });

  // Subtle social icon hover scale
  document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => icon.style.transform = 'translateY(-3px) scale(1.1)');
    icon.addEventListener('mouseleave', () => icon.style.transform = 'translateY(0) scale(1)');
  });
});
