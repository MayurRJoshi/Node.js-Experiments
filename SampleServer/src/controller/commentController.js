const commentService = require('../service/commentService')

async function getComment(req, res) {
  res.json(await commentService.getComment(req.params.commentId))
}

async function getComments(req, res) {
  res.json(await commentService.getComments())
}

async function createComment(req, res) {
  res.json(await commentService.createComment(req.body.comment))
}

async function updateComment(req, res) {
  res.json(await commentService.updateComment(req.params.commentId, req.body.comment))
}

async function patchComment(req, res) {
  res.json(await commentService.patchComment(req.params.commentId, req.body.comment))
}

async function deleteComment(req, res) {
  await commentService.deleteComment(req.params.commentId)
  res.sendStatus(200)
}

module.exports = {
  getComment,
  getComments,
  createComment,
  updateComment,
  patchComment,
  deleteComment
}