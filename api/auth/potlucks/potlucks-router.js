const express = require("express");
const router = express.Router();
const Potlucks = require("./potlucks-model");
const { restricted } = require("./middleware/restricted");

router.get("/:id", restricted(), async (req, res, next) => {
  try {
    const potlucks = await Potlucks.find(req.params.id);

    return res.status(200).json(potlucks);
  } catch (err) {
    next(err);
  }
});

router.put("/:id/potlucks/:potlucksID");
try {
  const potluck = await Potlucks.findById(req.parama.potlucksID);

  if (!potluck) {
    return res.status(404).json({
      message: "Potluck doesn't exist",
    });
  }
  const potluckData = { event_name: req.body.event_name, date: req.body.date };
  const updatePotluck = await Potlucks.update(
    req.params.potlucksID,
    potluckData
  );

  return res.status(200).json(updatePotluck);
} catch (err) {
  next(err);
}

router.post("/:id", restricted(), async (req, res, next) => {
  try {
    const potluck = await Potlucks.create({
      event_name: req.body.event_name,
      date: req.body.date,
      city_id: req.params.city_id,
      items: req.body.items,
    });

    return res.status(200).json(potluck);
  } catch (err) {
    next(err);
  }
});

router.delete(
  "/:id/potlucks/:potluckID",
  restricted(),
  async (req, res, next) => {
    try {
      const count = await Potlucks.remove(req.params.potluckID);

      if (count > 0) {
        return res.status(200).json({
          message: "The potluck was deleted",
        });
      } else {
        return res.status(404).json({
          message: "This potluck does not exist",
        });
      }
    } catch (err) {
      next(err);
    }
  }
);

router.get("/:");

module.exports = router;
