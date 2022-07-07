export interface BaseResponse {
  status: number;
  body: unknown;
  header?: Record<string, unknown>;
}
