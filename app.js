const express = require( 'express' );
const chalk = require('chalk');
const app = express(); // creates an instance of an express application
const morgan = require('morgan')

const blog = x => {console.log(chalk.blue(x))}

app.listen(3000, () => console.log('listening on 3000'))
// app.use(function (req, res, next) {
//     // console.log(chalk.blue(Object.keys(req).join(', ')));
//     // blog(JSON.stringify(req.headers));
//     // blog(JSON.stringify(req.statusCode));
//     // blog(JSON.stringify(req.url));
//     blog(req.method + ' ' + req.url)
//     return next()
// })
app.use(morgan(`${chalk.bold.green(':method')} ${chalk.blue(':url')} ${chalk.yellow(':status')}`))
app.use('/special/', (req, res, next) => {
    blog('special area');
    return next();
})
app.get('/:pars?', (req, res) => {
    console.log(req.params);
    res.json('hi')
})

app.use(function (req, res, next) {
    blog(req.statusCode)
    return next()
})