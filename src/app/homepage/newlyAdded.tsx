'use client'

import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';


function NewlyAdded() {
    return (
      <section className="newly_added_sec">
         <Container>
            <div className='section_title'>
                <h1>Newly Added Courses</h1>
            </div>
            <Row>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>Target 550+ in UPSC CSE MAINS- GS and ESSAY</h4>
                        <p> </p>
                        <a href='/courses'>Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>UPSC GS Paperwise Daily Answer</h4>
                        <p> </p>
                        <a href='/courses'>Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>Optional Answer Writing & Mentorship</h4>
                        <p> </p>
                        <a href='/courses'>Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>UPSC Civil Services Special</h4>
                        <p> </p>
                        <a href='/courses'>Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>KARAMYOGI - UPPSC Updated </h4>
                        <p>  </p>
                        <a href='courses'>Read more</a>
                    </div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className="newly_card">
                        <h4>Haryana Civil Services (HCS) 2023</h4>
                        <p> </p>
                        <a href='/courses'>Read more</a>
                    </div>
                </Col>
            </Row>
         </Container>
      </section>
    );
}

export default NewlyAdded;
