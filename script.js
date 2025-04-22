// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeToggle.innerHTML = `<i class="fas fa-${isLight ? 'moon' : 'sun'}"></i>`;
}

themeToggle.addEventListener('click', toggleTheme);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Scroll Animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (currentScroll >= sectionTop - 60) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Add skills dynamically
const skills = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Git', icon: 'fab fa-git-alt' }
];

const skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Add project cards dynamically
const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of your first project.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'A brief description of your second project.',
        technologies: ['React', 'Node.js'],
        link: '#'
    },
    {
        title: 'Project 3',
        description: 'A brief description of your third project.',
        technologies: ['Python', 'Django'],
        link: '#'
    }
];

const projectGrid = document.querySelector('.project-grid');
if (projectGrid) {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link">View Project</a>
        `;
        projectGrid.appendChild(projectCard);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and project cards
document.querySelectorAll('section, .project-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add stagger effect to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.coming-soon-badge').style.transform = 'translateY(0)';
        card.querySelector('.coming-soon-badge').style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.coming-soon-badge').style.transform = 'translateY(-10px)';
        card.querySelector('.coming-soon-badge').style.opacity = '0';
    });
});

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animations
    setTimeout(() => {
        document.querySelector('.header').classList.add('loaded');
        document.querySelectorAll('.project-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('loaded');
            }, index * 200);
        });
    }, 100);
}); 