import { hasOverlap } from './_overlap';

const WIDTH = 200;
const HEIGHT = 200;

const rect = (overrides = {}) =>
  Object.assign(
    {
      backwards: false,
      height: 20,
      index: 0,
      offset: 20,
      padding: 0,
      width: 40,
    },
    overrides,
  );

const getLegacyBitmap = (rects, width, height) => {
  const bitmap = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => false),
  );

  rects.forEach((item) => {
    const bitmapIndex = item.index + 1;
    const rectWidth = Math.round(item.width);
    const rectHeight = Math.round(item.height);
    const x = Math.round(item.offset - (item.backwards ? item.width : 0));
    const y = Math.round(height - item.height - (item.padding || 0));

    for (let row = 0; row < rectHeight; row++) {
      for (let column = 0; column < rectWidth; column++) {
        if (
          bitmap[y + row - 1] &&
          bitmap[y + row - 1][x + column - 1] !== undefined
        ) {
          const value = bitmap[y + row - 1][x + column - 1];
          bitmap[y + row - 1][x + column - 1] =
            value === false ? bitmapIndex : true;
        }
      }
    }

    for (let row = 0; row < Math.floor(item.padding || 0); row++) {
      const connectorX = item.backwards ? x + rectWidth - 2 : x - 1;
      if (
        bitmap[y + rectHeight + row - 1] &&
        bitmap[y + rectHeight + row - 1][connectorX] !== undefined
      ) {
        const value = bitmap[y + rectHeight + row - 1][connectorX];
        bitmap[y + rectHeight + row - 1][connectorX] =
          value === false ? bitmapIndex : true;
      }
    }
  });

  return bitmap;
};

const hasLegacyOverlap = (
  candidate,
  rects,
  width,
  height,
  includeConnector,
) => {
  const bitmap = getLegacyBitmap(rects, width, height);
  const rectWidth = Math.round(candidate.width);
  const rectHeight = Math.round(candidate.height);
  const padding = Math.floor(candidate.padding || 0);
  const x = Math.round(
    candidate.offset - (candidate.backwards ? candidate.width : 0),
  );
  const y = Math.round(height - candidate.height - (candidate.padding || 0));
  const occupied = (checkX, checkY) => {
    const value = bitmap[checkY] && bitmap[checkY][checkX];
    return (
      value !== undefined && value !== false && value !== candidate.index + 1
    );
  };

  for (let row = 0; row < rectHeight; row++) {
    for (let column = 0; column < rectWidth; column++) {
      if (occupied(x + column, y + row - 1)) return true;
    }
  }

  if (includeConnector) {
    const connectorX = candidate.backwards ? x + rectWidth - 1 : x;
    for (let row = 0; row < padding; row++) {
      if (occupied(connectorX, y + rectHeight + row - 1)) return true;
    }
  }

  return false;
};

describe('hasOverlap', () => {
  it('detects body overlaps and permits edge contact', () => {
    const obstacle = rect();

    expect(
      hasOverlap(rect({ index: 1, offset: 50 }), [obstacle], WIDTH, HEIGHT),
    ).toBe(true);
    expect(
      hasOverlap(rect({ index: 1, offset: 59 }), [obstacle], WIDTH, HEIGHT),
    ).toBe(false);
  });

  it('ignores the candidate occupancy', () => {
    const candidate = rect();

    expect(hasOverlap(candidate, [candidate], WIDTH, HEIGHT)).toBe(false);
  });

  it('detects label overlap with a connector', () => {
    const obstacle = rect({ padding: 60 });
    const candidate = rect({ height: 30, index: 1, offset: 19, padding: 20 });

    expect(hasOverlap(candidate, [obstacle], WIDTH, HEIGHT)).toBe(true);
  });

  it('checks candidate connectors when requested', () => {
    const obstacle = rect({ index: 0, offset: 20 });
    const candidate = rect({ index: 1, offset: 19, padding: 40, width: 20 });

    expect(hasOverlap(candidate, [obstacle], WIDTH, HEIGHT, false)).toBe(false);
    expect(hasOverlap(candidate, [obstacle], WIDTH, HEIGHT, true)).toBe(true);
  });

  it('supports backwards labels and clips chart boundaries', () => {
    const obstacle = rect({ backwards: true, offset: 40 });
    const candidate = rect({ index: 1, offset: 10, width: 20 });

    expect(hasOverlap(candidate, [obstacle], WIDTH, HEIGHT)).toBe(true);
    expect(
      hasOverlap(
        rect({ height: 30, index: 1, offset: -50, padding: 200 }),
        [obstacle],
        WIDTH,
        HEIGHT,
      ),
    ).toBe(false);
  });

  it('matches the legacy bitmap across randomized layouts', () => {
    let seed = 0x69;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 2 ** 32;
    };
    const integer = (minimum, maximum) =>
      Math.floor(random() * (maximum - minimum + 1)) + minimum;

    for (let trial = 0; trial < 100; trial++) {
      const rects = Array.from({ length: integer(2, 15) }, (_, index) => {
        const width = integer(10, 60);
        const backwards = random() < 0.5;
        const left = integer(-20, WIDTH - width + 20);

        return rect({
          backwards,
          height: integer(10, 50),
          index,
          offset: backwards ? left + width : left,
          padding: integer(0, 100),
          width,
        });
      });

      rects.forEach((candidate) => {
        [false, true].forEach((includeConnector) => {
          expect(
            hasOverlap(candidate, rects, WIDTH, HEIGHT, includeConnector),
          ).toBe(
            hasLegacyOverlap(candidate, rects, WIDTH, HEIGHT, includeConnector),
          );
        });
      });
    }
  });
});
