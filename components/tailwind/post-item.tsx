import { PostMetadata } from "@/lib/posts";
import Link from "next/link";

export default function PostItem(props: { post: PostMetadata }) {
  return (
    <Link
      className={"flex cursor-pointer rounded-lg bg-base-200 shadow-lg transition hover:bg-base-300"}
      href={`/posts/${props.post.slug}`}
    >
      <div className={"flex flex-1 flex-col p-4"}>
        <div className={"flex-1"}>
          <div className={"flex items-center"}>
            <h1 className={"flex-1 text-2xl font-bold"}>{props.post.title}</h1>
            <p className={"text-sm"}>{props.post.author}</p>
          </div>
          <p className={"mb-3 mt-1 text-gray-600 dark:text-gray-400"}>{props.post.summary}</p>
        </div>
        <div className={"flex"}>
          <p className={"flex-1 text-sm"}>{props.post.club}</p>
          <p className={"text-sm"}>{props.post.date}</p>
        </div>
      </div>
      <img className={"aspect-video h-[140px] rounded-lg object-cover"} src={props.post.image} alt={props.post.title} />
    </Link>
  );
}