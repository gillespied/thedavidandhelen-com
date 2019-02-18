import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/layout';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <div className="section">
          <div className="container">
            <h1 className="title">Contact us</h1>
            <div className="columns">
              <div className="column is-one-half">
                <p>
                  If you need to get in touch with us for any reason, other than to RSVP, please use
                  this form. Or, if you have our number you could give us a ring.
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
                      <label className="label" htmlFor="hidden-form-field-do-not-fill">
                        Do not fill this out:
                        {' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="name">
                        Your name
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            id="name"
                            required
                          />
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="email">
                        Email
                        <div className="control">
                          <input
                            className="input"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            id="email"
                            required
                          />
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="message">
                        Message
                        <div className="control">
                          <textarea
                            className="textarea"
                            name="message"
                            onChange={this.handleChange}
                            id="message"
                            required
                          />
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <button className="button is-primary is-medium" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
