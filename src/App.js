import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor(props) {
        super(props);

        this.state = {
			baseValue: 1,
			input: '',
			currency: []
		}
		
		this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
	}
	
	componentDidMount() {
		axios.get('https://api.exchangeratesapi.io/latest?base=USD')
		.then(response => {
			this.setState({ currency: response.data.rates });
			console.log(this.state.currency);
		})
	}

	onInputChange(event) {
        this.setState({input: event.target.value});
    }

    onSubmitForm(event) {
		event.preventDefault();

		const newList = () => {
			return (
				<div className="list">
					<div className="list__top">
						<h3>{this.state.input}</h3>
						<h3>{this.state.currency[this.state.input] * this.state.baseValue}</h3>
					</div>
					<span>1 USD = {this.state.currency[this.state.input]}</span>
				</div>
			);
		}

		this.setState({
			input: ''
        });

        
    }

	render() {
		return (
			<div className="app">
				<div className="app__header">
					<h1>USD - United States Dollars</h1>
					<h2>{this.state.baseValue} USD</h2>
				</div>
				<div className="app__body" id="listBody">
					<div className="list">
						<div className="list__top">
							<h3>IDR - Indonesian Rupiah</h3>
							<h3>{this.state.currency.IDR * this.state.baseValue}</h3>
						</div>
						<span>1 USD = {this.state.currency.IDR}</span>
					</div>

					<div className="list">
						<div className="list__top">
							<h3>EUR - Euro</h3>
							<h3>{this.state.currency.EUR * this.state.baseValue}</h3>
						</div>
						<span>1 USD = {this.state.currency.EUR}</span>
					</div>
				</div>

				<form className="form" onSubmit={this.onSubmitForm}>
					<input className="form__input" type="text" placeholder="Add more currency, ex: JPY" value={this.state.input} onChange={this.onInputChange} />
					<button className="form__button" type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default App;
