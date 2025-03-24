import { JSX } from "@emotion/react/jsx-runtime";
import { styled } from "@mui/system";
import { Book } from "../pages/book";
import { Lesson } from "../pages/lesson";

const HeaderSlot = styled("header")(() => ({ padding: "20px" }));

const useHeader = () => {
  const book = <Book />;
  const lesson = <Lesson />;

  return { book, lesson };
};

export const Header = ({
  pageChange,
}: {
  pageChange: (page: JSX.Element) => () => void;
}) => {
  const { book, lesson } = useHeader();

  return (
    <HeaderSlot>
      <h1>Marie-Cécile Caron</h1>
      <h2>artiste-peintre</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={pageChange(book)}>Book</button>
        <button onClick={pageChange(lesson)}>Cours de piano</button>
      </div>
    </HeaderSlot>
  );
};
