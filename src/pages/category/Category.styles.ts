import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      categoryPage: {
      paddingBottom: '250px',
      background: "transparent",
      
    },
    card: {
      maxWidth: "300px",
      minWidth: "300px",
      minHeight: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    active: {
      color: "blue"
    },
    btn: {
      "& span": {
        fontWeight: 700,
        fontSize: '10px',
        }
    },
    btns: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "20px"
    },
    containerStyle: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
        justifyContent: "center",
      }
    },
  })
);