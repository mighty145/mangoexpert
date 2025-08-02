import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <h1>Expert Mango Agriculture Consultation</h1>
            <p className="hero-subtitle">
              Transform your mango farming with decades of academic expertise and practical knowledge
            </p>
            <p className="hero-description">
              As a retired professor and mango agriculture specialist, I provide comprehensive 
              consultation services for both new farm setups and optimizing existing mango orchards. 
              Let's grow your success together.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Start Your Consultation
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
