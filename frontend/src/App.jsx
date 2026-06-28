import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// Fetch API base URL from Vite environment variables or default to local port 5000
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/tasks';

// Set up custom axios instance with headers to bypass localtunnel reminder warning
const api = axios.create({
  headers: {
    'bypass-tunnel-reminder': 'true'
  }
});

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch tasks from server with query params for sorting/filtering
  const fetchTasks = async () => {
    try {
      const params = {};
      if (statusFilter) params.status = statusFilter;
      if (priorityFilter) params.priority = priorityFilter;
      if (sortBy) params.sortBy = sortBy;

      const { data } = await api.get(API_BASE, { params });
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [statusFilter, priorityFilter, sortBy]);

  const handleSave = async (formData) => {
    try {
      if (editTask) {
        await api.put(`${API_BASE}/${editTask._id}`, formData);
      } else {
        await api.post(API_BASE, formData);
      }
      setEditTask(null);
      fetchTasks();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`${API_BASE}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Filter tasks locally by search query as well
  const filteredTasks = tasks.filter(task => {
    const titleMatch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = (task.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatch || descMatch;
  });

  // Calculate statistics
  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem' }}>
      
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <div className="dashboard-title">
          <h1>📝 TaskSpace</h1>
          <p>Organize your tasks with style and efficiency</p>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          API: <code style={{ color: '#a78bfa' }}>{API_BASE}</code>
        </div>
      </header>

      {/* Stats Counter Row */}
      <section className="stats-container">
        <div className="stat-card">
          <div className="stat-val">{stats.total}</div>
          <div className="stat-lbl">Total Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-val" style={{ color: '#94a3b8' }}>{stats.pending}</div>
          <div className="stat-lbl">Pending</div>
        </div>
        <div className="stat-card">
          <div className="stat-val" style={{ color: '#60a5fa' }}>{stats.inProgress}</div>
          <div className="stat-lbl">In Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-val" style={{ color: '#34d399' }}>{stats.completed}</div>
          <div className="stat-lbl">Completed</div>
        </div>
      </section>

      {/* Dashboard Content Grid */}
      <main className="dashboard-grid">
        
        {/* Left Column: Input Form */}
        <section>
          <TaskForm 
            onSave={handleSave} 
            editTask={editTask} 
            onCancel={() => setEditTask(null)} 
          />
        </section>

        {/* Right Column: Task List and Controls */}
        <section>
          {/* Controls Panel */}
          <div className="glass-panel" style={{ marginBottom: '24px', padding: '16px' }}>
            <div className="controls-bar">
              <div className="search-input-wrapper">
                <input 
                  type="text" 
                  placeholder="🔍 Search tasks..." 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>

              <div>
                <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div>
                <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
                  <option value="">All Priorities</option>
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>

              <div>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>

          {/* Task List Grid */}
          <TaskList 
            tasks={filteredTasks} 
            onEdit={setEditTask} 
            onDelete={handleDelete} 
          />
        </section>

      </main>
    </div>
  );
}
