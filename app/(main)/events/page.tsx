import { RouteProps } from "@/app/types";
import FilterButton from "@/components/tailwind/filter-button";
import FilterDropdown, { FilterDropdownItem } from "@/components/tailwind/filter-dropdown";
import Link from "next/link";

const filters = [
  {
    label: "All",
    value: undefined,
  },
  {
    label: "Workshops",
    value: "workshop",
  },
];

const clubFilters = [
  {
    label: "All",
    value: undefined,
  },
  {
    label: "NYP Technopreneurship Club",
    value: "nyptech",
  },
  {
    label: "NYP AI",
    value: "nypai",
  },
];

export default async function Page(props: RouteProps) {
  const { category, club } = await props.searchParams;
  // TODO: load events from database
  const events = [
    {
      title: "Event 1",
      description: "Event 1 description",
      date: "2022-01-01",
      club: "nyptech",
      category: "workshop",
    },
    {
      title: "Event 2",
      description: "Event 2 description",
      date: "2022-01-02",
      club: "nypai",
      category: "workshop",
    },
    {
      title: "Event 3",
      description: "Event 3 description",
      date: "2022-01-03",
      club: "nyptech",
      category: "workshop",
    },
  ];

  const currentCategoryFilter = filters.find((filter) => filter.value === category) ?? filters[0];
  const currentClubFilter = clubFilters.find((filter) => filter.value === club) ?? clubFilters[0];

  const filteredPosts = events.filter(
    (post) =>
      (!currentCategoryFilter.value || post.category == currentCategoryFilter.value) &&
      (!currentClubFilter.value || post.club == currentClubFilter.label)
  );

  return (
    <main className={"mx-auto flex w-[90%] flex-col gap-4 p-4"}>
      <div className={"flex justify-between"}>
        <div className={"flex items-center gap-2"}>
          {filters.map((filter) => (
            <FilterButton
              key={filter.label}
              label={filter.label}
              name={"category"}
              value={filter.value}
              active={filter === currentCategoryFilter}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <FilterDropdown className={"btn-sm btn-outline"} label={"Filter Clubs"}>
            {clubFilters.map((filter) => (
              <FilterDropdownItem
                key={filter.label}
                label={filter.label}
                name={"club"}
                value={filter.value}
                active={filter === currentClubFilter}
              />
            ))}
          </FilterDropdown>
        </div>
      </div>
      <div className={"flex flex-col gap-2"}>
        {filteredPosts.map((post) => (
          // <PostItem key={post.metadata.slug} post={post.metadata} />
          <Link
            className={"flex cursor-pointer rounded-lg bg-base-200 shadow-lg transition hover:bg-base-300"}
            href={`#`}
          >
            <div className={"flex flex-1 flex-col p-4"}>
              <div className={"flex-1"}>
                <div className={"flex items-center"}>
                  <h1 className={"flex-1 text-2xl font-bold"}>{post.title}</h1>
                  {/* <p className={"text-sm"}>{post.club}</p> */}
                </div>
                <p className={"mb-3 mt-1 text-gray-600 dark:text-gray-400"}>{post.description}</p>
              </div>
              <div className={"flex"}>
                <p className={"flex-1 text-sm"}>{post.club}</p>
                <p className={"text-sm"}>{post.date}</p>
              </div>
            </div>
            <img
              className={"aspect-video h-[140px] rounded-lg object-cover"}
              src={"https://nyptech.club/assets/placeholder.png"}
              alt={"Event Image"}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
