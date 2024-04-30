//import { GoogleLogin } from "@react-oauth/google";
//import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GAuth = () => {
  /*For custom Buttom */
  const Navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        Navigate("/dashboard", { state: { val: res.data } });
      } catch (err) {
        alert(err);
      }
    },
  });
  return (
    <button
      onClick={() => login()}
      className="bg-darkblue text-white flex  justify-center items-center p-3 space-x-5"
    >
      <img src="./images/gicon.png" height={25} width={25} />
      <p>Sign in with Google 🚀</p>
    </button>
  );

  //The Code for data navigate by JWT_decode
  /*const Navigate = useNavigate();
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(jwtDecode(credentialResponse.credential));
          Navigate("/dashboard", {
            state: { val: jwtDecode(credentialResponse.credential) },
          });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px", backgrounColor: "blue" }}
        isSignedIn={true}
      />
      ;
    </>
  );*/
};

export default GAuth;
