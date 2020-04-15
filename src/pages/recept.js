/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/main";
import Wrapper from "../components/vlogs/wrapper";
import Item from "../components/vlogs/item";
import Header from "./../components/site/header";

const Recept = () => {
  return (
    <Main>
      <Header title="alla recept" />
      <section
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* <Wrapper>
                <Item fluidSrc="https://placeimg.com/200/200/animals" alt="animals" vlogSlug=""/>
                <Item fluidSrc="https://placeimg.com/200/200/architecture" alt="animals1" vlogSlug=""/>
                <Item fluidSrc="https://placeimg.com/200/200/nature" alt="animals2" vlogSlug=""/>
                <Item fluidSrc="https://placeimg.com/200/200/people" alt="animals3" vlogSlug=""/>
                <Item fluidSrc="https://placeimg.com/200/200/tech" alt="animals4" vlogSlug=""/>
            </Wrapper> */}
      </section>
    </Main>
  );
};

export default Recept;
