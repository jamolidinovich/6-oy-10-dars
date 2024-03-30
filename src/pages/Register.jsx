import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
function Register() {
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  function validate() {
    return true;
  }
  function getData() {
    let data = [];
    if (localStorage.getItem("token")) {
      data = JSON.parse(localStorage.getItem("token"));
    }
    return data;
  }
  function handleRegister(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      let token = getData();
      token.push(user);
      localStorage.setItem("token", JSON.stringify(token));
      usernameRef("");
      setLoading(true);
      //   fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //     body: JSON.stringify(),
      //   })
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
      // .finally(() => {
      //   setLoading(false);
      // });
    }
  }
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="w-25 mx-auto mt-4
       shadow-lg p-3 mb-5 bg-body-tertiary rounded"
      >
        <h1 className="text-center">Register</h1>
        <input
          type="text"
          class="form-control mt-2"
          placeholder="Enter username"
          ref={usernameRef}
        />
        <input
          type="email"
          class="form-control mt-3"
          placeholder="Enter email"
          ref={emailRef}
        />
        <input
          type="number"
          class="form-control mt-3"
          placeholder="Enter password"
          ref={passwordRef}
        />
        <button
          type="button"
          disabled={loading ? true : false}
          class="btn mt-3 btn-outline-success w-100"
          onClick={handleRegister}
        >
          Register
        </button>
        <Link to={"/login"} className="text-decoration-none  ">
          Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
