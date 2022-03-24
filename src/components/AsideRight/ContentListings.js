import React from "react";
import Card from "react-bootstrap/Card"
import "./ContentListingStyle.scss"

function ContentListings (){
    return(
        <aside>
            <Card style={{ width: '16rem', marginTop: '1.3rem' }}>
                <Card.Body>
                    <div id="cardContent">
                    <Card.Title> Listings </Card.Title>
                    <span>
                    see all
                    </span>
                    </div>
                    <Card.Text> Senior React Native Developer – Remote</Card.Text>
                    <Card.Text> Senior Go Developer – Remote</Card.Text>
                    <Card.Text> Senior Blochkchain Developer – Remote</Card.Text>
                    <Card.Text> Senior React Developer – Remote</Card.Text>
                    <Card.Text> MEDIASOUP COLLABORATION </Card.Text>
                    <Card.Text> Create a Listing</Card.Text>
                </Card.Body>
            </Card>
        </aside> 
    )
}

export default ContentListings
