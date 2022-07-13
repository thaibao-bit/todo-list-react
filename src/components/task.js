function TaskItem(props){
    return (
        <div className="taskitem">
            <p>Job: {props.task}</p>
            <p>Status: {props.status}</p>
            <p>Progress: {props.progress}</p>
            <br />
        </div>
    )
}

export default TaskItem