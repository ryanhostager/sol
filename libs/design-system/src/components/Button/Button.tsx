import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button = ({ label = "Button", ...rest }) => {
  return (
    <button {...rest} style={{ padding: "8px 12px", borderRadius: 6 }}>
      {label}
    </button>
  );
};

export default Button;
