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
    id: "bearcat-green-guide",
    category: "INTERACTIVE EXPERIENCE",
    title: "BEARCAT GREEN GUIDE",
    subtitle: "An Interactive Branching Video Story & Campus Sorting Web Hub",
    thumbnail: "./img/projects/greenguide/thesis-context-facility.jpeg",
    interactivePreview: "./img/projects/greenguide/thesis-branching-logic.jpeg",
    description: "An interactive choose-your-own-adventure video and web guide tackling everyday recycling habits at Northwest Missouri State University.",
    
    // Quick-glance visual cards at the top
    highlightCards: [
      {
        icon: "fa-solid fa-industry",
        tag: "THE BACKEND",
        title: "A Huge Facility",
        desc: "Northwest runs an impressive recycling plant that bales over 350,000 lbs of cardboard a year, but sorting mistakes cost real money."
      },
      {
        icon: "fa-solid fa-person-walking-arrow-right",
        tag: "THE HABIT",
        title: "The 30-Foot Rule",
        desc: "92% of students want to recycle, but if the bin is more than 30 feet away, convenience wins and the regular trash can takes over."
      },
      {
        icon: "fa-solid fa-film",
        tag: "THE SOLUTION",
        title: "Interactive Video",
        desc: "A funny, choose-your-own-adventure web video for freshmen that replaces boring rule sheets with realistic choices."
      }
    ],

    pullQuote: {
      text: "Distance equals defiance. If a student is tired on the 7th floor of Franken Hall at midnight and the recycling bin is downstairs in the lobby, the room trash can wins 100% of the time.",
      author: "Brock Endorf & Ashlee Limbach",
      role: "Resident Assistants at Northwest Missouri State"
    },

    longDescription: "Northwest Missouri State University has an incredible recycling facility, but on campus, things kept breaking down right at the bins. In dorms and dining halls, students were tossing to-go coffee cups into paper bins, letting half-full sodas leak, or simply using whatever trash can was closest.\n\nTraditional flyers and warning signs just weren't working. Students didn't lack good intentions; they just didn't know what the campus facility could actually process, and after a long day of classes, nobody wants to walk down six flights of stairs to find a bin.\n\nTo bridge this gap, I created an interactive branching video experience for incoming freshmen during their required University Seminar class. Instead of sitting through a dry compliance lecture, students follow 'Mikey' through a chaotic Tuesday and make quick decisions for him. Good choices keep campus running smoothly, while bad choices show the real, messy work campus custodians have to do to clean up contaminated bins.\n\nTo support these habits outside the classroom, I also built the Bearcat Green Guide: a clean 3-page website with transparent student articles and an instant lookup tool to see exactly which bin each item goes into.",
    date: "2026-05",
    dateFormatted: "May 2026",
    deliverables: [
      "Interactive Story Design",
      "Custom Video Engine (HTML5/JS)",
      "Field Research & Interviews",
      "Cinematography & Directing",
      "UX/UI Web Design"
    ],
    client: "Northwest Missouri State University",
    externalUrl: "https://jojopro56.github.io/graduation-project/mainMenu.html",
    
    // Quantitative Data
    stats: [
      {
        label: "Students Who Care",
        value: "92%",
        desc: "Students who believe recycling on campus is important."
      },
      {
        label: "The Long-Walk Dropoff",
        value: "28%",
        desc: "Students who still recycle when the bin requires walking down hallways or stairs."
      },
      {
        label: "The Coffee Cup Myth",
        value: "74%",
        desc: "Students who mistakenly think single-use to-go cups are recyclable."
      },
      {
        label: "Finals Week Paper Peak",
        value: "857 lbs",
        desc: "The largest single-day paper surge recorded on campus (Dec 9, 2025)."
      }
    ],

    // Side-by-side process cards (Text directly next to Image)
    processSteps: [
      {
        tag: "STEP 01 / THE CONTEXT",
        title: "Visiting the Recycling Center",
        text: "I started by meeting with Chris Redden, the supervisor at Northwest's recycling center. I learned that the center operates on a zero-base budget. Every time non-recyclables or food get tossed into recycling bins, the university has to pay landfill fees to dispose of the contaminated batches. The machinery was top-tier, but students in the dorms had no idea this facility even existed.",
        image: "./img/projects/greenguide/thesis-context-facility.jpeg",
        caption: "Northwest Regional Recycling Center on North Country Club Drive (Thesis p. 8)"
      },
      {
        tag: "STEP 02 / THE BOTTLENECKS",
        title: "The 30-Foot Walk & The Coffee Cup Myth",
        text: "Talking to students and Resident Assistants in dorms like Franken Hall and South Complex uncovered two major patterns: 'The 30-Foot Rule' (late at night, people use the closest bin in their room) and 'Wish-Cycling' (tossing Starbucks cups or greasy pizza boxes into blue bins hoping they'll get recycled). In reality, plastic-lined paper cups jam up the paper balers and ruin clean cardboard batches.",
        image: "./img/projects/greenguide/thesis-30foot-rule.jpeg",
        caption: "Contamination culprits & lobby sorting bins in campus dorms (Thesis p. 15)"
      },
      {
        tag: "STEP 03 / THE STORY",
        title: "A Tuesday with Mikey",
        text: "To make recycling fun and memorable, I wrote a branching story following a student named Mikey through a chaotic campus day. Instead of telling students what to do, the video gives them blind choices with a countdown timer. Making the right choice leads to a bright, smooth outcome; making a mistake triggers a gritty reality check showing real campus staff dealing with the mess.",
        image: "./img/projects/greenguide/thesis-branching-logic.jpeg",
        caption: "Early hand-drawn wireframe of the interactive decision screen (Thesis p. 68)"
      },
      {
        tag: "STEP 04 / THE CODE",
        title: "Ditching Figma for Clean Code",
        text: "I initially tried to prototype the branching video in Figma, but Figma couldn't handle heavy video clips without lagging and dropping frames. I made the call to drop Figma and code the entire player engine from scratch in native HTML5 and JavaScript. Writing custom code allowed background video preloading, meaning zero buffering on the baseline laptops freshmen use in class.",
        image: "./img/projects/greenguide/thesis-figma-vs-code.jpeg",
        caption: "Custom JavaScript video engine managing player states in VS Code (Thesis p. 84)"
      },
      {
        tag: "STEP 05 / USER TESTING",
        title: "Testing with Real Students",
        text: "I ran three rounds of usability tests with Northwest students. Early feedback showed that big text boxes felt cluttered and 5-second timers caused panic clicking. I simplified the interface, extended timers to 10–15 seconds, and cleaned up the visual hierarchy. In the final round, students loved the experience, comparing it to Netflix's interactive branching films.",
        image: "./img/projects/greenguide/thesis-usability-testing.jpeg",
        caption: "Before/After iterations removing bulky containers to eliminate clutter (Thesis p. 101)"
      },
      {
        tag: "STEP 06 / THE ECOSYSTEM",
        title: "The Bearcat Green Guide Web Hub",
        text: "To give students an easy way to check rules on their phones, I designed the Bearcat Green Guide web hub. It features 10 lighthearted myth-busting articles and an instant search directory mapping everyday trash to color-coded campus bins: Blue for Paper, Red for Plastic Bottles & Jugs, and Yellow for Metal Cans.",
        image: "./img/projects/greenguide/thesis-greenguide-web.jpeg",
        caption: "Redesigned campus sorting station layout with clear material categories (Thesis p. 51)"
      }
    ],
    btsImages: [
      "./img/projects/greenguide/bts-camera-rig.jpeg",
      "./img/projects/greenguide/bts-union-shoot.jpeg",
      "./img/projects/greenguide/bts-custodian-interview.jpeg",
      "./img/projects/greenguide/bts-editing-timeline.jpeg"
    ]
  },
  {
    id: "porsche-992-gt3rs",
    category: "AUTOMOTIVE",
    title: "Porsche 992 GT3RS",
    subtitle: "A private shoot for high-impact social media cataloging",
    thumbnail: "./img/projects/porschegt3rs/thumbCompressed-gt3rs.jpg",
    description: "A private shoot for social media content.",
    longDescription: "Working closely with high-end sports car enthusiasts, this catalog shoot was executed under golden hour light on a racing track. Special care was given to highlight active aero parts, mechanical vents, and the lightweight carbon chassis, producing striking portfolio content.",
    date: "2026-04",
    dateFormatted: "April 2026",
    deliverables: ["Automotive Photography", "Location Scouting", "Color Workflows"],
    client: "Silvery Media Showcase",
    externalUrl: "https://silverymedia.nl/"
  },
  {
    id: "hollow",
    category: "SHORT FILM",
    title: "HOLLOW",
    subtitle: "An award winning music video project on drug use and its consequences",
    thumbnail: "./img/projects/HOLLOW/thumbHOLLOW.png",
    description: "An award winning music video project on drug use and its consequences.",
    longDescription: "Set to the haunting backdrop of 'Hollow' by Zachy, this music video is a raw, visual exploration of escapism and consequence. The film dives deep into a poignant question: What happens when someone tries to surgically remove their own emotions through substance abuse? Through deliberate lighting and visceral cinematography, the video physically manifests the feeling of emotional numbness and the chaotic, inevitable spiral that follows.\n\nConceived as a passion project specifically for the 2026 Northwest Missouri State University Film Festival, the entire video was brought to life in a demanding two-week window.",
    date: "2026-03",
    dateFormatted: "March 2026",
    deliverables: ["Cinematography", "In-Camera Lighting", "Directing"],
    client: "2026 NWMSU Film Festival",
    driveId: "1AnuXNHljabPF_WdoRClFuk__Ix2Ssvod",
    videoNotice: "This video contains copyrighted music and is hosted via Google Drive.",
    awards: [
      {
        title: "Best Lighting",
        description: "Recognized for outstanding use of color theory, dynamic stage lighting, and practical in-camera effects to shape the mood of the video."
      },
      {
        title: "Best Overall Digital Cinematography Film",
        description: "Awarded for exceptional camera movement, composition, and a cohesive visual language that elevated the music's narrative."
      }
    ],
    awardImage: "./img/projects/HOLLOW/award-overall.png",
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
    client: "Stadslabs Sittard-Geleen",
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
    client: "Passion Project",
    youtubeId: "c6omRkkZbSk",
    btsImages: [
      "./img/projects/tired/kitchen.png",
      "./img/projects/tired/dolly.png"
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
      <div class="relative overflow-hidden h-60 bg-modular-cream">
        <img src="${proj.thumbnail}" onerror="this.onerror=null; this.src='./img/projects/greenguide/thesis-context-facility.jpeg';" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${proj.title}">
        <div class="absolute top-4 left-4 flex gap-2">
          <span class="px-4 py-1.5 text-[9px] uppercase font-bold tracking-widest text-white bg-modular-dark rounded-full">${proj.category}</span>
        </div>
        <div class="absolute bottom-4 right-4">
          <span class="px-3 py-1 text-[9px] uppercase font-bold tracking-wider text-modular-dark bg-white/90 backdrop-blur-sm rounded-full border border-modular-border">${proj.dateFormatted}</span>
        </div>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-display text-xl font-extrabold uppercase tracking-tight text-modular-dark mb-2 group-hover:text-modular-muted transition-colors duration-300 break-words">${proj.title}</h3>
          <p class="text-xs text-modular-muted line-clamp-3 leading-relaxed font-medium">${proj.description}</p>
        </div>
        <div class="flex items-center justify-between border-t border-modular-border/50 pt-4 mt-4">
          <span class="text-[10px] font-bold text-modular-muted uppercase">${proj.client}</span>
          <a href="#/project/${proj.id}" class="btn-modular-secondary text-xs !py-2.5 !px-5 !shadow-none hover:!shadow-sm">
            View Project <i class="fa-solid fa-arrow-right text-[10px]"></i>
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
    grid.innerHTML = '<div class="col-span-full py-20 text-center text-modular-muted font-sans font-bold">No projects compiled in this frame.</div>';
    return;
  }

  grid.innerHTML = filtered.map(proj => `
    <div class="group relative aspect-video rounded-3xl overflow-hidden border border-modular-border bg-modular-cream cursor-pointer shadow-sm hover:shadow-md reveal-item transition-all duration-300" onclick="window.location.hash='#/project/${proj.id}'">
      <img src="${proj.thumbnail}" onerror="this.onerror=null; this.src='./img/projects/greenguide/thesis-context-facility.jpeg';" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-90" alt="${proj.title}">
      <div class="absolute inset-0 bg-gradient-to-t from-modular-dark/90 via-modular-dark/30 to-transparent"></div>
      
      <div class="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <span class="px-3.5 py-1 sm:px-4 sm:py-1.5 text-[8px] sm:text-[9px] font-sans font-extrabold uppercase tracking-widest text-modular-dark bg-white rounded-full shadow-sm">${proj.category}</span>
          <span class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-modular-dark flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-md">
            <i class="fa-solid fa-up-right-from-square text-[10px] sm:text-[12px]"></i>
          </span>
        </div>
        
        <div>
          <div class="flex items-center justify-between gap-2 mb-1">
            <span class="text-[9px] sm:text-[10px] font-bold text-white/80 uppercase tracking-wider truncate max-w-[60%]">${proj.client}</span>
            <span class="text-[8px] sm:text-[10px] font-bold text-white/90 uppercase tracking-widest bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full flex-shrink-0">${proj.dateFormatted}</span>
          </div>
          <h3 class="text-xl sm:text-3xl lg:text-4xl font-display font-extrabold uppercase tracking-wide text-white mb-1.5 break-words line-clamp-1">${proj.title}</h3>
          <p class="text-[11px] sm:text-xs text-white/90 line-clamp-2 max-w-xl font-medium">${proj.description}</p>
        </div>
      </div>
    </div>
  `).join('');

  handleRevealAnimations();
}

