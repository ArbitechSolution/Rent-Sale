import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Filter() {
    return (
        <div className='container bg-white BuyForm '>
            <div className="row  ">
                <div className="col-md-3  " >
                    <Form.Select size="md">
                        <option>Homes</option>
                        <option>Houses</option>
                        <option>Flats</option>
                        <option>Rooms</option>
                    </Form.Select>
                </div>

                <div className="col-md-3">
                    <Form.Select size="md">
                        <option>Bedrooms</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                    </Form.Select>
                </div>
               
            </div>
        </div>
    )
}
