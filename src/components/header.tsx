import { styled } from "@mui/system";

const HeaderSlot = styled("header")(() => ({ padding: "20px" }));

export const Header = ({
  handleClick,
}: {
  handleClick: (page: string) => void;
}) => {
  return (
    <HeaderSlot>
      <h1>Marie-Cécile Caron</h1>
      <h2>artiste-peintre</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={() => handleClick("book")}>Book</button>
        <button onClick={() => handleClick("lesson")}>Cours de piano</button>
      </div>
    </HeaderSlot>
  );
};
