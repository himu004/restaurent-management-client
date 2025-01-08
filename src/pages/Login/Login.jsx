import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {

    const captchaRef = useRef(null);
    const [disable, setDisableButton] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
     const user_captcha_value = captchaRef.current.value;
     console.log(user_captcha_value);

     if(validateCaptcha(user_captcha_value)){
       setDisableButton(false);
     }

  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.table({ email, password });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="container mx-auto hero-content flex">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <div>
                <label className="label py-3">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  placeholder="Type Text Above"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                <button onClick={handleValidateCaptcha}   className="btn btn-neutral btn-outline ml-4">Validate</button>
              </div>
            </div>
            <div className="form-control mt-6">
              <input disabled={disable} className="btn btn-neutral" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
