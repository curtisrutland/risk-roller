"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "@heroui/button";
import { NumberInput } from "@heroui/number-input";
import { BattleResults } from "./risk-game/types";
import { simulateBattle } from "./risk-game";
import { RiskResults } from "./risk-results";

export const RiskRoller = () => {
  const [attackers, setAttackers] = useState(3);
  const [defenders, setDefenders] = useState(2);
  const [result, setResult] = useState<BattleResults>();

  function updateAttackers(e: number | ChangeEvent<HTMLInputElement>) {
    if (typeof e === "number") {
      setAttackers(e);
    } else {
      setAttackers(Number(e.target.value));
    }
  }

  function updateDefenders(e: number | ChangeEvent<HTMLInputElement>) {
    if (typeof e === "number") {
      setDefenders(e);
    } else {
      setDefenders(Number(e.target.value));
    }
  }

  function handleBattle() {
    const result = simulateBattle(attackers, defenders);
    setResult(result);
  }

  return (
    <div className="w-full max-w-sm flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <NumberInput
          color="danger"
          value={attackers}
          onChange={(e) => updateAttackers(e)}
          min={1}
          label="Attackers"
          name="attackers"
        />
        <NumberInput
          color="primary"
          value={defenders}
          onChange={(e) => updateDefenders(e)}
          min={1}
          label="Defenders"
          name="defenders"
        />
      </div>
      <Button className="w-full" type="button" onPress={handleBattle}>
        Battle!
      </Button>
      {result && <RiskResults results={result} />}
    </div>
  );
};
