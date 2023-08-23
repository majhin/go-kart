import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
	name: "alert",
	initialState: {
		show: false,
		type: "",
		message: "",
	},
	reducers: {
		showAlert: (state, action) => {
			state.show = true;
			state.type = action.payload.type;
			state.message = action.payload.message;
		},
		hideAlert: (state) => {
			state.show = false;
			state.type = "";
			state.message = "";
		},
	},
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
