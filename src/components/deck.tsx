"use client";
import { animated, to as interpolate, useSprings } from "@react-spring/web";
import { last } from "lodash";
import { type ReactNode, useRef, useState } from "react";
import { useDrag } from "react-use-gesture";
import { cn } from "~/lib/utils";

// const cards = [
//   "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
// ];

//  These two are just helpers, they curate spring data, values that are later being interpolated into css
// const to = (index: number) => ({
//   x: 0,
//   y: index * -4,
//   scale: 1,
//   rot: -10 + Math.random() * 20,
//   delay: index * 100,
// });
// const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: 0 });
const getStartPosition = ({ index }: { index: number }) => {
  const modulo = index % 4;
  if (modulo === 0) {
    return { x: -1000, y: -1000 };
  }
  if (modulo === 1) {
    return { x: 1000, y: -1000 };
  }
  if (modulo === 2) {
    return { x: 1000, y: 1000 };
  }
  return { x: -1000, y: 1000 };
};
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 30,
  delay: i * 100,
});

// const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const from = (_i: number) => ({
  //   x: Math.random() > 0.5 ? -1000 : 1000,
  x: getStartPosition({ index: _i }).x,
  y: getStartPosition({ index: _i }).y,
  scale: 0.9,
  rot: -10 * Math.random(),
});

// type DivElem = (props: ComponentProps<"div">) => JSX.Element | null;
type MinimalItemInfo = { id: string };
type DragDir = "left" | "right";

type Props<T extends MinimalItemInfo> = {
  items: T[];
  renderItem: (props: { item: T; isOnTop: boolean }) => ReactNode;
  onDragged?: (props: { dir: DragDir; item: T }) => void;
};
export function Deck<T extends MinimalItemInfo>({
  items,
  onDragged,
  renderItem,
}: Props<T>) {
  console.log("rendering deck component");
  const [gone] = useState(
    () => new Set<number>(items.map((_el, index) => index)),
  ); // The set flags all the cards that are flicked out
  const elems = items;
  const topItem = useRef<T | null>();

  const [props, api] = useSprings(elems.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const indexAsNumber = index as number;
      const item = items[indexAsNumber];
      const trigger = velocity > 0.4; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : xDir > 0 ? 1 : undefined; // Direction should either point left or right
      const dragDir = dir === -1 ? "left" : "right";
      //   const lastItemNotDraggedYet = last(items.filter((_, i) => !gone.has(i)));
      //   const isOnTop =
      //     lastItemNotDraggedYet && item && lastItemNotDraggedYet?.id === item?.id;
      //   if (isOnTop) {
      //     console.log("is on top: ", { item });
      //   }
      if (item && dragDir && onDragged) {
        onDragged({ dir: dragDir, item });
      }
      if (!down && trigger) {
        gone.add(indexAsNumber);
      } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      //   setTimeout(() => {
      //     gone.clear();
      //     void api.start((i) => to(i));
      //   }, 600);
      void api.start((i) => {
          if (index !== i) {
            return;
          }
          if (!isTopCard) {
            return;
          }
        const isGone = gone.has(indexAsNumber);
        const x = isGone
          ? (200 + window.innerWidth) * (dir ?? 1)
          : down
            ? mx * 0.5
            : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? (dir ?? 1) * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 50,
            tension: down ? 1800 : isGone ? 200 : 500,
          },
        };
      });
      if (!down && gone.size === elems.length)
        setTimeout(() => {
          gone.clear();
          void api.start((i) => to(i));
        }, 600);
    },
  );
  return (
    // <div className="relative m-auto flex h-full min-h-[500px] w-full flex-1 cursor-[url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png')_39_39,_auto] items-center justify-center overflow-hidden bg-blue-100">
    <div className="relative m-auto flex h-full min-h-[600px] w-full flex-1 cursor-[url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png')_39_39,_auto] items-center justify-center overflow-hidden bg-blue-100">
      {props.map(
        ({ x, y, rot, scale }, i) =>
          items[i] && (
            <animated.div
              key={i}
              className={
                "absolute flex h-96 min-h-[300px] w-[300px] touch-none items-center justify-center will-change-transform"
              }
              style={{
                transform: interpolate(
                  [x, y],
                  (x, y) => `translate3d(${x}px,${y}px,0)`,
                ),
              }}
            >
              <animated.div
                {...bind(i)}
                className={cn(
                  "h-96 max-h-[285px] w-[45vh] max-w-[200px] bg-white bg-[auto_85%] bg-[center_center] bg-no-repeat",
                  "shadow-[0_12.5px_100px_-10px_rgba(50_50_73_0.4),_0_10px_10px_-10px_rgba(50_50_73_0.3] rounded-[10px] will-change-transform",
                )}
                style={{
                  transform: interpolate([rot, scale], trans),
                }}
              >
                {renderItem({
                  item: items[i],
                  isOnTop: true,
                })}
                <animated.svg
                  className={cn("tinder-icon reject")}
                  style={{
                    opacity: interpolate([x, y], (x, y) => `${x / -80} `),
                    transform: interpolate(
                      [x, scale],
                      (x, scale) =>
                        `translate(${x / 10}px, -50%) scale(${
                          x > -140 ? x / -80 : 1.6
                        })`,
                    ),
                  }}
                  viewBox="0 0 96 96"
                >
                  <path d="M19.716 69.213C17.763 71.165 17.763 74.331 19.716 76.284C21.668 78.237 24.834 78.237 26.787 76.284L48.000 55.071L69.213 76.284C71.166 78.237 74.332 78.237 76.284 76.284C78.237 74.332 78.237 71.166 76.284 69.213L55.071 48.000L76.284 26.787C78.237 24.834 78.237 21.668 76.284 19.715C74.332 17.763 71.166 17.763 69.213 19.715L48.000 40.929L26.787 19.716C24.834 17.763 21.668 17.763 19.716 19.716C17.763 21.668 17.763 24.834 19.716 26.787L40.929 48.000L19.716 69.213Z"></path>
                </animated.svg>
                <animated.svg
                  className="tinder-icon interest"
                  style={{
                    opacity: interpolate([x, y], (x, y) => `${x / 80} `),
                    transform: interpolate(
                      [x, scale],
                      (x, scale) =>
                        `translate(${x / 10}px, -50%) scale(${x < 140 ? x / 80 : 1.6})`,
                    ),
                  }}
                  viewBox="0 0 96 96"
                >
                  <path d="M68.661 15.923C59.769 15.923 53.384 20.706 48.445 29.217C48.248 29.556 47.752 29.556 47.555 29.217C42.616 20.706 36.231 15.923 27.339 15.923C15.597 15.923 6 25.858 6 38.165C6 59.802 35.672 79.763 45.136 85.580C46.905 86.667 49.095 86.667 50.864 85.580C60.328 79.766 90 59.819 90 38.278C90 25.858 80.403 15.923 68.661 15.923Z"></path>
                </animated.svg>
              </animated.div>
            </animated.div>
          ),
      )}
    </div>
  );
}
