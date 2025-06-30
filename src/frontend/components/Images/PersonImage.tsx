import { PersonImageProps } from "../../types/img/PersonImageProps.type";

export function PersonImage({ imgPath }: PersonImageProps) {
  return (
    <div className="h-full aspect-square overflow-hidden">
      <img
        src={imgPath}
        alt="Imagem de uma Pessoa"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
}
