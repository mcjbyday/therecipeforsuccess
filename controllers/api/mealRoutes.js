const router = require('express').Router();
const { Meal } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newMeal = await Meal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMeal);
  } catch (err) {
    res.status(400).json(err.message);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
    const meal = await Meal.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!meal[0]) {
      res.status(404).json({ message: 'No meal could be found by that id...' });
      return;
    }
    res.status(200).json({ message: 'The requested meal was updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const mealData = await Meal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!mealData) {
      res.status(404).json({ message: 'No meal found with this id!' });
      return;
    }

    res.status(200).json(mealData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
