// =============================================
// RENDER FUNCTIONS — كل الكونتنت بييجي من data.js
// =============================================

function renderFooter(id) {
  document.getElementById(id).innerHTML = `
    <div class="footer-copy">${PROFILE.footerCopy.replace('{year}', new Date().getFullYear())}</div>
    <div class="footer-logo">${PROFILE.nameShort}<span>.</span>${PROFILE.name.split(' ').slice(1).join('-')}</div>
    <div class="footer-copy">${PROFILE.footerLocation}</div>`;
}

function renderHome() {
  // Nav logo
  document.getElementById('navLogo').innerHTML = `${PROFILE.logo}`;
  document.getElementById('heroPhoto').alt = PROFILE.name;

  // Stats HTML
  const statsHTML = PROFILE.stats.map(s => `
    <div class="stat-item">
      <div class="stat-num">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  document.getElementById('heroContent').innerHTML = `
    <div class="hero-label">${PROFILE.heroAvailability}</div>
    <h1 class="hero-title">${PROFILE.heroTitle}</h1>
    <p class="hero-desc">${PROFILE.heroBio}</p>
    <div class="hero-actions d-flex flex-column flex-sm-row align-items-sm-center">
      <button class="btn-primary" data-page="projects">
        View Work
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
      <button class="btn-secondary" data-page="about">About Me</button>
    </div>
    <div class="hero-stats">${statsHTML}</div>`;

  renderFooter('footerHome');
}

function renderAbout() {
  document.getElementById('aboutPhoto').alt = PROFILE.name;

  // Tags
  document.getElementById('aboutTags').innerHTML =
    PROFILE.aboutTags.map(t => `<span class="tag">${t}</span>`).join('');

  // Bio paragraphs
  document.getElementById('aboutBio').innerHTML =
    PROFILE.aboutBio.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

  // Info table
  document.getElementById('infoList').innerHTML = PROFILE.infoTable.map(row => `
    <li class="info-item">
      <span class="info-key">${row.key}</span>
      <span class="info-val" ${row.highlight ? 'style="color: #4ADE80;"' : ''}>${row.value}</span>
    </li>`).join('');

  // Resume card
  document.getElementById('resumeCard').innerHTML = `
    <a href="${PROFILE.resume.file}" class="resume-card reveal" download>
      <div class="resume-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" stroke-width="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      </div>
      <div class="resume-info">
        <div class="resume-title">${PROFILE.resume.label}</div>
        <div class="resume-sub">${PROFILE.resume.meta}</div>
      </div>
      <div class="resume-arrow">→</div>
    </a>`;

  renderFooter('footerAbout');
}

function renderSkillBar(skill) {
  const pct = skill.pct / 100;
  return `
    <div class="skill-bar-wrap">
      <div class="skill-bar-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-pct">${skill.pct}%</span>
      </div>
      <div class="skill-track"><div class="skill-fill" data-pct="${pct}"></div></div>
    </div>`;
}

function renderSkills() {
  // Development skill bars
  document.getElementById('devSkills').innerHTML =
    `<div class="skill-cat-title">Development Skills</div>` +
    SKILLS.devSkills.map(renderSkillBar).join('');

  // Design skill bars
  document.getElementById('designSkillsEl').innerHTML =
    `<div class="skill-cat-title">Design Skills</div>` +
    SKILLS.designSkills.map(renderSkillBar).join('');

  // Achievements — kept static as they're not in data.js
  // (you can add an ACHIEVEMENTS array to data.js later if needed)
  document.getElementById('achievementsEl').innerHTML = `
    <div class="skill-cat-title">ACHIEVEMENTS</div>
    <div class="cert-card">
      <div class="cert-badge">💻</div>
      <div class="cert-body">
        <div class="cert-issuer">GDG Mentorship Program</div>
        <div class="cert-name">Focused on front-end development, responsive web design, and practical project building.</div>
        <div class="cert-date">Issued: May 2026</div>
      </div>
    </div>
    <div class="cert-card">
      <div class="cert-badge">🏅</div>
      <div class="cert-body">
        <div class="cert-issuer">Dev Arena Competition</div>
        <div class="cert-name">Won " Most Collaborative Team " award for delivering a successful team project and maintaining effective collaboration.</div>
        <div class="cert-date">Issued: October 2025</div>
      </div>
    </div>`;

  document.getElementById('experiences').innerHTML = `
    <div class="skill-cat-title">EXPERIENCES</div>
    <div class="cert-card">
      <div class="cert-badge">💻</div>
      <div class="cert-body">
        <div class="cert-issuer">Digital Egypt Pioneers Initiative (DEPI) — React JS</div>
        <div class="cert-name">Ministry of Communications and Information Technology (MCIT)</div>
        <div class="cert-name">
        <ul>
        <li>Participated in the Digital Egypt Pioneers Initiative (DEPI)</li>
        <li>Received technical training in React.js</li>
        <li>Worked on practical tasks and projects related to the training track</li>
        </ul>
        </div>
        <div class="cert-date">June 2026 – Present</div>
      </div>
    </div>
    <div class="cert-card">
      <div class="cert-badge">💻</div>
      <div class="cert-body">
        <div class="cert-issuer">Freelance Front-End Developer — ITIDA Gigs</div>
        <div class="cert-name">
        <ul>
        <li>Secured a client project through a submitted proposal on the ITIDA Gigs freelancing platform</li>
        <li>Independently built and delivered a complete blog website using HTML5 and CSS3</li>
        <li>Completed the project end-to-end and received payment upon successful delivery</li>
        </ul>
        </div>
        <div class="cert-date">2026</div>
      </div>
    </div>`;

  // Tools
  document.getElementById('toolsEl').innerHTML =
    `<div class="skill-cat-title">Tools & Software</div>
     <div class="row row-cols-2 row-cols-sm-3 g-3">` +
    SKILLS.tools.map(t => `<div class="col"><div class="tool-chip h-100">${t}</div></div>`).join('') +
    `</div>`;

  // Certifications
  document.getElementById('certsEl').innerHTML =
    `<div class="skill-cat-title">Certifications & Education</div>` +
    SKILLS.certifications.map(c => `
      <div class="cert-card">
        <div class="cert-badge">${c.emoji}</div>
        <div class="cert-body">
          <div class="cert-issuer">${c.issuer}</div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-date">${c.date}</div>
        </div>
      </div>`).join('');

  renderFooter('footerSkills');
}

function renderProjects() {
  document.getElementById('projectsGrid').innerHTML = PROJECTS.map((p, i) => {
    const thumbLabel = p.title.split(' — ')[0];
    const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    return `
      <div class="col-lg-6 project-item" data-cat="${p.cat}">
        <div class="project-card reveal h-100" role="button" tabindex="0" aria-label="View details: ${p.title}" onclick="openModal(${i})">
          <div class="project-thumb">
            <div class="project-thumb-inner" style="background: ${p.thumbBg};">${thumbLabel}</div>
            <div class="project-overlay"><div class="project-overlay-btn">View Details →</div></div>
          </div>
          <div class="project-body">
            <div class="project-cat">${p.catLabel}</div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.cardDesc}</p>
            <div class="project-footer">
              <div class="project-tags">${tagsHTML}</div>
              <span class="project-link">Explore →</span>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');

  renderFooter('footerProjects');
}

