// src/components/Gallery.js

import React, { useState } from "react";
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import guitarist from './img/guitarist.jpg';
import flower from './img/flower.jpg';
import girl from './img/girl.jpg';
import photographer from './img/photographer.webp';
import club from './img/club.jpg';
import ballon from './img/ballon.jpg';

const Gallery = () => {
    const data = [
        { id: 1, imgSrc: guitarist, alt: 'Guitarist' },
        { id: 2, imgSrc: club, alt: 'Club' },
        { id: 3, imgSrc: girl, alt: 'Girl' },
        { id: 4, imgSrc: flower, alt: 'Flower' },
        { id: 5, imgSrc: photographer, alt: 'Photographer' },
        { id: 6, imgSrc: ballon, alt: 'Ballon' }
    ];

    const [model, setModel] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getImg = (index) => {
        setCurrentIndex(index);
        setModel(true);
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={data[currentIndex].imgSrc} alt={data[currentIndex].alt} />
                <CloseIcon onClick={() => setModel(false)} />
                <button className="prev" onClick={prevImage}>❮</button>
                <button className="next" onClick={nextImage}>❯</button>
            </div>
            <div className="gallery">
                {data.map((item, index) => (
                    <div className="pics" key={item.id} onClick={() => getImg(index)}>
                        <img src={item.imgSrc} alt={item.alt} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;
