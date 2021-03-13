import {makeStyles, ThemeProvider} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  containedText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px'

  },
  icon: {
    marginRight: '20px',
  },
  textArea: {
    width: '600px',
	  height: '120px',
	  border: '3px solid #cccccc',
	  padding: '5px',
  },
  button: {
    marginTop: '40px'
  },
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'

  },
  cardMedia: {
    paddingTop: '56.25%' //16:9 ratio
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0'
  }
}));

export default useStyles;