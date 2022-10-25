import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Filter from './Filter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Buy.css"

export default function Rent() {

  const [select, setSelect] = useState(false)

  let showFilter = () => {
    setSelect(!select)

  }
  return (

    <>
      <div className='container bg-white BuyForm '>
        <div className="row ">
          <div className="col-lg-3 col-md-6 " >
            <Form.Select size="md">
              <option selected disabled>Factories</option>
              <option>Houses</option>
              <option>Flats</option>
              <option>Rooms</option>
            </Form.Select>

          </div>

          <div className="col-lg-6 col-md-6">

            <Form.Select size="md">
              <option selected>Location</option>
              <option>Sheikhupura</option>
              <option>Saggian</option>
              <option>JaranWala</option>
              <option>Multan Road</option>
              <option>Band Road</option>
            </Form.Select>
          </div>
          <div className="search-filter-div col-lg-3 col-md-6 d-flex  align-items-center ">
            <div className='search-div '>
              <button className='Search-button'  >
                Search
              </button>
            </div>
            <div className='dropdown-filter ' onClick={showFilter}>

              <span>MoreFilters<ArrowDropDownIcon /></span>
            </div>
          </div>
        </div>
      </div>
      {
        select ? <Filter /> : ""
      }


    </>
  )
}
