require('dotenv').config();
const app = require('./api');


app.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}.`);
});