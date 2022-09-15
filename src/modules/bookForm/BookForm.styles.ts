import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      maxHeight: "100%",

    },
    paper:{
      padding: "10px"
    },
  })
);