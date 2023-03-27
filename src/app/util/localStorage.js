// for user

export const saveUserToLS = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}
export const getUserFromLS = () => {
    const user = localStorage.getItem('user');
    if(!user) return null;
    return JSON.parse(user)
}