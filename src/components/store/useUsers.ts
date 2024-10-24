import { createStore } from './store';

interface User {
    [x: string]: any;
    files: string[],
    friends: string[],
    key: string,
    limit: number,
    name: string,
    usage: number,
    username: string,
    password: string
}

const defaultStateUser: User = {
    files: [],
    friends: [],
    key: "",
    limit: 0,
    name: "",
    usage: 0,
    username: "",
    password: ""
};

export const [useUser] = createStore(defaultStateUser);