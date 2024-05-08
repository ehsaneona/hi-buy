import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
    width?: string;
    height?: string;
    stroke?: string;
    strokeWidth?: string;
};

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="27"
            fill="none"
            viewBox="0 0 97 27"
            {...props}
        >
            <g clipPath="url(#clip0_428_2)">
                <path
                    fill="#2C99F8"
                    d="M3.834 0a.61.61 0 01-.158.418c-.104.119-.217.244-.336.376a3.17 3.17 0 00-.336.457c-.106.172-.158.392-.158.656v8.855h15.418V1.907c0-.264-.046-.484-.138-.656a2.298 2.298 0 00-.317-.457l-.336-.376A.607.607 0 0117.315 0h3.834a.61.61 0 01-.158.418l-.336.376c-.119.133-.23.285-.336.457-.106.172-.158.392-.158.656v22.91c0 .265.052.484.158.656.106.172.217.324.336.457.12.133.23.257.336.377.105.12.158.257.158.417h-3.834a.61.61 0 01.158-.417l.336-.377c.12-.133.224-.285.317-.457.092-.172.138-.391.138-.655V11.476H2.846v13.342c0 .264.052.483.158.655.106.172.217.324.336.457.12.133.23.257.336.377.106.12.158.257.158.417H0a.61.61 0 01.158-.417l.336-.377c.12-.133.224-.285.317-.457.092-.172.138-.391.138-.655V1.907c0-.264-.046-.484-.138-.656A2.351 2.351 0 00.494.794L.158.418A.61.61 0 010 0h3.834zM27.375 10.247a.61.61 0 01-.139.377 3.86 3.86 0 01-.316.357c-.12.12-.224.252-.317.398-.091.146-.138.339-.138.576v13.022c0 .237.047.437.138.596.092.157.198.298.317.417.119.12.223.238.316.357.093.12.139.245.139.377h-3.52c0-.132.046-.257.139-.377.092-.12.19-.237.297-.357.104-.12.204-.258.297-.417.091-.16.138-.357.138-.596V11.955c0-.237-.046-.43-.138-.576a3.025 3.025 0 00-.297-.398 8.8 8.8 0 01-.297-.357.61.61 0 01-.139-.377h3.52z"
                ></path>
                <path
                    fill="#F410B5"
                    d="M45.202 10.76h6.366c.684 0 1.324-.132 1.917-.397a4.953 4.953 0 001.561-1.092 5.397 5.397 0 001.067-1.588 4.701 4.701 0 00.396-1.927 4.98 4.98 0 00-.396-1.965 5.039 5.039 0 00-1.067-1.609 5.06 5.06 0 00-1.58-1.071 4.783 4.783 0 00-1.938-.398h-6.326V10.76zm0 15.247h8.065a6.996 6.996 0 002.826-.576 7.308 7.308 0 002.293-1.548 7.328 7.328 0 001.542-2.303 7.101 7.101 0 00.572-2.839c0-1.006-.19-1.953-.572-2.839a7.369 7.369 0 00-1.542-2.303 7.31 7.31 0 00-2.293-1.548 6.994 6.994 0 00-2.826-.576h-8.065v14.532zm-2.846.715a.61.61 0 01.158-.418l.336-.377c.12-.132.224-.285.317-.457.093-.172.138-.391.138-.655V1.907c0-.264-.045-.484-.138-.656a2.353 2.353 0 00-.317-.457l-.336-.376A.607.607 0 0142.356 0h10.555c.791 0 1.535.152 2.235.457a5.822 5.822 0 011.818 1.23 5.852 5.852 0 011.225 1.827c.303.7.455 1.45.455 2.244 0 1.11-.284 2.111-.85 2.997a5.829 5.829 0 01-2.194 2.046 7.848 7.848 0 012.768.893 8.423 8.423 0 012.215 1.746 7.802 7.802 0 011.482 2.423c.356.912.534 1.872.534 2.878 0 1.112-.211 2.15-.633 3.117a8.422 8.422 0 01-1.7 2.54 7.68 7.68 0 01-2.51 1.708 7.815 7.815 0 01-3.103.616H42.356zM66.963 18.837v2.128c0 1.586.2 2.873 1.03 3.851.83.98 2.075 1.47 3.736 1.47h.237c1.66 0 2.907-.491 3.737-1.47.83-.978 1.029-2.266 1.029-3.85v-2.13c0-1.063 1.955-1.063 1.955 0v1.414c0 1.006-.172 1.927-.513 2.76a6.341 6.341 0 01-1.424 2.144 6.188 6.188 0 01-2.154 1.37c-.83.317-1.747.476-2.748.476-1.002 0-1.918-.159-2.748-.477a6.208 6.208 0 01-2.155-1.37 6.36 6.36 0 01-1.423-2.143c-.342-.833-.514-1.755-.514-2.76v-1.413c0-1.064 1.956-1.064 1.956 0zM81.306 10.247H85.1a.48.48 0 01-.059.357 2.75 2.75 0 00-.178.338c-.052.119-.086.244-.099.376-.013.133.046.305.178.516l.316.597 4.309 6.154 4.704-6.75c.158-.212.23-.385.217-.517a.956.956 0 00-.12-.377 8.76 8.76 0 01-.177-.337.547.547 0 01-.04-.357H97a.676.676 0 01-.276.457c-.158.12-.323.224-.494.318l-.514.278a.946.946 0 00-.377.337l-5.257 7.585v5.794c0 .238.045.437.138.596.092.159.197.298.316.418.12.12.224.23.317.337a.534.534 0 01.138.357h-3.518c0-.132.046-.25.139-.357.093-.106.19-.218.297-.337.106-.12.204-.259.296-.418.092-.159.14-.357.14-.596v-5.08a57.906 57.906 0 00-1.068-1.589c-.368-.53-.764-1.091-1.185-1.687a712.442 712.442 0 01-3.043-4.347l-.475-.676a1.86 1.86 0 00-.672-.596c-.29-.159-.488-.424-.594-.794"
                ></path>
                <path
                    fill="#F410B5"
                    fillRule="evenodd"
                    d="M65.986 10.247c.874 0 1.583.712 1.583 1.59 0 .879-.709 1.59-1.583 1.59a1.586 1.586 0 01-1.583-1.59c0-.878.708-1.59 1.583-1.59zM77.708 10.247c.875 0 1.583.712 1.583 1.59 0 .879-.708 1.59-1.583 1.59a1.586 1.586 0 01-1.583-1.59c0-.878.709-1.59 1.583-1.59z"
                    clipRule="evenodd"
                ></path>
                <path
                    fill="#2C99F8"
                    d="M33.898 20.403c.245-.177.431-.33.554-.464.122-.134.232-.295.326-.48.183-.353.275-.73.275-1.136 0-.476-.127-.853-.377-1.135-.254-.28-.59-.422-1.016-.422-.366 0-.663.107-.886.322-.226.214-.339.494-.339.838 0 .203.046.408.137.613.092.203.267.487.522.844.248.343.514.684.803 1.022m-.983.79c-.437.24-.778.58-1.021 1.01a2.902 2.902 0 00-.364 1.445c0 .366.062.72.189 1.061.126.343.296.633.51.87.2.214.443.38.722.499.28.119.577.177.887.177.487 0 .923-.137 1.306-.411a2.66 2.66 0 00.387-.348c.116-.129.258-.317.434-.562l-3.052-3.74h.002zm1.133-.636l2.623 3.307c.368-.621.627-1.095.772-1.426.148-.331.221-.613.221-.845 0-.456-.363-.735-1.093-.83v-.145h3.07v.146a2.47 2.47 0 00-.592.109 1.45 1.45 0 00-.434.253c-.27.226-.6.708-.997 1.446l-.244.454c-.132.256-.323.588-.577 1 .2.237.436.492.709.765.272.273.511.496.724.672.3.246.562.425.786.536.223.111.442.168.655.168a.942.942 0 00.569-.168c.154-.112.287-.294.404-.548l.162.06c-.264.807-.83 1.211-1.703 1.211-.287 0-.592-.05-.907-.15a3.304 3.304 0 01-.864-.412 7.391 7.391 0 01-1.225-1.078c-.231.305-.42.533-.569.687a3.09 3.09 0 01-1.069.708c-.407.163-.84.245-1.303.245a3.63 3.63 0 01-1.237-.214 2.595 2.595 0 01-.973-.584c-.468-.45-.703-1.022-.703-1.711 0-.69.226-1.297.681-1.851.18-.22.396-.423.646-.616a9.613 9.613 0 011.034-.674l.127-.077c-.326-.42-.561-.75-.698-.99-.32-.562-.481-1.064-.481-1.504 0-.274.073-.55.22-.819.184-.356.456-.628.811-.813.358-.185.786-.277 1.287-.277.65 0 1.187.16 1.608.482.42.32.63.733.63 1.236 0 .37-.109.698-.323.986-.216.287-.566.568-1.047.844-.342.2-.577.34-.7.422v-.005z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_428_2">
                    <path fill="#fff" d="M0 0H97V27H0z"></path>
                </clipPath>
            </defs>
        </svg>
    ),
};
