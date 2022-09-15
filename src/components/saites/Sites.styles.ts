import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sites: {
      display: 'flex',
      flexDirection: 'column',

    },
    title: {
      margin: '0',
      padding: '0',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
          fontSize: "16px",
      }
    },
    link: {
      fontSize: '12px',
      textDecoration: 'none',
      color: 'white'
    }
  })
);