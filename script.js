// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for navigation links
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

// Navbar background opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 35, 50, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 35, 50, 0.95)';
    }
});

// Add scroll reveal animation
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

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.expertise-card, .project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Button click handlers
document.addEventListener('DOMContentLoaded', () => {
    // Hero buttons
    const viewWorkBtn = document.querySelector('.hero-buttons .btn-primary');
    const getInTouchBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', () => {
            window.location.href = 'projects.html';
        });
    }
    
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    }
    
    // Collaboration buttons
    const startProjectBtn = document.querySelector('.collaboration-buttons .btn-primary');
    const learnMoreBtn = document.querySelector('.collaboration-buttons .btn-secondary');
    
    if (startProjectBtn) {
        startProjectBtn.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    }
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            window.location.href = 'about.html';
        });
    }
    
    // View All Projects button
    const viewAllProjectsBtn = document.querySelector('.projects-cta .btn-primary');
    if (viewAllProjectsBtn) {
        viewAllProjectsBtn.addEventListener('click', () => {
            window.location.href = 'projects.html';
        });
    }
});
// Project filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                // Show/hide project cards based on filter
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all') {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else if (filter === 'react' && (category.includes('react') || category.includes('next'))) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else if (filter === 'vue' && category.includes('vue')) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else if (filter === 'ui' && (category.includes('ui') || category.includes('design') || category.includes('portfolio'))) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                    }
                });
            });
        });
    }

    // Animate project cards on scroll
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observe project cards for animation
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        projectObserver.observe(card);
    });
});
// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.form-submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Form field animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
});
// Image Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.querySelector('.modal-close');
    
    console.log('Modal elements found:', { modal, modalImage, modalTitle, modalDescription, modalClose });
    
    if (modal && modalImage && modalTitle && modalDescription && modalClose) {
        // Add click event to all certificate images
        const certImages = document.querySelectorAll('.cert-image img');
        console.log('Found certificate images:', certImages.length);
        
        certImages.forEach(img => {
            img.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Certificate image clicked:', img.src);
                
                // Get certificate information from the parent card
                const eduCard = img.closest('.edu-card');
                const title = eduCard.querySelector('h3').textContent;
                const institution = eduCard.querySelector('.institution').textContent;
                const year = eduCard.querySelector('.year').textContent;
                const description = eduCard.querySelector('.description').textContent;
                
                console.log('Certificate info:', { title, institution, year, description });
                
                // Set modal content
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modalTitle.textContent = title;
                modalDescription.innerHTML = `
                    <strong>${institution}</strong><br>
                    <em>${year}</em><br><br>
                    ${description}
                `;
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
                console.log('Modal should now be visible');
            });
        });
        
        // Close modal when clicking the X button
        modalClose.addEventListener('click', () => {
            closeModal();
        });
        
        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
        
        // Function to close modal
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore background scrolling
        }
        
        // Prevent modal from closing when clicking on the modal content
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }
});