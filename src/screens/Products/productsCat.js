import React, { useRef, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { debounce } from 'lodash'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card';

import { getFeedCategory } from '../../apiServices';
import { safePah } from '../../utils'

import './products.css'

const ProductsCat = (props) => {

    const scrollContainer = useRef(null)

    const categoryFromParams = safePah(false, ['match', 'params', 'category'], props);

    const [indexs, setIndexs] = useState({
        firstIndex: 0,
        lastIndex: 9
    });


    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(false)

    const handleScroll = (test) => () => {

        if (!loading) {
            setLoading(true);

            getFeedCategory({
                category: categoryFromParams,
                ...test
            }).then(response => {
                
                test.firstIndex = test.lastIndex;
                test.lastIndex = test.lastIndex + 9;

                const feed = safePah([], ['data'], response);
                setLoading(false);
                setFeed(prevState => [...prevState, ...feed])
            })

        }
    }



    useEffect(() => {
        setLoading(true);
        setFeed([]);
        getFeedCategory({ category: categoryFromParams, ...indexs }).then(response => {
            const feed = safePah([], ['data'], response);
            setLoading(false);
            setFeed(prevState => [...prevState, ...feed])
        });

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
        if (scrollContainer && scrollContainer.current) {
            observer.observe(scrollContainer.current)
        }

        return () => observer.unobserve(scrollContainer.current)

    }, [categoryFromParams])


    return (
        <Container id='scrollArea'>
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
            <div ref={scrollContainer} />
        </Container>
    )
};

export default withRouter(ProductsCat);