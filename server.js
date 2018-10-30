const express = require('express');
const hbs = require('hbs')
const  fs = require('fs')
 var app = express();



 hbs.registerPartials(__dirname + '/views/partials')
 app.set('view enginge' , 'hbs')
 app.use((req, res, next) => {
     var now = new Date().toString();
     var log = `${now}: ${req.method} ${req.uri}`
     console.log(log)




     fs.appendFile('server.log', log + '\n', (err) => {
         if(err){
             console.log('unable to append server.log')
         }
         });
     next();
})
        // app.use((req, res , next) =>{
        //     res.render('maintence.hbs')
        //
        //
        // })
app.use(express.static(__dirname + '/public'));



    hbs.registerHelper('getCurrentYear', () => {
        return new Date().getFullYear();
});


    hbs.registerHelper('screamIt,', () => {
        return text.toUpperCase()
})

app.get('/' , (req,res) => {
    res.render('home.hbs' , {
        homeTitle:'Home Page',
        currentYear: new Date().getFullYear()
    });
});



app.get('/about', (req, res) => {
     res.render('about.hbs', {
         pageTitle: 'About Page',

   });
});


 app.get('/header' , (req , res ) => {
     res.render('header.hbs', {
         headerTitle: 'This is a header',

     });
 });

  app.listen(3000);