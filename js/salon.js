
  // Smooth Scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
  });

    // Scroll animation - fade in sections
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
  }, options);

  sections.forEach(section => {
        section.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-1000');
    revealOnScroll.observe(section);
  });

    // Dynamic Year in Footer (optional)
    const yearSpan = document.createElement("span");
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector("footer p.text-sm").innerHTML = `© ${yearSpan.textContent} Glamour Girls Salon. All rights reserved.`;
