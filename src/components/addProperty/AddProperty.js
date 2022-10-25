import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./AddProperty.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import WovenImageList from "./imageList";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PhoneNumber from "../MobilePhone.js/Mobile";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
function AddProperty() {
  const [buttonColor, setButtonColor] = useState("");
  const [buttonColorDown, setButtonColorDown] = useState("");
  const [buttonColorLowerDownTwo, setButtonColorLowerDownTwo] = useState("");

  const [selectedValue, setSelectedValue] = useState("New Member (Free)");
  const [checked, setChecked] = useState(true);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("event.target.value", event.target.value);
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);

    console.log("event.target.checked", event.target.checked);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="addProperty-h3">Add a Property</h1>
        </div>

        <div className="col-lg-12 ps-md-5 mt-4">
          <span className="act-title">General Information :</span>
        </div>
      </div>
      <div className="row d-flex flex-column ">
        <div className="col-4 ps-md-4 mt-4 ">
          <span className="addproperty-span">Property For * :</span>
        </div>
        <div className="col-lg-8 ps-md-4 ">
          <div className="row">
            <div className="col-lg-3">
              <div className="d-grid gap-2">
                <button
                  className={
                    buttonColor == "Sale" ? "btn-sale-active" : "btn-sale"
                  }
                  size="lg"
                  primary="Sale"
                  onClick={() => setButtonColor("Sale")}
                >
                  Sale
                </button>
              </div>
            </div>
            <div className="col-lg-3 ps-md-4">
              <div className="d-grid gap-2">
                <button
                  primary="Rent"
                  className={
                    buttonColor == "Rent" ? "btn-sale-active" : "btn-sale"
                  }
                  onClick={() => setButtonColor("Rent")}
                >
                  Rent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex flex-column ">
        <div className="col-4 ps-md-4 mt-2">
          <span className="addproperty-span">Type</span>
        </div>
        <div className="col-lg-8 ps-md-4">
          <div className="row">
            <div className="col-lg-2">
              <div className="d-grid gap-2">
                <button
                  className={
                    buttonColorDown == "Homes"
                      ? "btn-sale-active-down"
                      : "btn-sale-down"
                  }
                  size="lg"
                  primary="Homes"
                  onClick={() => setButtonColorDown("Homes")}
                >
                  Homes
                </button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="d-grid gap-2">
                <button
                  primary="Plots"
                  className={
                    buttonColorDown == "Plots"
                      ? "btn-sale-active-down"
                      : "btn-sale-down"
                  }
                  onClick={() => setButtonColorDown("Plots")}
                >
                  Plots
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-grid gap-2">
                <button
                  primary="Commercials"
                  className={
                    buttonColorDown == "Commercials"
                      ? "btn-sale-active-down"
                      : "btn-sale-down"
                  }
                  onClick={() => setButtonColorDown("Commercials")}
                >
                  Commercials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='row ps-md-1 mt-2 d-flex flex-wrap'>
            <div className='col-4 ps-md-3'>
                    <span className='addproperty-span'>Property For * :</span>
                </div>
                <div className='col-md-12'>
                    <button 
                    className={buttonColorLowerDown == "Houses" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Houses"
                    onClick={() => setButtonColorLowerDown("Houses")}
                    >
                        Houses
                    </button>
                    <button 
                    className={buttonColorLowerDown == "Flats" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Flats"
                    onClick={() => setButtonColorLowerDown("Flats")}
                    >
                        Flats
                    </button>
                    <button 
                    className={buttonColorLowerDown == "Rooms" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Rooms"
                    onClick={() => setButtonColorLowerDown("Rooms")}
                    >
                        Rooms
                    </button>
                    <button 
                    className={buttonColorLowerDown == "Uper Portions" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Uper Portions"
                    onClick={() => setButtonColorLowerDown("Uper Portions")}
                    >
                        Uper Portions
                    </button>
                    <button 
                    className={buttonColorLowerDown == "Lower Portions" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Lower Portions"
                    onClick={() => setButtonColorLowerDown("Lower Portions")}
                    >
                        Lower Portions
                        </button>
                    <button 
                    className={buttonColorLowerDown == "Farm Houses" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Farm Houses"
                    onClick={() => setButtonColorLowerDown("Farm Houses")}
                    >
                        Farm Houses
                    </button>
                    <button 
                    className={buttonColorLowerDown == "Penthouse" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Penthouse"
                    onClick={() => setButtonColorLowerDown("Penthouse")}
                    >
                        Penthouse
                    </button>
                </div>

            </div> */}

      {/* <div className='row mt-2'>
                <div className='col-4 ps-md-4'>
                    <span className='addproperty-span'>Property subtype * :</span>
                </div>
                <div className='col--lg-12'>
                <button 
                    className={buttonColorLowerDownOne == "Residential Plots" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Residential Plots"
                    onClick={() => setButtonColorLowerDownOne("Residential Plots")}
                    >
                        Residential Plots
                    </button>
                    <button 
                    className={buttonColorLowerDownOne == "Commercial Plots" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Commercial Plots"
                    onClick={() => setButtonColorLowerDownOne("Commercial Plots")}
                    >
                        Commercial Plots
                    </button>
                    <button 
                    className={buttonColorLowerDownOne == "Plots Files" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Plots Files"
                    onClick={() => setButtonColorLowerDownOne("Plots Files")}
                    >
                        Plots Files
                    </button>
                    <button 
                    className={buttonColorLowerDownOne == "Agricultural Land" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Agricultural Land"
                    onClick={() => setButtonColorLowerDownOne("Agricultural Land")}
                    >
                        Agricultural Land
                    </button>
                    <button 
                    className={buttonColorLowerDownOne == "Industrial Land" ? "btn-sale-down-lowerDOwn-Active m-1" : 'btn-sale-down-lowerDOwn m-1'} size="lg" primary="Industrial Land"
                    onClick={() => setButtonColorLowerDownOne("Industrial Land")}
                    >
                        Industrial Land
                    </button>
                </div>
            </div> */}
      <div className="row mt-2 ">
        <div className="col-4 ps-md-4 ">
          <span className="addproperty-span">Property subtype * :</span>
        </div>
        <div className="col-lg-12 ps-sm-3 ">
          <button
            className={
              buttonColorLowerDownTwo == "Buildings"
                ? "btn-sale-down-lowerDOwn-Active m-1"
                : "btn-sale-down-lowerDOwn m-1"
            }
            size="lg"
            primary="Buildings"
            onClick={() => setButtonColorLowerDownTwo("Buildings")}
          >
            Buildings
          </button>
          <button
            className={
              buttonColorLowerDownTwo == "Shops"
                ? "btn-sale-down-lowerDOwn-Active m-1"
                : "btn-sale-down-lowerDOwn m-1"
            }
            size="lg"
            primary="Shops"
            onClick={() => setButtonColorLowerDownTwo("Shops")}
          >
            Shops
          </button>
          <button
            className={
              buttonColorLowerDownTwo == "Offices"
                ? "btn-sale-down-lowerDOwn-Active m-1"
                : "btn-sale-down-lowerDOwn m-1"
            }
            size="lg"
            primary="Offices"
            onClick={() => setButtonColorLowerDownTwo("Offices")}
          >
            Offices
          </button>
          <button
            className={
              buttonColorLowerDownTwo == "Factories"
                ? "btn-sale-down-lowerDOwn-Active m-1"
                : "btn-sale-down-lowerDOwn m-1"
            }
            size="lg"
            primary="Factories"
            onClick={() => setButtonColorLowerDownTwo("Factories")}
          >
            Factories
          </button>
          <button
            className={
              buttonColorLowerDownTwo == "Warehouses"
                ? "btn-sale-down-lowerDOwn-Active m-1"
                : "btn-sale-down-lowerDOwn m-1"
            }
            size="lg"
            primary="Warehouses"
            onClick={() => setButtonColorLowerDownTwo("Warehouses")}
          >
            Warehouses
          </button>
        </div>
      </div>
      <div className="row d-flex flex-column mt-3">
        <div className="col-4 ps-md-4 ">
          <span className="addproperty-span">City: *</span>
        </div>
        <div className="col-lg-4 ps-md-4 mt-1">
          <select class="form-select" aria-label="Default select example">
            <option selected>Location</option>
            <option value="1">Sheikhupura</option>
            <option value="2">Saggian</option>
            <option value="2">Multan Road</option>
            <option value="3">Band Road</option>
          </select>
        </div>
      </div>

      <hr
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.515)",
          marginTop: "50px",
        }}
      />

      <div className="row">
        <div className="col-lg-12 ps-md-4">
          <h5>Property Details :</h5>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className="form-label addproperty-span"
            >
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className="form-label addproperty-span"
            >
              Description
            </label>
            <TextField
              multiline
              rows={4}
              fullwidth
              type="text"
              className="form-control"
              id="exampleInputtext"
              aria-describedby="description"
            />
          </div>
        </div>
      </div>
      <hr
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.515)",
          marginTop: "50px",
        }}
      />

      <div className="row">
        <div className="col-lg-12 ps-md-4">
          <h5>Property Images :</h5>
        </div>
        <div className="col-lg-12">
          <div className="mb-3">
            <Tabs
              defaultActiveKey="Buy"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab className="RentTab" eventKey="Buy" title="Photos">
                <WovenImageList />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <hr
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.515)",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      />

      <div className="row">
        <div className="col-lg-12 ps-md-4">
          <h5>Membership Status :</h5>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={"New Member (Free)"}
              >
                <FormControlLabel
                  value="Existing Member"
                  checked={selectedValue === "Existing Member"}
                  onChange={handleChange}
                  control={<Radio />}
                  label="Existing Member"
                />
                <FormControlLabel
                  value="New Member (Free)"
                  checked={selectedValue === "New Member (Free)"}
                  onChange={handleChange}
                  control={<Radio />}
                  label="New Member (Free)"
                />
              </RadioGroup>
            </FormControl>
            {selectedValue && selectedValue == "Existing Member" ? (
              <>
                <div class="form-outline mb-4 mt-4">
                  <label class="form-label" for="loginName">
                    Email or username
                  </label>
                  <input
                    type="email"
                    id="loginName"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="loginPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control"
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div class="form-outline mb-4 mt-4">
                  <label class="form-label" for="loginName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="loginName"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-outline mb-4 mt-4">
                  <label class="form-label" for="loginName">
                    Email
                  </label>
                  <input
                    type="email"
                    id="loginName"
                    class="form-control"
                    required
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="loginPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="loginPassword">
                    Password Repeat
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-outline mb-4">
                  <PhoneNumber />
                </div>
                <div class="form-outline mb-4">
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      defaultValue={"Individual"}
                    >
                      <FormControlLabel
                        value="Individual"
                        control={<Radio />}
                        label="Individual"
                      />
                      <FormControlLabel
                        value="Agent"
                        control={<Radio />}
                        label="Agent"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div class="form-outline mb-4">
                  <Checkbox
                    // {...label}
                    checked={checked}
                    onChange={handleChecked}
                    defaultChecked
                  />
                  {/* <Checkbox {...label} defaultChecked size="small" /> */}
                  <label class="form-label" for="loginPassword">
                    By logging in, you agree to realproperty terms & conditons
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="form-outline mb-4 d-flex justify-content-end">
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
}

export default AddProperty;
