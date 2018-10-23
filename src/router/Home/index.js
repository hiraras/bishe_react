import React, { Component } from 'react';
import styles from './style.less';
import { Carousel, Search, Layout } from '../../component';
import { SportSortList } from './Component';
import img1 from '../../asset/img/banner1.jpg';
import img2 from '../../asset/img/banner2.jpg';
import img3 from '../../asset/img/banner3.jpg';

class Home extends Component{
    state = {
        sportSortData: [
            {
                id: 0,
                name: '球类运动',
                children: [
                    {
                        childId: 0,
                        name: '保龄球'
                    },
                    {
                        childId: 1,
                        name: '橄榄球'
                    },
                ]
            },
            {
                id: 1,
                name: '田径运动',
                children: [
                    {
                        childId: 3,
                        name: '三级跳远'
                    },
                    {
                        childId: 4,
                        name: '标枪'
                    },
                ]
            },
            {
                id: 2,
                name: '极限运动',
                children: [
                    {
                        childId: 5,
                        name: '极限划水'
                    },
                    {
                        childId: 6,
                        name: '空中冲浪'
                    },
                ]
            },
        ]
    }
    render() {
        const imgList = [img1, img2, img3];
        const { sportSortData } = this.state;
        return (
            <Layout>
                <div className={styles.banner}>
                    <Carousel ctnStyle={styles.carouselCtn} imgList={imgList} />
                </div>
                <Search />
                <div className={styles.content}>
                    <div className={styles.sportSortListCtn}>
                        <SportSortList dataList={sportSortData} />
                    </div>
                    <div className={styles.hotBars}>

                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;
