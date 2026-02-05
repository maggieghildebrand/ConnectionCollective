// ================================================
// CONNECTION COLLECTIVE - INTERACTIVE FEATURES
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ================================================
    // STICKY HEADER ON SCROLL
    // ================================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // ================================================
    // MOBILE MENU TOGGLE
    // ================================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            menuOpen = !menuOpen;
            
            if (menuOpen) {
                mobileMenu.style.display = 'block';
                // Animate in
                setTimeout(() => {
                    mobileMenu.style.opacity = '1';
                    mobileMenu.style.transform = 'translateY(0)';
                }, 10);
            } else {
                mobileMenu.style.opacity = '0';
                mobileMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    mobileMenu.style.display = 'none';
                }, 300);
            }
            
            // Animate hamburger icon
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuOpen = false;
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);
            mobileMenuToggle.classList.remove('active');
        });
    });

    // ================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ================================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================================================
    // FAQ ACCORDION
    // ================================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // ================================================
    // SCROLL ANIMATIONS (Fade in elements)
    // ================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(
        '.value-card, .event-card, .testimonial, .series-item, .resonance-item'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // ================================================
    // NEWSLETTER FORM ENHANCEMENT
    // ================================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            // If you're using Flodesk embed, you may want to handle this differently
            // For now, we'll let the form submit naturally
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Joining...';
            submitButton.disabled = true;
            
            // Re-enable after 3 seconds (in case of error)
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 3000);
        });
    }

    // ================================================
    // ANNOUNCEMENT BAR CLOSE (Optional enhancement)
    // ================================================
    // If you want to add a close button to the announcement bar:
    /*
    const announcementBar = document.querySelector('.announcement-bar');
    if (announcementBar) {
        // Check if user has closed it before
        const isClosed = localStorage.getItem('announcement-closed');
        
        if (isClosed) {
            announcementBar.style.display = 'none';
        } else {
            // Create close button
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.cssText = 'background:none;border:none;color:white;font-size:1.5rem;cursor:pointer;margin-left:1rem;';
            announcementBar.querySelector('p').appendChild(closeBtn);
            
            closeBtn.addEventListener('click', function() {
                announcementBar.style.display = 'none';
                localStorage.setItem('announcement-closed', 'true');
            });
        }
    }
    */

    // ================================================
    // DYNAMIC YEAR IN FOOTER
    // ================================================
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement && yearElement.textContent.includes('2026')) {
        yearElement.textContent = yearElement.textContent.replace('2026', currentYear);
    }

    // ================================================
    // ADD STAGGER ANIMATION TO HERO STATS
    // ================================================
    const statItems = document.querySelectorAll('.stat');
    statItems.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, 800 + (index * 150));
    });

    // ================================================
    // TRUST CHIPS STAGGER ANIMATION
    // ================================================
    const chips = document.querySelectorAll('.chip');
    chips.forEach((chip, index) => {
        chip.style.opacity = '0';
        chip.style.transform = 'scale(0.9)';
        chip.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
            chip.style.opacity = '1';
            chip.style.transform = 'scale(1)';
        }, 1000 + (index * 100));
    });

    // ================================================
    // CONSOLE MESSAGE (EASTER EGG)
    // ================================================
    console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #C97D60;');
    console.log('%cLooks like you\'re curious about how this site was built!', 'font-size: 14px; color: #4A4540;');
    console.log('%cConnection Collective is all about genuine connection — including with the people who build your digital spaces.', 'font-size: 12px; color: #9B9490;');
    console.log('%cWant to chat about this site or collaboration? Reach out! 💌', 'font-size: 12px; color: #697A5C;');

});

// ================================================
// UTILITY FUNCTIONS
// ================================================

// Debounce function for scroll events (optional performance optimization)
function debounce(func, wait) {
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

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ================================================
// ACCESSIBILITY ENHANCEMENTS
// ================================================

// Add keyboard navigation for FAQ
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu on ESC
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
            document.getElementById('mobileMenuToggle').classList.remove('active');
        }
    }
});

// Trap focus in mobile menu when open
const mobileMenu = document.getElementById('mobileMenu');
const focusableElements = mobileMenu.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

document.addEventListener('keydown', function(e) {
    if (mobileMenu.style.display === 'block' && e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }
});