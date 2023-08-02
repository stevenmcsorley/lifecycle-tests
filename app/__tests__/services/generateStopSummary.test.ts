import { generateStopSummary } from "../../src/scripts/services/routeSummary";
import { LatLng } from '../../__mocks__/LatLng';

describe("generateStopSummary", () => {
  it("should generate a stop summary", () => {
    const mockStop = { name: "Test Stop Hillhead", end_time: null };
    const mockLeg = {
        start_address: "167 Great George St, Hillhead, Glasgow G12 8AQ, UK",
        duration: { text: "7 mins", value: 408 },
        arrival_time: { text: "", time_zone: "UTC", value: new Date() },
        departure_time: { text: "", time_zone: "UTC", value: new Date() },
        duration_in_traffic: { text: "", value: 0 },
        distance: { text: "2.1 km", value: 2148 },
        end_address: "17 Park Terrace, Glasgow G3 6BY, UK",
        steps: [],
        via_waypoints: [],
        end_location: new LatLng(0, 0) as unknown as google.maps.LatLng,
        start_location: new LatLng(0, 0) as unknown as google.maps.LatLng,
    };
    
    
    const routeSegment = "Start";
    const currentTime = new Date("2023-08-02T14:00:00Z");

    const result = generateStopSummary(
      mockStop,
      mockLeg,
      routeSegment,
      currentTime
    );

    expect(result).toEqual({
      routeSegment: "Start",
      name: "Test Stop Hillhead" ,
      startAddress: "167 Great George St, Hillhead, Glasgow G12 8AQ, UK",
      durationText: "7 mins",
      arrivalTime: new Date("2023-08-02T14:06:48Z"),
    });
  });
});
