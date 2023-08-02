import Papa from "papaparse";
import { handleCSVUpload } from "../src/scripts/upload";
import * as dateFormatter from '../src/scripts/services/dateFormatter';

interface ParseOptions {
  header?: boolean;
  skipEmptyLines?: boolean;
  complete?: (result: { data: any[] }) => void;
  error?: (error: any) => void;
}

jest.mock("papaparse", () => ({
  parse: jest.fn(),
}));

describe("handleCSVUpload", () => {
  it("should parse CSV file and return BusRouteData", async () => {
    const mockFile = new Blob([], { type: 'text/csv' }) as any;
    mockFile['name'] = 'test.csv';

    // Spy on the parseTimeStringToDate function and provide a mock implementation
    jest.spyOn(dateFormatter, 'parseTimeStringToDate').mockReturnValue(new Date("1970-01-01T22:40:00.000Z"));

    Papa.parse.mockImplementationOnce((_: any, options: ParseOptions) => {
      options.complete?.({
        data: [
          { name: "Glasgow, Hillhead" },
          { name: "Glasgow, Kelvinbridge" },
          { name: "Glasgow, Buchanan Street" },
          { name: "Glasgow, St George's Cross" },
          { name: "Glasgow, Cowcaddens" },
          { name: "Glasgow, St Enoch" },
          { name: "Glasgow, Bridge Street" },
          { name: "Glasgow, West Street" },
          { name: "Glasgow, Shields Road" },
          { name: "Glasgow, Kinning Park" },
          { name: "Glasgow, Cessnock" },
          { name: "Glasgow, Ibrox" },
          { name: "Glasgow, Govan" },
          { name: "Glasgow, Partick" },
          { name: "Glasgow, Kelvinhall", end_time: "22:40" },
        ],
      });
    });

    const result = await handleCSVUpload(mockFile);

    expect(result).toEqual({
      stops: [
        { name: "Glasgow, Hillhead", end_time: null },
        { name: "Glasgow, Kelvinbridge", end_time: null },
        { name: "Glasgow, Buchanan Street", end_time: null },
        { name: "Glasgow, St George's Cross", end_time: null },
        { name: "Glasgow, Cowcaddens", end_time: null },
        { name: "Glasgow, St Enoch", end_time: null },
        { name: "Glasgow, Bridge Street", end_time: null },
        { name: "Glasgow, West Street", end_time: null },
        { name: "Glasgow, Shields Road", end_time: null },
        { name: "Glasgow, Kinning Park", end_time: null },
        { name: "Glasgow, Cessnock", end_time: null },
        { name: "Glasgow, Ibrox", end_time: null },
        { name: "Glasgow, Govan", end_time: null },
        { name: "Glasgow, Partick", end_time: null },
        { name: "Glasgow, Kelvinhall", end_time: new Date("1970-01-01T22:40:00.000Z") },
      ],
    });
  });

  it("should reject on error", async () => {
    const mockFile = new Blob([], { type: 'text/csv' }) as any;
    mockFile['name'] = 'test.csv';

    Papa.parse.mockImplementationOnce((_: any, options: ParseOptions) => {
      options.error?.(new Error("Test error"));
    });

    await expect(handleCSVUpload(mockFile)).rejects.toThrow("Test error");
  });
});
