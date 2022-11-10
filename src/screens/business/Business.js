import * as React from "react";
import { Link } from "react-router-dom";
export const Business = () =>{
    const listData =[
        {
            id: 496,
            name: "Doanh nghiep 1"
        },
        {
            id: 497,
            name: "Doanh nghiep 2"
        },
        {
            id: 498,
            name: "Doanh nghiep 3"
        },
    ]
    return (
        <>
            {
                listData.map((item, index)=>(
                    <p>
                        {item.name} 
                        <Link to={"/business-detail/"+item.id}> Xem chi tiet</Link>
                    </p>
                ))
            }
        </>
    )
}