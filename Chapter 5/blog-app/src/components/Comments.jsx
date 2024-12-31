import React, { useState, useEffect } from 'react';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {

      const mockComments = [
        { id: 1, text: `Comment 1 on Post ${postId}` },
        { id: 2, text: `Comment 2 on Post ${postId}` },
      ];
      setComments(mockComments);
    };
    fetchComments();
  }, [postId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          style={{ padding: '10px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
