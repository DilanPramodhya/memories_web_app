import { GoogleLogout } from "react-google-login";

const clientId =
  "406082678075-m24qa5ngqct1hea4u50c3ch9no98rf3s.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout Success");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
