import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import "../css/header.css"
function SlideImage(props) {
    const Typewriter = ({ text, speed = 100 }) => {
        const [displayedText, setDisplayedText] = useState('');
        const [index, setIndex] = useState(0);
      
        useEffect(() => {
          if (index < text.length) {
            const timeoutId = setTimeout(() => {
              setDisplayedText((prev) => prev + text[index]);
              setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
          }
        }, [index, text, speed]);
      
        return <div>{displayedText}</div>;
      };
    return (
        <>
        <div className='home-image'>
      
      <div className="App">
 <header className="App-header">
  
   <Typewriter text="Welcome to HarshAgarbati🙋‍♂️" speed={80} />
   {/* <Typewriter text="Hello, this is a typewriter effect!" speed={70} /> */}
 </header>
</div>
       
      
   </div>
        </>
    );
}

export default SlideImage;