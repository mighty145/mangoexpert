import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Maharashtra, India",
      farm: "25-acre mango orchard",
      quote: "Dr. MangoExpert's guidance transformed my failing farm into a profitable venture. His soil management techniques increased our yield by 40% in just two seasons.",
      rating: 5,
      image: "👨‍🌾"
    },
    {
      name: "Maria Santos",
      location: "Philippines",
      farm: "New 10-acre plantation",
      quote: "Starting a mango farm seemed overwhelming until I found this consultation service. The comprehensive setup plan made everything clear and achievable.",
      rating: 5,
      image: "👩‍🌾"
    },
    {
      name: "Ahmed Hassan",
      location: "Egypt",
      farm: "15-year old orchard",
      quote: "The disease management program saved my entire crop. Professional advice that actually works in real farming conditions.",
      rating: 5,
      image: "🧑‍🌾"
    },
    {
      name: "Sarah Johnson",
      location: "Florida, USA",
      farm: "Organic mango farm",
      quote: "Excellent remote consultation service. Detailed reports and ongoing support helped us achieve organic certification with great yields.",
      rating: 5,
      image: "👩‍🌾"
    },
    {
      name: "Carlos Mendoza",
      location: "Mexico",
      farm: "Family farm expansion",
      quote: "The group training program was invaluable. Our entire farming community benefited from the modern techniques and best practices shared.",
      rating: 5,
      image: "👨‍🌾"
    },
    {
      name: "Priya Patel",
      location: "Gujarat, India",
      farm: "Water-scarce region farm",
      quote: "The water management solutions were exactly what we needed. Now we're growing premium mangoes despite limited water resources.",
      rating: 5,
      image: "👩‍🌾"
    }
  ]

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-intro">
          Real success stories from farmers who transformed their mango operations with expert guidance
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.image}</div>
                <div className="client-info">
                  <h4>{testimonial.name}</h4>
                  <p className="location">{testimonial.location}</p>
                  <p className="farm-info">{testimonial.farm}</p>
                </div>
              </div>
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              
              <blockquote>
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="testimonials-cta">
          <h3>Ready to Join Our Success Stories?</h3>
          <p>Transform your mango farm with expert consultation</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
