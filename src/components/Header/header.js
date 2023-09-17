import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./header.css"

function Header(){
    return(
        <Container>
            <Row  id='header'>
            <Col lg={2}><NavbarBrand href="/">MOVIE NAME</NavbarBrand></Col>
            <Col lg={9}>

            <Form className="search-container" action="/search" method="POST">
            <Form.Control type='text' />

             <Col ><Button variant="secondary">Search!</Button></Col>
             </Form>
             </Col>
      </Row>

            
        </Container>
    )
}
export default Header;