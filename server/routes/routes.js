module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "titel": "OmegaNiceForside dude"
      });
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
   app.get('/product', (req, res, next) => {
      res.render('product');
   });
};