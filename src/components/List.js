function List() {
    const arr = [
        { id: 1, name: 'html' },
        { id: 1, name: 'css' },
        { id: 1, name: 'js' },
    ];
    
    //1st methode
    const li = arr.map((el) => {
        return <li key={el.id}>{el.name}</li>
    })
    console.log(li)
    return (
        
        <ul>
            {li}

            {/* 2sd methode */}
            {/* {arr.map((el) => (
                <li>{el}</li>
            ))} */}

        </ul>
    
        );
}

export default List;