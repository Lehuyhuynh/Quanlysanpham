import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty (1).gif";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    // description: "",
    totalPrice,
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    console.log(data);

    const { name, address, phone, email } = data;

    if (name && address && phone && email) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/uploadExhibition`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);
      navigate("/");

      setData(() => {
        return {
          name: "",
          address: "",
          phone: "",
          email: "",
          // description: "",
          totalPrice,
        };
      });
    } else {
      toast("Enter required Fields");
    }
  };
  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ? (
          <div className="my-4 flex gap-3">
            {/* display cart items  */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>

            {/* total cart item  */}
            <div className="w-full max-w-md  ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">
                Đơn hàng của bạn
              </h2>

              <div className="p-4">
                <form
                  className="m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white"
                  // onSubmit={handleSubmit}
                  onClick={handlePayment}
                >
                  <label htmlFor="name">Họ và Tên</label>
                  <input
                    type={"text"}
                    name="name"
                    className="bg-slate-200 p-1 my-1"
                    onChange={handleOnChange}
                    value={data.name}
                  />

                  <label htmlFor="address" className="my-1">
                    Địa Chỉ
                  </label>
                  <input
                    type={"text"}
                    className="bg-slate-200 p-1 my-1"
                    name="address"
                    onChange={handleOnChange}
                    value={data.address}
                  />

                  <label htmlFor="phone" className="my-1">
                    Số điện thoại
                  </label>
                  <input
                    type={"text"}
                    className="bg-slate-200 p-1 my-1"
                    name="phone"
                    onChange={handleOnChange}
                    value={data.phone}
                  />
                  <label htmlFor="email" className="my-1">
                    Email
                  </label>
                  <input
                    type={"email"}
                    className="bg-slate-200 p-1 my-1"
                    name="email"
                    onChange={handleOnChange}
                    value={data.email}
                  />
                  {/* <label htmlFor="description">Ghi Chú</label>
                  <textarea
                    rows={2}
                    className="bg-slate-200 p-1 my-1 resize-none"
                    name="description"
                    onChange={handleOnChange}
                    value={data.description}
                  ></textarea> */}

                  <div className="flex w-full py-2 text-lg border-b">
                    <p>Tổng :</p>
                    <p className="ml-auto w-32 font-bold">
                      {totalPrice}
                      <span className="text-red-500">đ</span>
                    </p>
                  </div>
                  <button className="bg-red-500 w-full text-lg font-bold py-2 text-white">
                    Đặt Hàng
                  </button>
                </form>
              </div>
            </div>
            {/* <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div> */}
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center items-center flex-col">
              <img src={emptyCartImage} className="w-full max-w-sm" />
              <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