function renderContact() {
  // Contact items
  document.getElementById('contactItems').innerHTML = CONTACT.items.map(item => `
    <div class="contact-info-item">
      <div class="contact-icon">${item.icon}</div>
      <div>
        <div class="contact-info-label">${item.label}</div>
        <div class="contact-info-val">${item.href ? `<a href="${item.href}">${item.value}</a>` : item.value}</div>
      </div>
    </div>`).join('');

  // Social links
  document.getElementById('socialLinks').innerHTML = `
    <div class="skill-cat-title" style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border);">Find Me Online</div>
    <div class="social-links">` +
    CONTACT.social.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-btn" title="${s.name}" aria-label="${s.name}">${s.icon}</a>`).join('') +
    `</div>`;

  renderFooter('footerContact');
}

// =============================================
// BOOT — render everything on page load
// =============================================
renderHome();
renderAbout();
renderSkills();
renderProjects();
renderContact();

// =============================================
// NAVIGATION & PAGE ROUTING (hash-based: back button + deep links work)
// =============================================
const PAGES = ['home', 'about', 'skills', 'projects', 'contact'];

function showPage(page, push = true) {
  if (!PAGES.includes(page)) page = 'home';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(initReveal, 100);
  if (page === 'skills') setTimeout(animateSkillBars, 300);
  document.querySelectorAll('a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  if (push && location.hash !== '#' + page) history.pushState(null, '', '#' + page);
}

// One delegated handler for every nav link / button that has data-page
document.addEventListener('click', e => {
  const el = e.target.closest('[data-page]');
  if (!el) return;
  e.preventDefault();
  showPage(el.dataset.page);
});
window.addEventListener('popstate', () => showPage(location.hash.slice(1), false));

// Close the mobile drawer if the window grows past the desktop breakpoint
window.matchMedia('(min-width: 992px)').addEventListener('change', e => {
  if (e.matches) bootstrap.Offcanvas.getInstance(document.getElementById('navDrawer'))?.hide();
});

// =============================================
// THEME (remembered between visits; keeps Bootstrap's own theme in sync)
// =============================================
const html = document.documentElement;
function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  html.setAttribute('data-bs-theme', theme);
  try { localStorage.setItem('theme', theme); } catch (_) { }
}
let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (_) { }
setTheme(savedTheme === 'light' ? 'light' : 'dark');
document.getElementById('themeToggle').addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// =============================================
// SCROLL REVEAL
// =============================================
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function initReveal() {
  document.querySelectorAll('.page.active .reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

// =============================================
// SKILL BAR ANIMATION
// =============================================
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.width = (parseFloat(bar.dataset.pct) * 100) + '%';
    bar.classList.add('animated');
  });
}

