const router = require('express').Router();
const {getCharById} = require('../Controllers/getCharById');
const login = require('../Controllers/login');
const postUser = require('../Controllers/postUser');
const postFav = require('../Controllers/postFav');
const deleteFav = require('../Controllers/deleteFav');




router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/character/:id", getCharById);



module.exports = router;
