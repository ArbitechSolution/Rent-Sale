import React from 'react'
import "./FindCities.css"
import Card from 'react-bootstrap/Card';


export default function FindCities() {
    return (
        <div className='container card-container'>
            <div className="container card-Heading ">
                <h1>Find Properties in Your city</h1>
            </div>
            <div className="row card-row">
                <div className='card1 col-lg-6 '>
                    <Card className="cards bg-dark text-white ">
                        <Card.Img src="assets/place_lahore.jpg" alt="Card image" />
                        <Card.ImgOverlay>
            
                            <Card.Title><a href="/">Lahore</a></Card.Title>
                            <div className='textArea'>
                            <Card.Text className="cardText">
                                39935 Houses For Sale In Lahore
                            </Card.Text>
                            <Card.Text><a href="/">See all Listing</a></Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>


                </div>
                <div className='col-lg-6'>
                    <Card className="cards bg-dark text-white">
                        <Card.Img src="assets/place_islamabad.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><a href="/" >Lahore</a></Card.Title>
                            <div className='textArea'>
                            <Card.Text className="cardText">
                                39935 Houses For Sale In Lahore
                            </Card.Text>
                            <Card.Text  ><a href="/">See all Listing</a></Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>


                </div>
            </div>

        </div>
    )
}
