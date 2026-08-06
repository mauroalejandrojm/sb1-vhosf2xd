export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Data Engineer\'s Dilemma: Build vs. Buy in 2025',
    excerpt: 'When does it make sense to roll your own pipeline infrastructure, and when should you lean on managed services? A framework for making the call.',
    content: `The build-vs-buy question has haunted data teams for years, but in 2025 the stakes are different. Managed services have matured dramatically, yet the cost of vendor lock-in has grown proportionally.

The framework I use comes down to three axes: differentiation, velocity, and cost trajectory. If the pipeline is a competitive differentiator — meaning its performance directly impacts the product — build it. If it's plumbing, buy it. And always model the cost curve 18 months out, not just at current scale.`,
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Engineering',
    tags: ['Architecture', 'Cost Optimization', 'Cloud'],
    featured: true,
  },
  {
    id: 2,
    title: 'Why Your ETL Pipeline Is Quietly Bleeding Money',
    excerpt: 'Most data pipelines waste 30-40% of their cloud spend on over-provisioned compute and redundant transformations. Here\'s how to find and fix the leaks.',
    content: `After auditing a dozen pipelines across different companies, the patterns are remarkably consistent. The biggest leaks are almost never where you expect them.

The usual suspects: over-provisioned cluster sizes set during initial development and never right-sized, redundant transformations that re-process the same data, and scheduled jobs that run far more frequently than the business actually needs.`,
    date: '2024-12-08',
    readTime: '12 min',
    category: 'Optimization',
    tags: ['Cost', 'ETL', 'Cloud'],
  },
  {
    id: 3,
    title: 'From Notebooks to Production: The Hardest Migration',
    excerpt: 'Jupyter notebooks are great for exploration and terrible for production. A pragmatic guide to graduating from notebooks to tested, scheduled, monitored pipelines.',
    content: `Every data scientist's first notebook is a thing of beauty — exploratory, iterative, fast. And every data engineer's nightmare is inheriting that notebook in production.

The migration path isn't linear. It starts with extracting the core logic, wrapping it in tests, parameterizing the inputs, and scheduling it. But the real challenge is preserving the exploratory spirit while adding production-grade reliability.`,
    date: '2024-11-20',
    readTime: '10 min',
    category: 'Engineering',
    tags: ['Best Practices', 'Testing', 'Production'],
  },
  {
    id: 4,
    title: 'The Case for Real-Time Streaming (And When to Avoid It)',
    excerpt: 'Real-time streaming is seductive but expensive. A decision framework for when batch is still the right answer, and when streaming truly earns its cost.',
    content: `Real-time streaming has become the default answer for any new pipeline, but that's often the wrong instinct. Batch processing is simpler, cheaper, and more reliable — and for most business use cases, a 15-minute lag is invisible.

The decision framework: what's the actual cost of latency? If a 15-minute delay costs money, stream. If it just costs a dashboard being slightly stale, batch.`,
    date: '2024-10-05',
    readTime: '7 min',
    category: 'Architecture',
    tags: ['Streaming', 'Batch', 'Architecture'],
  },
  {
    id: 5,
    title: 'Data Quality Is Not a Feature, It\'s a Culture',
    excerpt: "Tools alone won't save your data quality. Building a culture where every team owns the quality of the data they produce.",
    content: `You can buy the best data quality tools on the market, but if your organization treats data quality as someone else's problem, the tools won't help.

The cultural shift starts with making data quality visible — dashboards that show error rates, alerts that reach the people who caused the issue, and post-mortems that treat data incidents with the same seriousness as production outages.`,
    date: '2024-09-12',
    readTime: '6 min',
    category: 'Culture',
    tags: ['Data Quality', 'Culture', 'Teams'],
  },
  {
    id: 6,
    title: 'Designing Data Contracts That Actually Work',
    excerpt: 'Data contracts are the API layer between data producers and consumers. How to design them so they reduce friction instead of adding bureaucracy.',
    content: `Data contracts promise to solve the chaos at the boundary between data producers and consumers. But poorly designed contracts become just another layer of bureaucracy that slows everyone down.

The key is to make contracts lightweight, versioned, and machine-readable. A contract that requires a meeting to change has already failed.`,
    date: '2024-08-01',
    readTime: '9 min',
    category: 'Architecture',
    tags: ['Data Contracts', 'API Design', 'Governance'],
  },
];
