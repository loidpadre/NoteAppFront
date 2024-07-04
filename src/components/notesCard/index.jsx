import { Wrapper } from "./style";
import { HiOutlineDotsVertical } from "react-icons/hi";
export const NoteCard = ({note}) => {
    const date = new Date(note.createdAt)
    const day = date.getDate()
    const year = date.getFullYear()
    const month = date.toLocaleString("pt-BR", {month: "long"})
  return (
    <Wrapper>
      <div className="topo">
      <span>{day}, {month}  {year}</span>
        <HiOutlineDotsVertical className="icon"/>
      </div>
      <div className="text">
        <h1 className="title">{note.title}</h1>
        <span>
          {note.content}
        </span>
        <h4>#{note.tag}</h4>
      </div>
    </Wrapper>
  );
};
