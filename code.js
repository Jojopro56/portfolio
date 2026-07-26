/* ===================================================================
SCRIPT: code.js
Dynamic Routing Engine, Interactive Background Movement & Asset Mapper
=================================================================== */

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        modular: {
          cream: '#FAF6F0',
          dark: '#102E20',
          darkHover: '#1d4434',
          blue: '#CBDCF7',
          card: '#FFFFFF',
          border: '#E8E2D9',
          muted: '#526D61',
        }
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    }
  }
};

/**
 * MASTER PROJECTS DATABASE
 */
const PROJECTS_DATABASE = [
  {
    id: "porsche-992-gt3rs",
    category: "AUTOMOTIVE",
    title: "Porsche 992 GT3RS",
    subtitle: "A private shoot for high-impact social media cataloging",
    thumbnail: "./img/projects/porschegt3rs/thumbCompressed-gt3rs.jpg",
    description: "A private shoot for social media content.",
    longDescription: "Working closely with high-end sports car enthusiasts, this catalog shoot was executed under premium golden hour light on a racing track. Special care was given to highlight active aero parts, mechanical vents, and the premium lightweight carbon chassis, producing striking portfolio content.",
    date: "2026-04",
    dateFormatted: "April 2026",
    deliverables: ["Automotive Photography", "Location Scouting", "Color Workflows"],
    client: "Silvery Media Showcase",
    externalUrl: "https://silvery.myportfolio.com/porsche-992-gt3rs"
  },
  {
    id: "hollow",
    category: "SHORT FILM",
    title: "HOLLOW",
    subtitle: "An award winning music video project on drug use and its consequences",
    thumbnail: "./img/projects/HOLLOW/thumbHOLLOW.png",
    description: "An award winning music video project on drug use and it's consequences.",
    longDescription: "Set to the haunting backdrop of 'Hollow' by Zachy, this music video is a raw, visual exploration of escapism and consequence. The film dives deep into a poignant question: What happens when someone tries to surgically remove their own emotions through substance abuse? Through deliberate lighting and visceral cinematography, the video physically manifests the feeling of emotional numbness and the chaotic, inevitable spiral that follows.\n\nConceived as a passion project specifically for the 2026 Northwest Missouri State University Film Festival, the entire video was brought to life in a demanding two-week window.",
    date: "2026-03",
    dateFormatted: "March 2026",
    deliverables: ["Cinematography", "In-Camera Lighting", "Directing"],
    client: "2026 NWMSU Film Festival",
    driveId: "1AnuXNHljabPF_WdoRClFuk__Ix2Ssvod",
    videoNotice: "This video contains copyrighted music and is hosted via Google Drive.",
    btsImages: [
      "./img/projects/HOLLOW/lights.jpg",
      "./img/projects/HOLLOW/car.jpg",
      "./img/projects/HOLLOW/cast.jpg"
    ]
  },
  {
    id: "blikveld",
    category: "DOCUMENTARY",
    title: "BLIKVELD",
    subtitle: "A high-impact short documentary capturing hidden youth struggles",
    thumbnail: "./img/projects/blikveld/bg_thumb.png",
    description: "In an area notorious for crime and youth problems, young individuals tell their story in front of the camera.",
    longDescription: "BLIKVELD is a Documentary Short Film that dives into the struggles and daily lives of several young individuals. They live in an area called 'De Westelijke Mijnstreek' located in Limburg, The Netherlands which is notorious for high crime rates, and youth problems.",
    date: "2026-01",
    dateFormatted: "January 2026",
    deliverables: ["Directing", "Live Interviews", "Societal Engagement Strategy"],
    client: "Dutch Cultural Fund",
    videos: [
      { title: "Originele Versie (OV)", youtubeId: "9GgFJyE18zM" },
      { title: "English Subtitles", youtubeId: "Z4Ecm_Cqjzc" }
    ],
    btsImages: [
      "./img/projects/blikveld/theplace_bts.jpeg",
      "./img/projects/blikveld/cce_bts.jpg",
      "./img/projects/blikveld/boa_bts.webp"
    ]
  },
  {
    id: "tired",
    category: "SHORT FILM",
    title: "Tired",
    subtitle: "A visceral look at agrarian weariness",
    thumbnail: "./img/projects/tired/thumbTired.png",
    description: "A tired farmer comes home from work, and is getting ready for some sleep. Will he get the rest that he deserves?",
    longDescription: "Tired was part of a school assignment and required me to use some advanced methods of moving the camera. Think of a 'Dolly forward while panning the camera to the right to follow a passing car' or 'Mounting the camera on a fluidhead tripod to pan it towards different directions' which conveys a sequenced story within a single scene. The movie is about a tired farmer coming home after a long work day longing for some rest. Throughout the evening he starts to notice his tiredness as peculiar things start to happen.",
    date: "2025-04",
    dateFormatted: "April 2025",
    deliverables: ["Creative Pacing", "Practical Effects", "Dolly Camera Work"],
    client: "Agrarian Film Collective",
    youtubeId: "c6omRkkZbSk",
    btsImages: [
      "./img/projects/tired/kitchen.png",
      "./img/projects/tired/dolly.png"
    ]
  },
  {
    id: "ford-mustang-gt",
    category: "AUTOMOTIVE",
    title: "Ford Mustang GT",
    subtitle: "Dynamic muscle capture session",
    thumbnail: "./img/projects/AJmustang/AJ_Mustang-01.jpg",
    description: "A private shoot for social media content.",
    longDescription: "A clean, custom catalog shoot focusing on the aggressive design language and raw V8 engine mechanics of the Ford Mustang GT.",
    date: "2025-02",
    dateFormatted: "February 2025",
    deliverables: ["Product Photography", "Dynamic Framing", "Lighting Grids"],
    client: "Private Collector",
    externalUrl: "https://silvery.myportfolio.com/ford-mustang-gt"
  },
  {
    id: "isaiah-crawford-reel",
    category: "HYPE REEL",
    title: "Isaiah Crawford Basketball Reel",
    subtitle: "Sports hype action reel with focus tracking",
    thumbnail: "./img/projects/isaiah/Isaiah_thumb.png",
    description: "A basketball hype reel for Isaiah Crawford.",
    longDescription: "This hype reel was part of a school assignment and required me to play with focus racking and manual focus. For this setup I used a Sony FX30 paired with a PDMovie Live Air wireless focus motor. At the end there's a (at the time) trending 'signature on lens' shot that I created with two magic arms and a clamp for the plexi glass to give the illusion that Isaiah is writing on the lens.",
    date: "2025-02",
    dateFormatted: "February 2025",
    deliverables: ["Sports Editing", "Focus Racking", "Rhythm Syncing"],
    client: "Sports Division Recruiting",
    vimeoId: "1112976628",
    btsImages: [
      "./img/projects/isaiah/setup.jpg",
      "./img/projects/isaiah/pdmovie.jpg"
    ]
  },
  {
    id: "startup-toolkit",
    category: "CORPORATE VIDEO",
    title: "The Start-up Toolkit",
    subtitle: "Program development explainer series",
    thumbnail: "./img/projects/startup-toolkit/thumbnail.png",
    description: "Development of a comprehensive toolkit. A 'HIGHTECHXL' Project.",
    longDescription: "The Startup Toolkit was designed as a resource for early-stage companies to help them navigate their growth journey. As part of my role at HighTechXL, I collaborated with the team to identify key challenges faced by startups and curated a set of practical tools and materials to address those challenges.",
    date: "2024-12",
    dateFormatted: "December 2024",
    deliverables: ["Video Explainer", "Content Creation", "Communication Strategy"],
    client: "HighTechXL Program",
    videos: [
      { title: "Part 1: Sign-Up", youtubeId: "Cq4frazBMpU" },
      { title: "Part 2: Pre-Program", youtubeId: "9RTRZPYlfKI" },
      { title: "Part 3: The Program", youtubeId: "AbaTJFbVxMs" }
    ],
    btsImages: [
      "./img/projects/startup-toolkit/bts-1.png",
      "./img/projects/startup-toolkit/thumbnail-2.jpg"
    ]
  },
  {
    id: "htxl-program-interviews",
    category: "CORPORATE VIDEO",
    title: "HTXL Program Interviews",
    subtitle: "Insightful alumni conversations",
    thumbnail: "./img/projects/htxl-program-interviews/rick.png",
    description: "Insightful and informational interviews with HighTechXL alumni. A 'HIGHTECHXL' Project.",
    longDescription: "For the HighTechXL program, I organized and conducted interviews with alumni to showcase their journeys, successes, and experiences within the program. I took charge of every aspect of production, from planning the interview structure and coordinating schedules to setting up the filming process and managing post-production.",
    date: "2024-11",
    dateFormatted: "November 2024",
    deliverables: ["Multi-Cam Directing", "Schedule Coordination", "Post-Production Management"],
    client: "HighTechXL",
    videos: [
      { title: "Interview Erik VitalWear", youtubeId: "rxjBSgiwZnc" },
      { title: "Interview INNER", youtubeId: "bfgZGZJx46s" },
      { title: "Interview Rick Spectrik", youtubeId: "8gcCFa532zU" }
    ],
    btsImages: [
      "./img/projects/htxl-program-interviews/joey-headset.jpg",
      "./img/projects/htxl-program-interviews/inner.png",
      "./img/projects/htxl-program-interviews/interview-erik.jpg"
    ]
  },
  {
    id: "foto-htxl-event",
    category: "PHOTO",
    title: "HTXL Event Photography",
    subtitle: "Documenting innovation, founders, and startup milestones",
    thumbnail: "./img/projects/foto-htxl/ASML_matchmaking-01.jpg",
    description: "Some of my Photography work at HighTechXL. A 'HIGHTECHXL' Project.",
    longDescription: "As a photographer at HighTechXL, I documented the vibrant energy of startups, founders, and events through dynamic and meaningful visuals. From capturing champagne celebrations to showcasing pivotal moments, my work highlighted the human side of innovation and collaboration. Each photo was crafted to tell a story, bringing the groundbreaking ideas of HighTechXL to life.",
    date: "2024-06",
    dateFormatted: "June 2024",
    deliverables: ["Event Stills", "Corporate Portraits", "Documentary Photography"],
    client: "HighTechXL & ASML Partnerships",
    galleryTitle: "EVENT PHOTO GALLERY",
    galleryImages: [
      "./img/projects/foto-htxl/ASML_matchmaking-01.jpg",
      "./img/projects/foto-htxl/ASML_matchmaking-08.jpg",
      "./img/projects/foto-htxl/ASML_matchmaking-20.jpg",
      "./img/projects/foto-htxl/ASML_talent-10.jpg",
      "./img/projects/foto-htxl/ASML_talent-16.jpg",
      "./img/projects/foto-htxl/boards-business-1.jpg",
      "./img/projects/foto-htxl/deal_sonicprecision-05.jpg",
      "./img/projects/foto-htxl/experience_xl-01.jpg",
      "./img/projects/foto-htxl/experience_xl-03.jpg",
      "./img/projects/foto-htxl/HTXLTEAM-5.jpg",
      "./img/projects/foto-htxl/InPhocal-newOffice-15.jpg",
      "./img/projects/foto-htxl/InPhocal-newOffice-19.jpg",
      "./img/projects/foto-htxl/joris-2.jpg",
      "./img/projects/foto-htxl/partners-2.jpg",
      "./img/projects/foto-htxl/partners-3.jpg",
      "./img/projects/foto-htxl/techbriefing_mainEvent-01.jpg",
      "./img/projects/foto-htxl/techbriefing_mainEvent-04.jpg",
      "./img/projects/foto-htxl/VitalWear-15.jpg",
      "./img/projects/foto-htxl/VitalWear-22.jpg",
      "./img/projects/foto-htxl/VitalWear-26.jpg",
      "./img/projects/foto-htxl/VitalWear-32.jpg",
      "./img/projects/foto-htxl/working (13).jpg",
      "./img/projects/foto-htxl/working (16).jpg"
    ]
  },
  {
    id: "dit-is-een-noodgeval",
    category: "DOCUMENTARY",
    title: "Dit is een Noodgeval",
    subtitle: "Mini doc explaining Dutch emergency tools",
    thumbnail: "./img/projects/noodgeval/thumb2.png",
    description: "A comprehensive mini documentary that covers a Dutch national emergency alert app.",
    longDescription: "This mini documentary covers a Dutch national emergency alert app, and what its advantages are. This was my first documentary I ever directed and worked on with an actual film crew back in 2023. It taught me about the process and challenges of developing a motion picture for the first time.",
    date: "2023-06",
    dateFormatted: "June 2023",
    deliverables: ["Explainer Script", "Film Crew Directing", "Research & Sourcing"],
    client: "National Security Watch",
    youtubeId: "_Hfhh0YPog0"
  }
];

