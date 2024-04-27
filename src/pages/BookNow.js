import { Col, message, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SeatSelection from "../components/SeatSelection";
import { axiosInstance } from "../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import StripeCheckout from "react-stripe-checkout";

function BookNow() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bus, setBus] = useState(null);
  const getBus = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/buses/get-bus-by-id", {
        _id: params.id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        setBus(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const bookNow = async (transactionId) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/bookings/book-seat", {
        bus: bus._id,
        seats: selectedSeats,
        transactionId,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        navigate("/bookings");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onToken = async (token) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/bookings/make-payment", {
        token,
        amount: selectedSeats.length * bus.fare * 100,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        bookNow(response.data.data.transactionId);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  useEffect(() => {
    getBus();
  }, []);
  return (
    <div>
      {bus && (
        <Row className="mt-3" gutter={[30, 30]}>
          <Col lg={12} xs={24} sm={24}>
            <h1 style={{color:'rgb(41, 182, 119)',marginLeft:'20px'}}>{bus.name}</h1>
            <h1 style={{fontSize:'1.5em',marginLeft:'20px',color:'rgb(41, 182, 119)'}}>
              {bus.from} - {bus.to}
            </h1>
            <hr />

            <div className="flex flex-col gap-2">
              <h1  style={{padding:'20px',fontSize:'1.2em'}}>
                Jourey Date <span style={{marginLeft:'50px'}}>:</span><span style={{marginLeft:'25px'}}>{bus.journeyDate}</span> 
              </h1>
              <h1  style={{padding:'20px',fontSize:'1.2em'}}>
                Fare <span style={{marginLeft:'118px'}}>:</span><span style={{marginLeft:'25px'}}>{bus.journeyDate}Rs. {bus.fare} /-</span> 
              </h1>
              <h1  style={{padding:'20px',fontSize:'1.2em'}}>
                Departure Time <span style={{marginLeft:'12px'}}>:</span><span style={{marginLeft:'25px'}}>{bus.journeyDate}    {bus.departure}</span> 
              </h1>
              <h1  style={{padding:'20px',fontSize:'1.2em'}}>
                Arrival Time <span style={{marginLeft:'43px'}}>:</span><span style={{marginLeft:'25px'}}>{bus.journeyDate} {bus.arrival}</span> 
              </h1>
              <h1  style={{padding:'20px',fontSize:'1.2em'}}>
                Capacity <span style={{marginLeft:'77px'}}>:</span><span style={{marginLeft:'25px'}}>{bus.journeyDate} {bus.capacity}</span> 
              </h1>
              <h1  style={{padding:'20px',fontSize:'1.2em'}}>
                Seats Left <span style={{marginLeft:'63px'}}>:</span><span style={{marginLeft:'25px'}}>{bus.journeyDate} {bus.capacity - bus.seatsBooked.length}</span> 
              </h1>
            </div>
            <hr />

            <div className="flex flex-col gap-2">
              <h1 style={{fontSize:'1.5em',marginLeft:'20px',color:'rgb(41, 182, 119)'}}>
                Selected Seats : {selectedSeats.join(", ")}
              </h1>
              <h1 style={{fontSize:'1.5em',marginLeft:'20px',color:'rgb(41, 182, 119)'}}>
                Fare : {bus.fare * selectedSeats.length} /-
              </h1>
              <hr />

              <StripeCheckout
                billingAddress
                token={onToken}
                amount={bus.fare * selectedSeats.length * 100}
                currency="INR"
                stripeKey="pk_test_51LqbBRSDCkfNkiTKQew2NdeBzNc9B0w2hT2SvdZIXjYxwz0r19tiC0osRjKIp255aGVH42D7cZQ18N9QiRJ76gYW00VlS7wNZC"
              >
                <div className="bus1" style={{background:selectedSeats.length === 0?"grey":'',textDecoration:'none',width:'120px',height:'50px',borderRadius:'10px',WebkitTextFillColor:'white',textAlign:'center', }}>
                <button
                  style={{background:'transparent',width:'120px',height:'55px',border:'none',borderRadius:'10px',cursor:selectedSeats.length === 0?"not-allowed":'pointer'}}
                  className={`bus1`}
                  disabled={selectedSeats.length === 0}
                >
                  Book Now
                </button> </div>
              </StripeCheckout>
            </div>
          </Col>
          <Col lg={12} xs={24} sm={24}>
            <SeatSelection
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              bus={bus}
            />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default BookNow;
