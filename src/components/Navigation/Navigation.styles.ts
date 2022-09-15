import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none'
    },
    active: {
      color: "blue"
    },
    btn: {
      "& span": {
        fontWeight: 700,
        fontSize: '10px',
      [theme.breakpoints.down('xs')]: {
          fontSize: "8px",
      }
        }
    }
  })
);