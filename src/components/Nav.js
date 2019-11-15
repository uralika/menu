import React from "react";

export default function Nav() {
	return (
		<nav className="flex flex-col md:flex-row bg-gray-300 rounded shadow overflow-hidden p-2 mb-8 text-sm">
			<label className="sr-only" htmlFor="search">
				Search
			</label>
			<input
				className="mb-2 md:mb-0 p-2 rounded flex-grow"
				type="search"
				placeholder="Search for foods"
				id="search"
			/>
			<select className="mb-2 md:ml-2 md:mb-0">
				<option>Food Groups</option>
			</select>
			<button
				className="md:ml-2 p-2 rounded"
				style={{ backgroundColor: "var(--concert-blue)" }}
			>
				Place Order (0)
			</button>
		</nav>
	);
}
