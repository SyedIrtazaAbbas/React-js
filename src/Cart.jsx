import React, { useState } from 'react';

import './cart.css';

function Cart() {
    // Define separate state variables for each product's quantity
    const [iphoneQuantity, setIphoneQuantity] = useState(1);
    const [watchQuantity, setWatchQuantity] = useState(1);

    const handleIphoneIncrement = () => {
        setIphoneQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleIphoneDecrement = () => {
        if (iphoneQuantity > 1) {
            setIphoneQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleWatchIncrement = () => {
        setWatchQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleWatchDecrement = () => {
        if (watchQuantity > 1) {
            setWatchQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <>
            <h1 className='cardtitle'>Cart</h1>
            <section className='cardcon'>
                <div className='cartright'>
                    <div className='cardh'>
                        <h2 className='pro'>Product</h2>
                        <h2 className='qu'>Quantity</h2>
                        <h2>Subtotal</h2>
                    </div>

                    <div className='cardtotal'>
                        <div className='cardto'>
                            <img src='images/24.jpg' alt='iphone 13' />
                            <div className='cardname'>
                                <h1>iphone 13</h1>
                                <h4>$1500.00</h4>
                            </div>
                        </div>
                        <div className='carts'>
                            <button onClick={handleIphoneDecrement}><a>-</a></button>
                            <span>{iphoneQuantity}</span>
                            <button onClick={handleIphoneIncrement}><a>+</a></button>
                        </div>
                        <div className='cart'>
                            <h4>$1500.00</h4>
                            <a><i className="fa fa-trash-o" aria-hidden="true"></i> </a>
                        </div>
                    </div>

                    <div className='cardtotal'>
                        <div className='cardto'>
                            <img src='images/27.jpg' alt='Pink watch' />
                            <div className='cardname'>
                                <h1>Pink watch</h1>
                                <h4>$1500.00</h4>
                            </div>
                        </div>
                        <div className='carts'>
                            <button onClick={handleWatchDecrement}><a>-</a></button>
                            <span>{watchQuantity}</span>
                            <button onClick={handleWatchIncrement}><a>+</a></button>
                        </div>
                        <div className='cart'>
                            <h4>$1500.00</h4>
                            <a><i className="fa fa-trash-o" aria-hidden="true"></i> </a>
                        </div>
                    </div>
                </div>

                <div className='cartleft'>
                    <div className='cartdetils'>
                        <h1>Cart Total</h1>
                        <div className='cartde'>
                            <div className='cars'>
                                <h2>Subtotal</h2>
                                <h4>$2,370.00</h4>
                            </div>

                            <div className='cars'>
                                <h2>TOTAL</h2>
                                <h4 className='ras'>$2,370.00</h4>
                            </div>
                        </div>
                        <div className='cartbutton'>
                            <button> <a>Update Cart</a></button>
                            <button className='sa'> <a>Continue Shopping</a></button>
                        </div>
                        <button className='check'> <a>Proceed to Checkout</a></button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
