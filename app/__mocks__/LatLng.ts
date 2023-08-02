export class LatLng {
    constructor(private _lat: number, private _lng: number) {}
  
    equals(other: LatLng) {
      return this.lat() === other.lat() && this.lng() === other.lng();
    }
  
    lat() {
      return this._lat;
    }
  
    lng() {
      return this._lng;
    }
  
    toJSON() {
      return { lat: this._lat, lng: this._lng };
    }
  
    toUrlValue() {
        return `${this._lat},${this._lng}`; 
    }
  }
  