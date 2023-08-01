import Papa from 'papaparse';
import { parseTimeStringToDate } from './services/dateFormatter';
import { BusStop, BusRouteData } from '../typings/IBusStop.types';

export const handleCSVUpload = (file: File): Promise<BusRouteData> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result: { data: any[] }) => {
        const stops: BusStop[] = result.data.map((item) => {
          const name = item.name;
          let end_time = null;

          // Check if the end_time value exists in the CSV and is a valid time string
          if (item.end_time && typeof item.end_time === 'string') {
            end_time = parseTimeStringToDate(item.end_time);
          }

          // Create and return the BusStop object
          return { name, end_time };
        });

        const busRouteData: BusRouteData = {
          stops: stops,
        };
        console.log(busRouteData);
        resolve(busRouteData);
      },
      error: (error: any) => {
        reject(error);
      },
    });
  });
};
