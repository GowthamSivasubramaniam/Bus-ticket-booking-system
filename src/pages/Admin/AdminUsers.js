import { message, Table } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BusForm from "../../components/BusForm";
import PageTitle from "../../components/PageTitle";
import { axiosInstance } from "../../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";

function AdminUsers() {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/users/get-all-users", {});
      dispatch(HideLoading());
      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const updateUserPermissions = async (user, action) => {
    try {
      let payload = null;
      if (action === "make-admin") {
        payload = {
          ...user,
          isAdmin: true,
        };
      } else if (action === "remove-admin") {
        payload = {
          ...user,
          isAdmin: false,
        };
      } else if (action === "block") {
        payload = {
          ...user,
          isBlocked: true,
        };
      } else if (action === "unblock") {
        payload = {
          ...user,
          isBlocked: false,
        };
      }

      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "/api/users/update-user-permissions",
        payload
      );
      dispatch(HideLoading());
      if (response.data.success) {
        getUsers();
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "",
      render: (data) => {
        return data.isBlocked ? "Blocked" : "Active";
      },
    },
    {
      title: "Role",
      dataIndex: "",
      render: (data) => {
        console.log(data);
        if (data?.isAdmin) {
          return "Admin";
        } else {
          return "User";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (action, record) => (
        <div className="d-flex gap-3">
          {record?.isBlocked && (
          <div className="bus1" style={{textDecoration:'none',width:'120px',height:'50px',borderRadius:'10px',WebkitTextFillColor:'white',textAlign:'center'}}>

            <p style={{padding:'13px'}}
              className="underline"
              onClick={() => updateUserPermissions(record, "unblock")}
            >
              UnBlock
            </p>
          </div>
          )}

          {!record?.isBlocked && (
          <div className="bus2" style={{textDecoration:'none',width:'120px',height:'50px',borderRadius:'10px',WebkitTextFillColor:'white',textAlign:'center'}}>
            <p style={{padding:'13px'}}
              onClick={() => updateUserPermissions(record, "block")}
            >
              Block
            </p>
                    </div>
          )}

          {record?.isAdmin && (
            <div className="bus2" style={{textDecoration:'none',width:'180px',height:'50px',borderRadius:'10px',WebkitTextFillColor:'white',textAlign:'center'}}>
            <p 
            style={{padding:'13px'}}
            className="underline"
            onClick={() => updateUserPermissions(record, "remove-admin")}
            >
              Remove Admin
            </p>
              </div>
          )}
          {!record?.isAdmin && (
            <div className="bus1" style={{textDecoration:'none',width:'180px',height:'50px',borderRadius:'10px',WebkitTextFillColor:'white',textAlign:'center'}}>
            <p 
              style={{padding:'13px'}}
              className="underline"
              onClick={() => updateUserPermissions(record, "make-admin")}
            >
              Make Admin
            </p>
            </div>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between my-2">
        <PageTitle title="Users" />
      </div>

      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default AdminUsers;
