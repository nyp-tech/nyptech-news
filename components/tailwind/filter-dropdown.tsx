// @ts-nocheck

"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

function FilterDropdown(props: { className?: string; label: string; children: React.ReactNode }) {
  const items = React.Children.toArray(props.children);

  return (
    <div className={"dropdown dropdown-end"}>
      <div tabIndex={0} role={"button"} className={clsx("btn", props.className)}>
        {props.label}
      </div>
      <ul className={"dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"}>{items}</ul>
    </div>
  );
}

function FilterDropdownItem(props: { label: string; name: string; value?: string; active: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlSearchParams = new URLSearchParams(searchParams);
  props.value ? urlSearchParams.set(props.name, props.value) : urlSearchParams.delete(props.name);

  const url = new URL(pathname, window.location.origin);
  url.search = urlSearchParams.toString();

  return (
    <li>
      <Link href={url} replace>
        {props.label}
      </Link>
    </li>
  );
}

export default FilterDropdown;
export { FilterDropdownItem };