function getSortedProjects() {
  return [...PROJECTS_DATABASE].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * LIQUID PAGE TRANSITION ROUTER ENGINE
 */
let isTransitioning = false;

function routePage() {
  if (isTransitioning) return;
  
  const hash = window.location.hash || '#/';
  const activeViews = document.querySelectorAll('.page-view:not(.hidden)');
  
  if (activeViews.length > 0) {
    isTransitioning = true;
    activeViews.forEach(view => {
      view.classList.remove('active-page');
      view.style.opacity = '0';
      view.style.transform = 'translateY(-15px)';
    });
    
    setTimeout(() => {
      completeRouting(hash);
    }, 350);
  } else {
    completeRouting(hash);
  }
}

function completeRouting(hash) {
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.add('hidden');
    view.style.opacity = '0';
    view.style.transform = 'translateY(20px)';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('nav-link-active', 'text-modular-dark');
    link.classList.add('text-modular-dark/70');
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.classList.remove('text-modular-dark');
  });

  let targetPage = 'home';

  if (hash.startsWith('#/project/')) {
    const projectId = hash.replace('#/project/', '');
    renderProjectDetails(projectId);
    const detailView = document.getElementById('page-project-details');
    detailView.classList.remove('hidden');
    
    setTimeout(() => {
      detailView.classList.add('active-page');
      detailView.style.opacity = '1';
      detailView.style.transform = 'translateY(0)';
      isTransitioning = false;
    }, 50);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  if (hash === '#/works') {
    targetPage = 'works';
    renderWorksGrid();
  } else if (hash === '#/about') {
    targetPage = 'about';
  } else if (hash === '#/contact') {
    targetPage = 'contact';
    initContactCanvas();
  } else {
    targetPage = 'home';
    renderHomeFeatured();
    initHomeTypewriter();
  }

  const targetElement = document.getElementById(`page-${targetPage}`);
  if (targetElement) {
    targetElement.classList.remove('hidden');
    
    setTimeout(() => {
      targetElement.classList.add('active-page');
      targetElement.style.opacity = '1';
      targetElement.style.transform = 'translateY(0)';
      isTransitioning = false;
      handleRevealAnimations();
    }, 50);
  }

  const desktopLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
  if (desktopLink) {
    desktopLink.classList.add('nav-link-active', 'text-modular-dark');
    desktopLink.classList.remove('text-modular-dark/70');
  }
  const mobileLink = document.querySelector(`.mobile-nav-link[data-page="${targetPage}"]`);
  if (mobileLink) {
    mobileLink.classList.add('text-modular-dark');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', routePage);
window.addEventListener('DOMContentLoaded', () => {
  routePage();
  initBackgroundParallax();
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.className = 'fa-solid fa-bars text-lg';
    } else {
      icon.className = 'fa-solid fa-times text-lg text-modular-dark';
    }
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.querySelector('i').className = 'fa-solid fa-bars text-lg';
    });
  });
}

