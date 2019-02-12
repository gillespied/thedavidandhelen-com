import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../components/layout";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false }
    this.state = { showGuest: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  toggleGuest = () => {
    this.setState({
      showGuest: !this.state.showGuest
    });
  }; 

  render() {
    return (
      <Layout>
        <section
          style={{ paddingTop: `3rem`, paddingBottom: `2rem` }}
          className="container"
        >
          <h1 className="title">RSVP</h1>
          <div className="columns">
            <div className="column is-one-half">
              <p style={{ paddingTop: `1rem`, paddingRight: `1rem` }}>
                Please fill in this form to confirm whether or not you can
                attend. We promise not to spam your email or phone number if you
                give them to us. We will use them only to update you if anything
                changes.
              </p>
              <p>
                Let us know if you have any dietary requirements and we will do
                our best to make sure they are met.
              </p>
            </div>
            <div className="column">
              <div className="content is-one-half">
                <form
                  name="contact"
                  method="post"
                  action="/confirm-rsvp"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"name"}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button 
                    className={`button ${!this.state.showGuest ? "is-primary": " is-danger"}`}
                    onClick={this.toggleGuest}
                    >
                     {`${!this.state.showGuest ? "Add Guest": "Remove Guest"}`}</button>
                  </div>

                  <div className={`field ${this.state.showGuest ? "": " is-hidden"}`}>
                    <label className="label" htmlFor={"name-guest"}>
                      Their name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"text"}
                        name={"name-guest"}
                        onChange={this.handleChange}
                        id={"name-guest"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"email"}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"phone"}>
                      Phone Number
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"phone"}
                        name={"phone"}
                        onChange={this.handleChange}
                        id={"phone"}
                        required={true}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="field">
                    <div className="control">
                      {/* first radio */}
                      <label className="label">
                      Attending?
                      </label>                  
                        <label className="label" htmlFor={"attending"}>
                          <input
                            type={"radio"}
                            name={"attending"}
                            value="yes"
                            checked={true}
                            onChange={this.handleChange}
                            className="form-check-input"
                          />
                          &nbsp;Yes
                        </label>
                        <label className="label" htmlFor={"attending"}>
                          <input
                            type={"radio"}
                            name={"attending"}
                            value="no"
                            onChange={this.handleChange}
                            className="form-check-input"
                          />
                          &nbsp;No 
                        </label>
                    </div> {/* end of control */}
                  </div> {/*  end of field*/}
                  {/*  */}
                  <div className="field">
                    <label className="label" htmlFor={"dietary"}>
                      Dietary Requirements
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={"dietary"}
                        onChange={this.handleChange}
                        id={"dietary"}
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-primary is-medium" type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
