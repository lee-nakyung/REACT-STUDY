export default function TodoButton(){
    
    const [userInput, setUserInput]= useState();

    function inputChangeHandler(event){
        const newContent = event.target.value;
        setUserInput(newContent);
        
    }
    return (
        <div>
            <input type="checkbox" className="select"></input>
            <input type="text" className="field" placeholder="내용을 입력하세요" value={}></input>
            <button className="minusButton">삭제</button>
        </div>
    )
}