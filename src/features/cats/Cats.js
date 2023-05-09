import React, { useEffect } from "react";
import { fetchCats } from "./catsSlice";
import { useDispatch, useSelector } from "react-redux";
import CatList from "./CatList";
function Cats() {
  const dispatch = useDispatch();
  const catPics = useSelector((state) => state.entities)

  const handleClick = () => {
    dispatch(fetchCats());
  }

  useEffect(() => {
    dispatch(fetchCats());
  }, [])
  console.log(catPics);

  return (
    <div className="App">
      <h1>CatBook</h1>
      <button onClick={handleClick}>Get Cats</button>

      {/* <ul> */}
      {
        catPics.map((cat) =>
        (
          <CatList
            id={cat.id}
            catPics={cat.source_url}
            catPic={cat.url}
            key={cat.id}
          />
        )
        )
      }
      {/* add CatList component here */}
      {/* </ul> */}
    </div>
  );
}

export default Cats;
