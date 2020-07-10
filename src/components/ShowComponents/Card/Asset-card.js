import React from "react";

function AssetCard(props) {
  return (
    <div {...props}>
      <div class="card" style={{ width: "100%" }}>
        <img src={props.image} class="card-img-top" alt={props.title} />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.children}</p>
          <div className="text-center">
            <button class="btn btn-dark">ข้อมูลเพิ่มเติม</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetCard;
