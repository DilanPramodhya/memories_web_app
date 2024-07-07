import GoogleLogin from "react-google-login";
import useStyles from "./Styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const clientId =
  "406082678075-m24qa5ngqct1hea4u50c3ch9no98rf3s.apps.googleusercontent.com";

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = async (res) => {
    // console.log("Login Success", res.profileObj);
    // console.log(res.tokenId);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      // console.log(result, token)

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onFailure = (res) => {
    console.log("Login Success", res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        className={classes.googleButton}
        clientId={clientId}
        buttonText="Google Sign In"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
