const requestStatusConsts = ['idle', 'loading', 'success', 'error'] as const;

type RequestStatus = typeof requestStatusConsts[number];
type RequestError = string | undefined | null;

export type { RequestStatus, RequestError };
