const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const bossRouter = require("./bosses/router");

router.use("/bosses", bossRouter);

/* ************************************************************************* */

module.exports = router;
