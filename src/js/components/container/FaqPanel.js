import React, { Component } from 'react';

class FaqPanel extends Component {

	render() {
		return (
	    <div className="wrapper">
	      <h1 className="header faq">FAQs</h1>
	      <ul className="accordion">
	          <li>
	              <input type="checkbox" defaultChecked/>
	              <i></i>
	              <h2 className="accordion">Why do I have to select a celebrity?</h2>
	              <p className="accordion">Selecting a celebrity allows us to test our ability to automatically detect a totem at EDC Orlando (via a celebrity's face). This will allow us to gauge the possibility of using the same tech to detect totems in general.</p>
	          </li>
	          <li>
	              <input type="checkbox" defaultChecked/>
	              <i></i>
	              <h2 className="accordion">Why do we have to check in at different locations?</h2>
	              <p className="accordion">Checking in at different locations provides the best opportunity for the tech to detect a totem (and score points!)</p>
	          </li>
	          <li>
	              <input type="checkbox" defaultChecked/>
	              <i></i>
	              <h2 className="accordion">It's says the celebrity I want is unavailable 🤨</h2>
	              <p className="accordion">The celebrity is busy! Just kidding, it means someone else has already reserved the celebrity.</p>
	          </li>
	      </ul>
	  </div>
		);
	}
}

export default FaqPanel;