import React, { Component } from 'react';

class TaskAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {tasksToAdd : ""};
    this.handleChange = this.handleChange.bind(this);
    this.addTasks = this.addTasks.bind(this);
  }

  addTasks() {
    this.props.onAdd(this.state.tasksToAdd);
    this.setState({tasksToAdd:""});
  }

  handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    return (
      <div >
      <label htmlFor="tasksToAdd">Nouvelles tâches</label><br/>
      <textarea name="tasksToAdd" onChange={this.handleChange} value={this.state.tasksToAdd} cols="120" rows="4"/>
      <br/>
      <input type="button" onClick={this.addTasks} value="Ajouter"/>
      </div>
    );
  }
}

export default TaskAdd;
