import { eq } from "drizzle-orm";
import Banner from "~/components/banner/banner";
import Hero from "~/components/hero";
import ItemGrid from "~/components/itemgrid";
import Share from "~/components/share";
import { db } from "~/server/db";
import { products, images, productDetails } from "~/server/db/schema";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const product = await db
    .select()
    .from(products)
    .innerJoin(productDetails, eq(products.id, productDetails.productId))
    .innerJoin(images, eq(productDetails.id, images.productDetailId));
  //console.log(product);

  return (
    <main>
      <Banner />
      <Hero />
      <ItemGrid />
      <Share />
    </main>
  );
}
