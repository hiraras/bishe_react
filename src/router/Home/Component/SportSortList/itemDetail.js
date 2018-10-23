import React, { Component } from 'react';
import { Button } from '../../../../component';
import styles from './itemDetail.less';

class ItemDetail extends Component {
    render() {
        const { title = '', sportList = [] } = this.props;
        return <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <hr className={styles.line} />
            <div className={styles.sportsCtn}>
                {sportList.map((value, index) => {
                    return <Button key={String(index)} style={{ marginLeft: 10 }}>{value.name}</Button>
                })}
            </div>
        </div>
    }
}
export default ItemDetail;
