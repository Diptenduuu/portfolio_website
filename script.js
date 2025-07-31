class Terminal {
    constructor() {
        this.output = document.getElementById('output');
        this.input = document.getElementById('commandInput');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.currentPath = '~';
        
        this.commands = {
            help: this.showHelp.bind(this),
            about: this.showAbout.bind(this),
            projects: this.showProjects.bind(this),
            skills: this.showSkills.bind(this),
            contact: this.showContact.bind(this),
            clear: this.clearTerminal.bind(this),
            ls: this.listDirectory.bind(this),
            whoami: this.whoami.bind(this),
            date: this.showDate.bind(this),
            pwd: this.showPath.bind(this),
            cat: this.catFile.bind(this),
            echo: this.echo.bind(this),
            neofetch: this.neofetch.bind(this)
        };

        this.init();
    }

    init() {
        this.input.addEventListener('keydown', this.handleKeyDown.bind(this));
        this.input.focus();
        
        // Keep input focused
        document.addEventListener('click', () => {
            this.input.focus();
        });
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.processCommand();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateHistory(-1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateHistory(1);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            this.autoComplete();
        }
    }

    processCommand() {
        const command = this.input.value.trim();
        if (command) {
            this.commandHistory.push(command);
            this.historyIndex = this.commandHistory.length;
        }

        this.addToOutput(`diptendu@portfolio:${this.currentPath}$ ${command}`, 'command-line');
        
        if (command) {
            const [cmd, ...args] = command.split(' ');
            if (this.commands[cmd]) {
                this.commands[cmd](args);
            } else {
                this.addToOutput(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
            }
        }

        this.input.value = '';
        this.scrollToBottom();
    }

    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        this.historyIndex += direction;
        
        if (this.historyIndex < 0) {
            this.historyIndex = 0;
        } else if (this.historyIndex >= this.commandHistory.length) {
            this.historyIndex = this.commandHistory.length;
            this.input.value = '';
            return;
        }

        this.input.value = this.commandHistory[this.historyIndex] || '';
    }

    autoComplete() {
        const input = this.input.value;
        const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(input));
        
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1) {
            this.addToOutput(`Available commands: ${matches.join(', ')}`, 'info');
        }
    }

    addToOutput(content, className = '') {
        const div = document.createElement('div');
        div.className = `command-output ${className}`;
        div.innerHTML = content;
        this.output.appendChild(div);
    }

    scrollToBottom() {
        const terminalBody = document.querySelector('.terminal-body');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    showHelp() {
        const helpText = `
<div class="help-command"><span class="help-command-name">help</span><span class="help-command-desc">Show this help message</span></div>
<div class="help-command"><span class="help-command-name">about</span><span class="help-command-desc">Learn more about me</span></div>
<div class="help-command"><span class="help-command-name">projects</span><span class="help-command-desc">View my projects</span></div>
<div class="help-command"><span class="help-command-name">skills</span><span class="help-command-desc">View my technical skills</span></div>
<div class="help-command"><span class="help-command-name">contact</span><span class="help-command-desc">Get my contact information</span></div>
<div class="help-command"><span class="help-command-name">clear</span><span class="help-command-desc">Clear the terminal</span></div>
<div class="help-command"><span class="help-command-name">ls</span><span class="help-command-desc">List directory contents</span></div>
<div class="help-command"><span class="help-command-name">pwd</span><span class="help-command-desc">Show current directory</span></div>
<div class="help-command"><span class="help-command-name">whoami</span><span class="help-command-desc">Display current user</span></div>
<div class="help-command"><span class="help-command-name">date</span><span class="help-command-desc">Show current date and time</span></div>
<div class="help-command"><span class="help-command-name">neofetch</span><span class="help-command-desc">Display system information</span></div>
<div class="help-command"><span class="help-command-name">echo [text]</span><span class="help-command-desc">Display text</span></div>

<span class="info">Tip: Use Tab for autocompletion and arrow keys for command history</span>
        `;
        this.addToOutput(helpText);
    }

    showAbout() {
        const aboutText = `
<span class="success">About Diptendu</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="info">👨‍💻 Software Developer & AI Enthusiast</span>

I'm a passionate software developer with expertise in Machine Learning, Artificial Intelligence, 
and Full-Stack Development. I love building innovative solutions that solve real-world problems.

<span class="warning">🎯 Current Focus:</span>
• Machine Learning & Deep Learning
• Generative AI Applications
• RAG Systems & LLMs
• Full-Stack Web Development
• Data Science & Analytics

<span class="warning">🚀 What I Do:</span>
• Develop ML models for predictive analytics
• Build AI-powered applications
• Create intelligent chatbots and RAG systems
• Design and implement scalable web applications
• Contribute to open-source projects

<span class="info">💡 Philosophy:</span>
"Technology should be accessible, innovative, and impactful. I strive to create solutions 
that not only work well but also make a positive difference."

Type 'projects' to see my work or 'skills' to view my technical expertise.
        `;
        this.addToOutput(aboutText);
    }

    showProjects() {
        const projectsText = `
<span class="success">Featured Projects</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<div class="project-card">
    <div class="project-title">🌍 CO2 Emission Predictor</div>
    <div class="project-description">
        A machine learning model that predicts CO2 emissions based on various environmental 
        and industrial factors. Uses advanced regression techniques and feature engineering 
        to provide accurate predictions for environmental impact assessment.
        
        <strong>Tech Stack:</strong> Python, Scikit-learn, Pandas, NumPy, Matplotlib
        <strong>Features:</strong> Data preprocessing, Feature selection, Model evaluation, Visualization
    </div>
    <div class="project-links">
        <a href="https://github.com/Diptenduuu/ML-project.git" target="_blank" class="project-link">📂 GitHub Repo</a>
    </div>
</div>

<div class="project-card">
    <div class="project-title">🚀 Startup Generator (GenAI App)</div>
    <div class="project-description">
        An intelligent AI-powered application that provides complete pathways for startup 
        development. Uses generative AI to analyze market trends, suggest business models, 
        and create comprehensive startup roadmaps tailored to user inputs.
        
        <strong>Tech Stack:</strong> Python, Streamlit, OpenAI API, LangChain, Pandas
        <strong>Features:</strong> AI-powered recommendations, Interactive UI, Market analysis, Business planning
    </div>
    <div class="project-links">
        <a href="https://github.com/Diptenduuu/Creativity-Bot.git" target="_blank" class="project-link">📂 GitHub Repo</a>
        <a href="https://diptendu.streamlit.app/" target="_blank" class="project-link">🌐 Live Demo</a>
    </div>
</div>

<div class="project-card">
    <div class="project-title">📺 YouTube Transcript RAG System</div>
    <div class="project-description">
        A Retrieval-Augmented Generation (RAG) system that processes YouTube video transcripts 
        using Microsoft's Phi-2 model from Hugging Face. Enables intelligent Q&A over video 
        content with context-aware responses.
        
        <strong>Tech Stack:</strong> Python, Hugging Face Transformers, Phi-2 Model, LangChain, FAISS
        <strong>Features:</strong> Transcript extraction, Vector embeddings, Semantic search, Context-aware responses
    </div>
    <div class="project-links">
        <a href="https://github.com/Diptenduuu/rag-system-phi-model.git" target="_blank" class="project-link">📂 GitHub Repo</a>
    </div>
</div>

<span class="info">💡 More projects available on my GitHub profile!</span>
        `;
        this.addToOutput(projectsText);
    }

    showSkills() {
        const skillsText = `
<span class="success">Technical Skills</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<div class="skill-category">
    <h3>🤖 Machine Learning & AI</h3>
    <div class="skill-list">
        • Python, Scikit-learn, TensorFlow, PyTorch
        • Deep Learning, Neural Networks, CNNs, RNNs
        • Natural Language Processing (NLP)
        • Computer Vision, OpenCV
        • MLOps, Model Deployment
    </div>
</div>

<div class="skill-category">
    <h3>🧠 Generative AI & LLMs</h3>
    <div class="skill-list">
        • Large Language Models (LLMs)
        • RAG (Retrieval-Augmented Generation)
        • LangChain, Hugging Face Transformers
        • OpenAI API, GPT models
        • Vector Databases (FAISS, Pinecone)
    </div>
</div>

<div class="skill-category">
    <h3>💻 Programming Languages</h3>
    <div class="skill-list">
        • Python (Advanced)
        • JavaScript/TypeScript
        • SQL, NoSQL
        • HTML5, CSS3
        • Bash/Shell Scripting
    </div>
</div>

<div class="skill-category">
    <h3>🌐 Web Development</h3>
    <div class="skill-list">
        • React.js, Node.js, Express.js
        • Streamlit, Flask, FastAPI
        • RESTful APIs, GraphQL
        • MongoDB, PostgreSQL
        • Docker, Kubernetes
    </div>
</div>

<div class="skill-category">
    <h3>📊 Data Science & Analytics</h3>
    <div class="skill-list">
        • Pandas, NumPy, Matplotlib, Seaborn
        • Data Preprocessing, Feature Engineering
        • Statistical Analysis, A/B Testing
        • Jupyter Notebooks, Google Colab
        • Power BI, Tableau
    </div>
</div>

<div class="skill-category">
    <h3>🛠️ Tools & Technologies</h3>
    <div class="skill-list">
        • Git, GitHub, GitLab
        • AWS, Google Cloud Platform
        • Linux, Ubuntu, Windows
        • VS Code, PyCharm
        • Postman, Swagger
    </div>
</div>
        `;
        this.addToOutput(skillsText);
    }

    showContact() {
        const contactText = `
<span class="success">Contact Information</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<div class="contact-info">
<span class="info">📧 Email:</span> <a href="mailto:diptendu@example.com">diptendu@example.com</a>

<span class="info">💼 LinkedIn:</span> <a href="https://linkedin.com/in/diptendu" target="_blank">linkedin.com/in/diptendu</a>

<span class="info">🐙 GitHub:</span> <a href="https://github.com/Diptenduuu" target="_blank">github.com/Diptenduuu</a>

<span class="info">🌐 Portfolio:</span> <a href="https://diptendu.streamlit.app/" target="_blank">diptendu.streamlit.app</a>

<span class="info">📱 Phone:</span> Available upon request

<span class="info">📍 Location:</span> Available for remote work worldwide

<span class="warning">💬 Let's Connect!</span>
I'm always open to discussing new opportunities, collaborations, or just having 
a chat about technology and innovation. Feel free to reach out!
</div>
        `;
        this.addToOutput(contactText);
    }

    clearTerminal() {
        this.output.innerHTML = '';
    }

    listDirectory() {
        const files = [
            'about.txt',
            'projects/',
            'skills.md',
            'contact.info',
            'resume.pdf',
            'README.md'
        ];
        
        const fileList = files.map(file => {
            if (file.endsWith('/')) {
                return `<span class="info">${file}</span>`;
            } else {
                return `<span class="success">${file}</span>`;
            }
        }).join('\n');
        
        this.addToOutput(fileList);
    }

    whoami() {
        this.addToOutput('diptendu', 'success');
    }

    showDate() {
        const now = new Date();
        this.addToOutput(now.toString(), 'info');
    }

    showPath() {
        this.addToOutput(`/home/diptendu${this.currentPath}`, 'info');
    }

    catFile(args) {
        if (args.length === 0) {
            this.addToOutput('cat: missing file operand', 'error');
            return;
        }

        const filename = args[0];
        const files = {
            'about.txt': 'Software Developer & AI Enthusiast\nPassionate about Machine Learning and Innovation',
            'README.md': '# Diptendu\'s Portfolio\n\nWelcome to my interactive terminal portfolio!\nType "help" to get started.',
            'resume.pdf': 'This is a binary file. Use a PDF viewer to open it.'
        };

        if (files[filename]) {
            this.addToOutput(files[filename], 'info');
        } else {
            this.addToOutput(`cat: ${filename}: No such file or directory`, 'error');
        }
    }

    echo(args) {
        this.addToOutput(args.join(' '), 'info');
    }

    neofetch() {
        const systemInfo = `
<span class="info">                    -\`                     diptendu@portfolio</span>
<span class="info">                   .o+\`                    ──────────────────</span>
<span class="info">                  \`ooo/                     <span class="success">OS:</span> Portfolio Linux</span>
<span class="info">                 \`+oooo:                    <span class="success">Host:</span> Terminal Portfolio</span>
<span class="info">                \`+oooooo:                   <span class="success">Kernel:</span> JavaScript Engine</span>
<span class="info">                -+oooooo+:                  <span class="success">Uptime:</span> Always Online</span>
<span class="info">              \`/:-:++oooo+:                 <span class="success">Shell:</span> Custom Terminal</span>
<span class="info">             \`/++++/+++++++:                <span class="success">Resolution:</span> Responsive</span>
<span class="info">            \`/++++++++++++++:               <span class="success">Theme:</span> Matrix Green</span>
<span class="info">           \`/+++ooooooooooooo/\`             <span class="success">Icons:</span> Unicode Emojis</span>
<span class="info">          ./ooosssso++osssssso+\`            <span class="success">Terminal:</span> Web-based</span>
<span class="info">         .oossssso-\`\`\`\`/ossssss+\`           <span class="success">CPU:</span> Your Browser</span>
<span class="info">        -osssssso.      :ssssssso.          <span class="success">Memory:</span> Unlimited Ideas</span>
<span class="info">       :osssssss/        osssso+++.         <span class="success">Disk:</span> Cloud Storage</span>
<span class="info">      /ossssssss/        +ssssooo/-         </span>
<span class="info">    \`/ossssso+/:-        -:/+osssso+-       </span>
<span class="info">   \`+sso+:-\`                 \`.-/+oso:      </span>
<span class="info">  \`++:.                           \`-/+/     </span>
<span class="info">  .\`                                 \`/      </span>
        `;
        this.addToOutput(systemInfo);
    }
}

// Initialize terminal when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});