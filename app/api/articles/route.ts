import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  const { title, content, accountClubname, summary, published } = data

  try {
    const article = await db.article.create({
      data: {
        title,
        content,
        accountClubname,
        summary,
        published,
      },
    })
    return NextResponse.json(article)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to save article' }, { status: 500 })
  }
}
