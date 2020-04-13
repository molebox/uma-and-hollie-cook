/** @jsx jsx */
import { jsx } from "theme-ui";
import Wrapper from "./wrapper";
import VideoSection from "./video-section";
import VideoNav from "./video-nav";
import Item from "./item";
import Video from "./../video";

const Vlogs = () => {
  return (
    <Wrapper>
      <VideoSection sectionId="section1">
        <Item>
          <Video
            videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
            videoTitle="Cute Rabbits"
          />
        </Item>
        <Item>
          <Video
            videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
            videoTitle="Cute Rabbits"
          />
        </Item>
        <Item>
          <Video
            videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
            videoTitle="Cute Rabbits"
          />
        </Item>
        <Item>
          <Video
            videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
            videoTitle="Cute Rabbits"
          />
        </Item>
        <Item>
          <Video
            videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
            videoTitle="Cute Rabbits"
          />
        </Item>
      </VideoSection>
    </Wrapper>
  );
};

export default Vlogs;
