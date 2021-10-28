import React, { useEffect } from "react";
import { kDuck } from "../../hooks/useCanvasPokemon";
import DevTool from "../devtools";

export const Canvas: React.FC = () => {
  const [cordinateX, setCordinateX] = React.useState(0);
  const [cordinateY, setCordinateY] = React.useState(0);
  const [isCopy, setCopy] = React.useState(false);

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "#383838";
    ctx.lineWidth = 1.0;
    kDuck(ctx);
  }, []);

  const handleCoordinate = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    // eslint-disable-next-line
    // @ts-ignore
    const rect = e.target.getBoundingClientRect();
    const x = parseInt(`${e.clientX - rect.left}`);
    const y = parseInt(`${e.clientY - rect.top}`);
    setCordinateX(x);
    setCordinateY(y);
    setCopy(false);
  };

  return (
    <div style={{ padding: "8px", margin: "8px" }}>
      <canvas
        width={800}
        height={680}
        id={"canvas"}
        style={{
          border: "solid 1px #383838",
          //   background: "#e9e9e9",
          //   backgroundImage: `url(${"/kduck.png"})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "100px",
        }}
        onClick={(e) => handleCoordinate(e)}
      />
      {/* <DevTool {...{ cordinateX, cordinateY, isCopy, setCopy }} /> */}
    </div>
  );
};
