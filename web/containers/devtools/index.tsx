import React from "react";
// import { Box, button, TextField } from "@material-ui/core";
// import { DevTools } from "src/types";

type Props = {
  cordinateX: number;
  cordinateY: number;
  isCopy: boolean;
  setCopy: (isCopy: boolean) => void;
};

const DevTool: React.FC<Props> = ({
  cordinateX,
  cordinateY,
  isCopy,
  setCopy,
}) => {
  const [inputX, setInputX] = React.useState(0);
  const [inputY, setInputY] = React.useState(0);
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopy(true);
  };

  const handlePonter = () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "#ff4500";
    ctx.fillStyle = "#ff4500";
    ctx.fillRect(inputX, inputY, 5, 5);
  };

  return (
    <div>
      <div>
        <input
          placeholder="X座標の値"
          onChange={(e) => setInputX(parseInt(e.target.value))}
        />
        <input
          placeholder="Y座標の値"
          onChange={(e) => setInputY(parseInt(e.target.value))}
        />
        <button onClick={handlePonter}>検索</button>
      </div>
      <div>
        <div>{`${cordinateX}, ${cordinateY}`}</div>
        <button onClick={() => handleCopy(`${cordinateX}, ${cordinateY}`)}>
          コピー
        </button>
        {isCopy ? <div>コピーしたよ！</div> : <div />}
      </div>
    </div>
  );
};

export default DevTool;
