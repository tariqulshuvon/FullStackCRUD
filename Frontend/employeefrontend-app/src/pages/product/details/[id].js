import { getSingleProduct } from "@/services/product.service";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Details = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    const getData = async (id) => {
      try {
        const getAllData = await getSingleProduct(id);
        setData(getAllData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (id !== undefined) {
      getData(id);
    }
  }, [id]);

  return (
    <div>
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <>
            <div className="emp-bg">
              <section className="content">
                <div className="container">
                  <div className="card">
                    <div class="card-header">
                      <div class="d-flex justify-content-between">
                        <h3 class="card-title">Product Details</h3>
                      </div>
                    </div>

                    <div className="card-body">
                      <div>
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="productName"
                        >
                          Product Name
                        </label>
                        <span className="col-md-9">{data.productName}</span>
                      </div>

                      <div>
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="description"
                        >
                          Description
                        </label>
                        <span className="col-md-9">{data.description}</span>
                      </div>

                      <div>
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="price"
                        >
                          Price
                        </label>
                        <span className="col-md-9">{data.price}</span>
                      </div>

                      <div>
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="sellPrice"
                        >
                          Sell Price
                        </label>
                        <span className="col-md-9">{data.sellPrice}</span>
                      </div>

                      <div>
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="rating"
                        >
                          Rating
                        </label>
                        <span className="col-md-9">{data.rating}</span>
                      </div>

                      <div>
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="barcode"
                        >
                          Barcode
                        </label>
                        <span className="col-md-9">{data.barcode}</span>
                      </div>

                      <div>
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="countryId"
                        >
                          Country Id
                        </label>
                        <span className="col-md-9">{data.countryId}</span>
                      </div>

                      <div className="row mb-2">
                        <label
                          className="col-md-3 col-form-label"
                          htmlFor="countryName"
                        >
                           Country Name
                        </label>
                        <span className="col-md-9">{data.countryName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
