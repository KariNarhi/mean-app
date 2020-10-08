export class User_Register_Request {
  name: string;
  email: string;
  username: string;
  password: string;
}

export class User_Register_Response {
  success: boolean;
  msg: string;
}

export class User_Login_Request {
  username: string;
  password: string;
}

export class User_Auth_Response {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    name: string;
    username: string;
    email: string;
  };
  msg?: string;
}

export class User_LocalStorage {
  id: string;
  name: string;
  username: string;
  email: string;
}

export class User_Profile {
  name: string;
  username: string;
  email: string;
}
