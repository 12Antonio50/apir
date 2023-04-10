const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) =>{
    const data = {
        "name": "USER",
        "estado-animo": "Triste"
    };
    res.json(data);
});

module.exports = router;