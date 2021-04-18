import { Ship, Gameboard } from "./index";

test("receiveAttack hits and sinks ship", () => {
  const myBoard = Gameboard();
  myBoard.shipOne.setPosition([1]);
  myBoard.receiveAttack(1);
  expect(myBoard.shipOne.isSunk()).toBe(true);
});

test("receiveAttack misses and records missed shot", () => {
  const myBoard = Gameboard();
  myBoard.shipOne.setPosition([11]);
  myBoard.receiveAttack(12);
  expect(myBoard.missedShots).toStrictEqual([12]);
  expect(myBoard.shipOne.isSunk()).toBe(false);
});