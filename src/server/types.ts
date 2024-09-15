import { z } from "zod";
import { favouriteAnimals, favouriteFoods } from "@/assets/types/globals";

export const UserSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  bio: z.string(),
  favouriteAnimal: z.enum(favouriteAnimals),
  favouriteFood: z.enum(favouriteFoods),
});

export type User = z.infer<typeof UserSchema> & { id: string };
