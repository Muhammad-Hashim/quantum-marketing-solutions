import React from "react";

const data = {
  services: [
    {
      name: "Search Engine Optimization (SEO)",
      imgtURL: "https://ideogram.ai/api/images/direct/PFDztSg0TEW34TDj9wMdkQ",
      description:
        "Improve your website's visibility on search engines like Google, driving organic traffic and increasing your online presence. Our SEO experts use proven strategies to boost your rankings and reach your target audience effectively.",
    },
    {
      name: " Social Media Marketing",
      imgtURL: "https://ideogram.ai/api/images/direct/mI1Ku8_6SCKfPoLx-pR3GQ",
      description:
        "Harness the power of social media platforms to engage with your audience, build brand awareness, and drive conversions. Our social media marketing services help you create compelling content, run targeted campaigns, and measure results for a strong online presence.",
    },
    {
      name: "Pay-Per-Click Advertising (PPC)",
      imgtURL: "https://ideogram.ai/api/images/direct/bnNF3nHYROu_eaL3-s3q4g",
      description:
        "Drive immediate traffic and maximize your ROI with Pay-Per-Click advertising. Our PPC experts create and manage effective campaigns on platforms like Google Ads and Bing Ads to get your business in front of potential customers when they're ready to buy.",
    },
    {
      name: "Content Marketing",
      imgtURL: "https://ideogram.ai/api/images/direct/At6vT9NlSOG4SHRtQNCZmA",
      description:
        "Create valuable, relevant, and informative content to attract, engage, and convert your target audience. Our content marketing services encompass blog posts, articles, infographics, videos, and more, helping you establish authority in your industry and connect with your customers.",
    },
  ],
};

export default function Services() {
  return (
    <div className="mt-20 bg-white ">
      {data.services.map((item, index) => (
        <div
          className="max-w-[1200px] m-auto  h-[600px] flex mb-4  justify-between bg-[#E7E5E4]  "
          style={{
            backgroundColor: "#E7E5E4",
            borderRadius: "20px",
          }}
        >
          <div className="w-400px">
            <img className="h-[600px] " src={item.imgtURL} alt={item.name} />
          </div>
          <div className="w-[700px] p-10  flex ">
            <div className="mt-28 w-[400px]">
              <h1 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                {item.name}
              </h1>

              <div>
                <p className="mt-10 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center mt-4 gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
