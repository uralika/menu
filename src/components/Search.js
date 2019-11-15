import React from "react";

export default function Search() {
	return (
		<>
		<label className="sr-only" htmlFor="search">
			Search
		</label>
		<input
			className="mb-2 md:mb-0 p-2 rounded flex-grow"
			type="search"
			placeholder="Search for foods"
			id="search"
		/>
		</>
	);
}
