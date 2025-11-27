import heroImage from '../assets/images/Senthamizh.jpg';

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
                    <p>
                        A 2nd-year CSE student passionate about <strong>data analytics</strong>, problem-solving, and design. I enjoy finding patterns in data and turning them into meaningful insights. I love exploring new tools, UI trends, and ideas that help me grow in tech and analytics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
