module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "title": "Home page"
      });
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "title": "Contact page"
      });
   });
   app.get('/product', (req, res, next) => {
      res.render('product', {
         "title": "Product page",
         "products": [{"name": "Banan"}, {"name": "Æble"}, {"name": "Appelsin"}]
      });
   });
};