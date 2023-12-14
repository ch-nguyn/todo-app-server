import { getAll, getOne, deleteOne, addOne, updateOne } from "../../database/productRepository.js";
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
    const product = getOne(ctx.params.id, ctx.query.fields);
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
    deleteOne(ctx.params.id);
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
  try {
    const product = ctx.request.body;
    addOne(product);
    ctx.status = 201;
    return ctx.body = {
      success: true,
      data: product
    };
  } catch (e) {
    console.error(e);
    ctx.status = 400;
    return ctx.body = {
      success: false,
      error: e.message
    };
  }
};
export const updateProduct = async ctx => {
  try {
    const {
      body
    } = ctx.request;
    const {
      id
    } = ctx.params;
    updateOne(id, body);
    ctx.status = 200;
    return ctx.body = {
      success: true
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
//# sourceMappingURL=productHandlers.js.map