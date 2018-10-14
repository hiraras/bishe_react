import React, { Component } from 'react';
import styles from './style.less';
import { GlobalHeader, Carousel } from '../../component';
import img1 from '../../asset/img/banner1.jpg';
import img2 from '../../asset/img/banner2.jpg';
import img3 from '../../asset/img/banner3.jpg';

class Home extends Component{
    render() {
        const imgList = [img1, img2, img3];
        return (
            <div className={styles.wrapper}>
                <GlobalHeader />
                <div className={styles.banner}>
                    <Carousel
                        ctnStyle={styles.carouselCtn}
                        imgList={imgList}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
