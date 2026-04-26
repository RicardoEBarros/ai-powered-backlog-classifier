import { createRandomObject } from "@/tests/mocks/random-values.js";
import { PinoAdapterMock } from "./pino-adapter-mock.js";
import { PinoAdapter } from "@/src/adapters/pino-adapter.js";
import { SystemWorkspaces } from "@ai-powered-backlog-classifier/shared";
import { getRandomSystemaWorkspacesMock } from "@/tests/mocks/random-system-workspaces-mock.js";

interface SutTypes {
    options: Record<string, any>
    sut: PinoAdapter
}

export const makePinoAdapter = (name: SystemWorkspaces = getRandomSystemaWorkspacesMock()): SutTypes => {
    const options = createRandomObject();
    const sut = new PinoAdapterMock(name)
    return {
        sut,
        options
    }
}