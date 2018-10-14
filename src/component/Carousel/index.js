import React, { Component } from 'react';
import styles from './style.less';

class Carousel extends Component {
    state = {
        currImgIndex: 0,
        prevImgIndex: 0,
        nextImgIndex: 0,
        isToFront: false,
        isToNext: false,
    }

    componentDidMount() {
        const { imgList } = this.props;
        this.setState({
            prevImgIndex: imgList.length - 1,
            nextImgIndex: 1,
        });
        this.interval = setInterval(this.initInterval, 3000);
    }

    initInterval = () => {
        const { currImgIndex } = this.state;
        const { imgList } = this.props;
        let nextIndex = currImgIndex === imgList.length - 1 ? 0 : currImgIndex + 1;
        this.changeImgHandler(nextIndex);
    }
    //获取方向
    getDirect = nextIndex => {
        const { currImgIndex } = this.state;
        const { imgList } = this.props;
        let direct;
        if(currImgIndex === imgList.length - 1){
            if(nextIndex === 0){
                //自动播放的顺序下，正表示正序
                direct = 1;
            }else{
                direct = -1;
            }
        }else if(currImgIndex === 0){
            if(nextIndex === imgList.length - 1){
                direct = -1;
            }else{
                direct = 1;
            }
        }else{
            if(currImgIndex > nextIndex){
                direct = -1;
            }else{
                direct = 1;
            }
        }
        return direct;
    }

    clearAllInterval = () => {
        const start = (this.interval - 100) > 0 ? this.interval - 100 : 0;
        for(let i = start;i <= this.interval; i++){
            clearInterval(i);
        }
    }

    changeImgHandler = nextIndex => {
        const { currImgIndex } = this.state;
        const { imgList } = this.props;
        let direct;
        this.clearAllInterval();
        if(currImgIndex === nextIndex){
            this.interval = setInterval(this.initInterval, 3000);
            return ;
        }
        direct = this.getDirect(nextIndex);
        if(direct > 0){
            this.setState({ 
                isToNext: true,
                nextImgIndex: nextIndex
            });
            setTimeout(() => {
                this.setState({
                    currImgIndex: nextIndex,
                    isToNext: false
                }, () => {
                    this.interval = setInterval(this.initInterval, 3000);
                });
            }, 500);
        }else{
            this.setState({ 
                isToFront: true,
                prevImgIndex: nextIndex,
             });
            setTimeout(() => {
                this.setState({
                    currImgIndex: nextIndex,
                    isToFront: false
                }, () => {
                    this.interval = setInterval(this.initInterval, 3000);
                });
            }, 500);
        }
    }

    prevBtnHandler = () => {
        const { currImgIndex } = this.state;
        const { imgList } = this.props;
        this.changeImgHandler(currImgIndex === 0 ? imgList.length - 1 : currImgIndex - 1);
    }

    nextBtnHandler = () => {
        const { currImgIndex } = this.state;
        const { imgList } = this.props;
        this.changeImgHandler(currImgIndex === imgList.length - 1 ? 0 : currImgIndex + 1);
    }

    componentWillUnmount() {
        this.clearAllInterval();
    }

    render() {
        const { ctnStyle, imgList } = this.props;
        const { currImgIndex, prevImgIndex, nextImgIndex, isToFront, isToNext } = this.state;
        return (
            <div className={`${styles.container} ${ctnStyle}`}>
                <div className={`${styles.imgCtn} ${ctnStyle}`}>
                    <div className={`${styles.imgItem} ${isToFront ? styles.toFront : ''}`}>
                        <img src={imgList[prevImgIndex]} alt='上一张' />
                    </div>
                    <div className={styles.imgItem}>
                        <img src={imgList[currImgIndex]} alt='当前' />
                    </div>
                    <div className={`${styles.imgItem} ${isToNext ? styles.toNext : ''}`}>
                        <img src={imgList[nextImgIndex]} alt='下一张' />
                    </div>
                </div>
                <div className={styles.spotCtn}>
                    {imgList.map((value, index) => {
                        return <i 
                        className={`${styles.spot} ${currImgIndex === index ? styles.activeSpot : ''}`} 
                        onClick={() => this.changeImgHandler(index)} 
                        key={String(index)}
                    />
                    })}
                </div>
                <div className={styles.btnCtn}>
                    <div className={styles.adjustPosition}>
                        <button className={styles.changePosterBtn} onClick={this.prevBtnHandler}>{'<'}</button>
                        <button className={styles.changePosterBtn} onClick={this.nextBtnHandler}>{'>'}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;