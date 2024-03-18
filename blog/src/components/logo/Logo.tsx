import Link from "next/link";

interface Props{
  title?: string;
  className?: string;
}

function Logo({ title, className }: Props)
{
  return (
    <Link href={"/"}>
      <h1 className={`text-3xl font-extrabold uppercase ${className}`}>{title}</h1>
    </Link>
    
  )
}

export default Logo;