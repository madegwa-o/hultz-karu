import logo from './assets/hult.png'
import winner from './assets/winner.png'

import './HultKaruHomepage.css';

const HultKaruHomepage = () => {
    return (
        <div className="homepage">
            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src={logo} alt="Hult Prize" className="logo" />
                        <span className="chapter-name">Karatina University</span>
                    </div>
                    <div className="nav-links">
                        <a href="#challenge">The Challenge</a>
                        <a href="#competition">Competition</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="nav-mobile">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">How will you change Kenya?</h1>
                    <p className="hero-subtitle">
                        Join Karatina University's brightest minds in creating world-changing business solutions
                        that address Kenya's most pressing challenges while building a profitable enterprise.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Join the Competition</button>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={winner} alt="Students innovating" />
                </div>
            </section>

            {/* Winners Section */}
            <section className="winners-section">
                <div className="container">
                    <div className="winners-content">
                        <h2>2024 Hult Prize Global Winners: Korion Health</h2>
                        <p>
                            Health tech innovators from our global community won this year's $1M USD prize
                            at the Global Finals in London, proving that student innovation can change the world.
                        </p>
                        <button className="btn-outline">See Their Journey</button>
                    </div>
                    <div className="winners-image">
                        <img src="https://via.placeholder.com/500x300/34C759/FFFFFF?text=Korion+Health+Winners" alt="Korion Health Winners" />
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="challenge-section" id="challenge">
                <div className="container">
                    <h2>The Hult Prize Challenge</h2>
                    <div className="challenge-grid">
                        <div className="challenge-card main-card">
                            <h3>Create a for-profit, world-changing business idea</h3>
                            <p>
                                Develop innovative solutions that align with at least one of the
                                United Nations Sustainable Development Goals (SDGs) while addressing
                                challenges specific to Kenya and East Africa.
                            </p>
                            <button className="btn-primary">View SDGs</button>
                        </div>
                        <div className="challenge-stats">
                            <div className="stat">
                                <h3>$1M USD</h3>
                                <p>Prize Money</p>
                            </div>
                            <div className="stat">
                                <h3>130+</h3>
                                <p>Countries</p>
                            </div>
                            <div className="stat">
                                <h3>200K+</h3>
                                <p>Annual Participants</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competition Journey */}
            <section className="journey-section" id="competition">
                <div className="container">
                    <h2>Your Competition Journey at KARU</h2>
                    <div className="journey-timeline">
                        <div className="timeline-item">
                            <div className="timeline-number">01</div>
                            <div className="timeline-content">
                                <h3>Campus Competition</h3>
                                <p>Compete with fellow Karatina University students. Top teams advance to regionals.</p>
                                <span className="timeline-date">March 2025</span>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-number">02</div>
                            <div className="timeline-content">
                                <h3>Regional Finals</h3>
                                <p>Represent KARU at the East Africa Regional Finals against other top universities.</p>
                                <span className="timeline-date">May 2025</span>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-number">03</div>
                            <div className="timeline-content">
                                <h3>Global Finals</h3>
                                <p>Top regional teams compete for the $1M USD prize at the Global Finals.</p>
                                <span className="timeline-date">September 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Areas */}
            <section className="impact-section">
                <div className="container">
                    <h2>Focus Areas for Kenya</h2>
                    <div className="impact-grid">
                        <div className="impact-card">
                            <div className="impact-icon">🌾</div>
                            <h3>Food Security</h3>
                            <p>Innovative solutions for sustainable agriculture and food distribution in Kenya</p>
                        </div>
                        <div className="impact-card">
                            <div className="impact-icon">💡</div>
                            <h3>Clean Energy</h3>
                            <p>Renewable energy solutions for rural and urban communities</p>
                        </div>
                        <div className="impact-card">
                            <div className="impact-icon">🏥</div>
                            <h3>Healthcare Access</h3>
                            <p>Technology-driven healthcare solutions for underserved populations</p>
                        </div>
                        <div className="impact-card">
                            <div className="impact-icon">📚</div>
                            <h3>Education</h3>
                            <p>EdTech innovations to improve learning outcomes across Kenya</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Change the World?</h2>
                        <p>
                            Join the Hult Prize Karatina University chapter and turn your innovative ideas
                            into world-changing businesses. Registration opens January 2025.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn-primary large">Register Interest</button>
                            <button className="btn-outline large">Contact Chapter Team</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h4>Hult Prize KARU</h4>
                            <p>Karatina University Chapter</p>
                            <p>Inspiring student entrepreneurs to create world-changing businesses</p>
                        </div>
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#challenge">The Challenge</a></li>
                                <li><a href="#competition">Competition</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="https://www.hultprize.org/" target="_blank" rel="noopener noreferrer">Global Hult Prize</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Connect With Us</h4>
                            <div className="social-links">
                                <a href="#" aria-label="Twitter">Twitter</a>
                                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                                <a href="#" aria-label="Instagram">Instagram</a>
                                <a href="#" aria-label="Facebook">Facebook</a>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h4>Contact</h4>
                            <p>hultprize@karu.ac.ke</p>
                            <p>Karatina University</p>
                            <p>Karatina, Kenya</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 Hult Prize Karatina University Chapter. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HultKaruHomepage;