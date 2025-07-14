import { useState } from "react";
import iconKeyboard from "../../assets/icons/icon-keyboard.svg";
import { NumericKeyboard } from "../Keyboard/NumericKeyboard";

export function ButtonNumericKeyboard() {
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);

  return (
    <div className="relative">
      <button onClick={() => setShowKeyboard(!showKeyboard)}>
        <img
          src={iconKeyboard}
          alt="Ícone de Teclado"
          className="w-[56px] h-[54px] 2xl:w-[80px] 2xl:h-[78px"
        />
      </button>

      {showKeyboard && (
        <div className="absolute bottom-full right-1 mb-4">
          <NumericKeyboard />
        </div>
      )}
    </div>
  );
}
