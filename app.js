const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { MONGODB } = require('./config');

const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');
const auth = require('./middleware/auth');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', auth, todoRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
    const err = new Error('URL incorrect Please check.');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ error: { message: err.message } });
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection mongo db sucessfull');
        return app.listen(3300);
    })
    .then(() => console.log('server running at 3300'))
    .catch(err => console.log(err.message));

    module.exports = app;

