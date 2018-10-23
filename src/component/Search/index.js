import React, { Component } from 'react';
import styles from './style.less';
import Button from '../Button';
import searchImg from '../../asset/img/search.png';

class Search extends Component {
    state = {
        //0为吧,1为贴
        currSearchType: '0',
        searchValue: '',
    }

    onSearchTypeChange = type => {
        this.setState({
            currSearchType: type
        });
    }

    searchValueChange = e => {
        this.setState({
            searchValue: e.target.value
        });
    }

    searchHandler = () => {
        const { onClick = () => { } } = this.props;
        const { searchValue, currSearchType } = this.state;
        const params = {
            searchValue, currSearchType
        };
        onClick(params);
    }

    render() {
        const { currSearchType } = this.state;
        return <div className={styles.container}>
            <input className={styles.input} onChange={this.searchValueChange} />
            <Button className={styles.searchBtn} onClick={this.searchHandler} type='primary'>
                <img alt='search' src={searchImg} className={styles.searchImg} />
            </Button>
            <Button
                className={`${styles.barBtn} ${currSearchType !== '0' ? styles.disabledBtn : ''}`}
                onClick={() => this.onSearchTypeChange('0')}
                type='primary'
            >吧</Button>
            <Button
                className={`${styles.postBtn} ${currSearchType !== '1' ? styles.disabledBtn : ''}`}
                onClick={() => this.onSearchTypeChange('1')}
                type='primary'
            >贴</Button>
        </div>
    }
}
export default Search;
