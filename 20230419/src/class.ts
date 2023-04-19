// Type Class
// Class 는 객체를 생성하기 위한 틀이다.

interface UserInfo {
  username: string;
  userId: string;
}

// interface UserI {
//   addUser: (username: string, userId: string) => UserInfo;
// }

abstract class Person {
  user!: UserInfo;
  abstract addUser(username: string, userId: string): UserInfo;
  getUser() {}
}

class User extends Person {
  addUser(username: string, userId: string): UserInfo {
    return { username, userId };
  }
}
