import { Header } from "../../components/Header";

export default function Home() {
  return (
    <Header title={"Kollektivt - IFI-rom"}>
      <embed
        src="https://mon.ruter.no/departures/59.943756-10.721023"
        className="min-h-screen w-full"
      />
    </Header>
  );
}
