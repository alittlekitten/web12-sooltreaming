import React from 'react';
import type { iconPropsType } from '@components/icons';

const AcceptIcon = ({
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
        fill={fill ?? '#BED297'}
      />
      <path
        d="M63.2691 13.5H60.3991V12.324H58.9431V13.5H56.0451V14.55H63.2691V13.5ZM58.0051 16.832C58.0051 16.258 58.6491 15.908 59.6571 15.908C60.6651 15.908 61.3091 16.258 61.3091 16.832C61.3091 17.392 60.6651 17.728 59.6571 17.728C58.6491 17.728 58.0051 17.392 58.0051 16.832ZM63.6191 19.156C62.5971 19.31 61.4911 19.38 60.3991 19.436V18.652C61.7991 18.484 62.6671 17.826 62.6671 16.832C62.6671 15.656 61.4771 14.942 59.6571 14.942C57.8371 14.942 56.6471 15.656 56.6471 16.832C56.6471 17.826 57.5151 18.498 58.9431 18.652V19.492C57.7811 19.52 56.6751 19.52 55.7231 19.52L55.8911 20.668C58.1031 20.654 61.0571 20.64 63.7311 20.164L63.6191 19.156ZM57.2911 22.698H64.2911V25.092H65.7331V21.55H57.2911V22.698ZM67.4691 16.174H65.7331V12.45H64.2911V20.99H65.7331V17.364H67.4691V16.174ZM79.13 12.436H77.688V21.62H79.13V12.436ZM70.366 16.44C70.366 15.278 71.192 14.522 72.312 14.522C73.418 14.522 74.258 15.278 74.258 16.44C74.258 17.588 73.418 18.358 72.312 18.358C71.192 18.358 70.366 17.588 70.366 16.44ZM75.658 16.44C75.658 14.592 74.216 13.276 72.312 13.276C70.408 13.276 68.952 14.592 68.952 16.44C68.952 18.274 70.408 19.604 72.312 19.604C74.216 19.604 75.658 18.274 75.658 16.44ZM72.326 23.664V20.696H70.87V24.84H79.494V23.664H72.326Z"
        fill={fill ?? 'white'}
      />
    </svg>
  );
};

export default AcceptIcon;
