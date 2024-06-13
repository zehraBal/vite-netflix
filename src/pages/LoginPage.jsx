import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const formSubmit = (formData) => {
    console.log(formData);
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        console.log(res.data);
        history.push("/profiles");
      })
      .catch((err) => console.warn(err));
  };
  return (
    <div className="loginPage-container">
      <div className="transparent">
        <div className="form-container">
          <form onSubmit={handleSubmit(formSubmit)}>
            <h1>Login</h1>
            <div className="input-container">
              <label htmlFor="email">
                <input
                  className="input-field"
                  type="email"
                  {...register("email", {
                    required: "E-mail field cannot be left blank",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid e-mail address.",
                    },
                  })}
                  placeholder="E-mail or mobile phone number"
                />
              </label>
              {errors.email && (
                <p style={{ color: "red" }} className="error">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="password">
                <input
                  className="input-field"
                  type="password"
                  {...register("password", {
                    required: "Password field cannot be left blank",
                    minLength: {
                      value: 4,
                      message:
                        "Your password must be between 4 and 60 characters.",
                    },
                    maxLength: {
                      value: 60,
                      message:
                        "Your password must be between 4 and 60 characters.",
                    },
                  })}
                  placeholder="Password"
                  required
                />
              </label>
              {errors.password && (
                <p style={{ color: "red" }} className="error">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="input-container">
              <button type="submit">Login</button>
            </div>
            <p style={{ textAlign: "center" }}>OR</p>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "rgba(128, 128, 128, 0.3)",
              }}
            >
              Redeem Login Code
            </div>
            <div style={{ textAlign: "center" }}>Forgot your password?</div>
          </form>
        </div>
      </div>
    </div>
  );
}
