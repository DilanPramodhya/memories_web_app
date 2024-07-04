import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      marginTop: "20px",
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
  paper: {
    // padding: theme.spacing(2),
      marginLeft: "20px",
      marginRight: "20px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    alignItems: "center",
    width: "86%",
    margin: "20px 0",
  },
  buttonSubmit: {
    gap: "5px",
    marginBottom: 10,
  },
}));
