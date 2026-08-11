const intersect = (a, b) =>
  a !== undefined &&
  b !== undefined &&
  a.left <= b.right &&
  a.right >= b.left &&
  a.top <= b.bottom &&
  a.bottom >= b.top;

const clip = (rect, width, height) => {
  const clipped = {
    left: Math.max(0, rect.left),
    right: Math.min(width - 1, rect.right),
    top: Math.max(0, rect.top),
    bottom: Math.min(height - 1, rect.bottom),
  };

  return clipped.left <= clipped.right && clipped.top <= clipped.bottom
    ? clipped
    : undefined;
};

const getPosition = (rect, bitmapHeight) => {
  const width = Math.round(rect.width);
  const height = Math.round(rect.height);
  const padding = Math.floor(rect.padding || 0);
  const x = Math.round(rect.offset - (rect.backwards ? rect.width : 0));
  const y = Math.round(bitmapHeight - rect.height - (rect.padding || 0));

  return { height, padding, width, x, y };
};

const getObstacle = (rect, bitmapWidth, bitmapHeight) => {
  const { height, padding, width, x, y } = getPosition(rect, bitmapHeight);
  const connectorX = rect.backwards ? x + width - 2 : x - 1;

  return {
    body: clip(
      {
        bottom: y + height - 2,
        left: x - 1,
        right: x + width - 2,
        top: y - 1,
      },
      bitmapWidth,
      bitmapHeight,
    ),
    connector:
      padding > 0
        ? clip(
            {
              bottom: y + height + padding - 2,
              left: connectorX,
              right: connectorX,
              top: y + height - 1,
            },
            bitmapWidth,
            bitmapHeight,
          )
        : undefined,
  };
};

const getCandidate = (rect, bitmapWidth, bitmapHeight, includeConnector) => {
  const { height, padding, width, x, y } = getPosition(rect, bitmapHeight);
  const connectorX = rect.backwards ? x + width - 1 : x;

  return {
    body: clip(
      {
        bottom: y + height - 2,
        left: x,
        right: x + width - 1,
        top: y - 1,
      },
      bitmapWidth,
      bitmapHeight,
    ),
    connector:
      includeConnector && padding > 0
        ? clip(
            {
              bottom: y + height + padding - 2,
              left: connectorX,
              right: connectorX,
              top: y + height - 1,
            },
            bitmapWidth,
            bitmapHeight,
          )
        : undefined,
  };
};

export const hasOverlap = (
  candidateRect,
  rects,
  bitmapWidth,
  bitmapHeight,
  includeConnector = false,
) => {
  const candidate = getCandidate(
    candidateRect,
    bitmapWidth,
    bitmapHeight,
    includeConnector,
  );

  return rects.some((rect) => {
    if (rect.index === candidateRect.index) return false;

    const obstacle = getObstacle(rect, bitmapWidth, bitmapHeight);

    return (
      intersect(candidate.body, obstacle.body) ||
      intersect(candidate.body, obstacle.connector) ||
      intersect(candidate.connector, obstacle.body) ||
      intersect(candidate.connector, obstacle.connector)
    );
  });
};
