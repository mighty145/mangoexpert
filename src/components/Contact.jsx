import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmLocation: '',
    farmSize: '',
    serviceType: '',
    experience: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For demo purposes, we'll just show a success message
    // In a real application, you would send this data to your backend
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      farmLocation: '',
      farmSize: '',
      serviceType: '',
      experience: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2>Get Your Consultation Today</h2>
        <p className="contact-intro">
          Ready to transform your mango farm? Let's discuss your specific needs and create a customized plan for success.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>📞 Direct Contact</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>consultation@mangoexpert.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">📱</span>
                <div>
                  <strong>Phone</strong>
                  <p>+1 (555) MANGO-HELP</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>+1 (555) 626-4674</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">🌐</span>
                <div>
                  <strong>Availability</strong>
                  <p>Mon-Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="consultation-types">
              <h4>Consultation Options:</h4>
              <ul>
                <li>🎥 Video Call Consultation</li>
                <li>📍 On-site Farm Visits</li>
                <li>📝 Written Reports & Analysis</li>
                <li>📞 Emergency Support Hotline</li>
                <li>👥 Group Training Sessions</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>📝 Request Consultation</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="form-group">
                  <label>Farm Location *</label>
                  <input
                    type="text"
                    name="farmLocation"
                    value={formData.farmLocation}
                    onChange={handleChange}
                    required
                    placeholder="City, State/Province, Country"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Farm Size</label>
                  <select
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleChange}
                  >
                    <option value="">Select farm size</option>
                    <option value="under-5-acres">Under 5 acres</option>
                    <option value="5-10-acres">5-10 acres</option>
                    <option value="10-25-acres">10-25 acres</option>
                    <option value="25-50-acres">25-50 acres</option>
                    <option value="over-50-acres">Over 50 acres</option>
                    <option value="planning-new">Planning new farm</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Service Needed *</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select service type</option>
                    <option value="new-farm-setup">New Farm Setup</option>
                    <option value="existing-farm-optimization">Existing Farm Optimization</option>
                    <option value="remote-consultation">Remote Consultation</option>
                    <option value="group-training">Group Training</option>
                    <option value="emergency-support">Emergency Support</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Farming Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="intermediate">Intermediate (3-10 years)</option>
                  <option value="experienced">Experienced (10+ years)</option>
                  <option value="no-experience">No farming experience</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Describe Your Needs *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Please describe your current situation, challenges, or goals for your mango farm..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Consultation Request
              </button>
              
              {isSubmitted && (
                <div className="success-message">
                  ✅ Thank you! Your consultation request has been received. 
                  We'll contact you within 24 hours to discuss your needs.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
