import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formPage: {
      paddingBottom: '150px',
      background: "transparent",
    },
    introducions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px"
    }
  })
);