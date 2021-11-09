import React, { useState } from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardForm = () => {

  const [paymentError , setPaymentError] = useState(null)
  const [paymentSuccess , setPaymentSuccess] = useState(null)

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }

    
    const cardElement = elements.getElement(CardElement);

    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      console.log(['PaymentMethod'], paymentMethod);
      setPaymentError(null)
    }
  };



  return (
   <div className="text-center">
    <form className="pamentForm p-5 " onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-success mt-5 px-5" onClick={handleSubmit} disabled={!stripe}>
        Pay
      </button>
    </form>
    {
      paymentError && <p className="text-danger">{paymentError}</p>
    }

    {
      paymentSuccess && <p className="text-success">Payment Successfull!</p>
    }


   </div>
  );
};

export default SimpleCardForm;