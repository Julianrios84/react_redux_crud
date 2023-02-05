import React from 'react';

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>CRUD - React, Redux, REST API & Axios </h1>
      </div>
      <a
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
        href="/product/add"
      >
        Agregar Producto &#43;
      </a>
    </div>
  );
};

export default Header;
