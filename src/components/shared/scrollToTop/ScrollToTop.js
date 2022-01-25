import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

function ScrollToTop(props) {

    const eventListener = () => {
        window.scrollTo(0, 0)
    }

    let[isShowBtn, setIsShowBtn] = useState('isShow-btn__hide');

      window.onload = () => {

        window.onscroll = () => {
            if(window.scrollY > 500){
                setIsShowBtn('isShow-btn')
            }else {
                setIsShowBtn('isShow-btn__hide')
            }
        }
    }

    return (
        <div >
            <div  id="scroll-top" className={isShowBtn} onClick={() => eventListener()}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
}

export default ScrollToTop;