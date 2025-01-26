import React from "react";
import "./Hero.css";
// Import images
import lasVegasImg from "../images/adv4.jpg";
import chicagoImg from "../images/adv3.jpg";
import newYorkImg from "../images/adv2.jpg";
import newYorkSecondImg from "../images/adv1.jpg";

const TravelDestinations2 = () => {
  const destinations = [
    {
      id: 1,
      image: lasVegasImg,
      name: "Las Vegas",
      description: "The Entertainment Capital of the World",
      price: "From $299",
      rating: 4.8,
    },
    {
      id: 2,
      image: chicagoImg,
      name: "Chicago",
      description: "The Windy City Experience",
      price: "From $249",
      rating: 4.6,
    },
    {
      id: 3,
      image: newYorkImg,
      name: "New York",
      description: "The City That Never Sleeps",
      price: "From $399",
      rating: 4.9,
    },
    {
      id: 4,
      image: newYorkSecondImg,
      name: "New York",
      description: "Big Apple Adventures",
      price: "From $349",
      rating: 4.7,
    },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="container-alt">
        <div className="header-content">
          <h2 className="title-alt">Discover Domestic Places</h2>
          <div className="title-decoration"></div>
        </div>

        <div className="destinations-wrapper">
          <div className="destinations-scroll-container">
            {destinations.map((destination) => (
              <div key={destination.id} className="destination-item">
                <div className="destination-image-wrapper">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-img"
                  />
                  <div className="price-tag">{destination.price}</div>
                </div>
                <div className="destination-info">
                  <h3 className="destination-title">{destination.name}</h3>
                  <p className="destination-subtitle">{destination.description}</p>
                  <div className="destination-footer">
                    <div className="rating-box">
                      <span className="rating-number">{destination.rating}</span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={`star-icon ${
                              index < Math.floor(destination.rating)
                                ? "filled"
                                : "empty"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="explore-btn">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div><button className="view-more-btn">
          View More Destinations
          <span className="arrow-icon">→</span>
        </button>
    </section>
  );
};

export default TravelDestinations2;     