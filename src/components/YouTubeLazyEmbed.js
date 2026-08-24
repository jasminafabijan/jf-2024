import React, { useState } from 'react';

const YouTubeLazyEmbed = ({ videoId, title }) => {
  const [showIframe, setShowIframe] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (showIframe) {
    return (
      <div className="youtube-embed">
        <iframe
          className="youtube-embed__iframe"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="youtube-embed"
      onClick={() => setShowIframe(true)}
      aria-label={`Play ${title}`}
    >
      <img
        className="youtube-embed__thumb"
        src={thumbnail}
        alt={title}
      />
      <span className="youtube-embed__play" aria-hidden="true">
        <svg className="youtube-embed__icon" viewBox="0 0 24 24">
          <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
        </svg>
      </span>
    </button>
  );
};

export default YouTubeLazyEmbed;
