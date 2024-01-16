export enum CodeExecutorSandboxType {
    NO_OP = 'NO_OP',
    ISOLATE = 'ISOLATE',
}

export type CodeModule = {
    code(input: unknown): Promise<unknown>
}

export type CodeExecutorSandbox = {
    run(params: RunParams): Promise<unknown>
}

type RunParams = {
    codeModule: CodeModule
    inputs: Record<string, unknown>
}
