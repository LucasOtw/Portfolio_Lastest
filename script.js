document.addEventListener('DOMContentLoaded', () => {
    // Project Data Configuration
    const PROJECTS_DATA = [
        {
            id: "tomexplore",
            title: "TomExplore — Concevoir l'expérience de planification de voyage",
            description: "Comment simplifier la planification de voyage pour des utilisateurs pressés ? Recherche utilisateur, prototypage itératif et design d'interaction haptique pour créer une expérience mobile intuitive.",
            longDescription: "Comment simplifier la planification de voyage pour des utilisateurs pressés ? Ce projet m'a permis de mener un processus complet de design : recherche utilisateur, wireframes, prototypes interactifs sur Figma, tests et itérations. J'ai conçu et intégré des retours haptiques pour améliorer la perception des interactions tactiles.",
            image: "images/TomExplore.jpeg",
            tags: ["React", "Ionic", "Figma"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            category: "entreprise",
            categoryDisplay: "Entreprise",
            imgClass: "img-tomexplore",
            caseStudy: {
                challenge: "Les utilisateurs passent en moyenne 3 à 5 heures à planifier un voyage. TomExplore devait réduire ce temps à quelques minutes, avec une expérience mobile fluide et engageante.",
                role: "UX/UI Designer & Développeur Front-end — en charge de la recherche utilisateur, du design d'interface et de l'intégration.",
                duration: "6 mois (stage) + alternance",
                process: [
                    {
                        step: "Recherche",
                        title: "Comprendre les voyageurs",
                        description: "Entretiens avec 10+ utilisateurs potentiels pour identifier les pain points de la planification de voyage. Création de personas et cartographie du parcours utilisateur."
                    },
                    {
                        step: "Idéation",
                        title: "Explorer les solutions",
                        description: "Sessions de sketching et wireframing basse fidélité. Exploration de différents flows de navigation et architectures d'information."
                    },
                    {
                        step: "Prototypage",
                        title: "Donner forme au design",
                        description: "Prototypes interactifs haute fidélité sur Figma. Intégration de retours haptiques pour renforcer la perception des interactions tactiles (swipe, validation, transitions)."
                    },
                    {
                        step: "Tests & Itération",
                        title: "Valider avec les utilisateurs",
                        description: "Tests utilisateurs sur prototype, itérations basées sur les retours. Ajustements de la hiérarchie visuelle et des micro-interactions."
                    }
                ],
                results: [
                    "Interface testée et validée par des utilisateurs réels",
                    "Retours haptiques intégrés pour améliorer l'engagement tactile",
                    "Design system documenté pour assurer la cohérence",
                    "Application déployée et utilisée en production"
                ],
                learnings: "Ce projet m'a appris l'importance de tester tôt et souvent. Les retours haptiques, initialement considérés comme un détail, se sont révélés être un différenciateur clé de l'expérience utilisateur."
            },
            designProcess: {
                description: "Design complet sur Figma, du wireframe au prototype interactif.",
                screens: [
                    {
                        name: "Écran d'accueil",
                        maquette: "images/mockups/tomexplore-home-maquette.png",
                        resultat: "images/mockups/home2.png"
                    },
                    {
                        name: "Page Explorer",
                        maquette: "images/mockups/tomexplore-explorer-maquette.png",
                        resultat: "images/mockups/home1.png"
                    }
                ]
            }
        },
        {
            id: "tripenarvor",
            title: "TripEnArvor — Plateforme d'activités touristiques",
            description: "Concevoir une interface collaborative pour découvrir et partager des activités en Bretagne. Maquettage Figma, approche centrée utilisateur et itérations sur l'expérience de recherche.",
            longDescription: "TripEnArvor est une plateforme collaborative permettant aux utilisateurs de découvrir et de partager des activités touristiques et culturelles en Bretagne. J'ai mené le maquettage complet sous Figma avec une approche centrée utilisateur, avant de développer l'interface responsive.",
            image: "images/tripenarvor.png",
            tags: ["Php", "Css", "Figma", "Agile"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            category: "universitaire",
            categoryDisplay: "Universitaire",
            caseStudy: {
                challenge: "Créer une plateforme web où les habitants et touristes peuvent facilement découvrir et partager des activités en Bretagne, avec une expérience de recherche intuitive et un système de publication accessible.",
                role: "UX/UI Designer & Développeur Full-stack — maquettage complet, développement front-end et back-end.",
                duration: "Projet universitaire — 4 mois",
                process: [
                    {
                        step: "Recherche",
                        title: "Analyse des besoins",
                        description: "Étude des plateformes existantes (TripAdvisor, Le Routard) pour identifier les points de friction. Définition des besoins utilisateurs : recherche rapide, publication simple, navigation par localisation."
                    },
                    {
                        step: "Conception",
                        title: "Maquettage sous Figma",
                        description: "Wireframes basse fidélité puis maquettes haute fidélité. Travail sur l'architecture d'information et la hiérarchie visuelle pour mettre en avant les activités."
                    },
                    {
                        step: "Développement",
                        title: "Intégration responsive",
                        description: "Développement de l'interface en HTML/CSS/PHP avec une approche mobile-first. Système de filtres par géolocalisation et catégories."
                    },
                    {
                        step: "Itération",
                        title: "Retours et ajustements",
                        description: "Tests avec les membres de l'équipe et ajustements de l'interface basés sur les retours. Amélioration de la lisibilité et de la navigation."
                    }
                ],
                results: [
                    "Interface maquettée et développée de A à Z",
                    "Expérience de recherche fluide par ville et catégorie",
                    "Design responsive testé sur mobile et desktop",
                    "Projet livré dans les délais en méthode Agile"
                ],
                learnings: "Premier projet où j'ai pu mener le design de bout en bout. J'ai compris l'importance de maquetter avant de coder — les itérations sur Figma sont bien plus rapides que dans le code."
            },
            designProcess: {
                description: "Maquettage complet sous Figma avec une approche centrée utilisateur.",
                screens: [
                    {
                        name: "Page d'accueil",
                        maquette: "images/mockups/tripenarvor-home-maquette.png",
                        resultat: "images/mockups/tripenarvor-home-resultat.png"
                    },
                    {
                        name: "Page activité",
                        maquette: "images/mockups/tripenarvor-activite-maquette.png",
                        resultat: "images/mockups/tripenarvor-activite-resultat.png"
                    }
                ]
            }
        },
        {
            id: "deeppace",
            title: "DeepPace — Dashboard analytique pour sportifs",
            description: "Concevoir un tableau de bord lisible et engageant pour visualiser des données sportives complexes. Travail sur la hiérarchie visuelle, la data visualization et l'expérience utilisateur.",
            longDescription: "DeepPace est un tableau de bord analytique avancé pour les coureurs et cyclistes utilisant Strava. Le défi principal : rendre des données complexes lisibles et engageantes à travers une hiérarchie visuelle claire et des graphiques interactifs.",
            image: "images/deeppace.png",
            tags: ["Vue.JS", "Laravel", "API"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            category: "perso",
            categoryDisplay: "Personnel",
            caseStudy: {
                challenge: "Les sportifs utilisant Strava accumulent des montagnes de données mais peinent à en extraire des insights utiles. Comment rendre ces données complexes lisibles, engageantes et actionnables ?",
                role: "Designer & Développeur Full-stack — conception de la data visualization et développement.",
                duration: "Projet personnel — en cours",
                process: [
                    {
                        step: "Recherche",
                        title: "Comprendre les sportifs",
                        description: "Analyse des besoins des coureurs et cyclistes : quelles métriques comptent vraiment ? Étude des dashboards existants (Strava, Garmin Connect) pour identifier les manques."
                    },
                    {
                        step: "Conception",
                        title: "Hiérarchie visuelle des données",
                        description: "Travail sur la priorisation de l'information : les données les plus importantes en premier, les détails accessibles en profondeur. Choix des types de graphiques adaptés à chaque métrique."
                    },
                    {
                        step: "Prototypage",
                        title: "Maquettes du dashboard",
                        description: "Prototypage des vues principales : tableau de bord synthétique, analyse détaillée par activité, comparaison des performances dans le temps."
                    },
                    {
                        step: "Développement",
                        title: "Intégration & data visualization",
                        description: "Développement avec Vue.js et Laravel, intégration de l'API Strava. Création de graphiques interactifs avec gestion des états de chargement."
                    }
                ],
                results: [
                    "Dashboard lisible avec hiérarchie visuelle claire",
                    "Graphiques interactifs adaptés à chaque type de donnée",
                    "Connexion sécurisée via l'API Strava",
                    "Interface responsive pour consultation mobile"
                ],
                learnings: "La data visualization est un exercice de design à part entière. Le choix du bon type de graphique peut transformer une donnée confuse en un insight immédiatement compréhensible."
            }
        },
        {
            id: "streaming",
            title: "Plateforme de streaming",
            description: "Comment concevoir une interface de streaming claire et intuitive sur tous les écrans ? Responsive design, hiérarchie de contenu et navigation simplifiée pour une expérience fluide multi-appareils.",
            longDescription: "Conception et développement d'un site de streaming multi-appareils. Le projet met l'accent sur la hiérarchie visuelle du contenu, le responsive design pour une expérience fluide sur tous les écrans, et une navigation simplifiée. Maquettage complet sous Figma avant intégration.",
            features: [
                "Responsive design multi-appareils",
                "Hiérarchie visuelle et navigation intuitive",
                "Maquettage complet sous Figma",
                "Gestion du versionnage"
            ],
            image: "images/streaming.png",
            tags: ["HTML/CSS", "Figma", "Trello"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            category: "universitaire",
            categoryDisplay: "Universitaire",
            roles: [
                "Conception UX/UI",
                "Développement Front-end",
                "Gestion de projet"
            ]
        },
        {
            id: "sudoku",
            title: "Jeu interactif Sudoku",
            description: "Conception d'un jeu interactif en C avec génération de documentation automatique. Design de l'interface et optimisation du programme.",
            longDescription: "Conception d'un jeu interactif en C avec génération de documentation automatique via Doxygen. Le projet combine design de l'interface terminal et optimisation algorithmique, avec un générateur de grilles et un solveur intégré utilisant le backtracking.",
            features: [
                "Génération de grilles à difficulté variable",
                "Solveur automatique performant",
                "Design de l'interface terminal",
                "Documentation automatique avec Doxygen"
            ],
            image: "images/sudoku.png",
            tags: ["C", "Figma", "Doxygen"],
            repoLink: "https://github.com/LucasOtw",
            liveLink: "#",
            imgClass: "img-hue-1",
            category: "universitaire",
            categoryDisplay: "Universitaire",
            roles: [
                "Développement C",
                "Design d'interface",
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
        "Jekyll": { url: "https://cdn.simpleicons.org/jekyll/CC0000", label: "Jekyll" },
        "Trello": { url: "https://cdn.simpleicons.org/trello/0052CC", label: "Trello" }
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

            article.innerHTML = `
                <a href="project.html?id=${project.id}" class="case-study-link">
                    <div class="case-study-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy"${imgClass}>
                    </div>
                    <div class="case-study-info">
                        <span class="case-study-category">${project.categoryDisplay}</span>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <span class="case-study-cta">Voir l'étude de cas &rarr;</span>
                    </div>
                </a>
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

                    ${project.designProcess ? `
                    <div class="design-process-section">
                        <h2>Maquettage</h2>
                        <p class="design-process-desc">${project.designProcess.description}</p>

                        <div class="design-screens">
                            ${project.designProcess.screens.map(screen => `
                                <div class="design-screen-block">
                                    <h3>${screen.name}</h3>
                                    <div class="comparison-slider">
                                        <div class="comparison-image comparison-after">
                                            <img src="${screen.resultat}" alt="${screen.name} — Résultat" loading="lazy">
                                        </div>
                                        <div class="comparison-image comparison-before">
                                            <img src="${screen.maquette}" alt="${screen.name} — Maquette" loading="lazy">
                                        </div>
                                        <input type="range" min="0" max="100" value="50" class="comparison-range" aria-label="Comparer maquette et résultat pour ${screen.name}">
                                        <div class="comparison-handle">
                                            <div class="comparison-handle-line"></div>
                                            <div class="comparison-handle-circle">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="15 18 9 12 15 6"></polyline>
                                                </svg>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            </div>
                                            <div class="comparison-handle-line"></div>
                                        </div>
                                        <div class="comparison-label comparison-label-before">Maquette</div>
                                        <div class="comparison-label comparison-label-after">Résultat</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
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

    // Initialize Comparison Sliders
    const initComparisonSliders = () => {
        document.querySelectorAll('.comparison-slider').forEach(slider => {
            const range = slider.querySelector('.comparison-range');
            const before = slider.querySelector('.comparison-before');
            const handle = slider.querySelector('.comparison-handle');

            if (!range || !before || !handle) return;

            const updateSlider = (value) => {
                before.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
                handle.style.left = value + '%';
            };

            updateSlider(range.value);

            range.addEventListener('input', (e) => {
                updateSlider(e.target.value);
            });
        });
    };
    initComparisonSliders();

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
