import React, { Component } from 'react';
import styles from './style.less';
import { GlobalHeader } from '../../component';

class Home extends Component{
    render() {
        return (
            <div className={styles.wrapper}>
                <GlobalHeader />
            </div>
        );
    }
}

export default Home;
