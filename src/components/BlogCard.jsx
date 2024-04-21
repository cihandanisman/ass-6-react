import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TiDelete } from "react-icons/ti";
import MyModal from "./Modal";

function BlogCard() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);

  const handleDelete = (item) => {
    const deletedData = data.filter((product)=> product.id!==item.id)
    setData(deletedData)

  }

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setNewData(item);
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Warning");
      }
      setData(await response.json());
    } catch (error) {
      console.Error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center p-5">
      {data.map((item) => (
        <Card style={{ width: "15rem", marginTop: "10px" }}>
          <Card.Body className="text-center p-3">
            <div className="d-flex justify-content-between align-items-center">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <TiDelete className="delete" onClick={()=> handleDelete(item)} size={30} />
              </Card.Text>
            </div>
            <Card.Text>{item.body}</Card.Text>
            <Button variant="primary" onClick={() => handleShow(item)}>
              See Details
            </Button>
          </Card.Body>
        </Card>
      ))}
      <MyModal show={show} handleClose={handleClose} newData={newData} handleShow={handleShow} />
    </div>
  );
}

export default BlogCard;
