import React from 'react'

function Modal() {
     //modal start
     const [open, setOpen] = React.useState(false)
     const handleOpen = () => {
         setOpen(true);
     };
     const handleClose = () => {
         setOpen(false);
     };
  return (
    <>
                                    <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                >

                                    <Stack className='hii'
                                        sx={{
                                            backgroundColor: "",
                                            padding: "30px",
                                            borderRadius: "12px",
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: " 50%",
                                            border: '0px solid #000',
                                            boxShadow: 24,
                                            pt: 2,
                                            px: 4,
                                            pb: 3,
                                        }}
                                    >
                                        <p className='text-light ms-4 mt-3' style={{ fontSize: "32px", fontWeight: "bold" }} >Update Product</p>

                                        <Stack
                                            sx={{
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                justifyContent: "space-between",
                                            }}
                                        >

                                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                                <TextField id="outlined-basic" label="Product Name" variant="outlined" color="light" name="name" value={item.productName} />
                                            </Stack>

                                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                                <TextField id="outlined-basic" label="Category" variant="outlined" color="blue" name="category" value={item.category} />
                                            </Stack>

                                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                                <TextField id="outlined-basic" label="$ Price" variant="outlined" color="blue" name="price" value={item.price} />
                                            </Stack>

                                            <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                                <TextField id="outlined-basic" label="Description" variant="outlined" color="blue" name="description" value={item.description} />
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
                                                    Update
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Modal>
      
    </>
  )
}

export default Modal
