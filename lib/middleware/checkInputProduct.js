import yup from "yup";
export const checkCreateInput = async (ctx, next) => {
  try {
    const {
      body
    } = ctx.request;
    let schema = yup.object().shape({
      id: yup.number().positive().integer().required(),
      name: yup.string().required(),
      price: yup.number().positive().integer().required(),
      description: yup.string().required(),
      product: yup.string().required(),
      color: yup.string().required(),
      image: yup.string().required()
    });
    await schema.validate(body);
    next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name
    };
  }
};
export const checkUpdateInput = async (ctx, next) => {
  try {
    const {
      body
    } = ctx.request;
    let schema = yup.object().shape({
      name: yup.string(),
      price: yup.number().positive().integer(),
      description: yup.string(),
      product: yup.string(),
      color: yup.string(),
      image: yup.string()
    });
    await schema.validate(body);
    next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name
    };
  }
};
//# sourceMappingURL=checkInputProduct.js.map