import { Injectable } from '@angular/core';
import { HotelService } from '../infrastructure/hotel.service';
import { IHotel } from '../models/hotel';
import { Observable, catchError, map } from 'rxjs';
import { IRoom } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class HotelFacadeService {

  constructor(private hotelService: HotelService) { }

  public GetHotels(): Observable<IHotel[]> {
    return this.hotelService.getHotels();
  }

  public GetHotel(Id: string): Observable<IHotel> {
    return this.hotelService.getHotel(Id);
  }

  // public GetRoomsInHotel(HotelId: string): Observable<IRoom[]> {
  //   return this.hotelService.getRoomsInHotel(HotelId);
  // }

  public AddHotel(id: string, name: string, address: string, city: string, country: string, fileImages: string[], rooms: IRoom[]): Observable<string> {
    const request: IHotel = {
      id: id,
      name: name,
      address: address,
      city: city,
      country: country,
      fileImages: fileImages,
      rooms: rooms
    };

    // let response = this.hotelService.addHotel(request)
    // console.log(response)
    // return response
    
    return this.hotelService.addHotel(request).pipe(
      map((request: IHotel) => {
        console.log('Hotel created');
        return "Hotel successfully added to database";
      }),
      catchError((err) => {
        console.log(err);
        return "Hotel didn't create successfully";
      })
    );
  }

  public UpdateHotel(Hotel: IHotel): Observable<IHotel> {
    return this.hotelService.updateHotel(Hotel);
  }

  public DeleteHotel(Id: string): Observable<void> {
    return this.hotelService.deleteHotel(Id);
  }
}
