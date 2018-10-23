import React, { Component } from 'react';
import SportSortItem from './item';

class SportSortList extends Component {
    render() {
        const { dataList = [] } = this.props;
        return dataList.map((value, index) => {
            return <SportSortItem data={value} key={String(index)} />
        })
    }
}
export default SportSortList;
