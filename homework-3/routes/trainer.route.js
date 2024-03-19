import express from 'express';
import fs from 'fs';

const router = express.Router();

// Read trainers data from JSON file
let trainersData = JSON.parse(fs.readFileSync('./utils/db.json'));

// Get all trainers
router.get('/', (req, res) => {
  res.json(trainersData);
});

// Get trainer by id
router.get('/:id', (req, res) => {
  const trainer = trainersData.find(trainer => trainer.id === req.params.id);
  if (trainer) {
    res.json(trainer);
  } else {
    res.status(404).send('Trainer not found');
  }
});

// Update trainer info
router.put('/:id', (req, res) => {
  const trainerIndex = trainersData.findIndex(trainer => trainer.id === req.params.id);
  if (trainerIndex !== -1) {
    trainersData[trainerIndex] = { ...trainersData[trainerIndex], ...req.body };
    fs.writeFileSync('./utils/db.json', JSON.stringify(trainersData, null, 2));
    res.json(trainersData[trainerIndex]);
  } else {
    res.status(404).send('Trainer not found');
  }
});

// Add a trainer
router.post('/', (req, res) => {
  const newTrainer = req.body;
  trainersData.push(newTrainer);
  fs.writeFileSync('./utils/db.json', JSON.stringify(trainersData, null, 2));
  res.json(newTrainer);
});

// Delete trainer
router.delete('/:id', (req, res) => {
  const trainerIndex = trainersData.findIndex(trainer => trainer.id === req.params.id);
  if (trainerIndex !== -1) {
    trainersData.splice(trainerIndex, 1);
    fs.writeFileSync('./utils/db.json', JSON.stringify(trainersData, null, 2));
    res.send('Trainer deleted successfully');
  } else {
    res.status(404).send('Trainer not found');
  }
});


// Delete all trainers
router.delete('/', (req, res) => {
    trainersData = []; // Clear trainers array
    fs.writeFileSync('./utils/db.json', '[]'); // Write empty array to file
    res.send('All trainers deleted successfully');
  });

export default router;
