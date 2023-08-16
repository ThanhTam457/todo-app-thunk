import Dexie from "dexie";
import { initialData } from "./initialData";

export class TodoDatabase extends Dexie {
    userDatabase: Dexie.Table<User, number>;
    taskDatabase: Dexie.Table<Task, number>;

    constructor() {
        super("TodoDatabase");
        this.version(4).stores({
            users: "++id,name,email,password",
            tasks: "++_id, name"
        });
        this.userDatabase = this.table("users");
        this.taskDatabase = this.table("tasks");
        
    }

    getUser = async () => {
        const user = await this.userDatabase.toArray();
        return user[0];
    }

    setUser = async (user: User) => {
        await this.userDatabase.clear();
        await this.userDatabase.add(user);
    }
}

export const db = new TodoDatabase();

export default db;
