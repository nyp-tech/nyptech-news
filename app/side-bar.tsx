import Link from "next/link";

const items = [
  {
    name: "Posts",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Archive",
    href: "/archive",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function SideBar() {
  return (
    <div className={"sticky left-0 top-0 flex h-dvh flex-col gap-4 bg-base-300"}>
      <div className={"flex aspect-square flex-col items-center justify-center"}>
        <img src={"https://nyptech.club/assets/logo.png"} alt={"Logo"} className={"m-4 h-16 w-16"} />
        <div className={"text-2xl font-bold"}>Newsletter</div>
      </div>
      <div className={"px-4"}>
        <label className={"input input-bordered flex items-center gap-2"}>
          <input type={"text"} placeholder={"Search"} />
        </label>
      </div>
      <div className={"flex flex-1 flex-col"}>
        {items.map((item) => (
          <Link
            key={item.href}
            className={"flex items-center justify-center gap-4 p-4 transition hover:bg-base-200"}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className={"flex justify-center gap-4 p-4"}>
        <Link href={"https://go.nyptech.club/instagram"}>
          <i className={"fa-brands fa-instagram fa-xl"} />
        </Link>
        <Link href={"https://go.nyptech.club/telegram"}>
          <i className={"fa-brands fa-telegram fa-xl"} />
        </Link>
        <Link href={"https://go.nyptech.club/telegram"}>
          <i className={"fa-brands fa-whatsapp fa-xl"} />
        </Link>
        <Link href={"https://go.nyptech.club/discord"}>
          <i className={"fa-brands fa-discord fa-xl"} />
        </Link>
      </div>
    </div>
  );
}