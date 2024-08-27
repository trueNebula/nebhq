import { cubicBezier } from "framer-motion";

const defaults = {
  mobileScreen: false,
  sizeScale: 1,
  gapScale: 1,
  gapEnd: 1,
  xTransformScale: 1,
  xTransformScaleStart: 1,
  yTransformScale: 6.2 / 6,
  scrollOffsetScale: 1,
  heroHeight: 75,
  disableMouseEffects: false,
  linkOffset: 0,
  anchorWidthEnd: 75,
  anchorMargin: 16.75,
  anchorEasingX: cubicBezier(0, 0.33, 0.33, 1),
  anchorEasingY: cubicBezier(0.69, 0.33, 1, 0.3),
}

const small = {
  mobileScreen: true,
  sizeScale: 0.2,
  gapScale: 0.02,
  gapEnd: 0.52,
  xTransformScale: 11 / 10,
  xTransformScaleStart: 0,
  yTransformScale: 7.7 / 6,
  scrollOffsetScale: 1 / 5,
  heroHeight: 85,
  disableMouseEffects: true,
  linkOffset: -200,
  anchorWidthEnd: 40,
  anchorMargin: 16.75,
  anchorEasingX: cubicBezier(0, 0.17, 0.77, 1),
  anchorEasingY: cubicBezier(0.69, 0.33, 0.69, 0.33),
}

const mobile = {
  mobileScreen: true,
  sizeScale: 0.35,
  gapScale: 0.2,
  gapEnd: 3,
  xTransformScale: 11 / 10,
  xTransformScaleStart: 1,
  yTransformScale: 6.1 / 6,
  scrollOffsetScale: 1 / 5,
  heroHeight: 75,
  disableMouseEffects: true,
  linkOffset: -200,
  anchorWidthEnd: 60,
  anchorMargin: 3.75,
  anchorEasingX: cubicBezier(0, 0.17, 0.77, 1),
  anchorEasingY: cubicBezier(0.69, 0.33, 0.69, 0.33),
}

const tablet = {
  mobileScreen: true,
  sizeScale: 0.5,
  gapScale: 0.45,
  gapEnd: 3,
  xTransformScale: 11 / 10,
  xTransformScaleStart: 1,
  yTransformScale: 6.1 / 6,
  scrollOffsetScale: 1 / 5,
  heroHeight: 75,
  disableMouseEffects: true,
  linkOffset: -200,
  anchorWidthEnd: 60,
  anchorMargin: 5.75,
  anchorEasingX: cubicBezier(0, 0.17, 0.77, 1),
  anchorEasingY: cubicBezier(0.69, 0.33, 0.69, 0.33),
}

const smallDestop = {
  mobileScreen: true,
  sizeScale: 0.65,
  gapScale: 0.65,
  gapEnd: 3,
  xTransformScale: 12 / 10,
  xTransformScaleStart: 1,
  yTransformScale: 6 / 6,
  scrollOffsetScale: 1 / 5,
  heroHeight: 75,
  disableMouseEffects: true,
  linkOffset: -200,
  anchorWidthEnd: 60,
  anchorMargin: 4.75,
  anchorEasingX: cubicBezier(0, 0.17, 0.77, 1),
  anchorEasingY: cubicBezier(0.69, 0.33, 0.69, 0.33),
}

const twoK = {
  mobileScreen: false,
  sizeScale: 0.7,
  gapScale: 0.8,
  gapEnd: 3,
  xTransformScale: 1,
  xTransformScaleStart: 1,
  yTransformScale: 4.8 / 6,
  scrollOffsetScale: 1,
  heroHeight: 125,
  disableMouseEffects: false,
  linkOffset: 0,
  anchorWidthEnd: 75,
  anchorMargin: 16.75,
  anchorEasingX: cubicBezier(0, 0.33, 0.33, 1),
  anchorEasingY: cubicBezier(0.69, 0.33, 1, 0.3),
}

const fourK = {
  mobileScreen: false,
  sizeScale: 0.7,
  gapScale: 0.8,
  gapEnd: 3,
  xTransformScale: 1,
  xTransformScaleStart: 1,
  yTransformScale: 4.3 / 6,
  scrollOffsetScale: 1,
  heroHeight: 175,
  disableMouseEffects: false,
  linkOffset: 0,
  anchorWidthEnd: 75,
  anchorMargin: 16.75,
  anchorEasingX: cubicBezier(0, 0.33, 0.33, 1),
  anchorEasingY: cubicBezier(0.69, 0.33, 1, 0.3),
}

type settingsType = {
  mobileScreen: boolean,
  sizeScale: number,
  gapScale: number,
  gapEnd: number,
  xTransformScale: number,
  xTransformScaleStart: number,
  yTransformScale: number,
  scrollOffsetScale: number,
  heroHeight: number,
  disableMouseEffects: boolean,
  linkOffset: number,
  anchorWidthEnd: number,
  anchorMargin: number,
  anchorEasingX: (t: number) => number,
  anchorEasingY: (t: number) => number,
}

export const settings: { [key: string]: settingsType } = {
  'small': small,
  'mobile': mobile,
  'tablet': tablet,
  'smallDesktop': smallDestop,
  'desktop': defaults,
  'twoK': twoK,
  'fourK': fourK,
}

export const separatorRanges: { [key: string]: [number[], number[]] } = {
  'small': [
    [0.33, 0.40],
    [0.53, 0.60],
  ],
  'mobile': [
    [0.29, 0.34],
    [0.53, 0.58],
  ],
  'tablet': [
    [0.32, 0.39],
    [0.45, 0.53],
  ],
  'smallDesktop': [
    [0.25, 0.45],
    [0.45, 0.54],
  ],
  'desktop': [
    [0.25, 0.45],
    [0.45, 0.54],
  ],
  'twoK': [
    [0.30, 0.45],
    [0.45, 0.54],
  ],
  'fourK': [
    [0.25, 0.45],
    [0.45, 0.54],
  ],
}

export const separatorTransfoms: [string[], string[]] = [
  ['0rem', '-64rem'],
  ['100vw', '0vw'],
]

export const iconSizes = {

}