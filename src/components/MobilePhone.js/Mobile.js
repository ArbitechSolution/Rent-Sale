import React from "react";
// import MuiPhoneNumber from 'material-ui-phone-number'

import Box from "@mui/material/Box";
// import useStyles from "./useStyles";
import PhoneInput from "react-phone-input-2";
import "./style.css";

const Input = (props) => {
  //   const classes = useStyles();

  return (
    <Box pr={1} pl={1}>
      <Box pr={1}>
        {props.label || props.labels} : {props.req && <span>*</span>}
      </Box>
      <Box>
        <PhoneInput
          specialLabel={""}
          country={"pk"}
          inputStyle={{
            borderColor: props.touched && props.error && "red",
          }}
          {...props}
        />
        {props.touched && props.error && (
          <p
            style={{ color: "red" }}
            className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense"
          >
            {props.error}
          </p>
        )}
      </Box>
    </Box>
  );
};

const PhoneNumber = (props) => {
  return (
    <Input
      label={"Mobile"}
      req={true}
      helperText={""}
      error={true}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
    />
  );
};

export default PhoneNumber;
