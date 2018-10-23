import React, { Component } from 'react';
import styles from './style.less';

class Button extends Component {
    render() {
        const { onClick = () => { }, className = '', style = {}, children, disabled = false, type = '' } = this.props;
        return <button
            onClick={onClick}
            className={`${styles.default} ${type === 'primary' ? styles.basic : ''} ${className}`}
            style={style}
            disabled={disabled}>
            {children}
        </button>
    }
}
export default Button;
