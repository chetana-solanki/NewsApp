import React from 'react';


// Object to store country codes and their full country names
const countries = {
    ae: "United Arab Emirates",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    be: "Belgium",
    br: "Brazil",
    ca: "Canada",
    cn: "China",
    de: "Germany",
    fr: "France",
    gb: "United Kingdom",
    in: "India",
    it: "Italy",
    jp: "Japan",
    kr: "South Korea",
    us: "United States"
};


// Function to shorten (truncate) long text to a given limit
const truncateText = (text, limit) => {
    if (!text) return "";                                                       // If text is null/undefined/empty, return empty string
    return text.length <= limit ? text : text.slice(0, limit) + "...";          // If text length is within limit → return original text
                                                                                // Otherwise cut text and add "..."
};

export default function NewsCard(props) {
    const articles = props.data?.results || [];

    return (
        <>
            <h1 className="text-center text-3xl md:text-5xl px-2">
                {countries[props.country]} - {props.heading} News
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 justify-items-center px-2 lg:px-6">
                {articles.map((article, index) => (
                    <a
                        key={article.link || index}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-[22rem]"
                    >
                        <div className="bg-slate-50 rounded-lg shadow-md overflow-hidden h-full min-h-[370px]">

                            <img
                                src={article.image_url}
                                alt="news"
                                className="w-full h-44 object-cover"
                            />

                            <div className="p-4">
                                <h5 className="text-lg font-semibold mb-2">
                                    {truncateText(article.title, 50)}
                                </h5>

                                <p className="text-gray-600 text-sm">
                                    {truncateText(article.description, 100)}
                                </p>
                            </div>

                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}
