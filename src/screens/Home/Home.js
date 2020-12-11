import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router';
import Flickity from 'flickity';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Collapse from 'react-bootstrap/Collapse'

import './home.css';
import { getPrograms } from '../../apiServices';
import { safePah } from '../../utils';



const Home = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const bannerContainer = document.querySelector('.banner-container');

        bannerContainer.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 30;

            bannerContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        });

        // animate In
        bannerContainer.addEventListener('mouseenter', e => {
            bannerContainer.style.transition = "none";
        })

        // animate Out
        bannerContainer.addEventListener('mouseleave', e => {
            bannerContainer.style.transition = `all 0.5s ease`
            bannerContainer.style.transform = `rotateY(0deg) rotateX(0deg)`
        })

        getPrograms()
            .then(response => {
                const programs = safePah([], ['data', 'programs'], response)
                setPrograms(programs)
            })
    }, []);

    return (
        <div>


            <div className='perspective-container'>
                <div className='banner-container'>
                    <Image
                        fluid
                        className='img-class'
                        src={require('./banner1.png')}

                        style={{
                            marginTop: 30,
                        }}
                    />
                </div>
            </div>

            <Container style={{marginTop: 60}}>
                <Row>
                    {
                        programs.map(program => (
                            <Col key={program.logo_path} className='program-logo-container' xs={6} md={4}>
                                <Image src={program.logo_path} thumbnail />
                            </Col>
                        ))
                    }

                </Row>
            </Container>


        </div>
    )
}

export default withRouter(Home);