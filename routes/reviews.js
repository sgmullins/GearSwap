const express = require('express');
const router = express.Router({ mergeParams: true });
const {  asyncErrorHandler,isReviewAuthor } = require('../middleware');
const { reviewCreate, reviewUpdate, reviewDestroy } = require('../controllers/reviews');

/* GET reviews create /posts/:id/reviews */
router.post('/', asyncErrorHandler(reviewCreate));

/* PUT reviews update /posts/:id/reviews/:review_id */
<<<<<<< HEAD
router.put('/:review_id', isReviewAuthor, asyncErrorHandler(reviewUpdate));
=======
router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /posts/:id/reviews/:review_id');
  });
>>>>>>> parent of b226cc0... Add jquery edit reviews code, set user to always logged in

/* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/:review_id');
  });

module.exports = router;