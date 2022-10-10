import React, { useState } from 'react';

function Counter() {
    const [arr, setArr] = useState([1]);

    function addPlus() {
        setArr(prevArr => [ ...prevArr, "+" ])
    }

    function addMinus() {
        setArr(prevArr => [ ...prevArr, "-" ])
    }

    /**
     * const [cart, setCart] = useState({ 
        item: 'apple', 
        quantity: 0, 
    });
     * function removeApple() {
        // 1. Use a callback to get the previous value
        // 2. Spread out all the propertiesof the prev state with ...
        // 3. Only change the property that you need to change
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }

    function addApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }
     */

    /**
    const [counter, setCounter] = useState(0)
    function incrementCounter() {
        // This is how we increment or decrement
        // setCounter(counter + 1)

        // Incrementing 2 by 2
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
    }


    /** * 1. Create a "Counter.jsx" component 
   * 2. Create a default `count of 0 
   * 3. Create a button to increment count by 1 
   * 4. Create a button to decrement count` by 1 
   * 5. Import your Counter in App.jsx and test it *
   *  

    function decrementCounter() {
        // setCounter(counter - 1)

        setCounter((prevCounter) => prevCounter - 1)
        setCounter((prevCounter) => prevCounter - 1)
    }
     */


    return (
        <div className='counter'>
                <button onClick={addMinus}> - </button>
                {arr.toString()}
                {/* {cart.quantity}
                {cart.item} */}
                <button onClick={addPlus}> + </button>
        </div>
    )
}

export default Counter