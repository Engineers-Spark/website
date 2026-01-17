import { BookOpen, PenTool, Users } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Blog</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Insights, tutorials, and knowledge sharing from the Engineer's Spark
            community on cybersecurity topics.
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="text-center">
          <div className="bg-primary/80 border border-accent/20 rounded-lg p-12 mb-8">
            <BookOpen className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're currently working on creating valuable content for our
              community. Our blog will feature in-depth tutorials, security
              research, CTF writeups, and insights from cybersecurity experts.
            </p>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <PenTool className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Technical Tutorials
                </h3>
                <p className="text-white/70 text-sm">
                  Step-by-step guides on cybersecurity tools and techniques
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Research Articles
                </h3>
                <p className="text-white/70 text-sm">
                  Latest findings and analysis in cybersecurity
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Community Stories
                </h3>
                <p className="text-white/70 text-sm">
                  Experiences and insights from our members
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:engineers.spark@edu.isetcom.tn"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-primary rounded-lg font-medium transition-colors"
              >
                Contribute an Article
              </a>
              <a
                href="https://github.com/Engineers-Spark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-primary rounded-lg font-medium transition-colors"
              >
                Follow Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
