import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Cloud, Layers3, GraduationCap, Trophy, BriefcaseBusiness,
  ExternalLink, FileText, Sparkles
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "Hostel Management System",
    description: "A web-based system designed to support hostel operations, student access, and staff workflows.",
    tags: ["Python", "Firebase", "Google Cloud"],
    type: "Web application",
    link: "https://github.com/bhashithakalva/Hostel_web"
  },
  {
    number: "02",
    title: "Bus Ticket Booking System",
    description: "A booking application focused on making ticket reservations and related workflows easier to manage.",
    tags: ["Python", "Flask", "Firebase", "Google Cloud"],
    type: "Booking system",
    link: "https://github.com/bhashithakalva/CodeAlpha_BusPassSystem"
  },
  {
    number: "03",
    title: "AI Chatbot",
    description: "A chatbot project that retrieves cloud-stored responses to answer user queries.",
    tags: ["Python", "Cloud"],
    type: "AI application",
    link: "https://github.com/bhashithakalva/CodeAlpha_AiChatBot"
  },
  {
    number: "04",
    title: "Real-Time AI Mock Interview",
    description: "An interview-practice concept designed to simulate interview questions and help candidates prepare.",
    tags: ["AI", "Google Cloud"],
    type: "Interview platform",
    link: "https://github.com/bhashithakalva/AI_realtime_mock_interview"
  },
  {
    number: "05",
    title: "Hotel Management System",
    description: "A Java console application with room booking, guest services, restaurant reservations, billing, and file-based storage.",
    tags: ["Java", "OOP", "File Handling"],
    type: "Console application",
    link: "https://github.com/bhashithakalva/Hotel_Management"
  },
  {
    number: "06",
    title: "EduSphere",
    description: "An ideathon-stage concept for using AI/ML to support academic monitoring, identify students who may need extra help, and suggest personalized learning guidance. This idea has not been developed into a working product yet.",
    tags: ["Concept", "AI/ML", "Education Technology"],
    type: "Idea · Not developed",
    link: ""
  },
  {
    number: "07",
    title: "MoneyMaps",
    description: "A personal finance platform for budget tracking, transactions, financial goals, expense forecasting, and financial simulations.",
    tags: ["Personal Finance", "Web application"],
    type: "PROMPT RUN project",
    link: "https://moneymaps-amber.vercel.app/",
    repo: "https://github.com/bhashithakalva/moneymaps"
  }
];

const experience = [
  {
    role: "Digital Creation Department Co-Lead",
    organization: "Microsoft Learn Student Club · VRSEC",
    description: "Contribute to digital content creation and support technical community activities and initiatives.",
    kind: "Student leadership"
  },
  {
    role: "Software Development Intern",
    organization: "CodeAlpha",
    description: "Gained exposure to cloud computing through internship learning and project-based technical tasks.",
    kind: "Internship"
  }
];

const achievements = [
  { rank: "03", title: "3rd Position", event: "HackSprint" },
  { rank: "20", title: "Top 20", event: "Ideathon" },
  { rank: "50", title: "Top 50", event: "PROMPT RUN" }
];

const certifications = [
  { provider: "Cisco Networking Academy", items: [
    "C Essentials 1", "C Essentials 2", "Python Essentials 1", "Python Essentials 2", "Linux Essentials"
  ]},
  { provider: "Google Cloud", items: ["Cloud Digital Leader (CDL)", "GCCF Certification"] },
  { provider: "IBM", items: ["Prompt Engineering Certification"] },
  { provider: "Coursera", items: ["Operating Systems"] }
];

