import { BattleResults } from "./risk-game/types";

interface RiskResultsProps {
  results: BattleResults;
}

export function RiskResults({ results }: RiskResultsProps) {
  return (
    <>
      <div className={`text-${results.attackerWins ? "danger" : "primary"}`}>
        {results.attackerWins ? "Attacker" : "Defender"} Wins
      </div>
      <div className="text-danger">
        Attackers Remaining: {results.attackersRemaining}
      </div>
      <div className="text-primary">
        Defenders Remaining: {results.defendersRemaining}
      </div>
    </>
  );
}
