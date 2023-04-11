// for user

export const saveUserToLS = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}
export const getUserFromLS = () => {
    const user = localStorage.getItem('user');
    if(!user) return null;
    return JSON.parse(user)
}
export const removeUserFromLS = () => {
    localStorage.removeItem('user');
}

export const saveUserToken = (token) => {
    localStorage.setItem('token', token);
}

export const getUserToken = () => {
    const token  = localStorage.getItem('token');
    if(token) return token;
    return null;
}