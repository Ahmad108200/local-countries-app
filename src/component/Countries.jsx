import React from 'react'


const Country = ({country: {name, capital, languages, currency, population}}) => {
return (
  <div className='done'>
    <div className='ready'>
    <h4>Name:{name}</h4>
    {/* <p>Capital:{capital}</p> */}
    <h5>Language:{languages}</h5>
    {/* <h5>Currency:{currency}</h5> */}
    <p>Population:{population}</p>
    </div>
  </div>
)
}

function Countries({countriesData}) {
  const countrieslist = countriesData.slice(0,20).map((country) => <Country country={country}/>)
  return (
    <div className='the'>{countrieslist}</div>
  )
}

export default Countries