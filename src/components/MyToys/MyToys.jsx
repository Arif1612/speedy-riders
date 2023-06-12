import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvide";
import { Link, useNavigate } from "react-router-dom";

const MyToys = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  // handle delete
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  // handle confirm
  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((bookings) => bookings._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  //   console.log(bookings);

  const handleViewDetails = () => {
    if (user) {
      navigate(`/toys/${toy._id}`);
    } else {
      navigate(`/login`);
    }
  };

  return (
    <div>
      <div className="w-full  ">
        <p>{bookings.length}</p>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Seller (Name)</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.sellerName}</td>
                  <td>{booking.name}</td>
                  <td>{booking.subCategory}</td>
                  <td>{booking.price}</td>
                  <td>{booking.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn btn-square btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => handleBookingConfirm(booking._id)}
                      className="btn btn-outline btn-warning"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
