import { fetchUser, loginUser, registerUser, removeUser } from 'store/authSlice';
import store from 'store';


export async function registration(form) {
    return await store.dispatch(registerUser(form)).unwrap();
}

export async function login(form) {
    return await store.dispatch(loginUser(form)).unwrap();
}

export async function logout() {
    store.dispatch(removeUser())
}

export async function updateToken(token) {
    store.dispatch(fetchUser(token));
}