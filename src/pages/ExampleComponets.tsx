import { useDocumentMeta } from "../hooks/useDocumentTitle";

import favicon from "@/assets/vite.svg";
import image from "@/assets/react.svg";
const ExampleComponent = () => {
	useDocumentMeta({
		title: "Ana Sayfa",
		description: "Bu bir örnek açıklama metnidir.",
		keywords: ["React", "TypeScript", "SEO"],
		favicon: favicon,
		image: image,
		siteName: "Modern React Starter",
	});

	return <div>Örnek Bileşen</div>;
};

export default ExampleComponent;
