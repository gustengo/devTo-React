import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import "./ContentListingStyle.scss"
function HastagCard2() {
    return (
        <aside>
            <Card style={{ width: '16rem', marginTop: '1.3rem' }}>
                <Card.Body>
                    <div id="cardContent">
                        <Card.Title> #discuss </Card.Title>
                        <span>
                            see all
                        </span>
                    </div>
                    <Card.Text> What is your best skill as a developer? </Card.Text>
                    <Card.Text> How do you deal with estimates? </Card.Text>
                    <Card.Text> New(er) to coding and I LOVE IT. </Card.Text>
                    <Button variant="warning">New</Button>
                    <Card.Text> What is your best soft skill?. </Card.Text>
                    <Card.Text> 6 tips: Finding your balance as a mother and software engineer </Card.Text>
                    <Button variant="warning">New</Button>
                </Card.Body>
            </Card>
        </aside>
    )
}

export default HastagCard2