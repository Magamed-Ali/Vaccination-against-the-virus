import React, {useEffect, useState} from 'react';

function Footer() {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/pictures-line")
            .then(response => response.json())
            .then(json => {
                setImages(json)
            })
    }, [])

    return (
        <div className="pictures-line">
            <div className="pictures-line__content">
                <div className="pictures-line__content-images">
                    {
                        images.map(todo => {
                            return (
                                <div className="images" key={todo.id}><img src={todo.images} alt="img" className="photo"/></div>
                            )})
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;