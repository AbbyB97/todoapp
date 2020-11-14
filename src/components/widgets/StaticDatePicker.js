import React, { Fragment } from "react";
import { DatePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import green from "@material-ui/core/colors/green";

function StaticDatePicker(props) {
  // const [selectedDate, handleDateChange] = useState(new Date());
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
          label="Select Date"
          autoOk
          variant="inline"
          format="dd-MM-yyyy"
          value={props.taskDate}
          onChange={props.setTaskDate}
          orientation="landscape"
        />
      </ThemeProvider>
    </Fragment>
  );
}

export default StaticDatePicker;
