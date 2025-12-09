import {TaskItem} from "./TaskItem.tsx";
import { useTasks } from "../bll/useTasks.ts";

type Props = {
    selectedTaskId: string | null,
    // selectedBoardId: string | null,
    onTaskSelect: (taskId: string | null, boardId: string | null) => void
}

// export function TasksList({selectedTaskId, selectedBoardId, onTaskSelect}: Props) {
export function TasksList({selectedTaskId, onTaskSelect}: Props) {

    const {tasks} = useTasks();


    if (tasks === null) {
        return (
            <h1>Загрузка...</h1>
        )
    }

    if (tasks.length === 0) {
        return (
            <h1>Задачи отсутствуют</h1>
        )
    }

    const handleResetClick = () => {
        onTaskSelect?.(null, null)
    }

    //task и board взялись с taskitem - там функция onClick отдает назад
    const handleClick = (taskId: string, boardId: string) => {
        onTaskSelect?.(taskId, boardId)
    }

    return (
        <div>
            <button onClick={handleResetClick}>reset</button>
            <ul>
                {
                    tasks.map((task) => {
                        return (

                            <TaskItem
                                key={task.id}
                                task={task}
                                isSelected={task.id === selectedTaskId}
                                onSelect={handleClick}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}