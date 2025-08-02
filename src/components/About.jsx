import './About.css'

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2>About Dr. MangoExpert</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p>
                With over three decades of academic excellence and practical experience in 
                mango agriculture, I am dedicated to helping farmers achieve optimal yields 
                and sustainable farming practices.
              </p>
            </div>
            
            <div className="credentials">
              <h3>Professional Background</h3>
              <ul>
                <li>🎓 <strong>Retired Professor</strong> - Agricultural Sciences Department</li>
                <li>🌱 <strong>30+ Years</strong> of mango cultivation research and practice</li>
                <li>📚 <strong>Published Author</strong> of numerous agricultural research papers</li>
                <li>🏆 <strong>Award Winner</strong> for contributions to sustainable farming</li>
                <li>👨‍🏫 <strong>Mentor</strong> to hundreds of successful farmers</li>
              </ul>
            </div>

            <div className="specialties">
              <h3>Areas of Expertise</h3>
              <div className="specialty-grid">
                <div className="specialty-item">
                  <span className="icon">🌳</span>
                  <h4>Orchard Planning</h4>
                  <p>Strategic farm layout and variety selection for maximum productivity</p>
                </div>
                <div className="specialty-item">
                  <span className="icon">🔬</span>
                  <h4>Soil Science</h4>
                  <p>Comprehensive soil analysis and nutrition management</p>
                </div>
                <div className="specialty-item">
                  <span className="icon">💧</span>
                  <h4>Water Management</h4>
                  <p>Efficient irrigation systems and water conservation techniques</p>
                </div>
                <div className="specialty-item">
                  <span className="icon">🛡️</span>
                  <h4>Disease Control</h4>
                  <p>Organic and integrated pest management solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
