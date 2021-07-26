const express = require('express');
const PORT = process.env.PORT || 3080

const app = express();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

app.get('/', (req, res, next) => {
    res.json({
        'odpowiedz': 'sukces'
    })
})