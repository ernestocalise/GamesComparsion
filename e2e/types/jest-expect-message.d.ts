// Custom implementation of the Expect to allow the option of the message from the library
// "jest-expect-message"
declare namespace jest {
  interface Expect {
    // tslint:disable-next-line:callable-types
    <T = any>(actual: T, message?: string): jest.JestMatchers<T>;
  }
}
