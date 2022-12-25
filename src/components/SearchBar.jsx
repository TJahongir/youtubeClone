import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
	return (
		<Paper
			component="form"
			onSubmit={() => {}}
			sx={{
				borderRadius: 20,
				borer: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
			}}>
			<input
				type="text"
				className="search-bar"
				placeholder="Search..."
				onChange={() => {}}
			/>
			<IconButton type="submit" sx={{ p: "10px", coclor: "red" }}>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
