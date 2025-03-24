import { Header } from "@/Components/Header";
import BlogList from "@/Components/blog-list";
import NewsletterSignup from "@/Components/newsletter-signup";
import { Footer } from "@/Components/footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <BlogList />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
