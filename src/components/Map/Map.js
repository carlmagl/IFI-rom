import React from 'react';
import '../Floor/Floor.css';




function Map(){
    return(
        <section>
            <input type="radio" name="r1" id="r1" />
            <label for="r1">1 etasje</label>
            <input type="radio" name="r2" id="r2" />
            <label for="r2">2 etasje</label>
            <input type="radio" name="r3" id="r3" />
            <label for="r3">3 etasje</label>
            {<p>1 etasje</p>}
            {<p>2 etasje</p>}
            {<p>3 etasje</p>}
        </section>
    )
}

export default Map;