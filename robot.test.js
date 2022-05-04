const createRobot = require("./robot");

describe("test robot axis", () => {
  test("should return x position", () => {
    expect(createRobot(2, 1).getX).toBe(2);
  });
  test("should return y position", () => {
    expect(createRobot(2, 1).getY).toBe(1);
  });
  test("should return error", () => {
    expect(createRobot(8, -11)).toBe("error");
  });
});

describe("test vertical movement", () => {
  test("should return 0", () => {
    expect(createRobot(2, 1).moveDown).toBe(0);
  });
  test("should return 2", () => {
    expect(createRobot(2, 1).moveUp).toBe(2);
  });
});

describe("test horizontal movement", () => {
  test("should return ", () => {
    expect(createRobot(5, 7).moveLeft).toBe(4);
  });
  test("should return 2", () => {
    expect(createRobot(2, 1).moveRight).toBe(3);
  });
});

describe("test out of range",  () => {
    test("should return error", () => {
      expect(createRobot(0, 0).moveLeft).toBe("error");
    });
    test("should return error", () => {
      expect(createRobot(0, 0).moveDown).toBe("error");
    });
    test("should return error", () => {
      expect(createRobot(10, 10).moveUp).toBe("error");
    });
    test("should return error", () => {
      expect(createRobot(10, 10).moveRight).toBe("error");
    });
  });
