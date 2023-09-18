import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./header.css";

function Header({ onSearch }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchValue);
    }

    return (
        <Container>
            <Row id='header'>
                <Col sm={12}md={3}><NavbarBrand href="/"><h2>MOVIE NAME</h2></NavbarBrand></Col>
                <Col sm={12}md={9}>
                    <Form className="search-container" onSubmit={handleSearchSubmit}>
                        <Form.Control
                            type='text'
                            value={searchValue}
                            onChange={handleSearchChange}
                            className={searchValue ? 'bold-text' : ''}
                        />
                        <Col><Button variant="secondary" type="submit">Search!</Button></Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
