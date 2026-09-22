import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import UserCard from './UserCard';

const pinterestArt = [
  {
    id: 1,
    title: 'Locomotive something',
    price: 45.00,
    board: 'Oil Paintings',
    description: 'Made this last year, legit na lingaw ko something.',
    image: '/art1.jpg',
  },
  {
    id: 2,
    title: 'Cheerleader smtng',
    price: 120.00,
    board: 'Modern Gallery',
    description: 'if u have that kind of fetish pls dont.',
    image: '/art2.jpg',
  },
  {
    id: 3,
    title: 'bonkers',
    price: 65.00,
    board: 'Sculptures & Decor',
    description: 'she will bonk u',
    image: '/art3.jpg',
  },
  {
    id: 4,
    title: 'Dont use gen ai on arts its bad',
    price: 67.00,
    board: 'Prints',
    description: 'human art is far more better than generative art.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6FGfg5i6BCwjWJP24gslAPWvej25GMeVWwehU9G2xg&s=10',
  },
];

export default function App() {
  const [activeBoard, setActiveBoard] = useState('All');

  // Task 1: Required Lab State Hooks
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Task 2: Required useEffect Fetch Call
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const boards = ['All', 'Oil Paintings', 'Modern Gallery', 'Sculptures & Decor', 'Prints'];

  const filteredArt = activeBoard === 'All' 
    ? pinterestArt 
    : pinterestArt.filter((item) => item.board === activeBoard);

  return (
    <div style={{ padding: '30px 40px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      
      {/* Header */}
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px', color: '#111' }}>
        📌 Art & Aesthetic Pins
      </h1>
      <p style={{ textAlign: 'center', color: '#767676', marginBottom: '16px' }}>
        Explore and save pieces to your personal boards
      </p>

      {/* Instagram Button */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <a 
          href="https://www.instagram.com/art_or_jan/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#E1306C',
            color: '#ffffff',
            padding: '8px 18px',
            borderRadius: '20px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            boxShadow: '0 2px 8px rgba(225,48,108,0.3)',
          }}
        >
          📷 Follow on Instagram
        </a>
      </div>

      {/* Board Filter Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {boards.map((board) => (
          <button
            key={board}
            onClick={() => setActiveBoard(board)}
            style={{
              padding: '10px 18px',
              borderRadius: '24px',
              border: 'none',
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              backgroundColor: activeBoard === board ? '#111111' : '#e9e9e9',
              color: activeBoard === board ? '#ffffff' : '#111111',
            }}
          >
            {board}
          </button>
        ))}
      </div>

      {/* Pinterest Masonry Multi-Column Grid */}
      <div style={{ columnCount: 3, columnGap: '20px', maxWidth: '1000px', margin: '0 auto 40px auto' }}>
        {filteredArt.map((art) => (
          <ProductCard
            key={art.id}
            title={art.title}
            price={art.price}
            description={art.description}
            image={art.image}
            board={art.board}
          />
        ))}
      </div>

      {/* Task 3: Render User Data Section */}
      <div style={{ maxWidth: '1000px', margin: '40px auto', paddingTop: '20px', borderTop: '2px solid #eee' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User Directory (Fetched Data)</h2>

        {loading && <p style={{ textAlign: 'center' }}>Loading users...</p>}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>}

        {!loading && !error && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}