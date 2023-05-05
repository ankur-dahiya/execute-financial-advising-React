import React from 'react';
import "./Demo.css";

const Demo = () => {
  return (
    <div className='video' id="demo">
        <div className="container">
            <div className="col-1">
                <p>More Than 100 Financial Planners,</p>
                <p>One Philospy</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aut! Magni numquam, eius accusantium obcaecati delectus animi quas? Aperiam aut incidunt voluptas reprehenderit in repellat soluta autem fugit commodi exercitationem!</p>
                <button className='button'>Get your free financial analysis</button>
            </div>
            <div className="col-2">
            <iframe width="570" height="320" src="https://www.youtube.com/embed/kJb6BZwqCGM" title="YouTube video player"allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Demo