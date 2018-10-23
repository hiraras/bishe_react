import React, { Component } from 'react';
import GlobalHeader from '../GlobalHeader';
import styles from './style.less';

class Layout extends Component {
    
    render() {
        const { ctnClassName, children } = this.props;
        return <div className={styles.container}>
                <GlobalHeader />
                <div className={`${styles.pageContainer} ${ctnClassName}`}>{children}</div>
            </div>
    }
}
export default Layout;
