const comments =  {}

async function getComment(id) {
  return (comments[id]  || null)
}

async function getComments() {
  return comments
}

async function createComment(comment) {
  const id = Date.now()
  comments[id]  = comment
  return {
    id,
    ...comment
  }
}

async function updateComment(id, comment) {
  if (!comments[id]) {
    throw new Error('Comment not found')
  }
  comments[id] = comment
  return {
    id,
    ...comment
  }
}

async function patchComment(id, comment) {
  if (!comments[id]) {
    throw new Error('Comment not found')
  }
  comments[id] = {
    ...comments[id],
    ...comment
  }
  return {
    id,
    ...comments[id]
  }
}

async function deleteComment(id) {
  if (!comments[id]) {
    throw new Error('Comment not found')
  }
  delete comments[id]
}

module.exports = {
  getComment,
  getComments,
  createComment,
  updateComment,
  patchComment,
  deleteComment
}