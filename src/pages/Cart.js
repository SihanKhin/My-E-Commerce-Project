import React, { useEffect, useState } from 'react'
import { fetchProducts, getCart } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddToCart } from '../features/products/productSlice'
import { addToCart } from '../features/products/productSlice'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { deleteAllProduct } from '../features/products/productSlice'
const Cart = () => {
  const dispatch = useDispatch();
  const [value,setValue] = useState(0);
  const cart = useSelector(getCart);
  const handleValue = (e)=>setValue(parseFloat(e.target.value));
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch]);
  const deleteProduct = (productId)=>{
      dispatch(deleteAddToCart(productId));
      console.log('deleted');
  }
  const incrementProduct =(product)=>{
        dispatch(addToCart(product))
  }
  const deletesll = (id)=>{
    dispatch(deleteAllProduct(id));
  }
 
 /*  const stripePromise = loadStripe('your_publishable_key_here');
  const handleCheckOut = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe.js has not loaded.');
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems: cart.map(item => ({
        price: item.price_id, // Replace with the price ID from your Stripe dashboard
        quantity: item.quantity,
      })),
      mode: 'payment',
      successUrl: 'https://your-website.com/success', // Replace with your success URL
      cancelUrl: 'https://your-website.com/cancel', // Replace with your cancel URL
    });

    if (error) {
      console.error('Redirect error:', error);
    }
  };
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Payment error:', error);
      setPaymentError(error.message);
    } else {
      console.log('Payment Method:', paymentMethod);
      setPaymentError(null);
      // Handle successful payment, e.g., display a success message or redirect to a success page
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && <div>{paymentError}</div>}
    </form>
  );
}; */


/*   const decrementProduct = (productId)=>{p
    dispatch(addToCart(productId))
  } */
   // Compute summary data
   const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
   const totalPriceWithOutShip = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
   const totalPrice = totalPriceWithOutShip + value;
  return (
    <main className='flex flex-grow min-h-screen w-full justify-start items-center flex-col  bg-gray-300'>
                <div className=' flex w-11/12  flex-col justify-center items-center md:flex-row  bg-gray-200 mt-2 rounded-md pb-2'>
                   <div className=' flex w-full   flex-col justify-between items-center  md:flex-col bg-white rounded-md'>
                       <div className=' flex w-11/12 justify-between items-center mb-4 mt-2'>
                           <h1 className= " text-xl font-Roboto font-medium">Shopping Cart</h1>                    
                      <span className='text-sm font-Roboto font-normal'>{cart.length} {cart.length===1 ? "Item" : "Items"} </span>
                      </div>
                   <hr className=' w-11/12  border-1 mb-2 ' />
            {
              cart.map(pro=>(
                
                <>
                 <div key={pro.id} className='flex flex-row justify-start items-center w-11/12
                 bg-white p-3 mb-2 mt-2 rounded-sm   md:flex-row
                 '>
                       
                        <div className= ' w-12  h-12 md:w-20 md:h-20'>
                             <img className='  rounded-sm object-cover w-12 h-12 md:w-20 md:h-20' src={pro.image} alt="image" />
                        </div>
                          
                          <div className='flex flex-row w-full ml-4 justify-between items-center'>
                              <div className=' w-60'>
                                  <span className=' text-base font-Roboto font-normal
                                  
                                  '>{pro.title}</span>
                              </div>
                              <div className='w-20 h-10 flex justify-center items-center'>
                              <button onClick={()=>deleteProduct(pro.id)}  /* onClick={()=>deleteProduct(pro.id)} */ >
                                   <span className='text-2xl mr-1'>-</span>
                               </button>
                               <div className='w-6 border flex justify-center items-center'>
                               <span>{pro.quantity}</span>
                               </div>
                               <button onClick={()=>incrementProduct(pro)}>
                                  <span className='text-2xl ml-1'>+</span>
                               </button>
                             </div>
                          
                                <div className='flex justify-center items-centertext-xl font-Roboto font-bold w-24'>
                                    <span>${parseFloat(pro.price * pro.quantity).toFixed(2)}</span>
                                </div>
                             <div> 
                               <button onClick={()=>deletesll(pro.id)}>x</button>
                             </div>
                          </div>
                        
                 </div>  
                                     <hr className=' w-11/12  border-1' />
                                    
                                     </>                                                
                                     
              ))
              

            }
                  </div>         
                           <div className='flex flex-col w-11/12 justify-center item-center mt-4'>
                                <div className='flex w-11/12 flex-col justify-center items-start'>
                                  <h1 className='text-2xl font-Roboto font-medium ml-6'>Summary</h1>
                                </div>
                                    <div className='flex w-11/12 flex-col justify-center items-center'>
                                    <hr className=' w-11/12 border-1 mb-2 mt-4 border-gray-300 '/>
                                    </div>

                              <div className='flex flex-row w-11/12 justify-between items-center'>
                               <span className='text-sm font-Roboto font-normal ml-6'>ITEMS {totalItems}</span>
                               <span className='text-sm font-Roboto font-normal mr-6'>${parseFloat(totalPriceWithOutShip).toFixed(2)}</span>
                             </div>
                  
                               <form class="   mt-4 w-11/12 mx-auto flex flex-col justify-start items-start md:w-11/12">
                                      <label for="countries" class="mb-2 font-Roboto text-sm font-normal text-black">
                              
                                        SHIPPING</label>
                                      <select id="countries" 
                                         value={value}
                                         onChange={handleValue}
                                      class="bg-white border h-10  outline-none border-white text-gray-900 text-sm rounded-sm focus:text-black focus:border-black w-11/12">
                                        <option value={0}>None</option>
                                        <option value={5.00}>$5.00</option>
                                        <option value={10.00}>$10.00</option>
                                        <option value={15.00}>$15.00</option>
                                        <option value={20.00}>$20.00</option>
                                        <option value={30.00}>$30.00</option>
                                      </select>
                                    </form>
                               <div className='flex w-11/12 flex-col justify-center items-center'>
                                    <hr className=' w-11/12 border-1 mb-2 mt-4 border-gray-300 '/>
                                    </div>
                                      <div  className='flex w-11/12 justify-between items-center mb-5'>
                                         <span className='ml-6 font-Roboto font-normal text-sm'>TOTAL PRICE</span>
                                          <span className='mr-6 font-Roboto font-normal text-sm'>${parseFloat(totalPrice).toFixed(2)}</span>
                                      </div>
                               <div className='flex w-11/12 justify-center items-center'>
                                   <button  className=' w-11/12 bg-black h-10 text-white'>CHECKOUT</button>
                               </div>
                                
                        </div>
                          
                                 
                     
             </div>
                        
    </main>
  )
}

export default Cart