function UserData({users}){
    console.log(users)
    return (
        <>
        {users.map(user=>{
            return (<div key={user.id}>
                {user.name}
            </div>)
        })}
        </>
    )
}

export default UserData;