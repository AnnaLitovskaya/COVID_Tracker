const router = require('express')();

// get all highscores
router.get('/', async (req, res, next) => {
  try {
    res.send(await Highscore.findAll());
  } catch (err) {
    next(err);
  }
});

// get all highscores by game ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    res.send(
      await Highscore.findAll({
        where: { game: id },
      })
    );
  } catch (err) {
    next(err);
  }
});

// create new highscore
router.post('/', async (req, res, next) => {
  try {
    const { game, score, userId } = req.body;
    const newUser = await Highscore.create({
      game,
      score,
      userId,
    });
    res.status(201).send(newUser);
  } catch (err) {
    next(err);
  }
});

// delete highscore
router.delete('/:id', async (req, res, next) => {
  try {
    const highscoreToDelete = await Highscore.findByPk(req.params.id);
    await highscoreToDelete.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
