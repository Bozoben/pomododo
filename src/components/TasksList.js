import React, { Component } from 'react';
import TaskListItem from './TaskListItem';
import './TasksList.css';

class TasksList extends Component {
  render() {
    const tasks = (this.props.tasks) ? (this.props.tasks) : [];

    return (
      <div>
      <ul className="tasklist">
      {tasks.map(function(item,idx){
      return (
        <li key={idx}><TaskListItem task={item}/>
        </li>
      )})
      }
      </ul>
      </div>
    );
  }
}

export default TasksList;
