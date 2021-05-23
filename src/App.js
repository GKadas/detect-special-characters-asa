import React, {useState, useRef} from 'react';
import {Typography, AppBar, TextField, Button, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import BeenhereSharpIcon from '@material-ui/icons/BeenhereSharp';
import useStyles from './styles';

function App() {

  const [txtValue, setTxtValue] = useState("")
  const valueRef = useRef('')
  const classes = useStyles();

  const sendValue = () => {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*/g;
    const matches = valueRef.current.value.match(format)

    if (matches != null) {
      alert ('Special characters detected \n' + matches)
      console.log(matches)
      return true;
    } else {
      alert ('Special characters not found')
      return false;
    }
  }

  function findSpecialCharacters () {
    const text = document.getElementsById("standard-multiline-static").defaultValue
    console.log(text)
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BeenhereSharpIcon className={classes.icon}/>
          <Typography variant="h6">ASA Running Config Parser</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="lg" justify="center" className={classes.containedText}>
            <TextField
              id="standard-multiline-static"
              className={classes.textArea}
              label="ASA Show Running Config"
              multiline
              rows={4}
              inputRef={valueRef}
            />
          </Container>
          <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={sendValue}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>
        </div>
      </main>
    </>
  );
}

export default App;
