const Post = require('../models/post');

module.exports = {
    //Post index
    async postIndex(req, res, next){
        let posts = await Post.find({});
        res.render('posts/index', { posts });
    },
    //new post no async because it is not rendering any data, just getting a form so it does not need asyncErrorHandler
    postNew(req, res, next){
        res.render('posts/new');
    },
    //Post create
    async postCreate(req, res, next){
        //use req.body to create a new Post
        let post = await Post.create(req.body);
        res.redirect(`/posts/${post.id}`);
    },
    //Post Show
    async postShow(req, res, next){
       let post = await Post.findById(req.params.id);
       res.render('posts/show', { post });
    },
    //Post Edit
    async postEdit(req, res, next){
        let post = await Post.findById(req.params.id);
        res.render('posts/edit', { post });
    }
}