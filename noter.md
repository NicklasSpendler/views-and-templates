# Opgave 1
_Skriv hvad *res.render()* metoden gør._

_res.render()_ betyder at den responder med en alt efter hvilken fil man skriver inde i _res.render()_. Filerne finder vi under folderen server/views/ hvilket er noget vi sætter under vores app.js.

`app.set('views', './server/views');`

#
_Skriv hvad metoden kræver som *parameter/argument*._

```javascript
app.get('/', (req, res, next) => {
    res.render('home');
});
```
I dette tilfælde er vores argument '/' som er det man skriver efter domænet inde på browseren.

req = request, det bruger vi ikke lige nu men vi bruger respond.