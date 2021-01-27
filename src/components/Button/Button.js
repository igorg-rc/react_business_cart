import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      showButton: false
    };
  }

  toggle = () => {
    this.setState({ showButton: true, showButton2: false });
  };

  toggle2 = () => {
    this.setState({ showButton: false, showButton2: true });
  };

      hideAll = () => {
    this.setState({ showButton: false, showButton2: false });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.toggle} >Click me</h1>
        <h1 onClick={this.toggle2}>Click me</h1>
        <h1 onClick={this.hideAll}>Hide all</h1>

        {this.state.showButton ? <h1>Show Me</h1> : null}
        {this.state.showButton2 ? <h1>Show Me2</h1> : null}
      </div>
    );
  }
}

export default Button;