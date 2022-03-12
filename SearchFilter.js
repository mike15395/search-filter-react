import React, { useState } from "react";
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Input, InputGroup, InputGroupText } from "reactstrap";

export default function SearchFilter() {

    const [filterText, setFilterText] = useState("");

    const products = [{
        name: "mobile",
        price: "15000",
        rating: "4.5",
        imgurl: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"

    },{
        name: "webcam",
        price: "1980",
        rating: "4.2",
        imgurl: "https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMFRONTECH-FT-JAIN95507C0CB11E2/0..jpg?imwidth=320&impolicy=hq"

        },
        {
        name: "pendrive",
        price: "395",
        rating: "4.5",
        imgurl:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/f1f70c44-a0d8-4342-8158-eb1d547b1de3.__CR0,99,1275,789_PT0_SX970_V1___.jpg"

    },{
        name: "keyboard",
        price: "1399",
        rating: "4.5",
        imgurl:"https://previews.123rf.com/images/vasilyrosca/vasilyrosca2002/vasilyrosca200200188/140286409-laptop-keyboard-computer-isolated-white-key-button-board-for-digital-pc.jpg"

    },{
        name: "Mouse",
        price: "645",
        rating: "4.5",
        imgurl:"https://resource.logitechg.com/w_460,c_limit,q_auto,f_auto,b_rgb:f4f4f4,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/refreshed-g203/g203-hero.png?v=1"

    },{
        name: "Micro SD card",
        price: "189",
        rating: "4.5",
        imgurl:"https://stormsend1.djicdn.com/tpc/uploads/photos/35431/large_fca33c91-f1a0-4de1-97f4-8f586a9e7766.jpg"

    }
    ]
    return (
        <>
            <InputGroup>
                
                <InputGroupText>Search for products</InputGroupText>
          
                <Input value={filterText} onChange={ (event)=> (setFilterText(event.target.value))}/>
            </InputGroup>
            
            <CardGroup>
                <div className="productsContainer d-flex ">
                {products.filter((products)=>(products.name.includes(filterText))).map((item)=> (<Card>
                    <CardImg  src={item.imgurl} height="200px" width="200px"  alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle>₹{item.price}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="success">Buy</Button>
                    </CardBody>

                </Card>)) }
                </div>
                
            </CardGroup>
            
            
        </>
    );
}