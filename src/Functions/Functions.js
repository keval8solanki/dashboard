export function sortedList(tasksArray) {
    for (let i = 0; i < tasksArray.length; i++) {
        for (let j = i; j < tasksArray.length; j++) {
            if (tasksArray[i].priority > tasksArray[j].priority) {
                let temp = tasksArray[j]
                tasksArray[j] = tasksArray[i]
                tasksArray[i] = temp;
            }
        }
    }
    return tasksArray
}


export function priorityColor(task) {
    if (task.priority === 1) {
        return '#e57373';
    } else if (task.priority === 2) {
        return '#ffb74d';
    } else if (task.priority === 3) {
        return '#81c784';
    }
}

export function scoreCalculator(state, object, key) {
    function scoreHelper(high, mid, low) {
        if (object.priority === 1) {
            return high
        } else if (object.priority === 2) {
            return mid
        } else if (object.priority === 3)
            return low;
    }
    if (key === '+') {
        return scoreHelper(3, 2, 1)
    } else {
        if (state.score === 3) {
            return scoreHelper(3, 2, 1)
        } else if (state.score === 2) {
            return scoreHelper(2, 2, 1)
        } else if (state.score === 1) {
            return scoreHelper(1, 1, 1)
        } else if (state.score === 0) {
            return scoreHelper(0, 0, 0)
        }
    }

}



export function getCurrentDate() {
    let date = new Date().toDateString().split(' ')
    date.shift();
    return date.join('-');
}

export function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e)
    }
}

export function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}
