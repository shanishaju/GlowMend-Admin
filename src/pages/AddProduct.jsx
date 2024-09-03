import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { addProductApi } from '../services/allApi';

function AddProduct() {

    const [productDetails, setProductDetails] = useState({
        productName: "",
        category: "",
        price: "",
        description: "",
        productImage: null // Change to null to avoid confusion
    });

    console.log(productDetails);

    const imageHandler = (e) => {
        console.log(e.target.files[0]);
        setProductDetails({ ...productDetails, productImage: e.target.files[0] });
    }

    //cancel button
    const handleCancel = () => {
        setProductDetails({
            productName: "",
            category: "",
            price: "",
            description: "",
            productImage: null // Reset to null
        });
    }

    //add button
    const handleAdd = async (e) => {
        e.preventDefault();
        const { productName, category, price, description, productImage } = productDetails;
        if (!productName || !category || !price || !description || !productImage) {
            alert("Please fill the fields completely");
        } else {
            const reqBody = new FormData();

            reqBody.append("productName", productName);
            reqBody.append("category", category);
            reqBody.append("price", price);
            reqBody.append("description", description);
            reqBody.append("productImage", productImage);

            const reqHeader = {
                "Content-Type": "multipart/form-data"
            }

            const result = await addProductApi(reqBody, reqHeader);
            console.log(result);
            if(result.status == 200){
                alert("Data added successfully")
                handleCancel()
            }
            else{
                alert("Failed to add data")
            }
        }
    }

    return (
        <>
            <div className='ms-5 me-5 rounded-4 ' style={{ width: "80%", backgroundColor: "", height: "79vh", padding: "0px 30px" }}>
                <Stack>
                    <Stack
                        sx={{
                            backgroundColor: "#a3706b96",
                            padding: "30px",
                            borderRadius: "12px",
                        }}
                    >
                        <p className='text-light ms-4 mt-3' style={{ fontSize: "32px", fontWeight: "bold" }} >Add Products</p>

                        <Stack
                            sx={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                            }}
                        >

                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                <TextField id="outlined-basic" label="Product Name" variant="outlined" color="blue" name="name" value={productDetails.productName} onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })} />
                            </Stack>

                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                <TextField id="outlined-basic" label="Category" variant="outlined" color="blue" name="category" value={productDetails.category} onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })} />
                            </Stack>

                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                <TextField id="outlined-basic" label="$ Price" variant="outlined" color="blue" name="category" value={productDetails.price} onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })} />
                            </Stack>

                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                <TextField id="outlined-basic" label="Description" variant="outlined" color="blue" name="description" value={productDetails.description} onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })} />
                            </Stack>

                            <Stack sx={{ flexDirection: "row" }}>
                                <Stack sx={{ width: "220%", marginBottom: "2%", flexDirection: "row", justifyContent: "right", backgroundColor: "#a3706b96", borderRadius: "10px" }} >
                                    <label
                                        htmlFor="file-upload"
                                        style={{
                                            cursor: "pointer",
                                            width: "200px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img
                                            className="m-4"
                                            src="../src/assets/uploadRemovebg.png"
                                            alt="addprodut-thumbnail"
                                            width="30%"
                                        />
                                    </label>
                                    <input
                                        onChange={(e) => imageHandler(e)}
                                        type="file"
                                        name="image"
                                        id="file-upload"
                                        hidden
                                    />
                                </Stack>
                            </Stack>

                            <Stack
                                sx={{
                                    width: "100%",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={handleAdd}
                                    sx={{
                                        width: "auto",
                                        backgroundColor: "white",
                                        color: "#000",
                                        padding: "15px 30px",
                                        display: "flex",
                                        "&:hover": {
                                            backgroundColor: "#000",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    Add
                                </Button>
                                <Button className='ms-4'
                                    onClick={handleCancel}
                                    variant="contained"
                                    sx={{
                                        width: "auto",
                                        backgroundColor: "white",
                                        color: "#000",
                                        padding: "15px 30px",
                                        "&:hover": {
                                            backgroundColor: "#000",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    Drop
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </div >
        </>
    );
}

export default AddProduct;
