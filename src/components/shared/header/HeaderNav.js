import React from 'react';
import logo from '../../../assets/images/logo-white.png';
import styles from '../../../styles/style.less';

function HeaderNav(props) {
    return (
        <div className={styles.headerNav}>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col ">
                        <img src={logo}></img>
                    </div>
                    <div className="col">
                        <div className={styles.headerText}>
                            <div>HOME</div>
                            <div>BLOG</div>
                            <div>DOCTORS</div>
                            <div>CONTACT</div>
                        </div>

                    </div>
                    <div className="col text-end ">
                        <div className={styles.navButton}>
                            <button>FIND A DOCTOR</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HeaderNav;