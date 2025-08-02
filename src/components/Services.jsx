import './Services.css'

const Services = () => {
  const services = [
    {
      title: "New Farm Setup Consultation",
      icon: "🌱",
      description: "Complete guidance for establishing a new mango orchard from ground up",
      features: [
        "Site selection and soil analysis",
        "Variety recommendation based on climate",
        "Orchard layout and spacing design",
        "Irrigation system planning",
        "Initial planting guidance",
        "First-year care instructions"
      ],
      duration: "3-6 months support",
      price: "Comprehensive package available"
    },
    {
      title: "Existing Farm Optimization",
      icon: "🔧",
      description: "Enhance productivity and solve problems in established mango orchards",
      features: [
        "Yield analysis and improvement strategies",
        "Disease and pest management",
        "Pruning and tree health assessment",
        "Fertilization program optimization",
        "Water management efficiency",
        "Harvest timing and post-harvest care"
      ],
      duration: "Ongoing support",
      price: "Flexible consultation plans"
    },
    {
      title: "Remote Consultation Services",
      icon: "💻",
      description: "Expert advice accessible from anywhere through digital platforms",
      features: [
        "Video call consultations",
        "Photo-based problem diagnosis",
        "Detailed written reports",
        "Seasonal care calendars",
        "Emergency support hotline",
        "Follow-up progress monitoring"
      ],
      duration: "Flexible scheduling",
      price: "Hourly or package rates"
    },
    {
      title: "Group Training Programs",
      icon: "👥",
      description: "Educational workshops and training for farmer groups and communities",
      features: [
        "Modern mango farming techniques",
        "Sustainable agriculture practices",
        "Disease prevention strategies",
        "Market-oriented farming",
        "Financial planning for farmers",
        "Technology adoption guidance"
      ],
      duration: "1-3 day workshops",
      price: "Group discounts available"
    }
  ]

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <h2>Professional Consultation Services</h2>
        <p className="services-intro">
          Tailored solutions for every stage of your mango farming journey
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-footer">
                <div className="service-meta">
                  <span className="duration">⏰ {service.duration}</span>
                  <span className="price">💰 {service.price}</span>
                </div>
                <button 
                  className="btn btn-primary"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
