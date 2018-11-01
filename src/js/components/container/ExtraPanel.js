import React, { Component } from 'react';

class ExtraPanel extends Component {
	render() {
		return (
			<div>
				<div className="sponsors-logo">
					<img src={require("../../../res/AWS-Intel-Lockup_Web_Color_AWS-Intel-Lockup_Web_Color.png")}/>
				</div>
        <p className="copyright-text">Copyright Find Your Totem 2018. All rights reserved.</p>
			</div>
		);
	}
}

export default ExtraPanel;