import { IconProps } from "@/interfaces/icon";

function SpotifyIcon({fill, height, width}: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 20"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill={fill} transform="translate(-140 -7479)">
            <g transform="translate(56 160)">
              <path d="M99.915 7327.865c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 01-.543-1.79c3.533-1.073 9.405-.866 13.116 1.337a.935.935 0 01-.955 1.609zm-.105 2.835a.78.78 0 01-1.073.257c-2.687-1.652-6.785-2.13-9.964-1.165a.78.78 0 01-.453-1.492c3.631-1.102 8.146-.568 11.233 1.329a.779.779 0 01.257 1.071zm-1.224 2.723a.623.623 0 01-.857.207c-2.348-1.435-5.304-1.759-8.785-.964a.622.622 0 11-.277-1.215c3.809-.871 7.076-.496 9.712 1.115.294.18.387.563.207.857zM94 7319c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10c0-5.522-4.477-9.999-10-9.999V7319z"></path>
            </g>
          </g>
        </g>
      </svg>
    );
  }
  
  export default SpotifyIcon;
  