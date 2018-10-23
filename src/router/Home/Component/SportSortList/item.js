import React, { Component } from 'react';
import ItemDetail from './itemDetail';
import styles from './item.less';

class SportSortItem extends Component {
    state = {
        isShowChildrenSports: false
    }
    //显示包含的运动
    showChildrenSportsModal = () => {
        this.setState({ isShowChildrenSports: true });
    }
    //隐藏显示包含的运动
    hideChildrenSportsModal = () => {
        this.setState({ isShowChildrenSports: false });
    }

    render() {
        const { data = {} } = this.props;
        const { isShowChildrenSports } = this.state;
        return <div
            className={styles.container}
            onMouseEnter={this.showChildrenSportsModal}
            onMouseLeave={this.hideChildrenSportsModal}
        >
            <p>{data.name}</p>
            {isShowChildrenSports && <ItemDetail
                title={data.name}
                sportList={data.children}
            />}
        </div>
    }
}
export default SportSortItem;
