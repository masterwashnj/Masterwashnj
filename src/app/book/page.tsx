import { redirect } from "next/navigation";
import { bookLink } from "@/lib/site";

/** Entrada directa a reservas → Square (el agendador del cliente se mantiene). */
export default function BookPage() {
  redirect(bookLink("book_route"));
}
