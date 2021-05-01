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

// * setup variable

const Fruits = [
  {
    id: 1,
    title: 'Mango',
    desc:
      'A mango is a stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. Most of these species are found in nature as wild mangoes.',
    img:
      'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322096/mangoes-chopped-and-fresh.jpg?w=1155&h=1541/>',
  },
  {
    id: 2,
    title: 'Guvava',
    desc:
      'Guavas are tropical trees originating in Central America. Their fruits are oval in shape with light green or yellow skin and contain edible seeds',
    img:
      'https://www.verywellfit.com/thmb/0_EP_eQ7oQGr_rXodjhjeBMYkvc=/1500x1000/filters:fill(FFDB5D,1)/guava_annotated-1085716a264e420da311e61d0b9129e8.jpg',
  },
]

// const App = () => {
//   return (
//     <section className='Fruit-box'> 
//       {Fruits.map((fruit,index) => {
//         const {img ,title, author } = fruit;
//         return <FruitBox key= {fruit.id} fruit={fruit}></FruitBox>
//       })}
//     </section>
//   )
// }

// * spread operator
const App = () => {
  return (
    <section className='Fruit-box'> 
      {Fruits.map((fruit,index) => {
        return <FruitBox key= {fruit.id} {...fruit}></FruitBox>
      })}
    </section>
  )
}
const FruitBox = ({ img, title, desc }) => {
  // const { img, title, desc } = props
//  * attribute , eventhandler
// * onClick , onMourseOver 
const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
}
const deleteItem = (title) => {
}
  return (
    <article className='Fruit' onMouseOver={(e) => {
      console.log(e.target);
    }}>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <span className='Fruit_Quality_Tag'>Quality</span>
      <p> {desc}</p>
      <button type="button" onClick={clickHandler}>Buy</button>
      <button type="button" onClick={() => deleteItem(title)}>Delete item</button>
      </article>
  )
}

export default App
