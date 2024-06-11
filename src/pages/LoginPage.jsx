import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const handleSubmit = () => {};
  return (
    <div className="loginPage-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="email" {...register("email")} />
          <input type="password" {...register("password")} />
          <button type="submit">Login</button>
          <h3>OR</h3>
          <div>Redeem Login Code</div>
          <div>Forgot your password?</div>
        </form>
      </div>
    </div>
  );
}
