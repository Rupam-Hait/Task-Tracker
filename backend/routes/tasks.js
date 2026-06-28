const router = require('express').Router();
const Task = require('../models/Task');

// GET all tasks (with optional status/priority filtering and sorting)
router.get('/', async (req, res) => {
  try {
    const { status, priority, sortBy } = req.query;
    let query = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;

    let sort = { createdAt: -1 }; // default sorting: newest first
    if (sortBy === 'oldest') {
      sort = { createdAt: 1 };
    } else if (sortBy === 'title') {
      sort = { title: 1 };
    } else if (sortBy === 'priority') {
      // Sorting by priority: we will map high -> medium -> low in code,
      // or handle sorting on client side. For the database, we can sort alphabetically,
      // but let's implement standard mongoose sort and do more robust sorting in React.
      sort = { priority: 1 }; 
    }

    const tasks = await Task.find(query).sort(sort);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new task
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
