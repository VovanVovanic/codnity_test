
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      background: 'rgb(80,220,100)',
      height: '120px',
      "& div": {
        justifyContent: 'space-between'
      }
    },
    mainTitle: {
      fontSize: "26px",
      paddingBottom: "10px",
    [theme.breakpoints.down('sm')]: {
          fontSize: "20px",
      }
    },
    title: {
      position: "absolute",
      top: "80px",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "30px",
      [theme.breakpoints.down('sm')]: {
        top: "90px"
      }
    },

    btn: {
      "& span": {
        fontSize: '10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '8px',
      }
        }
    }
  })
);