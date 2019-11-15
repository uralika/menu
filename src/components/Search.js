import React from "react";

class Search extends React.Component {
	render() {
		return (
			<>
				<label className="sr-only" htmlFor="search">
					Search
				</label>
				<input
					className="mb-2 md:mb-0 p-2 rounded flex-grow"
					type="search"
					placeholder="Search for foods"
					onChange={ this.props.handleSearch }
					id="search"
				/>
			</>
		);
	}
}

export default Search;
