// import { Button, Select, Table, Col, Row, Space, notification } from "antd";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Option } from "rc-select";
// import Search from "antd/es/input/Search";
// import { useDispatch, useSelector } from "react-redux";
// import { setDataExhibition } from "../redux/exhibitionSlice";

// const Listoforders = () => {
//   const columns = [
//     {
//       title: "#",

//       dataIndex: "id",
//       key: "id",
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "address",
//       dataIndex: "address",
//       key: "address",
//     },

//     {
//       title: "totalPrice",
//       dataIndex: "totalPrice",
//       key: "totalPrice",
//     },
//   ];
//   const [query, setQuery] = useState({
//     page: 1,
//     limit: 5,
//     name: "",
//     email: "",
//   });

//   const dispatch = useDispatch();
//   const exhibitionData = useSelector(
//     (state) => state.exhibition.exhibitionList
//   );
//   console.log(exhibitionData);
//   // const fetchData =  fetch(
//   //   `${process.env.REACT_APP_SERVER_DOMIN}/uploadExhibition`,
//   //   {
//   //     method: "POST",
//   //     headers: {
//   //       "content-type": "application/json",
//   //     },
//   //     body: JSON.stringify(data),
//   //   }
//   // );
//   // const fetchData = async () => {
//   //   const response = await fetch(
//   //     `${process.env.REACT_APP_SERVER_DOMIN}/uploadExhibition`,
//   //     {
//   //       method: "POST",
//   //       headers: {
//   //         "content-type": "application/json",
//   //       },
//   //       body: JSON.stringify(data),
//   //     }
//   //   );
//   // };

//   const fetchData = useEffect(() => {
//     (async () => {
//       const res = await fetch(
//         `${process.env.REACT_APP_SERVER_DOMIN}/uploadExhibition`
//       );
//       const resData = await res.json();
//       console.log(1, resData);
//       dispatch(setDataExhibition(resData));
//     })();
//   }, []);
//   console.log(fetchData);

//   // const onTableChange = (values) => {
//   //   setQuery({ ...query, page: values.current });
//   // };

//   // const handleTypeChange = (value) => {
//   //   setType(value);
//   // };

//   // const onInputChange = (event) => {
//   //   const value = event.target.value;

//   //   setValue(value);
//   // };

//   // const onSearch = () => {
//   //   if (type === "name") {
//   //     setQuery({ ...query, name: value });
//   //   } else {
//   //     setQuery({ ...query, email: value });
//   //   }
//   // };

//   return (
//     <div>
//       <div className="profile">
//         <div
//           style={{
//             marginBottom: 20,
//           }}
//         >
//           <Row gutter={24}>
//             <Col className="gutter-row" span={8}>
//               <Space.Compact
//                 style={{
//                   position: "relative",
//                 }}
//                 block
//               >
//                 <Select
//                   // defaultValue={type}
//                   allowClear
//                   // onChange={handleTypeChange}
//                 >
//                   <Option value="Name">Name</Option>
//                   <Option value="Email">Email</Option>
//                 </Select>
//                 <Search
//                   // onChange={onInputChange}
//                   // value={value}
//                   allowClear
//                   // onSearch={onSearch}
//                   style={{
//                     width: "100%",
//                   }}
//                 />
//               </Space.Compact>
//             </Col>
//             <Col span={13}></Col>
//           </Row>
//         </div>

//         <Table
//           rowKey="id"
//           // dataSource={owners}
//           columns={columns}
//           pagination={
//             {
//               // current: pagination.page,
//               // pageSize: pagination.limit,
//               // total: pagination.total,
//             }
//           }
//           // onChange={onTableChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Listoforders;
