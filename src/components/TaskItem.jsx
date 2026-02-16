import { useState } from "react";

export default function TaskItem({task, onDelete, onToggle, onUpdate}) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(task.title);
	const [editedDescription, setEditedDescription] = useState(task.description);

	const handleSave = () => {
		onUpdate({
			...task,
			title: editedTitle,
			description: editedDescription,
		});
		setIsEditing(false);
	};

	return (
		<div className='card p-2 mb-2'>
			{isEditing ? (
				<>
					<input
						className='form-control mb-2'
						value={editedTitle}
						onChange={e => setEditedTitle(e.target.value)}
					/>
					<input
						className='form-control mb-2'
						value={editedDescription}
						onChange={e => setEditedDescription(e.target.value)}
					/>

					<button className='btn btn-primary btn-sm me-2' onClick={handleSave}>
						Save
					</button>

					<button className='btn btn-secondary btn-sm' onClick={() => setIsEditing(false)}>
						Cancel
					</button>
				</>
			) : (
				<>
					<h5
						style={{
							textDecoration: task.status === 'completed' ? 'line-through' : 'none',
						}}
					>
						{task.title}
					</h5>

					<p>{task.description}</p>
					<p>Priority: {task.priority}</p>

					<button className='btn btn-success btn-sm me-2' onClick={() => onToggle(task.id)}>
						{task.status === 'todo' ? 'Mark Completed' : 'Mark Todo'}
					</button>

					<button className='btn btn-warning btn-sm me-2' onClick={() => setIsEditing(true)}>
						Edit
					</button>

					<button className='btn btn-danger btn-sm' onClick={() => onDelete(task.id)}>
						Delete
					</button>
				</>
			)}
		</div>
	);
}
