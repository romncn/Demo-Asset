import React from "react";
import AssetCard from "./Card/Asset-card";
import Asset01 from "../../assest/Asset-01.jpg";

const data = [
  {
    image: Asset01,
    title: "โครงการ 1",
    content:
      "เตรียมพบคอนโดใหม่ จากแสนสิริ ดีคอนโด บลิซ ให้ชีวิตรีแลกซ์ในแบบรีสอร์ท กับทำเลติด ม.เกษตร ศรีราชา ใกล้นิคมฯ จองวันนี้ ฟรีโอน และส่วนกลาง 2ปี*",
  },
  {
    image: Asset01,
    title: "โครงการ 2",
    content:
      "เตรียมพบคอนโดใหม่ จากแสนสิริ ดีคอนโด บลิซ ให้ชีวิตรีแลกซ์ในแบบรีสอร์ท กับทำเลติด ม.เกษตร ศรีราชา ใกล้นิคมฯ จองวันนี้ ฟรีโอน และส่วนกลาง 2ปี*",
  },
  {
    image: Asset01,
    title: "โครงการ 3",
    content:
      "เตรียมพบคอนโดใหม่ จากแสนสิริ ดีคอนโด บลิซ ให้ชีวิตรีแลกซ์ในแบบรีสอร์ท กับทำเลติด ม.เกษตร ศรีราชา ใกล้นิคมฯ จองวันนี้ ฟรีโอน และส่วนกลาง 2ปี*",
  },
];

function ShowAsset(props) {
  return (
    <div {...props}>
      <h4>แนะนำโครงการ</h4>
      <div className="col-12 pt-sm-3 px-0">
        <div className="row">
          {data.map((condo, key) => {
            return (
              <AssetCard className="col-12 col-sm-6 col-lg-4 pt-3 pt-lg-0" image={condo.image} title={condo.title}>
                <p>{condo.content}</p>
              </AssetCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowAsset;
