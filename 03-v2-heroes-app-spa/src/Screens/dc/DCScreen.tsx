import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HeroesByPublisher } from "../../components/helpers/HeroesByPublisher";
import { ItemScreen } from "../item/ItemScreen";

export interface HeroesInterface {
  id: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

enum Publisher {
  DCComics = "DC Comics",
}

export const DCScreen = () => {
  const [heroes, setHeroes] = useState<any>();
  useEffect(() => {
    const dataHeroesDC = HeroesByPublisher("DC Comics");
    setHeroes(dataHeroesDC);
  }, []);

  return (
    <div className="card-list-items">
      {heroes?.map((hero: HeroesInterface) => (
        <ItemScreen key={hero.id} {...hero} />
      ))}
    </div>
  );
};
