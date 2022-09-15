import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Background from '../../assets/background.jpg'

export const useStyles = makeStyles((theme: Theme) =>

  createStyles({
    mainPage: {
      paddingBottom: '120px',
      background: "transparent",
      
    },
    item:{paddingBottom: "20px"},
    title: {
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "30px"
    },
    tags: {
      [theme.breakpoints.down('xs')]: {
        display: "flex",
        flexDirection: "column"
      }
    },
    tag: {
      margin: "0 5px!important",
      backgroundColor: "	rgba(88,88,88, 0.7)!important",
      fontWeight: "bold",
      borderRadius: "16px!important"
    },
    active: {color: "red"},
    author: {
      fontStyle: "italic",
      fontSize: '14px'
    },
    tagName: {
      paddingRight: '20px',
      fontSize: '16px',
      textAlign: "center"
    }
  })
);