import React from "react";
import Crossword, {
  Grid,
  Cell,
  HiddenInput,
  Controls,
  ConfirmButton,
  AnagramHelper,
  ClueInput,
  Ring,
  CluePreview,
  Clues,
  Clue,
} from "react-crossword";

const MythoCrossword = () => {
  const data = {
    id: "simple/1",
    number: 1,
    name: "Simple Crossword 1",
    date: 1542326400000,
    entries: [
      {
        id: "1-across",
        number: 1,
        humanNumber: "1",
        clue: "Name of Arjun in 13 years of exile",
        direction: "across",
        length: 10,
        group: ["1-across"],
        position: { x: 0, y: 4 },
        separatorLocations: {
          "-": [2],
        },
        solution: "BRIHANNALA",
      },
      {
        id: "2-across",
        number: 2,
        humanNumber: "2",
        clue: "Daughter of king Dasharatha and Kausalya",
        direction: "across",
        length: 6,
        group: ["2-across"],
        position: { x: 0, y: 1 },
        separatorLocations: {
          ",": [3],
        },
        solution: "SHANTA",
      },
      {
        id: "1-down",
        number: 1,
        humanNumber: "1",
        clue: "Strongest of 5 pandavas",
        direction: "down",
        length: 5,
        group: ["1-down"],
        position: { x: 0, y: 4 },
        separatorLocations: {},
        solution: "BHEEM",
      },
      {
        id: "3-down",
        number: 3,
        humanNumber: "3",
        clue: "Mother of Dhritarashtra",
        direction: "down",
        length: 6,
        group: ["3-down"],
        position: { x: 2, y: 1 },
        separatorLocations: {
          ",": [4],
        },
        solution: "AMBIKA",
      },
      {
        id: "4-down",
        number: 4,
        humanNumber: "4",
        clue: "Mother of Ravan",
        direction: "down",
        length: 7,
        group: ["4-down"],
        position: {
          x: 6,
          y: 3,
        },
        separatorLocations: {},
        solution: "KAIKESI",
      },
    ],
    solutionAvailable: true,
    dateSolutionAvailable: 1542326400000,
    dimensions: {
      cols: 13,
      rows: 13,
    },
    crosswordType: "quick",
  };

  return (
    <Crossword data={data} style={{paddingTop:"205px"}}>
      <Grid>
        <Cell />
      </Grid>

      <HiddenInput />

      <Controls>
        <ConfirmButton />
      </Controls>

      <AnagramHelper>
        <Ring />
        <CluePreview />
      </AnagramHelper>

      <Clues>
        <Clue />
      </Clues>
    </Crossword>
  );
};

export default MythoCrossword;
