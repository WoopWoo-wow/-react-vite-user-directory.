import { useState } from 'react';

export default function ProductCard({ title, price, description, image, board }) {
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(14);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img src={image} alt={title} style={imageStyle} />
        
        {/* Pinterest Red Save Button */}
        <button 
          onClick={() => setIsSaved(!isSaved)} 
          style={{
            ...saveButtonStyle,
            backgroundColor: isSaved ? '#111111' : '#e60023',
          }}
        >
          {isSaved ? 'Saved ✓' : 'Save'}
        </button>
      </div>

      <div style={contentStyle}>
        <span style={boardTagStyle}>{board}</span>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descStyle}>{description}</p>
        
        <div style={footerStyle}>
          <span style={priceStyle}>${price.toFixed(2)}</span>
          <button onClick={toggleLike} style={likeButtonStyle}>
            {isLiked ? '❤️' : '🤍'} {likes}
          </button>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  breakInside: 'avoid',
  marginBottom: '20px',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
};

const imageContainerStyle = {
  position: 'relative',
  width: '100%',
};

const imageStyle = {
  width: '100%',
  display: 'block',
  objectFit: 'cover',
};

const saveButtonStyle = {
  position: 'absolute',
  top: '12px',
  right: '12px',
  color: '#ffffff',
  border: 'none',
  padding: '10px 16px',
  borderRadius: '24px',
  fontWeight: 'bold',
  fontSize: '0.85rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
};

const contentStyle = {
  padding: '12px 16px',
  textAlign: 'left',
};

const boardTagStyle = {
  fontSize: '0.75rem',
  fontWeight: 'bold',
  color: '#767676',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const titleStyle = {
  fontSize: '1rem',
  margin: '4px 0',
  color: '#111',
};

const descStyle = {
  fontSize: '0.85rem',
  color: '#5f5f5f',
  margin: '4px 0 12px 0',
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const priceStyle = {
  fontWeight: 'bold',
  fontSize: '1rem',
  color: '#111',
};

const likeButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.9rem',
  color: '#333',
};