 /* eslint-disable-next-line*/
import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TimerTemplate.scss';

const cx = classNames.bind(styles);

const TimerTemplate = ({ children, form}) => {
    return (
        <div className = {cx('timer-template')}>
           {/* <div className={cx('title')}>
                Timer
    </div>*/}
            <section clssName ={cx('from-template')}>
                {form}
            </section>
            <section className={cx('children-template')}>
                {children}
            </section>
        </div>
        );
}

TimerTemplate.propTypes = {
    children: PropTypes.element,
    formP: PropTypes.element
};

TimerTemplate.defaultProps = {
    children: null,
    form: null
};

export default TimerTemplate