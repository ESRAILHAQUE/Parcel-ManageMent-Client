import { useForm } from "react-hook-form";
import loginImg from '../../assets/Login/signup.png'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from './../../Providers/AuthProviders';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
function SignUp() {
  const { createUser } = useContext(Authcontext);
  const { googleSignIn } = useContext(Authcontext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
      console.log(result)
    })
  }
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email:data.email
    }
    createUser(data.email, data.password)
      .then(() => {
        axiosPublic.post('/users', userInfo)
          .then(res => {
            if (res.data.insertedId) {
              reset();
              navigate('/');
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully registered.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      })
      .catch((err) => {
       

        let errorMessage = "An error occurred. Please try again.";

        if (err.code === "auth/email-already-in-use") {
          errorMessage = "Email already registered.";
        } else if (err.code === "auth/weak-password") {
          errorMessage = "Password is too weak.";
        } else if (err.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        }

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };


  return (
    <>
      <Helmet>
        <title>DelivTract | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <div className="text-center lg:text-left animate__animated animate__lightSpeedInRight">
            <img src={loginImg} alt="" className="w-[90%]" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__lightSpeedInLeft">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className={`input input-bordered ${
                    errors.name ? "input-error" : ""
                  }`}
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <span className="text-error">{errors.name.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className={`input input-bordered ${
                    errors.email ? "input-error" : ""
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-error">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className={`input input-bordered ${
                    errors.password ? "input-error" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-error">{errors.password.message}</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div className="text-center mb-4 space-y-2">
              <p>
                Already registered?
                <Link to={"/login"}>
                  <span className="text-purple-500">Login</span>
                </Link>
                <div className="divider">OR</div>
              </p>
              <p>Sign Up with</p>
              <p className="flex gap-3 justify-center">
                <span className="flex items-center gap-2 p-2 border-2 rounded-lg hover:drop-shadow-xl">
                 
                    <button className="flex gap-2" onClick={handleGoogleLogin}>
                      <FcGoogle className="text-2xl" />
                      Google
                    </button>
               
                </span>
                <span className="flex items-center gap-2 p-2 border-2  rounded-lg">
                  <FaFacebook className="text-2xl"></FaFacebook>Facebook
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp