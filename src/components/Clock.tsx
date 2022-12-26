import * as React from "react";
import { Input } from "@chakra-ui/react";

const handleClock = () => {
  let data = new Date();
  let hor = data.getHours();
  let min = data.getMinutes();
  let seg = data.getSeconds();

  if (hor < 10) {
    hor = 0 + hor;
  }
  if (min < 10) {
    min = 0 + min;
  }
  if (seg < 10) {
    seg = 0 + seg;
  }

  let horas = hor + ":" + min + ":" + seg;

  document.getElementById("rel").value = horas;
};

const tempo = setInterval(handleClock, 1000);


const Clock = () => {
  return (
    <>
      <Input type="text" id="rel" w="100px" ml="4px" bg="#F1F1F1 " />
    </>
  );
};

export default Clock;
