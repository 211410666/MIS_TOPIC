import { Topic_list } from './database/topic'
import { useState, useEffect } from 'react'

const All_Topic = () => {
    const [topicList, setTopicList] = useState(Topic_list);
    return (
        <div>
            {
                Topic_list.map((wrong, index) => {
                    return (<>
                        <div className="wrong">
                            <h4 className="wrongTitle">{index + 1}.{wrong.title}</h4>
                            <div className="wrong_options">
                                {wrong.options.map((option, index) => {
                                    if (index + 1 === wrong.answer) {
                                        return <><h5 style={{ color: 'darkgreen' }, { backgroundColor: 'lightgreen' }}>({index + 1}){option}</h5></>
                                    }
                                    else {
                                        return <><h5>({index + 1}){option}</h5></>
                                    }
                                })}
                            </div>
                        </div>
                    </>)
                })
            }
        </div>
    );
}

export default All_Topic;