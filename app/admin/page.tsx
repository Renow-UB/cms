import React from "react";

const page = () => {
	return (
		<div className="w-full px-36 pt-10 flex flex-col gap-5">
			<h1>Admin</h1>
			<input placeholder="Tittel" type="text" />
			<input placeholder="Bilde" type="file" />
			<textarea placeholder="Tekst" />
			<button className="bg-white text-black">Post</button>
		</div>
	);
};

export default page;
