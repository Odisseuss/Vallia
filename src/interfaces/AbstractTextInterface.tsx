export default interface AbstractTextInterface {
  readonly color?: string;
  readonly fontSize?: string;
  readonly lineHeight?: string;
  readonly fontWeight?: string;
  readonly margin?: string;
  readonly textTransform?: string;
  readonly fontColor?: string;
  readonly padding?: string;
  readonly uppercase?: boolean;
  readonly width?: string;
  readonly textAlign?: "left" | "right" | "center" | "justify";
}
