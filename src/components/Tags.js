import React from "react";
import Tag from "./Tag";

export default function Tags(props) {
	return (
		<div className="px-6 py-4">
			{ props.tags.map( (tag, index) => (
				<Tag key={ index } tag={ tag } />
			))}
		</div>
	);
}
