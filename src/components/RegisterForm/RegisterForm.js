import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Typography,
  TextField,
  Button,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  color: theme.palette.text.secondary,
}));
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const [password, setPassword] = useState("");
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [rol, setRole] = useState("");
  // const handleChange = useCallback((event) => {
  //   setRole(event.target.value);
  // }, []);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    name: "",
    password: "",
    roles: "", // Initialize this with the default selected value
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}user/register-user`, {
          password: values.password,
          name: values.name,
          email: values.email,
          role: values.roles,
        });

        resetForm();
        navigate("/login");
      } catch (error) {
        console.log("error ", error);
      }
    },
  });

  console.log("formik error ", formik.errors);

  return (
    <Item
      sx={{
        width: "600px",
      }}
      noValidate
      autoComplete="off"
    >
      {/* <Typography variant="h3" sx={{ marginBottom: "30px", textAlign:"center", fontWeight:700, fontSize:"18px" }}>
        Register yourself
      </Typography> */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "35px" }}
      >
        <Button
          variant="contained"
          sx={{
            margin: "0px auto",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
          }}
        >
          <FaLock />
        </Button>
      </Box>

      <form
        sx={{ width: "100%", marginBottom: "20px" }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          name="email"
          sx={{ width: "100%", marginBottom: "20px" }}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <Typography sx={{ color: "red" }}>{formik.errors.email}</Typography>
        )}
        <TextField
          id="outlined-multiline-flexible"
          label="User name"
          name="name"
          sx={{ width: "100%", marginBottom: "20px" }}
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name && (
          <Typography sx={{ color: "red" }}>{formik.errors.name}</Typography>
        )}
        <FormControl
          sx={{ width: "100%", marginBottom: "20px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            {...formik.getFieldProps("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />

          {formik.touched.password && formik.errors.password && (
            <Typography sx={{ color: "red" }}>
              {formik.errors.password}
            </Typography>
          )}
        </FormControl>
        <FormControl sx={{ width: "100%", marginBottom: "20px" }}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="rol"
            name="roles"
            {...formik.getFieldProps("roles")}
          >
            <MenuItem value="user">user</MenuItem>
            <MenuItem value="admin">admin</MenuItem>
          </Select>

          {formik.touched.roles && formik.errors.roles && (
            <Typography sx={{ color: "red" }}>{formik.errors.roles}</Typography>
          )}
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", padding: "10px 0px" }}
        >
          Submit
        </Button>
      </form>
      <Typography sx={{ marginTop: "30px", textAlign: "center" }}>
        <Link to="/login">have account already? then click here to login</Link>
      </Typography>
    </Item>
  );
};

export default RegisterForm;
