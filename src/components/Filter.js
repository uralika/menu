import React from "react";
import _ from "lodash";
import { MENU } from "../kitchen";

class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.getCategories = this.getCategories.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	getCategories() {
		let categories = MENU.reduce( (acc, curr, index) => {
			let difference = _.difference(curr.groups, acc);

			if (difference) {
				acc = acc.concat(difference)
			}

			return acc;
		}, []);

		let sortedCategories = categories.sort().map( category => {
			return `${category[0].toUpperCase()}${category.slice(1, category.length)}`;
		});

		return ['Food Groups'].concat(sortedCategories);
	}

	render() {
		return (
			<select value={this.state.value} onChange={this.handleChange}
				className="mb-2 md:ml-2 md:mb-0">
				{this.getCategories().map((cat, i) => <option key={i}>{cat}</option>)};
			</select>
		);
	}
}

export default Filter;
