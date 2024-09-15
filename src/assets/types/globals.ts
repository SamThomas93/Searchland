export type NavItem = {
  url: string;
  label: string;
  button: boolean;
};

export type TableColumn = {
  label: string;
  data: (r: TableRow, c: TableColumn) => string;
  sortable: boolean;
};

export const favouriteFoods = [
  "BURGER",
  "PIZZA",
  "CHIPS",
  "SALAD",
  "CHEESE",
  "CHOCOLATE",
  "CAKE",
  "APPLE",
] as const;

export type FavouriteFoods = (typeof favouriteFoods)[number];

export const favouriteAnimals = [
  "CAT",
  "DOG",
  "MOUSE",
  "PIG",
  "DUCK",
  "GOAT",
  "KANGAROO",
  "RABBIT",
] as const;

export type FavouriteAnimals = (typeof favouriteAnimals)[number];

export type TableRow = {
  id: string;
  firstName: string;
  lastName: string;
  favouriteFood: FavouriteFoods;
  favouriteAnimal: FavouriteAnimals;
};

export type FavouriteSelectItem = {
  value: string;
  label: string;
  icon: string;
};
