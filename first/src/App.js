import React from 'react'

//CSS
import './App.css'
// stateless functional component
// *  always return JSX
// function App()  {
//   return <div>
//   <h2>Yes Boy.!</h2></div>
// }
// const App = () => {
// Little messies if you do like that
// return React.createElement('div', {}, React.createElement('h1',{},'Yeah'))
// }

// * 2nd part
// JSX Rules
// return single element
// div/ section / artcile or fragment
// user camcelase for html attribute
// close every element
// formatiing

// const App = () => {
//   return (
//     <React.Fragment>
//     <h3>About</h3>
//     <ul>
//     <li><a href="#">Link 1</a></li></ul></React.Fragment>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Image</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi
//         praesentium iusto sunt aliquam laudantium, qui fugit animi consequatur
//         quis error in sed a esse tenetur itaque quae deserunt! Dolorum.
//       </p>
//       <img
//         src='https://sm.mashable.com/mashable_in/seo/default/what-makes-the-portals-scene-in-avengers-endgame-the-most-em_6zde.jpg'
//         alt='' width="100%" />
//     </div>
//   )
// }

// ? Nested Components , React Tools

const App = () => {
  return (
    <section className='Fruit-box'>
      <FruitBox />
      <FruitBox />
      <FruitBox />
      <FruitBox />
      <FruitBox />
      <FruitBox />
    </section>
  )
}
const FruitBox = () => {
  return (
    <article className="Fruit">
      <FruitImg />
      <FruitTitle />
      <FruitDesc />
      <FruitQualityTag/>
    </article>
  )
}
const FruitTitle = () => <h1>Mango</h1>
const FruitImg = () => {
  return (
    <img
      src='https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322096/mangoes-chopped-and-fresh.jpg?w=1155&h=1541'
      alt='Mango'
    />
  )
}
const FruitQualityTag = () => <span className='Fruit_Quality_Tag'>Quality</span>

const FruitDesc = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
      exercitationem perspiciatis est quasi, fugit voluptate suscipit, quam
      itaque ab aut non incidunt magnam, temporibus dolorem possimus sunt
      obcaecati quibusdam ullam!
    </p>
  )
}
export default App
