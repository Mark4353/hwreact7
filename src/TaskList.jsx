import { Component } from "react";
import "./TaskList.css";
export class TaskList extends Component {
  tasklist = [
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
  ];

  render() {
    return (
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {this.tasklist.map((task) => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <button
                className="delete-button"
                onClick={() => this.handleDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button
          className="delete-button add-button"
          onClick={() => {
            const newTask = {
              id: this.tasklist.length + 1,
              name: `Task ${this.tasklist.length + 1}`,
            };
            this.tasklist.push(newTask);
            this.forceUpdate();
          }}
        >
          Add Task
        </button>
      </div>
    );
  }

  handleDelete = (id) => {
    this.tasklist = this.tasklist.filter((task) => task.id !== id);
    this.forceUpdate();
  };
}
