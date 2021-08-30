  //Create user
  const rlu = "https://assets.breatheco.de/apis/fake/todos/user/nicolam";
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
    },[])