import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: "20px",
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
  paper: {
      marginLeft: "20px",
      marginRight: "20px",
      border: "1px solid"
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
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px"
  },
}));
