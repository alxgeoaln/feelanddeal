import React, { useEffect } from 'react';

import './Card.css';
import { safePah } from '../../utils';
import Axios from 'axios';

const image = urls => urls.split(',')[0];
const imageError = ev => {
    ev.target.src = require('./fallback.jpg');
}

const Card = ({ item }) => {


    return (
        <div className="card-container">
            <div className="card">
                <div className="card-image-container">

                    <img className="card-image" onError={imageError} src={image(safePah('', ['image_urls'], item))} />

                </div>
                <div className="card-info">
                    <h1 className="card-title">{safePah('', ['title'], item)}</h1>
                    <h3 className="card-price">{safePah('', ['price'], item)} lei</h3>
                </div>
                <div className="card-button">
                    <a className="card-button-a" target="_blank" href={safePah('', ['aff_code'], item)}>
                        <p>Vezi produsul</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;