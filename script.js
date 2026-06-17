/**
 * SCRIPT.JS - Arsenal Supporters Club Bengaluru (ASCB)
 * Premium Interactive App Logic, SPA Routing, and Resilient Admin Board
 */

// --- INITIAL DEFAULT DATABASE STATE (FALLBACK) ---
const INITIAL_MOCK_DATA = {
  "membersCount": "500+ Gunners Strong",
  "screenings": {
    "featured": {
      "id": "featured-1",
      "competition": "Premier League",
      "homeTeam": "ARSENAL",
      "awayTeam": "CHELSEA",
      "date": "Saturday, 25 Oct at 10:00 PM IST",
      "venue": "Church Street Social, Bengaluru",
      "rsvpLink": "https://forms.gle/ascb-rsvp-placeholder",
      "instaLink": "https://www.instagram.com/ascbengaluru",
      "posterUrl": "images/gallery_screening.png"
    },
    "list": [
      {
        "id": "scr-1",
        "competition": "Premier League",
        "homeTeam": "ARSENAL",
        "awayTeam": "CHELSEA",
        "date": "Saturday, 25 Oct at 10:00 PM IST",
        "venue": "Church Street Social, Bengaluru",
        "rsvpLink": "https://forms.gle/ascb-rsvp-placeholder",
        "instaLink": "https://www.instagram.com/ascbengaluru",
        "posterUrl": "images/gallery_screening.png"
      },
      {
        "id": "scr-2",
        "competition": "North London Derby",
        "homeTeam": "TOTTENHAM",
        "awayTeam": "ARSENAL",
        "date": "Sunday, 09 Nov at 8:00 PM IST",
        "venue": "Doffpub, Indiranagar, Bengaluru",
        "rsvpLink": "https://forms.gle/ascb-rsvp-placeholder",
        "instaLink": "https://www.instagram.com/ascbengaluru",
        "posterUrl": "images/gallery_fans3.png"
      }
    ]
  },
  "announcements": [
    {
      "id": 1,
      "badge": "Pinned",
      "title": "2026/27 Official Memberships Open!",
      "description": "Join the Arsenal Supporters Club Bengaluru for the upcoming season. Members get exclusive access to screenings, priority RSVP, official matchday kit discounts, and entry to member-only turf sessions.",
      "link": "https://forms.gle/ascb-membership-placeholder"
    },
    {
      "id": 2,
      "badge": "Screening",
      "title": "Chelsea Screening Tickets Live",
      "description": "The Gunners face Chelsea at Church Street Social. Due to high demand, RSVP is mandatory. Cover charges apply at the venue entry. RSVP today to secure your entry!",
      "link": "#"
    },
    {
      "id": 3,
      "badge": "Turf Games",
      "title": "Sunday Morning Turf Kickabout",
      "description": "Register for the weekly Gunners Turf session at Astro Arena, HSR Layout. Open to all members. Casual play, mixed skill levels. Slots are limited to 14 players.",
      "link": "#"
    },
    {
      "id": 4,
      "badge": "Merchandise",
      "title": "ASCB Official Scarf & Tee Pre-order",
      "description": "Pre-order the new ASCB Bengaluru Gunners members scarf and red-white tee. Show your colors on matchdays. Shipping starts next week.",
      "link": "#"
    }
  ],
  "gallery": [
    {
      "id": 1,
      "imageUrl": "images/gallery_screening.png",
      "title": "Arsenal vs Man City Screening",
      "category": "screenings"
    },
    {
      "id": 2,
      "imageUrl": "images/gallery_turf.png",
      "title": "Weekly Turf Kickabout",
      "category": "turf"
    },
    {
      "id": 3,
      "imageUrl": "images/gallery_fans1.png",
      "title": "Bengaluru Gunners celebrating Saka's goal",
      "category": "fans"
    },
    {
      "id": 4,
      "imageUrl": "images/gallery_fans2.png",
      "title": "The Indiranagar Arsenal Family",
      "category": "events"
    },
    {
      "id": 5,
      "imageUrl": "images/gallery_matchday.png",
      "title": "Church Street Social Packed Red & White",
      "category": "screenings"
    },
    {
      "id": 6,
      "imageUrl": "images/gallery_trophy.png",
      "title": "Local Supporters Tournament Winners",
      "category": "events"
    },
    {
      "id": 7,
      "imageUrl": "images/gallery_saka.png",
      "title": "Starboy Celebration",
      "category": "fans"
    },
    {
      "id": 8,
      "imageUrl": "images/gallery_odegaard.png",
      "title": "Lifting The Trophy",
      "category": "events"
    },
    {
      "id": 9,
      "imageUrl": "images/gallery_fans3.png",
      "title": "High-Energy Screening Crowds",
      "category": "screenings"
    },
    {
      "id": 10,
      "imageUrl": "images/gallery_pitch.png",
      "title": "Matchday Pitch Details",
      "category": "turf"
    }
  ],
  "team": [
    {
      "id": 1,
      "name": "Nikhil Kamath",
      "role": "Club Lead & President",
      "bio": "Guiding the ASCB vision since 2018. Lifelong Gunner, obsessed with Arsene Wenger's invincibles.",
      "social": { "instagram": "#", "twitter": "#" }
    },
    {
      "id": 2,
      "name": "Rohan Deshmukh",
      "role": "Screening Coordinator",
      "bio": "Ensures every matchday screening in Bengaluru has the loudest crowd and best venue experience.",
      "social": { "instagram": "#", "twitter": "#" }
    },
    {
      "id": 3,
      "name": "Anjali Nair",
      "role": "Community & Socials Manager",
      "bio": "Manages the digital home of Bengaluru Gunners. Connecting fans across the city.",
      "social": { "instagram": "#", "twitter": "#" }
    },
    {
      "id": 4,
      "name": "Siddharth Sen",
      "role": "Events & Turf Coordinator",
      "bio": "Organizes weekend turf matches and friendly tournaments. Keeping the Gooners fit and active.",
      "social": { "instagram": "#", "twitter": "#" }
    }
  ],
  "chants": [
    {
      "id": 1,
      "title": "North London Forever",
      "vibe": "Pre-Match Anthem",
      "lyrics": "North London forever,\nWhatever the weather,\nThese streets are our own.\nAnd my heart will leave you never,\nMy blood will run Red,\nFor the club that I love,\nAnd the team that I call home."
    },
    {
      "id": 2,
      "title": "Come on You Gunners",
      "vibe": "Matchday Mainstay",
      "lyrics": "Come on you Gunners,\nCome on you Gunners,\nCome on you Gunners,\nCome on you Gunners!"
    },
    {
      "id": 3,
      "title": "We Love You Arsenal",
      "vibe": "High Energy Celebration",
      "lyrics": "We love you Arsenal, we do,\nWe love you Arsenal, we do,\nWe love you Arsenal, we do,\nOh, Arsenal we love you!"
    },
    {
      "id": 4,
      "title": "Red Army Bengaluru",
      "vibe": "ASCB Original Vibe",
      "lyrics": "We are the Gunners from Bengaluru,\nWe sing for Arsenal, loyal and true,\nFrom Church Street to Indiranagar, we roar,\nCome on you Gunners, go out and score!"
    }
  ],
  "turfGames": [
    {
      "id": "turf-1",
      "title": "Gunners Turf Matchday #42",
      "date": "Sunday, 26 Oct",
      "time": "7:00 AM - 9:00 AM IST",
      "venue": "Astro Arena, HSR Layout, Bengaluru",
      "status": "Registration Open",
      "spots": "14 Slots Total (8 remaining)"
    },
    {
      "id": "turf-2",
      "title": "ASCB Inter-Club Friendly Tournament",
      "date": "Saturday, 15 Nov",
      "time": "4:00 PM - 8:00 PM IST",
      "venue": "Kick on Turf, Kalyan Nagar, Bengaluru",
      "status": "Upcoming",
      "spots": "4 Teams (Registration starts Nov 1)"
    }
  ]
};

