import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
export const BusinessDetail = () =>{
    let params = useParams();
    const [detail, setDetail]= React.useState();
   React.useEffect(()=>{
    let id = params.id;
    axios.get('https://photo.azurecloud.vn/api/v1/businesses/detail/'+id)
    .then(res=>{
        let business = res.data.data.bussiness;
        setDetail(business);
       
    })
   },[]);
    return (
        <>
        Ten doanh nghiep: {detail?.name}
        <br/>
        sdt: {detail?.phone}
        </>
    )
}