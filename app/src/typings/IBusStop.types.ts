export interface BusStop {
    name: string;
    end_time: Date | null;
    end_address?: string;
    latitude?: number; 
    longitude?: number; 
  
  }

  export interface BusRouteData {
    stops: BusStop[];
    route?: google.maps.DirectionsRoute;
  }
  

  export interface ShuttleStop {
    name: string;
    lat: number; // Latitude
    lng: number; // Longitude
    end_time?: Date;
  }