import React, { Component } from 'react';
import styles from './style.less';
import headImg from '../../asset/img/01.jpg';

class GlobalHeader extends Component{
    state = {
        isShowExtraOption: false,
        isLogin: true,
    }

    headImgMouseEnterHandler = e => {
        this.setState({
            isShowExtraOption: true
        })
    }

    headImgMouseLeaveHandler = e => {
        this.setState({
            isShowExtraOption: false
        })
    }

    isLoginOption = () => {
        const { isShowExtraOption } = this.state;
        return <ul className={styles.optionGroup}>
            <li className={styles.optionItem} onMouseEnter={this.headImgMouseEnterHandler} onMouseLeave={this.headImgMouseLeaveHandler}>
                <img src={headImg} alt='头像' className={styles.headImg} />
                {isShowExtraOption && <ul className={styles.extraOptionGroup}>
                    <li className={styles.extraOptionItem}>私信</li>
                    <li className={styles.extraOptionItem}>修改密码</li>
                    <li className={styles.extraOptionItem}>退出</li>
                </ul>}
            </li>
            <li className={styles.optionItem}>首页</li>
            <li className={styles.optionItem}>个人中心</li>
        </ul>
    }

    isLogoutOption = () => {
        return <ul className={styles.optionGroup}>
            <li className={styles.optionItem}>首页</li>
            <li className={styles.optionItem}>登录</li>
            <li className={styles.optionItem}>注册</li>
        </ul>
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.optionCtn}>
                    {isLogin ? this.isLoginOption() : this.isLogoutOption()}
                </div>
            </div>
        )
    }
}

export default GlobalHeader;
