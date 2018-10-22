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
	              <h2 className="accordion">Why is this only available for iOS?</h2>
	              <p className="accordion">Lack of resources. No one on the Find Your Totem team knows how to code native Android apps.</p>
	          </li>
	          <li>
	              <input type="checkbox" defaultChecked/>
	              <i></i>
	              <h2 className="accordion">Why do I have to select a celebrity?</h2>
	              <p className="accordion">The tech is cutting-edge. This means it's not perfect. We want to give people a peek at future possiblies with a reasonable chance for the tech to succeed.</p>
	          </li>
	          <li>
	              <input type="checkbox" defaultChecked/>
	              <i></i>
	              <h2 className="accordion">Why do have to check-in at stages?</h2>
	              <p className="accordion">It's a backup. The cameras also get 🌀_🌀 when the set is 🔥🔥🔥</p>
	          </li>
	          <li>
	              <input type="checkbox" defaultChecked/>
	              <i></i>
	              <h2 className="accordion">It's says the celebrity I want is unavailable 🤨</h2>
	              <p className="accordion">They busy. Nah, someone-else reserved that celebrity.</p>
	          </li>
	          <li>
	              <input type="checkbox" defaultChecked/>
	              <i></i>
	              <h2 className="accordion">Aight&#8230; so when will this come out of Beta?</h2>
	              <p className="accordion">Totally depends on the reception. This could be the last time or it could be the beginning.</p>
	          </li>
	      </ul>
	  </div>
		);
	}
}

export default FaqPanel;