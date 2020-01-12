import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle} from '../../firebase/firebase.utils';

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setState({
      email: "",
      password: ""
    });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setState({
      [name]: value
    });
  };
  console.log(state); 

  return (
    <div className="sign-in">
      <h2> I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={state.email}
          onChange={handleChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
        {/* <input type="submit" value="Submit Form" /> */}
      </form>
    </div>
  );
};

export default SignIn;
