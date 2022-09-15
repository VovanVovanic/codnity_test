import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socials: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
          flexDirection:"column"
      }
    },
    title: {
      margin: '0',
      padding: '0',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        fontSize: "16px",
        marginBottom: "10px"
      }
    },

    icon: {
      fontSize: '20px',
      textDecoration: 'none',
      color: 'blue',
      margin: '0 5px',
      padding: '0',
    }
  })
);
