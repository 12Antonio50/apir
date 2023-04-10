const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const users = await response.json();
    res.json(users);
});

module.exports = router;