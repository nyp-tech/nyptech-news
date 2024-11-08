//@ts-nocheck

"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type FilterButtonProps = {
  label: string;
  name: string;
  value?: string;
  active: boolean;
};

export default function FilterButton(props: FilterButtonProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlSearchParams = new URLSearchParams(searchParams);
  props.value ? urlSearchParams.set(props.name, props.value) : urlSearchParams.delete(props.name);

  const url = new URL(pathname, window.location.origin);
  url.search = urlSearchParams.toString();

  return (
    <Link className={clsx("btn btn-sm", props.active ? "btn-primary" : "btn-outline")} href={url} replace>
      {props.label}
    </Link>
  );
}