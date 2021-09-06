import React, { useState, useEffect } from "react";
import './App.css';
import ItemModal from './modal.js';

function Card(props) {
    const { fruit } = props
    const [modalShow, setModalShow] = useState(false);
    const [src, setSrc] = useState('');
    const [extra_images, setExtraImages] = useState(null);
    const [images, setImages] = useState(
        [
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apple.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apricot.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/banana.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/blueberry.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/cherry.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/guava.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/lemon.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/mango.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/orange.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/pear.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/pineapple.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/raspberry.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/strawberry.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/tomato.png",
            "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/watermelon.png"
            // "fruits/durian.png",
            // "../fruits/grapes.png",
            // "./fruits/lime.png",
            // "fruits/papaya.png",
            // "./fruits/persimmon.png"
        ]
    );

    let HandleShow = () => {
        setModalShow(true);
    }

    function importAll(file_name) {
        let images = {};
        file_name.keys().map((item, index) => { images[item.replace('./', '')] = file_name(item); });
        return images;
    }

    let getImage = () => {
        console.log('hidshalghlsdg')
        // images.forEach(element => console.log(element)
        // );
        
        for (let i = 0; i < images.length; i++) { 
            console.log(fruit.name);
            if(images[i].toLowerCase().includes(fruit.name.toLowerCase())){
                setSrc(images[i])
                return;
            }
        }
        if(src === ''){
            setSrc('https://www.yellowheadinc.com/wp-content/uploads/2018/01/404-error-page.jpg')
        }
    }


    useEffect(() => {
        getImage();
    }, []);


    return (
        <>
            <ItemModal
                show={modalShow}
                handlePropShow={() => setModalShow(false)}
                fruit={fruit}
                src={src}
            />
            <div className='card' onClick={() => HandleShow(true)}>
             
                {/* <p>{name}</p> */}
                <img src={src} width="150" height="150"></img>
            </div>
        </>

    )
}

export default Card;