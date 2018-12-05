import React, { Component } from 'react';
import TaskItem from './TaskItem';
import './TasksList.css';

class TasksList extends Component {
  render() {
    const tasks = (this.props.tasks) ? (this.props.tasks) : [];

    return (
      <div><h2>Mes tâches</h2>
      <ul className="tasklist">
      {tasks.map(function(item,idx){
      return (
        <li key={idx}><TaskItem task={item}/>
        </li>
      )})
      }
      </ul>
      </div>
    );
  }
}

export default TasksList;
