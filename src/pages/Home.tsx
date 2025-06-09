import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Home: React.FC = () => {
	const [count, setCount] = useState<number>(0);

	// Dynamic title management
	useDocumentTitle("Home", "React Vite TypeScript App");

	return (
		<div className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-gradient-to-br from-slate-50 to-slate-100">
			<div className="text-center space-y-4">
				<h1 className="text-4xl font-bold text-slate-800">
					React + TypeScript + Vite + Tailwind + Shadcn UI
				</h1>
				<p className="text-slate-600 text-lg">
					Modern React development stack with beautiful UI components
				</p>
			</div>

			<div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 space-y-4">
				<div className="text-center">
					<p className="text-2xl font-semibold text-slate-700 mb-4">
						Counter: {count}
					</p>
					<div className="space-x-4">
						<Button
							onClick={() => setCount((count) => count + 1)}
							className="px-6 py-2">
							Increase (+)
						</Button>
						<Button
							variant="outline"
							onClick={() => setCount((count) => count - 1)}
							className="px-6 py-2">
							Decrease (-)
						</Button>
						<Button
							variant="destructive"
							onClick={() => setCount(0)}
							className="px-6 py-2">
							Reset
						</Button>
					</div>
				</div>
			</div>

			{/* About Page Link */}
			<Link to="/about">
				<Button
					variant="secondary"
					className="px-6 py-2 space-x-2 hover:bg-slate-200 hover:underline hover:cursor-pointer">
					<Info className="h-4 w-4" />
					<span>About This Project</span>
				</Button>
			</Link>

			<div className="text-center text-slate-500">
				<p>You're developing with TypeScript type safety! 🚀</p>
			</div>
		</div>
	);
};

export default Home;
