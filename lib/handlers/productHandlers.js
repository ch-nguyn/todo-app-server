import { getAll, getOne, deleteOne } from "../database/productRepository.js";
export const getAllProducts = async ctx => {
  try {
    const products = getAll(ctx.query);
    ctx.status = 200;
    return ctx.body = {
      success: true,
      data: products
    };
  } catch (e) {
    console.error(e);
    ctx.status = 404;
    return ctx.body = {
      success: false,
      error: e.message
    };
  }
};
export const getSingleProduct = async ctx => {
  try {
    const product = getOne(ctx.params.id);
    if (!product) {
      throw new Error("There is no product with that ID");
    }
    ctx.status = 200;
    return ctx.body = {
      success: true,
      data: product
    };
  } catch (e) {
    console.error(e);
    ctx.status = 404;
    return ctx.body = {
      success: false,
      error: e.message
    };
  }
};
export const deleteProduct = async ctx => {
  try {
    const isAvailable = deleteOne(ctx.params.id);
    if (!isAvailable) {
      throw new Error("There is no product with that ID");
    }
    ctx.status = 204;
    return ctx.body = {
      success: true,
      message: "Deleted successfully!"
    };
  } catch (e) {
    console.error(e);
    ctx.status = 404;
    return ctx.body = {
      success: false,
      error: e.message
    };
  }
};
export const createProduct = async ctx => {
  try {} catch (e) {
    console.error(e);
    ctx.status = 400;
    return ctx.body = {
      success: false,
      error: e.message
    };
  }
};
//# sourceMappingURL=productHandlers.js.map