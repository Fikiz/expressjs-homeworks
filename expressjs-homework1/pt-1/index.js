const express = require('express');
const app = express();
const port = 3001;


app.get('/', (req, res) => {
    res.send('<h1>Hello, this is the default page!</h1>');
});


app.get('/student', (req, res) => {
    const studentInfo = {
        name: 'Filip',
        lastname: 'Karakamchev',
        academy: 'Qinshift Academy',
        subject: 'ExpressJS'
    };

    const htmlContent = `
        <h1>Student Information</h1>
        <p>Student name: ${studentInfo.name}</p>
        <p>Student lastname: ${studentInfo.lastname}</p>
        <p>Academy: ${studentInfo.academy}</p>
        <p>Subject: ${studentInfo.subject}</p>
    `;

    res.send(htmlContent);
});




// server start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
