import React, { useEffect, useState } from 'react';
import { allCommentsApi } from '../services/allApi';


function ManageReviews() {
    const [allcomments, setAllComments] = useState([])

    const getAllComments = async () => {
        const result = await allCommentsApi()
        setAllComments(result.data)
        // console.log(result);


    }

    useEffect(() => {
        getAllComments()
    }, [])


    return (
        <>
            <div className='ms-5 me-5 rounded-4 ' style={{ width: "80%", backgroundColor: "#a3706b96", }}>
                <p className='text-light ms-4 mt-3' style={{ fontSize: "32px", fontWeight: "bold" }} >Manage Comments</p>
                <main className="app-content">
                    <div className="app-title" style={{ alignItem: "center" }}>

                    </div>

                    <div className="content" style={{ backgroundColor: "" }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12" >
                                    <div className="card card-plain" style={{ backgroundColor: "#a3706b96" }}>

                                        <div className="card-body">
                                            <div className="table-responsive"  >
                                                <table className="table table-hover" >
                                                    <thead className>
                                                        <tr><th style={{ backgroundColor: "#a3706b96" }}>
                                                            Phone
                                                        </th>
                                                            <th style={{ backgroundColor: "#a3706b96" }}>
                                                                name
                                                            </th>
                                                            <th style={{ backgroundColor: "#a3706b96" }}>
                                                                Complaint/Enquiry

                                                            </th>
                                                            <th style={{ backgroundColor: "#a3706b96" }}>Email
                                                            </th>
                                                        </tr></thead>
                                                    <tbody>
                                                        {allcomments?.length > 0 ?
                                                            allcomments?.map((item) => (
                                                                <tr  >
                                                                    <td style={{ backgroundColor: "#a3706b96", color: "white" }}>{item.number}
                                                                    </td>
                                                                    <td style={{ backgroundColor: "#a3706b96", color: "white" }}>
                                                                        {item.username}
                                                                    </td>
                                                                    <td style={{ backgroundColor: "#a3706b96", color: "white" }}>
                                                                        {/* <td style={{ backgroundColor: "#a3706b96", color: "white", wordWrap: "break-word" }}>This is a very long inquiry about the product availability and I need to make sure that it wraps properly without overflowing.</td> */}

                                                                        {item.comment}
                                                                    </td  >
                                                                    <td style={{ backgroundColor: "#a3706b96", color: "white" }}>{item.email}
                                                                    </td>
                                                                </tr>
                                                            ))
                                                            :
                                                            null

                                                        }



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
