import { useEffect } from "react";
import logoImage from "../../assets/logo.png";

const seoConfig = {
  title: "TanuGym | Gym & Fitness Center in Mullana, Ambala",
  description:
    "TanuGym is a modern gym in Mullana, Ambala offering strength training, cardio, yoga, personal training, and fitness coaching to help you build a stronger, healthier lifestyle.",
  keywords:
    "TanuGym, gym in Mullana, gym in Ambala, fitness center Haryana, personal training, strength training, cardio classes, yoga classes, local gym near me",
  author: "TanuGym",
  ogTitle: "TanuGym | Gym & Fitness Center in Mullana, Ambala",
  ogDescription:
    "Join TanuGym for expert coaching, modern equipment, personalized fitness plans, and motivating gym experiences in Mullana, Ambala.",
  twitterTitle: "TanuGym | Gym & Fitness Center in Mullana, Ambala",
  twitterDescription:
    "Train smarter with TanuGym through strength training, cardio, yoga, and personal coaching in Mullana, Ambala.",
  phone: "+91 8950855815",
  email: "info@tanugym.com",
  address: {
    streetAddress: "Mullana",
    addressLocality: "Ambala",
    addressRegion: "Haryana",
    postalCode: "133203",
    addressCountry: "IN",
  },
  openingHours: ["Mo-Sa 06:00-22:00"],
  priceRange: "INR 999 - INR 2999",
};

const ensureTag = (selector, createTag) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }

  return element;
};

const setMetaContent = (selector, attributes, content) => {
  const element = ensureTag(selector, () => {
    const meta = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      meta.setAttribute(key, value);
    });
    return meta;
  });

  element.setAttribute("content", content);
};

function SeoManager() {
  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    currentUrl.hash = "";

    const canonicalUrl = currentUrl.toString();
    const siteOrigin = currentUrl.origin;
    const imageUrl = new URL(logoImage, siteOrigin).toString();

    document.documentElement.lang = "en-IN";
    document.title = seoConfig.title;

    setMetaContent(
      'meta[name="description"]',
      { name: "description" },
      seoConfig.description
    );
    setMetaContent(
      'meta[name="keywords"]',
      { name: "keywords" },
      seoConfig.keywords
    );
    setMetaContent('meta[name="author"]', { name: "author" }, seoConfig.author);
    setMetaContent(
      'meta[name="robots"]',
      { name: "robots" },
      "index, follow, max-image-preview:large"
    );
    setMetaContent(
      'meta[name="googlebot"]',
      { name: "googlebot" },
      "index, follow, max-image-preview:large"
    );
    setMetaContent('meta[property="og:type"]', { property: "og:type" }, "website");
    setMetaContent(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "TanuGym"
    );
    setMetaContent(
      'meta[property="og:title"]',
      { property: "og:title" },
      seoConfig.ogTitle
    );
    setMetaContent(
      'meta[property="og:description"]',
      { property: "og:description" },
      seoConfig.ogDescription
    );
    setMetaContent(
      'meta[property="og:url"]',
      { property: "og:url" },
      canonicalUrl
    );
    setMetaContent(
      'meta[property="og:image"]',
      { property: "og:image" },
      imageUrl
    );
    setMetaContent(
      'meta[property="og:image:alt"]',
      { property: "og:image:alt" },
      "TanuGym gym logo"
    );
    setMetaContent(
      'meta[property="og:locale"]',
      { property: "og:locale" },
      "en_IN"
    );
    setMetaContent(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image"
    );
    setMetaContent(
      'meta[name="twitter:title"]',
      { name: "twitter:title" },
      seoConfig.twitterTitle
    );
    setMetaContent(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      seoConfig.twitterDescription
    );
    setMetaContent(
      'meta[name="twitter:image"]',
      { name: "twitter:image" },
      imageUrl
    );
    setMetaContent(
      'meta[name="twitter:image:alt"]',
      { name: "twitter:image:alt" },
      "TanuGym gym logo"
    );

    const canonical = ensureTag('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });
    canonical.setAttribute("href", canonicalUrl);

    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "TanuGym",
        url: siteOrigin,
        description: seoConfig.description,
      },
      {
        "@context": "https://schema.org",
        "@type": "ExerciseGym",
        "@id": `${siteOrigin}/#tanugym`,
        name: "TanuGym",
        image: imageUrl,
        url: canonicalUrl,
        telephone: seoConfig.phone,
        email: seoConfig.email,
        priceRange: seoConfig.priceRange,
        description: seoConfig.description,
        address: {
          "@type": "PostalAddress",
          ...seoConfig.address,
        },
        openingHours: seoConfig.openingHours,
        areaServed: ["Mullana", "Ambala", "Haryana"],
      },
    ];

    const ldJson = ensureTag('script[data-seo="structured-data"]', () => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "structured-data";
      return script;
    });
    ldJson.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}

export default SeoManager;
