import React, { Component } from "react";
import { Button } from "reactstrap";
import Spinner from "./spinner";

interface buttonProps {
  openSpinner: boolean;
  color?:
    | "primary"
    | "inherit"
    | "success"
    | "secondary"
    | "error"
    | "info"
    | "warning";
  type: "submit" | "reset" | "button" | undefined;
  title: string;
  // disable:boolean;
  spinnerColor?:
    | "primary"
    | "inherit"
    | "success"
    | "secondary"
    | "error"
    | "info"
    | "warning";
  spinnerSize?: number | string;
  onClick: any;
  width?: any;
}

export default function ButtonLoading(props: buttonProps) {
  return (
    <Button
      {...props}
      // block
      disabled={props.openSpinner}
      color={props.color ?? "primary"}
      style={{ width: props.width ?? "10rem" }}
    >
      {props.openSpinner ? <Spinner {...props} /> : props.title}
    </Button>
  );
}