/**
 * INTERACTIVE DIAGRAM CONTROLLERS
 */
window.updateDistanceSim = function(dist) {
  const compliance = Math.max(12, Math.round(96 - (dist * 1.05)));
  const bar = document.getElementById('sim-compliance-bar');
  const percentText = document.getElementById('sim-compliance-val');
  const distText = document.getElementById('sim-dist-val');
  const verdictText = document.getElementById('sim-verdict-text');
  
  if (distText) distText.textContent = dist + ' ft';
  if (percentText) percentText.textContent = compliance + '%';
  if (bar) {
    bar.style.width = compliance + '%';
    if (compliance > 70) {
      bar.className = 'h-full rounded-full transition-all duration-300 bg-emerald-600';
    } else if (compliance > 40) {
      bar.className = 'h-full rounded-full transition-all duration-300 bg-amber-500';
    } else {
      bar.className = 'h-full rounded-full transition-all duration-300 bg-rose-500';
    }
  }

  if (verdictText) {
    if (dist <= 15) {
      verdictText.textContent = "Minimal Friction: It is easy to do the right thing without thinking twice.";
    } else if (dist <= 35) {
      verdictText.textContent = "The Turning Point: Laziness and hurry start winning over good intentions.";
    } else {
      verdictText.textContent = "Distance Equals Defiance: Late at night, the room trash can wins almost every time.";
    }
  }
};

