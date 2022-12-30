import React from "react";

interface ResultInterface {
	children: React.ReactNode;
}

function Result(props: ResultInterface) {
	return (
		<div className="text-white font-semibold my-4">
			<h1>RESULTS</h1>
			{props.children}
		</div>
	);
}

export default Result;
