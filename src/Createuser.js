 /* //Create user
    useEffect(() => {
        fetch(rlu, {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify([])
        })
            .then((res) => {
            return console.log(res)
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])*/