window.switchAuditCategory = function(cat) {
  const btnPaper = document.getElementById('audit-btn-paper');
  const btnPlastic = document.getElementById('audit-btn-plastic');
  const barNov = document.getElementById('audit-bar-nov');
  const barFri = document.getElementById('audit-bar-fri');
  const barMon = document.getElementById('audit-bar-mon');
  const barPeak = document.getElementById('audit-bar-peak');
  
  const valNov = document.getElementById('audit-val-nov');
  const valFri = document.getElementById('audit-val-fri');
  const valMon = document.getElementById('audit-val-mon');
  const valPeak = document.getElementById('audit-val-peak');
  const subtitle = document.getElementById('audit-subtitle');

  if (cat === 'paper') {
    if (btnPaper) btnPaper.className = 'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-modular-dark text-white transition-all';
    if (btnPlastic) btnPlastic.className = 'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-modular-dark border border-modular-border hover:bg-modular-cream transition-all';
    
    if (subtitle) subtitle.textContent = "Paper Stream: Notice the massive spikes when students clean out binders and notes for finals.";
    if (valNov) valNov.textContent = "45 lbs";
    if (valFri) valFri.textContent = "290 lbs";
    if (valMon) valMon.textContent = "751 lbs";
    if (valPeak) valPeak.textContent = "857 lbs";

    if (barNov) barNov.style.height = '15%';
    if (barFri) barFri.style.height = '42%';
    if (barMon) barMon.style.height = '88%';
    if (barPeak) barPeak.style.height = '100%';
  } else {
    if (btnPlastic) btnPlastic.className = 'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-modular-dark text-white transition-all';
    if (btnPaper) btnPaper.className = 'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-modular-dark border border-modular-border hover:bg-modular-cream transition-all';
    
    if (subtitle) subtitle.textContent = "Plastic Stream: Giant sudden jumps when students finally toss their hoarded laundry detergent jugs.";
    if (valNov) valNov.textContent = "21 lbs";
    if (valFri) valFri.textContent = "100 lbs";
    if (valMon) valMon.textContent = "123 lbs";
    if (valPeak) valPeak.textContent = "61 lbs";

    if (barNov) barNov.style.height = '20%';
    if (barFri) barFri.style.height = '82%';
    if (barMon) barMon.style.height = '100%';
    if (barPeak) barPeak.style.height = '50%';
  }
};

