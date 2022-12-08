import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";
{
  /* UGl61OV1lgSHXJZmEMc8guuQSv0rdZrU */
}
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // setCategories([...categories, 'Valorant'])
    setCategories((cat) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;