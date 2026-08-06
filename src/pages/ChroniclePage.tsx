import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Sun, Moon } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { useTheme } from '../context/ThemeContext';
import SectionLabel  from '../components/SectionLabel';

const ChroniclePage: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const { theme, toggleTheme } = useTheme();

  const categories = ['all', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === filter);

  const featuredPost = blogPosts.find(p => p.featured);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <ArrowLeft size={15} />
              ~/mauro-jimenez
            </Link>
            <span className="text-slate-200 dark:text-white/10">/</span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">chronicle</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 tracking-widest uppercase">Publishing</span>
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <SectionLabel
            eyebrow="// chronicle"
            title="The Writing"
          />
        <div className="max-w-4xl">
        <div className="mb-14 pb-16 border-slate-200 dark:border-white/5">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            The Chronicle.
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            Thoughts on data engineering, architecture decisions, optimization strategies, and the culture of building reliable data systems at scale.
          </p>
        </div>
        </div>

        {/* Featured */}
        {featuredPost && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-600 uppercase tracking-widest">Featured</span>
              <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
            </div>
            <div
              onClick={() => setActivePost(featuredPost)}
              className="group cursor-pointer p-8 bg-slate-50 dark:bg-dark-800 rounded-xl border border-slate-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-400/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-9">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 rounded text-xs font-mono font-semibold tracking-wide uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">{featuredPost.readTime} read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex flex-wrap gap-1">
                      {featuredPost.tags.map(t => (
                        <span key={t} className="text-slate-300 dark:text-slate-700">#{t}</span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-3 flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-teal-500/50 dark:group-hover:border-teal-400/50 flex items-center justify-center transition-all group-hover:bg-teal-500 dark:group-hover:bg-teal-400">
                    <ArrowUpRight size={18} className="text-slate-400 dark:text-slate-500 group-hover:text-white dark:group-hover:text-dark-900 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded text-xs font-mono font-semibold tracking-wide uppercase transition-colors duration-200 ${
                filter === cat
                  ? 'bg-teal-500 dark:bg-teal-400 text-white dark:text-dark-900'
                  : 'border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.filter(p => !p.featured).map((post, index) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer flex flex-col p-6 bg-slate-50 dark:bg-dark-800 rounded-xl border border-slate-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-400/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider">{post.category}</span>
                <span className="text-xs font-mono text-slate-300 dark:text-slate-700">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors flex-1">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5 text-xs font-mono text-slate-400 dark:text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} /> {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} /> {post.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe */}
        <div className="mt-16 p-8 bg-slate-50 dark:bg-dark-800 rounded-xl border border-slate-200 dark:border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Subscribe to The Chronicle</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">New essays on data engineering, delivered when ready.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-2.5 bg-white dark:bg-dark-700 border border-slate-200 dark:border-white/10 rounded text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-all"
              />
              <button className="px-5 py-2.5 bg-teal-500 dark:bg-teal-400 text-white dark:text-dark-900 rounded font-semibold text-sm hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400 dark:text-slate-600">
            &copy; {new Date().getFullYear()} mauro-jimenez
          </span>
          <Link to="/" className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-600 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
            <ArrowLeft size={13} /> back to portfolio
          </Link>
        </div>
      </footer>

      {/* Reading Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-12 bg-black/50 dark:bg-black/70 backdrop-blur-sm overflow-y-auto"
          onClick={() => setActivePost(null)}
        >
          <div
            className="bg-white dark:bg-dark-800 rounded-xl max-w-2xl w-full p-8 md:p-10 border border-slate-200 dark:border-white/10 my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-1 bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 rounded text-xs font-mono font-semibold uppercase">
                {activePost.category}
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center gap-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(activePost.date)}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {activePost.readTime}</span>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {activePost.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed border-l-2 border-teal-500 dark:border-teal-400 pl-4 italic">
              {activePost.excerpt}
            </p>
            <div className="text-sm text-slate-700 dark:text-slate-300 leading-[1.8] whitespace-pre-line">
              {activePost.content}
            </div>
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
              {activePost.tags.map((tag, i) => (
                <span key={i} className="tag-pill">#{tag}</span>
              ))}
            </div>
            <button
              onClick={() => setActivePost(null)}
              className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <ArrowLeft size={13} /> Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChroniclePage;
