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
			filter: 'Food Groups'
		}

		this.handleFilterSelect = this.handleFilterSelect.bind(this);
		this.filter = this.filter.bind(this);
	}

	handleFilterSelect(event) {
		this.setState({filter: event.target.value});
	}

	filter(food) {
		if (this.state.filter === 'Food Groups') {
			return food;
		}

		const tag = this.state.filter.toLowerCase();

		return food.reduce( (acc, curr, index) => {
			if (curr.groups.includes(tag)) {
				acc.push(curr);
			}

			return acc;
		}, []);
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
					<Nav handleFilterSelect={ this.handleFilterSelect } selectedValue={this.state.filter} />
					<Foods foods={ this.filter(this.state.foods) } />
					<Nav handleFilterSelect={ this.handleFilterSelect } selectedValue={ this.state.filter } />
				</div>
			</div>
		);
	}
}

export default BreakfastStudio;
