import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

function ScrollToTop(props) {

    const eventListener = () => window.scrollTo(0, 0);


    let [isShowBtn, setIsShowBtn] = useState();

    window.onscroll = () => {
        window.scrollY > 500
            ? setIsShowBtn('scroll-top')
            :
            setIsShowBtn('')
    }


    return (
        <div>
            <div id={isShowBtn}  onClick={() => eventListener()}>
                <FontAwesomeIcon icon={faArrowUp}/>
            </div>
        </div>
    );
}

export default ScrollToTop;