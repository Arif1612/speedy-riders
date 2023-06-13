import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateBooking = () => {
  const toys = useLoaderData();
  const { price, quantity, description,_id } = toys;

  console.log(toys);

  // olw

  const handleUpdatedBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedBooking = {
      price,
      quantity,
      description,
    };

    // console.log(booking);

    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          alert("Toy Booking Updated Successfully");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdatedBooking}>
        <div className="card-body w-1/2 mx-auto  shadow-2xl bg-base-100 ">
          {/* price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={price}
              name="price"
              type="text"
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>

          {/* available quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              defaultValue={quantity}
              name="quantity"
              type="text"
              placeholder="quantity"
              className="input input-bordered"
              required
            />
          </div>
          {/* description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea input input-bordered"
              name="description"
              placeholder="description"
              defaultValue={description}
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </form>
      {/* form end */}
    </div>
  );
};

export default UpdateBooking;
