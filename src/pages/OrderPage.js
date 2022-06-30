import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { loadStripe } from "@stripe/stripe-js";
import '../styles/order.css'
import axios from "axios";


let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

const OrderPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const loggedIn = setTimeout(() => {
    setMyUserLogin(JSON.stringify(user.name));
  }, 50);

  const [myUserLogin, setMyUserLogin] = useState(loggedIn);
  const [cartData, setCartData] = useState([]);
  const [receiptData, setReceiptData] = useState([]);
  const [phoneData, setphoneData] = useState([]);
  const [gamesData, setgamesData] = useState([]);

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [amount3, setAmount3] = useState(1);
  const [amount4, setAmount4] = useState(1);
  const [amount5, setAmount5] = useState(1);
  const [amount6, setAmount6] = useState(1);
  const [amount7, setAmount7] = useState(1);
  const [amount8, setAmount8] = useState(1);
  const [amount9, setAmount9] = useState(1);

  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);
  const [button4, setButton4] = useState(true);
  const [button5, setButton5] = useState(true);
  const [button6, setButton6] = useState(true);
  const [button7, setButton7] = useState(true);
  const [button8, setButton8] = useState(true);
  const [button9, setButton9] = useState(true);

  const [deliveryBtn, setDeliveryBtn] = useState(false);
  const [pickupBtn, setPickupBtn] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);


