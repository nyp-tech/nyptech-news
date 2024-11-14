import { RouteProps } from "@/app/types";
import { getPost } from "@/lib/posts";
import Markdown from "react-markdown";

export default async function Page(props: RouteProps) {
  const { slug } = await props.params;
  const post = getPost(slug);

  if (!post) return <div>Not Found</div>;

  return (
    <div className={"mx-auto my-8 w-[80%] rounded-xl bg-base-300 p-8"}>
      <h1 className={"mb-4 text-2xl font-bold"}>{post.metadata.title}</h1>
      <p className={"prose"}>
        <Markdown>{post.content}</Markdown>
      </p>
    </div>
  );
}