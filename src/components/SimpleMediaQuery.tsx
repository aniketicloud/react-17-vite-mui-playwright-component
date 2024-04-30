import useMediaQuery from "@mui/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <p>{`(min-width:600px) matches: ${matches}`}</p>;
}
