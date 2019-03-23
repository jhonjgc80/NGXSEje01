import { User } from '../models/user';

export class AddUser {
    static readonly type = '[User] AddUser]';
    constructor(public payload: User) {}
}


