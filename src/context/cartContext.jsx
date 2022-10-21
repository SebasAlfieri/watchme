import React, { useState, createContext } from "react";
const cartCtx = createContext();
const Swal = require('sweetalert2')

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(data, count) {
    let newCart = cart.map((data) => data);
    newCart.push({ ...data, count: count });
    setCart(newCart);

    Swal.fire({
      title: `"${data.title}" added to cart`,
      text: `${count} copies `,
      imageUrl: data.img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Movie',
    })
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.count;
    });
    return total;
  }

  function getTotalPriceInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.price;
    });
    return total;
  }

  const isInCart = (title) => {
    return cart.some((x) => x.title === title);
  };

  const deleteItem = (title) => {
    return setCart(cart.filter((data) => data.title !== title));
  };

  const clear = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Remove all items from cart?',
      text: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your products have been removed.',
          setCart([])
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary movies are safe :)',
        )
      }
    })
  };

  const clearCheckout = () => {
    setCart([]) 
  }


  const getItemPrice = () => {
    let totalPrice = 0;
    totalPrice =
      cart.reduce((acc, x) => (acc += x.price * x.count), 0) + totalPrice;
    return totalPrice;
  };

  return (
    <cartCtx.Provider
      value={{
        cart,
        addItem,
        getTotalItemsInCart,
        clear,
        clearCheckout,
        isInCart,
        deleteItem,
        getItemPrice,
        getTotalPriceInCart,
      }}
    >
      {children}
    </cartCtx.Provider>
  );
}

export { cartCtx };
