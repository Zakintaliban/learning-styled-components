import Header from "./components/Header/Header";
import Starter from "./components/Starter/Starter";
import BasedProps from "./components/BasedProps/BasedProps";
import Extending from "./components/Extending/Extending";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Header />
      <Starter />
      <BasedProps />
      <Extending />
    </Container>
  );
}

export default App;
