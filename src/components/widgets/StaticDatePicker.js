import React, { Fragment, useState } from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import green from "@material-ui/core/colors/green";

function InlineDatePickerDemo(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: green,
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          // backgroundColor: green[900],
        },
      },
      MuiPickersToolbarText:{
        toolbarBtnSelected:{
          color:"#FFFF"
        },
        toolbarTxt:{
          color:"#FFFF"
        }
      }
    },
  });

  return (
    <Fragment>
      <ThemeProvider theme={defaultMaterialTheme}>
        <DatePicker
          variant="inline"
          value={selectedDate}
          onChange={handleDateChange}
          orientation="landscape"
        />
      </ThemeProvider>
    </Fragment>
  );
}

export default InlineDatePickerDemo;
