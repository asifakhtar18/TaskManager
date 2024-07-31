"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  Link,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { login, register } from "@/store/authSlice";
import { RootState } from "@/store/store";
import Welcome from "@/components/greetings/Welcome";
import MainBox from "@/components/MainBox";

export default function Auth({ isRegister }: { isRegister: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      try {
        await dispatch(register({ email, password, name }) as any).unwrap();
        router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await dispatch(login({ email, password }) as any).unwrap();
        router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <MainBox>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "650px",
          border: "1px solid #CECECE",
          padding: "20px",
          borderRadius: "16px",
          background: "linear-gradient(180deg, #F7F7F7 0%, #F0F0F0 100%)",
        }}
      >
        <Welcome />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          {isRegister && (
            <TextField
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <TextField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Box sx={{ position: "relative" }}>
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>

          <Button
            variant="contained"
            onClick={handleSubmit}
            type="submit"
            disabled={loading}
          >
            Login
          </Button>
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          {!isRegister ? (
            <Typography>
              Don&apos;t have an account? Create a
              <Link
                href="/signup"
                sx={{
                  color: "#4534AC",
                  textDecoration: "none",
                  marginLeft: "5px",
                }}
              >
                new account.
              </Link>
            </Typography>
          ) : (
            <Typography>
              Already have an account? Login
              <Link
                href="/"
                sx={{
                  color: "#4534AC",
                  textDecoration: "none",
                  marginLeft: "5px",
                }}
              >
                here.
              </Link>
            </Typography>
          )}
        </Box>
      </Box>
    </MainBox>
  );
}
