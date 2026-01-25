// Portfolio JavaScript - Interactivity and Animations

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// Navigation Scroll Effect
// ==========================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add background on scroll
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 14, 26, 0.95)';
        nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
    } else {
        nav.style.background = 'rgba(10, 14, 26, 0.8)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// Mobile Navigation Toggle
// ==========================================
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// ==========================================
// Intersection Observer for Scroll Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// ==========================================
// Skill Progress Bar Animation
// ==========================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.width = bar.style.getPropertyValue('--progress') || '0%';
                }, index * 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    // Reset all progress bars to 0 initially
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const progress = bar.style.getPropertyValue('--progress');
        bar.dataset.progress = progress;
        bar.style.width = '0%';
    });
    skillObserver.observe(skillsSection);
}

// ==========================================
// Active Navigation Link Highlighting
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksArray.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--primary)';
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ==========================================
// Parallax Effect for Background Orbs
// ==========================================
const orbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    orbs.forEach((orb, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        orb.style.transform = `translateY(${yPos}px)`;
    });
});

// ==========================================
// Cursor Trail Effect (Optional Enhancement)
// ==========================================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create custom cursor elements
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease;
    display: none;
`;
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.style.cssText = `
    position: fixed;
    width: 6px;
    height: 6px;
    background: var(--primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    display: none;
`;
document.body.appendChild(cursorDot);

// Show custom cursor on desktop only
if (window.innerWidth > 968) {
    cursor.style.display = 'block';
    cursorDot.style.display = 'block';
    document.body.style.cursor = 'none';
    document.querySelectorAll('a, button').forEach(el => {
        el.style.cursor = 'none';
    });
}

function animateCursor() {
    // Smooth cursor follow
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
    
    requestAnimationFrame(animateCursor);
}

if (window.innerWidth > 968) {
    animateCursor();
}

// Cursor scale effect on hover
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = 'var(--secondary)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'var(--primary)';
    });
});

// ==========================================
// Hide Scroll Indicator After Scroll
// ==========================================
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100 && scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '0.6';
        scrollIndicator.style.pointerEvents = 'auto';
    }
});

// ==========================================
// Statistics Counter Animation
// ==========================================
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ==========================================
// Project Card Tilt Effect (3D)
// ==========================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================
// Dynamic Year in Footer
// ==========================================
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Adhithya Jayaraman. All rights reserved.`;
}

// ==========================================
// Console Message
// ==========================================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
console.log('%cLooking at the code? I like your style!', 'font-size: 14px; color: #94a3b8;');
console.log('%cFeel free to reach out: adhithyajayaraman@gmail.com', 'font-size: 14px; color: #00d4ff;');

// ==========================================
// Performance: Lazy Load Images (if any added later)
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Add Loading State
// ==========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroElements = document.querySelectorAll('.reveal-text');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ==========================================
// Keyboard Navigation Accessibility
// ==========================================
document.addEventListener('keydown', (e) => {
    // Skip to main content with "/"
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    }
});

// Add focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ==========================================
// Form Validation (if contact form is added)
// ==========================================
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// ==========================================
// Dark Mode Toggle (Optional Enhancement)
// ==========================================
// This portfolio already uses a dark theme, but you could add a light mode toggle here if desired

// ==========================================
// Print Styles Optimization
// ==========================================
window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections for printing
    document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = bar.dataset.progress || '90%';
    });
});

// ==========================================
// Handle External Links
// ==========================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    // Add security attributes
    link.setAttribute('rel', 'noopener noreferrer');
    
    // Optional: Add icon for external links
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.8)';
    });
});

// ==========================================
// Prevent FOUC (Flash of Unstyled Content)
// ==========================================
document.documentElement.style.visibility = 'visible';
