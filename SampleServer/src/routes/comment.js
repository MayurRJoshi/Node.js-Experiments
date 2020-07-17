module.exports = {
  '/comment/:commentId': {
    get: {
      controller: 'commentController',
      method: 'getComment'
    },
    put: {
      controller: 'commentController',
      method: 'updateComment'
    },
    patch: {
      controller: 'commentController',
      method: 'patchComment'
    },
    delete: {
      controller: 'commentController',
      method: 'deleteComment'
    }
  },
  '/comments': {
    post: {
      controller: 'commentController',
      method: 'createComment'
    },
    get: {
      controller: 'commentController',
      method: 'getComments'
    },
  }
}