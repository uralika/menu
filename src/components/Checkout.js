import React from "react";

export default function Checkout(props) {
	return (
		<button
			className="md:ml-2 p-2 rounded"
			style={{ backgroundColor: "var(--concert-blue)" }}
		>
			Place Order ({props.itemsCount})
		</button>
	);
}
