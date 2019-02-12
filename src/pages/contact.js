  import React from "react";
  import { navigate } from "gatsby-link";
  import Layout from "../components/layout";

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isValidated: false };
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

    render() {
      return (
        <Layout>
          <section style={{paddingTop: `3rem`, paddingBottom:`2rem`}} className="container">
          <h1 className="title">
                  Contact us
                </h1>
            <div className="columns">
              <div className="column is-one-half">
                <p style={{paddingTop: `1rem`, paddingRight: `1rem`}}>
                  If you need to get in touch with us for any reason, other than to RSVP, the use this
                  form. Or, ring us if you have our number. If you use the form though we can't forget
                  what you told us. It will also make the time I spent making the form pay-off.
                </p>
              </div>
              <div className="column">
                <div className="content is-one-half">
                  <form
                    name="contact"
                    method="post"
                    action="/thanks"
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
                      <label className="label" htmlFor={"message"}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={"message"}
                          onChange={this.handleChange}
                          id={"message"}
                          required={true}
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