/**
 * HELPER MARKUP GENERATORS
 */
function renderHighlightsHTML(project) {
  if (!project.highlightCards || !project.highlightCards.length) return '';
  return `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      ${project.highlightCards.map(c => `
        <div class="p-6 rounded-3xl border border-modular-border bg-white shadow-sm hover:border-modular-dark/40 transition-all flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-2xl bg-modular-cream flex items-center justify-center text-modular-dark text-base mb-4 border border-modular-border">
              <i class="${c.icon}"></i>
            </div>
            <span class="text-[9px] font-extrabold uppercase tracking-widest text-modular-muted block mb-1">${c.tag}</span>
            <h4 class="font-display text-lg font-bold uppercase text-modular-dark mb-2">${c.title}</h4>
            <p class="text-xs text-modular-muted leading-relaxed font-medium">${c.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderPullQuoteHTML(project) {
  if (!project.pullQuote) return '';
  return `
    <div class="p-6 sm:p-8 rounded-3xl bg-modular-cream/80 border-l-4 border-modular-dark border-y border-r border-modular-border mb-8 shadow-xs">
      <i class="fa-solid fa-quote-left text-2xl text-modular-dark/30 mb-2 block"></i>
      <p class="text-sm sm:text-base italic font-semibold text-modular-dark leading-relaxed mb-4">"${project.pullQuote.text}"</p>
      <div class="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-modular-muted">
        <span>— ${project.pullQuote.author}</span>
        <span class="text-[9px] text-modular-muted/80">${project.pullQuote.role}</span>
      </div>
    </div>
  `;
}

function renderExternalShowcaseHTML(project) {
  if (!project.externalUrl) return '';

  // Only render the Interactive Story showcase banner if this project specifically has an interactive preview!
  if (project.interactivePreview) {
    const previewImg = project.interactivePreview;
    return `
      <div class="mt-10 mb-12 rounded-3xl border border-modular-border bg-modular-dark text-white overflow-hidden shadow-xl relative group">
        <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          <div class="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6 z-10">
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span class="text-[9px] font-extrabold uppercase tracking-widest text-modular-blue">TRY IT ONLINE</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white leading-tight">EXPERIENCE THE INTERACTIVE STORY</h3>
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                Step into Mikey's shoes in this custom interactive video. Make split-second sorting choices, face funny campus peer pressure, and see what happens to the custodians when things go wrong.
              </p>
            </div>

            <div class="flex flex-wrap gap-2 py-2">
              <span class="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">6 Branching Acts</span>
              <span class="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">10-15s Timed Choices</span>
              <span class="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">Zero Lag Video Engine</span>
            </div>

            <div>
              <a href="${project.externalUrl}" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-white text-modular-dark hover:bg-modular-blue transition-all duration-300 text-xs uppercase tracking-widest font-extrabold rounded-full inline-flex items-center gap-2.5 shadow-lg">
                Launch Interactive Experience <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 relative min-h-[260px] bg-modular-cream/10 border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden cursor-pointer" onclick="window.open('${project.externalUrl}', '_blank')">
            <img src="${previewImg}" onerror="this.onerror=null; this.src='./img/projects/greenguide/thesis-context-facility.jpeg';" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt="Interactive Experience Preview">
            <div class="absolute inset-0 bg-gradient-to-t from-modular-dark/80 via-transparent to-transparent"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-white/90 text-modular-dark flex items-center justify-center text-xl shadow-2xl group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-play ml-1"></i>
              </div>
              <span class="text-[10px] font-extrabold tracking-widest uppercase text-white bg-modular-dark/80 px-3 py-1.5 rounded-full mt-3 backdrop-blur-sm">CLICK TO PLAY</span>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // Standard external showcase card for all other projects (like the Porsche GT3RS)
  return `
    <div class="mt-12 p-8 rounded-3xl border border-modular-border bg-white shadow-sm flex flex-col items-start gap-4">
      <span class="px-4 py-1 text-[10px] uppercase font-bold tracking-widest text-modular-dark bg-modular-cream rounded-full border border-modular-border">External Showcase</span>
      <h3 class="text-2xl font-display font-extrabold uppercase text-modular-dark">VIEW FULL PLATFORM SHOWCASE</h3>
      <p class="text-xs text-modular-muted font-medium">This project features an interactive photo catalog hosted on an external portfolio platform.</p>
      <a href="${project.externalUrl}" target="_blank" rel="noopener noreferrer" class="px-8 py-3.5 bg-modular-dark text-white hover:bg-modular-blue hover:text-modular-dark transition-all duration-300 text-xs uppercase tracking-widest font-extrabold rounded-full flex items-center gap-2 mt-2">
        Open External Gallery <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  `;
}

function renderInteractiveStatsHTML(project) {
  if (!project.stats || !project.stats.length) return '';
  return `
    <div class="mt-8 p-6 sm:p-10 rounded-3xl border border-modular-border bg-white shadow-sm space-y-10">
      
      <div class="border-b border-modular-border/50 pb-5">
        <span class="px-3.5 py-1 text-[9px] font-sans font-extrabold uppercase tracking-widest text-modular-dark bg-modular-cream rounded-full border border-modular-border inline-block shadow-xs mb-2">CAMPUS HABIT AUDIT</span>
        <h4 class="text-2xl sm:text-3xl font-display font-extrabold uppercase text-modular-dark">HOW STUDENTS ACTUALLY RECYCLE</h4>
        <p class="text-xs text-modular-muted font-medium mt-1">Try the distance slider below to see why students give up on recycling, or switch tabs to see real campus trash spikes.</p>
      </div>

      <!-- Interactive Diagram 1: The 30-Foot Rule Simulator -->
      <div class="p-6 rounded-3xl bg-modular-cream/60 border border-modular-border space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-modular-muted">Interactive Test 01</span>
            <h5 class="font-display text-base sm:text-lg font-bold uppercase text-modular-dark">The 30-Foot Rule: Distance vs. Effort</h5>
          </div>
          <div class="text-left sm:text-right">
            <span class="text-[10px] font-bold text-modular-muted block uppercase">Likely to Recycle</span>
            <span id="sim-compliance-val" class="font-display text-2xl font-extrabold text-modular-dark">52%</span>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex justify-between text-[11px] font-bold uppercase text-modular-dark">
            <span>Distance to Bin: <span id="sim-dist-val" class="text-emerald-700 font-extrabold">30 ft</span></span>
            <span class="text-modular-muted">The 30-Foot Turning Point</span>
          </div>
          <input type="range" min="5" max="80" value="30" oninput="window.updateDistanceSim(this.value)" class="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-modular-dark border border-modular-border">
          <div class="flex justify-between text-[9px] text-modular-muted uppercase font-bold">
            <span>5 ft (Next to Desk)</span>
            <span>30 ft (In Hallway)</span>
            <span>80 ft (Down in Lobby)</span>
          </div>
        </div>

        <div class="w-full bg-white rounded-full h-3.5 p-0.5 border border-modular-border overflow-hidden">
          <div id="sim-compliance-bar" class="h-full rounded-full transition-all duration-300 bg-amber-500" style="width: 52%;"></div>
        </div>

        <p id="sim-verdict-text" class="text-xs font-semibold text-modular-dark italic">The Turning Point: Laziness and hurry start winning over good intentions.</p>
      </div>

      <!-- Interactive Diagram 2: Waste Audit Spikes -->
      <div class="p-6 rounded-3xl bg-modular-cream/60 border border-modular-border space-y-5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-modular-muted">Interactive Chart 02</span>
            <h5 class="font-display text-base sm:text-lg font-bold uppercase text-modular-dark">Real Campus Trash Spikes (Late 2025)</h5>
          </div>
          <div class="flex gap-2">
            <button id="audit-btn-paper" onclick="window.switchAuditCategory('paper')" class="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-modular-dark text-white transition-all">Paper</button>
            <button id="audit-btn-plastic" onclick="window.switchAuditCategory('plastic')" class="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-modular-dark border border-modular-border hover:bg-modular-cream transition-all">Plastic</button>
          </div>
        </div>

        <p id="audit-subtitle" class="text-xs text-modular-muted font-medium">Paper Stream: Notice the massive spikes when students clean out binders and notes for finals.</p>

        <!-- Interactive Bar Graph -->
        <div class="grid grid-cols-4 gap-3 sm:gap-6 pt-4 h-48 items-end border-b border-modular-border pb-4">
          <div class="flex flex-col items-center h-full justify-end group">
            <span id="audit-val-nov" class="text-[11px] font-extrabold text-modular-dark mb-1">45 lbs</span>
            <div class="w-full max-w-[48px] bg-white rounded-t-xl border border-modular-border flex items-end p-1 h-full">
              <div id="audit-bar-nov" class="w-full bg-modular-muted/60 rounded-t-lg transition-all duration-500" style="height: 15%;"></div>
            </div>
            <span class="text-[9px] font-bold text-modular-muted uppercase mt-2 text-center">Nov 12</span>
            <span class="text-[8px] text-modular-muted/70 hidden sm:block">Regular Day</span>
          </div>

          <div class="flex flex-col items-center h-full justify-end group">
            <span id="audit-val-fri" class="text-[11px] font-extrabold text-modular-dark mb-1">290 lbs</span>
            <div class="w-full max-w-[48px] bg-white rounded-t-xl border border-modular-border flex items-end p-1 h-full">
              <div id="audit-bar-fri" class="w-full bg-modular-muted/80 rounded-t-lg transition-all duration-500" style="height: 42%;"></div>
            </div>
            <span class="text-[9px] font-bold text-modular-muted uppercase mt-2 text-center">Nov 20</span>
            <span class="text-[8px] text-modular-muted/70 hidden sm:block">Pre-Break</span>
          </div>

          <div class="flex flex-col items-center h-full justify-end group">
            <span id="audit-val-mon" class="text-[11px] font-extrabold text-modular-dark mb-1">751 lbs</span>
            <div class="w-full max-w-[48px] bg-white rounded-t-xl border border-modular-border flex items-end p-1 h-full">
              <div id="audit-bar-mon" class="w-full bg-amber-600 rounded-t-lg transition-all duration-500" style="height: 88%;"></div>
            </div>
            <span class="text-[9px] font-bold text-modular-muted uppercase mt-2 text-center">Dec 02</span>
            <span class="text-[8px] text-amber-700 font-bold hidden sm:block">Cleanout 1</span>
          </div>

          <div class="flex flex-col items-center h-full justify-end group">
            <span id="audit-val-peak" class="text-[11px] font-extrabold text-rose-600 mb-1">857 lbs</span>
            <div class="w-full max-w-[48px] bg-white rounded-t-xl border border-modular-border flex items-end p-1 h-full">
              <div id="audit-bar-peak" class="w-full bg-rose-600 rounded-t-lg transition-all duration-500 animate-pulse" style="height: 100%;"></div>
            </div>
            <span class="text-[9px] font-bold text-modular-dark uppercase mt-2 text-center">Dec 09</span>
            <span class="text-[8px] text-rose-700 font-extrabold hidden sm:block">Finals Peak</span>
          </div>
        </div>

      </div>

      <!-- Baseline Metric Tiles -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${project.stats.map(s => `
          <div class="p-5 rounded-2xl bg-modular-cream/40 border border-modular-border flex flex-col justify-between">
            <div>
              <div class="flex items-baseline justify-between mb-1.5">
                <span class="text-3xl font-display font-extrabold text-modular-dark">${s.value}</span>
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              </div>
              <h5 class="text-xs font-bold uppercase tracking-wider text-modular-dark mb-1">${s.label}</h5>
              <p class="text-[11px] text-modular-muted leading-relaxed font-medium">${s.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function renderProcessStepsHTML(project) {
  if (!project.processSteps || !project.processSteps.length) return '';
  
  const stepsHTML = project.processSteps.map((step, idx) => {
    const isOdd = idx % 2 === 1;
    const orderText = isOdd ? 'lg:order-2' : 'lg:order-1';
    const orderImg = isOdd ? 'lg:order-1' : 'lg:order-2';
    const phaseTag = step.tag ? step.tag : ('STEP 0' + (idx + 1));
    const captionMarkup = step.caption ? '<p class="text-[11px] text-modular-muted/80 italic mt-3 text-center font-medium">' + step.caption + '</p>' : '';
    const safeTitle = (step.title || '').replace(/"/g, '&quot;');

    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-7 space-y-4 ${orderText}">
          <span class="px-3.5 py-1 text-[9px] font-sans font-extrabold uppercase tracking-widest text-modular-dark bg-white rounded-full border border-modular-border inline-block shadow-xs">${phaseTag}</span>
          <h4 class="text-2xl sm:text-3xl font-display font-extrabold uppercase text-modular-dark leading-snug">${step.title}</h4>
          <p class="text-modular-muted text-sm leading-relaxed font-medium whitespace-pre-line">${step.text}</p>
        </div>
        <div class="lg:col-span-5 ${orderImg}">
          <div class="group relative rounded-3xl overflow-hidden border border-modular-border bg-white shadow-sm cursor-pointer aspect-[4/3]" onclick="openImageLightbox('${step.image}', '${safeTitle}')">
            <img src="${step.image}" onerror="this.onerror=null; this.src='./img/projects/greenguide/thesis-context-facility.jpeg';" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${safeTitle}">
            <div class="absolute inset-0 bg-gradient-to-t from-modular-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span class="text-[9px] font-sans font-extrabold text-white uppercase tracking-widest bg-modular-dark/80 px-3 py-1.5 rounded-full">Enlarge Photo <i class="fa-solid fa-maximize ml-1"></i></span>
            </div>
          </div>
          ${captionMarkup}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="mt-20 pt-16 border-t border-modular-border space-y-20">
      <div class="max-w-3xl">
        <span class="text-xs uppercase tracking-widest text-modular-muted font-bold font-sans">How It Was Made</span>
        <h3 class="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-wide text-modular-dark mt-1">FROM INTERVIEWS TO THE FINAL BUILD</h3>
        <p class="text-sm text-modular-muted font-medium mt-2 leading-relaxed">Here is how I went from campus interviews and scriptwriting to custom JavaScript and student usability testing.</p>
      </div>

      <div class="space-y-20">
        ${stepsHTML}
      </div>
    </div>
  `;
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

  const hasBts = Array.isArray(project.btsImages) && project.btsImages.length > 0;
  const hasGallery = Array.isArray(project.galleryImages) && project.galleryImages.length > 0;
  const hasAwards = Array.isArray(project.awards) && project.awards.length > 0;

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
    <!-- Top Header -->
    <div class="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-modular-border py-20 bg-white">
      <div class="absolute inset-0 bg-cover bg-center opacity-10" style="background-image: url('${project.thumbnail}')"></div>
      <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span class="px-4 py-1.5 rounded-full border border-modular-border bg-modular-cream text-modular-dark text-[10px] font-extrabold tracking-widest uppercase mb-6 inline-block">${project.category}</span>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight mb-4 text-modular-dark break-words">${project.title}</h1>
        <p class="text-lg text-modular-muted max-w-2xl mx-auto font-medium leading-relaxed">${project.subtitle}</p>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="max-w-7xl mx-auto px-6 py-20">
      
      <!-- 1. Quick Highlight Cards -->
      ${renderHighlightsHTML(project)}

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left Sidebar: Parameters -->
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

        <!-- Right Column: Story Overview, Interactive App Showcase, and Diagrams -->
        <div class="lg:col-span-8">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <h3 class="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-wide text-modular-dark">CASE OVERVIEW</h3>
          </div>
          
          ${renderPullQuoteHTML(project)}

          <div class="space-y-4 text-modular-muted text-sm sm:text-base leading-relaxed font-medium">
            <p class="whitespace-pre-line">${project.longDescription}</p>
          </div>
          <p class="text-modular-muted/80 text-xs sm:text-sm leading-relaxed font-semibold mt-4 border-t border-modular-border/60 pt-4">${project.description}</p>
          
          ${hasAwards ? `
            <div class="mt-12 p-8 sm:p-10 rounded-3xl border border-modular-border bg-modular-dark text-white shadow-xl space-y-8">
              <div class="flex flex-col sm:flex-row items-center gap-6 border-b border-white/10 pb-6 text-center sm:text-left">
                ${project.awardImage ? `<img src="${project.awardImage}" alt="Award Laurels" class="h-32 sm:h-44 w-auto object-contain flex-shrink-0 drop-shadow-md">` : ''}
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-modular-blue">Film Festival Honors</span>
                  <h4 class="text-2xl sm:text-3xl font-display font-extrabold uppercase mt-1">AWARDS & RECOGNITION</h4>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                ${project.awards.map(a => `
                  <div class="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <h5 class="font-display text-lg font-bold uppercase text-modular-blue mb-2">${a.title}</h5>
                    <p class="text-xs text-white/80 leading-relaxed font-medium">${a.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 2. Live Web Showcase (Only renders interactive story if interactivePreview is set; otherwise standard gallery card) -->
          ${renderExternalShowcaseHTML(project)}

          <!-- 3. Interactive Habit & Trash Data Engine -->
          ${renderInteractiveStatsHTML(project)}

          ${videoMarkup}
        </div>
      </div>

      <!-- 4. Step-by-Step Production Process (Side-by-Side Images & Story) -->
      ${renderProcessStepsHTML(project)}

    </div>

    ${hasGallery ? `
      <div class="bg-white py-20 border-t border-modular-border">
        <div class="max-w-7xl mx-auto px-6">
          <h3 class="text-2xl font-display font-extrabold uppercase mb-10 text-center tracking-wide text-modular-dark">${project.galleryTitle || 'EVENT PHOTO GALLERY'}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${project.galleryImages.map((src, index) => `
              <div class="group relative rounded-3xl overflow-hidden border border-modular-border aspect-square cursor-pointer bg-modular-cream" onclick="openImageLightbox('${src}', '${project.title} - Frame ${index + 1}')">
                <img src="${src}" onerror="this.src='./img/projects/greenguide/thesis-context-facility.jpeg';" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" alt="Photo ${index + 1}">
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
                <img src="${src}" onerror="this.src='./img/projects/greenguide/thesis-context-facility.jpeg';" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="B-Roll ${index + 1}">
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
 * GLOBAL LIGHTBOX AND ANIMATED VIDEO CONTROLLER
 */
function openVideoPopup(type, embedId) {
  const overlay = document.getElementById('video-overlay');
  const iframe = document.getElementById('video-iframe');
  const modalContainer = document.getElementById('video-modal-container');
  if (!overlay || !iframe) return;

  if (!embedId) {
    embedId = type;
    type = 'youtube';
  }

  if (type === 'vimeo') {
    iframe.src = 'https://player.vimeo.com/video/' + embedId + '?autoplay=1';
  } else if (type === 'drive') {
    iframe.src = 'https://drive.google.com/file/d/' + embedId + '/preview';
  } else {
    iframe.src = 'https://www.youtube.com/embed/' + embedId + '?autoplay=1';
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
  userCommandNode.textContent = '> Running request: compile_dialogue_' + type.toLowerCase();
  screen.appendChild(userCommandNode);

  const sysReplyNode = document.createElement('div');
  sysReplyNode.className = 'text-modular-muted font-semibold animate-pulse';
  sysReplyNode.textContent = replyMessage;
  screen.appendChild(sysReplyNode);

  screen.scrollTo({ top: screen.scrollHeight, behavior: 'smooth' });

  document.getElementById('form-subject').value = subject;
  document.getElementById('form-message').value = bodyText;

  if (window.innerWidth < 1024) {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      setTimeout(() => {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }
}

/**
 * FORM DISPATCH REDIRECT
 */
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('form-submit-btn');
  const successBox = document.getElementById('form-success-box');
  
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const subject = document.getElementById('form-subject').value;
  const message = document.getElementById('form-message').value;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner animate-spin"></i>';

  try {
    const response = await fetch("https://formsubmit.co/ajax/d20dd06d8be3beebf739bcf2c5064cb5", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: 'Portfolio Inquiry: ' + subject,
        message: message
      })
    });

    if (response.ok) {
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
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
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