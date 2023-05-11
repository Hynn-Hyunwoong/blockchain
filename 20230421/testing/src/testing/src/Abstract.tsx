import { IState } from "./Interface";

export abstract class AbstractComponent {
  target: HTMLElement;
  state: IState = { list: [], user: { userId: "", username: "" } };

  constructor(target: HTMLElement) {
    this.target = target;
    this.setup();
    this.render();
  }

  abstract setup(): void;
  abstract template(): string;

  render(): void {
    this.target.innerHTML = this.template();
  }

  setState(newState: Partial<IState>): void {
    const prevState = this.state;
    this.state = { ...this.state, ...newState };
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      this.render();
    }
  }
}
