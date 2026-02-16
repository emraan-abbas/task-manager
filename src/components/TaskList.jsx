import TaskItem from './TaskItem';

export default function TaskList({tasks}) {
  return (
		<div className='container'>
			<h3>Tasks:</h3>
			{tasks.map(task => (
				<TaskItem key={task.id} task={task} />
			))}
		</div>
	);
}
