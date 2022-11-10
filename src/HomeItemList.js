import { MDBRow, MDBContainer, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol} from "mdb-react-ui-kit"
    import StarsRating from 'react-star-rate';
export const HomeItemList = (props) =>{
    return(
        <MDBContainer>
             <MDBRow>
             <h1>{props.title}</h1>
            <a href={props.link}>Xem tat ca</a>
          
             </MDBRow>
           <MDBRow>
           {
                    props.data.map((item, index)=>(
                        <MDBCol size='md'>   
            <MDBCard>
               {
             props.type==="media"?
             <iframe
             src={item.image}
             title="YouTube video"
             allowfullscreen
           ></iframe>
                :
                    <MDBCardImage src={item.image} position='top' alt='...' />
                
               }
     
      <MDBCardBody>
        <MDBCardTitle>{item.name}</MDBCardTitle>
        <MDBCardText>
        <StarsRating
        value={item.rating}
      />
            </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
            </MDBCol>
                    ))
                }
            
           
   
           </MDBRow>
            
  
      </MDBContainer>
    );
}