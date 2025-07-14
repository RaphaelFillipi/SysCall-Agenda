import iconPhoneAccepted from "../../../assets/icons/icon-phone-accepted.svg";

export function ButtonPhoneCallAccepted() {
  return (
    <button className="p-3 md:py-3 md:px-4 w-full rounded-[7px] bg-gray-light md:hover:shadow-box">
      <img
        src={iconPhoneAccepted}
        alt="Ícone de efetuar ligação"
        className=""
      />
    </button>
  );
}
