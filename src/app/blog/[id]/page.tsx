import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/footer";
import NewsletterSignup from "@/Components/newsletter-signup";
import { Button } from "@/Components/ui/button";
import { Twitter, Facebook, Linkedin } from "lucide-react";

// This would typically come from a database or API
const getBlogPostData = (id: string) => {
  const blogPosts = {
    "search-engine-submission": {
      title: "Is Search Engine Submission Necessary?",
      date: "April 17, 2014",
      author: "John Smith",
      category: "SEO",
      imageUrl:
        "/placeholder.svg?height=500&width=800&text=SEO+Submission&bg=00bcd4",
      content: `
        <p>The simple answer is no - search engine submission isn't necessary. The majority of search engines nowadays (most notably Google) crawl and index pages by following links. They discover new pages and websites as their bots scrape the web for new content.</p>
        
        <p>Google's crawlers continuously search the web for new and updated pages, adding them to their index when found. This process happens automatically without any need for manual submission.</p>
        
        <h2>Why Search Engine Submission Services Are Unnecessary</h2>
        
        <p>Many companies offer search engine submission services, promising to submit your website to thousands of search engines. These services are generally unnecessary for several reasons:</p>
        
        <ul>
          <li>Google, Bing, and Yahoo account for over 95% of all search traffic</li>
          <li>These major search engines will find your site naturally through links</li>
          <li>Mass submission can sometimes look spammy</li>
        </ul>
        
        <h2>Better Alternatives to Search Engine Submission</h2>
        
        <p>Instead of focusing on search engine submission, website owners should concentrate on:</p>
        
        <ol>
          <li><strong>Creating quality content</strong> that naturally attracts links</li>
          <li><strong>Building a logical site structure</strong> with good internal linking</li>
          <li><strong>Developing a strong backlink profile</strong> from reputable websites</li>
          <li><strong>Using social media</strong> to promote content and attract visitors</li>
        </ol>
        
        <h2>When Manual Submission Makes Sense</h2>
        
        <p>There are a few specific cases where manual submission can be helpful:</p>
        
        <p><strong>1. Brand new websites with no backlinks</strong> - If you've just launched a website and have no external links pointing to it, submitting your sitemap to Google Search Console can help get it indexed faster.</p>
        
        <p><strong>2. Local business directories</strong> - Submitting your business to Google Business Profile and other local directories can improve local SEO.</p>
        
        <h2>Conclusion</h2>
        
        <p>While search engine submission isn't necessary for most websites, focusing on creating quality content, building a strong link profile, and maintaining good technical SEO practices will ensure your site gets properly indexed and ranked in search results.</p>
      `,
    },
    "inbound-linking": {
      title: "Can Any Inbound Linking Hurt My Ranking?",
      date: "April 17, 2014",
      author: "Jane Doe",
      category: "Link Building",
      imageUrl:
        "/placeholder.svg?height=500&width=800&text=Inbound+Links&bg=2c5282",
      content: `
        <p>The answer is simple - inbound linking cannot hurt your search ranking. How is this known for certain? Well, for one, if inbound were to hurt your rank, your competitors would all be busy linking to your site from link farms. Rather than improving their own sites, they could simply damage yours.</p>
        
        <p>For this reason, Google and other search engines have systems in place to identify and ignore spammy or low-quality links. This system is called "link evaluation" and it's a core part of how search engines determine the value of links.</p>
        
        <h2>How Google Evaluates Links</h2>
        
        <p>Google doesn't count all links equally. They evaluate links based on several factors:</p>
        
        <ul>
          <li><strong>Authority of the linking domain</strong> - Links from established, trusted websites carry more weight</li>
          <li><strong>Relevance of the linking page</strong> - Links from content related to your industry are more valuable</li>
          <li><strong>Anchor text</strong> - The text used in the link provides context about your page</li>
          <li><strong>Link position</strong> - Links within content are typically more valuable than those in footers or sidebars</li>
        </ul>
        
        <h2>The Google Disavow Tool</h2>
        
        <p>While inbound links generally can't hurt your ranking, there are rare exceptions. If Google detects a pattern of unnatural links pointing to your site, they might apply a manual penalty. For these situations, Google provides the Disavow Tool, which allows webmasters to tell Google to ignore certain links.</p>
        
        <p>However, this tool should be used with extreme caution and only in cases where:</p>
        
        <ol>
          <li>You've received a manual penalty notification in Google Search Console</li>
          <li>You have clear evidence of a negative SEO attack</li>
          <li>You've previously engaged in questionable link building practices</li>
        </ol>
        
        <h2>Conclusion</h2>
        
        <p>In general, you don't need to worry about bad links hurting your ranking. Google's algorithms are sophisticated enough to identify and ignore spammy links without penalizing your site. Instead of worrying about bad links, focus on creating quality content and earning legitimate links from relevant, authoritative websites.</p>
      `,
    },
    "anchor-text": {
      title: "The Importance of Anchor Text in Back-links",
      date: "April 17, 2014",
      author: "Mike Johnson",
      category: "Link Building",
      imageUrl:
        "/placeholder.svg?height=500&width=800&text=Anchor+Text&bg=ff5722",
      content: `
        <p>The importance of anchor text with respect to a linking strategy cannot be overstated. Back-links are a huge part of the search engine algorithm. When Google and other search engines evaluate your site, they look at the quality and quantity of your backlinks to determine how authoritative and relevant your site is.</p>
        
        <h2>What is Anchor Text?</h2>
        
        <p>Anchor text is the visible, clickable text in a hyperlink. In HTML, it looks like this:</p>
        
        <pre><code>&lt;a href="https://example.com"&gt;This is the anchor text&lt;/a&gt;</code></pre>
        
        <p>The words you use in your anchor text help search engines understand what the linked page is about. It's one of the strongest signals search engines use to determine the topic of a page.</p>
        
        <h2>Types of Anchor Text</h2>
        
        <ul>
          <li><strong>Exact match</strong> - Uses the exact keyword or phrase you're targeting (e.g., "SEO services")</li>
          <li><strong>Partial match</strong> - Contains your target keyword along with other text (e.g., "learn about SEO services")</li>
          <li><strong>Branded</strong> - Uses your brand name (e.g., "Google")</li>
          <li><strong>Naked URL</strong> - Uses the raw URL as the anchor (e.g., "https://example.com")</li>
          <li><strong>Generic</strong> - Uses generic phrases like "click here" or "learn more"</li>
        </ul>
        
        <h2>Best Practices for Anchor Text</h2>
        
        <p>While anchor text is important, over-optimization can trigger penalties. Here are some best practices:</p>
        
        <ol>
          <li><strong>Use varied anchor text</strong> - Don't use the same anchor text for every link to your site</li>
          <li><strong>Keep it relevant</strong> - The anchor text should be relevant to the linked page</li>
          <li><strong>Make it natural</strong> - The text should flow naturally within the content</li>
          <li><strong>Avoid over-optimization</strong> - Too many exact match anchors can look manipulative</li>
          <li><strong>Include branded anchors</strong> - Brand anchors help build brand recognition and look natural</li>
        </ol>
        
        <h2>Anchor Text Distribution</h2>
        
        <p>A natural anchor text profile typically includes:</p>
        
        <ul>
          <li>40-50% branded anchors</li>
          <li>20-30% URL anchors</li>
          <li>20-25% generic anchors</li>
          <li>5-10% exact match anchors</li>
          <li>10-15% partial match anchors</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>Anchor text remains a crucial element in SEO and link building. By using a diverse and natural anchor text profile, you can improve your search rankings while avoiding penalties. Remember that the quality of the linking site is just as important as the anchor text itself. Focus on earning links from relevant, authoritative websites with anchor text that accurately describes your content.</p>
      `,
    },
    "absolute-vs-relative-links": {
      title: "Absolute Links vs. Relative Links – SEO Value",
      date: "April 17, 2014",
      author: "Sarah Williams",
      category: "Technical SEO",
      imageUrl: "/placeholder.svg?height=500&width=800&text=Links&bg=ffc107",
      content: `
        <p>The debate between absolute links and relative links continues to live on in the SEO world. The individual significance of each has been contested, but it's widely agreed that absolute links provide better SEO value than relative links.</p>
        
        <h2>What's the Difference?</h2>
        
        <p><strong>Absolute Links</strong> include the entire URL of the destination page, including the protocol (http/https) and domain name:</p>
        <pre><code>&lt;a href="https://example.com/page.html"&gt;Link Text&lt;/a&gt;</code></pre>
        
        <p><strong>Relative Links</strong> only include the path to the destination page, relative to the current page:</p>
        <pre><code>&lt;a href="/page.html"&gt;Link Text&lt;/a&gt;</code></pre>
        
        <h2>SEO Benefits of Absolute Links</h2>
        
        <ul>
          <li><strong>Crawler Efficiency</strong> - Search engine crawlers can more easily understand absolute links</li>
          <li><strong>Reduced Crawl Errors</strong> - Absolute links are less prone to crawl errors</li>
          <li><strong>Cross-domain Authority</strong> - When linking between different domains, absolute links ensure proper attribution</li>
          <li><strong>Canonical Issues</strong> - Absolute links help prevent canonical issues with URLs</li>
        </ul>
        
        <h2>When to Use Relative Links</h2>
        
        <p>Despite the SEO advantages of absolute links, relative links have their place:</p>
        
        <ol>
          <li><strong>Development Environments</strong> - Easier to move between development, staging, and production</li>
          <li><strong>Large Websites</strong> - Can make code more manageable on very large sites</li>
          <li><strong>Internal Navigation</strong> - For purely internal navigation elements</li>
        </ol>
        
        <h2>Best Practices</h2>
        
        <p>For optimal SEO, consider these best practices:</p>
        
        <ul>
          <li>Use absolute links for important content and navigation</li>
          <li>Use absolute links when linking between different domains</li>
          <li>Use absolute links in your XML sitemap</li>
          <li>If using relative links internally, ensure your canonical tags use absolute URLs</li>
          <li>Implement proper redirects for any changed URLs</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>While both absolute and relative links have their place in web development, absolute links generally provide more SEO value. They help search engines better understand your site structure and reduce potential crawling issues. For critical navigation and important content, absolute links are the recommended choice.</p>
      `,
    },
  };

  return blogPosts[id as keyof typeof blogPosts] || null;
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPostData(params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">
              The blog post you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:underline mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-gray-500 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {post.category}
            </div>
          </div>

          <img
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Share this post</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
