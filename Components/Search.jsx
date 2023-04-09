import React from 'react'
import { BsSearch } from 'react-icons/bs'

export default function Search({handleSubmit, query, setQuery}) {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={query} placeholder="search here.. " onChange={e => setQuery(e.target.value)} />
        <button type="submit" className="search-btn">
            <BsSearch />
        </button>
    </form>
  )
}
