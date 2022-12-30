const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const path = require('path');
const route = require('./routes/index.js')
const app = express();
const port = 3000;
const db = require('./config/db')

db.Connect();
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))


route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})