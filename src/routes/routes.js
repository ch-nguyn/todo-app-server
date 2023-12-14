import Router from "koa-router";
import {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../handlers/products/productHandlers.js";
import {
  checkCreateInput,
  checkUpdateInput,
} from "../middleware/checkInputProduct.js";
import { getAll, getOne } from "../database/productRepository.js";

// const router = new Router({
//   prefix: "/api/products",
// });

const router = new Router();

router.get("/page/products", async (ctx) => {
  const { limit, orderBy } = ctx.query;
  const products = getAll({ limit, orderBy });
  await ctx.render("pages/product", {
    products,
  });
});

router.get("/page/edit/:id", async (ctx) => {
  const product = getOne(ctx.params.id);
  await ctx.render("pages/editProduct", {
    product,
  });
});

router.get("/api/products", getAllProducts);
router.post("/api/products", checkCreateInput, createProduct);
router.get("/api/products/:id", getSingleProduct);
router.delete("/api/products/:id", deleteProduct);
router.put("/api/products/:id", checkUpdateInput, updateProduct);

export default router;
