import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Background from '../../assets/background.jpg'

export const useStyles = makeStyles((theme: Theme) =>

  createStyles({
    overlay: {
      background:  `url(${Background})`,
      opacity: 0.8,
      flexGrow: 3
    }
  })
);