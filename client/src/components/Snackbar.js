import { Col, Toast, Row,ToastContainer } from "react-bootstrap";


const SnackBar = ({ toggle = false }) => {
    return (
        <Row>
             <Col md={6} className="mb-2">
                <ToastContainer position="middle-center">
                <Toast show={toggle} bg="success">
                    <Toast.Header>
                        <strong className="me-auto">Bootstrap</strong>
                        {/* <small>11 mins ago</small> */}
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
                </ToastContainer>
        
             </Col>

         </Row>
    );
}

export default SnackBar;