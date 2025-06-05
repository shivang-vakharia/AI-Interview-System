import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/signup");
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden font-['Inter','Noto Sans',sans-serif]">
            <div className="flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-4 md:px-10 py-3">
                    <div className="flex items-center gap-4 text-[#111418]">
                        <div className="w-4 h-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">AI Interview System</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-4 lg:gap-8">
                        <div className="flex gap-2">
                            <button
                                onClick={handleGetStarted}
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1978e5] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1565c0] transition-colors"
                            >
                                <span className="truncate">Get Started</span>
                            </button>
                            <button
                                onClick={handleLogin}
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f4] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e1e5e9] transition-colors"
                            >
                                <span className="truncate">Log In</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="flex flex-col max-w-[960px] flex-1">
                        {/* Hero Section */}
                        <div className="container mx-auto">
                            <div className="p-0 md:p-4">
                                <div
                                    className="flex min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 md:rounded-lg items-start justify-end px-4 pb-10 md:px-10"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpdMKFn5PGM20hVlH4Pqo67tPrCE7PZEreIizUkR5qXo1SI0ZCWPKSo7ZiYD8xAwnyYGxyVBr9Uj8fKrQCOmESQnLUexPwaCVxOdV3HRXr74tgykUHd-42B_n8LgsnSb_jOT79_Gjbt5kq8N-VfwwAgQrxSOVrT3-VDMU7Wy7LEmumTtXvTZqd9l2R8tSI_gJkmGM0VuwMWB8H05TwJRP0s0Rh0ygZv_3TkZ45tThTpOZgPdgfZx6sYAqfol3OuON6ZaqyQTS4pQ")`
                                    }}
                                >
                                    <div className="flex flex-col gap-2 text-left">
                                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                                            Ace your next interview with AI-powered practice
                                        </h1>
                                        <h2 className="text-white text-sm md:text-base font-normal leading-normal">
                                            Get personalized feedback on your interview performance, improve your skills, and land your dream job.
                                        </h2>
                                    </div>
                                    <button
                                        onClick={handleGetStarted}
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:h-12 md:px-5 bg-[#1978e5] text-white text-sm font-bold leading-normal tracking-[0.015em] md:text-base hover:bg-[#1565c0] transition-colors"
                                    >
                                        <span className="truncate">Get started</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="flex flex-col gap-10 px-4 py-10">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-[#111418] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.033em] max-w-[720px]">
                                    Prepare for success with InterviewAI
                                </h1>
                                <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                                    Our platform offers a comprehensive suite of tools and resources to help you master your interview skills.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                                    <div className="text-[#111418]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-[#111418] text-base font-bold leading-tight">Personalized feedback</h2>
                                        <p className="text-[#637488] text-sm font-normal leading-normal">Receive detailed feedback on your answers and overall performance.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                                    <div className="text-[#111418]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-[#111418] text-base font-bold leading-tight">Practice with realistic scenarios</h2>
                                        <p className="text-[#637488] text-sm font-normal leading-normal">Simulate real interviews with a variety of questions and difficulty levels.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                                    <div className="text-[#111418]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-[#111418] text-base font-bold leading-tight">Save time and effort</h2>
                                        <p className="text-[#637488] text-sm font-normal leading-normal">Prepare for interviews efficiently and effectively, anytime, anywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How It Works Section */}
                        <div className="flex flex-col gap-10 px-4 py-10">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-[#111418] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.033em] max-w-[720px]">
                                    How InterviewAI works
                                </h1>
                                <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                                    Our platform provides a step-by-step approach to interview preparation, ensuring you're confident and ready to impress.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                <div className="flex flex-col gap-3 pb-3">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                        style={{
                                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBITRnQJd5gJHggzpF2cWJJGP94oYkunOp8A4Jrxa8cTqmfijv29lxdV7tCEHWGKV5F32sRDhyI07EeTiyktZTAD9OOlr54E9OJglnAlWXMcVEkjdN4lyxfhYOuGuV4-1WdCP8gx_RTHSLEw_d4_GftTadTtSe4tsB7CjaJ7wwh9T_QGR3PIWAMyWymFrFM-_3JBxlmfFgzaObUXYaNDfSt_nONAhAlaqMjqKSmoVIMsQAbORtUaTtd6ZnBTRRZfYhZZN8jn2_xBQ")'
                                        }}
                                    ></div>
                                    <div>
                                        <p className="text-[#111418] text-base font-medium leading-normal">Choose your role</p>
                                        <p className="text-[#637488] text-sm font-normal leading-normal">Select the job role you're interviewing for to tailor your practice sessions.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 pb-3">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                        style={{
                                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoXpOnaI4H3ntEbAH1Id5an1KpbYho-XnpUB23JvsfvpRqt9JRuerytTpewX4iy0NLoU9FS3GE8Z_2EWkaMtG6hHNbWa9oiAMY7xSw-wG4Vgys5BHOUO7k_tGWbFNjGctz-QCJxcIK5r4YEFOfKBbca8SDw3MHr74I8QNNLU66_w8jKmyXzgNVOYPP-FlLmUJefqjw90bz1uDveFIUVqPlDVo1A1LXI6O5AyJjJM12joyc0GVU6xQxpL8yitaEtX6vQcBRaiB3GA")'
                                        }}
                                    ></div>
                                    <div>
                                        <p className="text-[#111418] text-base font-medium leading-normal">Practice with AI</p>
                                        <p className="text-[#637488] text-sm font-normal leading-normal">
                                            Engage in realistic mock interviews with our AI interviewer, covering common questions and scenarios.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 pb-3">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                        style={{
                                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHOmtY4FY8wq2iDvy7jV-nJ_wTEXQ3hNQmDNNqmRismzb4d_VbM4Miy7_SNIiJ1sipMuFroqjFIiCgzUslLCeyWzkxkboSqtJwC6p4EeF_1YrNBrjp-iyZl3UTSESSn0J2Slw65dk_JoYvrOzBKCZ6I51eOgHlP-H_plD8fjUuRW58-f51CqR0gyFRKWoGRzjYC1W7lTIiyZRXMhByxaCG7AuPdSQfAk0cTI-fzBrA64160q766eTD2UZR3XKYD0P1y0AHtVBzDg")'
                                        }}
                                    ></div>
                                    <div>
                                        <p className="text-[#111418] text-base font-medium leading-normal">Get feedback</p>
                                        <p className="text-[#637488] text-sm font-normal leading-normal">
                                            Receive instant feedback on your performance, including areas for improvement and strengths to highlight.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="flex justify-center">
                    <div className="flex max-w-[960px] flex-1 flex-col">
                        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
                            
                            <p className="text-[#637488] text-base font-normal leading-normal">AI Interview System 2025. Created By Shivang Vakharia</p>
                        </footer>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default LandingPage;