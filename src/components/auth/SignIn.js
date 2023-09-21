import { CognitoUser } from "amazon-cognito-identity-js";
import { UserPool } from "./UserPool";

export function signIn(username, password) {
  const userData = {
    Username: username,
    Pool: UserPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(
    new CognitoUser.AuthenticationDetails({
      Username: username,
      Password: password,
    }),
    {
      onSuccess: (result) => {
        console.log("Access token:", result.getAccessToken().getJwtToken());
        return {
          result,
          succes: true,
        };
      },
      onFailure: (err) => {
        console.error(err);
        return {
          result: err,
          succes: false,
        };
      },
    }
  );
}
