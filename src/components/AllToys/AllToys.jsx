import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvide";
import Container from "../../Container";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookings, setbookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://speedy-rides-server.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => setbookings(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredbookings = bookings.filter(
    (booking) =>
      booking.name &&
      booking.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const filteredbookings = bookings.filter((booking) =>
  //   booking.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleViewDetails = () => {
    if (user) {
      navigate(`/`);
    } else {
      navigate(`/login`);
    }
  };

  return (
     <div className="flex justify-center items-center overflow-x-auto m-6 " >
          <Container >
       <div className="w-full  ">
      <div className="mb-4 mt-5 ">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={handleSearch}
          className="input input-ghost w-full max-w-xs input-bordered"
        />
      </div>
      <div className="">
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
            {filteredbookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking?.sellerName}</td>
                <td>{booking.name}</td>
                <td>{booking.subCategory}</td>
                <td>{"$" + booking.price}</td>
                <td>{booking.quantity}</td>
                <td>
                  <Link to={`/bookings/${booking._id}`}>
                    <button
                      onClick={() => handleViewDetails()}
                      className="btn btn-outline btn-accent"
                    >
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     </Container>
     </div>
  );
};

export default AllToys;
