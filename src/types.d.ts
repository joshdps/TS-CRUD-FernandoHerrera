




export interface Users  {
    id: number
    name: string;
    email: string;
    state: boolean;
}

export type UsersWithoutId = Omit<Users, 'id'>;