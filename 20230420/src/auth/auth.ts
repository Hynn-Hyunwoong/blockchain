interface AuthInterface {
  email: string;
  password: string;
}

const authProps: AuthInterface = {
  email: "choihwoong@me.com",
  password: "1234",
};

class EamilSender {
  constructor() {}
  public sendEmail(email: string): void {
    console.log(`Send email to ${email}`);
  }
}

class Auth {
  constructor(
    private readonly AuthInterface: AuthInterface,
    private readonly emailSender: EamilSender
  ) {}

  login(): void {
    // Login Logic
    console.log(this.AuthInterface.email);
  }
  register(): void {
    // Join Logic
    this.emailSender.sendEmail(this.AuthInterface.email);
  }
}

const emailSender = new EamilSender();
const auth = new Auth(authProps, emailSender);
