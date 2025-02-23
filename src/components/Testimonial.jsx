import { useState } from "react";

const Videos = () => {
  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(false);

  const toggleNext = () => {
    setVideo1((prev) => !prev);
    setVideo2((prev) => !prev);
  };

  const togglePrev = () => {
    setVideo1((prev) => !prev);
    setVideo2((prev) => !prev);
  };

  return (
    <div className="sticky">
      <div>
        <p className="text-3xl font-quicksand text-center font-semibold pt-5">We Earned</p>
        <p className="text-3xl font-quicksand text-center font-semibold">Trust & Satisfaction</p>
      </div>
      <div className="">
        <video
          controls
          type="video/mp4"
          className={`pt-10 px-10 pb-3 rounded-llg ${video1 ? "" : "hidden"}`}
          src="https://ufmlxewvhsitvlrggfwn.supabase.co/storage/v1/object/public/rainbow/Snapinsta.app_video_AQP6rD6ur4qn2qC2fkBX5E0AFUs1sthTh3lNB2BGYBLxoKZXXj8wNUHHb0cgfbug1P_hZAz9dPXKJH_hoViHj-2UEQAySutqSFy6ZuM.mp4?t=2024-12-21T17%3A10%3A45.467Z"
        ></video>
        <video
          controls
          type="video/mp4"
          className={`pt-10 px-10 pb-3 rounded-llg ${video2 ? "" : "hidden"}`}
          src="https://ufmlxewvhsitvlrggfwn.supabase.co/storage/v1/object/public/rainbow/Snapinsta.app_video_AQNalUEarEe3UzgFgYxhDpX71lFKCJds9N1VDtNWevzv64D8f0acDtDFQmFATgsOy62-8fV6lfbocadxwzbAFeS3zgPUg-zvv9Z8y7U.mp4"
        ></video>

        <div className="flex justify-center items-center gap-10 mt-4 z-10">
          <button onClick={togglePrev} className="text-white">
            <svg
              fill="#ffffff"
              height="32px"
              width="32px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-51.2 -51.2 614.40 614.40"
              xml:space="preserve"
              stroke="#ffffff"
              stroke-width="0.00512"
              transform="rotate(180)"
            >
              <g id="SVGRepo_iconCarrier">
                <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M280.875,269.313l-96,64 C182.199,335.094,179.102,336,176,336c-2.59,0-5.184-0.625-7.551-1.891C163.246,331.32,160,325.898,160,320V192 c0-5.898,3.246-11.32,8.449-14.109c5.203-2.773,11.516-2.484,16.426,0.797l96,64C285.328,245.656,288,250.648,288,256 S285.328,266.344,280.875,269.313z M368,320c0,8.836-7.164,16-16,16h-16c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h16 c8.836,0,16,7.164,16,16V320z"></path>
              </g>
            </svg>
          </button>

          <button onClick={toggleNext} className="text-white">
            <svg
              fill="#ffffff"
              height="32px"
              width="32px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-51.2 -51.2 614.40 614.40"
              xml:space="preserve"
              stroke="#ffffff"
              stroke-width="0.00512"
            >
              <g id="SVGRepo_iconCarrier">
                <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M280.875,269.313l-96,64 C182.199,335.094,179.102,336,176,336c-2.59,0-5.184-0.625-7.551-1.891C163.246,331.32,160,325.898,160,320V192 c0-5.898,3.246-11.32,8.449-14.109c5.203-2.773,11.516-2.484,16.426,0.797l96,64C285.328,245.656,288,250.648,288,256 S285.328,266.344,280.875,269.313z M368,320c0,8.836-7.164,16-16,16h-16c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h16 c8.836,0,16,7.164,16,16V320z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
