import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";
import Menu from "@/components/tailwind/ui/menu";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface Prop {
  params: {
    id: string;
    article: string
  };
}

export default async function Page({ params }: Prop) {
  const content = await db.article.findFirst({
    where: {
      accountClubname: params.id,
      id: params.article
    },
  });

  if (!content) {
    notFound();
  }

  return (
    <div>
      Clubname: {content.accountClubname}
{content.content}
      <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
        <Menu />
        <TailwindAdvancedEditor clubname={content.accountClubname} title={content.title}/>
      </div>
    </div>
  );
}
