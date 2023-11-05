import React, { useState, useEffect } from 'react';
import axios from "axios";

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            // 요청이 시작할 때는 error와 users 초기화
            setError(null);
            setUsers(null);

            // loading 상태는 true
            setLoading(true);

            // 통신부
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생</div>;
    if (!users) return null;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username}({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
}

export default Users;
