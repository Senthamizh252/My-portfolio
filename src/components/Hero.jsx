import heroImage from '../assets/images/Senthamizh.jpg';
import resume from '../assets/resume.pdf';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-image">
                    {/* Placeholder for the circular image from Canva */}
                    <div className="image-wrapper">
                        {/* User needs to replace this with actual image */}
                        <img src={heroImage} alt="Senthamizh" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#ccc' }} />
                    </div>
                </div>
                <div className="hero-text">
                    <h1>Hi, I am <span className="script-text">Senthamizh</span></h1>
                    <p>I am interested in data analysis — uncovering stories that matter.</p>
                    <a href={resume} className="btn-download">Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
