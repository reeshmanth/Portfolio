export const BaseInfo = {
  name: "Reeshmanth Chowdary",

  titles: [
    "CSE Undergraduate",
    "Cyber Security",
    "Software Engineer",
    "AI & ML Enthusiast",
    "Problem Solver",
    "Student Mentor" , "Team Lead"
  ],

  description:
    "Innovative dual-degree student pursuing B.Tech in Computer Science & Engineering (Cyber Security) and BBA. Strong foundations in algorithms, systems, and data-driven problem solving, with hands-on experience in AI/ML, cloud-based solutions, and full-stack development. Passionate about applying technology to solve real-world problems and deliver measurable impact.",

  profilePic: "/images/hero.jpg",
}

  
  export const aboutInfo = {
    title: "Who I Am",
    description:
      "I am a dual-degree student pursuing B.Tech in Computer Science & Engineering (Cyber Security) and BBA, with strong foundations in computer science, data structures, and emerging AI technologies. I enjoy solving real-world problems through technology, combining analytical thinking with a consulting-oriented mindset to deliver practical, scalable solutions.",
    client: "9.84/10",
    experience: "1500+",
    project: "3+",
    website: "10+",
  };

  export const educationData = [
  {
    id: 1,
    title: "B.Tech – Computer Science & Engineering (Cyber Security)",
    institution: "Koneru Lakshmaiah Education Foundation (KL University), Hyderabad",
    year: "2023 – 2027",
    score: "CGPA: 9.84 / 10",
    description:
      "Focused on core computer science subjects, cybersecurity fundamentals, data structures, and systems.",
    current: true
  },
  {
    id: 2,
    title: "BBA (Online – Parallel Degree Program)",
    institution: "Koneru Lakshmaiah Education Foundation (KL University)",
    year: "2023 – 2026",
    score: "",
    description:
      "Managing a parallel business degree alongside B.Tech, demonstrating strong time management and multitasking.",
    current: false
  },
  {
    id: 3,
    title: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    year: "2021 – 2023",
    score: "Score: 94.2%",
    description:
      "Built a strong foundation in mathematics, analytical reasoning, and problem-solving.",
    current: false
  },
  {
    id: 4,
    title: "Secondary School (Class X)",
    institution: "Unique High School",
    year: "2020 – 2021",
    score: "CGPA: 10 / 10",
    description:
      "Achieved excellent academic performance with strong fundamentals and discipline.",
    current: false
  }
]
  
  export const projectData = [
    {
    id: 1,
    title: "Agency Website",
    image: "/images/p1.png",
    url: "https://agency-opal-eight.vercel.app/",
    description: "A modern agency website with stunning animations and responsive design.",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/agency-website",
  },
  {
    id: 2,
    title: "Burger Restaurant",
    image: "/images/p2.png",
    url: "https://burger-pearl.vercel.app/",
    description: "Restaurant website with online ordering and menu management.",
    technologies: ["Next.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/burger-restaurant",
    download: "/downloads/burger-project.zip",
    readme: "https://github.com/yourusername/gaming-ecommerce#readme",
  },
  {
    id: 3,
    title: "Gaming E-commerce",
    image: "/images/p3.png",
    url: "https://game-ecommerce-yt.vercel.app/",
    description: "Gaming-focused e-commerce platform with filtering & search.",
    technologies: ["React", "Redux", "MongoDB"],
    github: "https://github.com/yourusername/gaming-ecommerce",
    readme: "https://github.com/yourusername/gaming-ecommerce#readme",
  },
  {
    id: 4,
    title: "E-Learning Platform",
    image: "/images/p4.png",
    url: "https://elearning-yt.vercel.app/",
    description: "E-learning platform with videos, quizzes and progress tracking.",
    technologies: ["Next.js", "Firebase", "TypeScript"],
  },
    {
      id: 5,
      title: "Investment Dashboard",
      image: "/images/p5.png",
      url: "https://invest-peach.vercel.app/",
      description: "A real-time investment tracking dashboard with portfolio management and market analysis tools.",
      technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
      github: "https://github.com/yourusername/investment-dashboard"
    },
    {
      id: 6,
      title: "Job Portal",
      image: "/images/p6.png",
      url: "https://job-chi-ruby.vercel.app/",
      description: "A job search platform with advanced filtering, application tracking, and employer dashboard.",
      technologies: ["Next.js", "MongoDB", "JWT", "Tailwind CSS"],
      github: "https://github.com/yourusername/job-portal"
    },
    {
      id: 7,
      title: "E-commerce Store",
      image: "/images/p7.png",
      url: "https://wdw-ecom.vercel.app/",
      description: "A modern e-commerce store with shopping cart, payment integration, and order management system.",
      technologies: ["React", "Stripe", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/ecommerce-store"
    },
    {
      id: 8,
      title: "Web Hosting Service",
      image: "/images/p8.png",
      url: "https://webhost-ten.vercel.app/",
      description: "A web hosting service website with pricing plans, domain management, and customer support portal.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "https://github.com/yourusername/webhosting-service"
    },
  ];
  
  export const skillsData = [
  // 🔹 Programming Languages (CORE)
  { id: 1, title: 'C', image: '/images/c.svg', percent: '85%', group: 'programming' },
  { id: 2, title: 'Java', image: '/images/java.svg', percent: '90%', group: 'programming' },
  { id: 3, title: 'Python', image: '/images/python.svg', percent: '85%', group: 'programming' },

  // 🔹 Frontend
  { id: 4, title: 'HTML', image: '/images/html.svg', percent: '80%', group: 'frontend' },
  { id: 5, title: 'CSS', image: '/images/css.svg', percent: '80%', group: 'frontend' },
  { id: 6, title: 'JavaScript', image: '/images/js.svg', percent: '60%', group: 'frontend' },
  { id: 7, title: 'React.js', image: '/images/react.svg', percent: '70%', group: 'frontend' },

  // 🔹 Backend
  { id: 8, title: 'Node.js', image: '/images/node.svg', percent: '65%', group: 'backend' },
  { id: 9, title: 'REST APIs', image: '/images/api.svg', percent: '65%', group: 'backend' },
  { id: 10, title: 'MongoDB', image: '/images/mongo.svg', percent: '65%', group: 'backend' },
  { id: 11, title: 'MySQL', image: '/images/mysql.svg', percent: '60%', group: 'backend' },
  { id: 12, title: 'PostgreSQL', image: '/images/postgres.svg', percent: '60%', group: 'backend' },

  // 🔹 Data / AI
  { id: 13, title: 'NumPy', image: '/images/numpy.svg', percent: '60%', group: 'data' },
  { id: 14, title: 'Pandas', image: '/images/pandas.svg', percent: '60%', group: 'data' },
  { id: 15, title: 'OpenCV (basic)', image: '/images/opencv.svg', percent: '50%', group: 'data' },

  // 🔹 Tools
  { id: 16, title: 'Git & GitHub', image: '/images/git.svg', percent: '70%', group: 'tools' },
  { id: 17, title: 'Postman', image: '/images/postman.svg', percent: '65%', group: 'tools' },
  { id: 18, title: 'Linux', image: '/images/linux.svg', percent: '65%', group: 'tools' },
]

  
  
  export const contactData = {
    phone: "9666665587",
    email: "reeshmanth@gmail.com",
    address: "Dhaka , Russia",
  };

  