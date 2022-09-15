import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    copyright: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      paddingTop: "5px"
      }
    },
    title: {
      color: 'white',
      padding: '0 0 0 10px',
      lineHeight: '18px',
      [theme.breakpoints.down('xs')]: {
        fontSize: "16px"
      },

    },
  textCopy: {
        color: 'white', 
          [theme.breakpoints.down('xs')]: {
       fontSize: "12px"
      }
      }
  })
);