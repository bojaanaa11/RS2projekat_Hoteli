export interface IRoom {
    id: string;
    hotelid: string;
    roomNumber: string;
    status: string;
    price: number;
    fileImages: Array<string>;
    description: string;
}