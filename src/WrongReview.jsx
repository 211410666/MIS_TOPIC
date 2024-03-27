const Wrong_review = (({ wrongList }) => {
    console.log('finish', wrongList);
    return (
        <div>
            {
                wrongList.map((wrong, index) => {
                    return (<>
                        <div className="wrong">
                            <h4 className="wrongTitle">{index + 1}.{wrong.title}</h4>
                            <div className="wrong_options">
                                {wrong.options.map((option, index) => {
                                    if (index + 1 === wrong.answer) {
                                        return <><h5 style={{color:'darkgreen'},{backgroundColor:'lightgreen'}}>({index + 1}){option}</h5></>
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
    )
})



export default Wrong_review;