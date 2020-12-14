const { clampValue } = require("../common/utils");

const createProgressNode = ({
  x,
  y,
  width,
  color,
  progress,
  progressBarBackgroundColor,
}) => {
  const progressPercentage = clampValue(progress, 2, 100);

  return `
    <svg width="${width}" x="${x}" y="${y}">
      <rect rx="5" ry="5" x="0" y="0" width="${width}" height="6" fill="${progressBarBackgroundColor}"></rect>
      <rect
          height="6"
          fill="${color}"
          rx="3" ry="3" x="0" y="0" 
          data-testid="lang-progress"
          width="${progressPercentage}%"
      >
      </rect>
    </svg>
  `;
};

exports.createProgressNode = createProgressNode;
