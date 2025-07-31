import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
			<div className="container mx-auto px-2 flex h-14 items-center justify-between">
				<div className="flex items-center">
					<Link to="/" className="flex items-center space-x-2">
						<span className="font-bold text-xl">
							Modern React Developer Kit
						</span>
					</Link>
				</div>
				<nav className="flex items-center justify-center space-x-4 lg:space-x-6">
					<Link
						to="/"
						className="text-sm font-medium transition-colors hover:text-primary">
						Home
					</Link>
					<Link
						to="/about"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
						About
					</Link>
					<Link
						to="/example-components"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
						Example Components
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
