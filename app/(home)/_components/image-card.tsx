import Image from "next/image";

interface ImageCardProps {
  label: string;
  code: string;
  type: string;
  tag?: string;
}

export const ImageCard = ({ label, code, type, tag }: ImageCardProps) => {
  return (
    <div className="rounded-xl flex flex-col shadow-xl h-[350px] w-[300px] cursor-pointer hover:-translate-y-5 transition-all">
      <Image src={`/home/${code}.jpg`} alt={label} height={300} width={300} className="rounded-t-xl h-[220px] w-auto" />
      <p className="p-4 py-4 text-sm text-red-400 font-semibold"> {type.toUpperCase()} </p>
      <div className="flex flex-row gap-2">
        <h2 className="pl-4 px-auto text-xl font-semibold flex flex-row gap-2">{label}</h2>
        {tag && <span className="px-1 text-xs rounded-full bg-red-600 text-white h-4"> {tag.toUpperCase()} </span>}
      </div>
    </div>
  );
};
