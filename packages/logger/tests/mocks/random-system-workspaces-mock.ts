import { SystemWorkspacesOptions } from "@ai-powered-backlog-classifier/shared";
import { faker } from "@faker-js/faker";

export const getRandomSystemaWorkspacesMock = (): SystemWorkspacesOptions => {
    const systemWorkspacesKeys = Object.keys(SystemWorkspacesOptions)
    const systemWorkspacesSelected = faker.helpers.arrayElement(systemWorkspacesKeys) as SystemWorkspacesOptions
    return SystemWorkspacesOptions[systemWorkspacesSelected]
}