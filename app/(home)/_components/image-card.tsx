import Image from "next/image";
import { useRouter } from "next/navigation";

interface ImageCardProps {
  label: string;
  code: string;
  type: string;
  slug: string;
  tag?: string;
}

export const ImageCard = ({ label, code, type, slug, tag }: ImageCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/${slug}/${code}`)}
      className="rounded-xl flex flex-col shadow-xl h-[350px] w-[300px] cursor-pointer hover:-translate-y-5 transition-all"
    >
      <Image src={`/home/${code}.jpg`} alt={label} height={220} width={220} className="rounded-t-xl h-[220px]" />
      <p className="p-4 py-4 text-sm text-red-400 font-semibold"> {type.toUpperCase()} </p>
      <div className="flex flex-row gap-2">
        <h2 className="pl-4 px-auto text-xl font-semibold flex flex-row gap-2">{label}</h2>
        {tag && <span className="px-1 text-xs rounded-full bg-red-600 text-white h-4"> {tag.toUpperCase()} </span>}
      </div>
    </div>
  );
};
