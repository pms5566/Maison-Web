/**
 * Maison Noir Fine Dining Website Logic
 * Handles interactive luxury widgets: Mobile nav, scroll headers, tasting tabs,
 * gallery lightboxes, dynamic reservation submissions, and scroll revelations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollHeader();
  initMobileMenu();
  initMenuTabs();
  initGalleryLightbox();
  initReservationForm();
  initScrollReveal();
});

/* ==========================================================================
   Header scroll effects
   ========================================================================== */
function initScrollHeader() {
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Run once initially to check state
  handleScroll();
}

/* ==========================================================================
   Mobile navigation overlay menu
   ========================================================================== */
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileOverlay = document.getElementById('mobile-nav-overlay');

function initMobileMenu() {
  if (!menuToggle || !mobileOverlay) return;

  menuToggle.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
  const isActive = menuToggle.classList.contains('active');
  
  if (isActive) {
    // Close mobile nav
    menuToggle.classList.remove('active');
    mobileOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  } else {
    // Open mobile nav
    menuToggle.classList.add('active');
    mobileOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    // Prevent scrolling while menu is open
    document.body.style.overflow = 'hidden';
  }
}

/* ==========================================================================
   Tasting Menu tabbed navigation
   ========================================================================== */
function initMenuTabs() {
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const panes = document.querySelectorAll('.menu-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Deactivate all tabs and active status
      tabButtons.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panes.forEach(p => p.classList.remove('active'));

      // Activate selected tab
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Show matching pane
      const targetId = btn.getAttribute('aria-controls');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Gallery Lightbox Modal
   ========================================================================== */
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption-text');
const lightboxClose = document.getElementById('lightbox-close-btn');

function initGalleryLightbox() {
  if (!lightboxModal || !lightboxClose) return;

  // Click on background closes lightbox
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Close button click
  lightboxClose.addEventListener('click', closeLightbox);

  // Esc key closes lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

function openLightbox(element) {
  const imgSrc = element.getAttribute('data-src');
  const imgTitle = element.getAttribute('data-title');
  const imgCategory = element.getAttribute('data-category');

  if (!imgSrc || !lightboxModal || !lightboxImg || !lightboxCaption) return;

  lightboxImg.src = imgSrc;
  lightboxImg.alt = imgTitle || 'Fine Dining Gallery Image';
  lightboxCaption.innerHTML = `${imgTitle} <span style="font-family: var(--font-sans); font-size: 0.75rem; letter-spacing: 0.15em; color: var(--color-gold); display: block; margin-top: 0.25rem; text-transform: uppercase;">${imgCategory}</span>`;

  lightboxModal.classList.add('active');
  lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove('active');
  lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Reservation Form Validation & Custom Success feedback transitions
   ========================================================================== */
const bookingForm = document.getElementById('booking-form');
const successPane = document.getElementById('booking-success-pane');
const bookingBtn = document.getElementById('booking-submit-btn');

function initReservationForm() {
  if (!bookingForm) return;

  // Set minimum date picker to today
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset styles
    let isValid = true;
    const requiredInputs = bookingForm.querySelectorAll('[required]');
    
    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#e74c3c'; // Highlight missing input in subtle crimson
        isValid = false;
      } else {
        input.style.borderColor = 'rgba(197, 168, 128, 0.4)';
      }
    });

    // Check simple email regex
    const emailInput = document.getElementById('booking-email');
    if (emailInput && emailInput.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = '#e74c3c';
        isValid = false;
      }
    }

    if (!isValid) return;

    // Trigger loading spinner simulation
    bookingBtn.classList.add('submitting');
    bookingBtn.disabled = true;

    // Extract dynamic booking inputs for success summary
    const guests = document.getElementById('booking-guests').value;
    const rawDate = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;

    // Format date elegantly: YYYY-MM-DD to DD.MM.YYYY
    let formattedDate = rawDate;
    if (rawDate) {
      const parts = rawDate.split('-');
      if (parts.length === 3) {
        formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
      }
    }

    // Simulate luxury booking delay (1.5 seconds)
    setTimeout(() => {
      bookingBtn.classList.remove('submitting');
      bookingBtn.disabled = false;

      // Populate success summary
      document.getElementById('summary-guests').innerText = guests;
      document.getElementById('summary-date').innerText = formattedDate;
      document.getElementById('summary-time').innerText = time;

      // Swap panes dynamically
      bookingForm.style.display = 'none';
      successPane.classList.add('active');

      // Scroll smoothly to reservation panel header
      document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  });
}

function resetBookingForm() {
  if (!bookingForm || !successPane) return;

  bookingForm.reset();
  
  // Restore normal borders
  const inputs = bookingForm.querySelectorAll('.form-input');
  inputs.forEach(input => {
    input.style.borderColor = 'rgba(197, 168, 128, 0.4)';
  });

  successPane.classList.remove('active');
  bookingForm.style.display = 'grid';
}

/* ==========================================================================
   Scroll reveal animations using Intersection Observer
   ========================================================================== */
function initScrollReveal() {
  const revealItems = document.querySelectorAll('.reveal-item');
  
  if (!revealItems.length) return;

  // Configuration thresholds
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12 // Trigger when 12% is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, no need to watch it anymore
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealItems.forEach(item => {
    observer.observe(item);
  });
}
