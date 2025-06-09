import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Code, Zap, Shield, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const About: React.FC = () => {
	// Dynamic title management
	useDocumentTitle("About", "React Vite TypeScript App");
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Header with Back Button */}
				<div className="mb-8">
					<Link to="/">
						<Button variant="outline" className="mb-6">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Return to Home
						</Button>
					</Link>
					<h1 className="text-4xl font-bold text-slate-800 mb-4">
						About This Project
					</h1>
					<p className="text-xl text-slate-600">
						A React application built with modern web development technologies
					</p>
				</div>

				{/* Tech Stack Cards */}
				<div className="grid md:grid-cols-2 gap-6 mb-12">
					<div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
						<div className="flex items-center mb-4">
							<Zap className="h-8 w-8 text-blue-500 mr-3" />
							<h2 className="text-2xl font-semibold text-slate-800">
								Performance
							</h2>
						</div>
						<ul className="space-y-2 text-slate-600">
							<li>
								⚡ <strong>Vite 6:</strong> Fast development and builds
							</li>
							<li>
								🔄 <strong>Hot Reload:</strong> Instant change preview
							</li>
							<li>
								📦 <strong>Tree Shaking:</strong> Optimized bundle size
							</li>
							<li>
								🎯 <strong>ES Modules:</strong> Modern JavaScript support
							</li>
						</ul>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
						<div className="flex items-center mb-4">
							<Shield className="h-8 w-8 text-green-500 mr-3" />
							<h2 className="text-2xl font-semibold text-slate-800">
								Security
							</h2>
						</div>
						<ul className="space-y-2 text-slate-600">
							<li>
								🛡️ <strong>TypeScript:</strong> Type safety
							</li>
							<li>
								🔍 <strong>ESLint:</strong> Code quality control
							</li>
							<li>
								⚠️ <strong>Strict Mode:</strong> Error catching
							</li>
							<li>
								📝 <strong>Type Validation:</strong> Runtime security
							</li>
						</ul>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
						<div className="flex items-center mb-4">
							<Palette className="h-8 w-8 text-purple-500 mr-3" />
							<h2 className="text-2xl font-semibold text-slate-800">Design</h2>
						</div>
						<ul className="space-y-2 text-slate-600">
							<li>
								🎨 <strong>Tailwind CSS v4:</strong> Utility-first CSS
							</li>
							<li>
								🎭 <strong>Shadcn/UI:</strong> Accessible components
							</li>
							<li>
								📱 <strong>Responsive:</strong> Compatible with all devices
							</li>
							<li>
								🌙 <strong>Dark Mode:</strong> Theme support ready
							</li>
						</ul>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
						<div className="flex items-center mb-4">
							<Code className="h-8 w-8 text-orange-500 mr-3" />
							<h2 className="text-2xl font-semibold text-slate-800">
								Development
							</h2>
						</div>
						<ul className="space-y-2 text-slate-600">
							<li>
								⚛️ <strong>React 19:</strong> Latest React features
							</li>
							<li>
								🧭 <strong>React Router:</strong> SPA routing
							</li>
							<li>
								🔧 <strong>Auto-complete:</strong> IntelliSense support
							</li>
							<li>
								🚀 <strong>Fast Refresh:</strong> Fast development
							</li>
						</ul>
					</div>
				</div>

				{/* Project Features */}
				<div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 mb-8">
					<h2 className="text-3xl font-bold text-slate-800 mb-6">
						Project Features
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="text-center">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Zap className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="font-semibold text-slate-800 mb-2">
								Fast Development
							</h3>
							<p className="text-slate-600 text-sm">
								Lightning-fast HMR and optimized builds with Vite
							</p>
						</div>
						<div className="text-center">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Shield className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="font-semibold text-slate-800 mb-2">Type Safety</h3>
							<p className="text-slate-600 text-sm">
								Compile-time error catching with TypeScript
							</p>
						</div>
						<div className="text-center">
							<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Palette className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="font-semibold text-slate-800 mb-2">Modern UI</h3>
							<p className="text-slate-600 text-sm">
								Tailwind CSS v4 ve Shadcn/UI ile güzel tasarım
							</p>
						</div>
					</div>
				</div>

				{/* Getting Started */}
				<div className="bg-slate-800 text-white p-8 rounded-lg shadow-lg">
					<h2 className="text-3xl font-bold mb-6 flex items-center">
						<Github className="mr-3" />
						Getting Started
					</h2>
					<div className="space-y-4">
						<div>
							<h3 className="text-xl font-semibold mb-2">Development Server</h3>
							<code className="bg-slate-700 px-3 py-1 rounded text-sm">
								npm run dev
							</code>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">Production Build</h3>
							<code className="bg-slate-700 px-3 py-1 rounded text-sm">
								npm run build
							</code>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">Add New Component</h3>
							<code className="bg-slate-700 px-3 py-1 rounded text-sm">
								npx shadcn@latest add [component-name]
							</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
