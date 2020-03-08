import React, { Component } from 'react';

import './styles.css';
import pineBank from '../../assets/images/pinebank.PNG';

export default class Jobs extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <div className="item-wrap">
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Pine Bank</h5>
                        <p>Pine Bank</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
