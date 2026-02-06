import React, { useState } from 'react';

const YouTubeLazyEmbed = ({ videoId, title }) => {
  const [showIframe, setShowIframe] = useState(false);

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
        background: '#000',
        cursor: 'pointer'
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
            borderRadius: '0.375rem'
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
              objectFit: 'cover',
              display: 'block'
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
              pointerEvents: 'none'
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
