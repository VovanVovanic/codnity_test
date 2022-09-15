import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      background: "grey",
      minHeight: '90px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
        [theme.breakpoints.down('xs')]: {
          alignItems: 'flex_start',
           padding: '5px 0',
      }

    },
    footerContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',

    }
  })
);