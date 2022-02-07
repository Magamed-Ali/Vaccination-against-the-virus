import React from 'react';
import photo1 from "./photo/imgonline-com1.jpg"
import photo2 from "./photo/imgonline-com2.jpg"
import photo3 from "./photo/imgonline-com3.jpg"
import s from "./historyPol.module.sass"

function Carousel(props) {
    return (<div>
            <div className={s.corusel}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={photo1} className="d-block w-100" alt=""/>
                            <div className="carousel-caption  d-sm-block">
                                <button className={s.button}>кнопка</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={photo2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption  d-sm-block">
                                <h5 className={s.hh1}>Метка первого слайда</h5>
                                <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={photo3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption  d-sm-block">
                                <h5 className={s.hh1}>Метка первого слайда</h5>
                                <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Следующий</span>
                    </button>
                </div>
            </div>
        </div>);
}

export default Carousel;