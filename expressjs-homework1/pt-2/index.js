const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));



// Default route
app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1>');
});

// Route to display form
app.get('/add_student', (req, res) => {
    res.send(`
        <form method="post" action="/all_students">
            <input type="text" name="name" placeholder="Enter student name" required>
            <button type="submit">Add Student</button>
        </form>
    `);
});

// Route to handle form submission
app.post('/all_students', (req, res) => {
    const studentName = req.body.name;
    console.log(`New student added: ${studentName}`);
    res.redirect('/all_students');
});

// Route to display all students 
app.get('/all_students', (req, res) => {
    res.send('<h1>All Students</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
