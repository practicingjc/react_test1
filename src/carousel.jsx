import { useRef, useState, forwardRef, useLayoutEffect,useEffect } from "react";

export default function Carousel({ books }) {
  const [imgs, setImgs] = useState(null);
  const [imgsWidth, setImgsWidth] = useState(0);
  const imgsArray = useRef(null);
  useLayoutEffect(() => {
    let arr = books.map((book) => {
      return <img className="imgs" key={book.id} src={book.download_url}></img>;
    });
    setImgs(arr);
    setImgsWidth(imgsArray.current.scrollWidth);
  }, []);
  return (
    <div className="container">
      <div className="topInfo"><p>{imgsWidth}</p></div>
      <Scroll />
      <div className="imgsLocation">
        <div ref={imgsArray} className="imgsData">
          {imgs}
        </div>
      </div>
    </div>
  );
}

let Scroll = forwardRef(ScrollBar);
function ScrollBar({ imgsWidth }, ref2) {
  return <></>;
}
