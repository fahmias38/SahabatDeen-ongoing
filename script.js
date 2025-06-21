// Mobile Navigation Toggle
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('mobile-active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('mobile-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking on nav links
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('mobile-active');
    document.body.style.overflow = 'auto';
}

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // If the clicked item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Contact Form Validation and Handling
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formMessage = document.getElementById('formMessage');
    const nama = form.nama.value.trim();
    const email = form.email.value.trim();
    const subjek = form.subjek.value.trim();
    const pesan = form.pesan.value.trim();
    
    // Reset message
    formMessage.className = '';
    formMessage.textContent = '';
    
    // Basic validation
    if (!nama || !email || !subjek || !pesan) {
        showFormMessage('error', 'Mohon lengkapi semua field yang wajib diisi (*)');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('error', 'Format email tidak valid. Contoh: nama@email.com');
        return;
    }
    
    // Minimum length validation
    if (nama.length < 2) {
        showFormMessage('error', 'Nama harus minimal 2 karakter');
        return;
    }
    
    if (subjek.length < 5) {
        showFormMessage('error', 'Subjek harus minimal 5 karakter');
        return;
    }
    
    if (pesan.length < 10) {
        showFormMessage('error', 'Pesan harus minimal 10 karakter');
        return;
    }
    
    // Simulate form submission (since no actual backend)
    showFormMessage('success', 'Terima kasih! Pesan Anda telah berhasil dikirim. Tim kami akan merespons dalam 1x24 jam.');
    
    // Reset form after successful submission
    setTimeout(() => {
        form.reset();
        formMessage.className = '';
        formMessage.textContent = '';
    }, 5000);
}

// Show form message function
function showFormMessage(type, message) {
    const formMessage = document.getElementById('formMessage');
    formMessage.className = type;
    formMessage.textContent = message;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(27, 43, 42, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--bg-dark-primary)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Add event listeners
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Contact form event listener
    const contactForm = document.getElementById('mainContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Add click listeners to nav links for mobile
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize header scroll effect
    initHeaderScrollEffect();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        if (navMenu.classList.contains('mobile-active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});

// Animation on scroll (enhanced for contact page)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation
    document.querySelectorAll('.pricing-card, .faq-item, .contact-form-container, .contact-info-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations after page load
window.addEventListener('load', initScrollAnimations);