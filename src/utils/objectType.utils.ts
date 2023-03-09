/**
 *  @description
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object}
 * @example
 *  const obj = { a: 1, b: 2, c: 3, d: 4 };
 *  const keys = ['a', 'c'];
 *  const result = omit(obj, keys);
 *  console.log(result); // { b: 2, d: 4 }
 */
export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result: any = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

/**
 * @description
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object}
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4 };
 * const keys = ['a', 'c'];
 * const result = pick(obj, keys);
 * console.log(result); // { a: 1, c: 3 }
 * */
export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => (result[key] = obj[key]));
  return result;
};
