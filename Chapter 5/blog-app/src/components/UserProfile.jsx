import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null); 
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false); 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 

  // Simulate fetching user data
  useEffect(() => {
    const fetchUser = async () => {
      const mockUser = { id: 1, name: 'Jay', email: 'jay@gmail.com' };
      setUser(mockUser);
      setName(mockUser.name);
      setEmail(mockUser.email);
      
      const mockPosts = [
        { id: 1, title: 'My First Post' },
        { id: 2, title: 'Another Post' },
      ];
      setPosts(mockPosts);
    };
    
    fetchUser();
  }, []);

  const handleSaveProfile = () => {
    console.log('Profile saved:', { name, email });

    setIsEditing(false);
  };

  return (
    <div>
      <h1>User Profile</h1>
      
      {isEditing ? (
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: '10px', width: '300px' }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '10px', width: '300px' }}
            />
          </div>
          <button onClick={handleSaveProfile} style={{ padding: '10px', marginTop: '10px' }}>
            Save Profile
          </button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <button onClick={() => setIsEditing(true)} style={{ padding: '10px', marginTop: '10px' }}>
            Edit Profile
          </button>
        </div>
      )}

      <h2>Your Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
