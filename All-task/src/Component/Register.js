import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    // reset(),
    formState: { errors },
  } = useForm();

  const onsubmit = async (body) => {
    let l = body.hobbies.length;
    if (body.password === body.cpassword && l >= 2) {
      console.log(body);
      const { data } = await axios.post("http://localhost:3020/register", {
        fname: body.fName,
        lname: body.lName,
        email: body.email,
        password: body.password,
        
      });
      console.log(data);
      nevigate("./login", { replace: true });
    } else {
      errors.hobbies.message = "Please Select At least 2 Hobbies";
      alert("Your Password And Confirm Doesn't Match ");
    }
  };

  const nevigate = useNavigate();

  return (
    <div className="App-content">
      <h1>Register Here!!@#@#@#@</h1>
      <div className="Mybox">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="form-group">
            <label htmlFor="fname">Enter First Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="First Name"
              name="fname"
              {...register("fName", {
                required: { value: true, message: "Enter First Name" },
                minLength: { value: 3, message: "Enter minimum 3 Character" },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: "Enter Character only",
                },
              })}
            />
            {errors.fName && (
              <span>
                <small style={{ color: "red" }}> {errors.fName.message} </small>{" "}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lname">Enter Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              placeholder="Last Name"
              name="lname"
              {...register("lName", {
                required: { value: true, message: "Enter Last Name" },
                minLength: { value: 3, message: "Enter minimum 3 Character" },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: "Enter Character only",
                },
              })}
            />
            {errors.lName && (
              <small style={{ color: "red" }}> {errors.lName.message} </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder=" Email"
              name="email"
              {...register("email", {
                required: { value: true, message: "Enter Email" },
              })}
            />
            {errors.email && (
              <small style={{ color: "red" }}> {errors.email.message} </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder=" Password"
              name="password"
              {...register("password", {
                required: { value: true, message: "Enter Password" },
                minLength: { value: 5, message: "Enter minimum 3 Character" },
                maxLength: { value: 8, message: "Enter maximum 8 Character" },
              })}
            />
            {errors.password && (
              <small style={{ color: "red" }}>
                {" "}
                {errors.password.message}{" "}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              placeholder=" Confirm Password"
              name="cpassword"
              {...register("cpassword", {
                required: { value: true, message: "Enter Confirm Password" },
              })}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="phone">Enter Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder=" Phone"
              name="phone"
              {...register("phone", {
                required: { value: true, message: "Enter Phone" },
                minLength: { value: 10, message: "Enter 10 Digit Number" },
                maxLength: { value: 10, message: "please enter only 10 digit" },
                pattern: { value: /^[0-9]+$/, message: "Enter Number only" },
              })}
            />
            {errors.phone && (
              <small style={{ color: "red" }}> {errors.phone.message} </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="state">Your State</label>
            <select
              className="form-control"
              id="state"
              placeholder=" Phone"
              name="state"
              {...register("state", {
                required: { value: true, message: "Select Your State" },
              })}
            >
              <option value="">Select State </option>
              <option value={"madhyaPradesh"}>Madhya Pradesh</option>
              <option value={"uttarPradesh"}>Uttar Pradesh</option>
              <option value={"himachalPradesh"}>himachal Pradesh</option>
              <option value={"rajsthan"}>Rajsthan</option>
              <option value={"gujrat"}>Gujrat</option>
            </select>
            {errors.state && (
              <small style={{ color: "red" }}> {errors.state.message} </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="city">Enter City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              id="city"
              placeholder=" City"
              {...register("city", {
                required: { value: true, message: "Enter city" },
                minLength: { value: 3, message: "Enter min 3 Character" },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: "Enter Character only",
                },
              })}
            />
            {errors.city && (
              <small style={{ color: "red" }}> {errors.city.message} </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address">Enter Address</label>
            <textarea
              name="address"
              rows={2}
              cols={10}
              className="form-control"
              id="address"
              placeholder=" Address"
              {...register("address", {
                required: { value: true, message: "Enter address" },
                maxLength: { value: 120, message: "Enter max 120 Character" },
              })}
            ></textarea>
            {errors.address && (
              <small style={{ color: "red" }}> {errors.address.message} </small>
            )}
          </div>

          <div className="form-group">
            <label style={{ marginRight: "20px" }}>Select gender</label>
            <br />
            <input
              style={{ marginRight: "5px", marginLeft: "5px" }}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              {...register("gender", {
                required: { value: true, message: "Please Select Gender" },
              })}
            />
            <label
              style={{ marginRight: "5px", marginLeft: "5px" }}
              className="form-check-label"
              htmlFor="flexRadioDefault1"
            >
              Male
            </label>
            <input
              style={{ marginRight: "5px", marginLeft: "5px" }}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              {...register("gender")}
            />
            <label
              style={{ marginRight: "5px", marginLeft: "5px" }}
              className="form-check-label"
              htmlFor="flexRadioDefault1"
            >
              Female
            </label>

            {errors.gender && (
              <small style={{ color: "red" }}> {errors.gender.message} </small>
            )}
          </div>
          <br />
          <label htmlFor="form-check">Select Hobbies</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="check1"
              value="cricket"
              {...register("hobbies", {
                required: {
                  value: true,
                  message: "Please Select atleast 2 hobbies ",
                },
              })}
            />
            <label className="form-check-label">Cricket</label>
            <br />

            <input
              className="form-check-input"
              type="checkbox"
              id="check2"
              value="hockey"
              {...register("hobbies", {
                required: {
                  value: true,
                  message: "Please Select atleast 2 hobbies ",
                },
              })}
            />
            <label className="form-check-label">Hockey</label>
            <br />

            <input
              className="form-check-input"
              type="checkbox"
              id="check3"
              value="golf"
              {...register("hobbies")}
            />
            <label className="form-check-label">Golf</label>
            <br />

            <input
              className="form-check-input"
              type="checkbox"
              id="check4"
              value="traveling"
              {...register("hobbies")}
            />
            <label className="form-check-label">Traveling</label>
            <br />
            {errors.hobbies && (
              <small style={{ color: "red" }}> {errors.hobbies.message} </small>
            )}
          </div>

          <button
            onClick={() => nevigate}
            type="submit"
            id="submitbtn"
            className="btn btn-success"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
