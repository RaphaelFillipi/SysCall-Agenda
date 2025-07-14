import { useState, useRef, useEffect } from "react";
import { NUMERIC_KEYBOARD_VALUES } from "../../constants/keyboardValues";
import { ButtonWithKeyboardValues } from "./Button/ButtonWithKeyboardValues";
import { ButtonPhoneCallAccepted } from "./Button/ButtonPhoneCallAccepted";

export function NumericKeyboard() {
  const [keyboardValues, setKeyboardValues] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  }, [keyboardValues]);

  const handleInsert = (value: string) => {
    setKeyboardValues((prev) => prev + value);
  };

  const handleDelete = () => {
    setKeyboardValues(keyboardValues.slice(0, -1));
  };

  const handleClear = () => {
    setKeyboardValues(" ");
  };

  return (
    <div className="flex flex-col rounded-[12px] space-y-4 bg-white-primary w-[300px] md:w-[360px] p-5 shadow-box-card">
      <input
        className="p-3 rounded-[12px] w-full bg-gray-light text-gray-dark border-2 border-gray-primary md:text-[26px] outline-none caret-green-dark cursor-text"
        value={keyboardValues}
        readOnly
        onKeyDown={(e) => e.preventDefault()}
        ref={inputRef}
      />

      <div className="grid grid-cols-5 gap-2 md:gap-2.5 text-white">
        {NUMERIC_KEYBOARD_VALUES.map((value: string, index: number) => (
          <ButtonWithKeyboardValues
            key={index}
            value={value}
            onClick={() => handleInsert(value)}
          />
        ))}

        <div className="col-span-2">
          <ButtonWithKeyboardValues
            value="Del"
            onClick={() => handleDelete()}
          />
        </div>

        <div className="col-span-4">
          <ButtonWithKeyboardValues
            value="Limpar"
            onClick={() => handleClear()}
          />
        </div>

        <ButtonPhoneCallAccepted />
      </div>
    </div>
  );
}
