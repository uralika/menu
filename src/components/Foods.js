import React from "react";
import Food from "./Food";

export default function Foods(props) {
	return (
		<div className="grid mb-8">
			{ props.foods.map( food => (
				<Food key={ food.id } food={ food } />
			))}
	</div>
	);
}
