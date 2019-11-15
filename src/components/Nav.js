import React from "react";

import Search from "./Search";
import Filter from "./Filter";
import Checkout from "./Checkout";

export default function Nav(props) {
	return (
		<nav className="flex flex-col md:flex-row bg-gray-300 rounded shadow overflow-hidden p-2 mb-8 text-sm">
			<Search handleSearch={props.handleSearch} />
			<Filter handleFilterSelect={props.handleFilterSelect} selectedValue={props.filter} />
			<Checkout />
		</nav>
	);
}
