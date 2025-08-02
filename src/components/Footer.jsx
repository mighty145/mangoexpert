import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🥭 MangoExpert</h3>
            <p>
              Professional mango agriculture consultation services by a retired professor 
              with over 30 years of experience in sustainable farming practices.
            </p>
            <div className="social-links">
              <span>Connect with us:</span>
              <div className="social-icons">
                <span>📧</span>
                <span>📱</span>
                <span>💬</span>
                <span>🌐</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>New Farm Setup</li>
              <li>Farm Optimization</li>
              <li>Remote Consultation</li>
              <li>Group Training</li>
              <li>Emergency Support</li>
              <li>Soil Analysis</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Expertise Areas</h4>
            <ul>
              <li>Orchard Planning</li>
              <li>Disease Management</li>
              <li>Water Conservation</li>
              <li>Organic Farming</li>
              <li>Yield Optimization</li>
              <li>Post-Harvest Care</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Contact</h4>
            <div className="contact-info">
              <p>📧 consultation@mangoexpert.com</p>
              <p>📱 +1 (555) MANGO-HELP</p>
              <p>💬 +1 (555) 626-4674</p>
              <p>🕒 Mon-Sat: 8:00 AM - 6:00 PM</p>
            </div>
            <button 
              className="btn btn-secondary footer-cta"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Consultation
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} MangoExpert. All rights reserved.</p>
            <p className="disclaimer">
              Professional agricultural consultation services. Individual results may vary based on local conditions, 
              climate, and implementation of recommended practices.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
