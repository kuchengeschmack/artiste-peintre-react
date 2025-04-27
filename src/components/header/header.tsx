import { Button, Typography } from "@mui/material";
import { DivSlot, HeaderSlot } from "./header.slot";
import { Pages } from "../../App.types";

export const Header = ({
  handlePageChange,
}: {
  handlePageChange: (page: Pages) => void;
}) => {
  return (
    <HeaderSlot data-testid="Header">
      <Typography variant="h1">Marie-Cécile Caron</Typography>
      <Typography variant="h2">artiste-peintre</Typography>
      <DivSlot>
        <Button onClick={() => handlePageChange(Pages.BOOK)}>Book</Button>
        <Button onClick={() => handlePageChange(Pages.LESSON)}>
          Cours de piano
        </Button>
      </DivSlot>
    </HeaderSlot>
  );
};
