import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
export const SlideShow = (props)=>{
    return (
        <MDBCarousel showControls showIndicators >
         {
         
         props.banners.map(banner=>(
            <MDBCarouselItem
            itemId={banner.id}
            key={banner.id}
            src={banner.image}
            alt='...'
          />
          ))
          
         } 
        </MDBCarousel>
      );
}