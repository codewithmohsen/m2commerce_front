'use client';
import React, { useEffect } from 'react';
import { IAuthState, signIn, IError, signOut } from '../_reducer/auth.slice';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'next/navigation';

const page: React.FC = () => {
    const auth = useSelector((state: any) => state.auth) as IAuthState;
    const dispatch = useDispatch<any>();

    useEffect(() => {
        if (auth.data?.jwt) {
            redirect('/dashboard');
        }
        else {
            redirect('/auth/sign-in');
        }
        //dispatch(signIn({ username: 'codewithmohsen@gmail.com', password: 'Bahar1391' }));
    }, [auth]);


    return (
        <></>
    );
    // return (
    //     <div>
    //         <h2>user view</h2>
    //         {auth.loading && <div>loading...</div>}
    //         {!auth.loading && auth.error ? <div>Error:{auth.error.message}</div> : null}
    //         {!auth.loading && auth.data ? (
    //             <p>{auth.data.jwt}</p>
    //             // { auth.data.jwt }
    //             // <ul>
    //             //     {user.users.map((user) => (
    //             //         <li key={user.id}>{user.name}</li>
    //             //     ))}
    //             // </ul>
    //         ) : null}
    //     </div>
    // );
};

export default page;