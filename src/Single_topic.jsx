const randomOption = (options) => {
    let i = Math.floor(Math.random() * 4) + 1;
    options[0] = i;
    while (i == options[0]) i = Math.floor(Math.random() * 4) + 1;
    options[1] = i;
    while (options.includes(i)) i = Math.floor(Math.random() * 4) + 1;
    options[2] = i;
    options[3] = 10 - options[0] - options[1] - options[2];
}
const Click_btn = (select,topic,wrongList,topicList,setTopicList)=>{
    console.log(topicList);
    console.log(wrongList);
    if(select!==topic.answer)wrongList.push({
        id:topic.id,
        title:topic.title,
        options:topic.options,
        answer:topic.answer
    });
    let new_list = topicList.filter((topic)=>topic.id === topic.id)
    setTopicList(new_list);
}

const SingleTopic = (({ topic, num ,wrongList,topicList,setTopicList }) => {
    let options = [0, 0, 0, 0];
    randomOption(options);
    return (
        <>
            <div className="topics_status">
                <h4>剩餘題數:{num}</h4>
            </div>
            <div className="topic_show">
                <h3>{topic.title}</h3>
            </div>
            <div className="topic_options">
                <button type="button" className="option_button" id={options[0]} onClick={()=>Click_btn(options[0],topic,wrongList,topicList,setTopicList)}>
                    {topic.options[options[0] - 1]}
                </button>
                <button type="button" className="option_button" id={options[1]} onClick={()=>Click_btn(options[1],topic,wrongList,topicList,setTopicList)}>
                    {topic.options[options[1] - 1]}
                </button>
                <button type="button" className="option_button" id={options[2]} onClick={()=>Click_btn(options[2],topic,wrongList,topicList,setTopicList)}>
                    {topic.options[options[2] - 1]}
                </button>
                <button type="button" className="option_button" id={options[3]} onClick={()=>Click_btn(options[3],topic,wrongList,topicList,setTopicList)}>
                    {topic.options[options[3] - 1]}
                </button>
            </div>
        </>

    )
})



export default SingleTopic;