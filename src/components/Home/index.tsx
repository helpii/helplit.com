import { Container, TopNavbar, LitCarousel, Section } from "../../components";

export function Home() {
  return (
    <Container>
      <>
        <TopNavbar />
        <Section type="banner">
          <p className="font-TITULO text-7xl">
            Planeje aulas <span className="font-bold">divertidas</span> e<br />
            produtivas em <span className="font-bold">menos tempo</span>.
          </p>
        </Section>
        <Section type="simple">
          <LitCarousel />
        </Section>
      </>
    </Container>
  );
}
