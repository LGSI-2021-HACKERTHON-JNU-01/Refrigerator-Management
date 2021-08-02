 {/* eslint-disable-next-line*/}
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.less';


const cx = classNames.bind(styles);

const Button = ({ onClick, handleClear, handleSave, contents})=>(
    <div className={cx('Button-wrapper')}>
        <div
            className={cx('Button')}
             /* eslint-disable-next-line*/
            onClick={onClick}
            onKeyDown={null}
             /* eslint-disable-next-line*/
            role="Button"
            tabIndex="0">
                {contents ? 'start' : 'stop'}
            </div>
        <div
            className ={cx('Button', {visibility: !contents})}
            onClick={handleClear}
             /* eslint-disable-next-line*/
            onKeyPress={null}
             /* eslint-disable-next-line*/
            role="Button"
            tabIndex="0">
                reset
            </div>
        <div
            className = {cx('Button', {visibility:contents})}
            onClick={handleSave}
             /* eslint-disable-next-line*/
            onKeyDown={null}
             /* eslint-disable-next-line*/
            role='Button'
            tabIndex="0">
                save
            </div>
    </div>
);

Button.propTypes = {
    onClick : PropTypes.func,
    handleClear : PropTypes.func,
    handleSave : PropTypes.func,
    contents : PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => console.warn('No handleAction!'),
    handleClear: () => console.warn('No handleClear!'),
    handleSave: () => console.log('No handleSave!'),
    contents : true,
};

export default Button;