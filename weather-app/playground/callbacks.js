const getUser = (id, callback) => {ok
    const user = {
        id,
        name: 'Nathan'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(29, (user) => {
    console.log(user)
})

