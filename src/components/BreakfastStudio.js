import React from "react";
import Foods from "./Foods";
import Nav from "./Nav";
import { MENU } from "../kitchen";

class BreakfastStudio extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			foods: MENU,
			checkout: 0,
			filter: 'Food Groups',
			search: ''
		}

		this.handleFilterSelect = this.handleFilterSelect.bind(this);
		this.filter = this.filter.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleFilterSelect(event) {
		this.setState({filter: event.target.value});
	}

	handleSearch(event) {
		this.setState({search: event.target.value})
	}

	filter(food) {
		let filteredFood;

		if (!this.state.search.length && this.state.filter === 'Food Groups') {
			return food;
		}

		if (this.state.search.length) {
			const search = this.state.search.trim().toLowerCase();

			filteredFood = food.reduce((acc, curr, index) => {
				if (curr.name.toLowerCase().includes(search)) {
					acc.push(curr);
				}

				return acc;
			}, []);
		} else {
			filteredFood = food;
		}

		if (this.state.filter !== 'Food Groups') {
			const tag = this.state.filter.toLowerCase();

			filteredFood = filteredFood.reduce( (acc, curr, index) => {
				if (curr.groups.includes(tag)) {
					acc.push(curr);
				}

				return acc;
			}, []);
		}

		return filteredFood;
	}

	render() {
		return (
			<div className="text-gray-900 bg-gray-100 leading-normal">
				<div className="p-4 max-w-5xl mx-auto">
					<img
						className="mx-auto my-8 max-w-full sm:max-w-sm"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45561/undraw_Ordinary_day_3gk3.svg"
						alt="A drawing of two houses in a neighborhood"
					/>
					<h1 className="text-2xl md:text-4xl lg:text-5xl text-center my-4 font-black">
						<span className="concert-underline">Concert Breakfast Studio</span>
					</h1>
					<Nav
						handleFilterSelect={ this.handleFilterSelect }
						selectedValue={this.state.filter}
						handleSearch={ this.handleSearch }
					/>
					<Foods foods={ this.filter(this.state.foods) } />
					<Nav
						handleFilterSelect={ this.handleFilterSelect }
						selectedValue={ this.state.filter }
						handleSearch={ this.handleSearch }
					/>
				</div>
			</div>
		);
	}
}

export default BreakfastStudio;
