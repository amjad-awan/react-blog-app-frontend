import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaLock } from "react-icons/fa";
import { validationSchema } from "./validationSchema";
import { useFormik } from "formik";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  color: theme.palette.text.secondary,
}));
const LoginForm = () => {
  const nevigate = useNavigate();

  const { handleLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

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
      handleLogin({ password: values.password, email: values.email });
      nevigate("/");
      resetForm();
    },
  });

  return (
    <Item
      sx={{
        width: "600px",
      }}
      noValidate
      autoComplete="off"
    >
      {/* <Typography variant="h3" sx={{ marginBottom: "30px" }}>
        Login
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
          sx={{ width: "100%", marginBottom: "20px" }}
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <Typography sx={{ color: "red" }}>{formik.errors.email}</Typography>
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
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", padding: "10px 0px" }}
        >
          Submit
        </Button>
      </form>
      <Typography sx={{ marginTop: "30px", textAlign: "center" }}>
        <Link to="/register">click here to create account</Link>
      </Typography>
    </Item>
  );
};

export default LoginForm;
