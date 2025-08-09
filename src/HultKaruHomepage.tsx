import {useState} from "react";
import homePageImage from './assets/winner.png'
import './HultKaruHomepage.css';

const ModernHultHomepage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="homepage">
            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <div className="logo-circle">HP</div>
                        <span className="chapter-name">Karatina University</span>
                    </div>
                    <div className={`nav-links ${mobileMenuOpen ? 'nav-active' : ''}`}>
                        <a href="#challenge" onClick={() => setMobileMenuOpen(false)}>Challenge</a>
                        <a href="#competition" onClick={() => setMobileMenuOpen(false)}>Competition</a>
                        <a href="#impact" onClick={() => setMobileMenuOpen(false)}>Impact</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                        <button className="nav-cta-btn">Join Now</button>
                    </div>
                    <div className={`nav-mobile ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="badge-text">🏆 $1M Prize • 130+ Countries • 200K+ Students</span>
                        </div>
                        <h1 className="hero-title">
                            Karu <span className="gradient-text">Hult</span> Chapter
                        </h1>
                        <p className="hero-subtitle">
                            Join Karatina University's most ambitious entrepreneurs in creating profitable businesses
                            that solve real problems. Turn your ideas into world-changing solutions.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">
                                <span>Start Your Journey</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.166 10h11.667m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="btn-ghost">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.667 10 10 13.333 13.333 10M10 6.667v6.666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Learn More</span>
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-elements">
                            <div className="float-item float-1">💡</div>
                            <div className="float-item float-2">KARU</div>
                            <div className="float-item float-3">STUDENTS</div>
                        </div>
                        <div className="hero-image-placeholder" style={{
                            backgroundImage: `url(${homePageImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="image-gradient"></div>
                            <div className="image-content">
                                <h3>Innovation Hub</h3>
                                <p>Where ideas become reality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Story */}
            <section className="success-story">
                <div className="container">
                    <div className="success-content">
                        <div className="success-text">
                            <div className="success-badge">
                                <span>🏅 2024 Global Winners</span>
                            </div>
                            <h2>Korion Health: From Idea to $1M</h2>
                            <p>
                                This year's winners prove that student innovation can change the world.
                                Their health tech solution is now transforming healthcare access globally.
                            </p>
                            <div className="success-metrics">
                                <div className="metric">
                                    <span className="metric-number">$1M</span>
                                    <span className="metric-label">Prize Won</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-number">50K+</span>
                                    <span className="metric-label">Lives Impacted</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-number">15</span>
                                    <span className="metric-label">Countries</span>
                                </div>
                            </div>
                            <button className="btn-outline">
                                <span>See Their Story</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="success-visual">
                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="300"
                                    src="https://www.youtube.com/embed/ORa3tayN6WQ"
                                    title="Korion Health Success Story"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{
                                        borderRadius: '24px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="challenge-section" id="challenge">
                <div className="container">
                    <div className="section-header">
                        <h2>The Challenge That Changes Everything</h2>
                        <p>Create a for-profit business that aligns with the UN's Sustainable Development Goals while addressing Kenya's most pressing challenges.</p>
                    </div>

                    <div className="challenge-content">
                        <div className="challenge-main">
                            <div className="challenge-visual">
                                <div className="sdg-grid">
                                    {[1,2,3,4,5,6,7,8,9].map(num => (
                                        <div key={num} className="sdg-item">
                                            <span>SDG {num}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="challenge-text">
                                <h3>17 Global Goals, Infinite Possibilities</h3>
                                <p>
                                    From poverty reduction to climate action, from quality education to sustainable cities -
                                    choose your focus area and build a business that creates both profit and positive impact.
                                </p>
                                <div className="challenge-features">
                                    <div className="feature">
                                        <div className="feature-icon">🎯</div>
                                        <span>Targeted local impact</span>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-icon">💰</div>
                                        <span>Profitable business model</span>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-icon">🌍</div>
                                        <span>Global scalability</span>
                                    </div>
                                </div>
                                <button className="btn-primary">Explore SDGs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competition Journey */}
            <section className="journey-section" id="competition">
                <div className="container">
                    <div className="section-header">
                        <h2>Your Path to Global Impact</h2>
                        <p>Three stages, one million-dollar opportunity</p>
                    </div>

                    <div className="journey-flow">
                        <div className="journey-step">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Campus Competition</h3>
                                <p>Compete with fellow KARU students and showcase your innovative business idea</p>
                                <div className="step-details">
                                    <span className="step-date">March 2025</span>
                                    <span className="step-location">Karatina University</span>
                                </div>
                            </div>
                            <div className="step-connector"></div>
                        </div>

                        <div className="journey-step">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>Regional Finals</h3>
                                <p>Represent KARU at the East Africa Regional Finals against top universities</p>
                                <div className="step-details">
                                    <span className="step-date">May 2025</span>
                                    <span className="step-location">East Africa</span>
                                </div>
                            </div>
                            <div className="step-connector"></div>
                        </div>

                        <div className="journey-step">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Global Finals</h3>
                                <p>Compete for the $1M USD prize at the prestigious Global Finals</p>
                                <div className="step-details">
                                    <span className="step-date">September 2025</span>
                                    <span className="step-location">Global</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Areas */}
            <section className="impact-section" id="impact">
                <div className="container">
                    <div className="section-header">
                        <h2>Focus Areas for Kenya</h2>
                        <p>Where innovation meets opportunity</p>
                    </div>

                    <div className="impact-areas">
                        <div className="impact-area">
                            <div className="impact-icon">🌾</div>
                            <h3>Food Security</h3>
                            <p>Revolutionizing agriculture with smart farming solutions, supply chain innovation, and sustainable food distribution systems.</p>
                            <div className="impact-stats">
                                <span>40M+ affected by food insecurity</span>
                            </div>
                        </div>

                        <div className="impact-area featured">
                            <div className="impact-icon">💡</div>
                            <h3>Clean Energy</h3>
                            <p>Bringing renewable energy solutions to rural and urban communities, creating sustainable power infrastructure for all.</p>
                            <div className="impact-stats">
                                <span>8M+ without electricity access</span>
                            </div>
                        </div>

                        <div className="impact-area">
                            <div className="impact-icon">🏥</div>
                            <h3>Healthcare Access</h3>
                            <p>Technology-driven healthcare solutions that bridge the gap between medical services and underserved populations.</p>
                            <div className="impact-stats">
                                <span>Limited access in rural areas</span>
                            </div>
                        </div>

                        <div className="impact-area">
                            <div className="impact-icon">📚</div>
                            <h3>Education Innovation</h3>
                            <p>EdTech solutions that improve learning outcomes and make quality education accessible across Kenya.</p>
                            <div className="impact-stats">
                                <span>2M+ out-of-school children</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <div className="cta-badge">
                            <span>Registration Opens January 2025</span>
                        </div>
                        <h2>Ready to build the future?</h2>
                        <p>
                            Join Karatina University's most ambitious entrepreneurs and turn your innovative ideas
                            into world-changing businesses that create both profit and positive impact.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn-primary large">
                                <span>Register Your Interest</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.166 10h11.667m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="btn-ghost large">
                                <span>Contact Chapter Team</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer" id="contact">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-main">
                            <div className="footer-logo">
                                <div className="logo-circle">HP</div>
                                <span>Hult Prize KARU</span>
                            </div>
                            <p>Empowering Karatina University students to create world-changing businesses that solve real problems and generate sustainable impact.</p>
                            <div className="social-links">
                                <a href="#" aria-label="Twitter">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-links">
                            <div className="footer-column">
                                <h4>Competition</h4>
                                <ul>
                                    <li><a href="#challenge">The Challenge</a></li>
                                    <li><a href="#competition">Timeline</a></li>
                                    <li><a href="#impact">Focus Areas</a></li>
                                    <li><a href="https://www.hultprize.org/" target="_blank" rel="noopener noreferrer">Global Hult Prize</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Resources</h4>
                                <ul>
                                    <li><a href="#">Startup Guide</a></li>
                                    <li><a href="#">Mentorship</a></li>
                                    <li><a href="#">Workshops</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Contact</h4>
                                <ul>
                                    <li>hultprize@karu.ac.ke</li>
                                    <li>Karatina University</li>
                                    <li>Karatina, Kenya</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 Hult Prize Karatina University Chapter. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/254115225391"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
                aria-label="Contact us on WhatsApp"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
            </a>
        </div>
    );
};

export default ModernHultHomepage;