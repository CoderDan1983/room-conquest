const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

require('dotenv').config();

app.use(express.static(path.join(__dirname, './')));
app.use(express.urlencoded({ extended: true }));

//adding HBS :D
const { engine } = require('express-handlebars');

app.engine('hbs', engine({
    layoutDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialDir: `${__dirname}/views/partials`,
    helpers: { //helper available globally (ie-this for this instance)

    }
}));
app.set('view engine', 'hbs');

//"routes" :D
app.get('/', (req, res)=>{
    res.render('main', { layout: 'index' })
})


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT} `);
})
