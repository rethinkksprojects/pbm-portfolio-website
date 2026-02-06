// All JavaScript code is AI-generated.

// script/script.js

// Force scroll to top when page loads or refreshes
window.addEventListener('load', function() {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also scroll to top after a tiny delay to ensure it works
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, 10);
});

// Also handle beforeunload to prevent any weird scroll positions
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// DOM Content Loaded - ensures all HTML is loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ============== NAVIGATION ENHANCEMENTS ==============
    
    // Add smooth hover effect to navigation items
    const navItems = document.querySelectorAll('.navigation li a');
    
    navItems.forEach(item => {
        // Add a subtle scale effect on hover
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add click animation
        item.addEventListener('click', function(e) {
            // For external links or navigation within same page
            if (this.getAttribute('href').startsWith('http') || 
                this.getAttribute('href').includes('.html')) {
                // Scroll to top before navigating (makes for better UX)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            // Create ripple effect on click
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // ============== IMAGE ENHANCEMENT ==============
    
    // Add a subtle hover effect to profile image
    const profileImage = document.querySelector('.reyhan-image');
    if (profileImage) {
        profileImage.style.transition = 'all 0.3s ease';
        profileImage.style.borderRadius = '50%';
        profileImage.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
        
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02) rotate(1deg)';
            this.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.2)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
        });
    }
    
    // ============== SMOOTH SCROLLING ==============
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============== SCROLL ANIMATIONS ==============
    
    // Fade-in effect for content sections as they scroll into view
    const sections = document.querySelectorAll('.project-background, .project-goal, .projects-list, .documentation-link');
    
    const fadeInOnScroll = function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
        });
    };
    
    // Set initial state for animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
    });
    
    // Run on load and scroll
    setTimeout(fadeInOnScroll, 100); // Small delay after page loads
    window.addEventListener('scroll', fadeInOnScroll);
    
    // ============== BUTTON ENHANCEMENTS ==============
    
    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.button, .doc-button');
    
    buttons.forEach(button => {
        // Add a subtle glow effect on hover
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
        
        // Add click effect
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1)';
        });
        
        // For external links, scroll to top first for better UX
        button.addEventListener('click', function() {
            if (this.getAttribute('href').startsWith('http')) {
                // Quick scroll to top before opening external link
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============== TYPEWRITER EFFECT FOR MAIN TITLE ==============
    
    const title = document.querySelector('.Title');
    if (title && !title.dataset.animated) {
        const originalText = title.textContent;
        title.textContent = '';
        title.dataset.animated = 'true';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // ============== DYNAMIC YEAR IN FOOTER (IF YOU ADD ONE) ==============
    
    // If you add a footer later, this will automatically update the year
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('[data-year]');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
    
    // ============== LOADING ANIMATION ==============
    
    // Simple page load animation with top scroll
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // ============== ACTIVE NAVIGATION HIGHLIGHT ==============
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPage || (currentPage === '' && itemHref === 'index.html')) {
            item.style.color = '#ffffff';
            item.style.fontWeight = 'bold';
            item.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
        }
    });
    
    // ============== SCROLL TO TOP BUTTON (OPTIONAL) ==============
    
    // Create a "scroll to top" button for better UX
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.transform = 'translateY(20px)';
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect to scroll top button
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.9)';
        this.style.color = '#000';
        this.style.border = '2px solid rgba(255, 255, 255, 0.8)';
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(0, 0, 0, 0.8)';
        this.style.color = 'white';
        this.style.border = '2px solid rgba(255, 255, 255, 0.3)';
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // ============== RESPONSIVE MENU TOGGLE (FOR FUTURE MOBILE SUPPORT) ==============
    
    // This sets up a mobile menu toggle if you decide to make the site responsive
    function setupMobileMenu() {
        const nav = document.querySelector('.navigation');
        const toggleButton = document.createElement('button');
        
        toggleButton.innerHTML = '☰';
        toggleButton.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1000;
        `;
        
        document.body.appendChild(toggleButton);
        
        // Check window width and toggle mobile menu
        const checkWindowSize = () => {
            if (window.innerWidth <= 768) {
                toggleButton.style.display = 'block';
                nav.style.display = 'none';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '70px';
                nav.style.right = '20px';
                nav.style.backgroundColor = 'rgb(0, 0, 0)';
                nav.style.padding = '20px';
                nav.style.borderRadius = '10px';
                nav.style.zIndex = '999';
            } else {
                toggleButton.style.display = 'none';
                nav.style.display = 'flex';
            }
        };
        
        toggleButton.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
        });
        
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
    }
    
    // Uncomment this line if you want to add mobile support later:
    // setupMobileMenu();
    
    // ============== PAGE TRANSITION EFFECT ==============
    
    // Smooth transition when clicking internal links
    document.querySelectorAll('a[href*=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to internal links (not external or anchor links)
            if (this.getAttribute('href').startsWith('#') || 
                this.getAttribute('href').startsWith('http')) {
                return;
            }
            
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Fade out animation
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            // Navigate after fade out
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
});

// Add CSS for ripple animation and other styles
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Ensure page always starts at top */
    html, body {
        scroll-behavior: smooth;
        scroll-padding-top: 80px; /* Adjust based on your navigation height */
    }
    
    /* Improve focus states for accessibility */
    a:focus,
    button:focus {
        outline: 2px solid #4a90e2;
        outline-offset: 2px;
    }
    
    /* Subtle parallax effect for background */
    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
            radial-gradient(circle at 20% 50%, rgba(40, 40, 40, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(60, 60, 60, 0.1) 0%, transparent 50%);
        z-index: -1;
        pointer-events: none;
    }
    
    /* Prevent horizontal scroll */
    html, body {
        overflow-x: hidden;
        width: 100%;
    }
`;

document.head.appendChild(style);

// Force scroll to top on page load (extra safety measure)
history.scrollRestoration = 'manual';

// Console greeting (subtle and non-intrusive)
console.log('%c👋 Welcome to rethinkk\'s Portfolio!', 'color: #4a90e2; font-size: 16px; font-weight: bold;');
console.log('%cThanks for checking out the code! Feel free to explore.', 'color: #666;');