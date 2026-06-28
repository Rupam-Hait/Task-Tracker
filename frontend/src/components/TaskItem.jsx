export default function TaskItem({ task, onEdit, onDelete }) {
  // Format creation date
  const formatDate = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'high': return 'badge badge-high';
      case 'medium': return 'badge badge-medium';
      case 'low': return 'badge badge-low';
      default: return 'badge badge-medium';
    }
  };

  const getStatusPillClass = (status) => {
    switch (status) {
      case 'completed': return 'status-pill status-completed';
      case 'in-progress': return 'status-pill status-in-progress';
      case 'pending': return 'status-pill status-pending';
      default: return 'status-pill status-pending';
    }
  };

  const getCardStatusClass = (status) => {
    switch (status) {
      case 'completed': return 'card-completed';
      case 'in-progress': return 'card-in-progress';
      case 'pending': return 'card-pending';
      default: return 'card-pending';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '⏳';
      case 'pending': return '💤';
      default: return '💤';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔥';
      case 'medium': return '⚡';
      case 'low': return '🌱';
      default: return '⚡';
    }
  };

  return (
    <div className={`task-card ${getCardStatusClass(task.status)}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className={getPriorityBadgeClass(task.priority)}>
            {getPriorityIcon(task.priority)} {task.priority}
          </span>
        </div>
      </div>

      {task.description && (
        <p className="task-desc">{task.description}</p>
      )}

      <div className="task-footer">
        <div className="task-meta">
          <span className={getStatusPillClass(task.status)}>
            {getStatusIcon(task.status)} {task.status.replace('-', ' ')}
          </span>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
            {formatDate(task.createdAt)}
          </span>
        </div>
        
        <div className="task-actions">
          <button className="btn-icon" onClick={() => onEdit(task)} title="Edit Task">
            ✏️
          </button>
          <button className="btn-icon btn-icon-danger" onClick={() => onDelete(task._id)} title="Delete Task">
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
