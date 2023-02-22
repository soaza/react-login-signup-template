import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await fetch("http://localhost:5001/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
      } else {
        localStorage.setItem("token", data.token);
        return navigate("/login");
      }
    });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        {...register("username", { required: true })}
        placeholder="Username"
      />
      {errors.username && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register("password", { required: true })}
        placeholder="Password"
      />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      {/* <input type="submit" /> */}
      <button type="submit">Sign Up</button>
    </form>
  );
}
