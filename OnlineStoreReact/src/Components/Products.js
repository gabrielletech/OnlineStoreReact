import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Products extends Component {
    render() {
        return (
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={this.props.image1} alt="image1" roundedCircle />
                            <p>Brushes</p>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={this.props.image2} alt="image2" roundedCircle />
                            <p>Makeup</p>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={this.props.image3} alt="image3" roundedCircle />
                            <p>Styling Equipment</p>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

    export default Products;