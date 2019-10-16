const User = require('../models/user');
const Post = require('../models/post');
const passport = require('passport');
const mapBoxToken = process.env.MAPBOX_TOKEN;

module.exports = {
  //GET /
  async landingPage(req, res, next){
    const posts = await Post.find({});
    res.render('index', { posts, mapBoxToken, title: 'Gear Closet - Home' });
  },

  //GET /Register
    getRegister(req, res, next){
      res.render('register', { title: 'Register' });
    },

  //POST /Register method
   async postRegister(req, res, next) {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        image: req.body.image
      });
      let user = await User.register(newUser, req.body.password);
      req.login(user, function(err){
        if (err) return next(err);
        req.session.success = `Welcome to Gear Swap, ${user.username}!`
        res.redirect('/');
      });
    },

    //GET /Login
    getLogin(req, res, next){
      res.render('login', { title: 'Login' });
    },

    // POST /login
    postLogin (req, res, next){
      passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login' 
      })(req, res, next);
    },
    //GET /logout
    getLogout (req, res, next){
        req.logout();
        res.redirect('/');
      }
    
}