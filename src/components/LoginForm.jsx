import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

// ... (your imports)

// class LoginForm extends Component {
//   state = { account: { username: "", password: "" }, errors: {} };

//   schema = {
//     username: Joi.string().required().label("Username"),
//     password: Joi.string().required().label("Password"),
//   };

//   validate = () => {
//     const options = { abortEarly: false };
//     const { error } = Joi.validate(this.state.account, this.schema, options);

//     return error
//       ? error.details.reduce((errors, item) => {
//           errors[item.path[0]] = item.message;
//           return errors;
//         }, {})
//       : null;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = this.validate();
//     this.setState({ errors: errors || {} });
//     if (errors) return;
//     // Call the server
//     console.log("Submitted");
//   };

//   validateProperty = ({ name, value }) => {
//     const { error } = Joi.validate(
//       { [name]: value },
//       { [name]: this.schema[name] }
//     );
//     return error ? error.details[0].message : null;
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const { name, value } = input;
//     const errorMessage = this.validateProperty(input);

//     this.setState((prevState) => ({
//       account: { ...prevState.account, [name]: value },
//       errors: { ...prevState.errors, [name]: errorMessage || undefined },
//     }));
//   };

//   render() {
//     const { account, errors } = this.state;

//     // Check if there are any errors in the errors object
//     const isFormInvalid = Object.values(errors).some((error) => error);

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={account.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           ></Input>
//           <Input
//             name="password"
//             value={account.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           ></Input>

//           <button disabled={isFormInvalid} className="btn btn-primary m-2">
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;
