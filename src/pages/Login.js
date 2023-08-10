import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react'; // Importing the Authenticator component from AWS Amplify UI
import '@aws-amplify/ui-react/styles.css'; // Importing CSS styles for AWS Amplify UI components

const Login = () => {
    return (
        <div class ="output-container">
            <Authenticator hideSignUp={true} variation="default">
               {({ signOut}) => (
                  <div>
                    <h1>Hello, Welcome to the Self Service Dashboard!</h1>
                    <h3>You are authenticated</h3>
                    <button onClick={signOut}>Sign Out</button>
                  </div>               
               )} 
            </Authenticator>
        </div>
    )
}

export default Login;

