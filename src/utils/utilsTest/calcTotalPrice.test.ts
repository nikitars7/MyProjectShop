import exp from "constants";
import { calcTotaPrice } from "../calcTotalPrice";
import { expect, test} from '@jest/globals';
const cartItems = [
  {
    id: 0,
    imageUrl: "",
    name: "",
    price: 100,
    count: 1,
    size: "",
  },
  {
    id: 0,
    imageUrl: "",
    name: "",
    price: 200,
    count: 1,
    size: "",
  },
  {
    id: 0,
    imageUrl: "",
    name: "",
    price: 300,
    count: 1,
    size: "",
  },
];
describe('CalcTotalPriceTest',() => {
  test("Calculated", () => {
    expect(calcTotaPrice(cartItems)).toBe(600);
  })
  test("not calc", () => {
    expect(calcTotaPrice(cartItems)).not.toBe(-600);
  })
  test('count of times', () => {
    const spyOnReduce = jest.spyOn(Array.prototype,'reduce');
    calcTotaPrice(cartItems);
    expect(spyOnReduce).toBeCalledTimes(1);
  })
  afterEach(() => {
    jest.clearAllMocks();
  })
})