// =============================================
// PROJECT FILTER (buttons built from PROJECT_FILTERS; empty categories hidden)
// =============================================
(function initFilters() {
  const box = document.getElementById('projectsFilter');
  const used = new Set(PROJECTS.map(p => p.cat));
  const filters = PROJECT_FILTERS.filter(f => f.key === 'all' || used.has(f.key));
  box.innerHTML = filters.map((f, i) =>
    `<button type="button" class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f.key}" aria-pressed="${i === 0}">${f.label}</button>`
  ).join('');

  box.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    box.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', b === btn);
    });
    document.querySelectorAll('.project-item').forEach(item => {
      const show = btn.dataset.filter === 'all' || item.dataset.cat === btn.dataset.filter;
      item.classList.toggle('d-none', !show);
      if (show) {
        item.style.animation = 'none';
        void item.offsetWidth;                  // restart animation
        item.style.animation = 'fadeIn 0.4s ease';
      }
    });
  });

  // Keyboard access for the project cards
  document.getElementById('projectsGrid').addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('project-card')) {
      e.preventDefault();
      e.target.click();
    }
  });
})();

// =============================================
// PROJECT MODAL (Bootstrap Modal: focus trap, Esc, scroll-lock built in)
// =============================================
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));

function openModal(index) {
  const p = PROJECTS[index];
  document.getElementById('modalCat').textContent = p.catLabel;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.modalDesc;
  document.getElementById('modalClient').textContent = p.client;
  document.getElementById('modalYear').textContent = p.year;
  document.getElementById('modalRole').textContent = p.role;
  document.getElementById('modalDuration').textContent = p.duration;
  document.getElementById('modalImage').style.background = p.thumbBg;
  document.getElementById('modalImage').textContent = p.title.split(' — ')[0];
  document.getElementById('modalLive').href = p.liveUrl;
  document.getElementById('modalCase').href = p.caseUrl;
  projectModal.show();
}

// =============================================
// CONTACT FORM
// Sends to CONTACT.formEndpoint if set, otherwise opens the visitor's email app.
// =============================================
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }

  const data = Object.fromEntries(new FormData(contactForm));
  const btn = contactForm.querySelector('.form-submit');
  const msg = document.getElementById('formSuccess');
  let text, ok = true;

  try {
    if (CONTACT.formEndpoint) {
      btn.disabled = true;
      const res = await fetch(CONTACT.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      text = "✓ Message sent! I'll get back to you within 24 hours.";
    } else {
      const body = `${data.message}\n\n— ${data.fname} ${data.lname}`.trim() + ` (${data.email})`;
      location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(data.subject || 'Portfolio inquiry')}&body=${encodeURIComponent(body)}`;
      text = '✓ Opening your email app to send the message…';
    }
  } catch (_) {
    ok = false;
    text = `Something went wrong. Please email me directly at ${CONTACT.email}`;
  }

  msg.textContent = text;
  msg.style.color = ok ? '' : '#F87171';
  msg.style.display = 'block';
  btn.style.display = 'none';
  btn.disabled = false;
  setTimeout(() => {
    if (ok) contactForm.reset();
    btn.style.display = '';
    msg.style.display = 'none';
  }, 5000);
});

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 20 ? '0 4px 40px rgba(0,0,0,0.2)' : 'none';
}, { passive: true });

// =============================================
// START — open the page from the URL hash (default: home)
// =============================================
showPage(location.hash.slice(1) || 'home', false);