export type UserProfile = {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type UserAuth = Pick<UserProfile, 'id' | 'name' | 'username' | 'email'>;
export type UserAdd = Pick<UserProfile, 'id' | 'email'>;
