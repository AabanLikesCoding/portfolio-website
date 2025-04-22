# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated sections and elements
- Contact form
- Project showcase
- Skills display
- Mobile-friendly navigation
- Modern and clean design

## Customization

### Personal Information
1. Open `index.html` and update the following:
   - Change "Your Name" in the hero section
   - Update the subtitle to reflect your role
   - Add your social media links in the footer
   - Update the copyright year and name

### Projects
1. Open `script.js`
2. Find the `projects` array
3. Update the project information:
   ```javascript
   const projects = [
       {
           title: 'Your Project Title',
           description: 'Project description',
           technologies: ['Tech1', 'Tech2'],
           link: 'project-url'
       }
   ];
   ```

### Skills
1. Open `script.js`
2. Find the `skills` array
3. Update your skills:
   ```javascript
   const skills = [
       { name: 'Skill Name', icon: 'fab fa-icon-class' }
   ];
   ```

### Styling
1. Open `styles.css`
2. Update the color variables in the `:root` section:
   ```css
   :root {
       --primary-color: #your-color;
       --secondary-color: #your-color;
       --text-color: #your-color;
       --light-text: #your-color;
       --background: #your-color;
       --section-bg: #your-color;
   }
   ```

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Start customizing!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Font Awesome for icons
- Google Fonts for typography 