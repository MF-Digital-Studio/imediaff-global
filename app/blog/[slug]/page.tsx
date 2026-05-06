import { BLOG_POSTS } from "@/lib/blog-data"
import BlogDetailClientPage from "./blog-detail-client-page"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }
  return { 
    title: `${post.title} | imediaff Global Insights`,
    description: post.summary
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  
  if (!post) {
    notFound()
  }

  return <BlogDetailClientPage post={post} allPosts={BLOG_POSTS} />
}
