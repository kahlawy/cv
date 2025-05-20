document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', function(e) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navToggle && navToggle.classList.contains('active')) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars on scroll
    const animateSkills = function() {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            const level = item.getAttribute('data-level');
            const progressBar = item.querySelector('.skill-progress');
            progressBar.style.width = level + '%';
        });
    };

    // Animate counters
    const animateCounters = function() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let count = 0;
            const duration = 2000; // ms
            const increment = Math.ceil(target / (duration / 30));
            
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = count;
                }
            }, 30);
        });
    };

    // Run animations when page loads
    setTimeout(() => {
        animateSkills();
        animateCounters();
    }, 500);

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-active');
            cursorFollower.classList.add('cursor-active');
        });
        
        card.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-active');
            cursorFollower.classList.remove('cursor-active');
        });
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-active');
            cursorFollower.classList.add('cursor-active');
        });
        
        btn.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-active');
            cursorFollower.classList.remove('cursor-active');
        });
    });
});

