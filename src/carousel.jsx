import {
  useRef,
  useState,
  forwardRef,
  useLayoutEffect,
  useEffect,
} from "react";

export default function Carousel({ books }) {
  const [imgs, setImgs] = useState(null);
  const [imgsWidth, setImgsWidth] = useState(0);
  const imgsArray = useRef(null);
  console.log(books);

  useLayoutEffect(() => {
    setImgsWidth(imgsArray.current.scrollWidth);
  }, []);

  return (
    <div className="container">
      <div className="topInfo">
        <p>{imgsWidth}</p>
      </div>
      <Scroll />
      <div className="imgsLocation">
        <div
          ref={imgsArray}
          className="imgsData"
          onLoad={() => {
            if (imgsArray.current != null) {
              setImgsWidth(imgsArray.current.scrollWidth);
            }
          }}
        >
          {books}
        </div>
      </div>
    </div>
  );
}

let Scroll = forwardRef(ScrollBar);
function ScrollBar({ imgsWidth }, ref2) {
  return <></>;
}
