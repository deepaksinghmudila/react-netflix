import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards'; 
import sdata from './Sname';
//console.log(sdata[0].sname);
 
const cssStyle = {
  textAlign: 'center',
  
}

ReactDOM.render(
  <>   
    <div className = "heading_style" style={cssStyle}> <h1> Beautiful Pictures </h1>  </div>
    { sdata.map( (val) => {
      
      return (
        <Card
          sname={val.sname}
          imgsrc={val.imgsrc}
          title={val.title}
          links={val.links} />
      );
    })}
        
 </>   
  ,document.getElementById('root')
);

 
