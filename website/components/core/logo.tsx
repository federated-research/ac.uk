import Link from "next/link";



export const Logo = () => {
  return (
    <Link href="/" className="flex items-center h-40 w-40">
      <img src="/logos/fedres_white.png" alt="logo" />
    </Link>
  );
};
