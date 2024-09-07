import React from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faMessage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMedapps } from '@fortawesome/free-brands-svg-icons';
function Sidebar() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#a3706b96',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'left',
        fontSize: "17px",
        color: theme.palette.text.secondary,
        ...theme.applyStyles('', {
        }),
    }));
    return (
        <>
            <div className='maindiv pt-1' style={{ height: "100vh",width:"20%" }}>

                <Stack className='p-2 ms-5  stack-div  rounded-4   ' style={{ height: "80vh", marginTop: "-8px" }}

                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Link className='rounded-4' to={'/products'} style={{ textDecoration: "none", backgroundColor: "#a3706b96" }}>
                        <Item className='rounded-4 text-light '> <FontAwesomeIcon icon={faBars} style={{color: "#fafafa",}} className='me-2' />View Products</Item>
                    </Link>
                    <Link className='rounded-4' to={'/add-product'} style={{ textDecoration: "none", backgroundColor: "#a3706b96" }}>
                        <Item className='rounded-4  text-light ' style={{ marginTop: "-20px" }}> <FontAwesomeIcon icon={faPlus} style={{color: "#fafafa",}} className='me-2' /> Add Product </Item>
                    </Link>
                    <Link className='rounded-4' to={'/orders'} style={{ textDecoration: "none", backgroundColor: "#a3706b96" }}>
                        <Item className='rounded-4  text-light ' style={{ marginTop: "-20px" }}> <FontAwesomeIcon icon={faBagShopping} style={{color: "#fafafa",}} className='me-2'  /> View Orders</Item>
                    </Link>
                    <Link className='rounded-4' to={'/reviews'} style={{ textDecoration: "none", backgroundColor: "#a3706b96" }}>
                        <Item className='rounded-4  text-light ' style={{ marginTop: "-20px" }}><FontAwesomeIcon icon={faMessage} style={{color: "#fafafa",}} className='me-2'/> Manage Comments </Item>
                    </Link>
                    {/* <Link className='rounded-4' to={'/products'} style={{ textDecoration: "none", backgroundColor: "#a3706b96" }}>
                        <Item className='rounded-4  text-light ' style={{ marginTop: "-20px" }}> Add Item </Item>
                    </Link>                 */}
                    </Stack>
                {/*   background-color: #76453ff5; */}
            </div>
        </>
    )
}

export default Sidebar
