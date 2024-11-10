import Post from "../models/postModels.js";

// Create
const create = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.content ||
      !req.body.pages ||
      !req.body.author
    ) {
      return res.status(400).json({
        status: "Gagal",
        message: "Title, content, pages, and author are required.",
      });
    }

    const newPost = await Post.create(req.body);

    res.status(201).json({
      status: "Success",
      data: newPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "Gagal",
      message: error.message,
    });
  }
};

//Get
const index = async (req, res) => {
  try {
    const post = await Post.find();
    res.json({
      status: "success",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      status: "Gagal",
      message: error.message,
    });
  }
};

//Get ID


//PUT


//DELETE


export { create, index };
