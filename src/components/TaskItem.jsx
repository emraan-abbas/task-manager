
export default function TaskItem({task, onDelete}) {
	return (
		<div className='card p-2 mb-2'>
			<h5>{task.title}</h5>
			<h5>{task.description}</h5>
			<h5>Priority: {task.priority}</h5>
			<button className='btn btn-danger btn-sm mt-2' onClick={() => onDelete(task.id)}>
				Delete
			</button>
		</div>
	);
}
