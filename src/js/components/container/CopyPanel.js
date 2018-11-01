import React, { Component } from 'react';

class CopyPanel extends Component {

	render() {
		return (
		<div className="main-copy">
			<div className="hero">
				<div className="edc-hero-gradient"/>
				<img className="edc-hero-image" src={require("../../../res/edc-hero.png")}/>
			</div>

			<h2><em>ATTENTION HEADLINERS!</em></h2>

			<p>The winners of <a href="https://aws.amazon.com/livenation/">HACK TILL DAWN</a>,
			a hackathon at which AWS and Intel challenged developers to create an enhanced festival experience, are bringing their experience to
			EDC Orlando.</p>

			<p>Now, <a href="https://www.insomniac.com/news/winners-announced-for-edc-themed-hack-till-dawn-2018-event/">Find Your Totem</a> is turning the challenge over to YOU!</p>
			
			<p>In a friendly battle between your fellow Headliners, you’ll compete to see who has the most well-traveled totem at <a href="https://orlando.electricdaisycarnival.com/">EDC 
			Orlando</a>. Winning teams will receive VIP upgrades, festival merchandise, and bragging rights of course! </p>
			
			<p>Using artificial intelligence and machine learning from AWS and an AWS DeepLens camera equipped with Intel, the first deep 
			learning enabled camera, your team will score points for checking-in with your totem at various stages throughout the festival.</p>
			
			<p>Registering to participate is EASY. Just complete the following steps and we’ll send you confirmation that you’re <em>in it to win it!</em></p>

    </div>
		);
	}
}

export default CopyPanel;