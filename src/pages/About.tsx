import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Code, Zap, Shield, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentMeta } from "@/hooks/useDocumentTitle";

const About: React.FC = () => {
	// Dynamic title management
	useDocumentMeta({
		title: "About",
		siteName: "React Vite TypeScript App",
		separator: "|",
	});
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

				{/* Getting Started & GitHub Integration */}
				<div className="bg-slate-800 text-white p-8 rounded-lg shadow-lg mb-8">
					<h2 className="text-3xl font-bold mb-6 flex items-center">
						<Github className="mr-3" />
						Development & GitHub Integration
					</h2>

					{/* Development Commands */}
					<div className="mb-8">
						<h3 className="text-2xl font-semibold mb-4 text-slate-300">
							Quick Start Commands
						</h3>
						<div className="grid md:grid-cols-2 gap-4">
							<div className="bg-slate-700 p-4 rounded">
								<h4 className="text-lg font-semibold mb-2">
									Development Server
								</h4>
								<code className="bg-slate-600 px-3 py-1 rounded text-sm block mb-2">
									npm run dev
								</code>
								<p className="text-slate-300 text-sm">
									Starts Vite dev server with HMR on port 5173
								</p>
							</div>
							<div className="bg-slate-700 p-4 rounded">
								<h4 className="text-lg font-semibold mb-2">Production Build</h4>
								<code className="bg-slate-600 px-3 py-1 rounded text-sm block mb-2">
									npm run build
								</code>
								<p className="text-slate-300 text-sm">
									Creates optimized production build in dist/
								</p>
							</div>
							<div className="bg-slate-700 p-4 rounded">
								<h4 className="text-lg font-semibold mb-2">Preview Build</h4>
								<code className="bg-slate-600 px-3 py-1 rounded text-sm block mb-2">
									npm run serve
								</code>
								<p className="text-slate-300 text-sm">
									Preview production build locally
								</p>
							</div>
							<div className="bg-slate-700 p-4 rounded">
								<h4 className="text-lg font-semibold mb-2">Add UI Component</h4>
								<code className="bg-slate-600 px-3 py-1 rounded text-sm block mb-2">
									npx shadcn@latest add button
								</code>
								<p className="text-slate-300 text-sm">
									Add Shadcn/UI components to your project
								</p>
							</div>
						</div>
					</div>

					{/* GitHub Actions & CI/CD */}
					<div>
						<h3 className="text-2xl font-semibold mb-4 text-slate-300">
							Recommended GitHub Actions
						</h3>
						<div className="bg-slate-700 p-4 rounded">
							<h4 className="text-lg font-semibold mb-2">
								Continuous Integration
							</h4>
							<ul className="text-slate-300 space-y-1 text-sm">
								<li>
									• <strong>Automated Testing:</strong> Run ESLint and
									TypeScript checks
								</li>
								<li>
									• <strong>Build Verification:</strong> Ensure production build
									works
								</li>
								<li>
									• <strong>Dependency Security:</strong> Check for
									vulnerabilities
								</li>
								<li>
									• <strong>Auto Deploy:</strong> Deploy to Vercel/Netlify on
									main branch
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Navigation to Example Components */}
				<div className="relative bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 mb-8">
					<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-l-xl"></div>

					<div className="flex items-center justify-between">
						<div className="flex-1">
							<div className="flex items-center mb-5">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
									<Code className="h-6 w-6 text-white" />
								</div>
								<div>
									<h2 className="text-2xl font-bold text-slate-900 mb-1">
										Hook Kullanım Örnekleri
									</h2>
									<p className="text-sm text-slate-600 font-medium">
										Pratik implementasyon rehberi
									</p>
								</div>
							</div>

							<p className="text-slate-700 mb-6 leading-relaxed text-[15px]">
								useDocumentMeta hook'unun farklı senaryolarda kullanımına dair
								detaylı kod örnekleri, en iyi pratikler ve TypeScript tip
								tanımları ile birlikte kapsamlı bir rehber.
							</p>

							<div className="flex items-center space-x-8 mb-6">
								<div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full">
									<div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
									<span className="text-sm font-medium text-blue-700">
										React Hooks
									</span>
								</div>
								<div className="flex items-center bg-indigo-50 px-3 py-1.5 rounded-full">
									<div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
									<span className="text-sm font-medium text-indigo-700">
										TypeScript
									</span>
								</div>
								<div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-full">
									<div className="w-2 h-2 bg-slate-500 rounded-full mr-2"></div>
									<span className="text-sm font-medium text-slate-700">
										Meta Yönetimi
									</span>
								</div>
							</div>
						</div>

						<div className="ml-8">
							<Link to="/example-components">
								<Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg px-6 py-2.5 rounded-lg transition-all duration-200 font-medium">
									<Code className="mr-2 h-4 w-4" />
									Örnekleri İncele
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
