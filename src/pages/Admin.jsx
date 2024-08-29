import React from 'react'
import AllProducts from './AllProducts'
import Sidebar from '../components/Sidebar'
import Stack from '@mui/material/Stack';
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct';
import ViewOrder from './ViewOrder';
import ManageReviews from './ManageReviews';





function Admin() {
    return (
        <>
            <Stack
                className="admin-wrapper" style={{backgroundColor:"#76453fee"}}
                sx={{
                    
                    flexDirection: "row",
                }}
            >
                <Sidebar />
                <Routes>
                    <Route path='/' element={<AllProducts />} />
                    <Route path='/products' element={<AllProducts />} />
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/orders' element={<ViewOrder/>}/>
                    <Route path='/reviews' element={<ManageReviews/>}/>

                </Routes>



            </Stack>

        </>
    )
}

export default Admin
