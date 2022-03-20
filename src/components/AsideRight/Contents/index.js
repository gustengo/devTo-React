import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";

function ContentRightAside() {
    return (
        <aside>
            <Card style={{ width: '18rem', marginTop: '1.3rem' }}>
                <Card.Body>
                    <Card.Img src='https://res.cloudinary.com/practicaldev/image/fetch/s--kDJc7-zC--/c_limit,f_auto,fl_progressive,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/27dovb400kn3e2bs0zh9.png' ></Card.Img>
                    <b>
                        <Card.Link href="#">Deepgram x DEV Hackathon (15)</Card.Link>
                    </b>
                    <Card.Text>[Deepgram x DEV Hackathon Submission Post Placeholder Title]</Card.Text>

                    <Card.Text>[Deepgram x DEV Hackathon Submission Post Placeholder Title]</Card.Text>

                    <Card.Text>Tutorial: Play with a Speech-to-Text API using Node.js</Card.Text>

                    <Card.Text>Join us for a new kind of hackathon on DEV — brought to you by Deepgram!</Card.Text>

                    <Card.Text>Let's get Hacking</Card.Text>

                    <Button variant="primary">Submit your project!</Button>{' '}
                    <Button variant="secondary">See all your posts</Button>

                </Card.Body>
            </Card>
            <Card style= {{width: '18rem', marginTop: '1.3rem'}}>

            </Card>
        </aside>
    )


}



export default ContentRightAside