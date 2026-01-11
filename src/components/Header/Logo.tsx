// src/components/Header/Logo.tsx
type LogoProps = {
  color?: "black" | "white"; // você pode limitar as cores para Tailwind
};

export default function Logo({ color = "black" }: LogoProps) {
  const colorClass = color === "black" ? "text-black" : "text-white";

  return (
    <div className={`${colorClass} font-bold text-xl`}>
      MyLogo
    </div>
  );
}
