# Diptendu's Terminal Portfolio
**link: [website](https://diptendu.onrender.com)**
A command-line style portfolio website built with HTML, CSS, and JavaScript. Features an interactive terminal interface that showcases projects, skills, and contact information in a techy, retro-computing aesthetic.

## Live Demo

Visit the live portfolio: [Your Render URL will be here]

## Features

- **Interactive Terminal Interface**: Navigate using real terminal commands
- **Command History**: Use arrow keys to navigate through command history
- **Tab Completion**: Auto-complete commands with Tab key
- **Responsive Design**: Works on desktop and mobile devices
- **Matrix-style Theme**: Green-on-black terminal aesthetic
- **Project Showcase**: Detailed information about featured projects
- **Skills Display**: Comprehensive technical skills overview
- **Contact Information**: Easy ways to get in touch

## 🛠️ Available Commands

- `help` - Show all available commands
- `about` - Learn more about Diptendu
- `projects` - View featured projects
- `skills` - Display technical skills
- `contact` - Get contact information
- `clear` - Clear the terminal
- `ls` - List directory contents
- `pwd` - Show current directory
- `whoami` - Display current user
- `date` - Show current date and time
- `neofetch` - Display system information
- `echo [text]` - Display text
- `cat [file]` - Display file contents

## Project Structure

```
portfolio_website/
├── index.html          # Main HTML file
├── style.css           # Terminal styling
├── script.js           # Terminal functionality
└── README.md           # This file
```

## Deployment on Render

### Method 1: Connect GitHub Repository

1. Fork or clone this repository to your GitHub account
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" and select "Static Site"
4. Connect your GitHub repository
5. Configure the deployment:
   - **Name**: `diptendu-portfolio` (or your preferred name)
   - **Branch**: `main`
   - **Root Directory**: Leave empty (or specify if in subdirectory)
   - **Build Command**: Leave empty (static files only)
   - **Publish Directory**: `.` (current directory)
6. Click "Create Static Site"

### Method 2: Manual Deploy

1. Create a new Static Site on Render
2. Choose "Deploy from Git" or upload files directly
3. Set the publish directory to the root of your project
4. Deploy!

## 🔧 Local Development

To run locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Diptenduuu/portfolio_website.git
   cd portfolio_website
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000`

## Customization

### Colors
The terminal uses a matrix-style color scheme defined in `style.css`:
- Background: `#0a0a0a` (dark black)
- Terminal: `#1a1a1a` (slightly lighter black)
- Text: `#00ff00` (matrix green)
- Links: `#44aaff` (blue)
- Errors: `#ff4444` (red)

### Adding New Commands
To add new commands, edit `script.js`:

1. Add the command to the `commands` object in the constructor
2. Create a new method for the command functionality
3. Update the help text in `showHelp()` method

### Modifying Content
- **About section**: Edit the `showAbout()` method in `script.js`
- **Projects**: Update the `showProjects()` method
- **Skills**: Modify the `showSkills()` method
- **Contact**: Update the `showContact()` method

## Mobile Support

The portfolio is fully responsive and includes:
- Touch-friendly interface
- Optimized font sizes for mobile
- Responsive terminal sizing
- Mobile-friendly project cards

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags for social sharing
- Descriptive page title
- Clean URL structure

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements, pull requests are welcome.

## Contact

- **Email**: diptendu@example.com
- **LinkedIn**: [linkedin.com/in/diptendu](https://linkedin.com/in/diptendu)
- **GitHub**: [github.com/Diptenduuu](https://github.com/Diptenduuu)

---

Built with ❤️ by Diptendu
