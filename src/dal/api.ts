export type TaskDetailsData = {
    id: string,
    type: string,
    attributes: {
        title: string,
        description: string | null,
        boardId: string,
        boardTitle: string,
        order: number,
        status: 0 | 1 | 2 | 3,
        priority: 0 | 1 | 2 | 3 | 4,
        startDate: string | null,
        deadline: string,
        addedAt: string,
        updatedAt: string,
        attachments: Array<string>
    }
}

type GetTaskOutput = {
    data: TaskDetailsData
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if(!apiKey) return undefined

    return {
        'api-key': apiKey
    }
}

export const getTask = (taskId: string, boardId: string) => {
   const promise: Promise<GetTaskOutput> =  fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
       headers: prepareHeaders()
    }).then(res => res.json())

    return promise;
}

type GlobalTaskListItemDto = {
    id: string,
    title: string,
    boardId: string,
    // status: 0 | 1 | 2 | 3,
    status: number,
    priority: 0 | 1 | 2 | 3 | 4,
    addedAt: string,
    attachmentsCount: number
}

export type GlobalTaskListItemJsonApiData = {
    id: string,
    type: string,
    attributes: GlobalTaskListItemDto,
}

type GlobalTaskListResponse  = {
    data: Array<GlobalTaskListItemJsonApiData>
}

export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise;
}