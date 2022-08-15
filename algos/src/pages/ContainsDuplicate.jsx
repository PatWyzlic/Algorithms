import React, {useState} from "react";

export default function ContainsDuplicate(){
    let [example, setExample] = useState([234, 43, 55, 63, 5, 6])
    let [num, setNum] = useState(example);
    let [newNum, setNewNum] = useState([]);
    //Turns num state into text
    let text = num.join();

    let numsSet;
    function duplicate(nums, ex) {
        numsSet = new Set(nums)
        console.log(numsSet.size)
        console.log(ex.length)
        
        if(numsSet.size !== ex.length){
            return "This array contains a duplicate"
        }else{
            return "This array does not contain a duplicate"
        }
    };

    /* Arrow function that pushes new number into array when called on */
    const handleClick = () => {
        //Pushes in the newNum entered into both num and example
        setNum([...num, parseInt(newNum)]);
        setExample([...num, parseInt(newNum)]);
    };

    return(
        <div className="main">
            {/* Title of algorithm */}
            <h1>Contains Duplicate</h1>
            {/* Difficulty Level */}
            <h2>Difficulty: Easy</h2>
            {/* Array formatted as text */}
            <h1>{text}</h1>
            {/* Display of True or False of if the array contains a duplicate */}
            <h1>{duplicate(num, example)}</h1>
            
            {/* Input of number user can add to array */}
            <input type="number" onChange={e => setNewNum(e.target.value)}></input>

            {/* Button to add current number input */}
            <input 
                type="button"
                /* Use of onClick with handlClick arrow function above */
                onClick={handleClick} 
                value="Add" 
            />

                {/* Mapping of current numbers in array */}
                <div>
                    {num.map((num, index) =>
                        <div key={index}>{num}
                        </div>
                        )
                    }
                </div>
        </div>
    )
}