using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Rating.Domain.Aggregates;
using Rating.Domain.Entities;
using Rating.Domain.ValueObjects;

namespace Rating.Application.Features.Ratings.Queries.ViewModels
{
    public class HotelReviewViewModel
    {
        //entitybase
        public int Id { get; set; }
        //hotel
        public int HotelId { get; set; }
        //guest
        public int GuestId { get; set; }
        //public Guest HotelGuest { get; set; }
        //public HotelRatingCollection RatingCollection {  get; set;  }  
        
        //rating
        public int Rating { get; set;}
        public string Comment { get; set; }
        public DateTime? RatingDate { get; set; }
    }
}