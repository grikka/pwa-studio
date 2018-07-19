import { Component, createElement } from 'react';
import { bool, func, shape, string } from 'prop-types';

import classify from 'src/classify';
import Section from './section';
import SubmitButton from './submitButton';
import defaultClasses from './summary.css';

class Summary extends Component {
    static propTypes = {
        busy: bool.isRequired,
        classes: shape({
            body: string,
            footer: string,
            root: string
        }),
        enterSubflow: func.isRequired,
        submitOrder: func.isRequired
    };

    render() {
        const { busy, classes, submitOrder } = this.props;
        const today = new Date().toDateString();

        return (
            <div className={classes.root}>
                <div className={classes.body}>
                    <Section
                        label="Ship To"
                        onClick={this.modifyShippingAddress}
                    >
                        <span>Veronica Costello</span>
                        <br />
                        <span>6146 Honey Bluff Parkway</span>
                    </Section>
                    <Section
                        label="Pay With"
                        onClick={this.modifyBillingAddress}
                    >
                        <span>Visa</span>
                        <br />
                        <span>*0022</span>
                    </Section>
                    <Section
                        label="Get It By"
                        onClick={this.modifyShippingMethod}
                    >
                        <span>{today}</span>
                        <br />
                        <span>Free Standard Shipping</span>
                    </Section>
                </div>
                <div className={classes.footer}>
                    <SubmitButton busy={busy} submitOrder={submitOrder} />
                </div>
            </div>
        );
    }

    modifyBillingAddress = () => {
        this.props.enterSubflow('BILLING_ADDRESS');
    };

    modifyShippingAddress = () => {
        this.props.enterSubflow('SHIPPING_ADDRESS');
    };

    modifyShippingMethod = () => {
        this.props.enterSubflow('SHIPPING_METHOD');
    };
}

export default classify(defaultClasses)(Summary);
