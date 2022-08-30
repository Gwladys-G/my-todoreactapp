import { Component } from "react";


export default class BoredAPI extends Component {
  render(){
    return (
      <div>
        <button onClick={this.props.GetActivity}>I'm Bored!</button>
        <form>
          <input className="hide" id="APIform"
          value={this.props.activity}
          title={this.props.activity}
          readOnly={true}
          />
          {!this.props.activity? null : (<button onClick={this.props.AddActivity}>Let's add this</button>)}
        </form>
      </div>
    )
  }
}
