export interface SkirmishResults {
  skirmishNumber: number;
  attackRolls: number[];
  defenderRolls: number[];
  attackersLost: number;
  defendersLost: number;
}

export interface BattleResults {
  attackersRemaining: number;
  defendersRemaining: number;
  attackerWins: boolean;
  skirmishResults: SkirmishResults[];
}