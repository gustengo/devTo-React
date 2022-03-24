import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import "./ContentListingStyle.scss"
function HastagCard() {
    return (
        <aside>
            <Card style={{ width: '16rem', marginTop: '1.3rem' }}>
                <Card.Body>
                    <div id="cardContent">
                        <Card.Title> #help </Card.Title>
                        <span>
                            see all
                        </span>
                    </div>
                    <Card.Text> //AlmaLinux Mailing Lists Now Available! </Card.Text> 
                    <Button variant="warning">New</Button>
                    <Card.Text> //How to add Vue to a Laravel app?</Card.Text> 
                    <Button variant="warning">New</Button>
                </Card.Body>
            </Card>
        </aside>
    )
}

export default HastagCard
