import prisma from "../database";
import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

export async function getBooks() {
  const result = await prisma.books.findMany();

  console.log(result);

  return result;
}

export async function getBook(id: number) {
  const result = await prisma.books.findFirst({
    where: { id }
  });
  console.log(result);
  return result;
}

export async function createBook(book: CreateBook) {

  const result = await prisma.books.create({
    data: book
  });

  console.log(result);

  return result;
}

export async function reviewBook(bookReview: CreateReview) {

  const id: number = bookReview.bookId;

  type Review = {
    grade: number,
    review: string
  }

  const review: Review = {
    grade: bookReview.grade,
    review: bookReview.review
  }

  const result = await prisma.books.update({
    data: review,
    where: { id }
  });

  console.log(result);
  return result;
}