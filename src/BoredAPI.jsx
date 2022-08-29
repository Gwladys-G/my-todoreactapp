import { Component } from "react";


export default class BoredAPI extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     idea: ""
  //   };
  // }

  // GetActivity = () => {
  //   fetch("http://www.boredapi.com/api/activity/")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         document.getElementById("APIform").classList.remove("hide")
  //         this.setState({
  //           isLoaded: true,
  //           idea: result.activity
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }



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
