import React, { useEffect,useState } from "react";
import { Form, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import '../resourses/auth.css'

function Login() {
  const dispatch = useDispatch();
  const [generatedTitle, setGeneratedTitle] = useState("BusBrio");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/brython-dev/brython@3.10.1/www/src/brython.js";
    document.body.appendChild(script);

    script.onload = () => {
      window.Brython({ debug: 1 });

      const pythonScript = document.createElement("script");
      pythonScript.type = "text/python";
      pythonScript.textContent = `
        from browser import document

        def generate_page_title():
            return "BusBrio"

        title = generate_page_title()
        window.setTitleFromPython(generate_page_title())

      `;
      document.body.appendChild(pythonScript);

      window.onload = () => {
      document.body.appendChild(pythonScript);
      setGeneratedTitle(window.title);
      console.log(window.title);
    };
    };
  }, []);



  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/users/login", values);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        window.location.href = "/";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="h-screen d-flex justify-content-center align-items-center auth">
      <h1 style={{fontSize:'3em',marginTop:'-800px',marginLeft:'-500px',color:'#949494'}}>{generatedTitle}</h1>
      <div className="sig" style={{height:'400px',padding:'60px',marginLeft:'350px'}} >
        <h1 className="Head">   Login</h1>
        <hr />
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <input style={{borderRadius:'10px',outline:'none',borderWidth:'1.7px'}} type="text" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input style={{borderRadius:'10px',outline:'none',borderWidth:'1.7px'}} type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between align-items-center my-3">
            <Link to="/register">Click Here To Signup</Link>
            <div className="Button"> <button style={{background:'transparent',border:'none'}} type="submit">
              Login
            </button></div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
