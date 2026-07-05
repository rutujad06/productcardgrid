import { useEffect, useState } from "react";
import Toolbar from "./components/Toolbar";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currentTag, setCurrentTag] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const tags = [...new Set(products.map((p) => p.tag))];

  const filtered = products
    .filter((p) =>
      currentTag === "All"
        ? true
        : p.tag === currentTag
    )
    .sort((a, b) =>
      sortAsc
        ? a.price - b.price
        : b.price - a.price
    );

  return (
    <div className="container">
      <h1>Interactive Product Card Grid</h1>

      <Toolbar
        tags={tags}
        currentTag={currentTag}
        setCurrentTag={setCurrentTag}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
      />

      <ProductGrid products={filtered} />
    </div>
  );
}

export default App;