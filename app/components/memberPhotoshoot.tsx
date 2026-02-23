import Link from "next/link";
export default function MemberPhotoshoot({imageUrl, caption, instagramUrl}: {imageUrl: string, caption: string, instagramUrl: string}) {
  return (
    <div className="flex flex-col justify-center items-center">
                    <img src={imageUrl} alt={caption} className="rounded-lg shadow-md/20 border-2 border-red-300" />
                    <p className="text-center py-1 text-lg">{caption}</p>
                    <Link href={instagramUrl} target="_blank" className="block active:bg-red-300 bg-red-400 px-3 py-2 max-w-max rounded-md mt-2 mx-auto text-white">View on Instagram</Link>
                   
                </div>
  );
}