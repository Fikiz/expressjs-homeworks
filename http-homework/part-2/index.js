const http = require('http');

const server = http.createServer((req,res) => {

    const URL = req.url;
    res.setHeader('Content-Type','text/html');

// Default route
    if(URL === '/'){
        res.write(`<h1>Welcome to our server</h1>`);
        res.end();
    }

// All students route
    if(URL === '/all_students'){
        res.write(`<h1> We are at the /all_students </h1>`);

        const chunks = []; // for data

        req.on('data', chunk => {
         // we need to convert them to string to be able to read them as text
           chunks.push(chunk); 
        });

        req.on('end', () => {
            // merge all chunks in a single string
            const parsedChunks = Buffer.concat(chunks).toString();
            const studentName = parsedChunks.split('=')[1].replace(/\+/g, ' '); // /\+/g is a regular expression that replaces all pluses with spaces
			console.log(studentName);
        });

        res.end();

    }

    if(URL === '/add_student'){
        res.write(`
        <form action="/all_students" method="POST">
            <input type="text" name="studentName" />
            <button type="submit">Add Student</button>
        </form>
       `);
       res.end();
    }
});

server.listen(3000);