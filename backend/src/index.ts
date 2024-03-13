import express, { Request, Response } from "express";
import { recommendedProducts } from "./dummyData";

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get("/get-product-recommendations", (_: Request, res: Response) => {
  const randomNumber = Math.random();
  console.log('Getting products')

  if (randomNumber > 0.5) {
    const shuffledProducts = recommendedProducts
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const randomProducts = shuffledProducts.slice(0, 5);
    return res.json(randomProducts);
  }

  return res.status(500).send("Internal Server Error");
});

app.get("/get-products-by-category", (req: Request, res: Response) => {
  const products = recommendedProducts.filter((product) => {
    if (product.productType == req.query.productType) return product;
  });

  return res.json(products);
});

if (process.env.TOGGLE_UNFINISHED_FEATURE === "true") {
  app.get("/unfinished-feature", (_: Request, res: Response) => {
    // Oh no, this feature is not ready for production!
    return res.status(500).send("Internal Server Error");
  });
}

let server = app.listen(5000, () => {
  if(server != null) {
    console.log(`[server]: Server is running at http://localhost:`);
    console.log('list', server.address())
  }
});
