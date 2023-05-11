import { IComment, IState } from "./Interface";
import { AbstractComponent } from "./Abstract";

class App extends AbstractComponent {
  setup(): void {
    this.state = {
      list: [
        { id: 1, userId: "user1", content: "content1", register: new Date() },
        { id: 2, userId: "user2", content: "content2", register: new Date() },
        { id: 3, userId: "user3", content: "content3", register: new Date() },
      ],
      user: {
        userId: "user1",
        username: "username1",
      },
    };
  }

  template(): string {
    const { list, user } = this.state;
    return `
      <form>input</form>
      <div id='comment-list'>
        <h1>Comment List</h1>
        <ul>
          ${list
            .map(
              (comment: IComment) => `
                <li>
                  <p>${comment.content}</p>
                  <p>${comment.register}</p>
                  <p>${comment.userId === user.userId ? "내가 쓴 댓글" : ""}</p>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    `;
  }
}

new App(document.querySelector("#root") as HTMLElement);
