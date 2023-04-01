import { LocalStorageKeys, LocalStorageService } from ".";

describe("LocalStorageService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should setItem to LocalStorage", () => {
    jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.setItem = jest.fn();

    const mockId = "111";
    const mockJson = JSON.stringify({ data: "json data" });
    LocalStorageService.setLS(mockId as LocalStorageKeys, mockJson);
    expect(localStorage.setItem).toHaveBeenCalledWith(mockId, mockJson);
  });

  it("should removeItem to LocalStorage", () => {
    jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.removeItem = jest.fn();

    const mockId = "111";
    LocalStorageService.removeLS(mockId as LocalStorageKeys);
    expect(localStorage.removeItem).toHaveBeenCalledWith(mockId);
  });

  it("should getItem to LocalStorage - return null if not found", () => {
    jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.getItem = jest.fn();

    const mockId = "111";
    const value = LocalStorageService.getLS(mockId as LocalStorageKeys);
    expect(localStorage.getItem).toHaveBeenCalledWith(mockId);
    expect(value).toBeNull();
  });

  it("should getItem to LocalStorage - return value if found", () => {
    const mockValue = "value";
    const mockLocalStorageStore: Record<string, string> = {
      mockKey: mockValue,
    };
    jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.getItem = jest.fn((v) => mockLocalStorageStore[v]);

    const mockId = "mockKey";
    const value = LocalStorageService.getLS(mockId as LocalStorageKeys);
    expect(localStorage.getItem).toHaveBeenCalledWith(mockId);
    expect(value).toBe(mockValue);
  });
});
