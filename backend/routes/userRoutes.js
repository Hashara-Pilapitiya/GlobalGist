const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json("Hello from userRoutes");
});

module.exports = router;