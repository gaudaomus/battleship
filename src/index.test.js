import { Ship, Gameboard } from "./index";

test("all ships sunk", () => {
  const myBoard = Gameboard();
  myBoard.shipOne.setPosition([1]);
  myBoard.receiveAttack(1);
  myBoard.shipTwo.setPosition([2]);
  myBoard.receiveAttack(2);
  myBoard.shipThree.setPosition([3]);
  myBoard.receiveAttack(3);
  myBoard.shipFour.setPosition([4]);
  myBoard.receiveAttack(4);
  myBoard.shipFive.setPosition([5]);
  myBoard.receiveAttack(5);
  expect(myBoard.allSunk()).toBe(true);
});

test("not all ships sunk", () => {
  const myBoard = Gameboard();
  myBoard.shipOne.setPosition([1]);
  myBoard.shipTwo.setPosition([2]);
  myBoard.shipThree.setPosition([3]);
  myBoard.shipFour.setPosition([4]);
  myBoard.shipFive.setPosition([5]);
  myBoard.receiveAttack(1);
  myBoard.receiveAttack(2);
  myBoard.receiveAttack(3);
  myBoard.receiveAttack(4);
  myBoard.receiveAttack(6);
  myBoard.receiveAttack(7);
  expect(myBoard.missedShots).toStrictEqual([6, 7]);
  expect(myBoard.allSunk()).toBe(false);
});
