import Button from '@mui/material/Button';
import React from "react";
import './App.css';


function App() {
return(
  <Pricecart/>
)
}
function Pricecart(){
  let priceList = [{
    "cost":"free",
    "rate":"0",  
    "user":"✓single user",
    "storage":"✓5GB storage",
    "public":"✓unlimited public project",
    "community":"✓community access",
    "private":"×unlimited private project",
    "support":"×Dedicated Phone Support",
    "subdomain":"×Free Subdomain",
    "status":"×Monthly status Report"
       },
       {
        "cost":"plus",
        "rate":"3",
        "user":"✓5 user",
        "storage":"✓50GB storage",
        "public":"✓unlimited public project",
        "community":"✓community access",
        "private":"✓unlimited private project",
        "support":"✓Dedicated Phone Support",
        "subdomain":"✓Free Subdomain",
        "status":"×Monthly status Report"
           },
           {
            "cost":"pro",
            "rate":"5",
            "user":"✓unlimited users",
            "storage":"✓15GB storage",
            "public":"✓unlimited public project",
            "community":"✓community access",
            "private":"✓unlimited private project",
            "support":"✓Dedicated Phone Support",
            "subdomain":"✓Free Subdomain",
            "status":"✓Monthly status Report"
               },
      ]
  return(
<div className="pricelist">
{priceList.map((mv)=>(
  <Cart priceList={mv} />
))}
</div>
  )
};

function Cart({ priceList}){
  
  
  return(
    <div className="cart-container">
       <div className="sub-container">
       <h2 className='cost'>{priceList.cost}</h2>
       <h2 className="rate">${priceList.rate}<span>/month</span></h2>
       
       </div>
       <hr />
    <div className="ulcontainer">
    <h2 className="user">{priceList.user}</h2>
       <h2 className="storage">{priceList.storage}</h2>
       <h2 className="public">{priceList.public}</h2>
       <h2 className="community">{priceList.community}</h2>
       <h2 className="private">{priceList.private}</h2>
       <h2 className="support">{priceList.support}</h2>
       <h2 className="status">{priceList.status}</h2>
    </div>
   <div className="button" >  <Button variant="contained" className='btn'>button</Button></div>
  
      </div>
    
    )

}

export default App;