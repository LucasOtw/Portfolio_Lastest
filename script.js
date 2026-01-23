document.addEventListener('DOMContentLoaded', () => {
    // Project Data Configuration
    const PROJECTS_DATA = [
        {
            id: "tripenarvor",
            title: "TripEnArvor",
            description: "Un site web pour trouver et poster des activités dans des villes françaises.",
            longDescription: "TripEnArvor est une plateforme collaborative permettant aux utilisateurs de découvrir et de partager des activités touristiques et culturelles en Bretagne. Conçu pour valoriser le patrimoine local, le site offre une interface intuitive pour rechercher des points d'intérêt par ville ou par catégorie.",
            features: [
                "Recherche d'activités par géolocalisation",
                "Système de publication d'annonces par les utilisateurs",
                "Gestion de profil et favoris",
                "Interface responsive et accessible"
            ],
            image: "images/tripenarvor.png",
            tags: ["Php", "Css", "Figma", "Agile"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            category: "universitaire",
            categoryDisplay: "Universitaire",
            roles: [
                "Maquettage de l'interface",
                "Développement Front-end",
                "Développement Back-end"
            ]
        },
        {
            id: "tomexplore",
            title: "TomExplore",
            description: "Application pour créer son voyage en Europe en 2min !",
            longDescription: "TomExplore révolutionne la planification de voyage en permettant de générer un itinéraire complet en quelques minutes. L'application utilise des algorithmes intelligents pour suggérer des parcours adaptés aux préférences de l'utilisateur, tout en facilitant la réservation et l'organisation.",
            features: [
                "Générateur d'itinéraire intelligent",
                "Intégration de cartes interactives",
                "Synchronisation multi-plateforme (Mobile/Web)",
                "Aprend à vous connaitre"
            ],
            image: "images/TomExplore.jpeg",
            tags: ["Ionic", "React", "Figma", "Css", "Clickup"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            category: "entreprise",
            categoryDisplay: "Entreprise",
            imgClass: "img-tomexplore",
            roles: [
                "Design UX/UI",
                "Développement Mobile",
                "Intégration API"
            ]
        },
        {
            id: "deeppace",
            title: "DeepPace",
            description: "Tableau de bord avec analyse de vos données Strava",
            longDescription: "DeepPace est un tableau de bord analytique avancé pour les coureurs et cyclistes utilisant Strava. Il permet de visualiser la progression, d'analyser les zones de fréquence cardiaque et de prédire les performances futures grâce à des modèles de données personnalisés.",
            features: [
                "Connexion sécurisée via l'API Strava",
                "Graphiques interactifs de performance",
                "Analyse des tendances sur le long terme",
                "Comparaison avec les objectifs personnels"
            ],
            image: "images/deeppace.png",
            tags: ["Vue.JS", "Laravel", "API"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            category: "perso",
            categoryDisplay: "Personnel",
            roles: [
                "Architecture Fullstack",
                "Développement Front-end",
                "Visualisation de données"
            ]
        },
        {
            id: "sudoku",
            title: "Sudoku",
            description: "Un jeu de Sudoku en C directement dans le terminal.",
            longDescription: "Une implémentation complète et optimisée du jeu de Sudoku en langage C. Ce projet met l'accent sur l'efficacité algorithmique, avec un générateur de grilles aléatoires et un solveur intégré utilisant le backtracking.",
            features: [
                "Génération de grilles à difficulté variable",
                "Solveur automatique performant",
                "Interface en ligne de commande soignée",
                "Documentation complète avec Doxygen"
            ],
            image: "images/sudoku.png",
            tags: ["C", "Terminal", "Doxygen", "Algo"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            imgClass: "img-hue-1",
            category: "perso",
            categoryDisplay: "Personnel",
            roles: [
                "Développement C",
                "Algorithmique",
                "Documentation"
            ]
        },
        {
            id: "taskmaster",
            title: "Task Master App",
            description: "Application de gestion de productivité avec mode focus et statistiques.",
            longDescription: "Task Master est bien plus qu'une simple 'To-Do List'. C'est un outil de productivité complet intégrant la méthode Pomodoro, des statistiques d'achèvement de tâches et un mode 'Focus' pour minimiser les distractions.",
            features: [
                "Gestion de tâches par projets et priorités",
                "Minuteur Pomodoro intégré",
                "Statistiques hebdomadaires de productivité",
                "Synchronisation temps réel avec Firebase"
            ],
            image: "images/project2.svg",
            tags: ["Svelte", "Firebase"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            imgClass: "img-hue-2",
            category: "perso",
            categoryDisplay: "Personnel",
            roles: [
                "Développement Front-end",
                "Intégration Firebase",
                "Design UI"
            ]
        }
    ];

    // Tech Icons Configuration
    const TECH_ICONS = {
        "React": { url: "https://cdn.simpleicons.org/react/2563eb", label: "React" },
        "Ionic": { url: "https://cdn.simpleicons.org/ionic/3880FF", label: "Ionic" },
        "Figma": { url: "https://cdn.simpleicons.org/figma/F24E1E", label: "Figma" },
        "Css": { url: "https://cdn.simpleicons.org/css/1572B6", label: "CSS3" },
        "Clickup": { url: "https://cdn.simpleicons.org/clickup/7B68EE", label: "ClickUp" },
        "Php": { url: "https://cdn.simpleicons.org/php/777BB4", label: "PHP" },
        "Agile": { url: "https://cdn.simpleicons.org/jira/0052CC", label: "Agile" }, // Using Jira icon as proxy
        "Vue.JS": { url: "https://cdn.simpleicons.org/vuedotjs/4FC08D", label: "Vue.js" },
        "Laravel": { url: "https://cdn.simpleicons.org/laravel/FF2D20", label: "Laravel" },
        "API": { url: "https://cdn.simpleicons.org/postman/FF6C37", label: "API" },
        "C": { url: "https://cdn.simpleicons.org/c/A8B9CC", label: "C" },
        "Terminal": { url: "https://cdn.simpleicons.org/gnubash/4EAA25", label: "Terminal" },
        "Doxygen": { url: "https://cdn.simpleicons.org/doxygen/2C8893", label: "Doxygen" },
        "Algo": { url: "https://cdn.simpleicons.org/leetcode/FFA116", label: "Algo" },
        "Svelte": { url: "https://cdn.simpleicons.org/svelte/FF3E00", label: "Svelte" },
        "Firebase": { url: "https://cdn.simpleicons.org/firebase/FFCA28", label: "Firebase" },
        "HTML/CSS": { url: "https://cdn.simpleicons.org/html5/E34F26", label: "HTML/CSS" },
        "Jekyll": { url: "https://cdn.simpleicons.org/jekyll/CC0000", label: "Jekyll" }
    };

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

        // Check if on home page to limit to 3 projects
        const isHomePage = globalThis.location.pathname.endsWith('index.html') || globalThis.location.pathname === '/' || globalThis.location.pathname.endsWith('/');
        const projectsToShow = isHomePage ? PROJECTS_DATA.slice(0, 3) : PROJECTS_DATA;

        projectsToShow.forEach(project => {
            const article = document.createElement('article');
            article.className = 'project-card fade-in-on-scroll';
            article.dataset.category = project.category;
            
            const imgClass = project.imgClass ? ` class="${project.imgClass}"` : '';
            const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');
            
            const badgeHtml = project.categoryDisplay ? `<span class="project-badge">${project.categoryDisplay}</span>` : '';

            article.innerHTML = `
                <a href="project.html?id=${project.id}" class="project-image-link">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy"${imgClass}>
                        ${badgeHtml}
                    </div>
                </a>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags">
                        ${tagsHtml}
                    </div>
                    <a href="project.html?id=${project.id}" class="project-link">Voir le projet &rarr;</a>
                </div>
            `;

            projectsContainer.appendChild(article);
            
            // Observe the newly created element
            observer.observe(article);
        });
    };

    // Render Project Details Function
    const renderProjectDetails = () => {
        const detailsContainer = document.getElementById('project-details-container');
        if (!detailsContainer) return;

        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');

        if (!projectId) {
            detailsContainer.innerHTML = '<p class="error-message">Projet non spécifié.</p>';
            return;
        }

        const project = PROJECTS_DATA.find(p => p.id === projectId);

        if (!project) {
            detailsContainer.innerHTML = '<p class="error-message">Projet introuvable.</p>';
            return;
        }

        // Update page title
        document.title = `${project.title} | Lucas Torres`;

        const featuresHtml = project.features ? 
            `<ul class="project-features-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
             </ul>` : '';

        const rolesHtml = project.roles ? 
            `<ul class="project-features-list">
                ${project.roles.map(role => `<li>${role}</li>`).join('')}
             </ul>` : '';
        
        const imgClass = project.imgClass ? ` class="${project.imgClass}"` : '';
        
        // Generate Tech Cards
        const techCardsHtml = project.tags.map(tag => {
            const tech = TECH_ICONS[tag] || { url: "", label: tag }; // Fallback if no icon found
            if (!tech.url) return ''; // Skip if no icon
            return `
                <div class="tech-card">
                    <div class="tech-icon">
                        <img src="${tech.url}" alt="${tech.label} Logo">
                    </div>
                    <h3>${tech.label}</h3>
                </div>
            `;
        }).join('');

        detailsContainer.innerHTML = `
            <div class="project-header-content">
                <span class="project-category-badge">${project.categoryDisplay}</span>
                <h1 class="project-title">${project.title}</h1>
            </div>

            <div class="project-banner-image">
                <img src="${project.image}" alt="${project.title}"${imgClass}>
            </div>

            <div class="project-content-grid">
                <div class="project-main-info">
                    <h2>À propos du projet</h2>
                    <p class="project-long-description">${project.longDescription || project.description}</p>
                    
                    ${featuresHtml ? `
                        <div class="project-features">
                            <h3>Fonctionnalités clés</h3>
                            ${featuresHtml}
                        </div>
                    ` : ''}

                    ${rolesHtml ? `
                        <div class="project-features">
                            <h3>Mon rôle</h3>
                            ${rolesHtml}
                        </div>
                    ` : ''}

                    <div class="project-technologies">
                        <h3>Technologies utilisées</h3>
                        <div class="tech-grid">
                            ${techCardsHtml}
                        </div>
                    </div>
                </div>

                <div class="project-sidebar">
                    <div class="sidebar-links">
                        ${project.liveLink && project.liveLink !== '#' ? `
                        <a href="${project.liveLink}" target="_blank" class="minimal-link">
                            <span class="link-icon">↗</span>
                            <div class="link-text">
                                <span class="link-title">Voir le site</span>
                                <span class="link-subtitle">Live Preview</span>
                            </div>
                        </a>` : ''}
                        
                        ${project.repoLink && project.repoLink !== '#' ? `
                        <a href="${project.repoLink}" target="_blank" class="minimal-link">
                            <span class="link-icon">
                                <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                            </span>
                            <div class="link-text">
                                <span class="link-title">GitHub</span>
                                <span class="link-subtitle">Source Code</span>
                            </div>
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `;
    };

    // Initialize Projects
    renderProjects();
    renderProjectDetails();

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
