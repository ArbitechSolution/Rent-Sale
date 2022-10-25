import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Buy from './Buy';
import Rent from './Rent';
import "./Tabs.css"


function SearchTab() {
    return (
        <div className='container Properties-Sale'>
            <div className="header-text col-md-10 text-center ">
                <h1>
                    Properties For Sale & Rent In Pakistan</h1>
            </div>
            <div className=" col-md-12 ">
                <Tabs
                    defaultActiveKey="Buy"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab className="RentTab" eventKey="Buy" title="Buy">
                        <Buy />
                    </Tab>
                    <Tab className="RentTab" eventKey="Rent" title="Rent">
                        <Rent />

                    </Tab>

                </Tabs>

            </div>

        </div>
    )
}

export default SearchTab