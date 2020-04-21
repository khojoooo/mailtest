import React, { Component } from "react";
import DaumPostcode from "react-daum-postcode";

class App extends Component {
  handleData = data => {
    window.opener.testF(data);
    window.close();
  };
  render() {
    return <DaumPostcode onComplete={this.handleData} height={450} />;
  }
}

export default App;
