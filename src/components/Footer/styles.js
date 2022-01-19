import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footerBar: {
    width:"100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    background: "#e3e3e3",
    display: "flex",
    justifyContent: "center",
    alignItems:"baseline"
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
}));
