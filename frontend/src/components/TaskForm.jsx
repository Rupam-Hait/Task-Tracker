import { useState, useEffect } from 'react';

export default function TaskForm({ onSave, editTask, onCancel }) {
  const [form, setForm] = useState({ title: '', description: '', status: 'pending', priority: 'medium' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editTask) {
      setForm(editTask);
    } else {
      setForm({ title: '', description: '', status: 'pending', priority: 'medium' });
    }
  }, [editTask]);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }
    onSave(form);
    setForm({ title: '', description: '', status: 'pending', priority: 'medium' });
    setErrors({});
  };

  return (
    <div className="glass-panel" style={{ position: 'sticky', top: '24px' }}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '1.4rem', fontWeight: 600 }}>
        {editTask ? '✏️ Edit Task' : '✨ Add New Task'}
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#94a3b8' }}>
            Task Title *
          </label>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          {errors.title && (
            <p style={{ color: '#f87171', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
              {errors.title}
            </p>
          )}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#94a3b8' }}>
            Description
          </label>
          <textarea
            placeholder="Add some details..."
            rows={4}
            value={form.description || ''}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#94a3b8' }}>
              Status
            </label>
            <select
              value={form.status}
              onChange={e => setForm({ ...form, status: e.target.value })}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#94a3b8' }}>
              Priority
            </label>
            <select
              value={form.priority}
              onChange={e => setForm({ ...form, priority: e.target.value })}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
          <button type="submit" className="btn-primary" style={{ flexGrow: 1 }}>
            {editTask ? 'Update Task' : 'Add Task'}
          </button>
          {editTask && (
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
