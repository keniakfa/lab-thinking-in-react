export default function SearchBar(props) {
    const { searchProduct } = props;
  
    function handleSearch(e) {
      searchProduct(e.target.value);
    }
  
    return (
      <>
        <div>
          <p>Search</p>
          <input type="text" onChange={handleSearch} />
        </div>
        <div>
          <input type="checkbox" />
          <p>Only show products in stock</p>
        </div>
      </>
    );
  }