import React from 'react';
import '../Floor/Floor.css';
import { ReactComponent as Floor1 } from '../Floor/floor1.svg';
import { ReactComponent as Floor2 } from '../Floor/floor2.svg';
import { ReactComponent as Floor3 } from '../Floor/floor3.svg';

function Map() {
  // const [floor, setFloor] = useState(1);

  return (
    <section>
      <input type="radio" name="r1" id="r1" />
      {/* <label htmlFor="r1">1 etasje</label> */}
      <input type="radio" name="r2" id="r2" />
      {/* <label htmlFor="r2">2 etasje</label> */}
      <input type="radio" name="r3" id="r3" />
      {/* <label htmlFor="r3">3 etasje</label> */}
      <Floor1 height={window.innerHeight * 0.7} />

      <Floor2 height={window.innerHeight * 0.7} />

      <Floor3 height={window.innerHeight * 0.7} />

    </section>
  );
}

export default Map;
