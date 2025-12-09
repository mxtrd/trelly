import {TasksList} from "./ui/TasksList.tsx";
import {TaskDetails} from "./ui/TaskDetails.tsx";
import { useTaskSelection } from "./bll/useTaskSelection.ts";
import styles from "./MainPage.module.css";

export function MainPage () {

    const {taskId,setTaskId,boardId,setBoardId} = useTaskSelection();

    const handleTaskSelect = (taskId:string | null, boardId:string | null): void => {
        setTaskId(taskId)
        setBoardId(boardId)
    }

    return (
        <div>
            {/*<div style={{display: "flex", gap: "30px"}}>*/}
            <div className={styles.container}>
                <TasksList
                    selectedTaskId={taskId}
                    // selectedBoardId={boardId}
                    onTaskSelect={handleTaskSelect}
                />
                <TaskDetails
                    taskId={taskId}
                    boardId={boardId}
                />
            </div>
        </div>
    )
}