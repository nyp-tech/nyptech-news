import { RouteProps } from "@/app/types";
import { getPost } from "@/lib/posts";
import Markdown from "react-markdown";

export default async function Page(props: RouteProps) {
  const { slug } = await props.params;
  const post = getPost(slug);

  if (!post) return <div>Not Found</div>;

  return (
    <div className={"mx-auto my-8 w-[80%] rounded-xl bg-base-300 p-8"}>
      <div>
        <h1 className={"text-5xl font-bold"}>{post.metadata.title}</h1>
        <p className={"mt-4 flex gap-4"}>
          <span className={"flex items-center gap-2"}>
            <i className={"fa-solid fa-house fa-lg"} />
            <span className={"text-sm"}>{post.metadata.club}</span>
          </span>
          <span className={"flex items-center gap-2"}>
            <i className={"fa-solid fa-user fa-lg"} />
            <span className={"text-sm"}>{post.metadata.author}</span>
          </span>
          <span className={"flex items-center gap-2"}>
            <i className={"fa-solid fa-calendar fa-lg"} />
            <span className={"text-sm"}>{post.metadata.date}</span>
          </span>
        </p>
      </div>
      <div className={"divider"} />
      <p className={"prose max-w-full"}>
        <Markdown>{post.content}</Markdown>
      </p>
    </div>
  );
}