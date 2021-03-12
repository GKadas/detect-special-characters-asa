import logo from './logo.svg'
import {Typography, AppBar, TextareaAutosize, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import BeenhereSharpIcon from '@material-ui/icons/BeenhereSharp';
import useStyles from './styles';

function App() {

  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
            <TextareaAutosize
              className={classes.textArea}
              aria-label="minimum height"
              rowsMin={20}
              placeholder="Enter ASA show running-configuration output"
            />
          </Container>
          <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
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
