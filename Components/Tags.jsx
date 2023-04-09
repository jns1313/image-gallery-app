import React from 'react'

export default function Tags({clickHandler}) {
  return (
    <aside className="tags-container">
        <button className="tag-btn" onClick={() => clickHandler()}>Travel</button>
        <button className="tag-btn" onClick={() => clickHandler()}>Art</button>
        <button className="tag-btn" onClick={() => clickHandler()}>Photography</button>
        <button className="tag-btn" onClick={() => clickHandler()}>Food</button>
    </aside>
  )
}
