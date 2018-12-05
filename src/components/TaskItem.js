import React, { Component } from 'react';
import './TaskItem.css'

class TaskItem extends Component {
  render() {
    return (
      <div className="taskItem"><div className="taskLabel">
      {this.props.task.label}
      </div>
      <div className="taskActions">
      <i class="fas fa-check"></i>{' '}
      <i class="fas fa-trash"></i> 
      </div>
      </div>
    );
  }
}

export default TaskItem;
