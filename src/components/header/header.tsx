import { Button, Typography } from "@mui/material";
import { DivSlot, HeaderSlot } from "./header.slot";
import { PAGES } from "../../App.types";

export const Header = ({
  handlePageChange,
}: {
  handlePageChange: (page: PAGES) => void;
}) => {
  return (
    <HeaderSlot data-testid="Header">
      <Typography variant="h1">Marie-Cécile Caron</Typography>
      <Typography variant="h2">artiste-peintre</Typography>
      <DivSlot>
        <Button onClick={() => handlePageChange(PAGES.BOOK)}>Book</Button>
        <Button onClick={() => handlePageChange(PAGES.LESSON)}>
          Cours de piano
        </Button>
      </DivSlot>
    </HeaderSlot>
  );
};
