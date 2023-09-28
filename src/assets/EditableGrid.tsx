import React, { useState, useEffect } from 'react';

// Define the interface for a grid item
interface GridItemData {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
  actors: string[];
  trailerUrl: string;
  time_created: string;
  time_modified: string;
}

const EditableGrid: React.FC = () => {
  const [gridData, setGridData] = useState<GridItemData[]>([]);
  const [newItem, setNewItem] = useState<GridItemData>({
    id: 0,
    title: '',
    description: '',
    src: '',
    alt: '',
    actors: [],
    trailerUrl: '',
    time_created: '',
    time_modified: '',
  });

  useEffect(() => {
    // Load initial data from JSON file or an API endpoint
    // For this example, we'll initialize with some sample data
    const initialData: GridItemData[] = [
      {
        id: 1,
        title: 'Sample Movie 1',
        description: 'Description of Sample Movie 1',
        src: 'image1.jpg',
        alt: 'Sample Movie 1',
        actors: ['Actor 1', 'Actor 2'],
        trailerUrl: 'https://www.example.com/trailer1',
        time_created: '2023-09-28 10:00:00',
        time_modified: '2023-09-28 10:00:00',
      },
      // Add more initial data if needed
    ];

    setGridData(initialData);
  }, []);

  // Handle changes in the form fields
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Handle adding a new item to the grid
  const handleAddItem = () => {
    // Generate a unique ID for the new item
    const newId = gridData.length > 0 ? Math.max(...gridData.map((item) => item.id)) + 1 : 1;

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = `${currentDate.toISOString().split('T')[0]} ${currentDate.toLocaleTimeString()}`;

    // Add the new item to the grid data
    setGridData([
      ...gridData,
      { ...newItem, id: newId, time_created: formattedDate, time_modified: formattedDate },
    ]);

    // Clear the form fields
    setNewItem({
      id: 0,
      title: '',
      description: '',
      src: '',
      alt: '',
      actors: [],
      trailerUrl: '',
      time_created: '',
      time_modified: '',
    });
  };

  // Handle deleting an item from the grid
  const handleDeleteItem = (idToDelete: number) => {
    const updatedData = gridData.filter((item) => item.id !== idToDelete);
    setGridData(updatedData);
  };

  // Render the grid
  return (
    <div>
      <h1>Editable Grid</h1>
      <div>
        <h2>Add New Item</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newItem.title}
            onChange={handleFieldChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={newItem.description}
            onChange={handleFieldChange}
          />
        </div>
        {/* Add input fields for other data fields (src, alt, actors, trailerUrl) */}
        <div>
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      </div>
      <div className="grid">
        {gridData.map((item) => (
          <div key={item.id} className="grid-item">
            {/* Render the grid item content */}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* Add rendering for other data fields (src, alt, actors, trailerUrl) */}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditableGrid;
