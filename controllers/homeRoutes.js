const router = require('express').Router();
const { Meal, User } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
  try {
    // req.query: directly access the parsed query string parameters
    // req.params: directly access the parsed route parameters from the path
    let mealData;

    if (Object.keys(req.query).length == 0) {
        // Get all meals and JOIN with user data
        mealData = await Meal.findAll({
          include: [
              {
                  model: User,
                  attributes: ['username'],
                },
              ],
        });
      }
  else {
        // convert req.query to array of objects that can then be queried on sequelize
          var myFoodAttributes = [];
          for (var [key, value] of Object.entries(req.query)) {
            var obj = {};
            obj[key] = JSON.parse(value);
            myFoodAttributes.push(obj);
          }

          // Get all meals and JOIN with user data
        mealData = await Meal.findAll({
          where: {
            [Op.and]: myFoodAttributes
          },
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
      }
    
    // Serialize data so the template can read it
    let meals = mealData.map((meal) => meal.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      meals, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


router.get('/meal/:id', async (req, res) => {
  try {
    const mealData = await Meal.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const meal = mealData.get({ plain: true });

    res.render('meal', {
      ...meal,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Meal }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/addARecipe', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Meal }],
    });

    const user = userData.get({ plain: true });

    res.render('addARecipe', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/editARecipe', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Meal }],
    });

    const user = userData.get({ plain: true });

    res.render('editARecipe', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
