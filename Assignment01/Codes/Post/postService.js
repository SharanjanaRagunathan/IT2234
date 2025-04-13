const users = require('../User/users');
const comments = require('../Comments/comments');

function getCommentsWithCommentators(postId) {
  const postComments = comments.filter(comment => comment.postId === postId);

  const updatedComments = postComments.map(comment => {
    const user = users.find(u => u.id === comment.userId);
    return {
      commentator: user.fullName,
      comment: comment.content,
    };
  });

  return updatedComments;
}

module.exports = { getCommentsWithCommentators };