import { Col, message, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Bus from "../components/Bus";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import "../resourses/home.css";
function Home() {
  const [filters = {}, setFilters] = useState({});
  const dispatch = useDispatch();
  const [buses, setBuses] = useState([]);
  const getBuses = async () => {
    const tempFilters = {};
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        tempFilters[key] = filters[key];
      }
    });
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "/api/buses/get-all-buses",
        tempFilters,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        setBuses(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/brython-dev/brython@3.10.1/www/src/brython.js";
    document.body.appendChild(script);

    script.onload = () => {
      window.Brython({ debug: 1 });

      const pythonScript = document.createElement("script");
      pythonScript.type = "text/python";
      pythonScript.textContent = `
        from browser import document

        def generate_page_title():
            return "BusBrio"

        title = generate_page_title()
      `;
      document.body.appendChild(pythonScript);

      window.onload = () => {
      document.body.appendChild(pythonScript);
      console.log(window.title);
    };
    };
  }, []);

  useEffect(() => {
    getBuses();
  }, []);
  return (
    <div className ="bg" style={{padding:'0px',color:'green'}}>
      <div style={{padding:'20px',height:'100%'}}>
        <Row gutter={10} align="center">
          <Col lg={6} sm={24}>
            <input
            style={{borderRadius:'10px',outline:'none',border:'none',height:'50px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
              type="text"
              placeholder="From eg : Coimbatore"
              value={filters.from}
              onChange={(e) => setFilters({ ...filters, from: e.target.value })}
            />
          </Col>
          <Col lg={6} sm={24}>
            <input
            style={{borderRadius:'10px',outline:'none',border:'none',height:'50px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
              type="text"
              placeholder="To eg : Chennai"
              value={filters.to}
              onChange={(e) => setFilters({ ...filters, to: e.target.value })}
            />
          </Col>
          <Col lg={6} sm={24}>
            <input
            style={{borderRadius:'10px',outline:'none',border:'none',height:'50px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'5px'}}
              type="date"
              placeholder="Date"
              value={filters.journeyDate}
              onChange={(e) =>
                setFilters({ ...filters, journeyDate: e.target.value })
              }
            />
          </Col>
          <Col lg={6} sm={24}>
            <div className="d-flex gap-2">
              <div className="Button2" ><button  style={{background:'transparent',border:'none',color:'white'}}onClick={() => getBuses()}>
                <h1 style={{color:'white',fontSize:'1.2em',marginTop:'13px',marginLeft:'20px'}}>Filter</h1>
              </button></div>
              <div className="Button2" >
              <button
                style={{background:'transparent',border:'none',color:'white'}}
                onClick={() =>
                  setFilters({
                    from: "",
                    to: "",
                    journeyDate: "",
                  })
                }
              >
               <h1 style={{color:'white',fontSize:'1.2em',marginTop:'13px',marginLeft:'20px'}}> Clear </h1>
              </button></div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{
        borderRadius:'20px'
      }}>
        <Row gutter={[15, 60]}>
          {buses
            .filter((bus) => bus.status === "Yet To Start")
            .map((bus) => (
              <Col lg={12} xs={29} sm={24}>
                <Bus bus={bus} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
