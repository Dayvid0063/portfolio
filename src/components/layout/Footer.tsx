const Footer = () => {
    return (
        <footer className="bg-gray-500 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} David Chukwudi Orji.
                    </div>

                    <div className="flex space-x-8">
                        {/* Medium */}
                        <div className="flex flex-col items-center space-y-2">
                            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                            <a
                                href="https://medium.com/@orjidavid0063"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-900 transition-colors text-sm"
                            >
                                Medium
                            </a>
                        </div>

                        {/* Hashnode */}
                        <div className="flex flex-col items-center space-y-2">
                            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
                            </svg>
                            <a
                                href="https://hashnode.com/@orjidavid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-900 transition-colors text-sm"
                            >
                                Hashnode
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
