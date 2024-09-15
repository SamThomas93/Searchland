import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { favouriteAnimals, favouriteFoods } from "@/assets/types/globals";

export const users = sqliteTable("users", {
  id: text("id").primaryKey().notNull(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  bio: text("bio").notNull(),
  favouriteFood: text("favouriteFood", { enum: favouriteFoods }).notNull(),
  favouriteAnimal: text("favouriteAnimal", {
    enum: favouriteAnimals,
  }).notNull(),
});
