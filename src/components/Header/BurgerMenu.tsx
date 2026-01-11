// src/components/Header/BurgerMenu.tsx
type BurgerMenuProps = {
  onClick: () => void; // prop obrigatória
};

export default function BurgerMenu({ onClick }: BurgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-1 p-2 md:hidden"
      aria-label="Open menu"
    >
      <span className="block w-6 h-0.5 bg-black"></span>
      <span className="block w-6 h-0.5 bg-black"></span>
      <span className="block w-6 h-0.5 bg-black"></span>
    </button>
  );
}