// --- GLOBAL APPLICATION STATE ---
let appData = null;
let currentPlayingChantId = null;
let simulatedImageBase64 = "";

// --- DOM ELEMENTS RETAINER ---
const viewSections = document.querySelectorAll('.view-section');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const headerElement = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const navOverlay = document.getElementById('nav-overlay');

// RSVP Modal Elements
const rsvpModal = document.getElementById('rsvp-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const ticketBookingForm = document.getElementById('ticketBookingForm');
const modalBodyContent = document.getElementById('modal-body-content');

// --- 1. ROUTING SYSTEM (SPA) ---
function handleRouting() {
  let hash = window.location.hash;

  // Support path-based URLs (bridging direct path visits/reloads to hash routing)
  if (!hash && window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    let pathName = window.location.pathname;
    const repoPrefixes = ['/Arsenal-', '/Arsenal'];
    for (const prefix of repoPrefixes) {
      if (pathName.startsWith(prefix + '/')) {
        pathName = pathName.slice(prefix.length);
        break;
      } else if (pathName === prefix) {
        pathName = '/';
        break;
      }
    }
    
    if (pathName !== '/' && pathName !== '/index.html') {
      const pathRoute = pathName.replace(/^\/+/, '');
      window.location.hash = '#/' + pathRoute;
      return; // hashchange event will trigger handleRouting again
    }
  }

  hash = hash || '#/home';
  let viewId = hash.replace('#/', 'view-');

  // Safety fallback for incorrect route
  const targetSection = document.getElementById(viewId);
  if (!targetSection) {
    window.location.hash = '#/home';
    return;
  }

  // Hide all views and remove active status from links
  viewSections.forEach(section => section.classList.remove('active'));
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Clear parent dropdown active highlights
  document.querySelectorAll('.nav-link-dropdown-parent').forEach(p => p.classList.remove('active-parent'));

  // Show target view
  targetSection.classList.add('active');

  // Highlight corresponding navbar items (both desktop & mobile)
  const routeName = hash.replace('#/', '');
  document.querySelectorAll(`[data-view="${routeName}"]`).forEach(link => {
    link.classList.add('active');
    
    // Bubble active highlight to parent dropdown
    const parentDropdown = link.closest('.nav-item-dropdown');
    if (parentDropdown) {
      parentDropdown.querySelector('.nav-link-dropdown-parent').classList.add('active-parent');
    }
  });

  // Close Mobile Menu if open
  closeMobileMenu();

  // Scroll smoothly to top of the page on navigate
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bind routing events
window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', () => {
  initDataEngine().then(() => {
    handleRouting();
    setupHeaderScroll();
    setupMobileMenu();
    setupAdminPanel();
    setupChantsBehavior();
    setupInteractiveEmblem();
    setupModalBehavior();
    
    // Initialize Phase 4 Interactivity Components
    initMatchCountdown();
    initFaqAccordion();
    initInteractiveMap();
    initScrollReveal();
  });
});

// Header scroll color change
function setupHeaderScroll() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      headerElement.classList.add('scrolled');
    } else {
      headerElement.classList.remove('scrolled');
    }
  });
}

