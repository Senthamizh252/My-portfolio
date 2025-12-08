import healonImg from '../assets/images/healon.jpg';
import routemateImg from '../assets/images/routemate.png';
import fashionistaImg from '../assets/images/fashionista.png';
import skillconnectImg from '../assets/images/skillconnect.png';
import productivityTrackerImg from '../assets/images/productivity.png';

export const projectsData = [
    {
        id: "healon",
        title: "HEALON",
        description: "Heal-On bridges the rural healthcare gap with AI-driven health assessments, virtual doctor support, and real-time medicine availability.",
        fullDescription: "Heal-On is a comprehensive healthcare platform designed to address the disparity in medical access for rural areas. It leverages AI to provide initial health assessments, connects patients with doctors virtually, and ensures medicines are available in real-time.",
        technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
        variant: "gold",
        buttonText: "DOWNLOAD",
        githubLink: "https://www.figma.com/make/ivtwLMqlMSc092WPS2Iaez/Telemedicine-App-Design?node-id=0-4&t=mYmPpBzTQ7tl9njt-1",
        image: healonImg,
        liveLink: "#"
    },
    {
        id: "routemate",
        title: "ROUTEMATE",
        description: "Routemate delivers instant bus tracking with live location, driver-conductor info, accurate arrivals, and delay notifications.",
        fullDescription: "Routemate is a smart public transport companion that provides real-time tracking of buses. It offers features like live location sharing, driver and conductor details, and accurate arrival time predictions to help commuters plan their journeys better.",
        technologies: ["Flutter", "Firebase", "Google Maps API"],
        variant: "gold",
        driveLink: "https://drive.google.com/file/d/1b09sDzLKU8bUfUnHxcsVmFUORmkvinXQ/view?usp=drivesdk",
        buttonText: "DOWNLOAD",
        image: routemateImg,
        liveLink: "#"
    },
    {
        id: "skillconnect",
        title: "SKILLCONNECT",
        description: "Advanced job filters enable precise matching by skill, location, pay range, experience, availability, and verified status.",
        fullDescription: "SkillConnect is a job portal that focuses on precise matching between job seekers and employers. It uses advanced filters for skills, location, and experience to ensure the best fit for both parties.",
        technologies: ["React", "Express", "PostgreSQL"],
        variant: "default",
        buttonText: "Get Started",
        githubLink: "https://github.com/Senthamizh252/skill-connect.git",
        image: skillconnectImg,
        liveLink: "#"
    },
    {
        id: "fashionista",
        title: "FASHIONISTA",
        description: "Empowering every individual to design clothing that truly fits their identity. Connecting creators and boutiques through a trusted, scalable custom-fashion ecosystem.",
        fullDescription: "Fashionista is a custom fashion platform that allows users to design their own clothing. It connects independent creators and boutiques, fostering a scalable ecosystem for custom fashion.",
        technologies: ["Vue.js", "Django", "Stripe API"],
        variant: "default",
        driveLink: "https://drive.google.com/file/d/16ar9Ou3rVO3vVXnY7Cily-0T7sxkRh0i/view?usp=drivesdk",
        buttonText: "DOWNLOAD",
        image: fashionistaImg,
        liveLink: "#"
    },
    {
        id: "productivity-tracker",
        title: "PRODUCTIVITY TRACKER",
        description: "A simple tool that predicts student productivity based on mood, study time, and distractions.",
        fullDescription: "The Productivity Tracker is an analytical tool for students. By inputting data on mood, study duration, and distractions, it uses predictive algorithms to estimate productivity levels and suggest improvements.",
        technologies: ["Python", "Pandas", "Scikit-learn"],
        variant: "gold",
        buttonText: "DOWNLOAD",
        githubLink: "https://github.com/Senthamizh252/student-productivity-tracker.git",
        image: productivityTrackerImg,
        liveLink: "#"
    }
];
