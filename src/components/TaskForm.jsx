import React, { useState } from 'react'

export default function TaskForm({addTask}) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [priority, setPriority] = useState('medium');

	const handleSubmit = e => {
		e.preventDefault();

    addTask({
      id: Date.now(),
      title,
      description,
      priority,
      status: 'todo',
      createdAt: Date.now()
    })

    setTitle('');
    setDescription('');
    setPriority('medium');
	};

	return (
		<form onSubmit={handleSubmit} className='mb-4 container'>
			<div className='mb-3'>
				<label className='form-label'>Title</label>
				<input
					type='text'
					className='form-control'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>

			<div className='mb-3'>
				<label className='form-label'>Description</label>
				<input
					type='text'
					className='form-control'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>

			<div className='mb-3'>
				<label className='form-label'>Priority</label>
				<select
					className='form-select'
					value={priority}
					onChange={e => setPriority(e.target.value)}
				>
					<option value='low'>Low</option>
					<option value='medium'>Medium</option>
					<option value='high'>High</option>
				</select>
			</div>

			<button type='submit' className='btn btn-primary'>
				Add Task
			</button>
		</form>
	);
}
