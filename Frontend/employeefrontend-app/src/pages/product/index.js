import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "bootstrap";
import { deleteProduct, getProduct } from "@/services/product.service";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getAllData = await getProduct();
      setProduct(getAllData);
    };
    getData();
  }, [product]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete this country?");
    if (confirm) {
      try {
        await deleteProduct(id);
      } catch (error) {
        console.error("Error deleting country:", error);
      }
    }
  };

  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="table table-dark table-striped"
          >
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Sell Price</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Barcode</TableCell>
                <TableCell>Country Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((value, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{value.productName}</TableCell>
                  <TableCell>{value.description}</TableCell>
                  <TableCell>{value.price}</TableCell>
                  <TableCell>{value.sellPrice}</TableCell>
                  <TableCell>{value.rating}</TableCell>
                  <TableCell>{value.barcode}</TableCell>
                  <TableCell>{value.countryName}</TableCell>
                  <TableCell>
                    <Link
                      href={`product/edit/${value.id}`}
                      className="btn btn-sm me-3 btn-success"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`product/details/${value.id}`}
                      className="btn btn-sm me-3 btn-primary"
                    >
                      Details
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(value.id)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Link href={"product/create"} type="button" class="btn btn-primary">
        Add New
      </Link>
    </>
  );
};

export default Product;
