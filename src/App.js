import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
// import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import CategoriesContainer from './components/CategoriesContainer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/categories" element={<CategoriesContainer />} />
          <Route
            path="*"
            element={
              <div className="error404">
                <h1>Error 404</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
