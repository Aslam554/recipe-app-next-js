import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-[100vh] bg-violet-900 text-white text-center">
       <h1 className="text-center text-4xl font-extrabold text-white font-serif pt-4 pb-[10%]">My Recipe App using NextJs</h1>
       <Link className='text-3xl font-serif  hover:bg-violet-600 bg-white text-red-800 px-4 py-2 hover:scale[1.1]' href={'/recipe-list'}>Explore Recipes</Link>
    </div>
  );
}
