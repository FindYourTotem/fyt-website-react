import React, { Component } from 'react';

import { SearchLogo } from '../Bundler';

const LIST_MAX_SIZE = 5;

var CELEBRITY_URL = "/data/auth/celebrities/valid";
var SIGNUP_URL = "/data/auth/signup";

if (process.env.NODE_ENV === "production") {
	CELEBRITY_URL = "https://api.findyourtotem.net" + CELEBRITY_URL;
	SIGNUP_URL = "https://api.findyourtotem.net" + SIGNUP_URL;
}

class FormPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			celebritySuggestions: [],
			suggestionsActive: false,
			chosenCelebrity: undefined,
			email: "",
			phoneNumber: "",
			searchTerm: "",
		};

		this.activateSuggestions = this.activateSuggestions.bind(this);
		this.transformCelebrityToSuggestion = this.transformCelebrityToSuggestion.bind(this);
		this.filterCelebrityList = this.filterCelebrityList.bind(this);
		this.selectCelebrity = this.selectCelebrity.bind(this);
		this.handleCelebrityInputChange = this.handleCelebrityInputChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.handleSubmissionResponse = this.handleSubmissionResponse.bind(this);
	}

	activateSuggestions() {
		if (this.state.chosenCelebrity) {
			this.setState({
				suggestionsActive: false,
				chosenCelebrity: undefined,
				searchTerm: "",
			});
		} else {
			this.setState({suggestionsActive: true});
		}
		console.log(this.state.chosenCelebrity);
		console.log("Search button clicked!");
	}

	transformCelebrityToSuggestion(celeb) {
		return (
			<li onClick={() => this.selectCelebrity(celeb)} key={celeb.celebrity_id}>{celeb.official_name}</li>
		);
	}

	filterCelebrityList(list) {
		var filteredList = list.filter((item) => {
			return item.props.children
							.toLowerCase()
							.startsWith(this.state.searchTerm.toLowerCase())});
		return filteredList.slice(0, 5);
	}

	selectCelebrity(celeb) {
		this.setState({
			suggestionsActive: false,
			chosenCelebrity: celeb,
			searchTerm: celeb.official_name,
		});
	}

	handleCelebrityInputChange(e) {
		this.setState({
			searchTerm: e.target.value,
			suggestionsActive: e.target.value !== "",
			chosenCelebrity: undefined
		});
	}

	submitForm(e) {
		e.preventDefault();
		if (this.state.chosenCelebrity) {
			var data = {
				"celebrity": this.state.chosenCelebrity.celebrity_id,
				"email": this.state.email,
				"phoneNumber": this.state.phoneNumber,
			};
			console.log(data);

			fetch(SIGNUP_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8"
				},
				body: JSON.stringify(data)
			}).then(res => res.json())
				.then(json => this.handleSubmissionResponse(json));
		} else {
			const description = "You must choose one of the prompted celebrities!";
			console.log(description);
			this.props.displayModal(false, description);
		}
	}

	/**
   * TODO: Show some kind of pop-up that indicates the results of the submission
	 */
	handleSubmissionResponse(response) {
		if (response.statusCode == undefined) {
			const description = "Please provide a valid email address.";
			console.log(description);
			this.props.displayModal(false, description);
		} else if (response.statusCode === 200) {
			console.log(response.description);
			this.props.displayModal(true, response.description);
		} else {
			console.log(response.description);
			this.props.displayModal(false, response.description);
		}
	}

	componentWillMount() {
		fetch(CELEBRITY_URL)
			.then(res => res.json())
			.then(json => this.setState({celebritySuggestions: json.reverse()}));
	}

	render() {
		return (
		  <div className="form-content">
  		<div className="form-title">Celebrity Totem Challenge</div>
  		<div className="form-subtitle">Powered by AWS</div>

		    <form>
		        <h1>Step 1.</h1>
		        <h2>Enter your email address, and a phone number to reach you.
		        <br/>
		        <strong className="dark-strong">NOTE:</strong> <em>Phone number will be used to locate and contact you while onsite (likely via text message).</em></h2>
		       	<div className="form-group">
		            <input onChange={(e) => this.setState({phoneNumber: e.target.value})} id="phone-number" className="form-control" required/>
		            <label className="form-control-placeholder" htmlFor="phone-number">Phone number</label>
		        </div>
		        <div className="form-group">
		            <input onChange={(e) => this.setState({email: e.target.value})} type="email" id="email" className="form-control" required/>
		            <label className="form-control-placeholder" htmlFor="email">Email</label>
		        </div>

		        <h1>Step 2.</h1>
		        <h2>Choose a media, sport, or political celebrity on which to base your totem</h2>
		       	<div className="form-group">
		            <input value={this.state.searchTerm} onChange={(e) => this.handleCelebrityInputChange(e)} type="text" id="celebrity" className="form-control" autoComplete="off" required/>
		            <label className="form-control-placeholder" htmlFor="celebrity">Celebrity <span>select up to 3</span></label>
		            <button className="inline" onClick={() => this.activateSuggestions()}>
		            	{
		            		this.state.chosenCelebrity
		            		? "x"
		            		: <SearchLogo/>
		            	}
		            </button>
		            <div className="auto-complete-table">
		                <ul className="auto-complete-table">
		                	{
		                		this.state.suggestionsActive
		                		? this.filterCelebrityList(this.state.celebritySuggestions.map(celeb => this.transformCelebrityToSuggestion(celeb)))
		                		: null
		                	}
		                </ul>
		            </div>
		        </div>
		        <button onClick={(e) => this.submitForm(e)}>Register &amp; Sign Up</button>
						<h1>That’s it!</h1> <h2>After submitting, you’ll receive a confirmation email with next steps and official rules. </h2>
						<h2>Can’t wait to see you at EDC Orlando! </h2>
		    </form>
			</div>
		);
	}
}

export default FormPanel;