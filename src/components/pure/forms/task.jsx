import React from "react"
import PropTypes from 'prop-types'
import { Task } from "../../../models/task.class"

const TaskComponent = ({ props }) => {
    return (
        <div>
            <h2>
                Nombre: { props.name }
            </h2>
            <h3>
                Descripción: { props.description }
            </h3>
            <h4>
                Level: { props.level }
            </h4>
            <h5>
                This task is: { props.completed ? 'COMPLETED':'PENDING' }
            </h5>
        </div>
    )
}

TaskComponent.propTypes = {
    props: PropTypes.instanceOf(Task)
}

export default TaskComponent