import React from 'react';
import type { iconPropsType } from '@components/icons';

const DeleteIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: iconPropsType): React.ReactElement => {
  return (
    <svg
      width={width ?? 136}
      height={height ?? 36}
      viewBox="0 0 136 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H128C132.418 0 136 3.58172 136 8V28C136 32.4183 132.418 36 128 36H8C3.58172 36 0 32.4183 0 28V8Z"
        fill={fill ?? '#FF8988'}
      />
      <path
        d="M63.2411 18.232C61.3511 17.602 60.2731 16.076 60.2731 14.452V13.094H58.8171V14.326C58.8171 16.118 57.7391 17.742 55.7511 18.414L56.4791 19.562C57.9631 19.058 58.9991 18.008 59.5591 16.678C60.0911 17.91 61.1131 18.89 62.5131 19.352L63.2411 18.232ZM57.3891 21.83H64.2631V25.078H65.7051V20.668H57.3891V21.83ZM67.4971 15.67H65.7051V12.45H64.2631V20.08H65.7051V16.86H67.4971V15.67ZM72.55 14.998H74.636V13.808H68.924V14.998H71.15V15.908C71.15 18.162 70.31 20.444 68.518 21.564L69.386 22.628C70.604 21.858 71.416 20.5 71.864 18.904C72.312 20.374 73.096 21.62 74.286 22.32L75.126 21.27C73.362 20.248 72.55 18.064 72.55 15.908V14.998ZM75.574 16.874H73.712V18.05H75.574V24.462H76.932V12.674H75.574V16.874ZM78.122 12.422V25.064H79.494V12.422H78.122Z"
        fill={fill ?? 'white'}
      />
    </svg>
  );
};

export default DeleteIcon;
