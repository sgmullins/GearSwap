const Post = require('../models/post');
const cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: 'gearswap',
    api_key: '692592224443913',
    api_secret: process.env.CLOUDINARY_SECRET
});

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
        req.body.post.images = [];
        for(file of req.files){
            let image = await cloudinary.v2.uploader.upload(file.path);
            req.body.post.images.push({
                url: image.secure_url,
                public_id: image.public_id
            });
        }
        //use req.body to create a new Post
        let post = await Post.create(req.body.post);
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
    },
    //Post Update
    async postUpdate(req,res,next){
      let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
        res.redirect(`/posts/${post.id}`);
    },
    async postDestroy(req,res,next){
        await Post.findByIdAndRemove(req.params.id);
        res.redirect('/posts');
    }
}