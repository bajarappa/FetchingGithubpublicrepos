import React from "react";

export default function MobileMenu() {
    return (
        <>
            <nav class="lg:hidden" aria-label="Global">
                <div class="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                    {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "hover:bg-gray-50" --> */}
                    <a
                        href="#"
                        aria-current="page"
                        class="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
                    >
                        Calendar
                    </a>
                    <a
                        href="#"
                        class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
                    >
                        Teams
                    </a>
                    <a
                        href="#"
                        class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
                    >
                        Directory
                    </a>
                </div>
                <div class="border-t border-gray-200 pb-3 pt-4">
                    <div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-gray-800">
                                Chelsea Hagon
                            </div>
                            <div class="text-sm font-medium text-gray-500">
                                chelsea.hagon@example.com
                            </div>
                        </div>
                        <button
                            type="button"
                            class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">View notifications</span>
                            <svg
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                />
                            </svg>
                        </button>
                    </div>
                    <div class="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                        <a
                            href="#"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Your Profile
                        </a>
                        <a
                            href="#"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Settings
                        </a>
                        <a
                            href="#"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
