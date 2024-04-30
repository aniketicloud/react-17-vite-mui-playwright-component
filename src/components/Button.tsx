import { FC } from "react";

interface ButtonProps {
  label?: string;
}

const Button: FC<ButtonProps> = ({ label = "Default" }) => {
  return <button type="button">{label}</button>;
};

export default Button;
