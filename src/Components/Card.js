import React from 'react'

function Card(props) {

  
  return (
    <div>
      <div className="Posters" >
        <img src={props.pic}/>
        <h3>{props.title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nulla quasi quibusdam obcaecati facilis dolorem, tempora incidunt ex dicta culpa quaerat sapiente temporibus, possimus error deleniti rem. Corporis dolores assumenda sed! Dolores maiores libero incidunt. Dolor optio explicabo aliquam libero cumque voluptate earum. Fugiat ratione distinctio, aut placeat consectetur vero fuga accusantium ea maiores eius beatae quo, culpa, perferendis earum. Corporis vero rem aliquam amet ratione veritatis inventore similique repellendus a, commodi illo, delectus nam quas sint natus rerum error ducimus quia saepe.<a className="wiki" href={props.link} target="_blank" rel="noopener" >READ MORE</a>....</p>
      </div>
    </div>
  )
}

export default Card
