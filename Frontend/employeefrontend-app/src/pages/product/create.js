import { addProduct } from "@/services/product.service";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";




const create = () => {
    const [formData, setFormData] = useState([]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const addEmp = await addProduct(data);
    e.target.reset();

    router.push(`/product`);

  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  return (
    <div>
      <div className="emp-bg">
        <section className="content">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Add New Product</h3>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="card-body">
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <div className="row mb-2">
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="productName"
                        >
                          Product Name
                        </label>

                        <div className="col-md-9">
                          <input
                            onChange={(e) => handleChange(e)}
                            className="form-control"
                            type="text"
                            name="productName"
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="description"
                        >
                          Description
                        </label>
                        <div className="col-md-9">
                          <input
                            onChange={(e) => handleChange(e)}
                            className="form-control"
                            type="text"
                            name="description"
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="price"
                        >
                          Price
                        </label>
                        <div className="col-md-9">
                          <input
                            onChange={(e) => handleChange(e)}
                            className="form-control"
                            type="number"
                            name="price"
                          />
                        </div>
                      </div>
                      <div className="row mb-2">
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="sellPrice"
                        >
                          Sell Price
                        </label>
                        <div className="col-md-9">
                          <input
                            onChange={(e) => handleChange(e)}
                            className="form-control"
                            type="number"
                            name="sellPrice"
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="rating"
                        >
                          Rating
                        </label>
                        <div className="col-md-9">
                          <input
                            onChange={(e) => handleChange(e)}
                            className="form-control"
                            type="number"
                            name="rating"
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="barcode"
                        >
                          Barcode
                        </label>
                        <div className="col-md-9">
                          <input
                            onChange={(e) => handleChange(e)}
                            className="form-control"
                            type="text"
                            name="barcode"
                          />
                        </div>
                      </div>

                      <div className="row mb-2">
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="countryId"
                        >
                          Country Id
                        </label>
                        <div className="col-md-9">
                          <input
                            onChange={(e) => handleChange(e)}
                            className="form-control"
                            type="number"
                            name="countryId"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-2">
                  <label
                    className="col-md-3 col-form-label"
                    htmlFor="countryName"
                  >
                    Country Name
                  </label>
                  <div className="col-md-9">
                    <input
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      type="text"
                      name="countryName"
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-end">
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default create;
