import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "./Context";


const Categories = () => {
    const {Items, addToCart, cartItem} = useContext(ShopContext);
    const [categories, setCategories] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/categories')
        .then(res => {setCategories(res.data)
                    console.log(res)});
      const all_btn = document.getElementById('all_btn');
      all_btn.click();
    }, [])
    function filterCategory(selectedCategoryId){
      if (selectedCategoryId == 0){
        setFilteredItems(Items);
        return
      }
    setFilteredItems(Items.filter(item => item.category_id == selectedCategoryId));
    }
  return (
    <div className="categories_home">
      <div className="categories">
        <button autoFocus id="all_btn" onClick={(e) => filterCategory(0)} className="category_btn">All</button>
        {categories.map(category => (
            <button onClick={(e) => filterCategory(e.target.id)} className="category_btn" id={category.category_id}>{category.name}</button>
        ))}
      </div>
      <div className="filteredProducts">
        {filteredItems.map(item => (
          <div className="productContainer" key={item.prod_id}>
              <img src={(JSON.parse(item.images))[0].path} alt="No found" />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <button className="addToCart-btn" onClick={() => addToCart(item.prod_id)}>Add to cart ({cartItem[item.prod_id]})</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories;