// Phone/Games GET Request 

  useEffect(() => {
    const getPhones = () => {
      axios
        .get("/api/phones")
        .then((res) => {
          setphoneData(res.data[0]);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };
    getPhones();
  }, []);

  useEffect(() => {
    const getGames = () => {
      axios
        .get("/api/games")
        .then((res) => {
          setgamesData(res.data[0]);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };
    getGames();
  }, []);



  //Adding/Subtracting # of items in cart states

  function addItem1() {
    if (amount1 < 100) {
      setAmount1(amount1 + 1);
    }
  }

  function addItem2() {
    if (amount2 < 100) {
      setAmount2(amount2 + 1);
    }
  }

  function addItem3() {
    if (amount3 < 100) {
      setAmount3(amount3 + 1);
    }
  }

  function addItem4() {
    if (amount4 < 100) {
      setAmount4(amount4 + 1);
    }
  }

  function addItem5() {
    if (amount5 < 100) {
      setAmount5(amount5 + 1);
    }
  }

  function addItem6() {
    if (amount6 < 100) {
      setAmount6(amount6 + 1);
    }
  }

  function addItem7() {
    if (amount7 < 100) {
      setAmount7(amount7 + 1);
    }
  }

  function addItem8() {
    if (amount8 < 100) {
      setAmount8(amount8 + 1);
    }
  }

  function addItem9() {
    if (amount9 < 100) {
      setAmount9(amount9 + 1);
    }
  }

  function subItem1() {
    if (amount1 >= 2) {
      setAmount1(amount1 - 1);
    }
  }

  function subItem2() {
    if (amount2 >= 2) {
      setAmount2(amount2 - 1);
    }
  }

  function subItem3() {
    if (amount3 >= 2) {
      setAmount3(amount3 - 1);
    }
  }

  function subItem4() {
    if (amount4 >= 2) {
      setAmount4(amount4 - 1);
    }
  }

  function subItem5() {
    if (amount5 >= 2) {
      setAmount5(amount5 - 1);
    }
  }

  function subItem6() {
    if (amount6 >= 2) {
      setAmount6(amount6 - 1);
    }
  }

  function subItem7() {
    if (amount7 >= 2) {
      setAmount7(amount7 - 1);
    }
  }

  function subItem8() {
    if (amount8 >= 2) {
      setAmount8(amount8 - 1);
    }
  }

  function subItem9() {
    if (amount9 >= 2) {
      setAmount9(amount9 - 1);
    }
  }



// Buttons for purchasing item
console.log(phoneData)
  const showButton1 = () => {
    if (button1 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem1}>
              -
            </button>
            <h1 className="count">{amount1}</h1>
            <button className="minus-plus-button" onClick={addItem1}>
              +
            </button>
          </div>
          
          <button
            className="add-button"
            onClick={() => {
              addItemData(
                phoneData[0].stripe_id,
                amount1,
                phoneData[0].price,
                phoneData[0].name
              );
              setButton1(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(phoneData[0].stripe_id, phoneData[0].name);
            setButton1(true);
          }}
        >
          Remove
        </button>
      );
  };

  const showButton2 = () => {
    if (button2 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem2}>
              -
            </button>
            <h1 className="count">{amount2}</h1>
            <button className="minus-plus-button" onClick={addItem2}>
              +
            </button>
          </div>

          <button
            className="add-button"
            onClick={() => {
              addItemData(
                phoneData[1].stripe_id,
                amount2,
                phoneData[1].price,
                phoneData[1].name
              );
              setButton2(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(phoneData[1].stripe_id, phoneData[1].name);
            setButton2(true);
          }}
        >
          Remove
        </button>
      );
  };
  const showButton3 = () => {
    if (button3 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem3}>
              -
            </button>
            <h1 className="count">{amount3}</h1>
            <button className="minus-plus-button" onClick={addItem3}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addItemData(
                phoneData[2].stripe_id,
                amount3,
                phoneData[2].price,
                phoneData[2].name
              );
              setButton3(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(phoneData[2].stripe_id, phoneData[2].name);
            setButton3(true);
          }}
        >
          Remove
        </button>
      );
  };
  const showButton4 = () => {
    if (button4 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem4}>
              -
            </button>
            <h1 className="count">{amount4}</h1>
            <button className="minus-plus-button" onClick={addItem4}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addItemData(
                phoneData[3].stripe_id,
                amount4,
                phoneData[3].price,
                phoneData[3].name
              );
              setButton4(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(phoneData[3].stripe_id, phoneData[3].name);
            setButton4(true);
          }}
        >
          Remove
        </button>
      );
  };
  const showButton5 = () => {
    if (button5 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem5}>
              -
            </button>
            <h1 className="count">{amount5}</h1>
            <button className="minus-plus-button" onClick={addItem5}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addItemData(
                phoneData[4].stripe_id,
                amount5,
                phoneData[4].price,
                phoneData[4].name
              );
              setButton5(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(phoneData[4].stripe_id, phoneData[4].name);
            setButton5(true);
          }}
        >
          Remove
        </button>
      );
  };
  const showButton6 = () => {
    if (button6 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem6}>
              -
            </button>
            <h1 className="count">{amount6}</h1>
            <button className="minus-plus-button" onClick={addItem6}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addItemData(
                phoneData[5].stripe_id,
                amount6,
                phoneData[5].price,
                phoneData[5].name
              );
              setButton6(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(phoneData[5].stripe_id, phoneData[5].name);
            setButton6(true);
          }}
        >
          Remove
        </button>
      );
  };

  const showButton7 = () => {
    if (button7 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem7}>
              -
            </button>
            <h1 className="count">{amount7}</h1>
            <button className="minus-plus-button" onClick={addItem7}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addItemData(
                gamesData[0].stripe_id,
                amount7,
                gamesData[0].price,
                gamesData[0].name
              );
              setButton7(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(gamesData[0].stripe_id, gamesData[0].name);
            setButton7(true);
          }}
        >
          Remove
        </button>
      );
  };

  const showButton8 = () => {
    if (button8 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem8}>
              -
            </button>
            <h1 className="count">{amount8}</h1>
            <button className="minus-plus-button" onClick={addItem8}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addItemData(
                gamesData[1].stripe_id,
                amount8,
                gamesData[1].price,
                gamesData[1].name
              );
              setButton8(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(gamesData[1].stripe_id, gamesData[1].name);
            setButton8(true);
          }}
        >
          Remove
        </button>
      );
  };

  const showButton9 = () => {
    if (button9 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subItem9}>
              -
            </button>
            <h1 className="count">{amount9}</h1>
            <button className="minus-plus-button" onClick={addItem9}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addItemData(
                gamesData[2].stripe_id,
                amount9,
                gamesData[2].price,
                gamesData[2].name
              );
              setButton9(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteItemData(gamesData[2].stripe_id, gamesData[2].name);
            setButton9(true);
          }}
        >
          Remove
        </button>
      );
  };


  // Order Checkout
  const orderPickUp = () => {
    let body = {
      customer: user.name,
      items: JSON.stringify(receiptData),
    };

    if (receiptData.length === 0) {
      alert("You do not have any items available in the cart");
    } else {
      axios.post("/api/orders", body)
      .then((res) => {
        navigate("/thanks");
      });
    }
  }

  const addItemData = (item, qty, price, name) => {
    let newItem = {
      price: item,
      quantity: qty,
    };

    let newReceipt = {
      name: name,
      price: price,
      qty: qty,
    };

    let addTotal = price * qty;

    setCartData([...cartData, newItem]);
    setReceiptData([...receiptData, newReceipt]);
    setCartTotal(cartTotal + addTotal);
  };

  const deleteItemData = (id, item2, item3) => {
    const newItems = cartData.filter((item) => item.price !== id);
    const updateReceipt = receiptData.filter((item) => item.name !== item2);

    setCartData(newItems);
    setReceiptData(updateReceipt);
  };

  const cards = phoneData.map((items) => {
    function PhoneCard({photo,name,price}) {
      return (
        <div className="card-container">
          <img
            className="item-photo"
            key={"photo"}
            src={photo}
            alt=''
          />
          <h1 className="item-name" key={"name"}>
            {name}
          </h1>
          <h2 className="item-price" key={"price"}>
            ${price}
          </h2>
        </div>
      );
    }

    return <PhoneCard {...items} />;
  });

  const gamesCards = gamesData.map((items) => {
    function GamesCard({photo, name, price}) {
      return (
        <div className="card-container">
          <img
            className="item-photo"
            key={"photo"}
            src={photo}
            alt=''
          />
          <h1 className="item-name" key={"name"}>
            {name}
          </h1>
          <h2 className="item-price" key={"price"}>
            ${price}
          </h2>
        </div>
      );
    }

    return <GamesCard {...items} />;
  });

  const receiptItems = receiptData.map((items) => {
    function ReceiptCard({price, name, qty}) {
      return (
        <div className="receipt">
          <p className="receipt-name" key={"name"}>
            {name}
          </p>
          <p className="receipt-price" key={"price"}>
            ${price}
          </p>
          <p className="receipt-qty" key={"qty"}>
            qty: {qty}
          </p>
        </div>
      );
    }

    return <ReceiptCard {...items} />;
  });


  // Delivery Checkout
  const deliveryCheckout = () => {
    if (deliveryBtn === true) {
      document.getElementById("delivery-button").style.backgroundColor =
        "#fa4443";
      document.getElementById("delivery-button").style.color = "white";
      document.getElementById("pickup-button").style.backgroundColor =
        "#e8b338";
      document.getElementById("pickup-button").style.color = "black";
      return (
        <div>
          {" "}
          <button className="checkout-btn" onClick={redirectToCheckout}>
            Delivery Checkout
          </button>
        </div>
      );
    }
  };

  const pickupCheckout = () => {
    if (pickupBtn === true) {
      document.getElementById("pickup-button").style.backgroundColor =
        "#fa4433";
      document.getElementById("pickup-button").style.color = "white";
      document.getElementById("delivery-button").style.backgroundColor =
        "#e8e8e8";
      document.getElementById("delivery-button").style.color = "black";
      return (
        <div>
          <div className="form-setup">
            <button
              type="submit"
              className="checkout-btn"
              onClick={() => orderPickUp()}
            >
              Pickup Checkout
            </button>
          </div>
        </div>
      );
    }
  };




  // Stripe Payment

  const checkoutDecision = {
    lineItems: cartData,
    mode: "payment",
    shippingAddressCollection: { allowedCountries: ["US"] },
    successUrl: `${window.location.origin}/thanks`,
    cancelUrl: `${window.location.origin}/order`,
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutDecision);
    console.log("Checkout error, try again", error);
  };

  return (
    isAuthenticated && (
      <div className="order-page">
        <div>
          <h1>Welcome {myUserLogin}, please select the items of your choice.</h1>
        </div>
        <div className="order-options"></div>
        <div className="order-container">
          <div className="product-container">
            <div className="item-card-container" id="card0">
              {cards[0]}
              {showButton1()}
            </div>

            <div className="item-card-container" id="card1">
              {cards[1]}
              {showButton2()}
            </div>

            <div className="item-card-container" id="card2">
              {cards[2]}
              {showButton3()}
            </div>

            <div className="item-card-container" id="card3">
              {cards[3]}
              {showButton4()}
            </div>

            <div className="item-card-container" id="card4">
              {cards[4]}
              {showButton5()}
            </div>

            <div className="item-card-container" id="card5">
              {cards[5]}
              {showButton6()}
            </div>

            <div className="item-card-container" id="card6">
              {gamesCards[0]}
              {showButton7()}
            </div>

            <div className="item-card-container" id="card7">
              {gamesCards[1]}
              {showButton8()}
            </div>

            <div className="item-card-container" id="card8">
              {gamesCards[2]}
              {showButton9()}
            </div>
          </div>

          <div className="receipt-container">
            <div className="another-receipt-container">
              <div className="cart-icon-container">
                <img
                  className="cart-icon"
                  src="https://res.cloudinary.com/redhero/image/upload/v1648941030/Donuts/shopping-cart_jltry0.png"
                  alt=''
                />
              </div>
              {receiptItems}
              <div className="checkout-setup">
                <div>
                  <h1>Total: ${cartTotal}</h1>
                </div>
                <div className="payment-choice-container">
                  <button
                    className="payment-choice"
                    onClick={() => {
                      setPickupBtn(true);
                      setDeliveryBtn(false);
                    }}
                    id="pickup-button"
                  >
                    Pickup
                  </button>
                  <button
                    className="payment-choice"
                    onClick={() => {
                      setDeliveryBtn(true);
                      setPickupBtn(false);
                    }}
                    id="delivery-button"
                  >
                    Delivery
                  </button>
                </div>
                <div>
                  {deliveryCheckout()}
                  {pickupCheckout()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default OrderPage;

