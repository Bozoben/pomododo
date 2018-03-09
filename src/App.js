import React, { Component } from 'react';
import logo from './logo.svg';
import TasksList from './components/TasksList';
import TaskAdd from './components/TaskAdd';
import PomodoroTimer from './components/PomodoroTimer';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks : []};
    this.addTasks = this.addTasks.bind(this);
  }

  addTasks(someTasks) {
      // On splitte le texte et on ajoute les tâches
      console.log("AddTasks", someTasks);
      const zeTasks = someTasks.split("\n");
      const newTasks = this.state.tasks;
      for (var i = 0; i < zeTasks.length; i++) {
        newTasks.push({"label":zeTasks[i]});
      }
      this.setState({tasks: newTasks});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pomodoro Timer</h1>
        </header><br/>
        <TaskAdd onAdd={this.addTasks}/>
        <TasksList tasks={this.state.tasks}/>
        <PomodoroTimer maxTime="00:25:00"/>
      </div>
    );
  }
}

export default App;
