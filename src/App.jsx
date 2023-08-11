import Header from "./components/Header";
import Footer from "./components/Footer";
import Data from "./utils/data";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [card, setCard] = useState(false);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="section">
            {Data?.map((e) => (
              <Card id={e.id} title={e.title} body={e.body} />
            ))}
          </div>
          <button className="btn flex items-center justify-between">
            Show more...
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
