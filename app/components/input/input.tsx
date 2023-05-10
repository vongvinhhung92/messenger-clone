"use client";

import React from "react";
import { clsx } from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { isInterfaceDeclaration } from "typescript";
const Input = () => {
  return <div>I am an input</div>;
};

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}
export default Input;
