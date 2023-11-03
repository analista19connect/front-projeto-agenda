import React, { useState, Component } from "react";
import CircularProgress from '@mui/material/CircularProgress';

interface spinnerProps {
    spinnerColor?: "primary" | "inherit" | "success" | "secondary" | "error" | "info" | "warning";
    spinnerSize?: number | string
}

export default function Spinner(props: spinnerProps ){
  return (
    <CircularProgress color={props.spinnerColor ?? "primary"} size={props.spinnerSize ?? 15}/>
  );
};
