import { Dice } from "@/components/dice";
import { RiskRoller } from "@/components/risk-roller";
import Title from "@/components/title";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Title />

      <div className="mt-8">
        <RiskRoller />
      </div>
    </section>
  );
}
