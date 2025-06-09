import { useEffect } from "react";

/**
 * Custom hook to manage document title dynamically
 * @param title - The title to set for the page
 * @param defaultTitle - Default title to fallback to (optional)
 */
export const useDocumentTitle = (
	title: string,
	defaultTitle?: string
): void => {
	useEffect(() => {
		const previousTitle = document.title;

		// Set the new title with optional prefix
		const newTitle = defaultTitle ? `${title} | ${defaultTitle}` : title;
		document.title = newTitle;

		// Cleanup function to restore previous title (optional)
		return () => {
			document.title = previousTitle;
		};
	}, [title, defaultTitle]);
};

/**
 * Alternative hook with more features for SEO
 * @param options - Configuration object for title management
 */
interface DocumentTitleOptions {
	title: string;
	siteName?: string;
	separator?: string;
	template?: string;
}

export const useDocumentTitleAdvanced = (
	options: DocumentTitleOptions
): void => {
	const { title, siteName, separator = "|", template } = options;

	useEffect(() => {
		let newTitle = title;

		// Apply template if provided (e.g., "%s - My Site")
		if (template) {
			newTitle = template.replace("%s", title);
		} else if (siteName) {
			newTitle = `${title} ${separator} ${siteName}`;
		}

		document.title = newTitle;
	}, [title, siteName, separator, template]);
};

interface DocumentMetaOptions {
	title: string;
	description?: string;
	keywords?: string[];
	favicon?: string;
	image?: string;
	siteName?: string;
	separator?: string;
	template?: string;
}

export const useDocumentMeta = (options: DocumentMetaOptions): void => {
	const {
		title,
		description,
		keywords,
		favicon,
		image,
		siteName,
		separator = "|",
		template,
	} = options;

	useEffect(() => {
		let newTitle = title;

		// Apply template if provided (e.g., "%s - My Site")
		if (template) {
			newTitle = template.replace("%s", title);
		} else if (siteName) {
			newTitle = `${title} ${separator} ${siteName}`;
		}

		// Set the document title
		document.title = newTitle;

		// Set the meta description
		if (description) {
			let metaDescription = document.querySelector('meta[name="description"]');
			if (!metaDescription) {
				metaDescription = document.createElement("meta");
				metaDescription.setAttribute("name", "description");
				document.head.appendChild(metaDescription);
			}
			metaDescription.setAttribute("content", description);
		}

		// Set the meta keywords
		if (keywords && keywords.length > 0) {
			let metaKeywords = document.querySelector('meta[name="keywords"]');
			if (!metaKeywords) {
				metaKeywords = document.createElement("meta");
				metaKeywords.setAttribute("name", "keywords");
				document.head.appendChild(metaKeywords);
			}
			metaKeywords.setAttribute("content", keywords.join(", "));
		}

		// Set the favicon
		if (favicon) {
			let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
			if (!link) {
				link = document.createElement("link");
				link.rel = "icon";
				document.head.appendChild(link);
			}
			link.href = favicon;
		}

		// Set the site image (og:image)
		if (image) {
			let metaImage = document.querySelector('meta[property="og:image"]');
			if (!metaImage) {
				metaImage = document.createElement("meta");
				metaImage.setAttribute("property", "og:image");
				document.head.appendChild(metaImage);
			}
			metaImage.setAttribute("content", image);
		}
	}, [
		title,
		description,
		keywords,
		favicon,
		image,
		siteName,
		separator,
		template,
	]);
};