const skills = [
  { label: "Programming languages", values: ["Python", "C", "Java"] },
  { label: "Cloud & backend", values: ["Google Cloud", "Firebase", "Firestore", "Flask"] },
  { label: "Tools", values: ["Git", "GitHub", "VS Code"] }
];

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  const githubUrl = "https://github.com/bhashithakalva";
  const linkedinUrl = "https://www.linkedin.com/in/kalva-lakshmi-bhashitha/";
  const email = "bhashitha.kalva@gmail.com";
  const resumeUrl = "/resume.pdf";

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>Kalva Lakshmi Bhashitha</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {[
              ["About", "#about"], ["Projects", "#projects"], ["Experience", "#experience"],
              ["Achievements", "#achievements"], ["Certifications", "#certifications"]
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">CSE STUDENT · DEVELOPER</div>
            <h1 className="typing-heading"><span className="typing-line typing-first">Kalva Lakshmi</span><span className="typing-line typing-second">Bhashitha.</span></h1>
            <p className="hero-lead">I build practical solutions with code, cloud technologies, and thoughtful design.</p>
            <p className="hero-description">
              Computer Science and Engineering student exploring cloud computing and full-stack development through hands-on projects.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-socials">
              {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={12} /></a>}
              {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} /></a>}
              
            </div>
          </div><div className="hero-bottomline"><span>BASED IN INDIA</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="section container" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Learning by building." />
          <div className="about-grid">
            <p className="about-intro">I’m a CSE student who enjoys turning ideas into working applications.</p>
            <div className="about-body">
              <p>Through academic and personal projects, I’ve explored application development, cloud integration, file handling, and problem-solving. I enjoy learning new tools and building projects that solve practical problems.</p>
              <p>My current areas of interest are <strong>cloud computing</strong> and <strong>full-stack development</strong>, with a growing interest in applying AI to useful real-world ideas.</p>
              <div className="interest-row">
                <span><Cloud size={16} /> Cloud computing</span>
                <span><Layers3 size={16} /> Full-stack development</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="projects">
          <div className="container">
            <SectionHeading eyebrow="SELECTED WORK" title="Projects with purpose." note="A selection of academic and personal projects." />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
                  <div className="project-icon"><Code2 size={21} strokeWidth={1.7} /></div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <div className="project-footer">
                    <span>PROJECT OVERVIEW</span>
                    {project.link && <a className="project-link-icon" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} link`} title={project.title === "MoneyMaps" ? "Live demo" : "Open project"}><ExternalLink size={17} /></a>}{project.repo && <a className="project-link-icon" href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} GitHub repository`} title="GitHub repository"><ExternalLink size={17} /></a>}{!project.link && !project.repo && <span className="link-pending">{project.title === "EduSphere" ? "Concept only" : "Details available on request"}</span>}
                  </div>
                </article>
              ))}
            </div>
            <p className="section-footnote">Explore the source code for available projects. EduSphere is an idea-stage concept, not a developed application.</p>
          </div>
        </section>

        <section className="section container" id="skills">
          <SectionHeading eyebrow="TOOLS I WORK WITH" title="Technical toolkit." />
          <div className="skills-layout">
            <div className="skills-intro">
              <p>Tools and technologies I’ve worked with while building projects and learning software development.</p>
              <span className="small-label"><Code2 size={15} /> CONTINUOUSLY LEARNING</span>
            </div>
            <div className="skills-groups">
              {skills.map(group => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="tag-list">{group.values.map(value => <span className="skill-tag" key={value}>{value}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="experience">
          <div className="container">
            <SectionHeading eyebrow="EXPERIENCE & LEADERSHIP" title="Growing through doing." />
            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.organization}>
                  <div className="timeline-marker">{index === 0 ? <BriefcaseBusiness size={17} /> : <Code2 size={17} />}</div>
                  <div className="timeline-content">
                    <div className="timeline-meta"><span>{item.kind}</span><span>0{index + 1}</span></div>
                    <h3>{item.role}</h3>
                    <p className="timeline-org">{item.organization}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="achievements">
          <SectionHeading eyebrow="MILESTONES" title="A few proud moments." />
          <div className="achievement-grid">
            {achievements.map((item) => (
              <article className="achievement-card" key={item.event}>
                <div className="achievement-icon"><Trophy size={20} /></div>
                <p className="achievement-rank">{item.rank}</p>
                <h3>{item.title}</h3>
                <p className="achievement-event">{item.event}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-soft" id="certifications">
          <div className="container">
            <SectionHeading eyebrow="CONTINUOUS LEARNING" title="Certifications." note="Grouped by learning provider." />
            <div className="certification-list">
              {certifications.map((group, index) => (
                <div className="certification-group" key={group.provider}>
                  <div className="certification-provider"><span>0{index + 1}</span><h3>{group.provider}</h3></div>
                  <div className="certification-items">
                    {group.items.map(item => <div className="certification-item" key={item}><span>{item}</span><span className="cert-dot" /></div>)}
                  </div>
                </div>
              ))}
            </div>
            <p className="section-footnote">Professional learning across programming, cloud computing, and software development.</p>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card">
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>Have an idea?<br /><span>Let’s talk.</span></h2>
            <p className="contact-copy">I’m open to connecting with people who build, learn, and explore new ideas.</p>
            <div className="contact-actions">
              {email ? <a className="button button-primary" href={`mailto:${email}`}>Email me <Mail size={16} /></a> : <span className="contact-placeholder">Add your email to activate this button.</span>}
              {linkedinUrl && <a className="button button-secondary" href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a>}
              {githubUrl && <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>}
              {resumeUrl && <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">Résumé <FileText size={16} /></a>}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#home">Kalva Lakshmi Bhashitha</a>
        <p>Designed with intention by Kalva Lakshmi Bhashitha.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
