import clsx from "clsx";
import Link from "next/link";
import React from "react";

function PostCarousel(props: { children: React.ReactNode }) {
  const items = React.Children.toArray(props.children).filter(
    (child) => React.isValidElement(child) && child.type === PostCarousel.Item
  );

  const itemElements = items.map((item, index) => {
    return (
      <div key={index} id={`slide${index}`} className={"carousel-item relative w-full h-[400px]"}>
        {item}
        <div className={"absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"}>
          <Link
            href={index > 0 ? `#slide${index - 1}` : `#slide${index}`}
            className={clsx("btn btn-circle", index > 0 || "opacity-0")}
          >
            ❮
          </Link>
          <Link
            href={index < items.length - 1 ? `#slide${index + 1}` : `#slide${index}`}
            className={clsx("btn btn-circle", index < items.length - 1 || "opacity-0")}
          >
            ❯
          </Link>
        </div>
      </div>
    );
  });

  return <div className={"carousel w-full"}>{itemElements}</div>;
}

PostCarousel.Item = (props: { children: React.ReactNode }) => props.children;

export default PostCarousel;