// --- 2. MOBILE MENU DRAWER ---
function setupMobileMenu() {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
    navOverlay.classList.toggle('open');
  });

  navOverlay.addEventListener('click', closeMobileMenu);
  
  // Close menu when links are clicked
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  navToggle.classList.remove('open');
  mobileNav.classList.remove('open');
  navOverlay.classList.remove('open');
}

// --- 3. RESILIENT DATA SYNCHRONIZATION ENGINE ---
async function initDataEngine() {
  const hasLocalEdits = localStorage.getItem('ascb_has_local_edits') === 'true';
  const localStore = localStorage.getItem('ascb_data');

  if (hasLocalEdits && localStore) {
    try {
      appData = JSON.parse(localStore);
      console.log('Database sync: Loaded from local browser storage due to local edits.');
      renderAppViews();
      return;
    } catch (e) {
      console.error('Failed to parse LocalStorage data with edits. Resetting edits flag.');
      localStorage.removeItem('ascb_has_local_edits');
    }
  }

  try {
    // 1. Try to fetch from local dev server API
    const response = await fetch('/api/data');
    if (response.ok) {
      appData = await response.json();
      console.log('Database sync: Loaded from server successfully!');
      renderAppViews();
      return;
    } else {
      throw new Error('Server data returned error code');
    }
  } catch (error) {
    console.warn('Database sync: Local dev server unavailable. Trying static data.json...');
    try {
      // 2. Try to fetch static data.json from server directly
      const response = await fetch('data.json');
      if (response.ok) {
        appData = await response.json();
        console.log('Database sync: Loaded from static data.json successfully!');
        renderAppViews();
        return;
      } else {
        throw new Error('Static data.json returned error code');
      }
    } catch (staticError) {
      console.warn('Database sync: Static data.json load failed. Falling back to local storage...', staticError);
      
      // 3. Fallback to local storage (offline or failed network)
      if (localStore) {
        try {
          appData = JSON.parse(localStore);
          console.log('Database sync: Loaded from browser LocalStorage.');
        } catch (e) {
          console.error('Failed to parse LocalStorage data. Resetting to mock baseline.');
          appData = JSON.parse(JSON.stringify(INITIAL_MOCK_DATA));
          localStorage.setItem('ascb_data', JSON.stringify(appData));
        }
      } else {
        console.log('Database sync: First-time load. Initializing baseline database.');
        appData = JSON.parse(JSON.stringify(INITIAL_MOCK_DATA));
        localStorage.setItem('ascb_data', JSON.stringify(appData));
      }
    }
  }

  // Populate UI views with synchronized data
  renderAppViews();
}

async function saveAppData(updatedData) {
  appData = updatedData;
  localStorage.setItem('ascb_data', JSON.stringify(appData));

  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: 'gunners2026',
        data: appData
      })
    });
    
    if (response.ok) {
      console.log('Database sync: Saved changes to server.');
      localStorage.removeItem('ascb_has_local_edits'); // clear local edits flag since server has them now
      return true;
    } else {
      console.warn('Database sync: Post rejected by server. Saved locally.');
      localStorage.setItem('ascb_has_local_edits', 'true'); // set local edits flag
      return false;
    }
  } catch (error) {
    console.warn('Database sync: Server connection offline. Saved locally.');
    localStorage.setItem('ascb_has_local_edits', 'true'); // set local edits flag
    return false;
  }
}

// --- 4. DATA RENDERING SYSTEM ---
function renderAppViews() {
  renderHomePreviews();
  renderScreenings();
  renderTurfGames();
  renderGallery();
  renderAnnouncements();
  renderChants();
  renderTeam();
}

// Generate Team Avatar SVG Placeholder
function getAvatarPlaceholder(name, role) {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  return `
    <div class="team-avatar-placeholder">
      ${initials}
    </div>
  `;
}

// Generate Default Match Screening Poster SVG
function getScreeningPosterPlaceholder(home, away, comp) {
  const isArsenalHome = home.toLowerCase() === 'arsenal';
  const displayOpponent = isArsenalHome ? away : home;
  
  return `
    <div class="screening-poster-default">
      <span class="screening-vs-comp">${comp}</span>
      <div class="screening-vs-banner">
        <span class="screening-vs-team arsenal">${isArsenalHome ? 'ARSENAL' : displayOpponent}</span>
        <span class="screening-vs-circle">VS</span>
        <span class="screening-vs-team">${isArsenalHome ? displayOpponent : 'ARSENAL'}</span>
      </div>
      <div style="font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-gold); margin-top: 15px;">
        Bengaluru Screenings
      </div>
    </div>
  `;
}

