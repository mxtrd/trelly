import {useEffect, useState} from "react";
import {getTask, type TaskDetailsData} from "../dal/api.ts";

export function useTaskDetails(taskId: string | null, boardId: string | null) {
    const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null)

    useEffect(() => {

        if (!taskId || !boardId) {
            setTaskDetails(null)
            return
        }

        getTask(taskId, boardId).then(json => setTaskDetails(json.data))
    }, [boardId, taskId]);

    return {taskDetails}
}