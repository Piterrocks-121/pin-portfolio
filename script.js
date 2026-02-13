// Portfolio Website JavaScript
class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupThemeToggle();
  }

  setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open');
      });
    }

    // Search toggle functionality
    const searchToggle = document.getElementById('search-toggle');
    const searchBar = document.getElementById('search-bar');
    const searchClose = document.getElementById('search-close');
    const searchInput = searchBar?.querySelector('.search-bar__input');

    if (searchToggle && searchBar) {
      searchToggle.addEventListener('click', () => {
        searchBar.classList.add('active');
        searchInput?.focus();
      });
    }

    if (searchClose && searchBar) {
      searchClose.addEventListener('click', () => {
        searchBar.classList.remove('active');
        if (searchInput) {
          searchInput.value = '';
        }
      });
    }

    // Close search on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchBar?.classList.contains('active')) {
        searchBar.classList.remove('active');
        if (searchInput) {
          searchInput.value = '';
        }
      }
    });

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 50;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (header) {
        // Add/remove scrolled class for styling
        if (currentScrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      }

      lastScrollY = currentScrollY;
    });
  }

  setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    // Observe other elements
    const animatedElements = document.querySelectorAll('.projects__title');
    animatedElements.forEach(el => observer.observe(el));
  }

  setupThemeToggle() {
    // Site is dark mode only
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Utility method for debouncing
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Search functionality
class SearchManager {
  constructor() {
    this.searchInput = document.querySelector('.search-bar__input');
    this.init();
  }

  init() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
    }
  }

  handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length < 2) {
      this.clearSearchResults();
      return;
    }

    // Simple search implementation
    const searchableElements = document.querySelectorAll('.project-card__title, .project-card__description');
    const results = [];

    searchableElements.forEach(element => {
      if (element.textContent.toLowerCase().includes(query)) {
        const card = element.closest('.project-card');
        if (card && !results.includes(card)) {
          results.push(card);
        }
      }
    });

    this.displaySearchResults(results, query);
  }

  displaySearchResults(results, query) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      if (results.includes(card)) {
        card.style.display = 'block';
        card.classList.add('search-highlight');
      } else {
        card.style.display = 'none';
        card.classList.remove('search-highlight');
      }
    });

    // Show message if no results
    if (results.length === 0) {
      this.showNoResultsMessage(query);
    } else {
      this.hideNoResultsMessage();
    }
  }

  clearSearchResults() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.style.display = 'block';
      card.classList.remove('search-highlight');
    });
    this.hideNoResultsMessage();
  }

  showNoResultsMessage(query) {
    let message = document.querySelector('.search-no-results');
    if (!message) {
      message = document.createElement('div');
      message.className = 'search-no-results';
      message.innerHTML = `
        <p>No projects found for "${query}"</p>
        <p>Try searching with different keywords.</p>
      `;
      document.querySelector('.projects__grid').appendChild(message);
    } else {
      message.querySelector('p').textContent = `No projects found for "${query}"`;
    }
  }

  hideNoResultsMessage() {
    const message = document.querySelector('.search-no-results');
    if (message) {
      message.remove();
    }
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Performance optimization
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    this.lazyLoadImages();
    this.preloadCriticalResources();
  }

  lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src; // Trigger loading
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  preloadCriticalResources() {
    // Preload hero images
    const heroImages = document.querySelectorAll('.hero__image');
    heroImages.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src;
      document.head.appendChild(link);
    });
  }
}

