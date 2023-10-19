async function getProduct() {
  const response = await fetch("https://localhost:7145/api/Product");
  return await response.json();

}

async function getSingleProduct(id) {
  try {
    const response = await fetch(
      `https://localhost:7145/api/Product/${id}`,
      {
        cors: true,
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function addProduct(data) {
  console.log(data);
  try {
    const response = await fetch("https://localhost:7145/api/Product", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: `);
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding Employee:", error);
    throw error;
  }
}


async function updateProduct(id, data) {
  try {
    const response = await fetch(`https://localhost:7145/api/Product/${id}`, {
      method: "PUT",
      body: data,
    });

    if (!response.ok) {
      const responseBody = await response.text();
      // throw new Error(`Network response was not ok: ${response.status} - ${responseBody}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}


async function deleteProduct(id) {
  try {
    const response = await fetch(`https://localhost:7145/api/Product/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: `);
    }

    return true; // Return a success indicator or any relevant data
  } catch (error) {
    console.error("Error deleting Department:", error);
    throw error;
  }
}


export {
  getProduct,
  addProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
