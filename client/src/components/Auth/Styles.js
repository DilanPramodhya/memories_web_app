import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    "& .MuiTextField-root": {
      marginTop: "20px",
      marginRight: "20px",
    },
  },
  input: {
    display: "flex",
    gap: "8px",
  },
  avatar: {
    // backgroundColor: "#cc1b3e",
    backgroundColor: "gray",
    marginTop: "10px",
  },
  form: {
    width: "90%",
  },
  submit: {},
  googleButton: {
    // marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    marginLeft: "30%",
  },
  submitButton: {
    marginTop: "10px",
    marginBottom: "20px",
  },
}));
