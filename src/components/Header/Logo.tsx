import MyLogo from "../../assets/logo.svg?react";

export default function Logo() {
  return (
    <div
      className="flex-center cursor-pointer transition-all duration-300 ease-in hover:scale-125"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <MyLogo className="w-14 h-14" />
    </div>
  );
}
