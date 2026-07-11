/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NavSection, BlogPost } from '../types';
import { BLOG_POSTS } from '../data';
import { 
  Search, Calendar, User, Clock, ArrowLeft, 
  Share2, CheckCircle2, Bookmark, ArrowRight, X
} from 'lucide-react';

interface BlogViewProps {
  onNavigate: (section: NavSection) => void;
}

export default function BlogView({ onNavigate }: BlogViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  // Filter posts by search keyword and category tab
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Hydration', 'Manufacturing', 'Sustainability'];

  const handleCopyLink = () => {
    setShareCopied(true);
    setTimeout(() => {
      setShareCopied(false);
    }, 4000);
  };

  return (
    <div className="relative">
      
      {/* Visual Page Header */}
      <section className="bg-brand-secondary text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-brand-accent bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Knowledge Center
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            The Purity Insights Blog
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Stay updated with chemical-free bottling techniques, private label packaging trends, and water resource stewardship updates.
          </p>
        </div>
      </section>

      {/* Main Blog Core Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          
          {/* BLOG GRID LIST VIEW */}
          {!readingPost && (
            <div className="space-y-10">
              
              {/* Filter and Search Bar */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6 border-b border-slate-100">
                
                {/* Search */}
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-brand-primary text-slate-700"
                  />
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-brand-primary text-white'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

              </div>

              {/* Articles Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <div 
                      key={post.id}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all flex flex-col justify-between group hover:-translate-y-0.5"
                    >
                      <div>
                        <div className="h-52 overflow-hidden relative">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-white/95 text-[9px] font-bold uppercase tracking-wider text-brand-primary border border-slate-200/50">
                            {post.category}
                          </span>
                        </div>

                        <div className="p-6 space-y-3">
                          <div className="flex gap-4 text-[10px] text-slate-400 font-semibold font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-brand-accent" /> {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-brand-accent" /> {post.readTime}
                            </span>
                          </div>

                          <h3 className="font-display font-bold text-lg text-brand-secondary line-clamp-2 leading-snug group-hover:text-brand-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 font-light">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                        <span className="text-[10px] font-medium text-slate-500 font-mono">By {post.author.split(',')[0]}</span>
                        <button
                          onClick={() => setReadingPost(post)}
                          className="text-xs font-bold text-brand-primary hover:text-brand-accent flex items-center gap-1.5 cursor-pointer"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center space-y-4">
                  <Bookmark className="w-12 h-12 text-slate-300 mx-auto" />
                  <p className="text-slate-500 text-sm font-semibold">No blog articles match your filters.</p>
                  <button
                    onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                    className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

            </div>
          )}

          {/* SINGLE ARTICLE DETAIL VIEW (Reading Overlay) */}
          {readingPost && (
            <div className="bg-brand-light border border-slate-200 rounded-2xl p-6 sm:p-10 relative space-y-8 max-w-4xl mx-auto">
              
              {/* Back to Blog */}
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 shadow-sm transition-all cursor-pointer"
                aria-label="Back to Blog"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={() => setReadingPost(null)}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-brand-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Article List
              </button>

              {/* Title group */}
              <div className="space-y-4 text-left">
                <span className="text-brand-primary bg-brand-primary/5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {readingPost.category}
                </span>

                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-secondary leading-tight">
                  {readingPost.title}
                </h2>

                <div className="flex flex-wrap gap-6 items-center text-xs text-slate-500 font-mono py-2 border-y border-slate-200">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-brand-accent" /> {readingPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-accent" /> Published on {readingPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-accent" /> {readingPost.readTime}
                  </span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="h-64 sm:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img 
                  src={readingPost.image} 
                  alt={readingPost.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Body Content */}
              <div className="prose prose-slate max-w-none text-left space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 font-light">
                <p className="font-semibold text-brand-secondary leading-relaxed text-base">{readingPost.excerpt}</p>
                <p>{readingPost.content}</p>
                
                {/* Visual quote overlay in center of post */}
                <div className="p-6 bg-white border-l-4 border-brand-accent rounded-r-2xl font-mono text-xs text-slate-600 leading-relaxed italic shadow-sm my-6">
                  "At Bhagirathi Industries, we bridge pure biological safety with cutting-edge mechatronic engineering. Purity is not an option; it is our primary directive." &mdash; Rajesh Kulkarni, Operations Lead
                </div>

                <p>
                  As we continue our roadmap toward a carbon-neutral circular economy, our R&D laboratories are testing alternative biopolymer structures to completely substitute single-use caps. Stay tuned for further technical updates on packaging innovations.
                </p>
              </div>

              {/* Share widgets */}
              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
                <div className="space-y-1">
                  <strong className="text-xs text-brand-secondary block font-bold uppercase tracking-wider">Help Share the Knowledge</strong>
                  <span className="text-slate-400 text-[11px] block">Forward this technical overview to your FMCG supply-chain team.</span>
                </div>

                <div className="flex gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={handleCopyLink}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border hover:bg-slate-100 text-xs text-slate-600 transition-all font-semibold cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" /> Share Article
                  </button>
                  <button
                    onClick={() => {
                      alert('Article Bookmarked to your Browser Cache!');
                    }}
                    className="px-4 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    Save Post
                  </button>
                </div>
              </div>

              {shareCopied && (
                <div className="p-3 bg-brand-accent/15 border border-brand-accent/30 rounded-xl flex items-center gap-2 text-brand-accent text-xs font-semibold text-left">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Link Copied. Share this article with your procurement boards!</span>
                </div>
              )}

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
