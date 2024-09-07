import React from 'react';


function ManageReviews() {


    return (
        <>
            <div className='ms-5 me-5 rounded-4 ' style={{ width: "80%", backgroundColor: "#a3706b96", height: "79vh" }}>
                <p className='text-light ms-4 mt-3' style={{ fontSize: "32px", fontWeight: "bold" }} >Manage Reviews</p>
                <main className="app-content">
                    <div className="app-title" style={{ alignItem: "center" }}>

                    </div>

                    <div className="content" style={{backgroundColor:""}}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12" >
                                    <div className="card card-plain"  style={{backgroundColor:"#a3706b96"}}>

                                        <div className="card-body">
                                            <div className="table-responsive"  >
                                                <table className="table table-hover" >
                                                    <thead className>
                                                        <tr><th  style={{backgroundColor:"#a3706b96"}}>
                                                            Phone
                                                            </th>
                                                            <th  style={{backgroundColor:"#a3706b96"}}>
                                                                Complaint/Enquiry
                                                            </th>
                                                            <th  style={{backgroundColor:"#a3706b96"}}>
                                                                Messages
                                                            </th>
                                                            <th  style={{backgroundColor:"#a3706b96"}}>Email
                                                            </th>
                                                        </tr></thead>
                                                    <tbody>

                                                        <tr  >
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>78897988
                                                            </td>
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>
                                                                oil
                                                            </td>
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>
                                                                product available?
                                                            </td  >
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>shani@gmail.com
                                                            </td>
                                                        </tr>
                                                        <tr  >
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>78897988
                                                            </td>
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>
                                                                oil
                                                            </td>
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>
                                                                product available?
                                                            </td  >
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>shani@gmail.com
                                                            </td>
                                                        </tr>
                                                        <tr  >
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>78897988
                                                            </td>
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>
                                                                oil
                                                            </td>
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>
                                                                product available?
                                                            </td  >
                                                            <td  style={{backgroundColor:"#a3706b96",color:"white"}}>shani@gmail.com
                                                            </td>
                                                        </tr>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default ManageReviews
