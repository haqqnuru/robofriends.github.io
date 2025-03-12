import React from 'react';




function SearchBox({searchfield, searchChange}) {
    return ( 
        <div className="pa2">
        <input
          type="search"
          className="pa3 input-reset ba b--black-20 bg-white hover-bg-light-gray br3"
          placeholder="Search robots"
          onChange={searchChange}
          
        />
      </div>
     );
}
 
export default SearchBox;