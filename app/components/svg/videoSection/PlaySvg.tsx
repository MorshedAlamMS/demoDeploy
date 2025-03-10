

const PlaySvg = () => {
    return (
        <>
            <span className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="73" viewBox="0 0 70 73" fill="none">
                    <g filter="url(#filter0_d_6295_6119)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M35.0013 3.77246C18.1796 3.77246 4.54297 17.4091 4.54297 34.2308C4.54297 51.0526 18.1796 64.6891 35.0013 64.6891C51.8231 64.6891 65.4596 51.0526 65.4596 34.2308C65.4596 17.4091 51.8231 3.77246 35.0013 3.77246ZM29.2093 43.825C27.918 42.9549 27.918 40.8027 27.918 36.498V31.9636C27.918 27.6589 27.918 25.5066 29.2093 24.6366C30.5006 23.7667 32.2666 24.7292 35.7989 26.6543L39.9588 28.9217C44.2094 31.2382 46.3346 32.3965 46.3346 34.2308C46.3346 36.0651 44.2094 37.2234 39.9588 39.5399L35.7989 41.8074C32.2666 43.7324 30.5006 44.6949 29.2093 43.825Z" fill="white" />
                    </g>
                    <circle opacity="0.2" cx="35.1" cy="33.8393" r="0.1" fill="black" />
                    <defs>
                        <filter id="filter0_d_6295_6119" x="0.542969" y="3.77246" width="68.9165" height="68.9165" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6295_6119" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6295_6119" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </span>

            {/* for mobile device */}
            <span className="block md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                    <g filter="url(#filter0_d_6295_5061)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.5002 2.00293C7.77156 2.00293 2.31689 7.4576 2.31689 14.1863C2.31689 20.915 7.77156 26.3696 14.5002 26.3696C21.2289 26.3696 26.6836 20.915 26.6836 14.1863C26.6836 7.4576 21.2289 2.00293 14.5002 2.00293ZM12.1834 18.024C11.6669 17.6759 11.6669 16.815 11.6669 15.0932V13.2794C11.6669 11.5575 11.6669 10.6966 12.1834 10.3486C12.6999 10.0006 13.4063 10.3856 14.8193 11.1557L16.4832 12.0626C18.1834 12.9892 19.0336 13.4525 19.0336 14.1863C19.0336 14.92 18.1834 15.3833 16.4832 16.3099L14.8193 17.2169C13.4063 17.9869 12.6999 18.3719 12.1834 18.024Z" fill="white" />
                    </g>
                    <circle opacity="0.2" cx="14.9399" cy="14.4301" r="0.04" fill="black" />
                    <defs>
                        <filter id="filter0_d_6295_5061" x="0.716895" y="2.00293" width="27.5667" height="27.5667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1.6" />
                            <feGaussianBlur stdDeviation="0.8" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6295_5061" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6295_5061" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </span>
        </>
    );
};

export default PlaySvg;