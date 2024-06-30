import React from 'react';
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";

function PricingCards() {
    return (
        <section className="w-full py-20">
            <h1 className="heading">
                My <span className="text-purple">pricing plans</span>
            </h1>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <div className="bg-gray-800 rounded-md shadow-lg p-11 max-w-sm border border-gray-700">
                    <div className="mb-10 text-center">
                        <p className="text-gray-400">Standard Site</p>
                        <h2 className="text-white font-bold lg:text-3xl md:text-2xl text-base line-clamp-1">
                            2000€
                        </h2>
                    </div>
                    <ul className="text-gray-400 space-y-4">
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            2000 min. Up Front Cost
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Includes Hosting
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Mobile Responsive
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Custom Designed
                        </li>
                    </ul>

                    <a href="mailto:design.dokaza@gmail.com">
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow/>}
                            position="right"
                        />
                    </a>
                </div>


                <div className="bg-gray-700 rounded-md shadow-lg p-16 max-w-sm border border-gray-700">
                    <div className="mb-10 text-center">
                        <p className="text-gray-300">5 Page - Site</p>
                        <h2 className="text-white font-bold lg:text-5xl md:text-2xl text-base line-clamp-1">
                            150€
                            <span className="text-gray-400 lg:text-xl lg:font-light text-sm">/mo</span>
                        </h2>
                    </div>
                    <ul className="text-gray-300 space-y-4">
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            0€ Down, 150€ Monthly
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Includes Hosting
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            24/7 Customer Service
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Unlimited Edits
                        </li>
                    </ul>

                    <a href="mailto:design.dokaza@gmail.com">
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow/>}
                            position="right"
                        />
                    </a>
                </div>


                <div className="bg-gray-800 rounded-md shadow-lg p-11 max-w-sm border border-gray-700">
                    <div className="mb-10 text-center">
                        <p className="text-gray-400">Landing Page Design</p>
                        <h2 className="text-white font-bold lg:text-3xl md:text-2xl text-base line-clamp-1">
                            0€
                        </h2>
                    </div>
                    <ul className="text-gray-400 space-y-4">
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            2 revisions
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Mobile Friendly
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Custom Designed
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            FREE w/ Subscription
                        </li>
                    </ul>

                    <a href="mailto:design.dokaza@gmail.com">
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow/>}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PricingCards;