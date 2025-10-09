import { motion } from "framer-motion";

export default function ContributionGuidelines() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="min-h-screen bg-zinc-900 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Contribution Guidelines
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Welcome to Elementorix! We're excited that you want to contribute to our project. 
            Follow these step-by-step guidelines to get started.
          </p>
        </motion.div>

        {/* Getting Started Section */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
            Getting Started
          </h2>
          
          <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
            <h3 className="text-xl font-semibold text-white mb-4">Prerequisites</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Basic knowledge of React, JavaScript, and Git</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Node.js (version 16 or higher) installed on your system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>A GitHub account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Code editor (VS Code recommended)</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Fork and Clone Section */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
            Fork and Clone the Repository
          </h2>
          
          <div className="space-y-6">
            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 2.1: Fork the Repository</h3>
              <ol className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                  <span>Go to the <a href="https://github.com/elementorix/elementorix" className="text-indigo-400 hover:text-indigo-300 underline">Elementorix repository</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                  <span>Click the "Fork" button in the top-right corner</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                  <span>This creates a copy of the repository in your GitHub account</span>
                </li>
              </ol>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 2.2: Clone Your Fork</h3>
              <div className="bg-zinc-900 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">
                  git clone https://github.com/YOUR_USERNAME/elementorix.git
                </code>
              </div>
              <p className="text-zinc-300 text-sm">
                Replace <code className="bg-zinc-700 px-1 rounded">YOUR_USERNAME</code> with your actual GitHub username.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Setup Development Environment */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
            Setup Development Environment
          </h2>
          
          <div className="space-y-6">
            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 3.1: Install Dependencies</h3>
              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">cd elementorix</code>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">npm install</code>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 3.2: Start Development Server</h3>
              <div className="bg-zinc-900 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">npm run dev</code>
              </div>
              <p className="text-zinc-300 text-sm">
                This will start the development server. Open your browser and go to <code className="bg-zinc-700 px-1 rounded">http://localhost:5173</code> to see the application.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Making Changes */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
            Making Changes
          </h2>
          
          <div className="space-y-6">
            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 4.1: Create a New Branch</h3>
              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">git checkout -b feature/your-feature-name</code>
                </div>
                <p className="text-zinc-300 text-sm">
                  Use a descriptive name for your branch. Examples: <code className="bg-zinc-700 px-1 rounded">feature/add-new-component</code>, <code className="bg-zinc-700 px-1 rounded">fix/navbar-mobile-issue</code>
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 4.2: Make Your Changes</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Write clean, readable code following the existing code style</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Add comments for complex logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Test your changes thoroughly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Follow the existing component structure and naming conventions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 4.3: Commit Your Changes</h3>
              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">git add .</code>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">git commit -m "Add: brief description of your changes"</code>
                </div>
                <p className="text-zinc-300 text-sm">
                  Use clear, descriptive commit messages. Examples: <code className="bg-zinc-700 px-1 rounded">"Add: new contribution guidelines page"</code>, <code className="bg-zinc-700 px-1 rounded">"Fix: mobile navigation menu"</code>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Submitting Changes */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
            Submitting Your Changes
          </h2>
          
          <div className="space-y-6">
            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 5.1: Push to Your Fork</h3>
              <div className="bg-zinc-900 rounded-lg p-4">
                <code className="text-green-400 text-sm">git push origin feature/your-feature-name</code>
              </div>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Step 5.2: Create a Pull Request</h3>
              <ol className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                  <span>Go to your forked repository on GitHub</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                  <span>Click "Compare & pull request" button</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                  <span>Fill in the PR title and description</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                  <span>Click "Create pull request"</span>
                </li>
              </ol>
            </motion.div>
          </div>
        </motion.section>

        {/* Code Standards */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
            Code Standards
          </h2>
          
          <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">React/JavaScript</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  <li>• Use functional components with hooks</li>
                  <li>• Follow camelCase for variables and functions</li>
                  <li>• Use meaningful variable and function names</li>
                  <li>• Add PropTypes or TypeScript for type safety</li>
                  <li>• Keep components small and focused</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Styling</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  <li>• Use Tailwind CSS classes</li>
                  <li>• Follow the existing design system</li>
                  <li>• Use consistent spacing and colors</li>
                  <li>• Make components responsive</li>
                  <li>• Use Framer Motion for animations</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What to Contribute */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
            What Can You Contribute?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">🐛 Bug Fixes</h3>
              <p className="text-zinc-300 text-sm">
                Found a bug? Fix it! Make sure to test your fix thoroughly and include steps to reproduce the issue.
              </p>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">✨ New Features</h3>
              <p className="text-zinc-300 text-sm">
                Have an idea for a new component or feature? Discuss it in an issue first, then implement it.
              </p>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">📚 Documentation</h3>
              <p className="text-zinc-300 text-sm">
                Improve existing documentation or add new guides to help other contributors.
              </p>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">🎨 UI/UX Improvements</h3>
              <p className="text-zinc-300 text-sm">
                Enhance the visual design, improve user experience, or make the interface more accessible.
              </p>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">⚡ Performance</h3>
              <p className="text-zinc-300 text-sm">
                Optimize code for better performance, reduce bundle size, or improve loading times.
              </p>
            </motion.div>

            <motion.div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700" variants={stepVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">🧪 Testing</h3>
              <p className="text-zinc-300 text-sm">
                Add tests for existing functionality or improve test coverage for better reliability.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Getting Help */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
            Need Help?
          </h2>
          
          <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
            <p className="text-zinc-300 mb-4">
              If you have any questions or need help getting started, don't hesitate to reach out:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">📧</span>
                <span>Create an issue on GitHub with the "question" label</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">💬</span>
                <span>Join our community discussions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">📖</span>
                <span>Check existing issues and pull requests for similar questions</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Thank You */}
        <motion.div className="text-center bg-gradient-to-r from-gray-600 to-gray-600 rounded-xl p-8" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-4">Thank You! 🙏</h2>
          <p className="text-xl text-indigo-100">
            Your contributions make Elementorix better for everyone. We appreciate your time and effort!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
