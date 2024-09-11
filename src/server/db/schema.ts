// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  integer,
  text,
  pgEnum,
} from "drizzle-orm/pg-core";
import { url } from "inspector";
import { number } from "zod";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `ecom_${name}`);
export const sizeEnum = pgEnum("size", ["sm", "md", "xl", "xxl"]);

export const roomEnum = pgEnum("room", ["Dinning", "Living", "Bedroom"]);
export const categories = createTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  imageUrl: text("imageUrl"),
});
export const products = createTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("dexcription"),
  price: integer("price").notNull(),
  onSale: integer("onSale"),
  room: roomEnum("room"),
  categoryId: integer("categoryID")
    .references(() => categories.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});
export const productDetails = createTable("productDetails", {
  id: serial("id").primaryKey(),
  color: varchar("color", { length: 256 }).notNull(),
  size: sizeEnum("size").notNull(),
  quantity: integer("quantity").notNull(),
  productId: integer("productId")
    .references(() => products.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});
export const images = createTable("images", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  url: varchar("url", { length: 1024 }).notNull(),
  productDetailId: integer("productId")
    .references(() => productDetails.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export type Product = typeof products.$inferSelect;
export type Category = typeof categories.$inferSelect;
export type Image = typeof images.$inferSelect;
