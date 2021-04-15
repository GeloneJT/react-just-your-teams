import React, { Component } from "react";
import "./CreateAccount.css";

import CreateForm from "../../components/CreateForm";
class CreateAccount extends Component {

  render() {
    return (
      <div>
        <section>
          <div className="grid-container">
            <div className="grid-x grid-margin-x align-center" id="form-grid">
              <div className="cell medium-6">

                <CreateForm match={this.props.match}>
                
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    );
  }
}

export default CreateAccount;
