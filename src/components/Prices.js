import React, { useEffect, useState } from "react";

export default function Prices() {
  


 

  return (
    <div>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Pricing & Plans
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Empowering Your Success in the Digital World
            </p>
          </div>
          <div>
            {data.services.map((items) => (
              <div>
                <h1 class="text-2xl font-bold leading-tight mt-16 text-center text-[#000000] sm:text-3xl lg:text-3xl  ">
                  {items.name}
                </h1>
                <p class="max-w-xl mx-auto mt-4 text-base  text-center  leading-relaxed text-gray-600">
                  Quantum Solutions Marketing
                </p>
                <div class="grid max-w-md grid-cols-1 gap-6 mx-auto  text-center lg:max-w-full lg:mt-6  lg:grid-cols-3">
                  {items.price_plan.map((items) => (
                    <div>
                      <div class="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div class="p-8 xl:px-12">
                          <h3 class="text-base font-semibold text-purple-600">
                            {items.plan_name}
                          </h3>
                          <p class="text-5xl font-bold text-black mt-7">
                            {items.price}
                          </p>
                          <p class="mt-3 text-base text-gray-600">
                            One-time payment
                          </p>

                          <ul class="inline-flex flex-col items-start space-y-5 text-left mt-9">
                            <li class="inline-flex items-center space-x-2">
                              <svg
                                class="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <span class="text-base   font-medium text-gray-900">
                                {" "}
                                {items.description}
                              </span>
                            </li>
                          </ul>

                          <a
                            href="/"
                            title=""
                            class="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                            role="button"
                          >
                            {" "}
                            Get full access{" "}
                          </a>
                          <p class="mt-4 text-sm text-gray-500">
                            14 Days Moneyback Guarantee
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}




 const data= {
  "services": [
    {
      "name": "Search Engine Optimization (SEO)",
      "price_plan": [
        {
          "plan_name": "Basic SEO",
          "price": "$199",
          "description": "Essential SEO optimization for small businesses."
        },
        {
          "plan_name": "Advanced SEO",
          "price": "$399",
          "description": "Comprehensive SEO strategy for medium-sized businesses."
        },
        {
          "plan_name": "Enterprise SEO",
          "price": "$799",
          "description": "Tailored SEO solutions for large enterprises."
        }
      ]
    },
    {
      "name": "Social Media Marketing",
      "price_plan": [
        {
          "plan_name": "Starter Social",
          "price": "$149",
          "description": "Beginner-level social media management."
        },
        {
          "plan_name": "Pro Social",
          "price": "$299",
          "description": "Professional social media strategy and content creation."
        },
        {
          "plan_name": "Premium Social",
          "price": "$599",
          "description": "Advanced social media marketing for maximum engagement."
        }
      ]
    },
    {
      "name": "Pay-Per-Click Advertising (PPC)",
      "price_plan": [
        {
          "plan_name": "PPC Starter",
          "price": "$199",
          "description": "Basic PPC advertising to kickstart your campaigns."
        },
        {
          "plan_name": "PPC Pro",
          "price": "$399",
          "description": "Professional PPC management and optimization."
        },
        {
          "plan_name": "PPC Elite",
          "price": "$799",
          "description": "Elite PPC services for maximum ROI."
        }
      ]
    },
    {
      "name": "Content Marketing",
      "price_plan": [
        {
          "plan_name": "Content Essentials",
          "price": "$149",
          "description": "Essential content creation and marketing services."
        },
        {
          "plan_name": "Content Plus",
          "price": "$299",
          "description": "Comprehensive content strategy and production."
        },
        {
          "plan_name": "Content Pro",
          "price": "$599",
          "description": "Professional content marketing for brand growth."
        }
      ]
    }
  ]
}
