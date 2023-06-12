import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvide";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* form start */}
          <form onSubmit="">
            <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
              <div className="card-body">
                {/* main */}
                <div className="flex flex-col md:flex-row ">
                  {/* left */}
                  <div className="mr-5">
                    {/* name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="name (toy name)"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* seller name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Seller Name</span>
                      </label>
                      <input
                        name="sellerName"
                        type="text"
                        value={user.displayName}
                        placeholder="seller name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        name="email"
                        type="text"
                        value={user.email} // Set the value from logged-in user's email
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    {/* sub category */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Car Category</span>
                      </label>
                      <select
                        className="select w-full max-w-xs input input-bordered"
                        name="subCategory"
                        required
                      >
                        <option disabled selected>
                          Sub Category
                        </option>
                        <option>Sports Car</option>
                        <option>Police Car</option>
                        <option>Regular Car</option>
                      </select>
                    </div>
                  </div>
                  {/* right */}
                  <div>
                    {/* picture url */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Picture URL</span>
                      </label>
                      <input
                        name="pictureUrl"
                        type="text"
                        placeholder="picture url"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* price */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        name="price"
                        type="text"
                        placeholder="price"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* rating */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <input
                        name="rating"
                        type="text"
                        placeholder="rating"
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
                        name="quantity"
                        type="text"
                        placeholder="quantity"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  {/* right end */}
                </div>
                {/* for all */}

                {/* description */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    className="textarea input input-bordered"
                    name="description"
                    placeholder="description"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </form>
          {/* form end */}
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
