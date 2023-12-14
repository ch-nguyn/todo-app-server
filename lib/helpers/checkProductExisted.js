import { getOne } from "../database/productRepository.js";
export const checkProductExisted = id => {
  const product = getOne(id);
  if (product) {
    return true;
  }
  return false;
};
//# sourceMappingURL=checkProductExisted.js.map