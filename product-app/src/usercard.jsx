export default function UserCard({ user }) {
  return (
    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>{user.name}</h3>
      <p style={{ margin: '4px 0', color: '#555', fontSize: '0.9rem' }}>📧 {user.email}</p>
      <p style={{ margin: '4px 0', color: '#777', fontSize: '0.85rem' }}>🏢 {user.company?.name}</p>
    </div>
  );
}