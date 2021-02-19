const express = require('express');

const router = express.Router();
const Post = require('../models/Post');

//getting a post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    userName: req.body.userName,
    cellPhone: req.body.cellPhone,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific post find
router.get('/:postID', async (req, res) => {
  try {
    const specificPosts = await Post.findById(req.params.postID);
    res.json(specificPosts);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post
router.delete('/:postID', async (req, res) => {
  try {
    const deletePosts = await Post.remove({ _id: req.params.postID });
    res.json(deletePosts);
  } catch (err) {
    res.json({ message: err });
  }
});

// //update post
router.patch('/:postID', async (req, res) => {
  try {
    const updatePosts = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title } }
    );
    res.json(updatePosts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
