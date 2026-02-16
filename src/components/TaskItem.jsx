
export default function TaskItem({task, onDelete, onToggle}) {
	return (
		<div className='card p-2 mb-2'>
			<h5
				style={{
					textDecoration: task.status === 'completed' ? 'line-through' : 'none',
				}}
			>
				{task.title}
			</h5>
			<h5>{task.description}</h5>
			<h5>Priority: {task.priority}</h5>
			<button className='btn btn-success btn-sm me-2' onClick={() => onToggle(task.id)}>
				{task.status === 'todo' ? 'Mark Completed' : 'Mark Todo'}
			</button>
			<button className='btn btn-danger btn-sm mt-2' onClick={() => onDelete(task.id)}>
				Delete
			</button>
		</div>
	);
}
