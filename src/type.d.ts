type UserSliceState = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    tasks: Task[]
    count: 0;
};

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

type Task = {
    name: string;
    _id: number;
    userId: number;
}

