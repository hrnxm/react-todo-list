import uid from '../types/uid';

export enum ActionType {
    Add = 'Add',
    ToggleCheck = 'ToggleCheck',
    Remove = 'Remove',
}

type Action =
    | { type: ActionType.Add; text: string }
    | { type: ActionType.ToggleCheck; id: uid }
    | { type: ActionType.Remove; id: uid };

export default Action;
