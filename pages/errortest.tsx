import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
}));




function errortest() {
    const classes = useStyles({});
    const [open, setState] = React.useState(false);

    const handleClose = () => {
        setState(false);
    };
    const handleClick = () => {
        setState(true);
    };
        return (
            <div>
            <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" integrity="sha256-HtCCUh9Hkh//8U1OwcbD8epVEUdBvuI8wj1KtqMhNkI=" crossorigin="anonymous" />
            </head>
                <body>
                    <center>
                    <h1 class="animated shake">404. That's an error! </h1>
                    <img src="../static/images/error.gif" class="animated fadeIn delay-2s"></img>
                    <div class="animated fadeIn delay-4s">
                            <p>Try this: <a href="/">Home</a>!</p>
                    </div>
                    </center>
                </body>
            </div>
                )
            }
        
export default errortest;
