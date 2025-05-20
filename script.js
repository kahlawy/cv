// Experience data
const experienceData = [
    {
        title: 'Senior Software Developer',
        company: 'Eastern Province Municipality – Dammam, Saudi Arabia',
        period: 'Dec 2019 – Present',
        achievements: [
            'Spearheaded the development, support, and upgrade of a Quality Management Software (QMS) system, improving system efficiency by 30%',
            'Led a team of developers in the design, development, and deployment of critical applications, achieving a 15% increase in team productivity',
            'Managed project timelines, task assignments, and ensured alignment with business objectives, maintaining a 95% on-time delivery rate',
            'Provided rapid debugging and troubleshooting solutions, reducing issue resolution time by 20%'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Aramco',
        location: 'Dammam, Saudi Arabia',
        period: '2018 - 2020',
        achievements: [
            'Developed and maintained 10+ web applications using ASP.NET MVC and SQL Server',
            'Improved application performance by 50% through code optimization and caching strategies',
            'Implemented robust security features including OAuth 2.0 and role-based access control',
            'Collaborated with cross-functional teams to deliver projects on time and within budget'
        ]
    },
    {
        title: 'Junior Developer',
        company: 'Aramco',
        location: 'Dammam, Saudi Arabia',
        period: '2016 - 2018',
        achievements: [
            'Contributed to the development of internal tools and utilities using C# and JavaScript',
            'Resolved 100+ bugs and technical issues improving system stability',
            'Created comprehensive technical documentation and user guides',
            'Participated in Agile ceremonies and sprint planning meetings'
        ]
    }
];

// Education data
const educationData = [
    {
        degree: 'Master in Software Engineering',
        institution: 'Cairo University',
        location: 'Egypt',
        period: '2023 – 2025',
        achievements: [
            'Specialization in Software Architecture and Design Patterns',
            'Research focus on Cloud-Native Applications and Microservices',
            'GPA: 3.8/4.0'
        ]
    },
    {
        degree: 'Diploma in Software Engineering',
        institution: 'Cairo University',
        location: 'Egypt',
        period: '2022 – 2023',
        achievements: [
            'Advanced studies in Modern Software Development',
            'Focus on Enterprise Application Development',
            'Graduated with Distinction'
        ]
    },
    {
        degree: 'Bachelor of Instructional Technology',
        institution: 'Al-Azhar University',
        location: 'Egypt',
        period: '2001',
        achievements: [
            'Foundation in Educational Technology',
            'Minor in Computer Science',
            'Graduated with Honors'
        ]
    }
];

// Skills data
const skillsData = {
    'Programming Languages': {
        icon: 'fa-solid fa-code',
        skills: ['C#', 'JavaScript', 'TypeScript', 'Python', 'SQL']
    },
    'Frameworks': {
        icon: 'fa-solid fa-layer-group',
        skills: ['ASP.NET Core', 'Entity Framework', 'Angular', 'React', 'Node.js']
    },
    'Web Technologies': {
        icon: 'fa-solid fa-globe',
        skills: ['HTML5', 'CSS3', 'REST APIs', 'GraphQL', 'WebSocket']
    },
    'Databases': {
        icon: 'fa-solid fa-database',
        skills: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    'Tools & DevOps': {
        icon: 'fa-solid fa-gears',
        skills: ['Git', 'Docker', 'Azure', 'Jenkins', 'Kubernetes']
    },
    'Methodologies': {
        icon: 'fa-solid fa-sitemap',
        skills: ['Agile', 'Scrum', 'TDD', 'DDD', 'Microservices']
    }
};

// Certifications Data
const certificationsData = [
    {
        title: 'PMI Agile Certified Practitioner (PMI-ACP)',
        issuer: 'Project Management Institute',
        year: '2023',
        icon: 'fa-solid fa-certificate'
    },
    {
        title: 'Project Management Professional (PMP)',
        issuer: 'Project Management Institute',
        year: '2023',
        icon: 'fa-solid fa-diagram-project'
    },
    {
        title: 'MCAD: Microsoft .NET',
        issuer: 'Microsoft',
        year: '2023',
        icon: 'fa-brands fa-microsoft'
    },
    {
        title: 'MCSD: Microsoft .NET',
        issuer: 'Microsoft',
        year: '2023',
        icon: 'fa-brands fa-microsoft'
    },
    {
        title: 'Microsoft Certified Trainer (MCT)',
        issuer: 'Microsoft',
        year: '2023',
        icon: 'fa-solid fa-chalkboard-user'
    }
];

// Populate experience section
function populateExperience() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;

    experienceData.forEach(entry => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <h3><i class="fa-solid fa-briefcase"></i>${entry.title}</h3>
            <p class="company"><i class="fa-solid fa-building"></i>${entry.company}</p>
            <p class="location"><i class="fa-solid fa-location-dot"></i>${entry.location}</p>
            <p class="period"><i class="fa-regular fa-calendar"></i>${entry.period}</p>
            <ul class="achievements">
                ${entry.achievements.map(achievement => 
                    `<li><i class="fa-solid fa-check"></i>${achievement}</li>`
                ).join('')}
            </ul>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Populate education section
function populateEducation() {
    const timeline = document.getElementById('education-timeline');
    if (!timeline) return;

    educationData.forEach((entry, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        content.innerHTML = `
            <h3><i class="fa-solid fa-graduation-cap"></i>${entry.degree}</h3>
            <p class="institution"><i class="fa-solid fa-university"></i>${entry.institution}</p>
            <p class="location"><i class="fa-solid fa-location-dot"></i>${entry.location}</p>
            <p class="period"><i class="fa-regular fa-calendar"></i>${entry.period}</p>
            <ul class="achievements">
                ${entry.achievements.map(achievement => 
                    `<li><i class="fa-solid fa-check"></i>${achievement}</li>`
                ).join('')}
            </ul>
        `;
        
        timelineItem.appendChild(content);
        timeline.appendChild(timelineItem);

        // Add animation with delay based on index
        setTimeout(() => {
            timelineItem.classList.add('animate');
        }, 200 * index);
    });
}

// Populate skills section
function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;

    for (const [category, data] of Object.entries(skillsData)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        categoryDiv.innerHTML = `
            <h3><i class="${data.icon}"></i>${category}</h3>
            <ul class="skill-list">
                ${data.skills.map(skill => `<li><i class="fa-solid fa-check"></i>${skill}</li>`).join('')}
            </ul>
        `;
        skillsGrid.appendChild(categoryDiv);
    }
}

// Function to populate certifications
function populateCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    if (!certificationsGrid) return;
    
    certificationsGrid.innerHTML = '';
    certificationsData.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.className = 'certification-item';
        certDiv.innerHTML = `
            <i class="${cert.icon}"></i>
            <h3>${cert.title}</h3>
            <p class="issuer"><i class="fa-solid fa-building-columns"></i> ${cert.issuer}</p>
            <p class="period"><i class="fa-regular fa-calendar-check"></i> ${cert.year}</p>
        `;
        certificationsGrid.appendChild(certDiv);
    });
}

// Function to populate projects
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='assets/images/placeholder.jpg'">
            <div class="project-content">
                <h3 class="project-title"><i class="${project.icon}"></i>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link" target="_blank">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize all sections
function initialize() {
    populateExperience();
    populateSkills();
    populateCertifications();
    populateProjects();
    populateEducation();
}

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');

navToggle?.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navContainer?.contains(e.target) && !navToggle?.contains(e.target) && navContainer?.classList.contains('active')) {
        navContainer.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navContainer?.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// Scroll effects
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class for header background
    if (currentScroll > 50) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Count up animation
function animateCountUp(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // Update every 16ms (60fps)
    let current = start;
    
    const updateCount = () => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target === 60 ? '%' : '+');
        } else {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCount);
        }
    };
    
    updateCount();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('count-up')) {
                const target = parseInt(entry.target.textContent);
                animateCountUp(entry.target, target);
                observer.unobserve(entry.target); // Only animate once
            } else if (entry.target.classList.contains('timeline-item')) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initialize();
    
    // Observe count-up elements
    document.querySelectorAll('.count-up').forEach(el => observer.observe(el));
});
