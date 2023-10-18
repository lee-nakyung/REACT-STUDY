import {useState} from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

const sortOptionList = [//최신순
    {value:"latest", name:"최신순"},
    {value:"oldest", name:"오래된 순"},
];

const filterOptionList = [//모두다
{value:"all", name:"전부다"},
{value:"good", name:"좋은 감정만"},
{value:"bad", name:" 안 좋은 감정만"},
];

const ControlMenu = ({value, onChange, optionList}) => {
    return (
        <select className="ControlMenu"
        value={value} onChange={(e) => onChange(e.target.value)}>
            {optionList.map((it, idx) => (
                <option key={idx} value={it.value}>
                    {it.name}
                </option>
            ))}
        </select>
    );
};

const DiaryList = ({diaryList}) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState('latest');  //최신순
    const [filter,setFilter]= useState("all"); //전부다

    const getPropcessedDiaryList = () => {

        const filterCallBack = (item) => {
            if(filter === 'good'){
                return parseInt(item.emotion) <= 3;
            }else if (filter === 'bad') { 
                return parseInt(item.emotion) > 3;
            } else {
                return true; 
            }
        };
    
        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(a.date) - parseInt(b.date);
            } else {
                return parseInt(b.date) - parseInt(a.date); 
            }
        };
    
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const filteredList = copyList.filter(filterCallBack);
        return filteredList.sort(compare);
    };

    return (
        <div className="DiaryList">

            <div className="menu_wrapper">
                <div className="left_col">

                <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
            <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />

                </div>
                <div className="right_col">

                <MyButton type = {'positive'} text = {"새 일기쓰기"} onClick={()=>navigate('/new')}/>

                </div>
            </div>
            
            
            {getPropcessedDiaryList().map((it) => ( 
                <DiaryItem key={it.id} {...it}/>
            ))}
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;
