// app/api/save/route.js
import { books } from "../../data/books"; // Adjust the path as needed

export async function POST(request) {
  const { title, genre, author, description } = await request.json();

  // Simulate saving the data
  books.push({ title, genre, author, description });

  return new Response(JSON.stringify({ message: "Book saved successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
