export const kDuck = (ctx: CanvasRenderingContext2D) => {
  comb(ctx, "#383838");
  rightArm(ctx, "#F2C86B");
  head(ctx, "#F2C86B");
  eyes(ctx, "#eee");
  tail(ctx, "#F2C86B");
  rightFoot(ctx, "#C4C2BB");
  bodyAndLeftArm(ctx, "#F2C86B");
  beak(ctx, "#C4C2BB");
  leftFoot(ctx, "#C4C2BB");
};

// トサカ
const comb = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(376, 90); // 始点
  ctx.quadraticCurveTo(365, 103, 395, 145);
  ctx.quadraticCurveTo(408, 146, 417, 149);
  ctx.quadraticCurveTo(478, 132, 476, 130);
  ctx.quadraticCurveTo(482, 117, 470, 112);
  ctx.quadraticCurveTo(424, 128, 415, 142);
  ctx.quadraticCurveTo(434, 110, 444, 82);
  ctx.quadraticCurveTo(443, 76, 428, 74);
  ctx.quadraticCurveTo(408, 105, 404, 138);
  ctx.quadraticCurveTo(393, 94, 387, 85);
  ctx.quadraticCurveTo(376, 90, 376, 90); // 終点
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

// 目
const eyes = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(294, 199); // 始点
  ctx.quadraticCurveTo(271, 196, 269, 215);
  ctx.quadraticCurveTo(266, 235, 295, 243);
  ctx.quadraticCurveTo(326, 245, 324, 220);
  ctx.quadraticCurveTo(322, 203, 294, 199); // 終点
  ctx.moveTo(297, 219); //
  ctx.arc(297, 219, 1, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(389, 216); // 始点
  ctx.quadraticCurveTo(368, 238, 398, 252);
  ctx.quadraticCurveTo(426, 262, 448, 243);
  ctx.quadraticCurveTo(459, 227, 434, 212);
  ctx.quadraticCurveTo(410, 200, 389, 216); // 終点
  ctx.moveTo(409, 230); //
  ctx.arc(409, 230, 1, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

// くちばし
const beak = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(327, 241); // 始点
  ctx.quadraticCurveTo(305, 258, 284, 256);
  ctx.quadraticCurveTo(276, 255, 272, 268); //
  ctx.quadraticCurveTo(274, 276, 237, 293); //
  ctx.quadraticCurveTo(179, 324, 214, 364); //
  ctx.quadraticCurveTo(278, 408, 366, 381); //
  ctx.quadraticCurveTo(403, 358, 397, 339); //
  ctx.quadraticCurveTo(392, 309, 407, 290); //
  ctx.quadraticCurveTo(414, 285, 415, 272); //
  ctx.quadraticCurveTo(416, 266, 405, 265); //
  ctx.quadraticCurveTo(395, 259, 374, 262); //
  ctx.quadraticCurveTo(359, 259, 343, 246); //
  ctx.quadraticCurveTo(339, 239, 327, 241); // 終点
  ctx.moveTo(307, 264); //
  ctx.quadraticCurveTo(307, 275, 307, 275); //
  ctx.moveTo(345, 269); //
  ctx.quadraticCurveTo(330, 277, 330, 277); //
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

const head = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(399, 147); // 始点
  ctx.quadraticCurveTo(298, 142, 262, 212);
  ctx.quadraticCurveTo(235, 275, 323, 316);
  ctx.quadraticCurveTo(399, 345, 472, 306);
  ctx.quadraticCurveTo(533, 269, 486, 189);
  ctx.quadraticCurveTo(452, 153, 399, 147); // 終点
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

const bodyAndLeftArm = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(259, 389); // 始点
  ctx.quadraticCurveTo(218, 508, 311, 556);
  ctx.quadraticCurveTo(339, 572, 389, 566);
  ctx.quadraticCurveTo(426, 552, 469, 551);
  ctx.quadraticCurveTo(558, 490, 558, 490); // 雑に書いている
  ctx.quadraticCurveTo(572, 453, 552, 386);
  ctx.quadraticCurveTo(590, 346, 567, 290);
  ctx.quadraticCurveTo(541, 239, 519, 214);
  ctx.quadraticCurveTo(515, 206, 517, 190);
  ctx.quadraticCurveTo(497, 198, 497, 198);
  ctx.quadraticCurveTo(482, 192, 482, 192);
  ctx.quadraticCurveTo(476, 208, 476, 208);
  ctx.quadraticCurveTo(460, 212, 460, 212);
  ctx.quadraticCurveTo(476, 227, 477, 264);
  ctx.quadraticCurveTo(478, 278, 478, 299);
  ctx.quadraticCurveTo(429, 328, 396, 327);
  ctx.quadraticCurveTo(259, 389, 259, 389); // 終点
  ctx.fill();
  ctx.moveTo(478, 300); //
  ctx.quadraticCurveTo(460, 379, 501, 389);
  ctx.moveTo(532, 393); //
  ctx.quadraticCurveTo(546, 394, 553, 385);

  ctx.stroke();
  ctx.closePath();
};

const rightArm = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(276, 161); // 始点
  ctx.quadraticCurveTo(274, 175, 265, 179);
  ctx.quadraticCurveTo(192, 236, 224, 301); //
  ctx.quadraticCurveTo(229, 294, 241, 291); //
  ctx.quadraticCurveTo(253, 286, 269, 275); //
  ctx.quadraticCurveTo(230, 220, 309, 164); //
  ctx.quadraticCurveTo(306, 156, 306, 156); //
  ctx.quadraticCurveTo(286, 168, 276, 161); // 終点
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

const leftFoot = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(498, 472); // 始点
  ctx.quadraticCurveTo(463, 520, 469, 551);
  ctx.quadraticCurveTo(477, 575, 517, 566); //
  ctx.quadraticCurveTo(555, 544, 585, 491); //
  ctx.quadraticCurveTo(571, 487, 559, 494); //
  ctx.quadraticCurveTo(551, 481, 550, 467); //
  ctx.quadraticCurveTo(514, 489, 514, 489); //
  ctx.quadraticCurveTo(498, 472, 498, 472); // 終点
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

const rightFoot = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(311, 556); // 始点
  ctx.quadraticCurveTo(284, 567, 277, 587);
  ctx.quadraticCurveTo(313, 579, 332, 602);
  ctx.quadraticCurveTo(353, 584, 398, 602);
  ctx.quadraticCurveTo(397, 580, 386, 566);
  ctx.quadraticCurveTo(311, 556, 311, 556); // 終点
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

const tail = (ctx: CanvasRenderingContext2D, fillColor: string) => {
  ctx.beginPath();
  ctx.strokeStyle = "#383838";
  ctx.fillStyle = fillColor;
  ctx.moveTo(183, 447); // 始点
  ctx.quadraticCurveTo(210, 510, 291, 544);
  ctx.quadraticCurveTo(246, 457, 246, 457); //
  ctx.quadraticCurveTo(180, 450, 183, 447); // 終点
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
