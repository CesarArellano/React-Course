import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../../effects.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0]; // Si hay data extrae los datos.
  
  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {
        loading 
        ? (
          <div className="alert alert-info text-center">
            Loading
          </div>
        )
        : (
          <blockquote className="blockquote">
            <p className="mb-3">{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
          </blockquote>
        )
      }
      <button className="btn btn-primary" onClick={ increment }>
        Next quote
      </button>
    </div>
  );
}
