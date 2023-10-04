import { getPageCount } from "../pages";
import { expect, test} from '@jest/globals';

describe('getPageCountTest',() => {
   test("correct", () => {
     expect(getPageCount(30,4)).toBe(8);
   })
   test("count times", () => {
   const spyOnMathCeil = jest.spyOn(Math,'ceil');
   getPageCount(30,4);
   expect(spyOnMathCeil).toBeCalledTimes(1);
  })
  test("count times2", () => {
    const spyOnMathCeil = jest.spyOn(Math,'ceil');
    getPageCount(30,4);
    getPageCount(30,5);
    expect(spyOnMathCeil).toBeCalledTimes(2);
   })
  afterEach(() => {
    jest.clearAllMocks(); // после теста нужно очищать моки
  })
 })