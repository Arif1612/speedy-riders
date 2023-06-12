import React from "react";

const Gallery = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1">
      <div>
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1676763092563-628ad69c226b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1511377537649-c17e440ef4b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>

      <div>
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>

      <div>
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1675117317781-1d261bf06fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1516771317026-14d76f5396e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
