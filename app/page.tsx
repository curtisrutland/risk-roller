import { Dice } from "@/components/dice";
import { title, generateUniqueColorPair } from "@/components/primitives";
import { RiskRoller } from "@/components/risk-roller";

export default function Home() {
  const [color1, color2] = generateUniqueColorPair();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: color1 as any })}>RISK</span>
        <span className={title({ color: color2 as any })}>ROLLER</span>
      </div>

      <div className="mt-8">
        <RiskRoller />
        <Dice face={5} color="red" />
      </div>
    </section>
  );
}
