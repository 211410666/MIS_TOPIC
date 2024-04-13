import { Topic_list } from './database/topic'
import './App.css'
import SingleTopic from './Single_topic'
import WrongReview from './WrongReview'
import { useState ,useEffect} from 'react'

const catchTopic = (topicList) => {
    let index = Math.floor(Math.random() * topicList.length);
    let topic = topicList[index];
    topicList.splice(index, 1);
    return topic;
}

const Topic = () => {
    const [topicList, setTopicList] = useState(Topic_list);
    const [wrongList, setWrongList] = useState([]);

    let topic = catchTopic(topicList);


    if (topicList.length > 0) {
        return (
            <section className='section-center'>
                <div className='topic'>
                    {
                        <SingleTopic key={topic.id} topic={topic} num={topicList.length} wrongList={wrongList} topicList={topicList} setTopicList={setTopicList} />
                    }
                </div>
            </section>
        )
    }
    else {
        return (
            <section className='section-center'>
                <div className='topic_w'>
                    {
                        <WrongReview wrongList={wrongList} />
                    }
                </div>
            </section>
        )
    }

}

export default Topic;