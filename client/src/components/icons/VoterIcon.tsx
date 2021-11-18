import React from 'react';
import type { iconPropsType } from '@components/icons';

const VoterIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: iconPropsType): React.ReactElement => {
  return (
    <svg
      className={className ?? ''}
      width={width ?? 19}
      height={height ?? 31}
      viewBox="0 0 19 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99968 2.24176C8.2064 1.79641 7.35435 2.02878 6.5841 2.43529C5.39313 3.06386 5 4.23651 5 5.49598C5 5.92199 5.09347 6.33191 5.22579 6.72886C5.32906 7.03866 5.35747 7.44715 5.5806 7.69653C5.75602 7.89259 5.86738 8.02679 6.14686 8.1266C6.57361 8.27901 6.98843 8.57691 7.41916 8.68928C8.87293 9.06852 10.6925 9.52878 11.7235 8.14094C12.1203 7.6067 12.3955 7.03494 12.58 6.37047C12.6974 5.94784 12.6768 5.42132 12.6768 4.98348C12.6768 4.65079 12.7636 4.15714 12.6123 3.85454C12.351 3.3319 12.0187 3.09618 11.53 2.75785C11.1571 2.49976 10.6643 2.16592 10.1931 2.11632C9.99217 2.09517 9.73381 2.04823 9.54444 2.04823C8.9709 2.04823 8.54563 2.63703 8.09653 2.90121C7.4411 3.28675 7.38691 4.12568 7.38691 4.79353C7.38691 5.16407 7.31408 5.52574 7.5446 5.82212C7.81987 6.17604 8.15893 6.33594 8.6162 6.37405C9.00441 6.4064 9.41338 6.50809 9.80249 6.39914C10.0912 6.3183 10.5715 5.95094 10.6626 5.66084C10.8153 5.1752 11.06 4.2416 10.3186 4.2416C9.92325 4.2416 9.64355 4.23514 9.29357 4.43514C9.04779 4.57558 8.74164 5.06636 8.74164 5.33829"
        stroke={stroke}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M5.63838 13C8.17582 13 10.7133 13 13.2507 13C13.5402 13 14.0357 13.3693 14.2327 13.5663C14.5169 13.8504 14.8444 14.0676 15.0928 14.387C15.5357 14.9564 16.0119 15.5833 16.5264 16.0464C17.0988 16.5615 17.0312 17.6747 17.1894 18.3867C17.315 18.9517 17.3149 19.675 17.3149 20.2611C17.3149 20.9038 17.3149 21.5465 17.3149 22.1892C17.3149 23.3242 17.3149 24.4591 17.3149 25.594C17.3149 26.6053 17.2504 27.5752 17.2504 28.5794C17.2504 29.0145 15.8775 28.8052 15.4942 28.8052C14.5505 28.8052 13.6067 28.8052 12.6629 28.8052C11.5686 28.8052 10.4743 28.8052 9.38002 28.8052C7.63823 28.8052 5.89643 28.8052 4.15463 28.8052C3.76756 28.8052 3.3805 28.8052 2.99343 28.8052C2.76764 28.8052 2.54185 28.8052 2.31607 28.8052C2.2193 28.8052 2.12253 28.8052 2.02577 28.8052C1.98033 28.8052 2.02577 27.9546 2.02577 27.8053C2.02577 27.5042 2.02577 28.4074 2.02577 28.7084C2.02577 29.0429 2.02577 28.3461 2.02577 28.2389C2.02577 27.8826 1.94225 27.3976 2.07594 27.0634C2.1379 26.9085 2.12049 26.6159 2.1512 26.447C2.19374 26.213 2.15479 25.9308 2.15479 25.6943C2.15479 25.0101 2.2193 24.3513 2.2193 23.673C2.2193 22.7198 2.28381 21.7405 2.28381 20.7736C2.28381 20.279 2.28381 19.7844 2.28381 19.2898C2.28381 18.747 2.39356 18.2347 2.41283 17.695C2.42598 17.3268 2.65247 16.8343 2.76406 16.4836C2.82981 16.2769 2.79839 16.0772 2.89308 15.8743C2.94557 15.7618 2.98698 15.6385 2.99343 15.5159C3.0143 15.1193 3.52731 14.577 3.8034 14.4192C4.4247 14.0642 5.03557 13.674 5.7029 13.4516"
        stroke={stroke}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M7.70272 14.4193C7.36129 14.5575 7.01319 14.8413 6.74939 15.0788C6.5669 15.243 6.50183 15.5138 6.28347 15.6594C5.97447 15.8654 5.75686 16.272 5.49501 16.5338C5.29153 16.7373 5.08374 16.8875 4.91441 17.1646C4.76173 17.4144 4.48245 17.7477 4.28363 17.9674C3.97928 18.3038 3.77726 18.7479 3.5095 19.1143C3.44727 19.1994 3.30233 19.381 3.5095 19.272C3.83226 19.1021 4.15599 18.8585 4.44849 18.6412C5.01424 18.2209 5.47562 17.6482 6.06127 17.2578C6.43371 17.0095 6.77799 16.7122 7.1257 16.4514C7.33324 16.2958 7.49016 16.0738 7.69913 15.9066C7.89069 15.7534 8.07751 15.6645 8.25106 15.4909C8.61003 15.1319 9.2684 15.1187 9.60938 14.7777C9.73867 14.6484 10.0993 14.4416 9.88176 14.792C8.96158 16.2746 8.04538 17.8392 6.72788 19.0103C5.80607 19.8297 5.00688 20.8546 4.2693 21.8381C4.12964 22.0243 3.81023 22.6316 3.86073 22.4043C3.88354 22.3017 4.09903 22.1517 4.16536 22.0854C4.37681 21.8739 4.58827 21.6625 4.79972 21.451C5.53543 20.7153 6.26788 19.9581 6.95726 19.1788C7.45148 18.6201 7.95063 18.0478 8.398 17.4513C8.71202 17.0326 9.10041 16.6243 9.36567 16.1754C9.55832 15.8494 9.69043 15.5281 9.9606 15.258C10.0894 15.1291 10.2152 14.996 10.3477 14.8709C10.6016 14.631 10.3548 15.2827 10.3333 15.3296C9.96384 16.1358 9.41107 16.8251 8.9786 17.5947C8.62417 18.2254 8.25716 18.8652 7.83174 19.4512C7.26012 20.2385 6.60184 20.9702 6.0541 21.7736C5.48477 22.6086 4.95934 23.4099 4.31589 24.1963C4.13219 24.4208 3.95918 24.6539 3.80338 24.8988C3.75626 24.9728 3.6698 25.0972 3.63852 25.1676C3.57072 25.3201 3.66201 25.1828 3.70303 25.1281C3.92439 24.833 4.24638 24.6221 4.53092 24.3934C5.59799 23.536 6.75435 22.5871 7.57728 21.4761C8.14152 20.7144 8.82265 20.0202 9.32266 19.2146C9.95185 18.2009 10.5237 17.1406 11.1863 16.1468C11.447 15.7557 11.7394 15.4665 12.0751 15.1433C12.1088 15.1109 12.6265 14.6087 12.6557 14.706C12.6948 14.8362 12.486 15.0827 12.4335 15.1899C12.1977 15.6717 11.951 16.1373 11.6522 16.584C10.8717 17.751 10.1026 18.9316 9.35133 20.1178C8.79288 20.9996 8.21325 21.8547 7.60953 22.7054C7.22699 23.2444 6.93334 23.84 6.54869 24.3755C6.24262 24.8016 5.89278 25.3407 5.68854 25.8234C5.61994 25.9856 5.45703 26.1569 5.34448 26.2893C5.30071 26.3408 5.1321 26.6142 5.12228 26.6764C5.07638 26.9671 4.72846 27.2537 4.55601 27.4792C4.23631 27.8973 4.50748 27.6481 4.83198 27.576C5.2898 27.4742 5.82039 27.169 6.22255 26.9345C6.95967 26.5045 7.6422 26.1635 8.25465 25.5511C9.50351 24.3022 10.3857 22.8601 11.2508 21.322C11.6624 20.5904 12.1464 19.8381 12.4765 19.0677C12.737 18.4599 13.3091 17.9122 13.7058 17.3832C13.8135 17.2396 13.9179 17.1011 14.0248 16.9675C14.1836 16.769 13.9103 17.4188 13.8922 17.4585C13.4668 18.3944 13.1306 19.3545 12.6593 20.2719C12.232 21.1037 11.7066 21.8977 11.3297 22.7556C10.9536 23.6114 10.5572 24.4511 10.1398 25.2858C9.83685 25.8917 9.48428 26.4704 9.17214 27.0635C9.1187 27.165 8.91181 27.4385 8.99294 27.3574C9.38848 26.9618 9.75991 26.5034 10.1541 26.0958C10.8924 25.3326 11.5362 24.5057 12.1181 23.6157C12.7725 22.615 13.1307 21.486 13.5947 20.3973C13.8282 19.8496 14.0816 19.3028 14.2828 18.7416C14.4549 18.2615 14.5889 17.7819 14.7201 17.2865C14.7864 17.0358 15.0967 16.2015 14.8993 16.9066C14.7095 17.5845 14.9072 18.5252 15.0283 19.1824C15.1574 19.8833 15.2505 20.538 15.2505 21.2539C15.2505 21.6053 15.2257 21.9396 15.1824 22.2861C15.1565 22.4937 15.015 22.6574 14.9889 22.8667C14.9652 23.0562 14.8711 23.263 14.8312 23.4544C14.7428 23.8785 14.7865 24.3766 14.8025 24.8092C14.826 25.4444 15.186 25.8911 15.186 26.5115C15.186 26.6115 15.2365 26.7316 15.2218 26.8269C15.2043 26.9409 14.5193 26.8367 14.4835 26.8341C13.474 26.7597 12.4741 26.7409 11.4623 26.7409C11.1415 26.7409 11.0355 26.771 10.767 26.9345C10.2626 27.2415 10.3381 26.9162 10.62 26.5402C11.4858 25.3859 12.7742 24.7659 13.7668 23.7734"
        stroke={stroke}
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default VoterIcon;
