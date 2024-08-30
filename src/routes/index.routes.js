const express = require('express');
const router = express.Router();

let todos = [];

router.get('/', (req, res) => {
    res.render('index', { title: "Hello from server👋", todos });
});

router.post('/add-todo', (req, res) => {
    const { task } = req.body;
    if (task) {
        todos.push({ task, done: false });
    }
    res.redirect('/');
});

router.post('/toggle-todo', (req, res) => {  
    const { index } = req.body;
    if (todos[index]) {
        todos[index].done = !todos[index].done;
    }
    res.redirect('/');
});

router.post('/delete-todo', (req, res) => { 
    const { index } = req.body;
    todos = todos.filter((_, i) => i !== parseInt(index));
    res.redirect('/');
});

module.exports = router;