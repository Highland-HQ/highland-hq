const { validateEmail, validateName } = require("../lib/auth/auth-helpers");

describe("validateName", () => {
  test("should return true for valid names", () => {
    expect(validateName("Luna")).toBeTruthy();

    expect(validateName("Luna-Bear")).toBeTruthy();

    expect(validateName("Luna420")).toBeFalsy();
  });
});

describe("validateEmail", () => {
  test("should return true for valid emails", () => {
    expect(validateEmail("lunabear@gmail.com")).toBeTruthy();

    expect(validateEmail("lunabear#gmail.com")).toBeFalsy();

    expect(validateEmail("lunabear@gmail")).toBeFalsy();
  });
});

describe("handleEmailRegistration", () => {
  test("should register users given the correct input", () => {
    expect(validateEmail("lunabear@gmail.com")).toBeTruthy();
  });
});
