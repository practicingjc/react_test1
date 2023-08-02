import { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import Carousel from "./carousel";

function App() {
  const [books, setBooks] = useState([]);
  const [bookimgs, setBookImgs] = useState("");

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=40")
      .then((test) => {
        return test.json();
      })
      .then((finished) => {
        setBooks(finished);
        return finished
      })
      .then((finished) => {
        let arr = finished.map((book) => {
          return (
            <img className="imgs" key={book.id} src={book.download_url}></img>
          );
        });
        setBookImgs(arr)
      });
  }, []);

  return (
    <>
      <Carousel books={bookimgs}></Carousel>
    </>
  );
}

export default App;