// Render Home Page Preview Sections
function renderHomePreviews() {
  // 1. Next Screening Preview
  const featuredScr = appData.screenings.featured || appData.screenings.list[0];
  const featuredContainer = document.getElementById('home-featured-screening');
  
  if (featuredScr) {
    const isArsenalHome = featuredScr.homeTeam.toLowerCase() === 'arsenal';
    const opponent = isArsenalHome ? featuredScr.awayTeam : featuredScr.homeTeam;
    
    let posterContent = '';
    if (featuredScr.posterUrl) {
      posterContent = `<img src="${featuredScr.posterUrl}" alt="Match Poster" style="width: 100%; height: 100%; object-fit: cover;">`;
    } else {
      posterContent = getScreeningPosterPlaceholder(featuredScr.homeTeam, featuredScr.awayTeam, featuredScr.competition);
    }

    featuredContainer.innerHTML = `
      <div class="screening-card">
        <div class="screening-poster-container">
          <span class="screening-badge badge badge-red">Featured Screening</span>
          ${posterContent}
        </div>
        <div class="screening-content">
          <span class="badge badge-gold" style="align-self: flex-start; margin-bottom: 10px;">${featuredScr.competition}</span>
          <h4 class="screening-title">Arsenal vs ${opponent}</h4>
          
          <div class="screening-info-row">
            <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
            <span>${featuredScr.date}</span>
          </div>
          <div class="screening-info-row">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>${featuredScr.venue}</span>
          </div>
          
          <div class="screening-footer">
            <button onclick="window.openRsvpModal('${featuredScr.id}')" class="btn btn-primary">RSVP Seat</button>
            <a href="${featuredScr.instaLink}" target="_blank" class="btn btn-secondary">Details</a>
          </div>
        </div>
      </div>
    `;
  } else {
    featuredContainer.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-secondary);">No upcoming screenings scheduled.</div>`;
  }

  // 2. Announcements Previews (Top 2 updates)
  const homeAnnContainer = document.getElementById('home-announcements-container');
  const previewAnnouncements = appData.announcements.slice(0, 2);
  
  if (previewAnnouncements.length > 0) {
    homeAnnContainer.innerHTML = previewAnnouncements.map(ann => `
      <div class="announcement-card">
        <div class="announcement-meta">
          <span class="badge ${ann.badge === 'Pinned' ? 'badge-red' : 'badge-outline'}">${ann.badge}</span>
          <span class="announcement-date">Latest Update</span>
        </div>
        <h4 class="announcement-title">${ann.title}</h4>
        <p class="announcement-desc">${ann.description.substring(0, 100)}...</p>
        <a href="#/announcements" class="announcement-cta">
          Read More 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    `).join('');
  } else {
    homeAnnContainer.innerHTML = `<div style="color: var(--text-secondary);">No updates available.</div>`;
  }

  // 3. Gallery Previews (First 4 photos)
  const homeGalContainer = document.getElementById('home-gallery-container');
  const previewGallery = appData.gallery.slice(0, 4);
  
  if (previewGallery.length > 0) {
    homeGalContainer.innerHTML = previewGallery.map(img => {
      let imageHtml = '';
      if (img.imageUrl) {
        imageHtml = `<img src="${img.imageUrl}" alt="${img.title}" style="width: 100%; height: 100%; object-fit: cover;">`;
      } else {
        imageHtml = `
          <div class="gallery-img-placeholder">
            <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 5H5l3.5-4.5z"/></svg>
            <span>${img.title}</span>
            <small>${img.category}</small>
          </div>
        `;
      }

      return `
        <div class="gallery-item" onclick="window.location.hash = '#/gallery'">
          ${imageHtml}
          <div class="gallery-overlay">
            <h5 class="gallery-item-title">${img.title}</h5>
            <span class="gallery-item-category">${img.category}</span>
          </div>
        </div>
      `;
    }).join('');
  } else {
    homeGalContainer.innerHTML = `<div style="color: var(--text-secondary);">No gallery items available.</div>`;
  }
}