/**
 * INTERACTIVE BACKGROUND MOVEMENT LOOP
 */
function initBackgroundParallax() {
  const glow1 = document.getElementById('bg-glow-1');
  const glow2 = document.getElementById('bg-glow-2');
  const glow3 = document.getElementById('bg-glow-3');

  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;
  let scrollY = 0, targetScrollY = 0;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth) - 0.5;
    targetMouseY = (e.clientY / window.innerHeight) - 0.5;
  });

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
  });

  function renderLoop() {
    mouseX += (targetMouseX - mouseX) * 0.08;
    mouseY += (targetMouseY - mouseY) * 0.08;
    scrollY += (targetScrollY - scrollY) * 0.1;

    if (glow1) {
      glow1.style.transform = `translate3d(${mouseX * 80}px, ${(mouseY * 80) + (scrollY * -0.15)}px, 0)`;
    }
    if (glow2) {
      glow2.style.transform = `translate3d(${mouseX * -120}px, ${(mouseY * -120) + (scrollY * 0.25)}px, 0)`;
    }
    if (glow3) {
      glow3.style.transform = `translate3d(${mouseX * 50}px, ${(mouseY * 50) + (scrollY * -0.05)}px, 0)`;
    }

    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);
}

/**
 * WORKS RENDER AND AUTOMATION ENGINE
 */
