const express = require('express');
const { CreateBlogs, getBlogs, updateBlogs, deleteBlogs } = require('../controllers/blogsController');
const { createComments, getComments, updateComments, deleteComments } = require('../controllers/commentsController');
const router = express.Router();


router.delete("/getblogsComments:id", deleteComments);
router.delete("/getBlogs:id", deleteBlogs);

router.get("/getblogsComments:id", getComments);
router.get("/getBlogs", getBlogs);

router.post("/getblogsComments", createComments);
router.post("/getBlogs", CreateBlogs);

router.put("/getblogsComments", updateComments);
router.put("/getBlogs", updateBlogs);


module.exports = router;