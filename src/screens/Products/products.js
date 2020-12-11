import React, { useState, useEffect, useRef, } from 'react';
import { withRouter } from 'react-router-dom';
import { debounce } from 'lodash'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card';

import { getFeed, getFeedCategory } from '../../apiServices';
import { safePah } from '../../utils'

import './products.css'

const Products = () => {

    const lastItem = useRef(null);

    const [indexs, setIndexs] = useState({
        firstIndex: 0,
        lastIndex: 9
    });
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(false)

    const handleScroll = (test) => () => {

        if (!loading) {
            setLoading(true);

            getFeed({
                ...test
            }).then(response => {

                test.firstIndex = test.lastIndex;
                test.lastIndex = test.lastIndex + 9;

                const feed = safePah([], ['data', 'feed'], response);
                setLoading(false);
                setFeed(prevState => [...prevState, ...feed])
            })

        }
    }

    useEffect(() => {
        setFeed([])

        setLoading(true);

        getFeed(indexs).then(response => {
            const feed = safePah([], ['data', 'feed'], response);
            setLoading(false);

            setFeed(prevState => [...prevState, ...feed])
        })

        const test = {
            firstIndex: 9,
            lastIndex: 18
        }

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25
        }

        let observer = new IntersectionObserver(debounce(handleScroll(test), 1000), options);
        if (lastItem && lastItem.current) {
            observer.observe(lastItem.current)
        }

        return () => observer.unobserve(lastItem.current)

    }, [])


    return (
        <Container>
            <Row>
                {
                    feed.map(item =>
                        (
                            <Col key={item.productIndex} lg={4} >
                                <Card item={item} />
                            </Col>
                        ))
                }
            </Row>
            {
                loading && (
                    <div className='loading-container'>
                        <div className="loadingio-spinner-ball-ihbyozux4z">
                            <div className="ldio-7sc65s66v5n">
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div ref={lastItem} />
        </Container>
    )
};

export default withRouter(Products);