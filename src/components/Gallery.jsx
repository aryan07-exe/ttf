import React, { useState } from 'react';
import './Gallery.css';
import adv1 from '../images/new.jpg';
import adv2 from '../images/k2.jpg';
import adv3 from '../images/k3.jpg';
import adv4 from '../images/k1.jpg';
import taj from '../images/taj.jpg';
import trip from '../images/trip3.jpg';
import mal from '../images/adv4.jpg';
import g2 from '../images/trip4.jpg';
import g1 from '../images/new2.jpg';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 2,
      url: taj,
      title: 'Taj Mahal',
      location: 'Agra, India',
      size: 'wide',
      description: 'Experience the thrill of alpine adventures'
    },
    {
      id: 1,
      url: adv2,
      title: 'Kashmir',
      location: 'India',
      size: 'tall',
      description: 'Symbol of eternal love and architectural marvel'
    },
    
    
    {
      id: 4,
      url: adv3,
      title: 'Manali',
      location: 'India',
      size: 'wide',
      description: 'Crystal clear waters and white sandy beaches'
    },
    {
      id: 5,
      url: adv4,
      title: 'Ladakh',
      location: 'India',
      size: 'tall',
      description: 'Thrilling adventures in golden dunes'
    },
    {
      id: 6,
      url: trip,
      title: 'Cultural Experience',
      location: 'Kerala, India',
      size: 'wide',
      description: 'Rich cultural heritage and royal palaces'
    },
    {
      id: 3,
      url: mal,
      title: 'Mountains',
      location: 'Japan',
      size: 'tall',
      description: 'Luxury overwater villas and pristine beaches'
    },
    {
      id: 3,
      url: adv1,
      title: 'Camping',
      location: 'Uttrakhand',
      size: 'tall',
      description: 'Luxury overwater villas and pristine beaches'
    },{
      id: 3,
      url: g1,
      title: "Humayun's Tomb",
      location: 'Delhi',
      size: 'tall',
      description: 'Luxury overwater villas and pristine beaches'
    },
    {
      id: 7,
      url: g2,
      title: 'Mountain Valley',
      location: 'Bali',
      size: 'big',
      description: 'Magical sunsets over pristine beaches'
    },
  ];

  const getLayoutClass = (index) => {
    const patterns = ['tall', 'wide', 'big', 'tall wide', 'wide tall'];
    return patterns[index % patterns.length];
  };

  return (
    <section id="gallery-section" className="gallery-section">
      <div className="gallery-header">
        <span className="gallery-subtitle">Our Moments</span>
        <h2 className="gallery-title">Travel Gallery</h2>
        <div className="title-decoration"></div>
      </div>

      <div className="gallery-container">
        <div className="creative-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery-item ${getLayoutClass(index)}`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="image-wrapper">
                <img src={image.url} alt={image.title} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <p className="location">{image.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p className="modal-location">{selectedImage.location}</p>
              <p className="modal-description">{selectedImage.description}</p>
            </div>
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};


export default Gallery; 