import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvide";
import { Link, useNavigate } from "react-router-dom";

const MyToys = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://speedy-rides-server.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  console.log(bookings);

  // handle delete
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://speedy-rides-server.vercel.app/bookings/${id}`, {
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

  // console.log(bookings);

  // const handleViewDetails = (id) => {
  //   if (user) {
  //     navigate(`/toys/${toy._id}`);
  //   } else {
  //     navigate(`/login`);
  //   }
  // };

  return (
    <div>
      <div className="w-full  ">
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
                    <Link to={`/updateBooking/${booking._id}`}>
                      <button className="btn btn-outline btn-warning">
                        Edit
                      </button>
                    </Link>
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
