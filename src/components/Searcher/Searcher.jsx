import "./Searcher.css"
import React from 'react'

const Searcher = ({ search, handleSearcher }) => {
  return (
    <div className="main">
      <div className={window.location.pathname === "/adopt" ? "containerInputAdopt" : "containerInput"}>
        <input
          type="text"
          className={window.location.pathname === "/adopt" ? "inputBuscarAdopt" : "inputBuscar"}
          value={search}
          placeholder="Buscar"
          onChange={handleSearcher}
        />
      </div>
    </div>
  )
}

export default Searcher
