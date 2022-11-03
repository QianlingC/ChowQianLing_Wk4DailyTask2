import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { atomData } from "./recoil/atomData";
import { Normal } from "./stories/Input.stories";
import { Large } from "./stories/Button.stories";

let id = 0;
function getId() {
  return id++;
}

export const AddData = () => {
  const [inputValue, setInputValue] = useState("");
  const [val, setAtomData] = useRecoilState(atomData); //access atom data
  console.log(val);

  const onChange = (e) => {
    //validation
    setInputValue(e.target.value);
  };

  // to update atom
  const addData = () => {
    if (inputValue) {
      setAtomData((list) => [
        ...list,
        {
          id: getId(),
          text: inputValue,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Things to get in Supermarket</h3>
      <Normal label="Item" type="text" value={inputValue} onChange={onChange} />
      <Large onClick={addData} label="Add to List" />
    </div>
  );
};
