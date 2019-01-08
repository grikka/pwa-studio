import React, { Component, Fragment } from 'react';
import { func, shape, string } from 'prop-types';

import classify from 'src/classify';
import Icon from 'src/components/Icon';
import Trigger from 'src/components/Trigger';
import defaultClasses from './navHeader.css';

class NavHeader extends Component {
    static propTypes = {
        classes: shape({
            title: string
        }),
        onBack: func.isRequired,
        onClose: func.isRequired
    };

    render() {
        const { classes, onBack, onClose, title } = this.props;

        return (
            <Fragment>
                <Trigger key="backButton" action={onBack}>
                    <Icon name="ArrowLeft" />
                </Trigger>
                <h2 key="title" className={classes.title}>
                    <span>{title}</span>
                </h2>
                <Trigger key="closeButton" action={onClose}>
                    <Icon name="X" />
                </Trigger>
            </Fragment>
        );
    }
}

export default classify(defaultClasses)(NavHeader);
