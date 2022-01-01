import React from 'react';
import styles from '../../../styles/style.less'

function TopBar() {
    return (
        <div>
            <div className={styles.topBar}>
                    <div className={styles.favicoinLeft}>
                        <i className="far fa-envelope"></i>
                        <span>info@website.com</span>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Oakwood, Los Angeles, CA 1098</span>
                    </div>
                    <div className={styles.fovicoinRight}>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-product-hunt"></i>
                    </div>
            </div>
        </div>
    );
}

export default TopBar;