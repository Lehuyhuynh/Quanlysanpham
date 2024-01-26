import React from "react";
import { useSelector } from "react-redux";
function Listproduct() {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  return (
    <div>
      <h1>List Product</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              {/* <th>Image</th> */}
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr key={index}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                {/* <td>{product.image}</td> */}
                <td>{product.price}</td>
                <td>
                  <button
                    className="bg-red-600"
                    //  onClick={() => onRemove(product.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-cyan-600"
                    // onClick={() => setPhonebook(product)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Listproduct;
