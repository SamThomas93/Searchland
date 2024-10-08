"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// TRPC
import { trpc } from "@/utils/trpc";

// Data
import { favouriteAnimals, favouriteFoods } from "@/assets/data/favourites";

// Components
import Button from "@/components/button";
import Modal from "@/components/modal";

// Types
import type { User } from "@/server/types";

export default function Profile({ user }: { user: User }) {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const deleteUser = trpc.deleteUser.useMutation({
    onSettled: () => {
      setShowSuccessModal(true);
    },
  });

  const removeUser = () => {
    deleteUser.mutate({ id: user.id });
  };

  return (
    <>
      <div className="border-[1px] border-solid border-gray-100 p-3 min-h-24 text-center flex justify-center items-center">
        {user.bio ? <p>{user.bio}</p> : <p>No Bio</p>}
      </div>

      <div className="flex flex-row gap-6 my-6">
        <div className="flex flex-col rounded-[5px] items-center justify-center py-6 border-[1px] border-gray-100 border-solid w-1/2">
          <p>Favourite Food</p>
          <span className="text-4xl mb-2 mt-6">
            {favouriteFoods[user.favouriteFood].icon}
          </span>
          <p>{favouriteFoods[user.favouriteFood].label}</p>
        </div>

        <div className="flex flex-col rounded-[5px] items-center justify-center py-6  border-[1px] border-gray-100 border-solid w-1/2">
          <p>Favourite Animal</p>
          <span className="text-4xl mb-2 mt-6">
            {favouriteAnimals[user.favouriteAnimal].icon}
          </span>
          <p>{favouriteAnimals[user.favouriteAnimal].label}</p>
        </div>
      </div>

      <Button
        label="Delete"
        onClick={removeUser}
        className="bg-red-500 text-darkSlateGrey"
      />

      {showSuccessModal ? (
        <Modal
          title={"Delete"}
          desc={"User deleted successfully"}
          actions={
            <Button
              label={"Close"}
              onClick={() => {
                setShowSuccessModal(false);
                router.push("/");
              }}
            />
          }
        />
      ) : null}
    </>
  );
}
