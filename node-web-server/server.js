const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now}: ${req.method} ${req.url}`
    fs.appendFile('server.log', log + '\n', (e) => {
        if (e) {
            console.log('Unable to append to log')
        }
    });
    next();
})
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// })
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Home Page",
        welcomeMessage: "lorem ipsum jerks.",

    })
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: "About Page Suckers !",
    });
})
app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: "My Projects",
    });
})

app.get('/bad', (req, res) => {
    res.send({
        error: 'Page did not load'
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});