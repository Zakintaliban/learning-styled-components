import Header from "./components/Header/Header";
import Starter from "./components/Starter/Starter";
import BasedProps from "./components/BasedProps/BasedProps";
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
    </Container>
  );
}

export default App;
