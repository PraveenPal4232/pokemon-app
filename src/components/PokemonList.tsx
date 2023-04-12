"use client";

import react, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import client from "../services/index";

export default function PokemonList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    client
      .query({
        query: gql`
          query (
            $reverse: Boolean
            $offsetFlavorTexts: Int
            $takeFlavorTexts: Int
            $reverseFlavorTexts: Boolean
          ) {
            getAllPokemon(
              offset: 0
              take: 20
              reverse: $reverse
              offsetFlavorTexts: $offsetFlavorTexts
              takeFlavorTexts: $takeFlavorTexts
              reverseFlavorTexts: $reverseFlavorTexts
            ) {
              key
              backSprite
              baseForme
              baseSpecies
              baseStats {
                attack
                defense
                hp
                specialattack
                specialdefense
                speed
              }
              baseStatsTotal
              bulbapediaPage
              catchRate {
                base
                percentageWithOrdinaryPokeballAtFullHealth
              }
              color
              cosmeticFormes
              eggGroups
              evolutionLevel
              evolutions {
                key
                backSprite
                baseForme
                baseSpecies
                baseStatsTotal
                bulbapediaPage
                color
                cosmeticFormes
                eggGroups
                evolutionLevel
                forme
                formeLetter
                height
                isEggObtainable
                levellingRate
                maximumHatchTime
                minimumHatchTime
                num
                otherFormes
                serebiiPage
                shinyBackSprite
                shinySprite
                smogonPage
                smogonTier
                species
                sprite
                weight
              }
              evYields {
                attack
                defense
                hp
                specialattack
                specialdefense
                speed
              }
              flavorTexts {
                flavor
                game
              }
              forme
              formeLetter
              gender {
                female
                male
              }
              height
              isEggObtainable
              levellingRate
              maximumHatchTime
              minimumHatchTime
              num
              otherFormes
              preevolutions {
                key
                backSprite
                baseForme
                baseSpecies
                baseStatsTotal
                bulbapediaPage
                color
                cosmeticFormes
                eggGroups
                evolutionLevel
                forme
                formeLetter
                height
                isEggObtainable
                levellingRate
                maximumHatchTime
                minimumHatchTime
                num
                otherFormes
                serebiiPage
                shinyBackSprite
                shinySprite
                smogonPage
                smogonTier
                species
                sprite
                weight
              }
              serebiiPage
              shinyBackSprite
              shinySprite
              smogonPage
              smogonTier
              species
              sprite
              types {
                name
              }
              weight
            }
          }
        `,
      })
      .then((result) => console.log(result));
  });

  return <h1>PokemonList</h1>;
}
