import React, { Component } from 'react';
import axios from 'axios';

import List from './List'

import './App.css';

class App extends Component {
	constructor(props) {
        super(props);

        this.state = {
			baseValue: 1,
			input: '',
			currency: [],
			items: [],
			currentItem: {
				name: '',
				abbreviation: '',
				rates: '',
				key: ''
			}
		}
		
		this.onBaseValueChange = this.onBaseValueChange.bind(this);
		this.onSelectChange = this.onSelectChange.bind(this);
		this.addList = this.addList.bind(this);
	}
	
	componentDidMount() {
		axios.get('https://api.exchangeratesapi.io/latest?base=USD')
		.then(response => {
			this.setState({ 
				currency: response.data.rates 
			});

			// Set the first default list
			this.setState({
				items: [
					{
						name: 'IDR',
						abbreviation: 'IDR - Indonesian Rupiah',
						rates: this.state.currency['IDR'],
						key: Date.now()
					}
				]
			});
		})
	}

	onBaseValueChange(event) {
		this.setState({baseValue: event.target.value});
	}

	onSelectChange(event) {
		this.setState({ 
			input: event.target.value,
			currentItem: {
				name: event.target.value,
				abbreviation: document.getElementById('select').options[document.getElementById('select').selectedIndex].text,
				rates: this.state.currency[event.target.value],
				key: Date.now()
			}
		}, () => {
			console.log(this.state.input); // call-back function to sync the state and the input value
		});
	}

    addList(event) {
		event.preventDefault();

		if(this.state.currentItem.rates !== '') {
			this.setState({
				input: '',
				items: [...this.state.items, this.state.currentItem],
				currentItem: {
					name: '',
					rates: '',
					key: ''
				}
			}, () => {
				console.log(this.state.items); // call-back function to sync the state and the input value
			});
		}
	}

	deleteList = key => {
		console.log(this.state.items);
		const filteredItems = this.state.items.filter(item => {
			return item.key !== key;
		});
		this.setState({
			items: filteredItems
		});
	}
	
	render() {
		return (
			<div className="app">
				<div className="app__header">
					<h1>USD - United States Dollars</h1>
					<div className="base-value">
						<input type="number" className="base-value__input" value={this.state.baseValue} onChange={this.onBaseValueChange} min="0" />
						<h2>USD</h2>
					</div>
				</div>
				
				<List 
					items={this.state.items}
					baseValue={this.state.baseValue}
					input={this.state.input}
					deleteList={this.deleteList}
				/>

				<form className="form" onSubmit={this.addList}>
					<select className="form__input" id="select" type="text" value={this.state.input} onChange={this.onSelectChange}>
						<option value="" disabled defaultValue>Add more currency</option>
						<option value="USD">USD - United States Dollar</option>
						<option value="CAD">CAD - Canadian Dollar</option>
						<option value="IDR">IDR - Indonesian Rupiah</option>
						<option value="GBP">GBP - Great Britain Poundsterling</option>
						<option value="CHF">CHF - Swiss Franc</option>
						<option value="SGD">SGD - Singapore Dollar</option>
						<option value="INR">INR - Indian Rupee</option>
						<option value="MYR">MYR - Malaysian Ringgit</option>
						<option value="KRW">KRW - South Korea Won</option>
					</select>
					<button className="form__button" type="submit">+ Add</button>
				</form>
			</div>
		);
	}
}

export default App;
