import React, { Component } from 'react';

import './styles.css';

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Curintia</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Curiunt</span>
                  <br></br>
                  <span>aaa</span>
                  <br></br>
                  <span>aaaa</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
