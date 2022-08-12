import React, {useState} from "react";

export default function ContainsDuplicate(){
    let example = [234, 43, 55, 63, 5, 6]
    let [num, setNum] = useState(example);
    let [newNum, setNewNum] = useState([]);
    let text = num.join();

    let theLength;
    let numLength;
    function duplicate(nums) {
        let set1 = new Set(nums)
        theLength = set1.size
        numLength = nums.length
        text = num.join();
        if(nums.length !== theLength){
            return "true"
        }else{
            return "false"
        }
    };


    const handleClick = () => {
        setNum([...num, newNum]);
        example.push(parseInt(newNum))
        console.log(example)
    };

    const handleRemove = () => {
        setNum(num.slice(0, -1))
    }

    return(
        <div className="main">
            <h1>Contains Duplicate</h1>
            <h2>Difficulty: Easy</h2>
            <h1>{theLength}</h1>
            <h1>{numLength}</h1>
            <h1>{text}</h1>
            <h1>{duplicate(num)}</h1>
            
            <input type="number" onChange={e => setNewNum(e.target.value)}></input>
            
            {/* 
            <input type="button" onClick={handleRemove} value="remove">Remove</input> */}

            <input type="button" onClick={handleClick} value="Add" />
                <div>{num.map((num, index) =>
                <div key={index}>{num}</div>
            )}
        </div>
        </div>
    )
}