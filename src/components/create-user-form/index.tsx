"use client";

import { trpc } from "@/utils/trpc";
import { useMemo, useState } from "react";
import TextField from "@/components/create-user-form/text-field";
import TextArea from "@/components/create-user-form/text-area";
import FavouriteSelect from "@/components/create-user-form/favourite-select";
import { favouriteAnimals, favouriteFoods } from "@/assets/data/favourites";
import Button from "@/components/button";
import { UserSchema } from "@/server/types";

export default function CreateUserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");

  const [favouriteFood, setFavouriteFood] = useState<string>("");
  const [favouriteAnimal, setFavouriteAnimal] = useState<string>("");

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const addUser = trpc.addUser.useMutation({
    onSettled: () => {
      alert("Added User");
      clear();
    },
  });

  const favouriteFoodOptions = useMemo(() => Object.values(favouriteFoods), []);
  const favouriteAnimalsOptions = useMemo(
    () => Object.values(favouriteAnimals),
    [],
  );

  const add = () => {
    setFormErrors({});
    const newErrors: Record<string, string> = {};

    const validationResult = UserSchema.safeParse({
      firstName,
      lastName,
      bio,
      favouriteFood,
      favouriteAnimal,
    });

    if (!validationResult.success) {
      validationResult.error.issues.forEach((issue) => {
        const zodFieldName = String(issue.path);

        if (!newErrors[zodFieldName]) {
          newErrors[zodFieldName] = issue.message;
        }
      });

      setFormErrors(newErrors);
    } else {
      const { data } = validationResult;
      addUser.mutate(data);
    }
  };

  const clear = () => {
    setFirstName("");
    setLastName("");
    setBio("");
    setFavouriteFood("");
    setFavouriteAnimal("");
    setFormErrors({});
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-x-16">
        <div className="flex flex-col w-full md:w-1/2">
          <TextField
            label={"First Name"}
            value={firstName}
            onChange={setFirstName}
            error={formErrors["firstName"]}
          />

          <TextField
            label={"Last Name"}
            value={lastName}
            onChange={setLastName}
            error={formErrors["lastName"]}
          />

          <TextArea
            label={"Bio"}
            value={bio}
            onChange={setBio}
            error={formErrors["bio"]}
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <FavouriteSelect
            label={"Favourite Food"}
            value={favouriteFood}
            onChange={setFavouriteFood}
            options={favouriteFoodOptions}
            error={formErrors["favouriteFood"]}
          />

          <FavouriteSelect
            label={"Favourite Animals"}
            value={favouriteAnimal}
            onChange={setFavouriteAnimal}
            options={favouriteAnimalsOptions}
            error={formErrors["favouriteAnimal"]}
          />
        </div>
      </div>

      <div className="flex flex-row gap-2 justify-end">
        <Button label="Clear" onClick={clear} />
        <Button label="Add" onClick={add} className="bg-primaryGreen" />
      </div>
    </div>
  );
}
