import TaskItem from './TaskItem';

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks.length) {
    return (
      <div className="glass-panel" style={{ textAlign: 'center', padding: '48px 24px', color: '#94a3b8' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏖️</div>
        <h3 style={{ margin: '0 0 8px 0', color: 'white', fontWeight: 600 }}>All clean! No tasks found</h3>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>Create a new task on the left, or change your search filters.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
