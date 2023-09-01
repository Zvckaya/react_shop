import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();

  let item = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (id * 1 + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.contect}</p>
          <p>{item.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
