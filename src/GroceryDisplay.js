import React from "react";
import { useRecoilState } from "recoil";
import { atomData } from "./recoil/atomData";
import { AddData } from "./AddData";
import { Red } from "./stories/Button.stories.jsx";
import "./Display.css";

export const GroceryDisplay = () => {
  const [list, setList] = useRecoilState(atomData);
  console.log(list);

  //updating/delete obj from arr(atom)
  const handleUpdate = (e, id) => {
    console.log(e, id);
    const newList = list.filter((info) => info.id !== id);
    setList(newList);
  };

  return (
    <>
      <AddData />

      {list.length > 0 ? (
        list.map((info) => {
          return (
            <React.Fragment key={info.id}>
              <div className="card">
                <p>{info.text}</p>
                <Red onClick={(e) => handleUpdate(e, info.id)} label="Delete" />
              </div>
            </React.Fragment>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};
