export const actionTypeCreator = {
  createProduct: () => 'API: create product',
  createProductBalance: () => 'API: create product balance',
  increaseProductBalance: (
    forOrder: boolean,
    amount: number,
    result: number
  ) =>
    forOrder
      ? `API: increase order product balance by ${amount} => ${result}`
      : `API: increase product balance by ${amount} => ${result}`,

  decreaseProductBalance: (
    forOrder: boolean,
    amount: number,
    result: number
  ) =>
    forOrder
      ? `API: decrease order product balance by ${amount} => ${result}`
      : `API: decrease product balance by ${amount} => ${result}`
};
