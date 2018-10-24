import React, { Component } from 'react';

class ModalAlert extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: props.status,
		};
	}

	render() {
		return (
			<div id="modal">
				{
					this.state.status
					?
					<div className="feedback-modal confirm modal-box">
						<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" fill="#fff" height="72px" width="72px">
								<path d="M51.3 24.3L30 45.6L20.6 36.2C20.3 35.9 19.8 36 19.4 36.4C19 36.8 18.9 37.3 19.2 37.6L29.3 47.7L29.5 47.9C29.6 48 29.9 48.1 30.1 48.1C30.3 48.1 30.6 47.9 30.8 47.8L52.8 25.8C53.2 25.4 53.2 24.8 52.8 24.4C52.4 24 51.7 23.9 51.3 24.3Z"/>
								<path d="M36 0C16.1 0 0 16.1 0 36C0 55.9 16.1 72 36 72C55.9 72 72 55.9 72 36C72 16.1 55.9 0 36 0ZM36 70C17.3 70 2 54.7 2 36C2 17.3 17.3 2 36 2C54.7 2 70 17.3 70 36C70 54.7 54.7 70 36 70Z"/>
						</svg>
						<h1 className="modal-heading modal-box">Signup successful</h1>
						<p className="modal-text modal-box">{this.props.text}</p>
						<button className="feedback-modal modal-box" onClick={() => this.props.hideModal()}>OK</button>
					</div>
					:
					<div className="feedback-modal error modal-box">
						<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
								<path d="M36 0C16.1 0 0 16.1 0 36C0 55.9 16.1 72 36 72C55.9 72 72 55.9 72 36C72 16.1 55.9 0 36 0ZM36 70C17.3 70 2 54.7 2 36C2 17.3 17.3 2 36 2C54.7 2 70 17.3 70 36C70 54.7 54.7 70 36 70Z"/>
								<path d="M49.7 22.3C49.3 21.9 48.7 21.9 48.3 22.3L36 34.6L23.7 22.3C23.3 21.9 22.7 21.9 22.3 22.3C21.9 22.7 21.9 23.3 22.3 23.7L34.6 36L22.3 48.3C21.9 48.7 21.9 49.3 22.3 49.7C22.5 49.9 22.8 50 23 50C23.2 50 23.5 49.9 23.7 49.7L36 37.4L48.3 49.7C48.5 49.9 48.8 50 49 50C49.2 50 49.5 49.9 49.7 49.7C50.1 49.3 50.1 48.7 49.7 48.3L37.4 36L49.7 23.7C50.1 23.3 50.1 22.7 49.7 22.3Z"/>
						</svg>
						<h1 className="modal-heading modal-box">Something went wrong</h1>
						<p className="modal-text modal-box">{this.props.text}</p>
						<button className="feedback-modal modal-box" onClick={() => this.props.hideModal()}>Try Again</button>
					</div>
				}
			</div>
		);
	}
}

export default ModalAlert;