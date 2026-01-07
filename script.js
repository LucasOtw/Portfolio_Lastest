document.addEventListener('DOMContentLoaded', () => {
    // Project Data Configuration
    const PROJECTS_DATA = [
        {
            title: "TripEnArvor",
            description: "Un site web pour trouver et poster des activités dans des villes françaises.",
            image: "images/project1.svg",
            tags: ["Php", "Css", "Figma", "Agile"],
            link: "#",
            category: "universitaire",
            categoryDisplay: "Universitaire"
        },
        {
            title: "TomExplore",
            description: "Application pour créer son voyage en 2min !",
            image: "images/TomExplore.jpeg",
            tags: ["Ionic", "React", "Figma", "Css", "Clickup"],
            link: "#",
            category: "entreprise",
            categoryDisplay: "Entreprise",
            imgClass: "img-tomexplore"
        },
        {
            title: "DeepPace",
            description: "Design system et intégration pour une application bancaire nouvelle génération.",
            image: "images/project3.svg",
            tags: ["Figma", "React Native", "Motion"],
            link: "#",
            category: "personnel",
            categoryDisplay: "Personnel"
        },
        {
            title: "Portfolio Personnel v1",
            description: "Première itération de mon portfolio. Minimaliste et brutaliste.",
            image: "images/project1.svg",
            tags: ["HTML/CSS", "Jekyll"],
            link: "#",
            imgClass: "img-hue-1",
            category: "perso",
            categoryDisplay: "Personnel"
        },
        {
            title: "Task Master App",
            description: "Application de gestion de productivité avec mode focus et statistiques.",
            image: "images/project2.svg",
            tags: ["Svelte", "Firebase"],
            link: "#",
            imgClass: "img-hue-2",
            category: "perso",
            categoryDisplay: "Personnel"
        }
    ];

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

    // Render Projects Function
    const renderProjects = () => {
        const projectsContainer = document.querySelector('.projects-grid');
        if (!projectsContainer) return;

        // Clear existing content
        projectsContainer.innerHTML = '';

        PROJECTS_DATA.forEach(project => {
            const article = document.createElement('article');
            article.className = 'project-card fade-in-on-scroll';
            article.dataset.category = project.category;
            
            const imgClass = project.imgClass ? ` class="${project.imgClass}"` : '';
            const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');
            
            const badgeHtml = project.categoryDisplay ? `<span class="project-badge">${project.categoryDisplay}</span>` : '';

            article.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy"${imgClass}>
                    ${badgeHtml}
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags">
                        ${tagsHtml}
                    </div>
                    <a href="${project.link}" class="project-link">Voir le projet &rarr;</a>
                </div>
            `;

            projectsContainer.appendChild(article);
            
            // Observe the newly created element
            observer.observe(article);
        });
    };

    // Initialize Projects
    renderProjects();

    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor animation
    const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    };
    animateCursor();
    
    // Cursor hover effects
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, select');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(0)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
    
    // CV Popup (only on pages where it exists)
    const cvPopup = document.getElementById('cvPopup');
    const cvPopupClose = document.getElementById('cvPopupClose');
    
    if (cvPopup && cvPopupClose) {
        let popupShown = false;
        let popupClosed = false;
        
        // Show popup after scrolling 30% of the page
        const showPopupOnScroll = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            if (scrollPercentage > 30 && !popupShown && !popupClosed) {
                cvPopup.classList.add('show');
                popupShown = true;
            }
        };
        
        // Close popup functionality
        const closePopup = () => {
            cvPopup.classList.remove('show');
            popupClosed = true;
        };
        
        cvPopupClose.addEventListener('click', closePopup);
        
        // Add popup elements to cursor hover effects
        const popupElements = cvPopup.querySelectorAll('button, a');
        popupElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        window.addEventListener('scroll', showPopupOnScroll);
    }
    
    // Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
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
