import React, { useState } from 'react';

function CarouselSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rangeValue, setRangeValue] = useState(50);
  const [sliderValues, setSliderValues] = useState({
    price: 500,
    quantity: 10,
    quality: 75,
    speed: 5
  });

  const carouselItems = [
    {
      id: 1,
      title: 'Mountain Landscape',
      image: 'https://picsum.photos/seed/mountain/800/400.jpg',
      description: 'Beautiful mountain landscape with snow peaks'
    },
    {
      id: 2,
      title: 'Ocean Sunset',
      image: 'https://picsum.photos/seed/ocean/800/400.jpg',
      description: 'Stunning ocean sunset with golden horizon'
    },
    {
      id: 3,
      title: 'Forest Path',
      image: 'https://picsum.photos/seed/forest/800/400.jpg',
      description: 'Serene forest path with morning light'
    },
    {
      id: 4,
      title: 'City Skyline',
      image: 'https://picsum.photos/seed/city/800/400.jpg',
      description: 'Modern city skyline at twilight'
    },
    {
      id: 5,
      title: 'Desert Dunes',
      image: 'https://picsum.photos/seed/desert/800/400.jpg',
      description: 'Golden sand dunes under clear blue sky'
    }
  ];

  const testimonialItems = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      testimonial: 'This platform has revolutionized how our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%.',
      rating: 5,
      avatar: 'https://picsum.photos/seed/sarah/100/100.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'UX Designer',
      company: 'DesignStudio',
      testimonial: 'The collaboration tools are exactly what we needed. Real-time editing and feedback has streamlined our design process significantly.',
      rating: 4,
      avatar: 'https://picsum.photos/seed/michael/100/100.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Developer',
      company: 'CodeWorks',
      testimonial: 'Best development platform I\'ve used. The code quality and deployment tools are top-notch. Highly recommend!',
      rating: 5,
      avatar: 'https://picsum.photos/seed/emily/100/100.jpg'
    }
  ];

  const productGallery = [
    {
      id: 1,
      name: 'Premium Laptop',
      price: 1299,
      image: 'https://picsum.photos/seed/laptop/300/200.jpg',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 79,
      image: 'https://picsum.photos/seed/mouse/300/200.jpg',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      price: 149,
      image: 'https://picsum.photos/seed/keyboard/300/200.jpg',
      badge: 'Sale'
    },
    {
      id: 4,
      name: 'USB-C Hub',
      price: 49,
      image: 'https://picsum.photos/seed/hub/300/200.jpg',
      badge: null
    },
    {
      id: 5,
      name: 'Monitor Stand',
      price: 89,
      image: 'https://picsum.photos/seed/stand/300/200.jpg',
      badge: 'Popular'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleRangeChange = (slider, value) => {
    setSliderValues(prev => ({ ...prev, [slider]: value }));
  };

  return (
    <div className="carousel-slider-container">
      <h2>Carousel and Slider Components</h2>
      
      {/* Image Carousel */}
      <section className="carousel-section">
        <h3>Image Carousel</h3>
        
        <div className="carousel-container">
          <div className="carousel-viewport">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div key={item.id} className="carousel-slide">
                  <img src={item.image} alt={item.title} />
                  <div className="slide-caption">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            className="carousel-control prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button 
            className="carousel-control next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="testimonial-section">
        <h3>Testimonial Carousel</h3>
        
        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {testimonialItems.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-slide ${currentSlide === index ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                  <div className="testimonial-text">
                    <blockquote>"{testimonial.testimonial}"</blockquote>
                    <cite>
                      <strong>{testimonial.name}</strong>
                      <span className="role">{testimonial.role}</span>
                      <span className="company">@{testimonial.company}</span>
                    </cite>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial Controls */}
          <div className="testimonial-controls">
            <button onClick={prevSlide} className="control-btn">Previous</button>
            <button onClick={nextSlide} className="control-btn">Next</button>
          </div>
        </div>
      </section>

      {/* Range Sliders */}
      <section className="slider-section">
        <h3>Range Sliders</h3>
        
        <div className="sliders-grid">
          {/* Basic Range Slider */}
          <div className="slider-item">
            <label htmlFor="basic-range">Volume: {rangeValue}%</label>
            <input
              type="range"
              id="basic-range"
              min="0"
              max="100"
              value={rangeValue}
              onChange={(e) => setRangeValue(Number(e.target.value))}
              className="range-slider"
            />
            <div className="range-value-display">{rangeValue}%</div>
          </div>

          {/* Multi-Range Sliders */}
          <div className="multi-range-container">
            <h4>Product Configuration</h4>
            
            <div className="slider-item">
              <label htmlFor="price-range">Price: ${sliderValues.price}</label>
              <input
                type="range"
                id="price-range"
                min="100"
                max="2000"
                step="50"
                value={sliderValues.price}
                onChange={(e) => handleRangeChange('price', Number(e.target.value))}
                className="range-slider"
              />
            </div>

            <div className="slider-item">
              <label htmlFor="quantity-range">Quantity: {sliderValues.quantity}</label>
              <input
                type="range"
                id="quantity-range"
                min="1"
                max="50"
                value={sliderValues.quantity}
                onChange={(e) => handleRangeChange('quantity', Number(e.target.value))}
                className="range-slider"
              />
            </div>

            <div className="slider-item">
              <label htmlFor="quality-range">Quality: {sliderValues.quality}%</label>
              <input
                type="range"
                id="quality-range"
                min="0"
                max="100"
                value={sliderValues.quality}
                onChange={(e) => handleRangeChange('quality', Number(e.target.value))}
                className="range-slider quality-slider"
              />
            </div>

            <div className="slider-item">
              <label htmlFor="speed-range">Speed: {sliderValues.speed}x</label>
              <input
                type="range"
                id="speed-range"
                min="1"
                max="10"
                value={sliderValues.speed}
                onChange={(e) => handleRangeChange('speed', Number(e.target.value))}
                className="range-slider speed-slider"
              />
            </div>
          </div>

          {/* Configuration Summary */}
          <div className="slider-summary">
            <h4>Configuration Summary</h4>
            <div className="summary-grid">
              <div className="summary-item">
                <span>Total Price:</span>
                <strong>${(sliderValues.price * sliderValues.quantity).toLocaleString()}</strong>
              </div>
              <div className="summary-item">
                <span>Quality Level:</span>
                <strong>{sliderValues.quality}%</strong>
              </div>
              <div className="summary-item">
                <span>Processing Speed:</span>
                <strong>{sliderValues.speed}x</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Carousel */}
      <section className="product-gallery-section">
        <h3>Product Gallery</h3>
        
        <div className="product-carousel">
          <div className="product-track">
            {productGallery.map((product, index) => (
              <div 
                key={product.id} 
                className={`product-slide ${currentSlide === index ? 'active' : ''}`}
              >
                <div className="product-card">
                  {product.badge && (
                    <span className={`product-badge ${product.badge.toLowerCase()}`}>
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p className="product-price">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Product Controls */}
          <div className="product-controls">
            <button onClick={prevSlide} className="control-btn">← Previous</button>
            <div className="product-indicators">
              {productGallery.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="control-btn">Next →</button>
          </div>
        </div>
      </section>

      {/* Vertical Slider */}
      <section className="vertical-slider-section">
        <h3>Vertical Slider</h3>
        
        <div className="vertical-slider-container">
          <div className="vertical-track">
            <div 
              className="vertical-slides"
              style={{ transform: `translateY(-${currentSlide * 100}%)` }}
            >
              {carouselItems.slice(0, 3).map((item, index) => (
                <div key={item.id} className="vertical-slide">
                  <img src={item.image} alt={item.title} />
                  <div className="slide-info">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Vertical Controls */}
          <div className="vertical-controls">
            <button onClick={prevSlide} className="vertical-control up">↑</button>
            <button onClick={nextSlide} className="vertical-control down">↓</button>
          </div>
        </div>
      </section>

      {/* Status Information */}
      <section className="slider-status">
        <h3>Component Status</h3>
        <div className="status-grid">
          <div className="status-item">
            <span>Current Slide:</span>
            <strong>{currentSlide + 1} of {carouselItems.length}</strong>
          </div>
          <div className="status-item">
            <span>Active Range:</span>
            <strong>{rangeValue}%</strong>
          </div>
          <div className="status-item">
            <span>Total Configuration:</span>
            <strong>${(sliderValues.price * sliderValues.quantity).toLocaleString()}</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarouselSlider;
