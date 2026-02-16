
export default function TaskItem({task}) {
  return (
		<div className='card p-2 mb-2'>
			<h5>{task.title}</h5>
			<h5>{task.description}</h5>
			<h5>Priority: {task.priority}</h5>
		</div>
	);
}
