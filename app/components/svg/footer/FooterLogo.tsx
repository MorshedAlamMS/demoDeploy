import { scrollToSection } from "~/components/shared/Navbar";


const FooterLogo = () => {
    return (
        <button onClick={() => scrollToSection("home")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60" fill="none">
                <path d="M87.2234 47.2563L92.6071 48.4066L92.5415 43.518V42.7864C92.5415 42.6572 92.5212 42.5287 92.4823 42.4051C92.4313 42.2426 92.3773 42.0662 92.3773 42.0482C92.3773 42.0227 92.0272 41.6328 91.8521 41.4411L91.2107 40.844C91.1352 40.7737 91.0514 40.7125 90.961 40.6615L90.597 40.4564C90.5148 40.4101 90.4277 40.3726 90.3372 40.3446L89.7511 40.1631L89.1401 40.0009C89.0661 39.9812 88.9905 39.9679 88.9141 39.9612L82.7149 39.4099C82.6132 39.4008 82.5108 39.4033 82.4097 39.4174L82.0478 39.4677C81.9314 39.4839 81.8178 39.5152 81.71 39.5609L81.1174 39.8116L80.5002 40.1666C80.4303 40.2068 80.3645 40.2531 80.3035 40.3051L80.2251 40.3718C80.1638 40.4241 80.1106 40.4848 80.0674 40.5521C80.0022 40.6536 79.961 40.7679 79.9466 40.8868L79.9028 41.2494L79.7748 45.9513C79.7726 46.033 79.7784 46.1147 79.7922 46.1953L79.9028 46.841L80.0208 47.3921C80.0513 47.5348 80.1067 47.6714 80.1846 47.796L80.4447 48.2118C80.499 48.2987 80.5639 48.379 80.6378 48.451L80.944 48.749C81.0156 48.8187 81.0952 48.8801 81.1813 48.932L81.626 49.1999C81.7026 49.246 81.7838 49.2844 81.8684 49.3143L82.8245 49.6527L84.2032 49.9722L87.1906 50.5154L86.8951 56.6181L85.8118 56.4903C85.4441 54.3176 85.396 51.9638 85.4179 51.0585L79.8371 50.1639L79.8043 54.2218L79.8371 54.7969L79.8794 55.1874C79.8949 55.3307 79.9352 55.4705 79.9986 55.6007L80.0749 55.7577C80.1562 55.9246 80.2736 56.0724 80.4192 56.1909L81.8155 57.3276C81.9399 57.4289 82.0826 57.5068 82.2362 57.5575L89.2902 59.8864C89.4 59.9227 89.5143 59.9446 89.6301 59.9517L90.3834 59.9975C90.4651 60.0025 90.547 60 90.6282 59.9901L91.0314 59.9411C91.1955 59.8985 91.5369 59.8133 91.5895 59.8133C91.6335 59.8133 91.8954 59.6191 92.0822 59.4746C92.1478 59.4239 92.2067 59.3658 92.259 59.3022C92.3798 59.1553 92.4614 58.9816 92.4966 58.7966L92.5852 58.3311C92.5998 58.2543 92.6071 58.1764 92.6071 58.0984V51.8618C92.6071 51.795 92.6018 51.7284 92.5911 51.6625L92.5551 51.4405C92.5245 51.2521 92.451 51.0729 92.3401 50.9157L92.2038 50.7228C92.1663 50.6698 92.1249 50.6196 92.0797 50.5727L91.6551 50.132L91.1872 49.7301C91.1272 49.6786 91.0626 49.6325 90.994 49.5925L90.3708 49.2286C90.308 49.1919 90.242 49.1603 90.1738 49.1343L89.5213 48.8858L88.3395 48.5663L85.4179 47.9912L85.779 42.0163L86.7966 42.1441L87.2234 47.2563Z" fill="#252B37" />
                <path d="M0.00241827 12.4364C-0.00494463 13.527 0.00607546 15.5691 0.0145007 16.6843L2.04983 17.0358L2.20233 43.9323C3.76786 43.5367 5.34767 43.1567 6.94117 42.7928V18.0263L9.17345 18.4417V14.6421C6.06474 13.9668 3.00633 13.2308 0.00241827 12.4364Z" fill="#252B37" />
                <path d="M10.4866 14.9231V42.0145C12.2007 41.6532 13.9299 41.3104 15.6734 40.9863V35.8553C15.6515 34.9287 15.4895 32.4748 15.0168 30.072L17.6102 30.2637C17.3804 31.4992 16.9274 34.3471 16.9536 35.8553C16.9785 37.2824 16.9661 39.6042 16.9554 40.7519C18.7028 40.4377 20.4641 40.1423 22.2389 39.8661V17.0714C20.4413 16.7918 18.6574 16.4923 16.888 16.1735V21.2215C16.877 22.2546 17.0062 24.8959 17.6102 27.1964L14.984 27.3242C15.1153 26.7491 15.4173 24.7233 15.5749 21.2215V15.9329C13.8648 15.6143 12.1685 15.2775 10.4866 14.9231Z" fill="#252B37" />
                <path d="M24.0444 17.345V36.2067L24.0116 37.0694C23.9788 37.5806 24.4384 38.6606 26.5393 38.8907C28.6403 39.1207 32.5359 38.4114 34.221 38.028C34.6697 37.8469 35.7771 37.242 36.6175 36.2706C36.7123 33.6048 36.8436 26.5189 36.6424 18.8557C34.842 18.6884 33.0526 18.5017 31.2749 18.2959C31.12 25.0894 30.8428 32.872 30.7085 36.2706L29.6908 36.2067L29.4282 32.2447C29.1143 28.1562 29.4052 21.5766 29.6328 18.1C27.7564 17.8695 25.8933 17.6177 24.0444 17.345Z" fill="#252B37" />
                <path d="M38.4004 19.0125C38.4274 25.5809 38.454 35.3577 38.411 37.9242C40.3429 37.7591 42.2873 37.6163 44.2433 37.4964L44.3648 36.5262C44.1131 34.6305 43.3406 29.9698 42.2638 26.4935L42.1654 26.2698L43.0189 26.3976C43.7849 28.1336 45.435 32.4812 45.9077 35.9831V37.4C47.8555 37.2938 49.8145 37.2103 51.7839 37.1498V35.9831C52.2566 32.4812 53.9068 28.1336 54.6727 26.3976L55.5263 26.2698L55.4278 26.4935C54.351 29.9698 53.5785 34.6305 53.3268 36.5262L53.3994 37.1054C55.3028 37.0593 57.2156 37.0347 59.1373 37.032V19.9055C56.4366 19.9018 53.7532 19.8548 51.089 19.7655L50.9632 20.9658L49.3875 28.8579L49.2233 30.2318L48.2057 30.1359V28.8579L46.4986 20.9658C46.4832 20.5991 46.4571 19.9588 46.4428 19.5662C43.74 19.4247 41.0585 19.2398 38.4004 19.0125Z" fill="#252B37" />
                <path fillRule="evenodd" clipRule="evenodd" d="M61.4353 19.8982V37.0394C64.2859 37.0614 67.1167 37.1318 69.9254 37.2491L69.9377 37.2292C70.9006 37.1972 73.1416 36.8585 74.4022 35.7594L74.632 32.9796C74.8071 31.7335 74.3169 29.0943 70.9553 28.5064L72.8593 27.6757C73.3627 27.452 74.3957 26.634 74.5007 25.1515C74.6058 23.6689 74.632 23.1066 74.632 23.0107V21.9563C74.6101 21.5623 74.3169 20.7166 73.3189 20.4866C72.6811 20.3395 70.731 20.0194 68.8895 19.7296C66.4211 19.8223 63.9358 19.8789 61.4353 19.8982ZM67.0488 27.2603C67.2852 25.3943 67.0379 22.9681 66.8847 21.9883C68.2306 21.9883 68.7559 22.9468 68.723 25.1834C68.6968 26.9727 67.5959 27.3135 67.0488 27.2603ZM67.0671 34.6993C67.3035 32.8334 67.0562 30.4072 66.903 29.4273C68.2489 29.4273 68.7742 30.3859 68.7413 32.6225C68.7151 34.4118 67.6143 34.7526 67.0671 34.6993Z" fill="#252B37" />
                <path d="M76.6345 19.3166V37.621C78.5502 37.7535 80.4545 37.908 82.3465 38.0839V36.4623L80.541 27.1325L80.6395 26.2698L81.3289 26.3657L84.0864 37.0055V37.7724L84.377 38.2814C86.707 38.5181 89.018 38.7874 91.3085 39.0885V17.8491C89.4636 18.0916 87.6054 18.3135 85.7346 18.5144L85.6622 18.857V20.5505L87.4677 29.8803L87.3692 30.743L86.6798 30.6472L83.9223 20.0073V19.2405L83.6313 18.7307C81.3172 18.9585 78.9845 19.154 76.6345 19.3166Z" fill="#252B37" />
                <path fillRule="evenodd" clipRule="evenodd" d="M94.6974 17.3782C94.1952 21.1583 93.3128 29.702 93.0529 39.3245C94.926 39.5852 96.785 39.8671 98.6291 40.17V29.9442C98.9246 29.7419 99.6862 29.4586 100.369 29.9442V40.4626C102.051 40.7524 103.721 41.0595 105.378 41.3838C105.695 33.7732 104.771 22.0931 104.08 15.8038C100.996 16.3884 97.8675 16.9139 94.6974 17.3782ZM99.9422 19.6878C99.9422 19.6111 99.22 19.5919 98.8589 19.5919C98.7539 20.87 98.5525 25.045 98.465 26.9727L100.139 27.1005V26.9088C100.313 24.5727 100.028 20.8234 99.9573 19.8979C99.9478 19.7727 99.9422 19.6992 99.9422 19.6878Z" fill="#252B37" />
                <path d="M107.099 15.2098V41.7278C108.854 42.086 110.594 42.4634 112.318 42.8596V14.078C110.594 14.4742 108.854 14.8516 107.099 15.2098Z" fill="#252B37" />
                <path d="M113.993 13.6861V43.2515C116.018 43.7344 118.021 44.2433 120 44.7777V40.3604L118.49 39.8172V12.5615C117.004 12.9507 115.505 13.3257 113.993 13.6861Z" fill="#252B37" />
                <path fillRule="evenodd" clipRule="evenodd" d="M34.9287 39.6199L34.7318 58.7589C40.7721 57.2891 38.9337 57.7045 44.6786 56.2667C46.4559 55.5145 46.5678 55.5178 47.1426 55.0231C47.5432 54.6783 47.7755 54.1835 47.7951 53.6633L47.8957 50.9946C47.7972 49.3012 47.4493 48.3235 44.0877 47.7356L46.1887 46.7451C46.692 46.5214 47.4895 45.8185 47.6003 44.9558C47.7972 43.4221 47.7644 43.7097 47.7972 42.879V40.898C47.7754 40.5039 46.5301 39.6263 45.5321 39.3962C44.8943 39.2492 43.464 39.2045 42.0195 39.2045C39.5511 39.2973 37.4293 39.6005 34.9287 39.6199ZM40.3453 47.0548C40.5817 45.1888 40.3344 42.7626 40.1812 41.7828C41.5271 41.7828 42.0524 42.7413 42.0195 44.9779C41.9933 46.7672 40.8925 47.108 40.3453 47.0548ZM40.3636 54.4938C40.6 52.6278 40.3527 50.2017 40.1995 49.2218C41.5454 49.2218 42.0707 50.1804 42.0379 52.417C42.0116 54.2062 40.9108 54.5471 40.3636 54.4938Z" fill="#252B37" />
                <path fillRule="evenodd" clipRule="evenodd" d="M62.9274 40.4054C63.0154 40.748 63.0463 41.1123 63.0352 41.4652C62.978 43.2793 62.8901 49.2658 62.8959 52.9112C62.8965 53.3242 62.7396 53.7203 62.4542 54.0259C62.3136 54.1765 62.1455 54.3004 61.9585 54.3914L61.643 54.5449C61.3871 54.6695 61.1121 54.7525 60.8287 54.7906L59.1228 55.0205L53.8375 55.2442L51.9266 55.1895C51.7132 55.1834 51.5014 55.1518 51.2955 55.0965C51.0401 55.0279 50.7699 54.9566 50.7517 54.9566C50.7391 54.9566 50.6092 54.8282 50.4486 54.6641C50.1073 54.3154 49.883 53.8747 49.7925 53.4013L49.7127 52.9838C49.6832 52.8296 49.6684 52.6731 49.6684 52.5162V40.7603C49.6684 40.4523 49.7484 40.1494 49.9008 39.8796C49.9862 39.7285 50.0931 39.59 50.2183 39.4681L50.353 39.337C50.5304 39.1644 50.7322 39.0174 50.9524 38.9005L51.0332 38.8576C51.2386 38.7485 51.458 38.6667 51.6856 38.6143L52.4051 38.4484C52.5283 38.42 52.6534 38.4003 52.7795 38.3895L53.7062 38.3099L58.7945 38.246L60.1376 38.385C60.2706 38.3988 60.4024 38.4225 60.5318 38.4558L61.073 38.5952C61.3252 38.6602 61.5656 38.7627 61.7857 38.899C62.0437 39.0588 62.2698 39.2626 62.4532 39.5006L62.5697 39.6519L62.7394 39.9454C62.8229 40.0899 62.8861 40.2446 62.9274 40.4054ZM56.3324 40.2909L55.8728 40.5145C55.6649 41.3985 55.2557 43.8439 55.282 46.5534C55.3082 49.2629 55.4899 52.0277 55.5774 53.0715L56.8249 53.1034C57.5602 46.432 57.1312 41.8459 56.8249 40.3867L56.3324 40.2909Z" fill="#252B37" />
                <path d="M41.5603 0.223661C41.553 1.31423 41.5515 1.28111 41.56 2.39636L44.219 2.81173V18.2124C46.4513 18.2124 47.6987 18.6916 50.2265 18.6916V3.54662L52.7871 3.70638L52.8855 1.62953C48.8805 1.31001 44.5643 1.01803 41.5603 0.223661Z" fill="#252B37" />
                <path d="M54.1658 1.75721V18.436C56.9234 18.6916 57.5471 18.6916 60.1733 18.8514V14.7936C60.1514 13.867 60.0748 12.8765 59.3526 11.5026H62.3071C61.946 12.8765 61.6243 13.9884 61.6505 15.4965C61.6754 16.9236 61.6612 17.5439 61.6505 18.6916C64.0141 18.5638 65.0646 18.5319 67.4611 18.436V1.75724C64.8677 1.94902 63.9485 1.88514 61.6505 1.94902V4.21758C61.6396 5.25068 61.7031 6.96541 62.3071 9.26592H59.4511C59.5824 8.69079 59.9172 7.81532 60.0748 4.31343V2.01285C57.5142 2.01285 56.7264 2.01285 54.1658 1.75721Z" fill="#252B37" />
                <path d="M78.1629 0C75.563 0.766837 71.3895 1.34196 69.6277 1.53367L69.6934 18.2443C72.6085 18.4999 76.5762 18.1378 78.1957 17.9248V15.9758C76.9877 16.2314 75.854 16.1675 75.4382 16.1036V10.4482C76.8564 10.4226 77.5392 10.1819 77.7033 10.0647V8.01983C76.6528 8.35213 75.7118 8.2861 75.3726 8.21154L75.5039 2.58807C77.1059 2.33246 77.9441 2.05555 78.1629 1.94904V0Z" fill="#252B37" />
                <path d="M71.9913 40.6743L72.3524 45.3392L77.9003 45.9463L77.996 41.1966C77.9978 41.1044 77.9871 41.0124 77.9642 40.923C77.9222 40.7596 77.8403 40.6086 77.7253 40.4827L77.6377 40.3867L77.2766 40.0033L76.7513 39.556L76.2633 39.2393C76.1949 39.1949 76.1223 39.1569 76.0466 39.1257L75.5047 38.9025C75.3737 38.8486 75.2346 38.8158 75.0928 38.8052L68.5225 38.318C68.4497 38.3126 68.3765 38.3131 68.3038 38.3196L67.8204 38.3623C67.7342 38.37 67.6491 38.3858 67.5662 38.4097L66.8045 38.6294L66.0823 38.9489L65.5479 39.2326C65.4235 39.2987 65.3109 39.3839 65.2145 39.485L65.1269 39.5768C64.9993 39.7105 64.9027 39.8692 64.8434 40.0423L64.8366 40.0622C64.7919 40.1925 64.7692 40.329 64.7692 40.4663V45.5955C64.7692 45.743 64.7954 45.8895 64.8468 46.0284L65.0012 46.4458C65.0433 46.5596 65.1009 46.668 65.19 46.7521C65.3504 46.9035 65.6428 47.129 66.0823 47.3522C66.6863 47.6589 67.8441 47.8634 68.3474 47.9273L72.4181 48.3107L71.9585 53.7744L70.908 53.6147C70.5928 51.6209 70.4922 49.6527 70.4812 48.9178L64.7692 48.5344V52.9084C64.7692 53.0377 64.7893 53.1662 64.829 53.2896L64.8446 53.3384C64.903 53.5203 65.0025 53.6871 65.1357 53.8268L65.2901 53.9886C65.3367 54.0374 65.3872 54.0827 65.441 54.1239L65.8197 54.4135L66.5247 54.8424C66.5799 54.8759 66.6375 54.9054 66.6971 54.9306L67.2117 55.1484C67.3119 55.1908 67.4172 55.2209 67.525 55.2379L68.5772 55.404L74.704 56.1886C74.7775 56.198 74.8517 56.2014 74.9258 56.1986L75.668 56.1708L76.2261 56.1069C76.3683 56.0749 76.666 56.0046 76.7185 55.9791C76.7841 55.9471 77.1781 55.8193 77.2109 55.8193C77.2437 55.8193 77.572 55.5957 77.6048 55.5637C77.6206 55.5484 77.6765 55.4633 77.7329 55.3746C77.8011 55.2674 77.8506 55.1501 77.882 55.0277L77.9278 54.8495C77.9531 54.7509 77.9663 54.6496 77.967 54.5479L77.9988 49.8124L77.9767 48.9302C77.9697 48.6526 77.87 48.3847 77.6928 48.1672L77.3054 47.6918C77.2426 47.6147 77.1709 47.545 77.0917 47.4839L76.5551 47.0705C76.4674 47.0029 76.3712 46.9466 76.2689 46.9027L75.7272 46.6708C75.6442 46.6352 75.5576 46.6081 75.4689 46.5899L74.3549 46.3617L70.4812 46.0422L70.908 40.6104L71.9913 40.6743Z" fill="#252B37" />
            </svg>
        </button>
    );
};

export default FooterLogo;