// UX Components Interactive Manager
class UXComponentsManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupButtonInteractions();
    this.setupProductCardInteractions();
    this.setupNotificationDemo();
    this.setupToggleInteractions();
    this.setupFABInteractions();
    this.startComponentAnimations();
  }

  setupButtonInteractions() {
    const animatedButton = document.querySelector('.animated-button');
    if (animatedButton) {
      animatedButton.addEventListener('click', () => {
        // Add ripple effect
        const ripple = animatedButton.querySelector('.btn-ripple');
        ripple.style.width = '0';
        ripple.style.height = '0';
        
        setTimeout(() => {
          ripple.style.width = '300px';
          ripple.style.height = '300px';
        }, 10);

        // Show success state
        setTimeout(() => {
          animatedButton.classList.add('success');
          
          // Reset after 2 seconds
          setTimeout(() => {
            animatedButton.classList.remove('success');
            ripple.style.width = '0';
            ripple.style.height = '0';
          }, 2000);
        }, 300);
      });
    }
  }

  setupProductCardInteractions() {
    const productCard = document.querySelector('.mini-product-card');
    const heartIcon = document.querySelector('.product-heart');
    
    if (heartIcon) {
      heartIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        heartIcon.style.color = '#ef4444';
        heartIcon.style.transform = 'scale(1.3)';
        
        setTimeout(() => {
          heartIcon.style.transform = 'scale(1)';
        }, 200);
      });
    }

    if (productCard) {
      productCard.addEventListener('click', () => {
        // Simulate product view animation
        productCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
          productCard.style.transform = '';
        }, 150);
      });
    }
  }

  setupNotificationDemo() {
    const notification = document.querySelector('.notification');
    if (notification) {
      // Restart notification animation every 6 seconds with better timing
      setInterval(() => {
        notification.style.animation = 'none';
        notification.offsetHeight; // Trigger reflow
        notification.style.animation = 'notificationSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        const progress = notification.querySelector('.notification-progress');
        if (progress) {
          progress.style.animation = 'none';
          progress.offsetHeight; // Trigger reflow
          progress.style.animation = 'notificationProgress 4s cubic-bezier(0.4, 0, 0.2, 1)';
        }
      }, 6000);
    }
  }

  setupToggleInteractions() {
    const toggle = document.querySelector('#demo-toggle');
    if (toggle) {
      toggle.addEventListener('change', () => {
        const slider = document.querySelector('.toggle-slider');
        if (toggle.checked) {
          slider.style.background = 'var(--primary-color)';
        } else {
          slider.style.background = '#e2e8f0';
        }
      });

      // Auto-toggle every 5 seconds for demo with smooth transition
      setInterval(() => {
        toggle.checked = !toggle.checked;
        const changeEvent = new Event('change');
        toggle.dispatchEvent(changeEvent);
        
        // Add smooth transition effect
        const slider = document.querySelector('.toggle-slider');
        if (slider) {
          slider.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }
      }, 5000);
    }
  }

  setupFABInteractions() {
    const fab = document.querySelector('.floating-action-btn');
    const fabMain = document.querySelector('.fab-main');
    
    if (fab && fabMain) {
      let isExpanded = false;
      
      fabMain.addEventListener('click', () => {
        isExpanded = !isExpanded;
        if (isExpanded) {
          fab.classList.add('expanded');
        } else {
          fab.classList.remove('expanded');
        }
      });

      // Auto-demo every 8 seconds with smoother timing
      setInterval(() => {
        fab.classList.add('expanded');
        setTimeout(() => {
          fab.classList.remove('expanded');
        }, 2500);
      }, 8000);
    }
  }

  startComponentAnimations() {
    // Restart progress animation
    const progressFill = document.querySelector('.progress-fill');
    const progressGlow = document.querySelector('.progress-glow');
    
    if (progressFill && progressGlow) {
      setInterval(() => {
        progressFill.style.animation = 'none';
        progressGlow.style.animation = 'none';
        
        setTimeout(() => {
          progressFill.style.animation = 'progressGrow 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite';
          progressGlow.style.animation = 'progressGlow 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite';
        }, 150);
      }, 5000);
    }

    // Restart skeleton animation
    const skeletonLines = document.querySelectorAll('.skeleton-line');
    if (skeletonLines.length > 0) {
      setInterval(() => {
        skeletonLines.forEach((line, index) => {
          setTimeout(() => {
            line.style.animation = 'none';
            line.offsetHeight; // Trigger reflow
            line.style.animation = 'skeletonWave 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite';
          }, index * 100);
        });
      }, 4000);
    }

    // Animate stars periodically
    const stars = document.querySelectorAll('.star.active');
    if (stars.length > 0) {
      setInterval(() => {
        stars.forEach((star, index) => {
          setTimeout(() => {
            star.style.animation = 'none';
            star.offsetHeight; // Trigger reflow
            star.style.animation = 'starShimmer 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite';
          }, index * 150);
        });
      }, 5000);
    }
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
  new SearchManager();
  new PerformanceOptimizer();
  new UXComponentsManager();
});

// Add CSS for search highlighting and animations
const additionalStyles = `
  .search-highlight {
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2) !important;
  }

  .search-no-results {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem;
    color: var(--text-secondary);
  }

  .search-no-results p:first-child {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: var(--shadow-sm);
  }

  [data-theme="dark"] .header.scrolled {
    background: rgba(15, 23, 42, 0.98);
  }

  .project-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .project-card.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  /* Dark mode selection styles */
  [data-theme="dark"] ::selection {
    background: rgba(129, 140, 248, 0.3);
    color: var(--text-primary);
  }

  /* Dark mode image filters for better contrast */
  [data-theme="dark"] .hero__image,
  [data-theme="dark"] .project-card__image img {
    filter: brightness(0.9) contrast(1.1);
  }

  [data-theme="dark"] .hero__image:hover,
  [data-theme="dark"] .project-card:hover .project-card__image img {
    filter: brightness(1) contrast(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .project-card {
      opacity: 1;
      transform: none;
    }
  }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
