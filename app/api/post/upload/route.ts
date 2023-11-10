import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const image_url = searchParams.get("image_url");
	const title = searchParams.get("title");
	const text = searchParams.get("text");
	const post_date = searchParams.get("post_date");
	const user_id = searchParams.get("user_id");

	try {
		const result =
			await sql`INSERT INTO blog_posts (image_url, title, text, post_date, user_id) 
            VALUES 
            ('${image_url}', '${title}', '${text}', '${post_date}', ${user_id});`;
		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
