import { getPageCount } from "../pages";
import { expect, test} from '@jest/globals';

describe('getPageCountTest',() => {
   test("correct", () => {
     expect(getPageCount(30,4)).toBe(8);
   })
 })