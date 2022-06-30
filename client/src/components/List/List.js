import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./List.scss";
import ListItem from "../ListItem/ListItem";
import { useRef, useState } from "react";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: slideNumber === 0 && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ display: slideNumber === 6 && "none" }}
        />
      </div>
    </div>
  );
};

export default List;
