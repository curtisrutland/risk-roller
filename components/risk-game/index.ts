import type { BattleResults, SkirmishResults } from "./types";

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDie(): number {
  return randomNumber(1, 6);
}

function simulateSkirmish(
  attackers: number,
  defenders: number,
  skirmishNumber: number
): SkirmishResults {
  const attackRolls: number[] = [];
  const defenderRolls: number[] = [];
  let attackersLost = 0;
  let defendersLost = 0;

  // Roll dice for attackers
  for (let i = 0; i < Math.min(attackers, 3); i++) {
    attackRolls.push(rollDie());
  }

  // Roll dice for defenders
  for (let i = 0; i < Math.min(defenders, 2); i++) {
    defenderRolls.push(rollDie());
  }

  // Sort rolls in descending order
  attackRolls.sort((a, b) => b - a);
  defenderRolls.sort((a, b) => b - a);

  // Compare rolls and determine losses
  const fightsCount = Math.min(attackRolls.length, defenderRolls.length);

  for (let i = 0; i < fightsCount; i++) {
    if (attackRolls[i] > defenderRolls[i]) {
      defendersLost++;
    } else {
      attackersLost++;
    }
  }

  return {
    skirmishNumber,
    attackRolls,
    defenderRolls,
    attackersLost,
    defendersLost,
  };
}

export function simulateBattle(
  attackers: number,
  defenders: number
): BattleResults {
  const skirmishResults: SkirmishResults[] = [];
  let attackersRemaining = attackers;
  let defendersRemaining = defenders;

  let skirmishNumber = 0;
  while (attackersRemaining > 0 && defendersRemaining > 0) {
    const results = simulateSkirmish(
      attackersRemaining,
      defendersRemaining,
      ++skirmishNumber
    );
    skirmishResults.push(results);
    attackersRemaining -= results.attackersLost;
    defendersRemaining -= results.defendersLost;
  }

  return {
    attackersRemaining,
    defendersRemaining,
    skirmishResults,
    attackerWins: attackersRemaining > 0,
  };
}