// Render Screenings Page
function renderScreenings() {
  const container = document.getElementById('screenings-list-container');
  const screeningsList = appData.screenings.list || [];
  
  if (screeningsList.length > 0) {
    container.innerHTML = screeningsList.map(scr => {
      const isArsenalHome = scr.homeTeam.toLowerCase() === 'arsenal';
      const opponent = isArsenalHome ? scr.awayTeam : scr.homeTeam;
      
      let posterContent = '';
      if (scr.posterUrl) {
        posterContent = `<img src="${scr.posterUrl}" alt="Match Poster" style="width: 100%; height: 100%; object-fit: cover;">`;
      } else {
        posterContent = getScreeningPosterPlaceholder(scr.homeTeam, scr.awayTeam, scr.competition);
      }

      return `
        <div class="screening-card">
          <div class="screening-poster-container">
            ${posterContent}
          </div>
          <div class="screening-content">
            <span class="badge badge-gold" style="align-self: flex-start; margin-bottom: 10px;">${scr.competition}</span>
            <h4 class="screening-title">Arsenal vs ${opponent}</h4>
            
            <div class="screening-info-row">
              <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
              <span>${scr.date}</span>
            </div>
            <div class="screening-info-row">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>${scr.venue}</span>
            </div>
            
            <div class="screening-footer">
              <button onclick="window.openRsvpModal('${scr.id}')" class="btn btn-primary">RSVP Seat</button>
              <a href="${scr.instaLink}" target="_blank" class="btn btn-secondary">Instagram</a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No match screenings scheduled at the moment.</div>`;
  }
}

// Render Turf Games Page
function renderTurfGames() {
  const container = document.getElementById('turf-list-container');
  const list = appData.turfGames || [];
  
  if (list.length > 0) {
    container.innerHTML = list.map(game => `
      <div class="turf-card">
        <div class="turf-card-header">
          <span class="badge badge-gold">Weekend Turf</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${game.date}</span>
        </div>
        <div class="turf-card-body">
          <h4 class="turf-card-title">${game.title}</h4>
          <span class="turf-spots-left">${game.spots}</span>
          <div class="turf-info-list">
            <div class="turf-info-item">
              <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span>${game.time}</span>
            </div>
            <div class="turf-info-item">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>${game.venue}</span>
            </div>
          </div>
        </div>
        <div class="turf-card-footer">
          <button class="btn btn-primary" onclick="alert('Registration Successful! Coordinate details have been sent to your registered email.')" ${game.status.toLowerCase().includes('open') ? '' : 'disabled'}>
            ${game.status.toLowerCase().includes('open') ? 'Register Spot' : 'Registration Closed'}
          </button>
        </div>
      </div>
    `).join('');
  } else {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No weekend turf games scheduled right now.</div>`;
  }
}

// Render Gallery Page
function renderGallery() {
  const container = document.getElementById('gallery-grid-container');
  const photos = appData.gallery || [];
  
  if (photos.length > 0) {
    container.innerHTML = photos.map(photo => {
      let mediaNode = '';
      if (photo.imageUrl) {
        mediaNode = `<img src="${photo.imageUrl}" alt="${photo.title}" style="width: 100%; height: 100%; object-fit: cover;">`;
      } else {
        mediaNode = `
          <div class="gallery-img-placeholder">
            <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 5H5l3.5-4.5z"/></svg>
            <span>${photo.title}</span>
            <small>${photo.category}</small>
          </div>
        `;
      }
      return `
        <div class="gallery-item" data-category="${photo.category}">
          ${mediaNode}
          <div class="gallery-overlay">
            <h5 class="gallery-item-title">${photo.title}</h5>
            <span class="gallery-item-category">${photo.category}</span>
          </div>
        </div>
      `;
    }).join('');
    
    setupGalleryFilters();
  } else {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No photos in the gallery yet.</div>`;
  }
}

function setupGalleryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterBtns.forEach(btn => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      newBtn.classList.add('active');
      
      const filter = e.target.getAttribute('data-filter');
      
      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Render Announcements Page
function renderAnnouncements() {
  const container = document.getElementById('announcements-list-container');
  const list = appData.announcements || [];
  
  if (list.length > 0) {
    container.innerHTML = list.map(ann => {
      let ctaHtml = '';
      if (ann.link && ann.link !== '#') {
        ctaHtml = `<a href="${ann.link}" target="_blank" class="announcement-cta">Explore Event Link →</a>`;
      }
      
      let badgeColor = 'badge-outline';
      if (ann.badge === 'Pinned') badgeColor = 'badge-red';
      else if (ann.badge === 'Screening') badgeColor = 'badge-gold';
      else if (ann.badge === 'Turf Games') badgeColor = 'badge-navy';

      return `
        <div class="announcement-card">
          <div class="announcement-meta">
            <span class="badge ${badgeColor}">${ann.badge}</span>
            <span class="announcement-date">Supporters Club Update</span>
          </div>
          <h3 class="announcement-title">${ann.title}</h3>
          <p class="announcement-desc">${ann.description}</p>
          ${ctaHtml}
        </div>
      `;
    }).join('');
  } else {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No official announcements posted yet.</div>`;
  }
}

// Render Chants Page
function renderChants() {
  const container = document.getElementById('chants-list-container');
  const chants = appData.chants || [];
  
  if (chants.length > 0) {
    container.innerHTML = chants.map(chant => `
      <div class="chant-card" id="chant-card-${chant.id}">
        <span class="badge badge-outline chant-badge">${chant.vibe}</span>
        <h4 class="chant-title">${chant.title}</h4>
        <div class="chant-lyrics-box">${chant.lyrics}</div>
        <div class="chant-action-row">
          <div class="chant-play-btn" onclick="toggleChantPlayback(${chant.id})">
            <svg class="chant-play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            <svg class="chant-stop-icon" viewBox="0 0 24 24" style="display: none; fill: var(--primary-red);"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            <span class="chant-btn-text">Sing Chant</span>
          </div>
          <div class="chant-equalizer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function toggleChantPlayback(chantId) {
  const card = document.getElementById(`chant-card-${chantId}`);
  const playIcon = card.querySelector('.chant-play-icon');
  const stopIcon = card.querySelector('.chant-stop-icon');
  const btnText = card.querySelector('.chant-btn-text');

  if (currentPlayingChantId && currentPlayingChantId !== chantId) {
    const oldCard = document.getElementById(`chant-card-${currentPlayingChantId}`);
    if (oldCard) {
      oldCard.classList.remove('playing');
      oldCard.querySelector('.chant-play-icon').style.display = 'block';
      oldCard.querySelector('.chant-stop-icon').style.display = 'none';
      oldCard.querySelector('.chant-btn-text').innerText = 'Sing Chant';
    }
  }

  if (card.classList.contains('playing')) {
    card.classList.remove('playing');
    playIcon.style.display = 'block';
    stopIcon.style.display = 'none';
    btnText.innerText = 'Sing Chant';
    currentPlayingChantId = null;
  } else {
    card.classList.add('playing');
    playIcon.style.display = 'none';
    stopIcon.style.display = 'block';
    btnText.innerText = 'Stop Audio';
    currentPlayingChantId = chantId;

    playSynthesizedStadiumChant(chantId);
  }
}

function playSynthesizedStadiumChant(chantId) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    const notes = chantId === 1 ? [110, 137.5, 165] : [130, 164, 196];
    const oscillators = [];
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, ctx.currentTime);
    filter.Q.setValueAtTime(5, ctx.currentTime);
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    
    notes.forEach(frequency => {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      osc.connect(filter);
      oscillators.push(osc);
    });
    
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillators.forEach(osc => osc.start());
    
    setTimeout(() => {
      try {
        oscillators.forEach(osc => osc.stop());
        ctx.close();
        
        if (currentPlayingChantId === chantId) {
          toggleChantPlayback(chantId);
        }
      } catch (e) {}
    }, 3500);
  } catch (e) {
    console.warn('Audio synthesis failed.', e);
  }
}

// Render Core Members Team Page
function renderTeam() {
  const container = document.getElementById('team-list-container');
  const team = appData.team || [];
  
  if (team.length > 0) {
    container.innerHTML = team.map(member => `
      <div class="team-card">
        <div class="team-avatar-container">
          ${getAvatarPlaceholder(member.name, member.role)}
        </div>
        <div class="team-card-content">
          <h4 class="team-name">${member.name}</h4>
          <span class="team-role">${member.role}</span>
          <p class="team-role" style="font-size: 0.7rem; color: var(--text-muted); margin-top: -10px;">ASCB Committee</p>
          <p class="team-bio">${member.bio}</p>
          <div class="team-socials">
            <a href="${member.social.instagram}" target="_blank" class="team-social-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/></svg>
            </a>
            <a href="${member.social.twitter}" target="_blank" class="team-social-icon">
              <svg viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// --- 5. INTERACTIVE EMBLEM EASTER EGG ---
function setupInteractiveEmblem() {
  const emblem = document.getElementById('emblem-interactive');
  if (emblem) {
    emblem.addEventListener('click', () => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(250, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.3);
          
          gain.gain.setValueAtTime(0.05, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
          
          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.start();
          osc.stop(ctx.currentTime + 0.35);
        }
      } catch (e) {}
      
      alert('Come on you Gunners! COYG! 🔴⚪');
    });
  }
}

// --- 6. TICKET BOOKING MODAL ACTIONS ---
function setupModalBehavior() {
  // Close modal click
  modalCloseBtn.addEventListener('click', closeRsvpModal);
  
  // Close modal when clicking backdrop overlay
  rsvpModal.addEventListener('click', (e) => {
    if (e.target === rsvpModal) closeRsvpModal();
  });

  // Handle Form Submission - Ticket Generation Flow
  ticketBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const matchId = document.getElementById('booking-match-id').value;
    const name = document.getElementById('booking-name').value;
    const email = document.getElementById('booking-email').value;
    const kit = document.getElementById('booking-jersey').value;

    // Retrieve specific match data
    const list = appData.screenings.list || [];
    const match = list.find(m => m.id === matchId) || appData.screenings.featured;

    const oppTeam = match.homeTeam.toLowerCase() === 'arsenal' ? match.awayTeam : match.homeTeam;
    
    // Generate simulated pass codes
    const seatId = 'GATE-' + String.fromCharCode(65 + Math.floor(Math.random() * 6)) + '-' + Math.floor(Math.random() * 50 + 1);
    const barcode = 'ASCB' + Date.now().toString().substring(8);
    const passCode = 'PAS-' + Math.floor(100000 + Math.random() * 900000);

    let kitText = 'None';
    if (kit === 'red-scarf') kitText = 'ASCB Red Scarf';
    else if (kit.startsWith('tee')) kitText = 'Official Supporter Tee (' + kit.substring(4).toUpperCase() + ')';

    // Replace modal form content with beautiful Ticket pass!
    modalBodyContent.innerHTML = `
      <div class="ticket-pass">
        <span class="ticket-pass-comp">${match.competition}</span>
        <h4 class="ticket-pass-match">Arsenal vs ${oppTeam}</h4>
        
        <div class="ticket-pass-info-grid">
          <div>
            <div class="ticket-pass-label">Holder</div>
            <div class="ticket-pass-val">${name}</div>
          </div>
          <div>
            <div class="ticket-pass-label">Seat Assignment</div>
            <div class="ticket-pass-val" style="color: var(--accent-gold); font-weight: 800;">${seatId}</div>
          </div>
          <div>
            <div class="ticket-pass-label">Gate opens</div>
            <div class="ticket-pass-val">30m Before Kickoff</div>
          </div>
          <div>
            <div class="ticket-pass-label">Supporter Kit</div>
            <div class="ticket-pass-val">${kitText}</div>
          </div>
          <div style="grid-column: 1/-1;">
            <div class="ticket-pass-label">Venue Location</div>
            <div class="ticket-pass-val">${match.venue}</div>
          </div>
        </div>
        
        <div class="ticket-pass-footer">
          <div class="ticket-pass-barcode">${barcode}</div>
          <!-- Simulated Vector QR Code -->
          <svg class="ticket-pass-qrcode" viewBox="0 0 100 100">
            <rect x="10" y="10" width="20" height="20" fill="black"/>
            <rect x="15" y="15" width="10" height="10" fill="white"/>
            <rect x="70" y="10" width="20" height="20" fill="black"/>
            <rect x="75" y="15" width="10" height="10" fill="white"/>
            <rect x="10" y="70" width="20" height="20" fill="black"/>
            <rect x="15" y="75" width="10" height="10" fill="white"/>
            <rect x="40" y="40" width="20" height="20" fill="black"/>
            <!-- random pixel simulations -->
            <rect x="35" y="20" width="10" height="10" fill="black"/>
            <rect x="50" y="15" width="10" height="10" fill="black"/>
            <rect x="70" y="45" width="10" height="10" fill="black"/>
            <rect x="80" y="75" width="15" height="10" fill="black"/>
            <rect x="45" y="70" width="10" height="15" fill="black"/>
          </svg>
        </div>
      </div>
      
      <div style="margin-top: 25px; display: flex; flex-direction: column; gap: 10px;">
        <button onclick="window.printTicket()" class="btn btn-primary" style="width: 100%;">Print Pass</button>
        <button onclick="window.closeRsvpModal()" class="btn btn-secondary" style="width: 100%;">Close Booking</button>
      </div>
    `;
  });
}

// Global functions for modal access
window.openRsvpModal = function(screeningId) {
  // Reset modal body markup to the booking form
  modalBodyContent.innerHTML = `
    <form id="ticketBookingForm">
      <input type="hidden" id="booking-match-id" value="${screeningId}">
      <div class="form-group">
        <label class="form-label" for="booking-name">Full Name</label>
        <input class="form-input" type="text" id="booking-name" placeholder="John Doe" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="booking-email">Email Address</label>
        <input class="form-input" type="email" id="booking-email" placeholder="john@example.com" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="booking-jersey">Select Supporter Kit (Optional Drop)</label>
        <select class="form-input" id="booking-jersey" style="background-color: var(--dark-bg);">
          <option value="none">Entry Ticket Only</option>
          <option value="red-scarf">ASCB Members Red Scarf (+ ₹299)</option>
          <option value="tee-s">Official Supporter Tee [S] (+ ₹499)</option>
          <option value="tee-m">Official Supporter Tee [M] (+ ₹499)</option>
          <option value="tee-l">Official Supporter Tee [L] (+ ₹499)</option>
          <option value="tee-xl">Official Supporter Tee [XL] (+ ₹499)</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Confirm RSVP & Get Pass</button>
    </form>
  `;
  
  // Re-bind submit listener since DOM node was replaced
  setupModalBehavior();

  // Show modal
  rsvpModal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Lock background scrolling
};

window.closeRsvpModal = function() {
  rsvpModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Release background scrolling
};

window.printTicket = function() {
  window.print();
};

// --- 7. ADMIN PANEL CONTROLLER ---
function setupAdminPanel() {
  const loginForm = document.getElementById('adminLoginForm');
  const publishForm = document.getElementById('adminPublishForm');
  const lockScreen = document.getElementById('admin-lock');
  const dashboard = document.getElementById('admin-dashboard');
  const logoutBtn = document.getElementById('adminLogout');
  const errorMsg = document.getElementById('admin-error');
  const successMsg = document.getElementById('admin-success');
  const typeSelect = document.getElementById('pub-type');

  const screeningFields = document.getElementById('screening-only-fields');
  const galleryFields = document.getElementById('gallery-only-fields');
  const announcementFields = document.getElementById('announcement-only-fields');
  const descGroup = document.getElementById('group-description');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('adminPassword').value;
    
    if (pass === 'gunners2026') {
      lockScreen.style.display = 'none';
      dashboard.style.display = 'block';
      errorMsg.style.display = 'none';
      loginForm.reset();
      sessionStorage.setItem('ascb_logged_in', 'true');
    } else {
      errorMsg.style.display = 'block';
    }
  });

  if (sessionStorage.getItem('ascb_logged_in') === 'true') {
    lockScreen.style.display = 'none';
    dashboard.style.display = 'block';
  }

  logoutBtn.addEventListener('click', () => {
    lockScreen.style.display = 'block';
    dashboard.style.display = 'none';
    sessionStorage.removeItem('ascb_logged_in');
  });

  typeSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    
    screeningFields.style.display = 'none';
    galleryFields.style.display = 'none';
    announcementFields.style.display = 'none';
    descGroup.style.display = 'block';

    if (val === 'screening') {
      screeningFields.style.display = 'grid';
      toggleFieldsRequired(screeningFields, true);
      toggleFieldsRequired(announcementFields, false);
      toggleFieldsRequired(galleryFields, false);
    } else if (val === 'gallery') {
      galleryFields.style.display = 'block';
      descGroup.style.display = 'none';
      toggleFieldsRequired(screeningFields, false);
      toggleFieldsRequired(announcementFields, false);
      toggleFieldsRequired(galleryFields, true);
    } else if (val === 'announcement') {
      announcementFields.style.display = 'block';
      toggleFieldsRequired(screeningFields, false);
      toggleFieldsRequired(announcementFields, true);
      toggleFieldsRequired(galleryFields, false);
    }
  });

  function toggleFieldsRequired(container, isRequired) {
    const inputs = container.querySelectorAll('input, select');
    inputs.forEach(input => {
      if (input.id === 'pub-rsvp' || input.id === 'pub-image-url') return;
      if (isRequired) {
        input.setAttribute('required', 'true');
      } else {
        input.removeAttribute('required');
      }
    });
  }

  window.handleImageUpload = function(event) {
    const file = event.target.files[0];
    const uploadText = document.getElementById('upload-text');
    const uploadZone = document.getElementById('upload-zone');
    
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        simulatedImageBase64 = e.target.result;
        uploadText.innerHTML = `<strong>File Loaded:</strong> ${file.name} (Simulated)`;
        uploadZone.style.borderColor = "var(--accent-gold)";
        uploadZone.style.backgroundColor = "rgba(197, 155, 39, 0.05)";
      };
      reader.readAsDataURL(file);
    }
  };

  publishForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const type = typeSelect.value;
    const title = document.getElementById('pub-title').value;
    const description = document.getElementById('pub-desc').value;
    const publishedData = JSON.parse(JSON.stringify(appData));
    
    let isSuccess = false;

    if (type === 'screening') {
      const homeTeam = document.getElementById('pub-hometeam').value.toUpperCase();
      const awayTeam = document.getElementById('pub-awayteam').value.toUpperCase();
      const date = document.getElementById('pub-date').value;
      const venue = document.getElementById('pub-venue').value;
      const rsvp = document.getElementById('pub-rsvp').value || '#';
      const comp = document.getElementById('pub-comp').value;
      
      const newScreening = {
        id: 'scr-' + Date.now(),
        competition: comp,
        homeTeam: homeTeam,
        awayTeam: awayTeam,
        date: date,
        venue: venue,
        rsvpLink: rsvp,
        instaLink: 'https://www.instagram.com/ascbengaluru',
        posterUrl: simulatedImageBase64 || ""
      };

      publishedData.screenings.list.unshift(newScreening);
      publishedData.screenings.featured = newScreening;
      isSuccess = await saveAppData(publishedData);
      
    } else if (type === 'announcement') {
      const badge = document.getElementById('pub-badge').value;
      
      const newAnn = {
        id: Date.now(),
        badge: badge,
        title: title,
        description: description,
        link: '#'
      };

      publishedData.announcements.unshift(newAnn);
      isSuccess = await saveAppData(publishedData);

    } else if (type === 'gallery') {
      const cat = document.getElementById('pub-category').value;
      
      const newPhoto = {
        id: Date.now(),
        imageUrl: simulatedImageBase64 || "",
        title: title,
        category: cat
      };

      publishedData.gallery.unshift(newPhoto);
      isSuccess = await saveAppData(publishedData);
    }

    if (isSuccess || true) {
      successMsg.style.display = 'block';
      publishForm.reset();
      
      simulatedImageBase64 = "";
      document.getElementById('upload-text').innerHTML = "Click to simulate file upload";
      document.getElementById('upload-zone').removeAttribute('style');
      
      renderAppViews();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 4000);
    }
  });
}

// --- 8. PHASE 4 INTERACTIVE OVERHAUL INITIALIZATIONS ---

let countdownInterval = null;

function parseMatchDate(dateStr) {
  try {
    let cleanStr = dateStr.replace(/Saturday,|Sunday,|Monday,|Tuesday,|Wednesday,|Thursday,|Friday,/gi, '').trim();
    cleanStr = cleanStr.replace(/\bat\b/gi, '').trim();
    cleanStr = cleanStr.replace(/\bIST\b/gi, '+0530').trim(); // India Standard Time Offset
    
    // Split and insert year 2026
    const parts = cleanStr.split(/\s+/);
    if (parts.length >= 4) {
      cleanStr = `${parts[0]} ${parts[1]} 2026 ${parts[2]} ${parts[3]} ${parts[4] || ''}`;
    }
    return new Date(cleanStr);
  } catch (e) {
    console.error("Failed to parse match date:", dateStr, e);
    return null;
  }
}

function initMatchCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  
  const list = appData?.screenings?.list || [];
  if (list.length === 0) {
    const widget = document.getElementById('countdown-widget');
    if (widget) widget.style.display = 'none';
    return;
  }
  
  const now = new Date();
  let nextMatch = null;
  let nextMatchDate = null;
  
  list.forEach(scr => {
    const mDate = parseMatchDate(scr.date);
    if (mDate && mDate > now) {
      if (!nextMatchDate || mDate < nextMatchDate) {
        nextMatchDate = mDate;
        nextMatch = scr;
      }
    }
  });
  
  // Fallback to first screening item + 2 days if no future dates found
  if (!nextMatch) {
    nextMatch = appData.screenings.featured || list[0];
    nextMatchDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  }
  
  const widget = document.getElementById('countdown-widget');
  if (!widget) return;
  
  widget.style.display = 'block';
  const oppTeam = nextMatch.homeTeam.toLowerCase() === 'arsenal' ? nextMatch.awayTeam : nextMatch.homeTeam;
  document.getElementById('cd-match-name').innerText = `Arsenal vs ${oppTeam} • ${nextMatch.competition}`;
  
  function updateClock() {
    const tNow = new Date().getTime();
    const dist = nextMatchDate.getTime() - tNow;
    
    if (dist < 0) {
      document.getElementById('cd-days').innerText = '00';
      document.getElementById('cd-hours').innerText = '00';
      document.getElementById('cd-mins').innerText = '00';
      document.getElementById('cd-secs').innerText = '00';
      document.getElementById('cd-match-name').innerText = `Matchday Live! Join us at ${nextMatch.venue}`;
      clearInterval(countdownInterval);
      return;
    }
    
    const days = Math.floor(dist / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dist % (1000 * 60)) / 1000);
    
    document.getElementById('cd-days').innerText = String(days).padStart(2, '0');
    document.getElementById('cd-hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').innerText = String(minutes).padStart(2, '0');
    document.getElementById('cd-secs').innerText = String(seconds).padStart(2, '0');
  }
  
  updateClock();
  countdownInterval = setInterval(updateClock, 1000);
}

function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      if (!item) return;
      
      const isActive = item.classList.contains('active');
      
      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      // Toggle the clicked one
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

function initInteractiveMap() {
  const tooltip = document.getElementById('map-tooltip');
  const nodes = document.querySelectorAll('.map-node');
  
  if (!tooltip) return;
  
  nodes.forEach(node => {
    node.addEventListener('mouseover', () => {
      const venue = node.getAttribute('data-venue');
      const details = node.getAttribute('data-details');
      
      tooltip.innerHTML = `<strong style="color:var(--accent-gold); display:block; margin-bottom: 2px;">${venue}</strong>${details}`;
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
    });
    
    node.addEventListener('mouseout', () => {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translateX(-50%) translateY(0)';
      tooltip.innerHTML = 'Hover over a hub point to view screening info';
    });
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.home-about-section, .home-membership-section, .home-preview-section, .about-feat-card, .benefit-item, .screening-card, .turf-card, .chant-card, .team-card, .announcement-card');
  elements.forEach(el => el.classList.add('reveal'));
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });
  
  elements.forEach(el => observer.observe(el));
}
