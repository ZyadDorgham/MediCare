import { FaSearch } from "react-icons/fa"
export default function SearchWrapper({search,setsearch})
{
    return(
        <>
                    <div className="search-wrapper">
        
                      <FaSearch className="search-icon" />
        
                      <input
                        value={search}
                        onChange={(e) =>
                          setsearch(e.target.value)
                        }
                        type="text"
                        className="search-input"
                        placeholder="Search doctors..."
                      />
        
                    </div>
        
        </>
    )
}