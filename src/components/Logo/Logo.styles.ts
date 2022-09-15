import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Icon, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      icon: {
      width: '38px',
      height: '38px',
      [theme.breakpoints.down('xs')]: {
        display: "none"
      }
    },
    footerIcon: {
      cursor: 'pointer',
      width: '18px',
      height: '18px'
    },
  })
);