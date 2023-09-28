import { useState } from 'react';
import './App.css';
import GridItem from './assets/gridItem';
import tileData from '../public/moviedata.json'; // Import your JSON data
import EditableGrid from './assets/EditableGrid';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Magnificent Movie Tool<sup>tm</sup></h1>
      
    <EditableGrid></EditableGrid>

      <div id="grid">
        {tileData.map((tile, index) => (
          <GridItem
            key={index}
            title={tile.title}
            description={tile.description}
            src={tile.src}
            alt={tile.alt}
            directors={tile.directors}
            actors={tile.actors}
            trailerUrl={tile.trailerUrl}
          />
        ))}
      </div>
    </>
  );
}

export default App;
