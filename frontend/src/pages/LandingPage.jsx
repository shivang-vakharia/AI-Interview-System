function LandingPage() {

    return (
        <div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style='font-family: Inter, "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
            <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
            <div class="flex items-center gap-4 text-[#111418]">
                <div class="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                    fill="currentColor"
                    ></path>
                    <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                    fill="currentColor"
                    ></path>
                </svg>
                </div>
                <h2 class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">InterviewAI</h2>
            </div>
            <div class="flex flex-1 justify-end gap-8">
                <div class="flex items-center gap-9">
                <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Product</a>
                <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Solutions</a>
                <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Pricing</a>
                <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Resources</a>
                </div>
                <div class="flex gap-2">
                <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1978e5] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span class="truncate">Get started</span>
                </button>
                <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span class="truncate">Log in</span>
                </button>
                </div>
            </div>
            </header>
            <div class="px-40 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div class="@container">
                <div class="@[480px]:p-4">
                    <div
                    class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpdMKFn5PGM20hVlH4Pqo67tPrCE7PZEreIizUkR5qXo1SI0ZCWPKSo7ZiYD8xAwnyYGxyVBr9Uj8fKrQCOmESQnLUexPwaCVxOdV3HRXr74tgykUHd-42B_n8LgsnSb_jOT79_Gjbt5kq8N-VfwwAgQrxSOVrT3-VDMU7Wy7LEmumTtXvTZqd9l2R8tSI_gJkmGM0VuwMWB8H05TwJRP0s0Rh0ygZv_3TkZ45tThTpOZgPdgfZx6sYAqfol3OuON6ZaqyQTS4pQ");'
                    >
                    <div class="flex flex-col gap-2 text-left">
                        <h1
                        class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                        >
                        Ace your next interview with AI-powered practice
                        </h1>
                        <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Get personalized feedback on your interview performance, improve your skills, and land your dream job.
                        </h2>
                    </div>
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1978e5] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                        <span class="truncate">Get started</span>
                    </button>
                    </div>
                </div>
                </div>
                <div class="flex flex-col gap-10 px-4 py-10 @container">
                <div class="flex flex-col gap-4">
                    <h1
                    class="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                    >
                    Prepare for success with InterviewAI
                    </h1>
                    <p class="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                    Our platform offers a comprehensive suite of tools and resources to help you master your interview skills.
                    </p>
                </div>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                    <div class="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                    <div class="text-[#111418]" data-icon="Presentation" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"
                        ></path>
                        </svg>
                    </div>
                    <div class="flex flex-col gap-1">
                        <h2 class="text-[#111418] text-base font-bold leading-tight">Personalized feedback</h2>
                        <p class="text-[#637488] text-sm font-normal leading-normal">Receive detailed feedback on your answers, body language, and overall performance.</p>
                    </div>
                    </div>
                    <div class="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                    <div class="text-[#111418]" data-icon="User" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                        ></path>
                        </svg>
                    </div>
                    <div class="flex flex-col gap-1">
                        <h2 class="text-[#111418] text-base font-bold leading-tight">Practice with realistic scenarios</h2>
                        <p class="text-[#637488] text-sm font-normal leading-normal">Simulate real interviews with a variety of questions and difficulty levels.</p>
                    </div>
                    </div>
                    <div class="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                    <div class="text-[#111418]" data-icon="Clock" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                        ></path>
                        </svg>
                    </div>
                    <div class="flex flex-col gap-1">
                        <h2 class="text-[#111418] text-base font-bold leading-tight">Save time and effort</h2>
                        <p class="text-[#637488] text-sm font-normal leading-normal">Prepare for interviews efficiently and effectively, anytime, anywhere.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="flex flex-col gap-10 px-4 py-10 @container">
                <div class="flex flex-col gap-4">
                    <h1
                    class="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                    >
                    How InterviewAI works
                    </h1>
                    <p class="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                    Our platform provides a step-by-step approach to interview preparation, ensuring you're confident and ready to impress.
                    </p>
                </div>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                    <div class="flex flex-col gap-3 pb-3">
                    <div
                        class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBITRnQJd5gJHggzpF2cWJJGP94oYkunOp8A4Jrxa8cTqmfijv29lxdV7tCEHWGKV5F32sRDhyI07EeTiyktZTAD9OOlr54E9OJglnAlWXMcVEkjdN4lyxfhYOuGuV4-1WdCP8gx_RTHSLEw_d4_GftTadTtSe4tsB7CjaJ7wwh9T_QGR3PIWAMyWymFrFM-_3JBxlmfFgzaObUXYaNDfSt_nONAhAlaqMjqKSmoVIMsQAbORtUaTtd6ZnBTRRZfYhZZN8jn2_xBQ");'
                    ></div>
                    <div>
                        <p class="text-[#111418] text-base font-medium leading-normal">Choose your role</p>
                        <p class="text-[#637488] text-sm font-normal leading-normal">Select the job role you're interviewing for to tailor your practice sessions.</p>
                    </div>
                    </div>
                    <div class="flex flex-col gap-3 pb-3">
                    <div
                        class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoXpOnaI4H3ntEbAH1Id5an1KpbYho-XnpUB23JvsfvpRqt9JRuerytTpewX4iy0NLoU9FS3GE8Z_2EWkaMtG6hHNbWa9oiAMY7xSw-wG4Vgys5BHOUO7k_tGWbFNjGctz-QCJxcIK5r4YEFOfKBbca8SDw3MHr74I8QNNLU66_w8jKmyXzgNVOYPP-FlLmUJefqjw90bz1uDveFIUVqPlDVo1A1LXI6O5AyJjJM12joyc0GVU6xQxpL8yitaEtX6vQcBRaiB3GA");'
                    ></div>
                    <div>
                        <p class="text-[#111418] text-base font-medium leading-normal">Practice with AI</p>
                        <p class="text-[#637488] text-sm font-normal leading-normal">
                        Engage in realistic mock interviews with our AI interviewer, covering common questions and scenarios.
                        </p>
                    </div>
                    </div>
                    <div class="flex flex-col gap-3 pb-3">
                    <div
                        class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHOmtY4FY8wq2iDvy7jV-nJ_wTEXQ3hNQmDNNqmRismzb4d_VbM4Miy7_SNIiJ1sipMuFroqjFIiCgzUslLCeyWzkxkboSqtJwC6p4EeF_1YrNBrjp-iyZl3UTSESSn0J2Slw65dk_JoYvrOzBKCZ6I51eOgHlP-H_plD8fjUuRW58-f51CqR0gyFRKWoGRzjYC1W7lTIiyZRXMhByxaCG7AuPdSQfAk0cTI-fzBrA64160q766eTD2UZR3XKYD0P1y0AHtVBzDg");'
                    ></div>
                    <div>
                        <p class="text-[#111418] text-base font-medium leading-normal">Get feedback</p>
                        <p class="text-[#637488] text-sm font-normal leading-normal">
                        Receive instant feedback on your performance, including areas for improvement and strengths to highlight.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <footer class="flex justify-center">
            <div class="flex max-w-[960px] flex-1 flex-col">
                <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
                <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                    <a class="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Product</a>
                    <a class="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Solutions</a>
                    <a class="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Pricing</a>
                    <a class="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Resources</a>
                    <a class="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
                </div>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="#">
                    <div class="text-[#637488]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                        ></path>
                        </svg>
                    </div>
                    </a>
                    <a href="#">
                    <div class="text-[#637488]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                        ></path>
                        </svg>
                    </div>
                    </a>
                </div>
                <p class="text-[#637488] text-base font-normal leading-normal">© 2023 InterviewAI. All rights reserved.</p>
                </footer>
            </div>
            </footer>
        </div>
        </div>
    )
}