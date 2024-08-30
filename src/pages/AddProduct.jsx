import { Button, Stack, TextField } from '@mui/material'
import React from 'react'

function AddProduct() {
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
                                <TextField id="outlined-basic" label="Product Name" variant="outlined" color="blue" name="name" />
                            </Stack>

                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                <TextField id="outlined-basic" label="Category" variant="outlined" color="blue" name="category" />
                            </Stack>

                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                <TextField id="outlined-basic" label="$ Price" variant="outlined" color="blue" name="category" />
                            </Stack>

                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                <TextField id="outlined-basic" label="Description" variant="outlined" color="blue" name="description" />
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
                                        // onChange={imageHandler}
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
                                    sx={{

                                        widht: "auto",
                                        backgroundColor: "white",
                                        color: "#000",
                                        padding: "15px 30px",
                                        "&:hover": {
                                            backgroundColor: "#000",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    Add Product
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>





                </Stack>
            </div >
        </>
    )
}

export default AddProduct
