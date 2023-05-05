import React from 'react'
import "./About.css"
import john from "./images/john-doe.png"

const About = () => {
  return (
    <div className='about' id="about">
        <div className='container'>
            <img src={john} alt="john"/>
            <div className='col-2'>
                <h2>About</h2>
                <span className='line'></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam aperiam alias ex, sint praesentium labore numquam ullam voluptate aliquam cum quod doloremque maiores quaerat eveniet officiis libero tenetur quos, pariatur veritatis eius quo tempora. Autem inventore consequatur tempore placeat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi quasi, itaque voluptate quis, labore dignissimos repellendus mollitia voluptatibus odit, ratione sint magni atque!</p>
                <button className='button'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default About