import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7145/api/Product`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

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
                  <TableCell>ID</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Sell Price</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Barcode</TableCell>
                  <TableCell>Country Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((value, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {value.id}
                    </TableCell>
                    <TableCell>{value.productName}</TableCell>
                    <TableCell>{value.description}</TableCell>
                    <TableCell>{value.price}</TableCell>
                    <TableCell>{value.sellPrice}</TableCell>
                    <TableCell>{value.rating}</TableCell>
                    <TableCell>{value.barcode}</TableCell>
                    <TableCell>{value.countryName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Link href={'product/create'} type="button" class="btn btn-primary">
            Add New
          </Link>
        </div>
      </>
    );
};

export default Product;
