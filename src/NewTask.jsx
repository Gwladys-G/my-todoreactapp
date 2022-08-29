import React, { Component } from "react";

export default class NewTask extends Component{
  render () {
    return (
    <form onSubmit={this.props.handleSubmit}>
      <input
        name="title"
        placeholder="New Task title"
        value={this.props.newTask.title || this.props.activity || ""}
        onChange={this.props.handleChange}
      />
      {!this.props.newTask.title? null : (
        <>
        <textarea
          name="description"
          placeholder="New Task description"
          value={this.props.newTask.description || ""}
          onChange={this.props.handleChange}
        />
        <button> Add a Task </button>
        </>
      )}
    </form>
   );
  }
}
