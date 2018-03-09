import React, { Component } from 'react';

class TaskListItem extends Component {
  render() {
    return (
      <div >
      {this.props.task.label}
      </div>
    );
  }
}

export default TaskListItem;
