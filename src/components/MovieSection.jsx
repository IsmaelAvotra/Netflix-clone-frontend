import React from 'react'
import './MovieSection.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function MovieSection({ title, items }) {
  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow-left'>
        <AiOutlineLeft className='left' />
      </div>
      <div className='movieRow-right'>
        <AiOutlineRight className='right' />
      </div>

      <div className='movieRow--listarea'>
        <div className='movieRow--list'>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className='movieRow--item' key={key}>
                <img
                  alt={item.original_name || item.original_title}
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieSection
