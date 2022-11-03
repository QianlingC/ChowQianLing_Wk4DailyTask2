import React from "react";
import { useRecoilState } from "recoil";
import { atomData } from "./recoil/atomData";
import { AddData } from "./AddData";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
            <Card sx={{ minWidth: 200 }} variant="outlined">
              <CardContent>
                <React.Fragment key={info.id}>
                  <Typography variant="body2">{info.text} </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={(e) => handleUpdate(e, info.id)}
                  >
                    Delete
                  </Button>
                </React.Fragment>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};
