
import { getPosts } from "@/lib/posts";
import { RouteProps } from "./types";
import PostCarousel from "@/components/tailwind/post-carousel";
import FilterButton from "@/components/tailwind/filter-button";
import PostItem from "@/components/tailwind/post-item";
import Home from "./signin";

const filters = [
  {
    label: "All",
    value: undefined,
  },
  {
    label: "Events",
    value: "events",
  },
  {
    label: "Tips & Tricks",
    value: "tricks",
  },
];

export default async function Page(props: RouteProps) {
  const { category } = await props.searchParams;
  const posts = getPosts();

  const currentFilter = filters.find((filter) => filter.value === category) ?? filters[0];
  const filteredPosts = posts.filter((post) => !currentFilter.value || post.metadata.category == currentFilter.value);

  return (
    <main className={"mx-auto flex w-[90%] flex-col gap-4 p-4"}>
      <Home/>
      <PostCarousel>
        {posts.map((post) => (
          <PostCarousel.Item key={post.metadata.slug}>
            <img className={"w-full"} src={post.metadata.image} />
            <div className={"absolute bottom-5 left-5 w-full"}>
              <div className={"text-4xl font-bold"}>{post.metadata.title}</div>
              <div>{post.metadata.date}</div>
            </div>
          </PostCarousel.Item>
        ))}
      </PostCarousel>
      {/* <div className={"grid grid-cols-[2fr,1fr,1fr] grid-rows-[1fr,fr] gap-2"}>
        <div className={"relative row-span-2"}>
          <img src={"https://nyptech.club/assets/placeholder.png"} />
          <div className={"absolute bottom-5 left-5"}>
            <div className={"text-4xl font-bold"}>Title</div>
            <div>Subtitle</div>
          </div>
        </div>
        <img src={"https://nyptech.club/assets/placeholder.png"} />
        <img src={"https://nyptech.club/assets/placeholder.png"} className={"row-span-1 w-full"} />
        <img src={"https://nyptech.club/assets/placeholder.png"} className={"row-span-1 w-full"} />
        <img src={"https://nyptech.club/assets/placeholder.png"} className={"row-span-1 w-full"} />
      </div> */}
      <div className={"flex gap-2"}>
        {filters.map((filter) => (
          <FilterButton
            key={filter.label}
            label={filter.label}
            name={"category"}
            value={filter.value}
            active={filter === currentFilter}
          />
        ))}
      </div>
      <div className={"flex flex-col gap-2"}>
        {filteredPosts.map((post) => (
          <PostItem key={post.metadata.slug} post={post.metadata} />
        ))}
      </div>
    </main>
  );
}