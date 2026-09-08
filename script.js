document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    fadeElements.forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // Dark Mode Toggle — l'état initial est appliqué sur <html> par le script inline du <head>
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;

    themeToggle.addEventListener('click', () => {
        if (root.getAttribute('data-theme') === 'dark') {
            root.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                // Filter projects
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==========================================================================
// Interactions : curseur, preloader, révélations, effets souris
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

    // --- Preloader (1re visite de la session uniquement) ---
    const preloader = document.getElementById('preloader');
    if (preloader && root.classList.contains('is-loading')) {
        const start = performance.now();
        const MIN_DURATION = 1500;

        const finish = () => {
            const wait = Math.max(0, MIN_DURATION - (performance.now() - start));
            setTimeout(() => {
                root.classList.add('is-loaded');
                try { sessionStorage.setItem('intro-seen', '1'); } catch (e) { /* stockage indisponible */ }
                preloader.addEventListener('transitionend', () => {
                    root.classList.remove('is-loading', 'is-loaded');
                    preloader.remove();
                }, { once: true });
            }, wait);
        };

        if (document.readyState === 'complete') finish();
        else window.addEventListener('load', finish, { once: true });

        // Sécurité : on ne bloque jamais la page plus de 4 s
        setTimeout(() => {
            if (root.classList.contains('is-loading') && !root.classList.contains('is-loaded')) finish();
        }, 4000);
    } else if (preloader) {
        preloader.remove();
    }

    // --- Titre du hero : révélation mot par mot ---
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && !reduceMotion) {
        const words = heroTitle.textContent.trim().split(/\s+/);
        heroTitle.innerHTML = words
            .map((w, i) => `<span class="word"><span class="word-inner" style="--i:${i}">${w}</span></span>`)
            .join(' ');
    }

    // --- Barre de progression du scroll ---
    const progress = document.querySelector('.scroll-progress');
    if (progress) {
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        };
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    }

    if (reduceMotion) return;

    // --- Curseur personnalisé : anneau + point ---
    if (finePointer) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        document.body.append(cursor, dot);
        document.body.classList.add('has-cursor');

        let mouseX = -100, mouseY = -100;
        let ringX = -100, ringY = -100;
        let dotX = -100, dotY = -100;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            document.body.classList.add('cursor-active');
        });
        document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
        document.addEventListener('mousedown', () => cursor.classList.add('is-down'));
        document.addEventListener('mouseup', () => cursor.classList.remove('is-down'));

        const render = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            dotX += (mouseX - dotX) * 0.5;
            dotY += (mouseY - dotY) * 0.5;
            cursor.style.translate = `${ringX - cursor.offsetWidth / 2}px ${ringY - cursor.offsetHeight / 2}px`;
            dot.style.translate = `${dotX - dot.offsetWidth / 2}px ${dotY - dot.offsetHeight / 2}px`;
            requestAnimationFrame(render);
        };
        render();

        // État du curseur selon l'élément survolé (délégation : marche aussi pour les cartes filtrées)
        document.addEventListener('mouseover', (e) => {
            const view = e.target.closest('.case-study-link, .project-image');
            const hover = e.target.closest('a, button, .btn, input, textarea, select, label, .comparison-slider');
            cursor.classList.toggle('is-view', !!view);
            cursor.classList.toggle('is-hover', !view && !!hover);
        });
    }

    // --- Boutons et liens magnétiques ---
    if (finePointer) {
        const magnets = document.querySelectorAll('.btn, .nav-links a, .theme-toggle, .social-links a, .filter-btn');
        magnets.forEach((el) => {
            el.classList.add('magnetic');
            el.addEventListener('mousemove', (e) => {
                const r = el.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2);
                const dy = e.clientY - (r.top + r.height / 2);
                el.style.setProperty('--mx', `${dx * 0.25}px`);
                el.style.setProperty('--my', `${dy * 0.25}px`);
            });
            el.addEventListener('mouseleave', () => {
                el.style.setProperty('--mx', '0px');
                el.style.setProperty('--my', '0px');
            });
        });
    }

    // --- Inclinaison 3D des images de projets ---
    if (finePointer) {
        document.querySelectorAll('.case-study-link').forEach((link) => {
            const image = link.querySelector('.case-study-image');
            if (!image) return;
            link.addEventListener('mousemove', (e) => {
                const r = image.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                image.style.setProperty('--rx', `${x * 3.5}deg`);
                image.style.setProperty('--ry', `${-y * 3.5}deg`);
            });
            link.addEventListener('mouseleave', () => {
                image.style.setProperty('--rx', '0deg');
                image.style.setProperty('--ry', '0deg');
            });
        });
    }

    // --- Halo qui suit la souris sur les étapes de l'approche ---
    document.querySelectorAll('.approche-step').forEach((step) => {
        step.addEventListener('mousemove', (e) => {
            const r = step.getBoundingClientRect();
            step.style.setProperty('--mx', `${e.clientX - r.left}px`);
            step.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
    });

    // --- Parallaxe de la photo du hero ---
    const hero = document.querySelector('.hero');
    const heroImg = document.querySelector('.hero-image img');
    if (hero && heroImg && finePointer) {
        hero.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            heroImg.style.setProperty('--px', `${x * 18}px`);
            heroImg.style.setProperty('--py', `${y * 18}px`);
        });
        hero.addEventListener('mouseleave', () => {
            heroImg.style.setProperty('--px', '0px');
            heroImg.style.setProperty('--py', '0px');
        });
    }
});
