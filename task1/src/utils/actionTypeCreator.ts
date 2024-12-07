export const actionTypeCreator = {
  createProduct: () => 'Create product',
  createProductBalance: () => 'Create product balance',
  increaseProductBalance: (
    forOrder: boolean,
    amount: number,
    result: number
  ) =>
    forOrder
      ? `Increase order product balance by ${amount} => ${result}`
      : `Increase product balance by ${amount} => ${result}`,

  decreaseProductBalance: (
    forOrder: boolean,
    amount: number,
    result: number
  ) =>
    forOrder
      ? `Decrease order product balance by ${amount} => ${result}`
      : `Decrease product balance by ${amount} => ${result}`
};
