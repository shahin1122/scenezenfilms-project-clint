import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie0iyKsSEI5PwhrzUqnwAYfhQRdFFsmPU7SVZigtYmEiKZpYZLVzBljXjMv4m7JTWql6fm8n1fgkQ762TbDJ4Bt00E7iPut2P');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            {/* <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            /> */}
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;