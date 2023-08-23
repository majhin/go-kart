import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, Toast } from "react-bootstrap";
import { hideAlert } from "../reducers/alertReducer";
import "../css/Alert.css";

function Alert() {
	const alert = useSelector((state) => state.alert);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(hideAlert());
	};

	return (
		<ToastContainer className='custom-toast-container'>
			<Toast show={alert.show} onClose={handleClose} delay={3000} autohide>
				<Toast.Header className='bg'>
					<strong className='me-auto'>{alert.type}</strong>
				</Toast.Header>
				<Toast.Body className='bg'>{alert.message}</Toast.Body>
			</Toast>
		</ToastContainer>
	);
}

export default Alert;
