'use client';
import Container from '../../../components/container';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

export default function ArticleDetail() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="container max-w-2xl mx-auto px-6 py-12 mt-24">
          <div className="mb-8">
            <p className="text-sm text-[var(--text-secondary)] mb-2">August 03, 2025</p>
            <h1 className="text-3xl font-bold mb-4">Crafting a design system for a multiplanetary future</h1>
            <div className="w-full h-64 bg-[var(--bg-tertiary)] rounded-xl mb-8"></div>
          </div>

          <article className="prose prose-invert max-w-none">
            <p className="text- [var(--text-secondary)] leading-relaxed mb-6">
              In the ever-evolving landscape of technology, the need for a robust design system that can adapt to the multiplanetary future is more critical than ever. A design system that is flexible, scalable, and efficient can help organizations create seamless user experiences across different platforms and devices.
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              As we venture into space exploration and establish colonies on other planets, the challenges of designing for diverse environments become apparent. From the low gravity of Mars to the extreme conditions of space stations, our design systems must be adaptable and resilient.
            </p>

            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Key Principles</h2>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              The foundation of a multiplanetary design system rests on several key principles: modularity, accessibility, and environmental adaptability. These principles ensure that our interfaces can function effectively regardless of the planetary conditions or technological constraints.
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              By implementing these principles, we can create design systems that not only serve our current needs on Earth but also prepare us for the challenges of interplanetary communication and interaction.
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <a href="/articles" className="flex items-center justify-center px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] w-fit border border-[var(--border)] backdrop-blur-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--border)] text-sm">
              Back to Articles
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}