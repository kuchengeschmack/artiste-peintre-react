import { styled } from "@mui/system";
import facebook from "../assets/facebook.svg"

const FooterSlot = styled("footer")(() => ({
  padding: "20px",
  "svg:hover": {
    fill: "black",
  },
  a: {
    display: "grid",
    alignItem: "center",
  },
}));

export const Footer = () => {
  return (
    <FooterSlot>
      <a
        href="https://www.facebook.com/mariececile.caron"
        aria-label="Facebook"
        target="_blank"
        rel="noopener"
      >
        <img src={facebook} alt="facebook" />
      </a>
    </FooterSlot>
  );
};
