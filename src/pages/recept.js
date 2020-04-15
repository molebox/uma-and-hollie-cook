/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/main";
import Wrapper from "../components/vlogs/wrapper";
import Item from "../components/vlogs/item";
import Header from "./../components/site/header";
import Wave from "./../components/common/wave";
import ReceptCard from "../components/recipes/recept-card";

const Recept = () => {
  return (
    <Main>
      <Header title="alla recept" />
      <section
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 1fr"],
          gap: "2em",
          gridTemplateRows: "auto",
          background: "white",
          padding: "1em",
          placeItems: "center",
          borderRadius: "20px",
          border: "solid 2px",
          borderColor: "text",
          height: "auto",
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        <ReceptCard
          thumb="https://placeimg.com/150/150/people"
          thumbAlt="animals"
          title="Chokladbollar"
          description="Cupcake ipsum dolor sit amet ice cream pastry pastry I love. I love marzipan cookie chupa chups tootsie roll danish."
          datePosted="15-04-2020"
        />

        <ReceptCard
          thumb="https://placeimg.com/150/150/people"
          thumbAlt="animals"
          title="Chokladbollar"
          description="Cupcake ipsum dolor sit amet ice cream pastry pastry I love. I love marzipan cookie chupa chups tootsie roll danish."
          datePosted="15-04-2020"
        />
        <ReceptCard
          thumb="https://placeimg.com/150/150/people"
          thumbAlt="animals"
          title="Chokladbollar"
          description="Cupcake ipsum dolor sit amet ice cream pastry pastry I love. I love marzipan cookie chupa chups tootsie roll danish."
          datePosted="15-04-2020"
        />
        <ReceptCard
          thumb="https://placeimg.com/150/150/people"
          thumbAlt="animals"
          title="Chokladbollar"
          description="Cupcake ipsum dolor sit amet ice cream pastry pastry I love. I love marzipan cookie chupa chups tootsie roll danish."
          datePosted="15-04-2020"
        />
        <ReceptCard
          thumb="https://placeimg.com/150/150/people"
          thumbAlt="animals"
          title="Chokladbollar"
          description="Cupcake ipsum dolor sit amet ice cream pastry pastry I love. I love marzipan cookie chupa chups tootsie roll danish."
          datePosted="15-04-2020"
        />

        <ReceptCard
          thumb="https://placeimg.com/150/150/people"
          thumbAlt="animals"
          title="Chokladbollar"
          description="Cupcake ipsum dolor sit amet ice cream pastry pastry I love. I love marzipan cookie chupa chups tootsie roll danish."
          datePosted="15-04-2020"
        />
        <ReceptCard
          thumb="https://placeimg.com/150/150/people"
          thumbAlt="animals"
          title="Chokladbollar"
          description="Cupcake ipsum dolor sit amet ice cream pastry pastry I love. I love marzipan cookie chupa chups tootsie roll danish."
          datePosted="15-04-2020"
        />
        <ReceptCard
          thumb="https://placeimg.com/150/150/people"
          thumbAlt="animals"
          title="Chokladbollar"
          description="Cupcake ipsum dolor sit amet ice cream pastry pastry I love. I love marzipan cookie chupa chups tootsie roll danish."
          datePosted="15-04-2020"
        />
        {/* <Wrapper>
                <Item fluidSrc="https://placeimg.com/200/200/animals" alt="animals" vlogSlug=""/>
                <Item fluidSrc="https://placeimg.com/200/200/architecture" alt="animals1" vlogSlug=""/>
                <Item fluidSrc="https://placeimg.com/200/200/nature" alt="animals2" vlogSlug=""/>
                <Item fluidSrc="https://placeimg.com/200/200/people" alt="animals3" vlogSlug=""/>
                <Item fluidSrc="https://placeimg.com/200/200/tech" alt="animals4" vlogSlug=""/>
            </Wrapper> */}
      </section>
      <Wave></Wave>
    </Main>
  );
};

export default Recept;
