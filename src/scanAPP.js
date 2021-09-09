import { useEffect, useRef } from 'react';
import { sList} from './appSchemes'
function App() {
  return (
    <div>应用列表: 
      {sList.map(app => {
        return <div>
          {app.name} {app.schemes.map(item => <a target="_blank" style={{paddingLeft: 15, display: "inline-block"}} href={`${item}://`}>{item}</a>)}
        </div>
      })}
    </div>
  );
}
export default App;
