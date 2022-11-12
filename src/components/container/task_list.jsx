import React from "react"
import { Task } from '../../models/task.class'
import { levels } from '../../models/levels.enum'
import TaskComponent from "../pure/forms/task"

const TaskList = () => {
    
    const defaultTask = new Task('Example', 'Default descripion', false, levels.normal)

    return (
        <div>
            <div>
                Your Tasks: 
            </div>
            < TaskComponent props={defaultTask}/>
        </div>
    )
}

export default TaskList