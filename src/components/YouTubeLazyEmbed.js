import React, { useState } from 'react';

const YouTubeLazyEmbed = ({ videoId, title }) => {
  const [showIframe, setShowIframe] = useState(false);

  // Koristimo maxresdefault za bolji kvalitet ako postoji, ili hqdefault
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        aspectRatio: '16/9',
        borderRadius: '0.375rem',
        overflow: 'hidden',
        // Menjamo pozadinu u providnu da Safari ne bi imao šta da iscrta na ivicama
        background: 'transparent', 
        cursor: 'pointer',
        // Ovi redovi ispod su ključni za Safari "edge" bug:
        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
        WebkitTransform: 'translateZ(0)',
        isolation: 'isolate'
      }}
      onClick={() => setShowIframe(true)}
    >
      {showIframe ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
        />
      ) : (
        <>
          <img
            src={thumbnail}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              // Force-ujemo sliku da popuni prostor bez obzira na njene originalne dimenzije
              objectFit: 'cover', 
              display: 'block',
              // Blagi scale (1.01) ponekad pomaže da slika "precuri" piksel preko ivice i sakrije linije
              transform: 'scale(1.01)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: 64,
              opacity: 0.85,
              pointerEvents: 'none',
              textShadow: '0 0 15px rgba(0,0,0,0.5)'
            }}
          >
            ▶
          </div>
        </>
      )}
    </div>
  );
};

export default YouTubeLazyEmbed;