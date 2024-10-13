"use client"
import { FC } from "react";

const staticNum: number = 5;
type Gender = "Malle" | "Female" | "LGBT";
interface Props {
  initVal: number;
  gender: Gender;
}

interface Person {
  fistname?: string;
  lastname: string;
  age?: number;
  single: boolean;
}
const person: Person = {
  fistname: "win",
  lastname: "pong",
  age: 29,
  single: false,
};
const Basic: FC<Props> = ({ initVal, gender }) => {
  const verifyGender = (gd: Gender) => {
    if (gd == "Female") console.log(gd);
    else console.log("Notfemale");
  };

  return (
    <>
      <p>Basic</p>
      <div>{person.lastname}</div>
      <div>{initVal}</div>
      <div>{staticNum}</div>
      <div>{gender}</div>
      <button>Increase</button>
      <button onClick={() => verifyGender(gender)}>Gender</button>
    </>
  );
};
Basic.defaultProps = {
  initVal: 0,
  gender: "Female",
};
export default Basic;