function renderHomeFeatured() {
  const container = document.getElementById('home-works-container');
  if (!container) return;

  const sorted = getSortedProjects();
  const featured = sorted.slice(0, 3);
  
  container.innerHTML = featured.map((proj) => `
    <div class="group rounded-3xl overflow-hidden border border-modular-border bg-white hover:border-modular-dark/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-[480px] shadow-sm hover:shadow-lg reveal-item">
      <div class="relative overflow-hidden h-60">
        <img src="${proj.thumbnail}" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${proj.title}">
        <div class="absolute top-4 left-4 flex gap-2">
          <span class="px-4 py-1.5 text-[9px] uppercase font-bold tracking-widest text-white bg-modular-dark rounded-full">${proj.category}</span>
        </div>
        <div class="absolute bottom-4 right-4">
          <span class="px-3 py-1 text-[9px] uppercase font-bold tracking-wider text-modular-dark bg-white/90 backdrop-blur-sm rounded-full border border-modular-border">${proj.dateFormatted}</span>
        </div>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-display text-xl font-extrabold uppercase tracking-tight text-modular-dark mb-2 group-hover:text-modular-muted transition-colors duration-300">${proj.title}</h3>
          <p class="text-xs text-modular-muted line-clamp-3 leading-relaxed font-medium">${proj.description}</p>
        </div>
        <div class="flex items-center justify-between border-t border-modular-border/50 pt-4 mt-4">
          <span class="text-[10px] font-bold text-modular-muted uppercase">${proj.client}</span>
          <a href="#/project/${proj.id}" class="btn-modular-secondary text-xs !py-2.5 !px-5 !shadow-none hover:!shadow-sm">
            View Frame <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  handleRevealAnimations();
}

function renderWorksGrid() {
  const dropdown = document.getElementById('works-filter');
  const grid = document.getElementById('works-grid-container');
  if (!dropdown || !grid) return;

  const categories = new Set();
  PROJECTS_DATABASE.forEach(p => categories.add(p.category));

  dropdown.innerHTML = '<option value="ALL">ALL CATEGORIES</option>';
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.toUpperCase();
    option.textContent = cat;
    dropdown.appendChild(option);
  });

  filterProjects('ALL');
}

function filterProjects(selectedCategory) {
  const grid = document.getElementById('works-grid-container');
  if (!grid) return;

  const sorted = getSortedProjects();
  const filtered = selectedCategory === 'ALL' 
    ? sorted 
    : sorted.filter(p => p.category === selectedCategory);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full py-20 text-center text-modular-muted font-sans font-bold">No projects compiled in this frame.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(proj => `
    <div class="group relative aspect-video rounded-3xl overflow-hidden border border-modular-border bg-white cursor-pointer shadow-sm hover:shadow-md reveal-item transition-all duration-300" onclick="window.location.hash='#/project/${proj.id}'">
      <img src="${proj.thumbnail}" onerror="this.src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800'" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-90" alt="${proj.title}">
      <div class="absolute inset-0 bg-gradient-to-t from-modular-dark/80 via-modular-dark/20 to-transparent"></div>
      
      <div class="absolute inset-0 p-6 flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <span class="px-4 py-1.5 text-[9px] font-sans font-extrabold uppercase tracking-widest text-modular-dark bg-white rounded-full shadow-sm">${proj.category}</span>
          <span class="w-10 h-10 rounded-full bg-white text-modular-dark flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-md">
            <i class="fa-solid fa-up-right-from-square text-[12px]"></i>
          </span>
        </div>
        
        <div>
          <div class="flex items-center justify-between gap-2 mb-1">
            <span class="text-[10px] font-bold text-white/80 uppercase tracking-wider">${proj.client}</span>
            <span class="text-[10px] font-bold text-white/90 uppercase tracking-widest bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full">${proj.dateFormatted}</span>
          </div>
          <h3 class="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-wide text-white mb-2">${proj.title}</h3>
          <p class="text-xs text-white/90 line-clamp-2 max-w-xl font-medium">${proj.description}</p>
        </div>
      </div>
    </div>
  `).join('');

  handleRevealAnimations();
}

/**
 * CASE STUDY DETAIL ROUTING
 */
function renderProjectDetails(projectId) {
  const outlet = document.getElementById('project-detail-outlet');
  if (!outlet) return;

  const project = PROJECTS_DATABASE.find(p => p.id === projectId);
  if (!project) {
    outlet.innerHTML = `
      <div class="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 class="text-4xl font-display mb-4 uppercase">Project Not Found</h1>
        <a href="#/works" class="btn-modular-primary">Return to Works Index</a>
      </div>
    `;
    return;
  }

  const hasExternalUrl = !!project.externalUrl;
  const hasBts = Array.isArray(project.btsImages) && project.btsImages.length > 0;
  const hasGallery = Array.isArray(project.galleryImages) && project.galleryImages.length > 0;

  // Single or multiple video compilation build
  let videoMarkup = '';

  if (project.videos && project.videos.length > 0) {
    videoMarkup = `
      <div class="mt-12 space-y-8">
        <h3 class="text-xl font-display font-extrabold uppercase tracking-wide text-modular-dark">FEATURED MEDIA PLAYBACK</h3>
        ${project.videos.map(v => `
          <div class="space-y-3">
            <h4 class="text-sm font-bold uppercase tracking-wider text-modular-dark">${v.title}</h4>
            <div class="relative w-full aspect-video rounded-3xl overflow-hidden border border-modular-border bg-black group shadow">
              <img src="https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg" onerror="this.src='${project.thumbnail}'" class="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" alt="${v.title}">
              <div class="absolute inset-0 bg-modular-dark/20"></div>
              <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
                <button onclick="openVideoPopup('youtube', '${v.youtubeId}')" class="w-16 h-16 rounded-full bg-white hover:bg-modular-dark text-modular-dark hover:text-white flex items-center justify-center text-lg transition-all duration-300 shadow-lg cursor-pointer">
                  <i class="fa-solid fa-play ml-1"></i>
                </button>
                <span class="mt-4 text-xs font-bold tracking-widest uppercase text-white bg-modular-dark/80 px-3 py-1.5 rounded-full">PLAY VIDEO</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (project.youtubeId) {
    videoMarkup = `
      <div class="mt-12">
        <h3 class="text-xl font-display font-extrabold uppercase mb-6 tracking-wide text-modular-dark">FEATURED MEDIA PLAYBACK</h3>
        <div class="relative w-full aspect-video rounded-3xl overflow-hidden border border-modular-border bg-black group shadow">
          <img src="https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg" onerror="this.src='${project.thumbnail}'" class="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" alt="${project.title}">
          <div class="absolute inset-0 bg-modular-dark/20"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
            <button onclick="openVideoPopup('youtube', '${project.youtubeId}')" class="w-16 h-16 rounded-full bg-white hover:bg-modular-dark text-modular-dark hover:text-white flex items-center justify-center text-lg transition-all duration-300 shadow-lg cursor-pointer">
              <i class="fa-solid fa-play ml-1"></i>
            </button>
            <span class="mt-4 text-xs font-bold tracking-widest uppercase text-white bg-modular-dark/80 px-3 py-1.5 rounded-full">PLAY VIDEO</span>
          </div>
        </div>
      </div>
    `;
  } else if (project.vimeoId) {
    videoMarkup = `
      <div class="mt-12">
        <h3 class="text-xl font-display font-extrabold uppercase mb-6 tracking-wide text-modular-dark">FEATURED MEDIA PLAYBACK</h3>
        <div class="relative w-full aspect-video rounded-3xl overflow-hidden border border-modular-border bg-black group shadow">
          <img src="${project.thumbnail}" class="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" alt="${project.title}">
          <div class="absolute inset-0 bg-modular-dark/20"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
            <button onclick="openVideoPopup('vimeo', '${project.vimeoId}')" class="w-16 h-16 rounded-full bg-white hover:bg-modular-dark text-modular-dark hover:text-white flex items-center justify-center text-lg transition-all duration-300 shadow-lg cursor-pointer">
              <i class="fa-solid fa-play ml-1"></i>
            </button>
            <span class="mt-4 text-xs font-bold tracking-widest uppercase text-white bg-modular-dark/80 px-3 py-1.5 rounded-full">PLAY VIMEO VIDEO</span>
          </div>
        </div>
      </div>
    `;
  } else if (project.driveId) {
    videoMarkup = `
      <div class="mt-12">
        <h3 class="text-xl font-display font-extrabold uppercase mb-6 tracking-wide text-modular-dark">FEATURED MEDIA PLAYBACK</h3>
        <div class="relative w-full aspect-video rounded-3xl overflow-hidden border border-modular-border bg-black group shadow">
          <img src="${project.thumbnail}" class="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" alt="${project.title}">
          <div class="absolute inset-0 bg-modular-dark/20"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
            <button onclick="openVideoPopup('drive', '${project.driveId}')" class="w-16 h-16 rounded-full bg-white hover:bg-modular-dark text-modular-dark hover:text-white flex items-center justify-center text-lg transition-all duration-300 shadow-lg cursor-pointer">
              <i class="fa-solid fa-play ml-1"></i>
            </button>
            <span class="mt-4 text-xs font-bold tracking-widest uppercase text-white bg-modular-dark/80 px-3 py-1.5 rounded-full">PLAY MUSIC VIDEO</span>
          </div>
        </div>
        ${project.videoNotice ? `<p class="text-xs text-modular-muted italic font-medium mt-3 text-center">${project.videoNotice}</p>` : ''}
      </div>
    `;
  }

  outlet.innerHTML = `
    <div class="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-modular-border py-20 bg-white">
      <div class="absolute inset-0 bg-cover bg-center opacity-10" style="background-image: url('${project.thumbnail}')"></div>
      <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span class="px-4 py-1.5 rounded-full border border-modular-border bg-modular-cream text-modular-dark text-[10px] font-extrabold tracking-widest uppercase mb-6 inline-block">${project.category}</span>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight mb-4 text-modular-dark">${project.title}</h1>
        <p class="text-lg text-modular-muted max-w-2xl mx-auto font-medium leading-relaxed">${project.subtitle}</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4 space-y-8">
          <div class="p-8 rounded-3xl border border-modular-border bg-white shadow-sm">
            <h4 class="text-xs uppercase tracking-widest text-modular-dark font-extrabold font-sans mb-4">Project Parameters</h4>
            <div class="space-y-4">
              <div>
                <span class="block text-[10px] text-modular-muted uppercase tracking-widest font-bold">Client / Partner</span>
                <span class="text-sm font-extrabold text-modular-dark">${project.client}</span>
              </div>
              <hr class="border-modular-border/50">
              <div>
                <span class="block text-[10px] text-modular-muted uppercase tracking-widest font-bold">Development Date</span>
                <span class="text-sm font-extrabold text-modular-dark mt-1 block">${project.dateFormatted}</span>
              </div>
            </div>
          </div>

          <div class="p-8 rounded-3xl border border-modular-border bg-white shadow-sm">
            <h4 class="text-xs uppercase tracking-widest text-modular-dark font-extrabold font-sans mb-4">Production Frame</h4>
            <div class="flex flex-wrap gap-2">
              ${project.deliverables.map(del => `<span class="px-3.5 py-1.5 text-xs rounded-full border border-modular-border bg-modular-cream font-bold text-modular-dark">${del}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <h3 class="text-2xl sm:text-3xl font-display font-extrabold uppercase mb-6 tracking-wide text-modular-dark">CASE OVERVIEW</h3>
          <p class="text-modular-muted text-base leading-relaxed mb-6 font-medium whitespace-pre-line">${project.longDescription}</p>
          <p class="text-modular-muted/80 text-sm leading-relaxed font-semibold">${project.description}</p>
          
          ${hasExternalUrl ? `
            <div class="mt-12 p-8 rounded-3xl border border-modular-border bg-white shadow-sm flex flex-col items-start gap-4">
              <span class="px-4 py-1 text-[10px] uppercase font-bold tracking-widest text-modular-dark bg-modular-cream rounded-full border border-modular-border">External Showcase</span>
              <h3 class="text-2xl font-display font-extrabold uppercase text-modular-dark">VIEW FULL PLATFORM SHOWCASE</h3>
              <p class="text-xs text-modular-muted font-medium">This project features an interactive photo catalog hosted on an external portfolio platform.</p>
              <a href="${project.externalUrl}" target="_blank" rel="noopener noreferrer" class="px-8 py-3.5 bg-modular-dark text-white hover:bg-modular-blue hover:text-modular-dark transition-all duration-300 text-xs uppercase tracking-widest font-extrabold rounded-full flex items-center gap-2 mt-2">
                Open External Gallery <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          ` : ''}

          ${videoMarkup}
        </div>
      </div>
    </div>

    ${hasGallery ? `
      <div class="bg-white py-20 border-t border-modular-border">
        <div class="max-w-7xl mx-auto px-6">
          <h3 class="text-2xl font-display font-extrabold uppercase mb-10 text-center tracking-wide text-modular-dark">${project.galleryTitle || 'EVENT PHOTO GALLERY'}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${project.galleryImages.map((src, index) => `
              <div class="group relative rounded-3xl overflow-hidden border border-modular-border aspect-square cursor-pointer bg-modular-cream" onclick="openImageLightbox('${src}', '${project.title} - Frame ${index + 1}')">
                <img src="${src}" onerror="this.src='https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600'" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" alt="Photo ${index + 1}">
                <div class="absolute inset-0 bg-gradient-to-t from-modular-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span class="text-[10px] font-sans font-extrabold text-white uppercase tracking-widest bg-modular-dark/80 px-3 py-1.5 rounded-full">Enlarge Frame <i class="fa-solid fa-maximize ml-1.5"></i></span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    ` : ''}

    ${hasBts ? `
      <div class="bg-white py-20 border-t border-modular-border">
        <div class="max-w-7xl mx-auto px-6">
          <h3 class="text-2xl font-display font-extrabold uppercase mb-10 text-center tracking-wide text-modular-dark">BEHIND THE SCENES GALLERY</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${project.btsImages.map((src, index) => `
              <div class="group relative rounded-3xl overflow-hidden border border-modular-border aspect-video cursor-pointer" onclick="openImageLightbox('${src}', '${project.title} - Behind The Scenes Frame ${index + 1}')">
                <img src="${src}" onerror="this.src='https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600'" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="B-Roll ${index + 1}">
                <div class="absolute inset-0 bg-gradient-to-t from-modular-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span class="text-[10px] font-sans font-extrabold text-white uppercase tracking-widest bg-modular-dark/80 px-3 py-1.5 rounded-full">Enlarge Frame <i class="fa-solid fa-maximize ml-1.5"></i></span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    ` : ''}

    <div class="py-16 text-center border-t border-modular-border">
      <a href="#/works" class="btn-modular-secondary">
        <i class="fa-solid fa-arrow-left mr-2"></i> Return to Works Index
      </a>
    </div>
  `;
}

/**
 * GLOBAL LIGHTBOX AND ANIMATED VIDEO CONTROLLER (YouTube, Vimeo, Drive)
 */
function openVideoPopup(type, embedId) {
  const overlay = document.getElementById('video-overlay');
  const iframe = document.getElementById('video-iframe');
  const modalContainer = document.getElementById('video-modal-container');
  if (!overlay || !iframe) return;

  // Fallback if only 1 argument is passed (e.g. openVideoPopup('w6AvLD3vF7A'))
  if (!embedId) {
    embedId = type;
    type = 'youtube';
  }

  if (type === 'vimeo') {
    iframe.src = `https://player.vimeo.com/video/${embedId}?autoplay=1`;
  } else if (type === 'drive') {
    iframe.src = `https://drive.google.com/file/d/${embedId}/preview`;
  } else {
    iframe.src = `https://www.youtube.com/embed/${embedId}?autoplay=1`;
  }
  
  overlay.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  requestAnimationFrame(() => {
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    if (modalContainer) {
      modalContainer.classList.remove('scale-95', 'opacity-0');
      modalContainer.classList.add('scale-100', 'opacity-100');
    }
  });
}

function closeVideoPopup() {
  const overlay = document.getElementById('video-overlay');
  const iframe = document.getElementById('video-iframe');
  const modalContainer = document.getElementById('video-modal-container');
  if (!overlay || !iframe) return;

  overlay.classList.remove('opacity-100', 'pointer-events-auto');
  overlay.classList.add('opacity-0', 'pointer-events-none');
  if (modalContainer) {
    modalContainer.classList.remove('scale-100', 'opacity-100');
    modalContainer.classList.add('scale-95', 'opacity-0');
  }

  setTimeout(() => {
    iframe.src = '';
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }, 300);
}

function openImageLightbox(src, caption) {
  const lightbox = document.getElementById('image-lightbox');
  const img = document.getElementById('lightbox-img');
  const text = document.getElementById('lightbox-caption');
  if (!lightbox || !img || !text) return;

  img.src = src;
  text.textContent = caption || 'Joey van der Linden Production Image';
  lightbox.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeImageLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  if (!lightbox) return;

  lightbox.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

/**
 * TEXT TYPEWRITER LOOP
 */
let typewriterTimer = null;
function initHomeTypewriter() {
  const span = document.getElementById('home-typewriter');
  if (!span) return;

  if (typewriterTimer) clearTimeout(typewriterTimer);

  const phrases = [
    "a Producer.",
    "a Videographer.",
    "a Photographer.",
    "a Visual Designer."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function tick() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      span.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      delay = 40;
    } else {
      span.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      delay = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      delay = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500;
    }

    typewriterTimer = setTimeout(tick, delay);
  }

  tick();
}

/**
 * CONTACT PAGE PARTICLE ASSISTANT
 */
let canvasAnimationId = null;
function initContactCanvas() {
  const canvas = document.getElementById('contact-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 70;

  if (canvasAnimationId) cancelAnimationFrame(canvasAnimationId);

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  let mouse = { x: null, y: null, radius: 120 };
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.5 + 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(16, 46, 32, 0.2)';
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 95) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(16, 46, 32, ${0.15 - dist / 95 * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    canvasAnimationId = requestAnimationFrame(animate);
  }

  animate();
}

/**
 * INTERACTIVE TERMINAL COMPILER
 */
function assistantOption(type) {
  const screen = document.getElementById('terminal-screen');
  if (!screen) return;
  
  let replyMessage = '';
  let subject = '';
  let bodyText = '';

  if (type === 'AUTOMOTIVE') {
    subject = 'Automotive Capture Session';
    replyMessage = 'AUTOMOTIVE: Compiling dynamic modular shoot query...';
    bodyText = `Hi Joey,\n\nI love your automotive platform "Silvery Media". I would like to inquire about booking an exclusive photo/video capture session for a premium car model.\n\nHere are some details:\n- Car Model:\n- Proposed Date:\n- Target Locations:\n\nLet's discuss the visual framing soon!`;
  } else if (type === 'VIDEO') {
    subject = 'Cinematic Video Co-Production Inquiry';
    replyMessage = 'VIDEO: Staging script parameters and camera layouts...';
    bodyText = `Hi Joey,\n\nI reviewed your portfolio index and your short documentary "BLIKVELD". I would like to discuss a collaborative co-production proposal.\n\nHere are some scope parameters:\n- Conceptual overview:\n- Delivery timeframe:\n- Projected budget tier:\n\nLet's coordinate a project meeting soon.`;
  } else {
    subject = 'Inquiry from Joey\'s Portfolio website';
    replyMessage = 'GENERAL: Formatting casual hello package...';
    bodyText = `Hi Joey,\n\nI wanted to drop you a line. I enjoyed browsing your portfolio. Let's meet!`;
  }

  const userCommandNode = document.createElement('div');
  userCommandNode.className = 'text-modular-dark font-extrabold mt-3';
  userCommandNode.textContent = `> Running request: compile_dialogue_${type.toLowerCase()}`;
  screen.appendChild(userCommandNode);

  const sysReplyNode = document.createElement('div');
  sysReplyNode.className = 'text-modular-muted font-semibold animate-pulse';
  sysReplyNode.textContent = replyMessage;
  screen.appendChild(sysReplyNode);

  screen.scrollTo({ top: screen.scrollHeight, behavior: 'smooth' });

  document.getElementById('form-subject').value = subject;
  document.getElementById('form-message').value = bodyText;
}

/**
 * FORM DISPATCH REDIRECT (Direct Background Mailer)
 */
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('form-submit-btn');
  const successBox = document.getElementById('form-success-box');
  
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const subject = document.getElementById('form-subject').value;
  const message = document.getElementById('form-message').value;

  // Show sending state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner animate-spin"></i>`;

  try {
    const response = await fetch("https://formsubmit.co/ajax/d20dd06d8be3beebf739bcf2c5064cb5 ", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: `Portfolio Inquiry: ${subject}`,
        message: message
      })
    });

    if (response.ok) {
      // Reveal inline success confirmation
      successBox.classList.remove('hidden');
      document.getElementById('contact-form').reset();
      
      setTimeout(() => {
        successBox.classList.add('hidden');
      }, 5000);
    } else {
      alert("There was an issue dispatching your message. Please try again or email jrs.vdlinden@gmail.com directly.");
    }
  } catch (error) {
    console.error("Form dispatch error:", error);
    alert("Connection error. Please check your internet connection or email jrs.vdlinden@gmail.com directly.");
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>`;
  }
}

/**
 * PROGRESSIVE SCREEN VISIBILITY OBSERVER
 */
function handleRevealAnimations() {
  const items = document.querySelectorAll('.reveal-item');
  const triggerBottom = window.innerHeight * 0.9;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('revealed');
    }
  });

  const bttButton = document.getElementById('back-to-top');
  if (bttButton) {
    if (window.scrollY > 400) {
      bttButton.classList.remove('opacity-0', 'translate-y-10');
      bttButton.classList.add('opacity-100', 'translate-y-0');
    } else {
      bttButton.classList.remove('opacity-100', 'translate-y-0');
      bttButton.classList.add('opacity-0', 'translate-y-10');
    }
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', handleRevealAnimations);