import Markdown from "react-markdown";

export default function Page() {
  return (
    <div className={"mx-auto my-8 w-[60%] rounded-xl bg-base-300 p-8"}>
      <p className={"prose max-w-full"}>
        <Markdown>Todo</Markdown>
      </p>
    </div>
  );
}
