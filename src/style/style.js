import {makeStyles} from "@material-ui/core";
import back from '../assets/cool-background.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '49.3em',
        margin: '0px',
        padding: '0px',
        backgroundImage: `url(${back})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    },
    neutral: {
        backgroundColor: "grey"
    },
    negative: {
        backgroundColor: "red"
    },
    positive: {
        backgroundColor: "green"
    },
    predicted: {
        width: '100%',
        margin: '0%',
        color: "white",
        textAlign: "center",
        padding: "3px",
        borderRadius: "3px"
    },
    box: {
        width: '75%',
        margin: 'auto auto',
        padding: '10em',
    },
    btn: {
      cursor: 'pointer',
        color: 'white'
    },
    form: {
        display: 'flex',
        margin: 'auto',
        width: '100%'
    },
    input: {
        margin: '0%',
        width: '100%',
        border: 'none',
        height: '100px',
    },
}))

export default  useStyles;