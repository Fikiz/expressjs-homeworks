import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'; // Import the 'path' module

import trainersRoutes from './routes/trainer.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(path.resolve(), 'public')));

app.use('/api/trainers', trainersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
